import { ConfigProvider } from 'antd';
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
            <Login />
        </ConfigProvider>
  )
}

export default App
