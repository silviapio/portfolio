import { slide as Menu } from "react-burger-menu";

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "34px",
    height: "30px",
    right: "1rem",
    top: "1.25rem",
  },
  bmBurgerBars: {
    background: "var(--dark-slate)",
    borderRadius: "5px",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "var(--light-slate)",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    width: "200px",
    opacity: "0.95",
  },
  bmMenu: {
    background: "var(--dark-slate)",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmItemList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    color: "var(--light-slate)",
    padding: "0.8em",
  },
  bmItem: {
    display: "block",
    marginTop: "1rem",
  },
};

export const BurgerMenu = () => {
  const toggleMenuAria = ({ isOpen }) => {
    const menuWrap = document.querySelector(".bm-menu-wrap");
    isOpen ? menuWrap.setAttribute("aria-hidden", false) : menuWrap.setAttribute("aria-hidden", true);
  };

  return (
    <Menu onStateChange={toggleMenuAria} right styles={styles}>
      <a className="menu-item" href="#skills">
        skills
      </a>
      <a className="menu-item" href="#about">
        about
      </a>
      <a className="menu-item" href="#projects">
        projects
      </a>
      <a className="menu-item bg-bright-red px-2 py-1 rounded" href="#contact">
        contact
      </a>
    </Menu>
  );
};
