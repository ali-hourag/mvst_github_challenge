import { useContext } from "react";
import { filterContext } from "../../components/context/FilterContextProvider";

// Custom this function to make context usage easier
export const useFilterContext = () => useContext(filterContext);