import './App.css';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='SideMenuAndPageContent'>
        <SideBar/>
        <Content/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
