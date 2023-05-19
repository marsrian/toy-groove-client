import { useState } from "react";
import Carousel from "../Carousel/Carousel";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Tab from "../TabComponent/Tab";
import TabContent from "../TabComponent/TabContent";

const Home = () => {
    const [activeTab, setActiveTab] = useState('Ambulance');

    return (
        <div>
            {/* Carousel Section */}
            <Carousel></Carousel>
            {/* Photo Gallery Section */}
            <div className="mt-12">
                <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 italic">🚗Toy Car Photo Gallery🚕</h1>
                <PhotoGallery></PhotoGallery>
            </div>
            {/* Shop Category Section */}
            <div className="mt-12 px-4 md:px-0">
                <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 italic">Shop By Category</h1>
                <div>
                    <div className="flex justify-center gap-6">
                        <Tab category="Ambulance" activeTab={activeTab} setActiveTab={setActiveTab} />
                        <Tab category="Mini Police Car" activeTab={activeTab} setActiveTab={setActiveTab} />
                        <Tab category="Bus" activeTab={activeTab} setActiveTab={setActiveTab} />
                    </div>
                    <TabContent activeTab={activeTab} />
                </div>
            </div>
        </div>
    );
};

export default Home;