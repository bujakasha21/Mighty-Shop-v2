import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  GooglePopup,
  signingUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const signinInGoogleUser = async () => {
    await GooglePopup();
  };

  const [formField, setFormField] = useState(defFormFields);
  const { email, password } = formField;

  const resetForms = () => {
    setFormField(defFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signingUserWithEmailAndPassword(email, password);

      resetForms();
    } catch (err) {
      switch (err.code) {
        case "auth/invalid-login-credentials":
          alert("Something is wrong. Check it and try again!");
          break;

        default:
          console.log(err);
      }
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-[700px]">
      <div className="flex items-center justify-center md:justify-start mx-auto mt-16 pb-8 w-[82%] font-primary text-6xl border-b">
        <h1 className="flex items-start font-primary text-6xl">Sign In</h1>
      </div>
      <div className="flex flex-col items-center w-[400px] h-[400px] py-12 mt-12">
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <label className="flex w-[80%] font-primary text-xl">
            Enter Email
          </label>
          <input
            className="input-style font-secondary text-xl w-[80%]"
            type="email"
            onChange={handleChange}
            name="email"
            value={email}
            required
          />
          <label className="flex w-[80%] font-primary text-xl">Password</label>
          <input
            className="input-style font-secondary text-xl w-[80%]"
            type="password"
            onChange={handleChange}
            name="password"
            value={password}
            required
          />
          <div className="flex flex-col md:flex-row justify-around mt-5 w-[50%] md:w-[80%]">
            <button
              className="border rounded-lg mr-10 py-2 px-5 text-2xl bg-mainColor text-white font-primary hover:bg-white hover:text-mainColor transition"
              type="submit"
            >
              Sign In
            </button>
            <button
              className="border rounded-lg text-2xl py-2 px-5 font-primary bg-red-900 hover:bg-white hover:text-mainColor transition"
              onClick={signinInGoogleUser}
              type="submit"
            >
              Google Sign In
            </button>
          </div>
          <p className="mt-6">
            You don't have an account?
            <Link
              className="text-red-600 hover:underline hover:text-red-800"
              to="/sign-up"
            >
              Make sure you get one!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
