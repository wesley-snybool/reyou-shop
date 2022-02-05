import { useAppSelector } from "./selectors";

export const useSustaibleValues =  () => useAppSelector(state => state.universe);