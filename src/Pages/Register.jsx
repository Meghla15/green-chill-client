import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import UseAuth from '../Hooks/UseAuth';
import toast from 'react-hot-toast';
import axios from 'axios';

const Register = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { createUser} = UseAuth();
    const navigate = useNavigate();
    const from = location.state || '/';

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
        .then(result =>{
          const registerUser = result.user;
          console.log(registerUser)
          const user = {email}

          axios.post(`${import.meta.env.VITE_API_URL}/jwt`,user, {withCredentials: true})
          .then(res =>{console.log(res.data)
            if(res.data.success){
              navigate(from, {replace: true})
              toast.success('Register Successfully')
            }
          })
        })
        .catch(error =>{
          console.log(error)
          toast.error('Error')
        })
      //  try{
      //   const result = await  createUser(email, password)
         
      //   console.log(result.user)
      //       // const {data} = axios.post(`${import.meta.env.VITE_API_URL}/jwt`,{email : result ?.user?.email},{
      //       //     withCredentials: true
      //       // })
      //       // console.log(data)
      //           navigate(from, {replace : true})
      //       navigate(from, {replace: true})
      //       toast.success('Register Successfully')
      //     }
      //   catch(error){
      //     console.log(error);
      //       toast.error('Error')
           
      //   }
    };
  
    return (
      
        <section className="p-6 dark:text-gray-800">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50"
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
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
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
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
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
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 ml-1">
              Password
            </label>
            <div className="relative">
              <input
                {...register("password", { required: true })}
                id="email"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                required=""
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-blue-00 dark:bg-gray-100"
              />
              <span
                className="absolute"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
            {errors.password && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
  
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-orange-600 text-white"
            >
              Register
            </button>
            <p className="text-xl font-bold text-center"> or</p>
            <Link to={"/login"}>
             
              <button className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-orange-600 text-white">
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