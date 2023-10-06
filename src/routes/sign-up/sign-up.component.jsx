import { useState } from "react";

import {
  createUserDoc,
  creatingUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formField, setFormField] = useState(defFormFields);
  const { displayName, email, password, confirmPassword } = formField;

  const resetForms = () => {
    setFormField(defFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords are not matching");
      return;
    }

    try {
      const { user } = await creatingUserWithEmailAndPassword(email, password);

      await createUserDoc(user, { displayName });
      resetForms();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Cannot create an account, this one already exists");
      } else console.log("error", err.message);
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-[800px]">
      <div className="flex items-center justify-center md:justify-start w-[82%] mt-16 pb-8 mx-auto font-primary text-6xl border-b">
        <h1 className="flex items-start font-primary text-6xl">Sign Up</h1>
      </div>
      <div className="flex flex-col items-center mt-12 w-[400px]">
        <form
          className="flex flex-col justify-center items-center w-full"
          onSubmit={handleSubmit}
        >
          <label className="flex w-[80%] font-primary text-xl">Your Name</label>
          <input
            className="input-style font-secondary text-xl"
            type="text"
            onChange={handleChange}
            name="displayName"
            value={displayName}
            required
          />
          <label className="flex w-[80%] font-primary text-xl">
            Enter Email
          </label>
          <input
            className="input-style font-secondary text-xl"
            type="email"
            onChange={handleChange}
            name="email"
            value={email}
            required
          />
          <label className="flex w-[80%] font-primary text-xl">Password</label>
          <input
            className="input-style font-secondary text-xl"
            type="password"
            onChange={handleChange}
            name="password"
            value={password}
            required
          />
          <label className="flex w-[80%] font-primary text-xl">
            Confirm Password
          </label>
          <input
            className="input-style font-secondary text-xl"
            type="password"
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
            required
          />
          <div className="flex w-[80%] mt-5 items-center justify-around">
            <p className="font-primary text-xl text-red-800">
              Welome to the Mighty!!!
            </p>
            <button
              className="border  rounded-lg py-2 px-5 text-2xl bg-mainColor text-white font-primary hover:bg-white hover:text-mainColor transition"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
