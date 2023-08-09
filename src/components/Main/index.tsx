import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";
import rightArrow from "../../assets/rightArrow.svg";

const Main = () => {
  return (
    <div className="flex items-center justify-between min-h-screen text-white">
      <div className="space-y-12 basis-1/3">
        <div className="space-y-10">
          <h2 className="text-5xl font-medium font-lora">Modern Interior</h2>
          <p className="text-2xl">
            A full-Service residential & commercial interior design and staging
            company offering professional organizing & eco-services.
          </p>
        </div>

        <div>
          <a
            href="#"
            className="flex items-center text-lg font-bold hover:underline"
          >
            <p>Read More</p>

            <img src={rightArrow} alt="Right Arrow Icon" className="ml-3" />
          </a>
        </div>
      </div>

      <div className="relative basis-2/4">
        <img src={photo1} alt="Interior Design Photo" />

        <div className="absolute -bottom-24 right-8 flex flex-col px-8 py-4 space-y-6 bg-[#181719] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          <div className="flex space-x-4">
            <img
              src={photo2}
              alt="Aliza Webber Photo"
              className="w-[50px] h-[50px] rounded-[50%]"
            />

            <div className="space-y-2">
              <p className="text-sm font-medium">Aliza Webber</p>
              <p className="text-[#828282] text-xs font-medium">
                Interior designer
              </p>
            </div>
          </div>

          <p className="text-2xl font-bold font-lora max-w-[75%]">
            Designed in 2020 by Aliza Webber
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
