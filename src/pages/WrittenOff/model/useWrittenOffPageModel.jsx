import { useCallback , useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { removeXML , setXmlData } from "app/Providers/store/xmlDataReducer";
import { setUploadXMLToLocalStorage } from "core/lib/XMLDataLocalStorage/setXMLDataReact";
import { setBuyerAndPriceData } from "app/Providers/store/buyerAndPriceReducer";

export const useWrittenOffPageModel = () => {
    const dispatch = useDispatch();
    /*TODO: Add the logic when the user download not XML file , "ALERT or ERROR" */
    const data = useSelector(( state ) => state.XMLData);
    const buyerData = useSelector(( state ) => state.buyerAndPriceData.partnersAndPriceData);

    useEffect(() => {
        dispatch(setXmlData())
        dispatch(setBuyerAndPriceData())
    } , [dispatch]);

    const removeXMLData = useCallback(() => {
        dispatch(removeXML())
    } , [dispatch])

    const beforeUpload = setUploadXMLToLocalStorage;

    const openXmlFile = useCallback(() => {
        dispatch(setXmlData())
        dispatch(setBuyerAndPriceData())
    } , [dispatch])

    return {data , buyerData , openXmlFile , removeXMLData , beforeUpload};
}