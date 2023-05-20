import { useLoaderData } from 'react-router-dom';
import Swal from "sweetalert2";

const UpdateToy = () => {
    const toy = useLoaderData();
    const { _id, price, quantity, description } = toy;
  
    const handleEventUpdate = (event) => {
      event.preventDefault();
      const form = event.target;
      const price = form.price.value;
      const quantity = form.quantity.value;
      const description = form.description.value;
      const updateObj = { price, quantity, description };
      console.log(updateObj);
  
      fetch(`http://localhost:5000/toys/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateObj),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("updated Event", data);
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: "Success!",
              text: "Event Update successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        });
    };
  
    return (
      <div className="mt-8">
        <form
          onSubmit={handleEventUpdate}
          className="p-4 mx-auto mb-6 border-2 border-gray-400 rounded-lg md:w-2/3"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="price">Price</label>
              <input
                className="py-3 pl-4 border-2 rounded-lg"
                type="number"
                name="price"
                defaultValue={price}
                id=""
                placeholder="Enter Price"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="quantity">Available Quantity</label>
              <input
                className="py-3 pl-4 border-2 rounded-lg"
                type="text"
                name="quantity"
                defaultValue={quantity}
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
                defaultValue={description}
                id=""
                cols="30"
                rows="10"
                placeholder="Enter Details"
                required
              ></textarea>
            </div>
          </div>
          <input
            className="w-full px-3 py-2 mt-4 text-lg font-medium text-white rounded-lg bg-emerald-500 hover:bg-emerald-700"
            type="submit"
            value="Add a Toy"
          />
        </form>
      </div>
    );
  };

export default UpdateToy;