import logo from './logo.svg';
import './scss/app.scss';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
