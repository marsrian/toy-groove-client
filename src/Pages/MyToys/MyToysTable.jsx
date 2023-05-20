import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

const MyToysTable = ({myToy}) => {
    const { photo, sellerName, sellerEmail, toyName, subCategory, price, rating, quantity, description } = myToy;
  return (
    <tr>
      <td><img src={photo} alt="" /></td>
      <td>{toyName}</td>
      <td>{sellerName}</td>
      <td>{sellerEmail}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{rating}</td>
      <td>{quantity}</td>
      <td>{description}</td>
      <td>
          <button className="text-yellow-600 hover:text-yellow-700 text-lg px-3 py-2 bg-gray-300 rounded-sm">
            <FaPencilAlt></FaPencilAlt>
          </button>
          <button className="ml-2 text-yellow-600 hover:text-yellow-700 text-lg px-3 py-2 bg-gray-300 rounded-sm">
          <FaTrashAlt></FaTrashAlt>
          </button>
      </td>
    </tr>
  );
};

export default MyToysTable;