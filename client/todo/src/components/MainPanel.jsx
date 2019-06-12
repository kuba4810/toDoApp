import React, { Component } from 'react';
class MainPanel extends Component {
    state = {}
    render() {
        return (
            <div className="mainPage">

                <div className="welcomePanel">
                    <div>


                        <h2 className="text-center">
                            Witaj na stronie !
                        </h2>

                         <h3 className="text-center text-light">
                            Śmiało, zaloguj się !
                        </h3> 
                        
                    </div>
                </div>

            </div>);
    }
}

export default MainPanel;