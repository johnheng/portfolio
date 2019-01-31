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
const PhotoItem = props => {
  return (
    <div className="grid-item">
      <div className="portfolio-content">
        <figure>
          <img src={props.photo.url} alt={props.photo.title} />
        </figure>
        <div className="entry-content flex flex-column align-items-center justify-content-center">
          <h3>
            <a href={"#" + props.photo.title}>{props.photo.title}</a>
          </h3>
          <ul className="flex flex-wrap justify-content-center">
            {props.photo.tags.map((tag, i) => (
              <li key={i}>
                <a href={"#" + tag}>{tag}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default PhotoSeries;
