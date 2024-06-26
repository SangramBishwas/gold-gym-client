import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Login = () => {
    const { userLogin, googleLogin } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const location = useLocation();
    const from = location.state?.from.pathname || '/'
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password)
        userLogin(email, password)
            .then(() => {
                // console.log(result);
                toast.success('Logged in successfully')
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                toast.error('Invalid email and password')
                console.error(error)
            })
    }
    const handleLoginWithGoogle = () => {
        googleLogin()
        .then(result => {
            const user = result.user;
            const userInfo = {
                name: user?.displayName,
                email: user?.email,
                image: user?.photoURL
            }
            
            axiosPublic.post('/users', userInfo)
                .then(res => {
                    const result = res.data;
                    if (result.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "User created successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        
                    }
                })
                navigate(from, { replace: true })
        })
            .catch(error => console.log(error))
    }

    return (
        <div className="flex flex-col lg:flex-row lg:my-10 w-full justify-center">
            <div className="flex flex-col justify-center bg-blue-600 text-center text-white p-10 w-full lg:w-1/3 mx-auto lg:ml-10 md:mx-0 space-y-3 md:space-y-5">
                <h2 className="font-bold text-xl md:text-3xl">Register To Login</h2>
                <p className="">If you do not have any account First you need to register and then try again</p>
                <Link to="/register" className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Register Now
                </Link >
            </div>
            <form onSubmit={handleLogin} className="w-full lg:w-2/3 bg-gray-100 lg:mr-10 p-10">
                <h2 className="text-center font-bold text-xl md:text-3xl">Log in with</h2>
                <div className="mb-5 max-w-sm mx-auto">
                    <button onClick={handleLoginWithGoogle} className="flex items-center gap-3 bg-white dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-8 py-2.5 my-4">
                        <svg className="w-5 h-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4" />
                            <path d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z" fill="#34A853" />
                            <path d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z" fill="#FBBC04" />
                            <path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z" fill="#EA4335" />
                        </svg>
                        Sign in with Google
                    </button>
                </div>
                <div className="mb-5 max-w-sm mx-auto">
                    -------------------Or--------------------
                </div>
                <div className="mb-5 max-w-sm mx-auto">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" required />
                </div>
                <div className="mb-5 max-w-sm mx-auto">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="max-w-sm mx-auto">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                </div>
            </form>

        </div>
    );
};

export default Login;