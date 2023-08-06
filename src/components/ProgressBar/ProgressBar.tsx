'use client'
import dynamic from "next/dynamic";
import "nprogress/nprogress.css";

const DynamicNProgress = dynamic(() => import('next-nprogress/component'), {
    ssr: false,
    loading: () => null,
});

const ProgressBar: React.FC = () => {
    return(
        <DynamicNProgress
            color="#29d"
            options={{ trickleSpeed: 50 }}
            showAfterMs={300}
            spinner />
    )
};

export default ProgressBar;






