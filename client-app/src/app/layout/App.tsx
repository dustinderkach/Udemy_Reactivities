import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Header, Icon } from 'semantic-ui-react'
import { List } from 'semantic-ui-react'
import { IActivity } from '../models/activity';
import { NavBar } from '../../features/nav/NavBar';



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
      <NavBar />


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
