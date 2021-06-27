import React from 'react';
import './add.css'

  
export class Add extends React.Component {
    constructor(props) {
      super(props);
      this.state = { id:'',name: '',age:'' };
    }
  
    handleChangeId = (event) => {
      this.setState({[event.target.name]: event.target.value});
    }
    handleChangeName = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    handleChangeAge = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }


  
    handleSubmit = (event) => {
      alert('A form was submitted: ' + JSON.stringify(this.state));
  
      fetch('http://localhost:8000/pets', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => console.log(data)); 
    event.preventDefault();
  }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
             <label>
            ID:
            <input type="text" className = "add" value={this.state.value} name="id" onChange={this.handleChangeId} />
          </label>

          <label>
            Name:
            <input  className = "add" type="text" value={this.state.value} name="name" onChange={this.handleChangeName} />
          </label>
          <label>
            Age :
            <input  className = "add" type="text" value={this.state.value} name="age" onChange={this.handleChangeAge} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
