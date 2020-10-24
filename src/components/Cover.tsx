import React from "react";
import { InlineIcon } from "@iconify/react";
import play from "@iconify/icons-mdi/play";
import informationOutline from "@iconify/icons-mdi/information-circle-outline";
import "./Cover.scss";
import pbCover from "../assets/pb-cover.jpg";
import pbText from "../assets/pb-text.png";
import rating18 from "../assets/18.png";

export default function Cover() {
  return (
    <div className="cover" style={{ backgroundImage: `url(${pbCover})` }}>
      <div className="cover-rating">
        <img src={rating18} />
      </div>
      <div className="cover-info">
        <img src={pbText} className="cover-info-image" />
        <div className="cover-info-description">
          <span>
            No submundo de Londres, somente os mais frios e calculistas
            conseguem sobreviver.
          </span>
        </div>
        <div className="cover-info-buttons">
          <button className="play-button button">
            <InlineIcon
              style={{ fontSize: "2rem", lineHeight: "2rem" }}
              icon={play}
            />{" "}
            Play
          </button>
          <button className="moreinfo-button button">
            <InlineIcon
              style={{ fontSize: "2rem", lineHeight: "2rem" }}
              icon={informationOutline}
            />{" "}
            Mais informações
          </button>
        </div>
      </div>
    </div>
  );
}
