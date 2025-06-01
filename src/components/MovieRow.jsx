import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieRow = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const data = [
    {
      img: "https://assets.gadgets360cdn.com/pricee/assets/product/202502/Maalik_poster1_1739966806.jpg",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIKm9BAswOvLFWSyUooUJfqPEYj6YFyY8iGg&s",
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BMWI4N2Y5NWUtNzEwOC00YjYzLWEzY2ItN2YwYTIxYzBjZGZmXkEyXkFqcGc@._V1_.jpg",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJgQL6cOuSPoN_LFHtB3_cjuakut5gbwU2DpcNkiEjriNNsbUf9vzS925U5soiiO8zfek&usqp=CAU",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/The_Royals_%282025_TV_series%29.jpg/250px-The_Royals_%282025_TV_series%29.jpg",
    },
    {
      img: "https://images.news18.com/webstories/uploads/2025/03/Snapinst.app_482166397_18156758983347757_1820853983698816102_n_1080-2025-03-e5df15723f21c9d464c084d2676a3525.jpg",
    },
  ];

  return (
    <div className="w-full px-4 md:px-12 mt-10">
      <h1 className="text-2xl md:text-4xl font-bold mb-10">Trending Now</h1>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="px-2">
            <div className="aspect-[2/3] w-full bg-black rounded-lg overflow-hidden flex justify-center items-center">
              <img
                src={item.img}
                alt={`Movie ${index}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieRow;
