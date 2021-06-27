import React from 'react';


  
export class Edit extends React.Component {
    constructor(props) {
      super(props);
      this.state = { id:this.props.location.state.id,name: '',age:'' };
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
        method: 'PUT',
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
            <input readOnly value={this.props.location.state.id} />
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
  












  
// this.props.location.state.id