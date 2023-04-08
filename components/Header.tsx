import { HeaderWrapper} from "../src/styles/HeaderStyle";


const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <h1>Products List</h1>
      <div>
        <button>ADD</button>
        <button>MASS DELETE</button>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
