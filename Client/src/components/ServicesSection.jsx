import React from "react";
import Card from "./Card";
import EveryPageHero from "./EveryPageHero";
import ModelForm from "./ModelForm";

// Updated image URLs
const services = [
  {
    title: "WhatsApp Chatbot",
    description:
      "Businesses may use WhatsApp chatbot services to improve customer experiences.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkJDMBo-x9MztMBKKDJj8V-L--ggvCa1M5hg&s",
  },
  {
    title: "Digital Marketing",
    description:
      "Provides businesses a collaboration-friendly environment to attract new prospects.",
    image:
      "https://zerogravitymarketing.com/wp-content/uploads/2024/01/six-main-types-of-digital-marketing.jpg",
  },

  {
    title: "Social Media Management",
    description:
      "Manage your brand presence with expert social media strategies.",
    image:
      "https://entail-assets.com/mayple/socialmediamanagement-1702282769682.jpg",
  },
  {
    title: "Search Engine Optimization",
    description:
      "Be among the top search results and attract more organic traffic.",
    image:
      "https://cdn.botpenguin.com/assets/website/Search_Engine_Optimization_d547319792.webp",
  },
  {
    title: "Lead Generation",
    description:
      "Effective digital lead generation strategies to grow your business.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsACNwaZjYb_id_46BFM_YoqSyNA29bUjH1g&s",
  },
  {
    title: "Image Branding",
    description: "A strong brand image equals more customer recognition.",
    image:
      "https://www.podssolutions.com/wp-content/uploads/2023/06/branding-agency.jpg",
  },
  {
    title: "Graphic Designing",
    description: "Create impressive marketing materials with graphic design.",
    image:
      "https://www.sanjaywebdesigner.com/articles/wp-content/uploads/2015/01/Graphic-Design-Course.jpg",
  },
  {
    title: "PPC/CPC Advertising",
    description:
      "Boost your brand’s growth with targeted Pay-Per-Click campaigns.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0SDv-KVbCoD230WRyMCxvLP2rzLDtacDbxA&s",
  },
  {
    title: "E-commerce Solutions",
    description: "Build, manage, and scale your online business effectively.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfc-Yh3nu0nwwptpsolrJqdlqBxWRMmr6sDQ&s",
  },
  {
    title: "Branding Videos",
    description: "Tell your brand’s story with high-quality video content.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YX40VhihnmlVSKFe0eMG87q88pxBybJ1rg&s",
  },
  {
    title: "YouTube Marketing",
    description: "Utilize YouTube marketing strategies to grow your brand.",
    image:
      "https://clonefutura.com//Uploads/Courses/FeaturedImage/1a6af845-4ee3-4f32-a2fc-763d71d35875/youtube%20marketing%20logo.png",
  },
  {
    title: "Wikipedia Page Creation",
    description: "Boost credibility with a well-optimized Wikipedia page.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSenzJJW4uv9uj-Zaj64mE1Lz5PfgP_cnwvYA&s",
  },
  {
    title: "Blue Tick Verification",
    description: "Get the blue tick for brand authenticity on social media.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRsMzKAJox55E-vlGlHfasmQMnqTwQ0MAvQA&s",
  },
  {
    title: "Brand Identity",
    description: "Create a strong and recognizable brand identity.",
    image:
      "https://rvncreative.com/wp-content/uploads/2019/12/RC_12_11_NailingBrandIdentity.jpg",
  },

  {
    title: "Web Development",
    description: "Develop a powerful website to reach more customers.",
    image:
      "https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/673f2a3b44c1ed4901bb43bb_6386328bea96dffacc89946b_d1.webp",
  },

  {
    title: "Application Development",
    description: "Build intuitive mobile and web applications for your brand.",
    image:
      "https://www.businessofapps.com/wp-content/uploads/2020/08/zymr8_steps_the_mobile_app_dev_lifecycle_cover.jpg",
  },
  {
    title: "Customized Software",
    description:
      "Tailor-made software solutions to streamline business processes.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT69a9wmgq_W4sp995D6FV6rJBqtE1eaa_NMg&s",
  },
  {
    title: "PR Activity",
    description: "Enhance your brand’s image with strategic PR activities.",
    image:
      "https://buzzmoremedia.com/wp-content/uploads/2021/06/Public-Relations-1024x569.jpg",
  },
  {
    title: "Social Media Marketing",
    description:
      "Generate brand awareness with targeted social media campaigns.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUGOr_yWyT9PF9TQlpvNAkfycRIuIjYBZiFA&s",
  },
  {
    title: "Digital PR",
    description:
      "Maintain a positive online presence through Digital PR strategies.",
    image:
      "https://bs-uploads.toptal.io/blackfish-uploads/public_files/unnamed-7569d41de69d6563b0f2fc0ea8e33b3f.jpg",
  },

  {
    title: "E-Commerce Store Management",
    description:
      "Optimize and manage your online store for maximum efficiency.",
    image:
      "https://swifnix.com/wp-content/uploads/2022/10/E-commerce-store.jpg",
  },

  {
    title: "Influencer Marketing",
    description: "Leverage influencers to grow your brand’s reach.",
    image:
      "https://recursos.audiense.com/hubfs/design/solutions/02_Influencer_Marketing-2.svg",
  },
];

const Services = () => {
  return (
    <>
      <EveryPageHero text="Services" />
      <div className="px-6 sm:px-12 lg:px-16 mt-8 bg-white py-16 text-center lg:text-left">
        <p className="text-3xl sm:text-4xl font-semibold">
          Develop, Advertise, and Advance <br className="hidden sm:block" />{" "}
          with <span className="text-[#FFD74B]">Advert Furos</span>
        </p>
        <p className="mt-2 text-lg text-gray-600">
          The best business consultancy in India
        </p>
        <br />
        <p className="text-gray-700 leading-relaxed">
          We recognize how crucial it is to keep up an active online presence.
          With our extensive range of services, we help businesses advertise
          their brand, improve search engine ranking, connect with potential
          customers, and create a powerful digital presence at a **reasonable
          cost**.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 sm:px-12 lg:px-16 py-8 bg-white">
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
      <ModelForm />
    </>
  );
};

export default Services;
