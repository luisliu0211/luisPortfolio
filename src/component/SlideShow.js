import Carousel from 'react-bootstrap/Carousel';
import './SlideShow.scss';
import project_Apple from '../../src/images/applemanorProject.png';
import project_MyPortfolio from '../../src/images/portfolioWebsite.png';
import project_OhDogCat from '../../src/images/ohdogcatProject.png';
import project_OhDogCatBE from '../../src/images/社群後台管理.png';

function SlideShow() {
  let photoData = [];
  return (
    <div className="slideShow">
      <Carousel className="carousel" variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={project_Apple}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={project_MyPortfolio}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={project_OhDogCat}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={project_OhDogCatBE}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SlideShow;
