import { useAppSelector } from './selectors';

export const useBrandData = (): any => useAppSelector((state: any) => state.brands);
