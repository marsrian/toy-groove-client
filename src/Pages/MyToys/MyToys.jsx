import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToysTable from "./MyToysTable";
import { Helmet } from "react-helmet";
import Select from "react-select";

const options = [
  { value: "Price-Ascending", label: "Ascending" },
  { value: "Price-Descending", label: "Descending" },
];

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [control, setControl] = useState(false);
  const pageTitle = "My Toys";
  const [selectedOption, setSelectOption] = useState(options[0]);

  useEffect(() => {
    <Helmet>
      <title>{pageTitle} - Toy Groove</title>
    </Helmet>;
    const [value, type] = selectedOption.value
      .split("-")
      .map((item) => item.toLocaleLowerCase());
    fetch(
      `https://toy-marketplace-server-puce.vercel.app/myToy?email=${user?.email}&value=${value}&type=${type}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user, control, selectedOption, pageTitle]);

  return (
    <div>
      <Helmet>
        <title>{`${pageTitle} - Toy Groove`}</title>
      </Helmet>
      <h1 className="mb-8 text-2xl italic font-bold text-center md:text-4xl">
        My All Toys
      </h1>
      <div className="h-4 mx-auto mt-5 text-lg font-semibold w-60">
        <Select
          defaultValue={options[0]}
          onChange={setSelectOption}
          options={options}
        ></Select>
      </div>
      <div className="mt-12 overflow-x-auto">
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
