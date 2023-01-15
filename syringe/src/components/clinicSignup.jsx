import React, { useState } from "react";
import { Link } from "react-router-dom";
const clinicSignup = () => {
    const [val, setVal] = useState("");
    
 
    return (
    
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-xl mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-slate-200 px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Clinic Sign up</h1>
              <input
                type="text"
                className="block border border-grey-light w-full p-3  rounded mb-4"
                name="clinicname"
                placeholder="Enter Name of the Clinic"
              />
  
  
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="license"
              placeholder="Enter Clinic Registeration Number"
              pattern="[a-zA-Z0-9]*"
              value={val}
              onChange={(e) =>
              setVal((v) => (e.target.validity.valid ? e.target.value : v))}
            />
  
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />
            <div className="flex flex-row">
              <input
                type="password"
                className="block border border-grey-light w-80 p-3 rounded mb-4"
                name="password"
                placeholder="Password"
              />
              <input
                type="password"
                className="block border border-grey-light w-80 ml-5 p-3 rounded mb-4"
                name="confirm_password"
                placeholder="Confirm Password"
              />
            </div>
  
            <input
              type="file"
              className="block w-full text-md text-black mb-5
              file:mr-4 file:py-3  file:px-10
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-300 file:text-violet-700
              hover:file:bg-violet-100"
              name="document"
              placeholder="document"
            />
  
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green bg-sky-200 text-sky-700 hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>
  
            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b ml-1 border-grey-dark text-blue-500"
                href="#"
              >
                Terms of Service and
              </a>
              <a
                className="no-underline px-1 border-b border-grey-dark text-blue-500"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>
  
          <div className="text-grey-dark mt-6">
            Already have an account?
            
            <a
              className="no-underline border-b px-2 border-blue text-blue-500"
              href="/login"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
  )
}

export default clinicSignup