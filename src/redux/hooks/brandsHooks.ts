import { useAppSelector } from './selectors';
import { BrandsTypes } from 'src/types/types'

export const useBrandData = (): any => useAppSelector((state: any) => state.brands);
