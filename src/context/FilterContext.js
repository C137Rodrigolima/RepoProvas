import { createContext, useState } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [filter, setFilter] = useState("");
  const [change, setChange] = useState(false);

  return (
    <FilterContext.Provider value={{ filter, setFilter ,change, setChange}}>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterContext;