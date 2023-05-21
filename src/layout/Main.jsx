import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header />
            <div className="min-h-calc[100vh-284px]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;