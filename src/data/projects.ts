import nukenzie from "../assets/img/projects/nukenzie.png";
import burguerkenzie from "../assets/img/projects/burguerkenzie.png";
import kenziehub from "../assets/img/projects/kenziehub.png";
import fazeeendo from "../assets/img/projects/fazeeendo.png";
import lyricsquote from "../assets/img/projects/lyricsquote.png";
import randomytswift from "../assets/img/projects/randomytswift.png";
import { Project } from "../interfaces/interfaces";
import meusContatos from "../assets/img/projects/meus-contatos.png";
import backend from "../assets/img/projects/backend.png";

export const projects: Project[] = [
  {
    id: 1,
    name: "MeusContatos",
    description: "",
    stacks: [
      { id: 1, name: "ReactJS" },
      { id: 2, name: "SASS" },
      { id: 3, name: "Zod" },
      { id: 4, name: "React Hook Form" },
      { id: 5, name: "React Router Dom" },
      { id: 6, name: "React Toastify" },
      { id: 7, name: "React Icons" },
      { id: 8, name: "React to PDF" },
    ],
    image: meusContatos,
    repo: "https://github.com/nicegrrrl/meus-contatos-webapp",
    deploy: "https://meus-contatos-webapp.vercel.app/",
  },
  {
    id: 2,
    name: "MeusContatos",
    description: "",
    stacks: [
      { id: 1, name: "TypeScript" },
      { id: 2, name: "Express" },
      { id: 3, name: "PostgreSQL" },
      { id: 4, name: "TypeORM" },
    ],
    image: backend,
    repo: "https://github.com/nicegrrrl/meus-contatos-api",
    deploy: "https://meus-contatos-webapp.vercel.app/",
  },
  {
    id: 3,
    name: "KenzieBuster",
    description: "",
    stacks: [
      { id: 1, name: "Django" },
      { id: 2, name: "DjangoRestFramework" },
      { id: 3, name: "DjangoSimpleJWT" },
    ],
    image: backend,
    repo: "https://github.com/nicegrrrl/kenzie-buster",
    deploy: "",
  },
  {
    id: 4,
    name: "NuKenzie",
    description: "",
    stacks: [
      { id: 1, name: "HTML" },
      { id: 2, name: "SASS" },
      { id: 3, name: "ReactJS" },
    ],
    image: nukenzie,
    repo: "https://github.com/nicegrrrl/react-entrega-s1-template-nu-kenzie-nicegrrrl",
    deploy: "https://react-entrega-s1-template-nu-kenzie-nicegrrrl.vercel.app/",
  },
  {
    id: 5,
    name: "BurguerKenzie",
    description: "",
    stacks: [
      { id: 1, name: "HTML" },
      { id: 2, name: "SASS" },
      { id: 3, name: "ReactJS" },
      { id: 4, name: "Axios" },
    ],
    image: burguerkenzie,
    repo: "https://github.com/nicegrrrl/react-entrega-s3-template-hamburgueria-nicegrrrl",
    deploy:
      "https://react-entrega-s3-template-hamburgueria-nicegrrrl.vercel.app/",
  },
  {
    id: 6,
    name: "KenzieHub",
    description: "",
    stacks: [
      { id: 1, name: "HTML" },
      { id: 2, name: "SASS" },
      { id: 3, name: "ReactJS" },
      { id: 4, name: "Axios" },
      { id: 5, name: "React Router Dom" },
      { id: 6, name: "React Icons" },
      { id: 7, name: "React Toastify" },
      { id: 8, name: "Zod" },
    ],
    image: kenziehub,
    repo: "https://github.com/nicegrrrl/react-entrega-kenzie-hub-nicegrrrl",
    deploy: "https://react-entrega-kenzie-hub-nicegrrrl.vercel.app/",
  },
  {
    id: 7,
    name: "fazeeendo",
    description: "",
    stacks: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "JavaScript" },
    ],
    image: fazeeendo,
    repo: "https://github.com/nicegrrrl/lista-de-tarefas",
    deploy: "https://nicegrrrl.github.io/lista-de-tarefas/",
  },
  {
    id: 8,
    name: "Lyrics Quote",
    description: "",
    stacks: [
      { id: 1, name: "HTML" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "JavaScript" },
    ],
    image: lyricsquote,
    repo: "https://github.com/nicegrrrl/lyrics-quote",
    deploy: "https://nicegrrrl.github.io/lyrics-quote/",
  },
  {
    id: 9,
    name: "Kanvas",
    description: "",
    stacks: [
      { id: 1, name: "Django" },
      { id: 2, name: "DjangoRestFramework" },
      { id: 3, name: "DjangoSimpleJWT" },
    ],
    image: backend,
    repo: "https://github.com/nicegrrrl/kanvas",
    deploy: "",
  },
  {
    id: 10,
    name: "randomly, t.swift",
    description: "",
    stacks: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "JavaScript" },
      { id: 4, name: "Axios" },
    ],
    image: randomytswift,
    repo: "https://github.com/nicegrrrl/randomly-t.swift",
    deploy: "https://nicegrrrl.github.io/randomly-t.swift/",
  },
  {
    id: 11,
    name: "KenzieVelopers",
    description: "",
    stacks: [
      { id: 1, name: "TypeScript" },
      { id: 2, name: "Express" },
    ],
    image: backend,
    repo: "https://github.com/nicegrrrl/kenzievelopers",
    deploy: "",
  },
];
