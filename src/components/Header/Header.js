import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {user, handelSignOut}=useFirebase()
    return (
        <div className='nav-header'>
                <nav>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/reviews'>Reviews</Link>
            {user?.displayName ? <span>{user.displayName}</span> :<Link to='/register'>Register</Link>}
                {user?.uid? <button onClick={handelSignOut}>Sign Out</button> : <Link to='/login'>Login</Link>}
                </nav>
        </div>
    );
};

export default Header;