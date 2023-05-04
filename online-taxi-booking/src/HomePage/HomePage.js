import React from 'react'
import bgimg from '../images/taxi-sys-bg1.jpeg';

import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#" style={{ marginLeft: '8rem' }}>BOOK TAXI</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginLeft: '35rem' }}>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item" style={{ marginRight: '2rem' }}>
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item" style={{ marginRight: '2rem' }}>
                                    <a className="nav-link active" aria-current="page" href="/">About Us</a>
                                </li>
                                <li className="nav-item" style={{ marginRight: '2rem' }}>
                                    <a className="nav-link active" aria-current="page" href="/">Contact Us</a>
                                </li>
                                <li className="nav-item dropdown" style={{ marginRight: '2rem' }}>
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                        Modules
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/login">Login Module</Link></li>
                                        <li><Link className="dropdown-item" to="/register">Register Module</Link></li>
                                        <li><Link className="dropdown-item" to="/user">User Module</Link></li>
                                        <li><Link className="dropdown-item" to="/driver">Driver Module</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='main' style={{ height: '91vh', overflowY: 'hidden',position:'relative', display:'flex', justifyContent:'center',alignItems:'center'}}>
                <img src={bgimg} alt="img" style={{ height: '100%', width: '100%', objectFit: 'cover', position:'absolute'}} />
                <div style={{position:'absolute',zIndex:'10',border:'10px solid yellow', textAlign:'center',color:'white', backgroundColor:'black'}}>
                    <h1 style={{fontSize:'3rem'}}>BOOK TAXI ONLINE</h1>
                    <p>SE Exp 08: Testing</p>
                </div>
            </div>

        </>
    )
}
