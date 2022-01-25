import { useAppSelector } from '../hooks/selectors';

export const useConfigCompany = () => useAppSelector((state: any) => state.getConfig);