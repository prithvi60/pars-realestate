import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import C1 from "../public/images/clients/client1.jpg";
import C2 from "../public/images/clients/client2.jpg";
import C3 from "../public/images/clients/client3.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "orange",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "orange",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}
export const TestimonialCarousal = () => {
  const reviews = [
    {
      image: C2,
      name: "Satish",
      review: `Prior to choosing Intermont, we walked through numerous new construction homes. After seeing Intermont, it was clear that the quality and attention to detail was next level. It was great co-ordination with Mr.Lokesh throughout the construction process. They were easy to get in touch with and quick to respond to any questions that came up. They were on time, within the budget, and listened to our needs.
      We would certainly recommend Intermont, and Thank you Mr.Lokesh for helping take our dream and make it a reality!!
      Best Wishes,
      M.Sathish`,
    },
    {
      image: C1,
      name: "Harish",
      review: ` I hope this note finds you in good health and high spirits. I am writing to express my sincere appreciation for the exceptional work done by you and your team on [Imperial – Mandaveli] Your commitment to delivering high-quality craftsmanship and attention to detail truly exceeded my expectations. From the initial planning stages to the final touches, every aspect of your work demonstrated a level of professionalism and expertise that is commendable. The dedication and passion you exhibited throughout the construction process were evident in the outcome. The project was completed within the promised timeline. Your team's strong work ethic and collaborative spirit were instrumental in creating a seamless workflow. I was particularly impressed by your ability to effectively communicate and coordinate with other contractors and suppliers involved in the project. It made the entire process run smoothly, resulting in a successful and well-executed construction endeavor.

      Moreover, your responsiveness and willingness to address any concerns or queries along the way were truly appreciated. Your prompt action in resolving any issues that arose ensured minimal disruption and ensured our satisfaction as clients.
      
      I want to express my gratitude for the extra mile you went to ensure the outcome was nothing short of remarkable. 
      
      Please convey my heartfelt appreciation to your entire team, as their collective contribution and unwavering dedication played a crucial role in the triumph of this undertaking. I wholeheartedly recommend Intermont Builder to anyone in search of extraordinary builders who consistently achieve exceptional results.
      
      Once again, thank you for your exceptional work. I look forward to the opportunity to work together on future projects.
        
      
      Regards,
      Harish Balasubramanian 
      Imperial, Mandaveli`,
    },
    {
      image: C3,
      name: "Rajesh Narayanan",
      review: ` Owning a House is everyone's biggest dream in our lives.  At that point of juncture, we really look for someone who is loyal, reliable, trustable, supportive, and flexible in achieving our dreams.   

    My search was fruitful when I met Mr. Lokesh, who focuses on great customer service, flexible and always been polite.  He really took us the entire journey of buying my Flat smoothly and made us to be one of the proud flat owners of Imperial.
    
    The level of construction, fittings and accessories used were premium, trendy, and looks like a star-ranked flats.
    
    Mr. Lokesh gesture is well appreciated and for my future ventures I will definitely partner with Intermont team needless to say.`,
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {reviews.map((item, idx) => {
        return (
          <div key={idx}>
            <div className="flex flex-col items-center gap-2 ">
              <img
                src={item.image.src}
                alt="Picture of the artist"
                placeholder="blur"
                className="rounded-full border-2 "
                style={{
                  height: "140px",
                  width: "140px",
                  borderColor: "orange",
                  objectFit: "cover",
                }}
              />
              <h2 className="text-black font-title font-bold uppercase">
                MR. {item.name}
              </h2>
              <p className=" text-black text-xs md:text-sm mt-4 mx-2 text-justify font-body">
                {item.review}
              </p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};
