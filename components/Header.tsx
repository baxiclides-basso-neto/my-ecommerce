// Header.tsx
import { HeaderWrapper } from "../src/styles/HeaderStyle";
import Link from "next/link";

interface HeaderProps {
  isAddProductPage?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isAddProductPage = false }) => {
  return (
    <HeaderWrapper>
      <h1>{isAddProductPage ? "Add Product" : "Products List"}</h1>
      <div>
        {isAddProductPage ? (
          <>
            <Link href="/">
              <button>Save</button>
            </Link>
            <Link href="/add-product">
              <button>Cancel</button>
            </Link>
          </>
        ) : (
          <>
            <Link href="/add-product">
              <button>ADD</button>
            </Link>
            <button>MASS DELETE</button>
          </>
        )}
      </div>
    </HeaderWrapper>
  );
};

export default Header;
