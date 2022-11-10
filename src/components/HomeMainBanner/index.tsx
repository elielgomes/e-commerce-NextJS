import { ContainerMainBanner, ContainerInfoBanner } from "./style";

const MainBanner: React.FC = () => {
  return (
    <>
      <ContainerMainBanner>
        <ContainerInfoBanner>
          <div>
            <h1>Exclusive Design Collection</h1>
            <p>Casual line with short design in 100% suede Diamond</p>
            <button>Browser Item</button>
          </div>
        </ContainerInfoBanner>
      </ContainerMainBanner>
    </>
  );
};
export default MainBanner;
