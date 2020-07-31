import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { Header, Icon } from 'semantic-ui-react'
import { List } from 'semantic-ui-react'
class App extends Component {

  state = {
    values: []

  }
  
  componentDidMount() {
    axios.get('http://localhost:5000/api/values')
    .then((Response) => {
     
      this.setState({ values: Response.data})
    })
/*     this.setState({
      values: [{id: 1, name: 'Value 101'}, {id: 2, name: 'Value 102'}]
    }) */

  }

  render(){
    return (
    <div>
      <Header as='h2' icon>
        <Icon name='users' />
        Reactivities
        <Header.Subheader>
          Just got this here icon
        </Header.Subheader>
      </Header>


      <List>
      {this.state.values.map((value: any) => (
                <List.Item key={value.id}> {value.name}</List.Item>
              ))}
      </List>


        <ul>

          {this.state.values.map((value: any) => (
            <li key={value.id}>{value.name}</li>
          ))}

        </ul>



    </div>
    )
  }


}

export default App;
