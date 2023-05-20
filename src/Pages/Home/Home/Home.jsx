import { useState } from "react";
import Carousel from "../Carousel/Carousel";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Tab from "../TabComponent/Tab";
import TabContent from "../TabComponent/TabContent";
import Services from "../Services/Services";
import AboutUs from "../AboutUs/AboutUs";
import { Helmet } from "react-helmet";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Ambulance");
  const pageTitle = "Home";

  return (
    <div>
      <Helmet>
        <title>{`${pageTitle} - Toy Groove`}</title>
      </Helmet>
      {/* Carousel Section */}
      <Carousel></Carousel>
      {/* Photo Gallery Section */}
      <div className="mt-12">
        <h1 className="mb-8 text-2xl italic font-bold text-center md:text-4xl">
          🚗Toy Groove Photo Gallery🚕
        </h1>
        <PhotoGallery></PhotoGallery>
      </div>
      {/* Shop Category Section */}
      <div className="px-4 mt-12 md:px-0">
        <h1 className="mb-8 text-2xl italic font-bold text-center md:text-4xl">
          Shop By Category
        </h1>
        <div>
          <div className="flex justify-center gap-6">
            <Tab
              category="Ambulance"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <Tab
              category="Mini Police Car"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <Tab
              category="Bus"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
          <TabContent activeTab={activeTab} />
        </div>
      </div>
      {/* Our Services Section */}
      <Services />
      {/* About Us */}
      <AboutUs />
    </div>
  );
};

export default Home;
