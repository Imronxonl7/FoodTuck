import BackgroundMeat from "../assets/BackgorundMeat.svg";
import PersonallChefs from "../assets/PersonallChefs.svg";
import CountUp from "react-countup";
import ItemsFood from "../assets/ItemsFood.svg"
import Sanchqi from "../assets/Sanchqi.svg"
import Pizza from "../assets/Pizza.svg"
const Experience = () => {
  return (
    <section
      className="py-20"
      
    >
      
      <div className="container mx-auto relative z-10 px-15 py-20 bg-cover bg-center pt-10 bg-black"
      style={{ backgroundImage: `url(${BackgroundMeat})` }}>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="flex items-center relative  justify-between">
          <div className="flex flex-col justify-center items-center gap-2">
            <img className="xl:w-30 xl:h-30 " src={PersonallChefs} alt="" />
            <div className="flex flex-col">
              <p className="text-[24px] font-bold text-white">
                Professional Chefs
              </p>
              <p className="text-[40px] text-center font-bold text-white">
                <CountUp
                style={{ color: "white" }}
                duration={5}
                end={420}
              />
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <img className="xl:w-30 xl:h-30 " src={ItemsFood} alt="" />
            <div className="flex flex-col">
              <p className="text-[24px] font-bold text-white">
                Items of Food
              </p>
              <p className="text-[40px] text-center font-bold">
                <CountUp
                style={{ color: "white" }}
                duration={5}
                end={320}
              />
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <img className="xl:w-30 xl:h-30 " src={Sanchqi} alt="" />
            <div className="flex flex-col">
              <p className="text-[24px] font-bold text-white">
                Years Of Experienced
              </p>
              <p className="text-white text-center text-[40px] font-bold">
                <CountUp
                style={{ color: "white" }}
                duration={5}
                end={30}
              />+
              </p>
              
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <img className="xl:w-30 xl:h-30 " src={Pizza} alt="" />
            <div className="flex flex-col">
              <p className="text-[24px] font-bold text-white">
                Professional Chefs
              </p>
              <p className="text-[40px] font-bold text-center text-white">
                <CountUp
                style={{ color: "white" }}
                duration={5}
                end={220}
              />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
