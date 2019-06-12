import React, { Component } from 'react';
class MainPanel extends Component {
    state = {}
    render() {
        return (
            <div className="mainPage">

                <div className="welcomePanel">
                    <div>


                        <h2 className="text-center">
                            ToDo App
                        </h2>

                         <h2 className="text-center text-light mt-0">
                            <i class="fas fa-tasks"></i>
                            {/* Śmiało, zaloguj się ! */}
                        </h2> 
                        
                    </div>
                </div>

            </div>);
    }
}

export default MainPanel;