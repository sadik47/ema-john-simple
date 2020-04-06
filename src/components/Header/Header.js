import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';

import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useAuth } from '../Login/useAuth';



const usePrevious = value => {
    const prev = useRef();
    useEffect( () => {
        console.log(value);
        prev.current = value;

    }, [value])
    return prev.current;

}

const Header = () => {
    const [count, setCount] = useState(0);
    const previous = usePrevious(count);
    const auth = useAuth();
   
    return (
        <div className="header">
           <h1>Count: {count} previous: {previous} </h1>
           <button onClick={() =>setCount(count+1)}>+</button>
           <button onClick={() =>setCount(count-1)}>-</button>

            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order review</a>
                <a href="/inventory">Manage Inventory</a>
                {
                    auth.user && <span style={{color:'yellow'}}>Welcome {auth.user.name} </span>
                }
                {
                    auth.user ? <a href = "/login">Sign out</a>
                    : <a href = "/login">Sign in</a>
                }
            </nav>
        </div>
    );
};

export default Header;