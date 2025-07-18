import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import AppRouter from './routes/AppRouter';

function App() {
    return (
        <AppProvider>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </AppProvider>
    );
}

export default App;
