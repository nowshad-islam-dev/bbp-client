// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from '@/App';
import store from '@/store/store';

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>,
);
