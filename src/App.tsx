// import { useSelector } from 'react-redux';
import './App.scss';
import Chat from './components/Chat/Chat';
import Login from './components/login/Login';
import Sidebar from './components/sideBar/Sidebar';

function App() {
  // const user = useSelector((state) => state.user.user)
  const user = null;

  return (
    <div className='App'>
      {user ? (
        <>
          {/* sidebar */}
          <Sidebar />
          {/* Chat */}
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
