import Image from "next/image";
import { useDispatch } from "react-redux";
import registerbg from "../../../public/assets/registerbh.jpg";
import { useFormik } from "formik";
import { displayLogin, displayRegister } from "@/redux/features/auth/authSlice";
import { registerValidate } from "@/utils/validator/formValidator";
import { useState } from "react";

export default function Register() {
  const [disable, setDisable] = useState(false); // to prevent double click of signup button.
  const [message, setMessage] = useState(""); // to show error message;
  const dispatch = useDispatch();
  //   to hide register page
  const hideRegisterPage = () => {
    dispatch(displayRegister(false));
  };
  //   to show login page and hide register page
  const showLoginPage = () => {
    dispatch(displayLogin(true));
    dispatch(displayRegister(false));
  };
  //
  // to get the data from the form using formik
  const onSubmit = async (values) => {
    setMessage("");
    setDisable(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
      }),
    });
    const result = await res?.json();
    setDisable(false);
    if (result.success) {
      dispatch(displayRegister(false));
      dispatch(displayLogin(true));
    }
    setMessage(result.message);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validate: registerValidate,
    onSubmit,
  });
  return (
    <div className="flex flex-col md:flex-row absolute top-0 z-30 justify-center items-center w-full h-[100vh] bg-gray-700 bg-opacity-50">
      <div className="flex-[0.6] bg-white h-[93vh] hidden  md:flex justify-center items-center">
        <Image
          src={registerbg}
          className="h-[93vh] w-full object-contain"
          alt="Login background"
        />
      </div>
      <div className="relative">
        {" "}
        {/* login side */}
        <div className="h-[93vh] overflow-auto w-full max-w-md p-4 flex-[0.4] shadow sm:p-8 bg-gray-900 text-white">
          <button
            onClick={() => hideRegisterPage()}
            className="text-white text-3xl
       top-0 absolute right-0 border-2 px-2 border-black bg-gray-600"
          >
            ×
          </button>
          <h2 className="mb-3 mt-4 md:mt-0 text-3xl font-semibold text-center">
            Create a new account
          </h2>
          <p className="text-sm text-center dark:text-gray-400">
            Already have an account?{" "}
            <button onClick={() => showLoginPage()} className="underline">
              Login Here
            </button>
          </p>
          <form
            onSubmit={formik.handleSubmit}
            className="space-y-8 ng-untouched ng-pristine ng-valid mt-5"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Smith"
                  {...formik.getFieldProps("name")}
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  {...formik.getFieldProps("email")}
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400"
                />
              </div>
              {formik.errors.email && (
                <span className="text-rose-500">{formik.errors.email}</span>
              )}
              {!formik.errors.email && formik.values.email && (
                <span className="text-green-500">Perfect!</span>
              )}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  {...formik.getFieldProps("password")}
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400"
                />
              </div>
              {formik.errors.password && (
                <span className="text-rose-500">{formik.errors.password}</span>
              )}
              {!formik.errors.password && formik.values.password && (
                <span className="text-green-500">Perfect!</span>
              )}
              {/* conf pass */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="confpassword" className="text-sm">
                    Confirm Password
                  </label>
                </div>
                <input
                  type="confpassword"
                  name="confpassword"
                  id="confpassword"
                  {...formik.getFieldProps("cpassword")}
                  placeholder="*****"
                  className=" w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400"
                />
              </div>
              {formik.errors.cpassword && (
                <span className="text-rose-500">{formik.errors.cpassword}</span>
              )}
              {!formik.errors.cpassword && formik.values.cpassword && (
                <span className="text-green-500">Perfect!</span>
              )}
            </div>
            {message && <span className="text-red">{message}</span>}
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-gray-600"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
