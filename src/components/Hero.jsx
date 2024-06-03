// image
import Image from "../../public/assets/images/face.png";
function Hero() {
  return (
    <div className="w-full h-screen tracking-wide">
      <div
        className="bg-no-repeat bg-cover w-full h-full flex items-end pb-20 pl-10"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="flex flex-col px-20 text-white space-y-10">
          <h2 className="font-oswald text-9xl">Title Here</h2>
          <p className="w-1/2 text-2xl font-poppins">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos error accusantium nobis saepe adipisicing elit!
            Dignissimos error accusantium consectetur.
          </p>
          <button className="px-3 py-2.5 bg-orange w-1/3 font-oswald text-2xl">
            REGISTER NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
