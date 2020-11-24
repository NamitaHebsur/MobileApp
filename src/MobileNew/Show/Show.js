import React  from 'react'
import './Show.css'
import {Link} from 'react-router-dom'


export default class Show extends React.Component {
  constructor(){
      super();
      this.state={
          name:""
      }
  }

  displayProduct =()=>{
      this.setState({
          name:<Child />
      })
  } 
  displayProduct1 =()=>{
      this.setState({
          name:<Child1 />
      })
  } 
  displayProduct2 =()=>{
      this.setState({
          name:<Child2 />
      })
  } 
  displayProduct3 =()=>{
      this.setState({
          name:<Child3 />
      })
  } 
 
 
         render() {
      return (
          <div> 

            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <Link className="navbar-brand" href="#"><b>Mobile Store</b></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Add Mobiles <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/">Show Mobiles</Link>
      </li>
      <li className="nav-item7 active">
        <Link className="nav-link" to="/Home">Logout</Link>
      </li>
    </ul>
  </div>
</nav>  


<div className="container" >
 <div>{this.state.name} </div>
</div>
              <div className="container">
             
         {/* card */}
         <div className="card-deck">
<div className="card" id="c1">
  <img className="showimg" src="ssiphone.jpg" alt="" onClick={this.displayProduct}/>
  
  <div className="card-body">
      <h5>i phone</h5>
  </div>
</div>
<div className="card" id="c1">
<img className="showimg" src="ssamsung.jpg" alt="" onClick={this.displayProduct1}/>
  <div className="card-body">
      <h5>Samsung</h5>
  </div>
</div>
<div className="card" id="c1">
<img className="showimg" src="snokia.jpg" alt="" onClick={this.displayProduct2}/>
  <div className="card-body">
      <h5>Nokia</h5>
  </div>
</div>
<div className="card" id="c1">
<img className="showimg" src="vivo.jpg" alt="" onClick={this.displayProduct3}/>
  <div className="card-body">
      <h5>Vivo V20</h5>
  </div>
</div>
</div>


          </div>
          </div>
      )
  }
}

class Child extends React.Component{
  render(){
      return(
          <div>
             <div className="container">
              <div id="c2" className="card col-md-6">
              <img className="card-img-top" src="ssiphone.jpg" alt="" />
               <div className="card-body">
               <h4 className="card-title">i phone </h4>
               <p className="card-text">
                   Color: Black <br/>
                   RAM: 16GB <br/>
                   Storage:128Gb<br/>
                    </p>
          </div>
          </div>
             </div>
          </div>
         
      )
  }
}
class Child1 extends React.Component{
  render(){
      return(
          <div>
             <div className="container">
              <div id="c2" className="card col-md-6">
              <img className="card-img-top" src="ssamsung.jpg" alt="" />
               <div className="card-body">
               <h4 className="card-title">Samsung</h4>
               <p className="card-text">
                   Color: Grey <br/>
                   RAM: 4GB <br/>
                   Storage:64GB<br/>
                    </p>
          </div>
          </div>
             </div>
          </div>
         
      )
  }
}
class Child2 extends React.Component{
  render(){
      return(
          <div>
             <div className="container">
              <div id="c2" className="card col-md-6">
              <img className="card-img-top" src="snokia.jpg" alt="" />
               <div className="card-body">
               <h4 className="card-title">Nokia</h4>
               <p className="card-text">
                   Color:Fantasy Grey <br/>
                   RAM: 6GB <br/>
                   Storage:128GB<br/>
                    </p>
          </div>
          </div>
             </div>
          </div>
         
      )
  }
}
class Child3 extends React.Component{
  render(){
      return(
          <div>
             <div className="container">
              <div id="c2" className="card col-md-6">
              <img className="card-img-top" src="vivo.jpg" alt="" />
               <div className="card-body">
               <h4 className="card-title">Vivo V20</h4>
               <p className="card-text">
                   Color: Sunset Melody <br/>
                   RAM: 8GB <br/>
                   Storage:128GB<br/>
                    </p>
          </div>
          </div>
             </div>
          </div>
         
      )
  }
}
