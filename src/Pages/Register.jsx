import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import UseAuth from "../Hooks/UseAuth";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = UseAuth();
  const navigate = useNavigate();
  const from = location.state || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    e.preventDefault;
    const { email, password } = e;

    setError("");
    setSuccess("");

    if (password.length < 6) {
      setError("password should be 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password should be one UpperCase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setError("Password should be one lowercase letter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const registerUser = result.user;
        console.log(registerUser);
        const user = { email };

        axios
          .post(`${import.meta.env.VITE_API_URL}/jwt`, user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              navigate(from, { replace: true });
              toast.success("Register Successfully");
            }
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error");
      });
  };

  return (
    <section className="p-6 dark:text-gray-800">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate=""
        className="container w-full max-w-xl p-8 mx-auto space-y-3 rounded-md shadow bg-gray-50"
      >
        <h2 className="w-full text-3xl  font-bold leading-tight text-center">
          Please Register
        </h2>
        <div>
          <label htmlFor="name" className="block mb-1 ml-1">
            Name
          </label>
          <input
            {...register("name", { required: true })}
            id="name"
            type="text"
            placeholder="Your name"
            required=""
            className="w-full px-4 py-3 rounded-md border-gray-100 border-[2px] dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
          {errors.name && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 ml-1">
            Email
          </label>
          <input
            {...register("email", { required: true })}
            id="email"
            type="email"
            placeholder="Your email"
            required=""
            className="w-full px-4 py-3 rounded-md border-gray-100 border-[2px] dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
          {errors.email && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div>
          <label htmlFor="text" className="block mb-1 ml-1">
            PhotoURL
          </label>
          <input
            id="text"
            type="text"
            placeholder="Your Photo URL"
            className="w-full px-4 py-3 rounded-md border-gray-100 border-[2px] dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1 ml-1">
            Password
          </label>
          <div className="relative ">
            <input
              {...register("password", { required: true })}
              id="email"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
              required=""
              className="w-full px-4 py-3 rounded-md border-gray-100 border-[2px] dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            <span
              className="absolute mt-4"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </span>
          </div>
          {errors.password && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>

        <div className="flex justify-evenly gap-3">
          <button
            type="submit"
            className="w-60 px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-orange-600 text-white"
          >
            Register
          </button>
          <p className="text-xl font-bold text-center"> or</p>
          <Link to={"/login"}>
            <button className="w-60 px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-orange-600 text-white">
              Login
            </button>
          </Link>
        </div>
        {error && <p className="font-bold text-red-600">{error}</p>}
        {success && <p className="font-bold text-green-500">{success}</p>}
      </form>
    </section>
  );
};

export default Register;
