import logo from './logo.svg';
import './App.css';

const contanier = <div className='cont'>
<div className='logo'>
<h2>LOGOBAKERY</h2>
</div>
 <div className='link'>
  <div>
<p>Services</p>
<p>Project</p>
<p>About</p>
</div>
</div>
 <div className='button'>
<button>Contact</button>
</div>
</div>

function App() {
  return (
    <div className="App">
     {contanier}
    </div>
  );
}

export default App;
