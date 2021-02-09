import {observable, action, makeAutoObservable} from 'mobx';
import { createContext } from 'react';
import agent from '../api/agent';
import { IActivity } from '../models/activity';

 


class ActivityStore{
    //@observable
    activities: IActivity[] = [];
    selectedActivity: IActivity | undefined;
    loadingInitial = false;
    editMode = false;

    //@action
    loadActivities = () => {
        this.loadingInitial = true;
        
        agent.Activities.list()
        .then((activities) => {

          activities.forEach(activity => {
            activity.date = activity.date.split('.')[0];
            this.activities.push(activity);
          })
        }).finally(() => this.loadingInitial = false);
    }

    selectActivity = (id: string) => {
      this.selectedActivity = this.activities.find(a => a.id === id);
      this.editMode = false;
    }

    
    constructor() {
        makeAutoObservable(this)
    }
}

export default createContext(new ActivityStore())