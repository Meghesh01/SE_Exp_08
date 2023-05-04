import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function user(props) {
    const [selectedOption, setSelectedOption] = useState(props.options[0]);

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    }

    const colorStyles = {
        red: { backgroundColor: 'red', color: 'white' },
        blue: { backgroundColor: 'blue', color: 'white' },
        green: { backgroundColor: 'green', color: 'white' },
        yellow: { backgroundColor: 'yellow', color: 'black' },
    }
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
            <div className="user-part" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '91vh', backgroundColor: 'black', color: 'white' }}>
                <div className='user-container'>
                    <h1>User : Book Taxi</h1>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Source</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Destination</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>

                        <select value={selectedOption} onChange={handleSelectChange}>
                            {props.options.map((option) => (
                                <option key={option.value} value={option.value} style={colorStyles[option.color]}>
                                    {option.label}
                                </option>
                            ))}
                        </select>




                        <button type="submit" class="btn btn-primary" style={{ width: '20rem', marginTop: '2rem' }}>Submit</button>
                    </form>
                </div>

            </div>
        </>
    )
}
