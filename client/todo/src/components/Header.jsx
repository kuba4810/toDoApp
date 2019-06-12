import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
    state = {}
    render() {
        return (

            <div className="header  text-light d-flex justify-content-between align-items-center">


                <Link to={'/'}>
                     <h4>ToDo App</h4>
                </Link>

                <div>
                    <Link to={"/logowanie"} className="ml-2">
                        Logowanie
                    </Link>

                    <Link to={"/rejestracja"} className="ml-2">
                        Rejestracja
                    </Link>
                </div>

            </div>
        );
    }
}

export default Header;