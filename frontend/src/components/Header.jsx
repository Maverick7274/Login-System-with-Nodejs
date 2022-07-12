import {FaSignInAlt, FaSignOutAlt, FaUser, FaHome, FaUserPlus, FaPhone, FaInfoCircle} from 'react-icons/fa'

import {Link, NavLink, useNavigate} from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import {logOut, reset} from '../features/auth/authSlice'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)

    const onLogOut = () => {
        dispatch(logOut())
        dispatch(reset())
        navigate('/')
    }

  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>
                LOGO
            </Link>
        </div>
        <ul>
        <li>
            <NavLink to='/'>
                <FaHome/>
                <span className='tabs'>Home</span>
            </NavLink>
        </li>
            {user ? (<li>
            <button className='btn' onClick={onLogOut}>
                <FaSignOutAlt/>
                <span className='tabs logOut'>Logout</span>
            </button>
        </li>
        ) : (
        <>
        <li>
            <NavLink to='/register' >
                <FaUserPlus />
                <span className='tabs'>Sign-Up</span>
            </NavLink>
        </li>
        <li>
            <NavLink to='/login' >
                <FaSignInAlt/>
                <span className='tabs'>Login</span>
            </NavLink>
        </li>
            </>)}
            </ul>
    </header>
  )
}

export default Header