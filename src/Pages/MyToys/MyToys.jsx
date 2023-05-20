import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToysTable from "./MyToysTable";
import { Helmet } from "react-helmet";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const pageTitle = "My Toys";

  useEffect(() => {
    fetch(
      `https://toy-marketplace-server-puce.vercel.app/myToys/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);

  return (
    <div>
      <Helmet>
        <title>{`${pageTitle} - Toy Groove`}</title>
      </Helmet>
      <div className="mt-6 overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Available Quantity</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((myToy) => (
              <MyToysTable
                key={myToy._id}
                myToy={myToy}
                myToys={myToys}
                setMyToys={setMyToys}
              ></MyToysTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
