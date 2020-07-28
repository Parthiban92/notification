import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Content from './Content';
import {BrowserRouter as Router,Switch,Route,Redirect,Link} from "react-router-dom";

class App extends Component {
  constructor(){

         super();
           
            this.toggle = this.toggle.bind(this);
           
            this.state = {notification: [],length: 3}
           
    }



  componentDidMount() {
   
    fetch('http://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data) => {
      this.setState({ notification: data})
     
    })
    .catch(console.log)
  }

   toggle(e) {
        
          this.setState({ length: this.state.notification.length})
    
    }

 
  render() {

    return (
       <Router>
      <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded">
               <ul className="navbar-nav mr-auto">
                   <li className="nav-item active">
                     <Link  className="nav-link" to='/'> <h4>Notification</h4> </Link>
                  </li>
                      
             </ul>
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown no-arrow mx-1 show">
                      <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fas fa-bell fa-fw"></i>
                          <span className="badge badge-danger badge-counter">{ this.state.notification.length}</span>
                      </a>
            
                    <div className="dropdown-list dropdown-menu notification-content dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                        <h6 className="dropdown-header">Notification Center</h6>
                        {  this.state.notification.filter(n_list => n_list.id <= this.state.length).map(list => (

                            <a className="dropdown-item d-flex align-items-center" href="#">
                              <div className="mr-3">
                                  <div className="icon-circle bg-success">
                                        <i className="fas fa-donate text-white"></i>
                                  </div>
                              </div>
                              <div  style={ {backgroundColor:list.completed ? '#D3D3D3': ''}}>
                                <Link  className="nav-link" to={`/Content/${list.id}`}><div className="small text-gray-500"></div></Link>
                                    {list.title}
                              </div>
                            </a>
                 ))}
                        <a className="dropdown-item text-center small text-gray-500" onClick={this.toggle}>Show All Notification</a>
                     </div>
                </li>
          </ul>
        </nav>
        <div className="jumbotron">
             <div className="container text-center">
               <Switch>
                   <Route exact path="/Content/:id" component={Content}></Route>
               </Switch>
               <p>Notification read will be grey and unread will white</p>
        </div>
      </div>
  
           <footer className="container-fluid text-center">
                  <p>Footer Text</p>
            </footer>
    </div>     
  < /Router>
      );
  
  }
}



export default App;