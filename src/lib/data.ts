import project1Img from "../../public/project1.png";
import project2Img from "../../public/project2.png";
import project3Img from "../../public/project3.png";
import project1Code from "../../public/project1CodeImg.png";
import project2Code from "../../public/project2CodeImg.png";
import project3Code from "../../public/project3CodeImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },

  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "About",
    hash: "#about",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Project 'Fake Posts'",
    description:
      "This web app displays posts, using data from an API. The project provides sorting, searching, filtering, deleting and creating posts functionality via fundamental React concepts such as JSX, state, props, functional components, hooks, component lifecycle, routing, etc.",
    tags: ["React", "Axios", "Vite", "CSS modules"],
    imageUrl: project1Img,
    codeSnippet: project1Code,
    linkDeploy: "https://mariaklyass.github.io/fake-posts/",
    linkCode: "https://github.com/mariaklyass/fake-posts",
  },
  {
    title: "Project 'BerryShop'",
    description:
      "This is an online-store with a shopping cart. You can add, increment, decrement and delete items in the cart. The main feature is the separate context for the cart, so that it's accessible from any page.",
    tags: ["React", "TypeScript", "Vite", "Bootstrap"],
    imageUrl: project2Img,
    codeSnippet: project2Code,
    linkDeploy: "https://mariaklyass.github.io/berries/",
    linkCode: "https://github.com/mariaklyass/berries",
  },
  {
    title: "Project 'Employees'",
    description:
      "A web app that renders the list of all company's employees from an API. Functionality: displaying loading state and different error screens, switching between tabs to filter employees by department, searching by name or tag, backwards navigation from a profile page.",
    tags: ["React", "Vite", "Axios", "Zustand", "Tailwind"],
    imageUrl: project3Img,
    codeSnippet: project3Code,
    linkDeploy: "https://mariaklyass.github.io/employees/",
    linkCode: "https://github.com/mariaklyass/employees",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Vite",
  "SCSS",
  "Tailwind",
  "Bootstrap",
  "Framer Motion",
  "Node.js",
  "Git",
  "GitHub",
] as const;
