import { useState } from "react"; 
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="flex items-center  justify-center gap-5 py-15">
      <div className="mt-20">
        <h1 className=" flex items-center justify-center text-3xl font-bold">
          CAMIOCA
        </h1>
        <p className="flex items-center justify-center text-xl py-2">
          Intelligent Service
        </p>
        <div>
          <p className="flex items-center justify-center mt-6">Welcome back!</p>
          <form className="mt-6 ">
            <h2 className="">Email address</h2>
            <input
              type="text"
              className="w-72 py-2 px-2 bg-gray-200 outline-none rounded text-gray-500 mt-1"
            />

            <h2>Password</h2>
            <div className="relative">
              <input
                type={isPasswordVisible ? "text" : "password"}
                className="w-72 py-2 px-2 bg-gray-200 outline-none rounded text-gray-500 mt-1"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                // bu  password ga bosilganda korinsin bomasa korinmasin degani yani fols i true !
              >
                {isPasswordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>

            <p className="flex items-center mt-6 text-gray-500">
              Use at least 8 characters with 1 number, <br />
              and one special character.
            </p>
          </form>

          <div className="flex items-center justify-center flex-col gap-2">
            <button className="bg-green-500 py-2 px-2 rounded-3xl w-72 mt-4 text-white">
              LOG IN
            </button>
            <p className="text-gray-600">Forgot password?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
