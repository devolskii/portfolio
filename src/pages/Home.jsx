import heroImg from "../assets/images/hero.png";
const Home = () => {
  return (
    <div
      id="home"
      className="pt-17 bg-blood h-lvh px-4 pb-4 flex flex-col justify-evenly lg:flex-row lg:justify-between lg:gap-8"
    >
      <div className="lg:flex lg:flex-col lg:justify-center">
        <div className="text-5xl basis-3/14">
          <div className="pt-4">Hello,</div>
          <div className="pt-4">I'm devolskii</div>
        </div>
        <div className="text-2xl pt-4 basis-3/14">
          <ul>
            <li>revolutionary activist</li>
            <li>musician</li>
            <li>programmer</li>
          </ul>
        </div>
      </div>
      <div className=" py-4 basis-8/14 lg:flex lg:justify-center">
        <img
          src={heroImg}
          alt="hero image"
          className="h-full object-contain "
        />
      </div>
    </div>
  );
};
export default Home;
