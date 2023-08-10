import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";
import rightArrow from "../../assets/rightArrow.svg";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen text-white lg:flex-row lg:items-center lg:justify-between ">
      <div className="space-y-9 lg:space-y-12 basis-1/3 my-9 lg:my-0">
        <div className="space-y-6 lg:space-y-10">
          <h2 className="text-4xl font-medium lg:text-5xl font-lora">
            Modern Interior
          </h2>
          <p className="text-sm lg:text-2xl">
            A full-Service residential & commercial interior design and staging
            company offering professional organizing & eco-services.
          </p>
        </div>

        <div>
          <a
            href="#"
            className="flex items-center text-sm font-bold lg:text-lg hover:underline"
          >
            <p>Read More</p>

            <img src={rightArrow} alt="Right Arrow Icon" className="ml-3" />
          </a>
        </div>
      </div>

      <div className="relative basis-2/4">
        <img src={photo1} alt="Interior Design Photo" />

        <div className="max-w-[300px] lg:max-w-none absolute lg:-bottom-24 -bottom-20 right-3 lg:right-8 flex flex-col py-3 px-6 lg:px-8 lg:py-4 space-y-5 lg:space-y-7 bg-[#181719] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          <div className="flex space-x-4 ">
            <img
              src={photo2}
              alt="Aliza Webber Photo"
              className="w-9 h-9 lg:w-[3.125rem] lg:h-[3.125rem] rounded-[50%]"
            />

            <div className="space-y-1 lg:space-y-2">
              <p className="text-xs font-medium lg:text-sm">Aliza Webber</p>
              <p className="text-[#828282] text-[0.625rem] text-xs font-medium">
                Interior designer
              </p>
            </div>
          </div>

          <p className="text-lg lg:text-2xl font-bold font-lora max-w-[75%]">
            Designed in 2020 by Aliza Webber
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
