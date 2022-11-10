import { SectionPosters, ContainerSectionPosters, Poster } from "./style";
import Carousel from "../Carousel";
const HomeSections = () => {
  return (
    <>
      <ContainerSectionPosters>
        <SectionPosters>
          <Poster>
            <img src="/assets/poster-1.png" alt="Poster-1" />
            <div className="poster-1-title">
              <h3>Premium Quality</h3>
              <p>Collections</p>
            </div>
          </Poster>

          <Poster>
            <img src="/assets/poster-2.png" alt="Poster-2" />
            <div className="poster-2-title">
                <p>50% Offer In Winter</p>
              <h3>Get Exclusive Diamond</h3>
            </div>
          </Poster>
        </SectionPosters>
      </ContainerSectionPosters>
        <Carousel/>

    </>
  );
};
export default HomeSections;
