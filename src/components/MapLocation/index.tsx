import { IFrameMap } from "./style";
const MapLocation = () => {
  return (
    <>
      <IFrameMap
        width="1080"
        height="500"
        id="gmap_canvas"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.90158040115!2d-49.281592784351574!3d-25.441553739581025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4773315ed9f%3A0x2e72db3877099caa!2sDevlandia!5e0!3m2!1spt-BR!2sbr!4v1668544831982!5m2!1spt-BR!2sbr"
      ></IFrameMap>
    </>
  );
};

export default MapLocation;
