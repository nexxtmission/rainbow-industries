import React from 'react';

export interface Property {
    name: string;
    imageUrl?: string;
    zipCode?: string;
    details?: {
        bedrooms: number;
        bathrooms: number;
    };
    extraDetails?: PropertyExtraDetails;
    latLng: google.maps.LatLngLiteral;
    color?: string;
}

export interface PropertyExtraDetails {
    label?: string;
    items?: Array<PropertyExtraDetailsItem>;
}

export interface PropertyExtraDetailsItem {
    label: string;
    value: unknown;
}

export interface AirbnbMarketMapProps {
    /**
     * The area to hightlight on the map.
     */
    city?: string;
    /**
     * Array of Property objects to display on the map.
     */
    properties?: Property[];
    /**
     * The Google api key for the map.
     */
    googleApiKey: string;
    /**
     * The map id to use for the map.
     */
    mapId: string;
}

export interface MapProps {
    properties?: Property[];
    mapId: string;
    placeId?: string;
}

export interface OverlayViewProps {
    isVisible?: boolean;
    map?: google.maps.Map | null;
    property?: Property | null;
    children?: React.ReactNode;
}

export interface MapOverlayProps {
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
    children?: React.ReactNode;
}

export interface InfoWindowProps {
    isOpen?: boolean;
    map?: google.maps.Map | null;
    marker?: google.maps.Marker | null;
    property?: Property | null;
    children?: React.ReactNode;
}

export interface PropertyInfoProps {
    property?: Property | null;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}
