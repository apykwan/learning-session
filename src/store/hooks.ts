import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';

import { AppDispatch, RootState } from './index';

type DispatchFunction = () => AppDispatch;

export const useSessionDispatch: DispatchFunction = useDispatch;
export const useSessionSelector: TypedUseSelectorHook<RootState> = useSelector;