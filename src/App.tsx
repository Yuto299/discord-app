import './App.scss';
import Chat from './components/Chat/Chat';
import Login from './components/login/Login';
import Sidebar from './components/sideBar/Sidebar';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useEffect } from 'react';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';

function App() {
  const user = useAppSelector((state) => state.user);
  // console.log(user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      console.log(loginUser); //ログアウトしたらnullになる
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

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
