import { Link } from 'react-router-dom';

const ToyTable = ({ toy }) => {
  const { _id, sellerName, toyName, subCategory, price, quantity } = toy;
  return (
    <tr>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/toydetails/${_id}`}>
          <button className="px-3 py-2 text-yellow-600 hover:text-yellow-700">
            View Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default ToyTable;
