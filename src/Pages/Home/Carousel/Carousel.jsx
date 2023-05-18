import slider1 from '../../../assets/slider1.jpg';
import slider2 from '../../../assets/slider2.jpg';
import slider4 from '../../../assets/slider4.jpg';

const Carousel = () => {
  return (
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={slider1}
            className="w-full"
          />
          <div className="absolute left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full flex items-center rounded-xl w-full justify-center">
            <div className="text-white space-y-4 flex flex-col justify-center">
              <h2 className="text-3xl md:text-6xl font-bold mx-4 text-center">Discover the Joy of Toy Cars!</h2>
              <p className='text-center mx-4'>
              Welcome to our Toy Car Shop, where imagination meets the thrill of the race!
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={slider2}
            className="w-full"
          />
          <div className="absolute left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full flex items-center rounded-xl w-full justify-center">
            <div className="text-white space-y-4 flex flex-col justify-center">
              <h2 className="text-3xl md:text-6xl font-bold mx-8 text-center">Unleash Your Inner Speedster with Our Collection of Toy Cars</h2>
              <p className='text-center mx-8'>
              At our Toy Car Shop, we believe in the power of play and its ability to create lasting memories.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={slider4}
            className="w-full h-[600px]"
          />
          <div className="absolute left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full flex items-center rounded-xl w-full justify-center">
            <div className="text-white space-y-4 flex flex-col justify-center">
              <h2 className="text-3xl md:text-6xl font-bold mx-8 text-center">Experience the Thrill of Racing with our Premium Toy Cars</h2>
              <p className='text-center mx-8'>
              Step into the fast lane of excitement with our premium toy <br /> cars that are designed to deliver an unparalleled racing experience.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
  );
};

export default Carousel;
