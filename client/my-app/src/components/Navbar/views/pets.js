import React from 'react';
import './home.css'
import {BootstrapTable, TableHeaderColumn,rowClassNameFormat} from 'react-bootstrap-table';
import { Container, Grid, Header, List } from "semantic-ui-react";
import { Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './pets.css'



export class Pets extends React.Component {
    constructor() {
        super();
        this.state = {
            isFetching: false,
            users: []
        };
    }  
componentDidMount() {
        this.fetchUsers();
        this.timer = setInterval(() => this.fetchUsers(), 5000);
    }
    componentWillUnmount() {
        // console.log('State :' + this.state.users)
        clearInterval(this.timer);
        this.timer = null;
    }


fetchUsersWithFetchAPI = () => {
    console.log("Fetch Started")
    this.setState({...this.state, isFetching: true});
    fetch('http://localhost:8000/pets', {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        //mode: 'same-origin', // no-cors, *cors, same-origin})
        })
        .then(response => response.json())
        .then(users => this.setState({users, isFetching: false}))
        .catch(e => {
            // console.log(e);
            this.setState({...this.state, isFetching: false});
        });
};
fetchUsers = this.fetchUsersWithFetchAPI



    render() {
    console.log( " STATE : " +  JSON.stringify(this.state.users))
    if (this.state.isFetching == false) {
        const apis = this.state.users.map((item, i) => {
            return <tr key={item._id}>  
                <td className="ellipsis">{item.id}</td>
                <td className="ellipsis">{item.name}</td>
                <td className="ellipsis">{item.age}</td>
                <td className="ellipsis">  <Link to= {{pathname:"/edit",state:{id:item.id}
            }} className="btn btn-primary add-btn">Edit Pet</Link> </td>
            </tr> 
        });
        
        

        return <div  >
            <table className='table'>
                <tbody>
                    <tr>
                        <th> Id </th>
                        <th> Name </th>
                        <th> Age</th>
                    </tr>
                    {apis}
                </tbody>
            </table>
            <Link to="/add" className="btn btn-primary add-btn">Add Pet</Link>
        </div>
    } 
    else {
        return <div  >
            <h1>Loading...</h1>
        </div>
    }
}
}




