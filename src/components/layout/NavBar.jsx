import { Link, Outlet } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <>
            <nav>
                <ul style={{ display: "flex", listStyle: "none", gap: "15px" }}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/project">Project</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>

    )

}

export default NavBar;