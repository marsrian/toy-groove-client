import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
        to={to}
        className={({ isActive }) => isActive ? "text-white px-3 py-2 bg-emerald-400 hover:bg-emerald-600 rounded-lg" : ""}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;