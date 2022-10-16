import { Route } from 'react-router-dom';
import Nav from './component/Nav/Nav.jsx';
import Home from './component/Home/Home.jsx';
import Cards from './component/Cards/Cards.jsx';
function App() {
    return (
        <>
            <Nav />
            <Route path="/">
                <Cards />
            </Route>
        </>
    );
}

export default App;
