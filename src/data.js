import background from '../src/assets/img/background-generator.png';
import portfolio from '../src/assets/img/portfolio.png';
import metalimport from '../src/assets/img/metalimport.png';
import ikea from '../src/assets/img/ikea.png';
import wonderful from '../src/assets/img/mrwonderful.png';
import santosepires from '../src/assets/img/Prancheta.png';
import proaktive from '../src/assets/img/proaktive.png';
import photography from '../src/assets/img/photography.png';


/*****************Navbar Links *******************/

export const links = [
   {
      name: "Skills",
      to: 'skills'
   },
   {
      name: "Projects",
      to: 'projects'
   },
   {
      name: "Contacts",
      to: 'contacts'
   },
]


/*****************Project Cards *******************/


export const WebDevelopment = [
    {
         id: 1,
         title: "Metalimport",
         description: "Html, Bootstrap, Css, Javascript",
         img: metalimport,
         url: 'https://www.metalimport.net',
    },
     {
         id: 2,
         title: "Portfolio",
         description: "Html, Bootstrap, Css, React",
         img: portfolio,
         url: 'https://www.jsilveira.pt',
     },
     {
        id: 3,
        title: "Proaktive",
        description: "Wordpress, Css, Javascript",
        img: proaktive,
        url: ' https://proaktive.pt',
     },
     {
         id: 4,
         title: "RobotFriends",
         description: "Html, Css, React",
         img: 'https://images.unsplash.com/photo-1563396983906-b3795482a59a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
         url: 'https://j-silveira.github.io/RobotFriends/',
     },
     {
         id: 5,
         title: "Background Generator",
         description: "Html, Css, Javascript",
         img: background,
         url: ' https://j-silveira.github.io/Backgroundgenerator/',
      },
]

export const UiUx = [
    {
         id: 1,
         title: "IKEA",
         description: "Adobe XD",
         img: ikea,
         url: 'https://www.behance.net/gallery/161631681/Website-Redesign-IKEA',
    },
    {
        id: 2,
        title: "Photogapher Portfolio",
        description: "Figma",
        img: photography,
        url: 'https://www.behance.net/gallery/203829729/Photographer-Portfolio-Web-Design',
    },
    {
         id: 3,
         title: "Mr. Wonderful - Nav Icons",
         description: "Adobe XD, Adobe Illustrator",
         img: wonderful,
         url: 'https://www.behance.net/gallery/161536081/Mr-Wonderful-Navigation-Redesign'
     },
     {
         id: 4,
         title: "Santos & Pires, Lda.",
         description: "Adobe XD, Adobe Illustrator",
         img: santosepires,
         url: 'https://www.behance.net/gallery/160002451/Santos-Pires-Website-Redesign'
     },
]


