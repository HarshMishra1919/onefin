import './App.css';
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import Login from './pages/Login';
import Navbar from './components/Navbar';
import Movies from './pages/Movies';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
    const { authIsReady, user } = useAuthContext();
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="App">
            {authIsReady && (
                <Router>
                    <Switch>
                        <Route exact path="/login">
                            {user && <Redirect to="/" />}
                            {!user && <Login />}
                        </Route>
                        <Route exact path="/">
                            <Navbar setSearchTerm={setSearchTerm} />
                            {user && <Movies searchTerm={searchTerm} />}
                            {!user && <Redirect to="/login" />}
                        </Route>
                    </Switch>
                </Router>
            )}
        </div>
    );
}

export default App;
