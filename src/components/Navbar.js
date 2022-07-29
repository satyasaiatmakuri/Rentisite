import React, {useState} from 'react'
import '../styles/Navbar.css'
import Dropdown from 'react-bootstrap/Dropdown';
import MenuIcon from '@mui/icons-material/Menu';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Navbar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='navbar'>
        <div className='container py-3'>
            <div className=' nav-logo col-6 col-lg-3 text-center'>
                    Logo
            </div>
            <div className='nav-menu col-lg-6 d-none d-lg-block'>
                <div className='nav-menu-inner'>
                    <div className='nav-menu-item py-2 px-3'>Rent</div>
                    <div className='nav-menu-item py-2 px-3'>Buy</div>
                    <div className='nav-menu-item py-2 px-3'>Sell</div>
                    <div className='nav-menu-item'>
                    <Dropdown>
                      <Dropdown.Toggle className='dropdown-btn' variant='Light' id="dropdown-basic">
                        Manage Property
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#">Manage Property</Dropdown.Item>
                        <Dropdown.Item href="#">Manage Property</Dropdown.Item>
                        <Dropdown.Item href="#">Manage Property</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    </div>
                    <div className='nav-menu-item'>
                        <Dropdown>
                          <Dropdown.Toggle className='dropdown-btn' variant='Light' id="dropdown-basic">
                          Resource
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#">Resource</Dropdown.Item>
                            <Dropdown.Item href="#">Resource</Dropdown.Item>
                            <Dropdown.Item href="#">Resource</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <div className='nav-sign d-none d-lg-block col-md-3 text-center'>
              <div className='nav-sign-inner'>
                <div className='sign-login py-2 px-3'>
                    Login
                </div>
                <div className='sign-signup py-2 px-3'>
                    Sign up
                </div>
              </div>
            </div>
            <div className='menu-btn d-lg-none col-6 text-center'>
              <MenuIcon onClick={handleShow} className='menu-icon'/>
            </div>
        </div>
        <Offcanvas show={show} onHide={handleClose} placement='end'>
            <Offcanvas.Header closeButton className='canva-header'>
              <Offcanvas.Title>Rental</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='canva-body'>
              <div className='toggle-menu-items'>
                  <div className='toggle-menu-item'>Rent</div>
                  <div className='toggle-menu-item'>Buy</div>
                  <div className='toggle-menu-item'>Sell</div>
                  <div className='toggle-menu-item'>Manage property</div>
                  <div className='toggle-menu-item'>Resource</div>
                  <div className='toggle-menu-item'>Login</div>
                  <div className='toggle-menu-item'>Signup</div>
              </div>
            </Offcanvas.Body>
        </Offcanvas>
    </div>
  )
}

export default Navbar