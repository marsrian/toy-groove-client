import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2';
import { Helmet } from "react-helmet";

const Register = () => {
    const [error, setError] = useState("");
    const {createUser, logOut, updateProfileAndPhoto} = useContext(AuthContext);
    const navigate = useNavigate();
    const pageTitle = "Register";

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const regObj = {name, email, password, photo};
        console.log(regObj);

        setError('');

        if(password.length < 6){
            setError('password must be 6 characters or longer')
        }

        createUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            Swal.fire({
                title: 'Success!',
                text: 'Registration Successful',
                icon: 'success',
                confirmButtonText: 'Cool'
              });
            updateUserData(loggedUser, name, photo)
            form.reset();
            logOut();
            navigate("/login");
        })
        .catch(error => {
            console.log(error.message);
            setError(error.message);
        });
    }

    // set userName and photoURL
  const updateUserData = (user, name, photo) =>{
    updateProfileAndPhoto(user, name, photo)
    .then(() =>{
      console.log('user name update')
    })
    .catch(error => {
      console.log(error.message)
      setError(error.message)
    })
  }

  return (
    <div>
      <Helmet>
        <title>{`${pageTitle} - Toy Groove`}</title>
      </Helmet>
      <form onSubmit={handleRegister} className="flex flex-col p-4 mx-auto space-y-4 border-2 border-gray-400 rounded-lg md:w-1/2">
        <h3 className="text-2xl font-medium text-center">Register Now</h3>
        <label htmlFor="name">Name</label>
        <input
        className="py-3 pl-4 border-2 rounded-lg"
          type="text"
          name="name"
          id=""
          placeholder="Enter Name"
          required
        />
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
        <label htmlFor="photo">PhotoURL</label>
        <input
        className="py-3 pl-4 border-2 rounded-lg"
          type="text"
          name="photo"
          id=""
          placeholder="Enter PhotoURL"
          required
        />
        <input className="px-3 py-2 text-lg font-medium text-white rounded-lg bg-emerald-500 hover:bg-emerald-700" type="submit" value="Register" />
        <p className="text-center text-red-400">{error}</p>
        <p className="text-center">
            Already have an account? Please{" "}
            <Link className="text-blue-500 underline" to="/login">
            Login
            </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Register;
