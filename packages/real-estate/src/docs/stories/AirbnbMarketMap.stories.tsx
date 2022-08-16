import React from 'react';
import styled from 'styled-components';
import AirbnbMarketMap from '../../components/AirbnbMarketMap';
import { Property } from '../../components/AirbnbMarketMap/types';

export default {
    title: 'AirbnbMarketMap',
    component: AirbnbMarketMap,
};

const Container = styled.div`
    width: 700px;
    height: 400px;
`;

const properties: Property[] = [
    {
        name: 'Hana, HI',
        zipCode: '96765',
        latLng: {
            lat: 40.67393736678081,
            lng: -73.950401391652,
        },
        color: 'red',
    },
    {
        name: 'Super Power',
        zipCode: '96765',
        latLng: {
            lat: 40.673983106286876,
            lng: -73.95025884526443,
        },
    },
    {
        name: 'Flatiron Building',
        zipCode: '96765',
        latLng: {
            lat: 40.74119487759351,
            lng: -73.98873812452175,
        },
        color: 'red',
    },
];

export const Basic = () => (
    <Container>
        <AirbnbMarketMap
            city="Nueva York"
            properties={properties}
            mapId="2c7d9c6b230ec720"
            googleApiKey="AIzaSyCjq-D_xrVG8o_lHrx4F1jmZ7G2Sqbyj24"
        />
    </Container>
);
