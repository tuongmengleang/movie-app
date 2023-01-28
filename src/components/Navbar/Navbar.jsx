import { Avatar } from '@mui/material';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navbar.scss';

export default function Navbar() {
    const [menus] = useState([
        { name: 'News', path: '/news' },
        { name: 'Movies', path: '/movies' },
        { name: 'Series', path: '/series' },
        { name: 'Cartoons', path: '/cartoons' },
    ])
    return (
        <nav className={`navbar-wrapper`}>
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="Logo" />
                </Link>
                <ul className="navbar-menus">
                    {
                        menus.map((menu, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={menu.path} className={({ isActive }) => isActive ? 'active' : undefined}>
                                        { menu.name }
                                    </NavLink>
                                </li>
                            );
                        })
                    }
                </ul>
                <div className="navbar-action">
                    <button type="button" className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9s-9-4.032-9-9s4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7c0-3.868-3.133-7-7-7c-3.868 0-7 3.132-7 7c0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828l-1.415 1.415l-2.828-2.829l1.414-1.414z"/></svg>
                    </button>
                    <button type="button" className="btn active">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M224.3 173.9c-5.7-9.8-12.5-28.5-12.5-61.9v-7.1c0-46.5-37.3-84.6-83.2-84.9h-.6a83.8 83.8 0 0 0-83.8 84v8c0 33.4-6.8 52.1-12.5 61.9A20.1 20.1 0 0 0 49 204h35.2a44 44 0 0 0 87.6 0H207a20.1 20.1 0 0 0 17.3-30.1ZM128 220a20.1 20.1 0 0 1-19.6-16h39.2a20.1 20.1 0 0 1-19.6 16Zm-72.4-40c10.3-21.6 12.6-48.5 12.6-68v-8A59.7 59.7 0 0 1 128 44h.5c32.7.2 59.3 27.5 59.3 60.9v7.1c0 19.5 2.3 46.4 12.6 68Z"/></svg>
                    </button>
                    <Avatar style={{ marginLeft: '10px' }} src="https://www.musicmundial.com/en/wp-content/uploads/2022/12/BTS-Jungkook-fulfills-one-of-ARMYs-greatest-whims-with-this-video.jpeg" alt="Jeon Jungkook" />
                </div>
            </div>
        </nav>
    );
}