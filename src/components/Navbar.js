import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import BasicNavbar from '../OldLogic'
import './CustomNav.scss';

function BasicNavbar(){
    return(
      <nav>
        {/* <button id="nav-home" onClick={() => onNavigate('home')}>Home</button>
        <button id="nav-aboutMe" onClick={() => onNavigate('aboutMe')}>Om mig</button> */}
      </nav>
    )
}

export default BasicNavbar;
