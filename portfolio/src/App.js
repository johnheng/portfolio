import React, { Component } from "react";
import "./assets/bootstrap.min.css";
import "./assets/fontawesome.min.css";
import "./assets/style.css";
import "./main.css";
import x from "./assets/x.png";
import hamberder from "./assets/menu-icon.png";
import me from "./assets/me.jpg";
import PhotoSeries from "./photo";
import "whatwg-fetch";
var XMLParser = require("react-xml-parser");

class App extends Component {
  state = {
    photos: [],
    isLoading: false
  };

  s3Url = "http://johnhengphotography.s3.amazonaws.com/";

  componentDidMount() {
    this.setState({ photos: [], isFetching: true });
    fetch(this.s3Url).then(response => {
      let self = this;
      response.text().then(function(d) {
        var json = new XMLParser().parseFromString(d);
        var photos = json.children
          .filter(x => x.name === "Contents")
          .map(x => {
            return {
              url: self.s3Url + x.children.find(n => n.name === "Key").value,
              title: x.children.find(n => n.name === "Key").value,
              tags: []
            };
          });
        self.setState({ photos: photos, isFetching: false });
      });
    });
  }

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
