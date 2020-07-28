import React, {Component} from 'react';

export default class Content extends Component {
	 constructor(props){
         super(props);
        this.state = {notify_data: []}

    }

    componentDidMount() {
   
    fetch('http://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data) => {
      this.setState({ notify_data: data })
      // alert(this.state.todos)
      // console.log(this.state.todos)

    })
    .catch(console.log)
  }
    render(){
        return (
        <div className="container-fluid">
                 {this.state.notify_data.filter(notify => this.props.match.params.id==notify.id).map(notify_val => (
                    
                     <p>{notify_val.title}</p> 
                   
                  ))}
        
      </div>
    )}
  }
   