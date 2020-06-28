import React, {useState, useRef} from "react";
import "../Css/LanguageTxt.css";

const LanguageObject = [
  {
    title: "HTML",
    description:
      "Sad to say, but I think I write better in HTML than French. I worked in a lot of project with vanilla CSS, animation, transition witch helped me to improve. Flexbox and CSS selector are juste incredible.",
      color: '#d35836'
  },
  {
    title: "CSS",
    description:
      "e texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages ",
      color: '#3667e8'
    },
  {
    title: "SASS",
    description:
    "centrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche ",
    color: '#cf649a'
  },
  {
    title: "BOOTSTRAP",
    description:
      "mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standar",
      color: '#9383b3'
    },
  {
    title: "JAVASCRIPT",
    description:
      "Vannilla js is …. Fundamental. I learned a thing during my bootcamp. Js is a unique language... but you can code one thing, in many, many way, clean, dirty, simple, complex, oneline, or function multiple (sometime useless lines), modern or oldshool. So i had to learn, and I wanted to learn Js from a modern and efficiente point of view. I’m working withh ES6 norme,  arrow function , destructuring templatestrings («excepte in my sql requests ») etc. I think JS is part of the futur, with  js frameworks, but to have a good understanding of js frameworks I made a lot of exercices in vanilla js",
      color: '#f9d749'
    },
  {
    title: "REACTJS",
    description:
      " sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs d",
      color: '#81d8f7'
    },
  {
    title: "NODEJS",
    description:
   
   "r anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lo",
   color: '#8eba39'
  },
  {
    title: "SQL",
    description:
      "Sad to say, but I MON CHIBRE I write better in HTML than French. I worked in a lot of project with vanilla CSS, animation, transition witch helped me to improve. Flexbox and CSS selector are juste incredible.",
      color: '#7594b2'
    },
  {
    title: "MONGODB",
    description:
      "Sad to say, but I MON CHIBRE I write better in HTML than French. I worked in a lot of project with vanilla CSS, animation, transition witch helped me to improve. Flexbox and CSS selector are juste incredible.",
      color: '#559145'
    },
  {
    title: "DOCKER",
    description:
      "Sad to say, but I MON CHIBRE I write better in HTML than French. I worked in a lot of project with vanilla CSS, animation, transition witch helped me to improve. Flexbox and CSS selector are juste incredible.",
      color: '#3d88ae'
    },
];
export default function LanguageTxt({ selectedLogo }) {
  const [title, setTitle] = useState('HTML')
  setTimeout(() => {
    setTitle(selectedLogo)
  }, 250);
  const textRef = useRef()
setTimeout(()=> {
  textRef && textRef.current && textRef.current.classList.remove('moving')
}, 250)
textRef && textRef.current && textRef.current.classList.add('moving')
setTimeout(()=> {
  textRef && textRef.current && textRef.current.classList.add('movingIn')
}, 250)
textRef && textRef.current && textRef.current.classList.remove('movingIn')
  return (
    <div className="textContent"
    ref={textRef}
    >
      <div className="textContentWarpper">
        <h5 className="title" style={title
            ? {color: LanguageObject.find((each) => {
                return title === each.title;
              }).color}
            : {color: LanguageObject[0].color}}>
          {title ? title : LanguageObject[0].title}
        </h5>
        <p className="description">
          {title
            ? LanguageObject.find((each) => {
                return title === each.title;
              }).description
            : LanguageObject[0].description}
        </p>
      </div>
    </div>
  );
}
