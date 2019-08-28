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
      <nav className="navbar">
        <div className="navbar__content">
          <h2>This is the Navbar</h2>
          <h5>Navbar open is: {`${isNavOpen}`}</h5>
          <button onClick={this.handleToggle}>Toggle Navbar</button>
        </div>
        <div className="navbar__links">
          <Link href="/" prefetch>
            <div className="navbar__link">Home</div>
          </Link>
          <Link href={{ pathname: "/params", query: { projectId } }} prefetch>
            <div className="navbar__link">Params</div>
          </Link>
          <Link href="/contact-us" prefetch>
            <div className="navbar__link">Contact Us</div>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
