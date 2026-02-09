import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import type { RecipesType } from "../pages/Types/RecipesType";

export const ProductsTabs = ({
  mealAllTypes,
  data,
}: {
  mealAllTypes: (string | undefined)[];
  data: (RecipesType | undefined)[];
}) => {
  return (
    <Tabs style={{ padding: "40px" , }}>
      <TabList style={{ display: "flex", justifyContent: "center" }}>
        {mealAllTypes?.map((el) => (
          <Tab key={el}>{el}</Tab>
        ))}
      </TabList>

      {mealAllTypes?.map((el: string | undefined) => {
        return (
          <TabPanel style={{display:"flex" , justifyContent:"center" , gap:"60px"}}>
          <img className="w-91.5 h-90.5 rounded-[10px]" src={data?.filter((item) => item?.mealType?.includes(el))[0]?.image} alt="" />
          <div className="grid overflow-y-scroll h-90.5  grid-cols-2 gap-5">         
            {data
              ?.filter((item) => item?.mealType?.includes(el))
              ?.map((items) => (
                

                    <div className="max-w-94 flex gap-2 max-h-19.75 w-full h-full">
                      <img
                        className="w-20 h-19.75 rounded-md"
                        src={items?.image}
                        alt=""
                      />
                      <div className="flex flex-col gap-1">
                        <p className="text-white text-[20px] font-bold">
                          {items?.name}
                        </p>
                        <p className="text-[14px] font-normal text-white line-clamp-1">
                          {items?.instructions[1]}
                        </p>
                        <p className="text-[18px] font-bold text-[#FF9F0D] line-clamp-1">
                          {items?.caloriesPerServing}
                        </p>
                      </div>
                    </div>
              ))}
              </div>
          </TabPanel>
        );
      })}
    </Tabs>
  );
};
