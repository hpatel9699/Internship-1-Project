import { FaGoogle, FaFacebookF, FaEnvelope, FaLock } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-cyan-50">
   
      <main className="flex flex-col items-center justify-center w-full flex-1 px-50 text-center">
       
       {/*Company Logo Div*/}
        {/* <div className='flex p-3 m-3 '>
          Company Logo
        </div> */}

        <div className="bg-white rounded-2xl shadow-2xl flex max-w-4xl">
          <div className='p-8'>
            <div className=''>
              <h2 className='font-bold text-blue-900 mb-5 text-4xl'>
                Login in to Account
              </h2>
              <div className='bg-blue-900 border-2 w-4 border-blue-900 inline-block mb-2'></div>
              <div className='flex justify-center my-2'>
                <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FaFacebookF className='text-l text-blue-600'/>
                </a>
                <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FaGoogle className='text-l text-red-600'/>
                </a>
              </div>
              <p className='text-gray-400 my-3'>or Signin with your email account</p>
              <div className='flex flex-col items-center'>
                <div className='bg-gray-100 w-72 p-3 flex items-center mb-3'>
                  <FaEnvelope className='text-gray-400 mr-2'/>
                  <input type='email' name='email' placeholder='Email' className='bg-gray-100 outline-none text-base flex-2'/>
                </div>
                <div className='bg-gray-100 w-72 p-3 flex items-center mb-3'>
                  <FaLock className='text-gray-400 mr-2'/>
                  <input type='password' name='password' placeholder='Password' className='bg-gray-100 outline-none text-base flex-2'/>
                </div>
                
                <a href="profilepage" className='border-2 text-blue-900 border-blue-800 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-900 hover:text-white'>LOGIN</a>
                <a href="#" className='text-blue-900 my-3 font-base font-bold'>Need to create a new Account ? Register here !!</a>
                
              </div>
            </div>
          </div>
          
        </div>
      </main>

    </div>
  )
}
