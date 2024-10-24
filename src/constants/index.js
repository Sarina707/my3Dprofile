import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "3D Animator",
      icon: web,
    },
    {
      title: "2D Animator",
      icon: mobile,
    },
    {
      title: "Concept and character artist",
      icon: backend,
    },
    {
      title: "Background artist",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Concept Artist and Character designer",
      company_name: "Interactive Warriors Studio",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2024 - August 2024",
      points: [
        "Worked on multiple company projects including concept art, character designs and prop design.",
        "Consistently produced high-quality artworks that reflected dedication and artistic capabilities.",
        "Effectively blended realistic elements with creative expression, to create captivating semirealistic pieces.",
        "Showcasing a keen eye for detail and a deep understanding of realism.",
      ],
    },
    {
      title: "Freelance animator and illustrator",
      company_name: "Self employed",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "2022 - current",
      points: [
        "Designed characters for an indie video game developer, bringing their game world to life.",
        "Created concept art for a new animated series, including environments, and props.",
        "Modelled and textured a 3D environment for a background of a webtoon.",
        "Delivered works to clients internationally while managing multiple projects.",
      ],
    },
    {
      title: "Book Illustrator",
      company_name: "International Client",
      icon: shopify,
      iconBg: "#383E56",
      date: "Nov 2023 - Dec 2023",
      points: [
        "Created a series of character illustrations and simple backgrounds for a book.",
        "Collaborated with the author to develop unique and engaging visuals that brought the story to life.",
        "Made use of Adobe Photoshop to deliver high quality art with client satisfaction.",
      
      ],
    },
    {
      title: "Student, B.VOC Digital Media and Animation",
      company_name: "St. Joseph's University",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Present",
      points: [
        "Recieved the Certificate of Merit for achieving first rank in three semesters.",
        "Participated in college fests like Artistica, Pegasus.",
        "Won a district level taekwondo tournament and participated in a state level tournament.",
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "A very sincere student at St. Joseph's and her performance in college was really excellent.",
      name: "Sudheendra SG",
      designation: "Technical Director",
      company: "Sathvick infotech",
      image: "./testimonials/sudheendra.jpg",
    },
    {
      testimonial:
        "Very active student and has participated in all events of the college.",
      name: "Dr Nevil Dsouza",
      designation: "HOD B.VOC",
      company: "St. Joseph's University",
      image: "./testimonials/nevil.jpg",
    },
    {
      testimonial:
        "She is really great at what she does. The end result is so much better than anything I could have imagined!",
      name: "Christina",
      designation: "Commissioner",
      company: "Meow Rice Webtoon",
      image: "./testimonials/christina.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Showreel",
      description:
        "A compilation of my best animated works up to 2023. Music - livingroom by Kensuke Ushio.",
      tags: [
        {
          name: "animation",
          color: "blue-text-gradient",
        },
        {
          name: "photoshop",
          color: "green-text-gradient",
        },
        {
          name: "animate",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://www.youtube.com/watch?v=dtDvrwJmm2k",
    },
    {
      name: "The Hunt",
      description:
        "An animated short film I worked on with Kirthi about a girl on the hunt for an apartment.",
      tags: [
        {
          name: "horror",
          color: "blue-text-gradient",
        },
        {
          name: "animated",
          color: "green-text-gradient",
        },
        {
          name: "film",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://drive.google.com/file/d/1EIEKJJ_1_cJoBq8RthZpR1I5sEonPYnX/view?usp=sharing",
    },
    {
      name: "Book Illustration",
      description:
        "A compilation of client work related to book illustrations that enhance storytelling.",
      tags: [
        {
          name: "graphic design",
          color: "blue-text-gradient",
        },
        {
          name: "photoshop",
          color: "green-text-gradient",
        },
        {
          name: "book",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://drive.google.com/drive/folders/1xejgZxGZt3GnBPvvZ8tULrFrydJ_FGRn?usp=sharing",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };