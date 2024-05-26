import 'leaflet/dist/leaflet.css';
import useMap from '../hooks/use-map';
import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import { CityType, OfferType } from '../constant/types';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../constant/consts';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

type MapProps = {
  offers: OfferType[];
  activeOfferId: string;
  isMainScreen: boolean;
  selectedCity: CityType;
}

export default function MapComponent({ offers, activeOfferId, isMainScreen, selectedCity }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, selectedCity.location);

  // Update map position
  useEffect(() => {
    if (map && selectedCity) {
      map.flyTo([selectedCity.location.latitude, selectedCity.location.longitude], selectedCity.location.zoom);
    }
  }, [map, selectedCity]);

  // Update markers
  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      offers.forEach((offer: OfferType) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker.setIcon(
          activeOfferId !== undefined && offer.id === activeOfferId
            ? currentCustomIcon
            : defaultCustomIcon
        ).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeOfferId]);

  return (
    <section className={isMainScreen ? 'cities__map map' : 'offer__map map'} ref={mapRef}></section>
  );
}
