import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul className="flex justify-between">
                <Link to="/">Home</Link>
                <Link to="">All Toys</Link>
                <Link to="">My Toys</Link>
                <Link to="">Add A Toy</Link>
                <Link to="">HBlog</Link>
                <Link to="/login"><button>Login</button></Link>
        </ul>
        </div>
    );
};

export default Header;