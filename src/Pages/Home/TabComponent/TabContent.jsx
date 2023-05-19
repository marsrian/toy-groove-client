import { useEffect, useState } from "react";
import CateGoryToys from "./CateGoryToys";

const TabContent = ({ activeTab }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/allToysByCategory/${activeTab}`);
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [activeTab]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {categories.map((category) => <CateGoryToys
          key={category._id}
          category={category}
        ></CateGoryToys>)}
      </div>
    </div>
  );
};


export default TabContent;