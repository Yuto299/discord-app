import './App.scss';
import Chat from './components/Chat/Chat';
import Sidebar from './components/sideBar/Sidebar';

function App() {
  return (
    <div className='App'>
      {/* sidebar */}
      <Sidebar />

      {/* Chat */}
      <Chat />
    </div>
  );
}

export default App;
