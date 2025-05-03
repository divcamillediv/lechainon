import useUserStore from "../../store/userStore";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Image, Button} from "react-bootstrap";

const Header = () => {
  const user = useUserStore((state) => state.user)
  const logout = useUserStore((state) => state.logout)
  const isResident = user?.role === 'resident'
  const isCaregiver = user?.role === 'caregiver'
  const isUserNull = user === null

  const navigate = useNavigate();
  const handleSignout = () => {
      const confirmed = window.confirm('Are you sure you want to sign out?');
      if (confirmed) {
        // if user confirms, navigate to the login page
        navigate('/login');
        logout
      }
  }

  return (
      <Navbar expand="lg" bg="#99CBE2" variant="light" className="py-3 shadow-sm vw-100">
          <Navbar.Brand as={Link} to="/home">
            <Image style={{ height: '1.5rem' }} src="./logo.png" alt="Company Logo" className="px-4" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto fs-5">
              {
                isUserNull && (
                  <>
                    <Nav.Link as={Link} to="/contact" className="px-4">Contact Us</Nav.Link>
                  </>
                )
              }
              {
                isResident && (
                  <>
                  <Nav.Link as={Link} to="/home">Home</Nav.Link>
                  <Nav.Link as={Link} to="/chat">Chat</Nav.Link>
                  <Nav.Link as={Link} to="/calendar">Calendar</Nav.Link>
                  <Nav.Link as={Link} to="/intervention-plan">Intervention Plan</Nav.Link>
                  <Nav.Link as={Link} to="/feedback">Feedback</Nav.Link>
                  <Nav.Link as={Link} to="/emergency">Emergency</Nav.Link>
              </>
                )
              }
              {
                isCaregiver && (
                  <>
                  <Nav.Link as={Link} to="/homecaregiver">Home</Nav.Link>
                  <Nav.Link as={Link} to="/chatcaregiver">Chat</Nav.Link>
                  <Nav.Link as={Link} to="/calendarcaregiver">Calendar</Nav.Link>
                  <Nav.Link as={Link} to="/feedbackcaregiver">Feedback</Nav.Link>
                  </>
                )
              }
              {!isUserNull && (
                <Button variant="outline-dark" onClick={handleSignout} className="ms-3">
                  Sign Out
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
      </Navbar>  
  )
}

export default Header