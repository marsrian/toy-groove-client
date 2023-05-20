import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';
import { Helmet } from "react-helmet";

const Login = () => {
  const [error, setError] = useState("");
  const { googleSignIn, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const pageTitle = "Login";

  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSignIn = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginObj = {email, password};
        console.log(loginObj);

    setError("");

    signIn(email, password)
    .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        Swal.fire({
            title: 'Success!',
            text: 'Login Successful',
            icon: 'success',
            confirmButtonText: 'Cool'
          });
        form.reset();
        navigate(from, { replace: true });
    })
    .catch(error =>{
        setError(error.message);
    })
  }

  return (
    <div>
      <Helmet>
        <title>{`${pageTitle} - Toy Groove`}</title>
      </Helmet>
      <form onSubmit={handleSignIn} className="flex flex-col p-4 mx-auto space-y-4 border-2 border-gray-400 rounded-lg md:w-1/2">
        <h3 className="text-2xl font-medium text-center">Login Now</h3>
        <label htmlFor="email">Email</label>
        <input
          className="py-3 pl-4 border-2 rounded-lg"
          type="email"
          name="email"
          id=""
          placeholder="Enter Email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          className="py-3 pl-4 border-2 rounded-lg"
          type="password"
          name="password"
          id=""
          placeholder="Enter Password"
          required
        />
        <input
          className="px-3 py-2 text-lg font-medium text-white rounded-lg bg-emerald-500 hover:bg-emerald-700"
          type="submit"
          value="Login"
        />
        <p className="text-center text-red-400">{error}</p>
        <p className="text-center">
          Do not have an account? Please{" "}
          <Link className="text-blue-500 underline" to="/register">
            Register
          </Link>{" "}
        </p>
      </form>
      <div className="divider">OR</div>
      <button onClick={handleGoogleSignIn} className="flex items-center gap-4 p-3 mx-auto my-auto border-2 border-gray-400 rounded-full">
        <FaGoogle></FaGoogle> Continue With Google
      </button>
    </div>
  );
};

export default Login;
