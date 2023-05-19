import { useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ToyDetails = () => {
  const toy = useLoaderData();
  const {
    photo,
    toyName,
    sellerName,
    subCategory,
    price,
    rating,
    quantity,
    description,
  } = toy;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <img className="w-full h-full" src={photo} alt="" />
      <div className="border-2 border-gray-400 p-5 space-y-4 rounded-lg">
        <h3 className="text-xl font-semibold">Toy Name: {toyName}</h3>
        <p>Seller: {sellerName}</p>
        <p>SubCategory: {subCategory}</p>
        <p>Price: ${price}</p>
        <p className="flex items-center my-auto gap-2">Rating: <Rating className='' style={{ maxWidth: 150 }} value={rating} readOnly /></p>
        <p>Quantity: {quantity}</p>
        <p>Description: {description}</p>
      </div>
    </div>
  );
};

export default ToyDetails;
