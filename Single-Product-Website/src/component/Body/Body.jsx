import { productData } from "../../api/DummyData";
import Card from "../Card/Card";

const Body = () => {
  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {productData.map((items) => {
            return (
              <Card
                key={items.id}
                title={items.title}
                images={items.imageSrc}
                price={items.price}
                category={items.category}
                count={items.id}
                content={items.content}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
