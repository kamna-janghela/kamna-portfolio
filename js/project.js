const projects = [
  {
    id: 1,
    title: "Sourcebae",
    live: "https://sourcebae.com/",
    img: "assets/projects/sourvebae.png",
    techs: ["Web Content Writing", "EdTech Web Content Writing", "Technical Blog Writing", "Podcast Scripts", "Social Media Scripts"],
    description:
      "Sourcebae is outsourching company which help companies for remote hiring to find the best talent from India.",
  },
  {
    id: 2,
    title: "Legal 251",
    live: "https://legal251.com/gst-return-filing",
    img: "assets/projects/legal251.png",
    techs: ["Legal Writing", "Social Media Posting", "Copy Writing", "Technical Writing"],
    description:
      "Legal251 is an online legal solutions provider that comprehensively delivers the solutions for all queries of the Legal domain.",
  },
  {
    id: 3,
    title: "Wappgo",
    live: "https://wappgo.com/",
    img: "assets/projects/wappgo.png",
    techs: ["Legal Writing", "Social Media Posting", "Copy Writing", "Technical Writing"],
    description:
      "Wappgo provides service related to website development, app devlopment, legal consultancy and other services. ",
  },
  {
    id: 4,
    title: "Bael Wellness",
    live: "https://baelwellness.com/",
    img: "assets/projects/baelwellness.png",
    techs: ["Blog Writing"],
    description:
      "Bael Wellness is a brand known for high quality standards and uniqueness when it comes to people’s well-being. Bael started a small scale business within a very limited geographic area in California, USA. ",
  },
  {
    id: 5,
    title: "Softude",
    live: "https://www.softude.com/",
    img: "assets/projects/softude.png",
    techs: ["Blog Writing", "Web Content Writing","Technical Blog Writing"],
    description:
      "Softude is the business transformation specialist exploring thriving opportunities to appoint digital breakthroughs to facilitate business growth.",
  }
];

const parentElement = document.querySelector(".carousel");

projects.forEach((project) => {
  const { title, live, img, techs, description } = project;

  // Create slide container
  const slideContainer = document.createElement("div");
  slideContainer.classList.add(
    "slide",
    "grid",
    "grid-template-columns-2",
    "gap-3"
  );

  // Create project image link
  const imageLink = document.createElement("a");
  imageLink.classList.add("project-img");
  imageLink.href = live;
  imageLink.target = "_blank";
  imageLink.rel = "noopener noreferrer";

  // Create project image
  const image = document.createElement("img");
  image.src = img;
  image.alt = `${title} Image`;

  // Append image to image link
  imageLink.appendChild(image);

  // Create project description container
  const projectDescription = document.createElement("div");
  projectDescription.classList.add("project-description");

  // Create project title
  const projectTitle = document.createElement("h4");
  projectTitle.textContent = title;

  // Create project description text
  const projectText = document.createElement("p");
  projectText.classList.add("section-text");
  projectText.textContent = description;

  // Create technology list
  const techList = document.createElement("ul");
  techList.classList.add("tech-use");

  // Create technology list items
  techs.forEach((tech) => {
    const techItem = document.createElement("li");
    techItem.textContent = tech;
    techList.appendChild(techItem);
  });

  // Create project links container
  const projectLinks = document.createElement("div");
  projectLinks.classList.add(
    "project-links",
    "flex",
    "align-items-center"
  );

  // Create live demo link
  const liveDemoLink = document.createElement("a");
  liveDemoLink.classList.add("project-link");
  liveDemoLink.title = "Live Demo";
  liveDemoLink.href = live;
  liveDemoLink.target = "_blank";
  liveDemoLink.rel = "noopener noreferrer";

  // Create live demo icon
  const liveDemoIcon = document.createElement("i");
  liveDemoIcon.classList.add("fa-solid", "fa-arrow-up-right-from-square");

  // Append live demo icon to live demo link
  liveDemoLink.appendChild(liveDemoIcon);

  // Append all elements to project links container
  projectLinks.appendChild(liveDemoLink);

  // Append all elements to project description container
  projectDescription.appendChild(projectTitle);
  projectDescription.appendChild(projectText);
  projectDescription.appendChild(techList);
  projectDescription.appendChild(projectLinks);

  // Append image link and project description container to slide container
  slideContainer.appendChild(imageLink);
  slideContainer.appendChild(projectDescription);

  // Append slide container to desired parent element
  parentElement.appendChild(slideContainer);
});
