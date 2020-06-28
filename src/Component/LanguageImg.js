/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useRef } from "react";
import "../Css/LanguageImg.css";

export default function LanguageImg({ reflogo, src, title, chekingcolor }) {
  let logoRef = useRef();
  function loggin() {
    reflogo(logoRef.current);
  }
  
  return (
    <div
      className="languageContent"
      value={title}
      title={title}
      ref={logoRef}
      onClick={loggin}
      css={
        title === chekingcolor
          ? { '&::after': {
            zindex: '1',
            content: '""',
            position: 'absolute',
            bottom: '0',
            width: '20%',
            height: '3px',
            margin: 'auto',
            backgroundColor: '#ff79c6',
            transition: 'ease-in-out 0.3s background-color'
          }}
          : { backgroundColor: "rgba(37, 2, 23, 0)" }
      }
    >
      <img className="logo" src={src} alt={title + "Logo"} />
    </div>
  );
}
