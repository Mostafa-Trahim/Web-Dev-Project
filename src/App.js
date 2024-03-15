import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
        <Header />

        <div className='app-body'>
          {/* <Sidebar />
          <Feed /> */}
          <LoginPage />
        </div>

     </div>
      
  );
}

export default App;
