import React from "react";
import style from "./loading.module.css";

function Loading({ text }) {
  return (
    <div>
      <div className={style.loadingCircle}>
      <h3>{text}</h3>
      </div>

    
    </div>
  );
}

export default Loading;
