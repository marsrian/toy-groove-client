import { useEffect, useState } from "react";
import ToyTable from "./ToyTable";
import { Helmet } from "react-helmet";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const pageTitle = "All Toys";

  useEffect(() => {
    fetch("https://toy-marketplace-server-puce.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const handleSearch = () => {
    fetch(
      `https://toy-marketplace-server-puce.vercel.app/getToysName/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };

  return (
    <div>
      <Helmet>
        <title>{`${pageTitle} - Toy Groove`}</title>
      </Helmet>
      {/* Search Field */}
      <div className="form-control">
        <div className="flex justify-center input-group">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search…"
            className="w-1/3 input input-bordered"
          />
          <button onClick={handleSearch} className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
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
      <div className="mt-6 overflow-x-auto">
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
