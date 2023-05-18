import Carousel from "../Carousel/Carousel";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import TabComponent from "../TabComponent/TabComponent";

const Home = () => {

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
            <div className="mt-12">
                <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 italic">Shop By Category</h1>
                <TabComponent />
            </div>
        </div>
    );
};

export default Home;