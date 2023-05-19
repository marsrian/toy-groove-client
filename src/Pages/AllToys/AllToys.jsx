import { useEffect, useState } from "react";
import ToyTable from "./ToyTable";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  return (
    <div>
      {/* Search Field */}
      <div className="form-control">
        <div className="input-group flex justify-center">
          <input
            // onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search…"
            className="input input-bordered w-1/3"
          />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto mt-6">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <ToyTable
                key={toy._id}
                toy={toy}
                toys={toys}
                setToys={setToys}
              ></ToyTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
