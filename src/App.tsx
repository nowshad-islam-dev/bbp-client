import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import News from './pages/News';
import Candidates from './pages/Candidates';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/candidates" element={<Candidates />} />
                <Route path="/about" element={<About />} />
                {/* Protected Routes */}
                {/* <Route element={<PrivateRoute />}>
                    <Route path="/product" element={<Product />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/category" element={<Category />} />
                </Route> */}

                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
