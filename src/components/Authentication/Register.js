import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  displayLogin,
  displayRegister,
} from "../../redux/features/auth/authSlice";
import registerbg from "../../assets/registerbh.jpg";

export default function Register() {
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
  return (
    <div className="flex flex-col md:flex-row absolute top-0 z-30 justify-center items-center w-full h-[100vh] bg-gray-700 bg-opacity-50">
      <div className="flex-[0.6] bg-white h-[93vh] hidden  md:flex justify-center items-center">
        <Image
          src={registerbg}
          className="h-[93vh] w-full"
          alt="Login background"
        />
      </div>
      <div className="relative">
        {" "}
        <button
          onClick={() => hideRegisterPage()}
          className="text-white text-5xl
       -top-0 absolute -right-12 border-2 px-2 border-black bg-gray-600"
        >
          ×
        </button>
        {/* login side */}
        <div className="h-[93vh] w-full max-w-md p-4 flex-[0.4] shadow sm:p-8 bg-gray-900 text-white">
          <h2 className="mb-3 text-3xl font-semibold text-center">
            Create a new account
          </h2>
          <p className="text-sm text-center dark:text-gray-400">
            Already have an account?{" "}
            <button onClick={() => showLoginPage()} className="underline">
              Login Here
            </button>
          </p>
          <form
            action=""
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
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="mobile" className="block text-sm">
                  Mobile
                </label>
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder="+8801"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
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
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
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
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
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
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
            </div>
            <button
              type="button"
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
