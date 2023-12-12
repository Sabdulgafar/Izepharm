import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {DashBoard} from '../src/pages/DashBoard';

export const Routes = ()=>{
    return{
        <Router>
            <Switch>
                <Route path="/dashboard">
                    <DashBoard />
                </Route>
            </Switch>
        </Router>
    }
}