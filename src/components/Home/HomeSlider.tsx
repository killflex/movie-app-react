import { useEffect, useState } from "react";
import { CarouselMovie } from "../../utils/constant";
import Carousel from "react-bootstrap/Carousel";
import baseApi from "../../api/axiosInstance";
import HomeCarousel from "./HomeCarousel";

const HomeSlider = () => {
  const [carouselMovies, setCarouselMovies] = useState<CarouselMovie[]>([]);

  const fetchUpComing = async () => {
    try {
      const response = await baseApi.get(
        "/3/movie/popular?language=en-US&page=1"
      );
      setCarouselMovies(response.data.results);
    } catch (error) {
      console.log("fetch upcoming movies error:", error);
    }
  };

  useEffect(() => {
    fetchUpComing();
  }, []);

  return (
    <div className="row px-10">
      <div className="col-8">
        <HomeCarousel carouselMovies={carouselMovies} />
      </div>
      <div className="col-4 bg-red-300"></div>
    </div>
  );
};

export default HomeSlider;
