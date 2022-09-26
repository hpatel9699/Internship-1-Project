import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/types/user';
import { RegisterDTO } from './register.dto';
import * as bcrypt from 'bcrypt';
import { ChangePasswordDTO, LoginDTO } from 'src/auth/login.dto';
import { Payload } from 'src/types/payload';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(RegisterDTO: RegisterDTO) {
    const { email, password, phone, bio, name } = RegisterDTO;
    const user = await this.userModel.findOne({ email: email });
    if (user) {
      throw new HttpException(
        'user already registered !',
        HttpStatus.BAD_REQUEST,
      );
    }

    const createdUser = new this.userModel();
    createdUser.email = email;
    createdUser.name = name;
    createdUser.phone = phone;
    createdUser.bio = bio;
    createdUser.password = password;

    console.log('Created User Here: ', createdUser);
    await createdUser.save();
    return this.sanitizeUser(createdUser);
  }

  async findByPayload(payload: Payload) {
    const { email } = payload;
    return await this.userModel.findOne({ email });
  }

  async findOrCreateFacebook(profile: any) {
    const user = await this.userModel
      .findOne({ 'facebook.id': profile.id })
      .exec();
    if (user) {
      return user;
    }
    const createdUser = new this.userModel({
      email: profile.emails[0].value,
      name: profile.name.givenName + ' ' + profile.name.familyName,
      Facebook: {
        id: profile.id,
        avatar: profile.photos[0].value,
      },
      password: 'Facebook' + profile.id,
      phone: 'N/A',
      bio: 'N/A',
    });
    return createdUser.save();
  }

  async findByLogin(UserDTO: LoginDTO) {
    const { email, password } = UserDTO;
    const user = await this.userModel.findOne({ email: email });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    if (await bcrypt.compare(password, user.password)) {
      return this.sanitizeUser(user);
    } else {
      throw new HttpException('Invalid Credential', HttpStatus.BAD_REQUEST);
    }
  }
  sanitizeUser(user: User) {
    const sanitized = user.toObject();
    delete sanitized['password'];
    return sanitized;
  }

  async changePassword(UserDTO: ChangePasswordDTO, payload: Payload) {
    const { password, newPassword, confirmPassword } = UserDTO;
    const user = await this.userModel.findOne({ email: payload.email });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    if (!bcrypt.compare(password, user.password)) {
      throw new HttpException(
        'Invalid current Password',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (newPassword !== confirmPassword) {
      throw new HttpException(
        'New password and confirm password does not match',
        HttpStatus.BAD_REQUEST,
      );
    } else {
      user.password = newPassword;
      await user.save();
      return {
        message: 'Password changed successfully',
      };
    }
  }

  async updateProfile(user: User, userData: Partial<User>) {
    const { email, name, phone, bio } = userData;
    const findUser = await this.userModel.findOne({ email: user.email });
    if (!findUser) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    findUser.email = email ? email : findUser.email;
    findUser.name = name ? name : findUser.name;
    findUser.phone = phone ? phone : findUser.phone;
    findUser.bio = bio ? bio : findUser.bio;
    await findUser.save();
    return this.sanitizeUser(findUser);
  }
}
