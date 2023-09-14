import { Deck } from "@deck.gl/core";
import { fetchMap } from "@deck.gl/carto";
import mapboxgl from "mapbox-gl";
import { useEffect } from "react";

const SectionPeta2 = () => {
  const cartoMapId = "ff6ac53f-741a-49fb-b615-d040bc5a96b8";

  useEffect(() => {
    fetchMap({ cartoMapId }).then(({ initialViewState, mapStyle, layers }) => {
      const deck = new Deck({
        controller: true,
        initialViewState,
        layers,
      });
      // Add Mapbox GL for the basemap. It's not a requirement if you don't need a basemap.
      const MAP_STYLE = `https://basemaps.cartocdn.com/gl/${mapStyle.styleType}-gl-style/style.json`;
      const map = new mapboxgl.Map({
        container: "map",
        style: MAP_STYLE,
        // interactive: false,
        accessToken:
          "pk.eyJ1IjoibXVocm9maTAxIiwiYSI6ImNsbWluYjhnMzJxbXQzZGxwc2Ixcm1ucWkifQ.i4GaXqX4_YEZeF2bi8aXgw",
      });
      deck.setProps({
        onViewStateChange: ({ viewState }) => {
          const { longitude, latitude, ...rest } = viewState;
          map.jumpTo({ center: [longitude, latitude], ...rest });
        },
      });
    });
  }, []);

  return (
    <div
      id="map"
      style={{
        position: "sticky",
        top: "0px",
        width: "100%",
        height: "100vh",
      }}
    ></div>
  );
};

export default SectionPeta2;
