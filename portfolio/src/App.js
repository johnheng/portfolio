import React, { Component } from "react";
import "./assets/bootstrap.min.css";
import "./assets/fontawesome.min.css";
import "./assets/style.css";
import "./main.css";
import x from "./assets/x.png";
import hamberder from "./assets/menu-icon.png";
import me from "./assets/me.jpg";
import PhotoSeries from "./photo";

class App extends Component {
  state = {
    photos: [
      { url: "asdf", title: "Picture 1", tags: ["asdf", "fda"] },
      { url: "asdf", title: "Picture 2", tags: ["asdf", "fda"] },
      { url: "asdf", title: "Picture 3", tags: ["asdf", "fda"] },
      { url: "asdf", title: "Picture 4", tags: ["asdf", "fda"] },
      { url: "asdf", title: "Picture 4", tags: ["asdf", "fda"] },
      { url: "asdf", title: "Picture 4", tags: ["asdf", "fda"] },
      { url: "asdf", title: "Picture 4", tags: ["asdf", "fda"] },
      { url: "asdf", title: "Picture 4", tags: ["asdf", "fda"] },
      { url: "asdf", title: "Picture 4", tags: ["asdf", "fda"] },
      { url: "asdf", title: "Picture 4", tags: ["asdf", "fda"] },
      { url: "asdf", title: "Picture 4", tags: ["asdf", "fda"] },
      { url: "asdf", title: "Picture 5", tags: ["asdf", "fda"] }
    ],
    isLoading: false
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <header className="site-header">
          <div className="site-branding">
            <h1 className="site-title">
              <a href="index.html" rel="home">
                <img style={{ width: "100%" }} src={me} alt="Logo" />
              </a>
            </h1>
          </div>
          <div className="hamburger-menu">
            <div className="menu-icon">
              <img src={hamberder} alt="menu icon" />
            </div>
            <div className="menu-close-icon">
              <img src={x} alt="menu close icon" />
            </div>
          </div>
        </header>
        <nav className="site-navigation flex flex-column justify-content-between">
          <div className="site-branding d-none d-lg-block hide">
            <h1 className="site-title">
              <a href="index.html" rel="home">
                John Heng
              </a>
            </h1>
          </div>
          <ul className="main-menu flex flex-column justify-content-center">
            <li className="current-menu-item">
              <a href="#everything">Everything</a>
            </li>
            <li>
              <a href="#people">People</a>
            </li>
            <li>
              <a href="#food">Food</a>
            </li>
            <li>
              <a href="#travel">Travel</a>
            </li>
          </ul>
        </nav>
        <PhotoSeries list={this.state.photos} />
      </div>
    );
  }
}

export default App;
