import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
    state = {
        currentPath: '',
        view: 'expand'
    }

    handleViewChange = (e) => {
        this.setState({
            ...this.state,
            view: e.target.value
        })
    }

    updatingCurrentPath = (value) => {
        this.setState({
            currentPath: window.location.pathname
        });
    }

    componentDidMount = () => {
        this.updatingCurrentPath('called from mount');
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(prevState);
        // console.log(this.state);
        if (prevState.current !== this.state.currentPath) {
            // this.updatingCurrentPath('called from mount');
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Navbar</Link>
                        <ul className="navbar-nav flex-row">
                            <li className="mt-1 mx-2">
                                <select
                                    className="form-select form-select-sm"
                                    aria-label=".form-select-sm example"
                                    value={this.state.view}
                                    onChange={this.handleViewChange}
                                >
                                    <option value="expand">Expanded View</option>
                                    <option value="compact">Compact View</option>
                                </select>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <Link className="nav-link" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Profile
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><p className="dropdown-item">Hello, User</p></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/sign-in">Sign In/Sign Up</Link></li>
                                    <li><Link className="dropdown-item" to="#">Orders</Link></li>
                                    {/* <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li> */}
                                </ul>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className={this.state.currentPath.includes('cart') ? 'nav-link active' : 'nav-link'} to="/cart">Cart</Link>
                            </li>

                        </ul>
                    </div>
                </nav >
            </div >
        )
    }
}