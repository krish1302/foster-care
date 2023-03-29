import logo from './logo.svg';
import './App.css';
import TopNavbar from './Components/TopNavbar/TopNavbar';
import BottomNavbar from './Components/BottomNavbar/BottomNavbar';
import Introduction from './Components/Introduction/Introduction';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <BottomNavbar />
      <Introduction />
      <Footer />
    </div>
  );
}

export default App;
