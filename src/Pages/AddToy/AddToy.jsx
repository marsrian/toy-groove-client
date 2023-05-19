import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {

    const {user} = useContext(AuthContext)

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
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
    fetch("http://localhost:5000/toys", {
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
    <div>
      <form
        onSubmit={handleAddToy}
        className="border-2 border-gray-400 rounded-lg p-4 md:w-2/3 mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          <div className="flex flex-col">
            <label htmlFor="photo">PhotoURL</label>
            <input
              className="pl-4 py-3 border-2 rounded-lg"
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
              className="pl-4 py-3 border-2 rounded-lg"
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
              className="pl-4 py-3 border-2 rounded-lg"
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
              className="pl-4 py-3 border-2 rounded-lg"
              type="email"
              name="sellerEmail"
              defaultValue={user?.email}
              id=""
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="subCategory">SubCategory</label>
            <input
              className="pl-4 py-3 border-2 rounded-lg"
              type="text"
              name="subCategory"
              id=""
              placeholder="Enter Sub Category"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              className="pl-4 py-3 border-2 rounded-lg"
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
              className="pl-4 py-3 border-2 rounded-lg"
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
              className="pl-4 py-3 border-2 rounded-lg"
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
              className="pl-4 py-3 border-2 rounded-lg"
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
          className="bg-emerald-500 text-lg font-medium px-3 py-2 rounded-lg text-white hover:bg-emerald-700 w-full mt-4"
          type="submit"
          value="Add a Toy"
        />
      </form>
    </div>
  );
};

export default AddToy;
