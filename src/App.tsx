import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Protected Routes */}
                {/* <Route element={<PrivateRoute />}>
                    <Route path="/product" element={<Product />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/category" element={<Category />} />
                </Route> */}

                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
