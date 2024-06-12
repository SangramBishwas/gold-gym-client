import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Swal from "sweetalert2";
import toast from "react-hot-toast"; import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { creatUser, updateUserProfile } = useAuth();
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const Register = (data) => {
        const { email, password, name, image } = data;
        console.log(name, email, password, image)
        creatUser(email, password)
            .then(() => {
                // console.log(result.user)
                updateUserProfile(name, image)
                    .then(() => {
                        const userInfo = {
                            name: name,
                            email: email,
                            image: image
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                const result = res.data;
                                console.log(result)
                                if (result.insertedId) {
                                    console.log('User created successfully');
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User created successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })

                    })
                    .catch((error) => console.error(error))
            })
            .catch((error) => {
                toast.error(error)
                console.error(error)
            })
    }

    return (
        <div className="flex flex-col lg:flex-row lg:my-10 w-full justify-center">
            <form onSubmit={handleSubmit(Register)} className="w-full bg-gray-100 lg:w-2/3 bg-base-200 lg:ml-10 p-10">
                <h2 className="text-center font-bold text-xl lg:text-3xl py-5 lg:py-7">Resister Now</h2>
                <div className="grid md:grid-cols-2 md:gap-6 ">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("name", { required: true })} />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>

                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile No.</label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6 ">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  {...register("email", { required: true })} required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type={showPassword ? "text" : "password"} name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("password", {
                            required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z]).+$/
                        })} required />
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute top-3 right-3">{showPassword ?
                            <FaEye /> : <FaEyeSlash />}</span>
                        {errors.password && errors.password.type === "minLength" && (<span>Password must be atleast 6 digit.</span>)}
                        {errors.password && errors.password.type === "pattern" && (<span>Password must be atleast one uppercase and one lowercase letter.</span>)}
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="image" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("image", { required: true })} />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">PhotoURL</label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
            </form>
            <div className="flex flex-col justify-center bg-blue-600 text-center text-white p-10 w-full lg:w-1/3 mx-auto lg:mr-10 md:mx-0 space-y-3 md:space-y-4">
                <h2 className="font-bold text-xl md:text-3xl">Please Login</h2>
                <p>If you have already an account. You can log in your account. </p>
                <Link to="/login" className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Login
                </Link >
            </div>

        </div>
    );
};

export default Register;