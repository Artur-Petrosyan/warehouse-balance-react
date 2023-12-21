import {Suspense} from "react";
import {Loader} from "../ui/components";

export const LazyLoadWrapperHOC = (children) => {
    return (
        <Suspense fallback={<Loader/>}>
            {children}
        </Suspense>
    )
}