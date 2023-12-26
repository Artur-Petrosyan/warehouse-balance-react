import { useCallback , useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { setXmlData } from "app/Providers/store/xmlDataReducer";

export const useWrittenOffPageModel = () => {
    const dispatch = useDispatch();
    /*TODO: Add the logic when the user download not XML file , "ALERT or ERROR" */
    const data = useSelector(( state ) => state.XMLData);
    useEffect(() => {
        dispatch(setXmlData())
    } , [dispatch]);

    const openXmlFile = useCallback(() => {
        dispatch(setXmlData())
    } , [dispatch])
    return {data , openXmlFile};
}