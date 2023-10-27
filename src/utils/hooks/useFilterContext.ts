import { useContext } from "react";
import { filterContext } from "../../components/context/FilterContextProvider";

export const useFilterContext = () => useContext(filterContext);