// image
import Image from '../../public/assets/images/simon.png';

function Simon() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center tracking-widest">
  <img
    src={Image}
    alt="Background"
    className="absolute inset-0 w-full object-cover"
  />
  <div className="relative z-10 text-white flex flex-col items-center justify-center w-1/2 mx-auto space-y-20 mt-72">
    <p className="font-poppins text-2xl text-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quisquam distinctio unde sed libero et laboriosam odio aliquid dolore, maiores doloribus commodi tempore earum consequatur excepturi?
    </p>
    <h3 className="text-5xl font-oswald font-bold">HERBERT SIMON</h3>
  </div>
</div>

  )
}

export default Simon