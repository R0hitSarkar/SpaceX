import React, {Component} from "react";

class Card1 extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="card">
  <img src={this.props.imgpath} class="card-img-top" alt={this.props.imgpath} />
  <div className="card-body">
    <h5 className="card-title">{this.props.id}</h5>
  </div>
  <div className="container">
    <div className="row">
        <div className="col-6">
             Mission Ids: 
        </div>
        <div className="col-6">
            list Mission Ids
        </div>
    </div>
</div>
<div className="container">
    <div className="row">
        <div className="col-6">
             Launch Year: 
        </div>
        <div className="col-6">
            {this.props.ly}
        </div>
    </div>
</div>
<div className="container">
    <div className="row">
        <div className="col-6">
             Successful Launch: 
        </div>
        <div className="col-6">
            {this.props.slaunch}
        </div>
    </div>
</div>
<div className="container">
    <div className="row">
        <div className="col-6">
             Successful Landing: 
        </div>
        <div className="col-6">
            {this.props.slanding}
        </div>
    </div>
</div>
  <div className="card-body">
  </div>
</div>
            </React.Fragment>
        );
    }
}

export default Card1;