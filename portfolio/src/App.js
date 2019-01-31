import React, { Component } from "react";
// import "./App.css";
import "./assets/bootstrap.min.css";
import "./assets/fontawesome.min.css";
import "./assets/style.css";
import "./main.css";
import x from "./assets/x.png";
import hamberder from "./assets/menu-icon.png";
import me from "./assets/me.jpg";


var style = {
  width:'295px', height: '295px', backgroundColor:"#e5e5e5"
};

class App extends Component {
  

  render() {
    return (
      <div>
        <header className="site-header">
          <div className="site-branding">
            <h1 className="site-title">
              <a href="index.html" rel="home">
                <img style={{width:"100%"}} src={me} alt="Logo" />
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
              <a href="#">Everything</a>
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
        <section>
          <div className="grid">
            <div className="grid-item">
              <div className="portfolio-content">
                <figure>
                  <div style={style} />
                </figure>
                <div className="entry-content flex flex-column align-items-center justify-content-center">
                  <h3>
                    <a href="#">Flower Skin</a>
                  </h3>
                  <ul className="flex flex-wrap justify-content-center">
                    <li>
                      <a href="#">Portfolio,</a>
                    </li>
                    <li>
                      <a href="#">Tree</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="portfolio-content">
                <figure>
                  <div style={style} />
                </figure>
                <div className="entry-content flex flex-column align-items-center justify-content-center">
                  <h3>
                    <a href="#">Flower Skin</a>
                  </h3>
                  <ul className="flex flex-wrap justify-content-center">
                    <li>
                      <a href="#">Portfolio,</a>
                    </li>
                    <li>
                      <a href="#">Tree</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="portfolio-content">
                <figure>
                  <div style={style} />
                </figure>
                <div className="entry-content flex flex-column align-items-center justify-content-center">
                  <h3>
                    <a href="#">Flower Skin</a>
                  </h3>
                  <ul className="flex flex-wrap justify-content-center">
                    <li>
                      <a href="#">Portfolio,</a>
                    </li>
                    <li>
                      <a href="#">Tree</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="portfolio-content">
                <figure>
                  <div style={style} />
                </figure>
                <div className="entry-content flex flex-column align-items-center justify-content-center">
                  <h3>
                    <a href="#">Flower Skin</a>
                  </h3>
                  <ul className="flex flex-wrap justify-content-center">
                    <li>
                      <a href="#">Portfolio,</a>
                    </li>
                    <li>
                      <a href="#">Tree</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="portfolio-content">
                <figure>
                  <div style={style} />
                </figure>
                <div className="entry-content flex flex-column align-items-center justify-content-center">
                  <h3>
                    <a href="#">Flower Skin</a>
                  </h3>
                  <ul className="flex flex-wrap justify-content-center">
                    <li>
                      <a href="#">Portfolio,</a>
                    </li>
                    <li>
                      <a href="#">Tree</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="portfolio-content">
                <figure>
                  <div style={style} />
                </figure>
                <div className="entry-content flex flex-column align-items-center justify-content-center">
                  <h3>
                    <a href="#">Flower Skin</a>
                  </h3>
                  <ul className="flex flex-wrap justify-content-center">
                    <li>
                      <a href="#">Portfolio,</a>
                    </li>
                    <li>
                      <a href="#">Tree</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="portfolio-content">
                <figure>
                  <div style={style} />
                </figure>
                <div className="entry-content flex flex-column align-items-center justify-content-center">
                  <h3>
                    <a href="#">Flower Skin</a>
                  </h3>
                  <ul className="flex flex-wrap justify-content-center">
                    <li>
                      <a href="#">Portfolio,</a>
                    </li>
                    <li>
                      <a href="#">Tree</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
