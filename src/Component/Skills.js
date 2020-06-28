import "../Css/Skills.css";
import LanguageImg from "./LanguageImg";
import LanguageTxt from "./LanguageTxt";
import React, { useState } from "react";

export default function Skills() {
  const [selectedDom, setSelectedDom] = useState("HTML");
  const refinal = (logoRef) => {
    setSelectedDom(logoRef.attributes.value.nodeValue);
  };
  return (
    <div className="skills">
      <h3>
        Languages{" "}
        <span className="darkify">
          &#38;</span> Framework <span className="darkify">Skills
        </span>
      </h3>
      <div className="skillsCard">
        <LanguageImg
          title="HTML"
          src="./Img/Svg/htmlLogo.svg"
          reflogo={(logoRef) => refinal(logoRef)}
          chekingcolor={selectedDom}
        />
        <LanguageImg
          title="CSS"
          src="./Img/Svg/cssLogo.svg"
          reflogo={(logoRef) => refinal(logoRef)}
          chekingcolor={selectedDom}
        />
        <LanguageImg
          title="SASS"
          src="./Img/Svg/sassLogo.svg"
          reflogo={(logoRef) => refinal(logoRef)}
          chekingcolor={selectedDom}
        />
        <LanguageImg
          title="BOOTSTRAP"
          src="./Img/Svg/bootstrapLogo.svg"
          reflogo={(logoRef) => refinal(logoRef)}
          chekingcolor={selectedDom}
        />
        <LanguageImg
          title="JAVASCRIPT"
          src="./Img/Svg/javascriptLogo.svg"
          reflogo={(logoRef) => refinal(logoRef)}
          chekingcolor={selectedDom}
        />
        <LanguageImg
          title="REACTJS"
          src="./Img/Svg/reactLogo.svg"
          reflogo={(logoRef) => refinal(logoRef)}
          chekingcolor={selectedDom}
        />
        <LanguageImg
          title="NODEJS"
          src="./Img/Svg/nodejsLogo.svg"
          reflogo={(logoRef) => refinal(logoRef)}
          chekingcolor={selectedDom}
        />
        <LanguageImg
          title="SQL"
          src="./Img/Svg/sqlLogo.svg"
          reflogo={(logoRef) => refinal(logoRef)}
          chekingcolor={selectedDom}
        />
        <LanguageImg
          title="MONGODB"
          src="./Img/Svg/mongodbLogo.svg"
          reflogo={(logoRef) => refinal(logoRef)}
          chekingcolor={selectedDom}
        />
        <LanguageImg
          title="DOCKER"
          src="./Img/Svg/dockerLogo.svg"
          reflogo={(logoRef) => refinal(logoRef)}
          chekingcolor={selectedDom}
        />
      </div>
      <LanguageTxt selectedLogo={selectedDom} />
    </div>
  );
}
