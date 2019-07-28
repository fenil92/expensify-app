import React from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpensePageDashBoard from '../components/ExpensePageDashBoard';
import NotFoundPage from '../components/NotFoundPage';

const Header = () => (
    <div>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
    </div>
);

const AppRouter = () => (
    <BrowserRouter>
    <Header/>
        <Switch>        
            <Route path = "/" component={ExpensePageDashBoard} exact={true}/>
            <Route path = "/create" component={AddExpensePage} />
            <Route path = "/edit/:id" component={EditExpensePage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;