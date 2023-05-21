import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const ToyTable = ({ toy }) => {
  const { _id, sellerName, toyName, subCategory, price, quantity } = toy;
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
    <tr>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/toy/${_id}`}>
          <button onClick={() =>handleWarning(_id)} className="px-3 py-2 text-yellow-600 hover:text-yellow-700 border-yellow-600 border rounded-lg">
            View Details
          </button>
          <Toaster />
        </Link>
      </td>
    </tr>
  );
};

export default ToyTable;
