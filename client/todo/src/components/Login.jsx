import React, { Component } from 'react';
class Login extends Component {
    state = {}
    render() {
        return (
            <div>
                <div class="login-dark">

                    <form method="post">
                        <h3 className="text-center text-secondary">
                            Logowanie
                        </h3>
                        <h2 class="sr-only">Login Form</h2>

                        <div class="illustration">
                            <i class="icon ion-ios-locked-outline"></i>
                        </div>

                        <div class="form-group">
                            <input class="form-control" type="text" name="email" placeholder="Login" />
                        </div>

                        <div class="form-group">
                            <input class="form-control" type="password" name="password" placeholder="Password" />
                        </div>

                        <div class="form-group">
                            <button class="btn btn-primary btn-block" type="submit">
                                Loguj
                            </button>
                        </div>
                        <a href="#" class="forgot">Zapomniałeś hasła ?</a>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;