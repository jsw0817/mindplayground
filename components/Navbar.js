import React, { useState } from "react";
import style from "./navbar.module.css";
import Link from "next/link";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const clickHandler = () => {
    return (
      <div className={style.burgerMenu}>
        <div
          onClick={() => {
            setMenu(!menu);
          }}
        >
          X
        </div>
        <Link href="/" legacyBehavior>
          <a
            onClick={() => {
              if (typeof window !== "undefined") window.location.href = "/";
            }}
          >
            흑막 테스트
          </a>
        </Link>
        <Link href="/" legacyBehavior>
          <a
            onClick={() => {
              if (typeof window !== "undefined") window.location.href = "/";
            }}
          >
            어둠의 심리 테스트 - 준비중
          </a>
        </Link>
      </div>
    );
  };

  const burger = () => {
    return (
      <div
        className={style.burger}
        onClick={() => {
          setMenu(!menu);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  };
  return (
    <div className={style.navBoard}>
      <span>Mind Playground</span>
      <Link href="/" legacyBehavior>
        <a
          onClick={() => {
            if (typeof window !== "undefined") window.location.href = "/";
          }}
        >
          흑막 테스트
        </a>
      </Link>
      <Link href="/" legacyBehavior>
        <a
          onClick={() => {
            if (typeof window !== "undefined") window.location.href = "/";
          }}
        >
          어둠의 심리 테스트 - 준비중
        </a>
      </Link>
      {burger()}
      {menu ? clickHandler() : null}
    </div>
  );
}

export default Navbar;
