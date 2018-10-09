import React from 'react';
import Sidebar from './sidebar';
import SingleEmail from './single-email';
import EmailList from './email-list';
import {BrowserRouter as Router, Route, Switch,  Redirect} from 'react-router-dom';
import './email.css';

export default function Email() {
    return (
      <Router>
        <div className="email">
          <Sidebar />
          <main>
            <Switch>
              <Redirect exact from="/" to="/inbox" />
              <Route exact path="/:folderId" component={EmailList} />
              <SingleEmail folderId="inbox" emailId="1" />
            </Switch>
          </main>
        </div>
      </Router>
    );
}
