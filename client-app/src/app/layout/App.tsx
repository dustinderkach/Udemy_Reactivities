import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Header, Icon } from 'semantic-ui-react'
import { List } from 'semantic-ui-react'
import { IActivity } from '../models/activity';



const App = () => {

  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {

       axios.get<IActivity[]>('http://localhost:5000/api/activities')
      .then((response) => {
        setActivities(response.data)
      })   
  }, []);

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
        {activities.map((activity) => (
          <List.Item key={activity.id}> {activity.title}</List.Item>
        ))}
      </List>


      <ul>

        {activities.map((value) => (
          <li key={value.id}>{value.title}</li>
        ))}

      </ul>



    </div>
  )



};

export default App;
