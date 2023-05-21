import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const pageTitle = "Add A Toy";

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = parseInt(form.price.value);
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const addObj = {
      photo,
      toyName,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      quantity,
      description,
    };
    console.log(addObj);

    // send data to the server
    fetch("https://toy-marketplace-server-puce.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy Added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="mt-8">
      <Helmet>
        <title>{`${pageTitle} - Toy Groove`}</title>
      </Helmet>
      <form
        onSubmit={handleAddToy}
        className="p-4 mx-auto mb-6 border-2 border-gray-400 rounded-lg md:w-2/3"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="photo">PhotoURL</label>
            <input
              className="py-3 pl-4 border-2 rounded-lg"
              type="text"
              name="photo"
              id=""
              placeholder="Enter PhotoURL"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="toyName">Toy Name</label>
            <input
              className="py-3 pl-4 border-2 rounded-lg"
              type="text"
              name="toyName"
              id=""
              placeholder="Enter Toy Name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="sellerName">Seller Name</label>
            <input
              className="py-3 pl-4 border-2 rounded-lg"
              type="text"
              name="sellerName"
              defaultValue={user?.displayName}
              id=""
              placeholder="Enter Seller Name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="sellerEmail">Seller Email</label>
            <input
              className="py-3 pl-4 border-2 rounded-lg"
              type="email"
              name="sellerEmail"
              defaultValue={user?.email}
              id=""
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="subCategory">SubCategory</label>
            <select
              className="py-3 border-2 rounded-lg"
              name="subCategory"
              id=""
            >
              <option value="Ambulance">Ambulance</option>
              <option value="Mini Police Car">Mini Police Car</option>
              <option value="Bus">Bus</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              className="py-3 pl-4 border-2 rounded-lg"
              type="text"
              name="price"
              id=""
              placeholder="Enter Price"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="rating">Rating</label>
            <input
              className="py-3 pl-4 border-2 rounded-lg"
              type="text"
              name="rating"
              id=""
              placeholder="Enter Rating"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="quantity">Available Quantity</label>
            <input
              className="py-3 pl-4 border-2 rounded-lg"
              type="text"
              name="quantity"
              id=""
              placeholder="Enter Quantity"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description">Detail Description</label>
            <textarea
              className="py-3 pl-4 border-2 rounded-lg"
              name="description"
              id=""
              cols="30"
              rows="10"
              placeholder="Enter Details"
              required
            ></textarea>
          </div>
        </div>
        <input
          className="w-full px-3 py-2 mt-4 text-lg font-medium text-white rounded-lg cursor-pointer bg-emerald-500 hover:bg-emerald-700"
          type="submit"
          value="Add a Toy"
        />
      </form>
    </div>
  );
};

export default AddToy;
