import { useAppSelector } from '../hooks/selectors';

export const useMaterials = () => useAppSelector((state: any) => state.materials);