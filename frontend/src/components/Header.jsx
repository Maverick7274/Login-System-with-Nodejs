import {FaSignInAlt, FaSignOutAlt, FaUser, FaHome, FaUserPlus, FaPhone, FaInfoCircle} from 'react-icons/fa'

import {Link, NavLink} from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>
                LOGO
            </Link>
        </div>
        <ul>
                <li>
                    {/*  */}
                    <NavLink to='/' activeClassName="active-link">
                        <FaHome/>
                        <span className='tabs'>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/register' activeClassName="active-link">
                        <FaUserPlus />
                        <span className='tabs'>Sign-Up</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/login' activeClassName="active-link">
                        <FaSignInAlt/>
                        <span className='tabs'>Login</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/AboutUs' activeClassName="active-link">
                        <FaInfoCircle/>
                        <span className='tabs'>About Us</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/ContactUs' activeClassName="active-link">
                        <FaPhone/>
                        <span className='tabs'>Contact Us</span>
                    </NavLink>
                </li>
            </ul>

    </header>
  )
}

export default Header