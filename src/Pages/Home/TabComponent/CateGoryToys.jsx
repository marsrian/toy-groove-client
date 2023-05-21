import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const CateGoryToys = ({category}) => {
    const {_id, toyName, photo, price, rating} = category;
    const {user} = useContext(AuthContext);

    const handleWarning = () =>{
        if(!user){
            toast.error(
                "You have to log in first to view details", 
                {duration: 5000}
            )
        }
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-gray-400 rounded-lg p-5 gap-4">
            <img className='w-full md:w-60 h-60' src={photo} alt="" />
            <div className='space-y-5'>
                <h3 className="text-xl font-semibold">{toyName}</h3>
                <p>Price: ${price}</p>
                <div className="flex items-center my-auto gap-2">Rating: <Rating className='' style={{ maxWidth: 150 }} value={rating} readOnly /></div>
                <Link to={`/toy/${_id}`}>
                    <button onClick={() =>handleWarning(_id)} className='px-3 py-2 bg-emerald-400 text-white font-medium text-lg rounded-lg hover:bg-emerald-600 mt-7'>View Details</button>
                </Link>
                <Toaster />
            </div>
        </div>
    );
};

export default CateGoryToys;