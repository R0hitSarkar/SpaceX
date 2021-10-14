import React, {Component} from "react";
import Main1 from "./Main1";
import Filter1 from "./Filter1";

class App1 extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="container-fluid">
                    <div class="row">
                        <div className="col-3">
                            <Filter1 />
                        </div>
                        <div className="col-9">
                            <Main1 />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App1;