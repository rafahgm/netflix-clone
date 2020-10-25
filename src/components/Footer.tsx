import React from "react";

import { InlineIcon } from "@iconify/react";
import facebook from "@iconify/icons-mdi/facebook-box";
import instagram from "@iconify/icons-mdi/instagram";
import twitter from "@iconify/icons-mdi/twitter";
import youtube from "@iconify/icons-mdi/youtube";

import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-social_media">
        <span>
          <InlineIcon style={{ marginRight: "20px" }} icon={facebook} />
        </span>
        <span>
          <InlineIcon style={{ marginRight: "20px" }} icon={instagram} />
        </span>
        <span>
          <InlineIcon style={{ marginRight: "20px" }} icon={twitter} />
        </span>
        <span>
          <InlineIcon style={{ marginRight: "20px" }} icon={youtube} />
        </span>
      </div>
      <div className="footer-links">
        <a href="#">Audio and Subtitles</a>
        <a href="#">Audio description</a>
        <a href="#">Help center</a>
        <a href="#">Gift Cards</a>
        <a href="#">Media center</a>
        <a href="#">Jobs</a>
        <a href="#">Privacy</a>
        <a href="#">Cookie Preferences</a>
        <a href="#">Investor Relations</a>
        <a href="#">Terms of use</a>
        <a href="#">Legal notices</a>
        <a href="#">Contact us</a>
        <a href="#">Corporate Information</a>
      </div>
      <div className="footer-trademark">&copy; 1997-2020 Netflix, Inc.</div>
    </div>
  );
}
