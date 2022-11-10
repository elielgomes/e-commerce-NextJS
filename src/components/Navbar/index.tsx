import { useEffect, useState } from "react";
import { NavBody } from "./style";

const Navbar: React.FC = () => {
  const [activeNavbar, setActiveNavbar] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window != "undefined") {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setActiveNavbar(true);
        } else {
          setActiveNavbar(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      <NavBody isActive={activeNavbar}>
        <nav>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Pages</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>
      </NavBody>
    </>
  );
};

export default Navbar;
