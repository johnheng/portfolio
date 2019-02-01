import React from "react";
import "./index.css";

const PhotoSeries = props => {
  return (
    <section>
      <div className="grid">
        {props.list.map((photo, i) => (
          <PhotoItem key={i} photo={photo} />
        ))}
      </div>
    </section>
  );
};
class PhotoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  render() {
    return (
      <div className="grid-item">
        <div className="portfolio-content">
          <figure>
            {this.state.loaded ? null : (
              <div
                style={{
                  backgroundColor: "#eee",
                  height: "400px",
                  width: "400px",
                  transition: "all 0.35s"
                }}
              />
            )}
            <img
              style={this.state.loaded ? { opacity: "1" } : { opacity: "0" }}
              src={this.props.photo.url}
              alt={this.props.photo.title}
              onLoad={() => this.setState({ loaded: true })}
            />
          </figure>
          <div className="entry-content flex flex-column align-items-center justify-content-center">
            <h3>
              <a href={"#" + this.props.photo.title}>
                {this.props.photo.title}
              </a>
            </h3>
            <ul className="flex flex-wrap justify-content-center">
              {this.props.photo.tags.map((tag, i) => (
                <li key={i}>
                  <a href={"#" + tag}>{tag}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default PhotoSeries;
