import { Navbar, Container, NavbarBrand } from 'reactstrap';
import avocado from '../images/pngwing.com.png';

export function Header() {
  return (
    <Navbar color="dark" dark>
      <Container style={{ display: 'flex' }}>
        <img src={avocado} style={{ height: '50px', marginRight: '10px' }} />
        <NavbarBrand href="/">Cookbook</NavbarBrand>
      </Container>
    </Navbar>
  );
}
