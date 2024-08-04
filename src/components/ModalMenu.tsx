const ModalMenu = () => {
  return (
    <div className="container h-72 bg-darkViolet rounded-lg absolute top-20 left-[5%] sm:hidden shadow-md">
      <div className="text-white text-center font-bold p-8 flex-center">
        <ul className="flex flex-col gap-5">
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Resources</a>
          </li>
        </ul>
      </div>
      <hr className="w-[90%] mx-auto text-gray" />
      <div className="flex flex-col items-center p-3">
        <a href="#" className="text-white font-bold mb-5">
          Login
        </a>
        <button className="button w-[90%] rounded-full">Sign Up</button>
      </div>
    </div>
  );
};

export default ModalMenu;
