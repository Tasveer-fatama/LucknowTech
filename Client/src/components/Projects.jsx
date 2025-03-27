import React , {useEffect}  from 'react'
import EveryPageHero from './EveryPageHero'
import work from "../assets/work.png";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work4 from "../assets/work4.png";
import work6 from "../assets/work6.png";
import work7 from "../assets/work7.png";
import work8 from "../assets/work8.png";
import work9 from "../assets/work9.png";
import work10 from "../assets/work10.png";
import work11 from "../assets/work11.png";

const Projects = () => {
      const data = [
    {
      img: work,
      heading: "Project Alpha",
      para: "A revolutionary project focused on delivering outstanding performance.",
    },
    {
      img: work1,
      heading: "Innovative Design",
      para: "Crafting sleek and modern solutions tailored to our clients' needs.",
    },
    {
      img: work2,
      heading: "Sustainable Growth",
      para: "Ensuring sustainable growth strategies for long-term success.",
    },
    {
      img: work4,
      heading: "Cutting-Edge Technology",
      para: "Leveraging the latest technology to drive results.",
    },
    {
      img: work6,
      heading: "Customer Excellence",
      para: "Delivering exceptional results by focusing on customer satisfaction.",
    },
   {
        img: work7,
        heading: "Operational Efficiency",
        para: "Streamlining processes for maximum productivity.",
        tags: ["Operations", "Management"]
      },
      {
        img: work8,
        heading: "Building Dreams",
        para: "Trusted Construction & Infrastructure Solutions for a Better Tomorrow",
        tags: ["Construction", "Real Estate"]
      },
      {
        img: work9,
        heading: "Empowering Education",
        para: "A Premier Institution for Academic Excellence and Holistic Growth",
        tags: ["Education", "Learning"]
      },
      {
        img: work10,
        heading: "Urban Development",
        para: "Excellence in Construction, Innovation in Design.",
        tags: ["Architecture", "Development"]
      },
      {
        img: work11,
        heading: "Healthcare Evolution",
        para: "Excellence in Paramedical Education for a Healthier Tomorrow",
        tags: ["Healthcare", "Education"]
      }
  ];
    useEffect(() => {
    // Ensure scrolling to the top of the document when the component is mounted
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use "auto" for instant scroll
    });

    // As a fallback, scroll the root element
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <EveryPageHero text="Projects" />
       <div className="grid grid-cols-2 gap-8 mt-12 bg-white px-16 py-16">
            {data.map((val, key) => (
              <div
                key={key}
                className=" rounded-lg transition-transform transform"
              >
                <img
                  src={val.img}
                  alt={val.heading}
                  className="rounded-md w-full object-cover"
                />
                <h3 className="text-lg md:text-xl font-semibold mt-4 hover:underline hover:ml-4 transition-all ease-in-out">
                  {val.heading}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mt-2">{val.para}</p>
              </div>
            ))}
          </div>

  </div>
  )
}

export default Projects