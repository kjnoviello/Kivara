import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
    <div>
        <ContentLoader
            className="py-5 m-auto h-auto container"
            speed={2}
            width={400}
            height={150}
            viewBox="0 0 300 150"
            backgroundColor="#5a6c85"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="42" y="9" rx="3" ry="3" width="71" height="4" />
            <rect x="43" y="22" rx="3" ry="3" width="42" height="4" />
            <rect x="13" y="7" rx="0" ry="0" width="15" height="23" />
            <rect x="250" y="24" rx="3" ry="3" width="42" height="4" />
            <rect x="250" y="10" rx="3" ry="3" width="42" height="4" />
            <rect x="42" y="39" rx="3" ry="3" width="71" height="4" />
            <rect x="43" y="51" rx="3" ry="3" width="42" height="4" />
            <rect x="13" y="36" rx="0" ry="0" width="15" height="23" />
            <rect x="250" y="54" rx="3" ry="3" width="42" height="4" />
            <rect x="250" y="40" rx="3" ry="3" width="42" height="4" />
            <rect x="42" y="68" rx="3" ry="3" width="71" height="4" />
            <rect x="43" y="80" rx="3" ry="3" width="42" height="4" />
            <rect x="13" y="65" rx="0" ry="0" width="15" height="23" />
            <rect x="250" y="82" rx="3" ry="3" width="42" height="4" />
            <rect x="250" y="69" rx="3" ry="3" width="42" height="4" />
            <rect x="43" y="99" rx="3" ry="3" width="71" height="4" />
            <rect x="44" y="111" rx="3" ry="3" width="42" height="4" />
            <rect x="14" y="96" rx="0" ry="0" width="15" height="23" />
            <rect x="251" y="113" rx="3" ry="3" width="42" height="4" />
            <rect x="251" y="99" rx="3" ry="3" width="42" height="4" />
        </ContentLoader>
    </div>
)

export default Loader