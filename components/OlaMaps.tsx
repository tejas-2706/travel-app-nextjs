"use client"
import { useState } from "react";
import DeckGL from "@deck.gl/react";
import maplibregl from "maplibre-gl";
import StaticMap, { ViewState } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css"; // Use maplibre-gl instead of mapbox-gl


const OlaMaps = () => {
  const [viewState, setViewState] = useState({
    longitude: 75.3433,
    latitude: 19.8762,
    zoom: 10
  });

  return (
    <div className="flex relative">
      <DeckGL
        style={{ width: "48vw", height: "80vh", overflow: "hidden", position:"absolute", right:"0",borderRadius:"10px", margin:"10px"}}
        viewState={viewState}
        onViewStateChange={(event) => setViewState( event.viewState as ViewState)}
        controller={true}
        layers={[]}
      >
        <StaticMap
          mapLib={maplibregl as any}
          reuseMaps={true}
          mapStyle="https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json"
          transformRequest={(url : string, resourceType? : string) => {
            if (url.includes("?")) {
              url = url + "&api_key=7InLqr0WczsUdcid6JkzDLDjemL0hBdP74TMC93i";
            } else {
              url = url + "?api_key=7InLqr0WczsUdcid6JkzDLDjemL0hBdP74TMC93i";
            }
            return { url, resourceType };
          }}
        />
      </DeckGL>
    </div>
  );
};

export default OlaMaps;

// "use client";
// import { useState, useRef, useEffect } from "react";
// import DeckGL from "@deck.gl/react";
// import maplibregl from "maplibre-gl";
// // Import the maplibre version of StaticMap
// import StaticMap, { ViewState } from "react-map-gl/maplibre";
// import "maplibre-gl/dist/maplibre-gl.css";

// const OlaMaps = () => {
//   // Define the initial view state
//   const [viewState, setViewState] = useState({
//     longitude: 75.3433,
//     latitude: 19.8762,
//     zoom: 10,
//     pitch: 0,
//     bearing: 0,
//   });

//   // Use a ref to keep track of the DeckGL instance
//   const deckRef = useRef<any>(null);

//   // Cleanup the DeckGL instance when the component unmounts
//   useEffect(() => {
//     return () => {
//       if (deckRef.current && deckRef.current.finalize) {
//         deckRef.current.finalize();
//       }
//     };
//   }, []);

//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <DeckGL
//         ref={deckRef}
//         viewState={viewState}
//         onViewStateChange={({ viewState }) =>
//           setViewState(viewState as ViewState)
//         }
//         controller={true}
//         layers={[]}
//         style={{ width: "100%", height: "100%" }}
//       >
//         <StaticMap
//           reuseMaps={true} // Reuse the underlying map instance
//           preventStyleDiffing={true} // Prevent unnecessary reinitializations
//           mapStyle="https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json"
//           transformRequest={(url: string, resourceType?: string) => {
//             // Append API key to the URL
//             const updatedUrl = url.includes("?")
//               ? `${url}&api_key=7InLqr0WczsUdcid6JkzDLDjemL0hBdP74TMC93i`
//               : `${url}?api_key=7InLqr0WczsUdcid6JkzDLDjemL0hBdP74TMC93i`;
//             return { url: updatedUrl, resourceType };
//           }}
//         />
//       </DeckGL>
//     </div>
//   );
// };

// export default OlaMaps;
