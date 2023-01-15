import React, { useState } from "react";
import {Link} from 'react-router-dom';

const doctorSignup = () => {
    const [val, setVal] = useState("");

  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div class="container max-w-xl mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-slate-200 px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-8 text-3xl text-center">Doctor Sign up</h1>
          <div class="flex flex-row">
            <input
              type="text"
              class="block border border-grey-light w-80 p-3  rounded mb-4"
              name="firstname"
              placeholder="First Name"
            />

            <input
              type="text"
              class="block border border-grey-light w-80 ml-5 p-3 rounded mb-4"
              name="lastname"
              placeholder="Last Name"
            />
          </div>

          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="license"
            placeholder="Enter your License Number"
            pattern="[0-9]*"
            value={val}
            onChange={(e) =>
            setVal((v) => (e.target.validity.valid ? e.target.value : v))
        }
          />

          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />
          <div class="flex flex-row">
            <input
              type="password"
              class="block border border-grey-light w-80 p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              class="block border border-grey-light w-80 ml-5 p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />
          </div>

          <input
            type="file"
            class="block w-full text-md text-black mb-5
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
            class="w-full text-center py-3 rounded bg-green bg-sky-200 text-sky-700 hover:bg-green-dark focus:outline-none my-1"
          >
            Create Account
          </button>

          <div class="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              class="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service and
            </a>
            <a
              class="no-underline px-1 border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div class="text-grey-dark mt-6">
          Already have an account?
        
          <Link to="/login">Login</Link>
          
        </div>
      </div>
    </div>
  );
};

export default doctorSignup;
