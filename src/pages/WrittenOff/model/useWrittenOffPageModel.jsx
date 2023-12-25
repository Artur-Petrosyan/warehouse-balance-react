import { useCallback , useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { setData } from "app/Providers/store/xmlDataReducer";

export const useWrittenOffPageModel = () => {
    const dispatch = useDispatch();
    const data = useSelector(( state ) => state.XMLData);
    useEffect(() => {
        dispatch(setData())
    } , [dispatch]);

    const openFile = useCallback(() => {
        dispatch(setData())
    } , [dispatch])
    return {data , openFile};
}