import React from "react";

import logo from "../../assets/netflix-logo.svg";
import Search from "./Search";

import { Icon, InlineIcon } from "@iconify/react";
import bellIcon from "@iconify/icons-mdi/bell";
import magnifyIcon from "@iconify/icons-mdi/magnify";
import giftOutline from "@iconify/icons-mdi/gift-outline";

import "./Topbar.scss";

export default function Topbar() {
  return (
    <div className="topbar">
      <img className="topbar-logo" src={logo} />
      <div className="topbar-menu">
        <a className="topbar-menu-item active" href="#">
          Home
        </a>
        <a className="topbar-menu-item" href="#">
          Séries
        </a>
        <a className="topbar-menu-item" href="#">
          Filmes
        </a>
        <a className="topbar-menu-item" href="#">
          Novidades
        </a>
        <a className="topbar-menu-item" href="#">
          Minha Lista
        </a>
      </div>
      <div className="topbar-right">
        <div className="topbar-seach topbar-icon">
          <Search />
        </div>
        <div className="topbar-refer topbar-icon">
          <InlineIcon icon={giftOutline} />
        </div>
        <div className="topbar-notifications topbar-icon">
          <InlineIcon icon={bellIcon} />
        </div>
      </div>
    </div>
  );
}
