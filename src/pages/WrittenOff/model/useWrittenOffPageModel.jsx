import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncSetXmlData, removeXML } from "app/Providers/store/xmlDataReducer";
import { setUploadXMLToLocalStorage } from "core/lib/XMLDataLocalStorage/setXMLDataReact";
import { asyncSetBuyerAndPriceData, removeBuyerAndPriceData } from "app/Providers/store/buyerAndPriceReducer";

export const useWrittenOffPageModel = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.XMLData);
    const buyerData = useSelector(state => state.buyerAndPriceData.partnersAndPriceData);
    useEffect(() => {
        dispatch(asyncSetXmlData());
        dispatch(asyncSetBuyerAndPriceData());
    }, [dispatch]);

    const removeXMLData = useCallback(() => {
        dispatch(removeXML());
        dispatch(removeBuyerAndPriceData());
    }, [dispatch]);

    const beforeUpload = useMemo(() => setUploadXMLToLocalStorage, []);
    return { data, buyerData, removeXMLData, beforeUpload };
};
