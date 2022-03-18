import './Navbar.css';
import { useLogout } from '../hooks/useLogout';
import _ from 'lodash';

const Navbar = (props) => {
    const { logout } = useLogout();
    const { setSearchTerm } = props;
    return (
        <nav className="navbar">
            <p>Movies</p>
            {/* <Searchbar /> */}
            <input
                type="text"
                placeholder="Movie Search"
                onChange={_.debounce((e) => setSearchTerm(e.target.value), 1000)}
            />
            <button onClick={logout}>Logout</button>
        </nav>
    );
};

export default Navbar;
