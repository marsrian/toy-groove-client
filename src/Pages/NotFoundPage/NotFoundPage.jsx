import { useNavigate } from 'react-router-dom';
import NotFoundPhoto from '../../assets/NotFound.gif';
import { FaArrowLeft } from 'react-icons/fa';

const NotFoundPage = () => {
    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate("/");
    }

    return (
        <div>
            <img className='h-72 w-72 mx-auto' src={NotFoundPhoto} alt="" />
            <h3 className="text-4xl font-bold text-center mt-4 text-red-500">404</h3>
            <h5 className="mt-3 text-center text-gray-600 text-xl font-medium">This Page is Not Found</h5>
            <p onClick={handleNavigate} className='text-center center flex items-center justify-center gap-2 cursor-pointer mt-3'><FaArrowLeft></FaArrowLeft> Go Back to Home</p>
        </div>
    );
};

export default NotFoundPage;