// image
import Image from "../../../public/assets/images/song.png";

function Header() {
  return (
    <div className="bg-gray flex items-center justify-between px-12 py-2 text-white ">
      <div className="flex flex-col items-center justify-center">
        <img
          className="w-8 h-8"
          src={Image}
          alt="image d'une note de musique"
        />
        <h1 id="title" className="font-semibold">
          Musicology
        </h1>
      </div>
      <div className="flex items-center space-x-10 text-xl uppercase font-oswald tracking-wide">
        <a href="#">Home</a>
        <a href="#">Product</a>
        <a href="#">Promo</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div>
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#ffffff">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </div>
    </div>
  );
}

export default Header;
