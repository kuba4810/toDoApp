import React, { Component } from 'react';
class Register extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <div class="login-dark">

                <form method="post">
                    <h3 className="text-center text-secondary">
                        Rejestracja
                    </h3>
                    <h2 class="sr-only">Login Form</h2>

                    <div class="illustration">
                        <i class="icon ion-ios-locked-outline"></i>
                    </div>

                    <div class="form-group">
                        <input class="form-control" type="text" name="login" placeholder="Login" />
                    </div>

                    <div class="form-group">
                        <input class="form-control" type="email" name="email" placeholder="Email" />
                    </div>

                    <div class="form-group">
                        <input class="form-control" type="password" name="password" placeholder="Hasło" />
                    </div>

                    <div class="form-group">
                        <button class="btn btn-primary btn-block" type="submit">
                            Zarejestruj
                        </button>
                    </div>
                </form>
            </div>
        </div>
        );
    }
}
 
export default Register;