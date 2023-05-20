import { useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Helmet } from "react-helmet";

const ToyDetails = () => {
  const toy = useLoaderData();
  const {
    photo,
    toyName,
    sellerName,
    sellerEmail,
    subCategory,
    price,
    rating,
    quantity,
    description,
  } = toy;
  const pageTitle = `${toyName}`;

  return (
    <div className="grid grid-cols-1 gap-6 my-8 md:grid-cols-2">
      <Helmet>
        <title>{`${pageTitle} - Toy Groove`}</title>
      </Helmet>
      <img className="w-full h-full rounded-lg" src={photo} alt="" />
      <div className="p-5 space-y-4 border-2 border-gray-400 rounded-lg">
        <h3 className="text-xl font-semibold">Toy Name: {toyName}</h3>
        <p>Seller: {sellerName}</p>
        <p>Seller email: {sellerEmail}</p>
        <p>SubCategory: {subCategory}</p>
        <p>Price: ${price}</p>
        <div className="flex items-center gap-2 my-auto">Rating: <Rating className='' style={{ maxWidth: 150 }} value={rating} readOnly /></div>
        <p>Quantity: {quantity}</p>
        <p>Description: {description}</p>
      </div>
    </div>
  );
};

export default ToyDetails;
