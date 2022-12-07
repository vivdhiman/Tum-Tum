import React from "react";
import { Link } from "react-router-dom";

export default class SignUp extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="d-flex align-content-center justify-content-center">
                    <h1 className="mt-5 ">Burgos</h1>
                    <div className="col-sm-6 d-flex justify-content-center border border-dark position-absolute top-50 start-50 translate-middle p-5 rounded-3 flex-column">
                        <form>
                            <p className="fs-4" >Sign Up</p>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control border border-dark "
                                    id="email"
                                    placeholder="Email address" />
                            </div>
                            <div className="mb-3">
                                <input type="password"
                                    className="form-control border border-dark"
                                    id="password"
                                    placeholder="Password"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        <small className="mt-2">Already have an account? <Link to="/sign-in" className="text-decoration-none">Sign In</Link></small>
                    </div>
                </div>
            </div>
        )
    }
}