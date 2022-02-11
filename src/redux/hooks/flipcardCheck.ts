import { useAppSelector } from '../hooks/selectors';
import { RootState } from '../store/store';

export const useFlipCardCheck = () => useAppSelector((state: RootState) => state.flip_card_check);