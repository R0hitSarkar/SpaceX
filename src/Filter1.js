import React, {Component} from "react";

class Filter1 extends Component{
    render(){
        const margin={
            margin:"2px",
            fontSize:"2vw"
        }
        const marginAuto={
            textAlign:"center",
            fontSize:"2vw",
            boxShadow:"0px 2px",
            marginBottom:"5px"
        }
        return(
            <React.Fragment>
<div className="container bg-light">
  <div className="row">
    <div className="col col-12" style={margin}>
      Filter
    </div>
  </div>
</div>
<div className="container">
  <div className="row">
    <div className="col-12" style={marginAuto}>
      Launch Year
    </div>
  </div>
</div>
<div className="container">
  <div className="row">
    <div className="col-6">
    <button type="button" className="btn btn-success one" id="b2006" style={margin}>2006</button>
    </div>
    <div className="col-6">
    <button type="button" className="btn btn-success one" id="b2007" style={margin}>2007</button>
    </div>
  </div>
</div>
<div className="container">
  <div className="row">
    <div className="col-6">
    <button type="button" className="btn btn-success one" id="b2008" style={margin}>2008</button>
    </div>
    <div className="col-6">
    <button type="button" className="btn btn-success one" id="b2009" style={margin}>2009</button>
    </div>
  </div>
</div>
<div className="container">
  <div className="row">
    <div className="col-6">
    <button type="button" className="btn btn-success one" id="b2010" style={margin}>2010</button>
    </div>
    <div className="col-6">
    <button type="button" className="btn btn-success one" id="b2011" style={margin}>2011</button>
    </div>
  </div>
</div>
<div className="container">
  <div className="row">
    <div className="col-6">
    <button type="button" className="btn btn-success one" id="b2012" style={margin}>2012</button>
    </div>
    <div class="col-6">
    <button type="button" className="btn btn-success one" id="b2013" style={margin}>2013</button>
    </div>
  </div>
</div>
<div className="container">
  <div className="row">
    <div className="col-6">
    <button type="button" className="btn btn-success one" id="b2014" style={margin}>2014</button>
    </div>
    <div className="col-6">
    <button type="button" className="btn btn-success one" id="b2015" style={margin}>2015</button>
    </div>
  </div>
</div>
<div className="container">
  <div className="row">
    <div className="col-6">
    <button type="button" className="btn btn-success one" id="b2016" style={margin}>2016</button>
    </div>
    <div className="col-6">
    <button type="button" className="btn btn-success one" id="b2017" style={margin}>2017</button>
    </div>
  </div>
</div>
<div className="container">
  <div className="row">
    <div className="col-6">
    <button type="button" className="btn btn-success one" id="b2018" style={margin}>2018</button>
    </div>
    <div className="col-6">
    <button type="button" className="btn btn-success one" id="b2019" style={margin}>2019</button>
    </div>
  </div>
</div>
<div className="container">
  <div className="row">
    <div className="col-6">
    <button type="button" className="btn btn-success one" id="b2020" style={margin}>2020</button>
    </div>
    <div className="col-6">
    </div>
  </div>
</div>
<div className="container">
  <div className="row">
    <div className="col col-12" style={marginAuto}>
      Successful Launch
    </div>
  </div>
</div>
<div className="container">
  <div className="row">
    <div className="col-6">
    <button type="button" className="btn btn-success one" id="true1">True</button>
    </div>
    <div className="col-6">
    <button type="button" className="btn btn-success one" id="false1">False</button>
    </div>
  </div>
</div>
<div className="container">
  <div className="row">
    <div className="col col-12" style={marginAuto}>
      Successful Landing
    </div>
  </div>
</div>
<div className="container">
  <div className="row">
    <div className="col-6">
    <button type="button" className="btn btn-success one" id="true2">True</button>
    </div>
    <div className="col-6">
    <button type="button" className="btn btn-success one" id="false2">False</button>
    </div>
  </div>
</div>
            </React.Fragment>
        );
    }
}

export default Filter1;