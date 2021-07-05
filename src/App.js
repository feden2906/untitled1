import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "./commponents/users/Users";
import AllPosts from "./commponents/allposts/AllPosts";

function App() {
    return (
        <div>
            <Router>
                <Link to={'/users'}>User</Link>

                <Switch>
                    <Route exact path={'/users'} component={Users}/>
                    <Route to={'/user/:id/allposts'} component={AllPosts}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
