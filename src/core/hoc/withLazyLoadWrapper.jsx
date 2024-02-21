import { Suspense } from "react";
import { Loader } from "../ui/components";

export const withLazyLoadWrapper = children => {
    return <Suspense fallback={<Loader />}>{children}</Suspense>;
};
