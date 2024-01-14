import './Main.css';
import {
  Outlet, 
} from 'react-router-dom';


export default function Main() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

