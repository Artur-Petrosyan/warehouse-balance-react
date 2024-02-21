import { useCallback, useLayoutEffect, useState } from "react";

const queries = [
    "(min-width: 320px) and (max-width : 480px)",
    "(min-width: 481px) and (max-width : 768px)",
    "(min-width: 769px) and (max-width : 1024px)",
    "(min-width: 1025px) and (max-width : 1200px)",
    "(min-width: 1201px )"
];

const useMatchMedia = () => {
    const mediaQueryLists = queries.map(query => matchMedia(query));
    const getValues = useCallback(() => mediaQueryLists.map(mql => mql.matches), [mediaQueryLists]);
    const [value, setValue] = useState(getValues);
    useLayoutEffect(() => {
        const handler = () => setValue(getValues);
        mediaQueryLists.forEach(mql => mql.addEventListener("change", handler));
        return () => mediaQueryLists.forEach(mql => mql.removeEventListener("change", handler));
    }, [getValues, mediaQueryLists]);
    return [
        "isMobile",
        "isIpadOrTablet",
        "isSmallScreenOrSmallLaptop",
        "isDesktopOrLargeScreen",
        "isExtraLargeScreenOrTv"
    ].reduce(
        (acc, screen, index) => ({
            ...acc,
            [screen]: value[index]
        }),
        {}
    );
};

export default useMatchMedia;
