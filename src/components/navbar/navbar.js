import React from "react";
import Link from "next/link";
import "./navbar.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      projectId: "taco"
    };
  }

  handleToggle = () =>
    this.setState(prevState => ({ isNavOpen: !prevState.isNavOpen }));

  render() {
    const { isNavOpen, projectId } = this.state;
    return (
      <nav className="nav_menu">
        <div className="nav_menu__content">
          <h2>This is the Navbar</h2>
          <h5>Navbar open is: {`${isNavOpen}`}</h5>
          <button onClick={this.handleToggle}>Toggle Navbar</button>
        </div>
        <div className="nav_menu__links">
          <Link href="/" as="/">
            <div className="menu">Home</div>
          </Link>
          <Link href={{ pathname: "/params", query: { projectId } }}>
            <div className="menu">Params</div>
          </Link>
          <Link href="/contact-us">
            <div className="menu">Contact Us</div>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
