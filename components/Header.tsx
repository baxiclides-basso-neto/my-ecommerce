import { HeaderWrapper, Logo, Nav } from "../src/HeaderStyle";


const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo>ElectroShop</Logo>
      <Nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Produtos</a>
          </li>
          <li>
            <a href="/about">Sobre</a>
          </li>
          <li>
            <a href="/contact">Contato</a>
          </li>
        </ul>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
