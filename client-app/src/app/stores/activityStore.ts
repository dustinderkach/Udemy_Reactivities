import {observable, action, makeAutoObservable} from 'mobx';
import { createContext } from 'react';
import agent from '../api/agent';
import { IActivity } from '../models/activity';

 


class ActivityStore{
    //@observable
    activities: IActivity[] = [];
    loadingInitial = false;

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

    
    constructor() {
        makeAutoObservable(this)
    }
}

export default createContext(new ActivityStore())