
import Container from "../../Container";
import { FilterFood } from "../../../utils/filters";
import { useEffect, useState } from "react";
import { useStateValue } from "../../../context/StateProvider";
import Filters from "../../Filters";
import { Title } from "..";

const Menu = () => {

  const [scrollValue, setScrollValue] = useState(0);
  const [{ foodItems }, dispatch] = useStateValue();
  const [filter, setFilter] = useState<string>("all");
    
  return (
    <section className="w-full my-5" id="menu">
      <div className="w-full flex items-center justify-center">
        <Title title="Our Hot Dishes" center />
      </div>
      <Filters filter={filter} setFilter = {setFilter} />
      <Container
        className="bg-containerbg"
        col
        scrollOffset={scrollValue}
        items={filter === "all" ? foodItems : FilterFood(filter)}
      />
    </section>
  );
};

export default Menu;
