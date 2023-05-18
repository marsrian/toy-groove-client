const ToyTable = ({ toy }) => {
    const {sellerName, toyName, subCategory, price, quantity } = toy;
  return (
    <tr>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <button
          
          className="px-3 py-2 text-yellow-600 hover:text-yellow-700"
        >
          View Details
        </button>
      </td>
    </tr>
  );
};

export default ToyTable;
