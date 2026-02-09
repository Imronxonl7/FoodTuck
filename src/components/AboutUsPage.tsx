import Check from "../assets/Check.svg"
import Eggs from "../assets/Eggs.svg"
import Meat from "../assets/Meat.svg"
import BreadBurger from "../assets/BreadBurger.svg"
const AboutUsPage = () => {
  return (
    <section>
      <div className="container mx-auto pb-10 px-15">
        <div className="flex items-center justify-between">
            <div className="flex flex-col gap-6">
                <p className="text-[32px] text-[#FF9F0D] font-normal textStyle">Abou us</p>
                <div className="leading-13">
                    <p className="text-[48px] font-bold text-[#FF9F0D]">We <span className="text-[48px] font-bold text-white">Create the </span></p>
                    <p className="text-[48px] font-bold text-white">bestfoody product</p>
                </div>
                <p className="max-w-131.5 text-[16px] font-normal text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-5">
                    <img src={Check} alt="" />
                    <p className="text-[18px] font-normal text-white">Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <img src={Check} alt="" />
                    <p className="text-[18px] font-normal text-white">Quisque diam pellentesque bibendum non dui volutpat fringilla. </p>
                  </div>
                  <div className="flex items-center gap-5">
                    <img src={Check} alt="" />
                    <p className="text-[18px] font-normal text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
                <button className="w-47.5 h-15 text-[16px] font-normal text-white bg-[#FF9F0D] rounded-[30px] text-center">Read More</button>
            </div>
            <div className=" flex flex-col gap-4">
              <div>
                <img className="xl:w-165 xl:h-82.5" src={Eggs} alt="" />
              </div>
              <div className="flex items-center gap-4">
              <img className="xl:w-80.5 xl:h-48.5" src={Meat} alt="" />
              <img className="xl:w-80.5 xl:h-48.5" src={BreadBurger} alt="" />
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsPage