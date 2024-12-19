import { useDispatch } from 'react-redux';
import { AppDispatch, Rootstate } from './store';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<Rootstate> = useSelector;
