import "./ProfileButton.css";
import React, {useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import "../../Helpers/General.css";

function ProfileButton() {

  return (
    <div className="profile-btn button-style">
      <Link
        to="/profile"
        className= "profile-btn__link link"
      >
        Аккаунт
      </Link>
    </div>
  );
}

export default ProfileButton;
