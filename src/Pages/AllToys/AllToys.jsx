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
      <div className="overflow-x-auto">
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
