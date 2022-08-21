import React, { useRef, useState, useEffect, useCallback } from 'react';
import OverlayView from './overlayView';
import PropertyInfo from './propertyInfo';
import { MapContainer } from './styled';
import { MapProps, Property } from './types';

const Map = ({ mapId, placeId: placeIdInProps, properties }: MapProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const localityLayer = useRef(null);

    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [openProperty, setOpenProperty] = useState<Property | null>(null);

    // Define a style with purple fill and border.
    // @ts-ignore
    const featureStyleOptions: google.maps.FeatureStyleOptions = {
        strokeColor: '#1894AB',
        strokeOpacity: 1.0,
        strokeWeight: 1.0,
        fillColor: '#DBF2F6',
        fillOpacity: 0.6,
    };

    useEffect(() => {
        if (ref.current && !map) {
            const newMap = new window.google.maps.Map(ref.current, {
                mapId,
                center: { lat: 0, lng: 0 },
                zoom: 8,
            });
            // @ts-ignore
            localityLayer.current = newMap.getFeatureLayer('LOCALITY');
            setMap(newMap);
        }
    }, [ref, map]);

    useEffect(() => {
        if (!placeIdInProps) return;
        // Apply the style to a single boundary.
        // @ts-ignore
        localityLayer.current.style = (options: { feature: { placeId: string } }) => {
            if (options.feature.placeId === placeIdInProps) {
                // Hana, HI
                return featureStyleOptions;
            }
            return undefined;
        };
        zoomToPolygon();
    }, [placeIdInProps]);

    useEffect(() => {
        if (!properties) return;
        properties.forEach((p) => {
            const marker = new window.google.maps.Marker({
                position: p.latLng,
                map,
                icon: {
                    path: 'M-5,0a5,5 0 1,0 10,0a5,5 0 1,0 -10,0',
                    fillColor: p.color ?? '#1894AB',
                    fillOpacity: 0.8,
                    strokeColor: '#FFFFFF',
                    scale: 1,
                },
            });
            marker.addListener('mouseover', () => {
                setOpenProperty(p);
            });
        });
    }, [properties, map]);

    const handleMouseLeave = useCallback(() => {
        setOpenProperty(null);
    }, []);

    // Call Geocoding API and zoom to the resulting bounds.
    function zoomToPolygon() {
        const geocoder = new window.google.maps.Geocoder();
        geocoder
            .geocode({ placeId: placeIdInProps })
            .then(({ results }) => {
                map?.fitBounds(results[0].geometry.viewport, 50);
            })
            .catch((e) => {
                console.error(`Geocoder failed due to: ${e}`);
            });
    }

    return (
        <MapContainer ref={ref}>
            <OverlayView map={map} property={openProperty} isVisible={!!openProperty}>
                <PropertyInfo property={openProperty} onMouseLeave={handleMouseLeave} />
            </OverlayView>
        </MapContainer>
    );
};

export default Map;
