import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/index.jsx';
import './App.css'
import Login from './pages/Login';

function App() {

  return (
    <ConfigProvider
            theme = {{
                token: {
                    colorPrimary: '#7A83E1'
                }
            }}
        >
            <BrowserRouter>
                <AppRoutes></AppRoutes>
            </BrowserRouter>
        </ConfigProvider>
  )
}

export default App
