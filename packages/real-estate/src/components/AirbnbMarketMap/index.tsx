import React, { useEffect, useState } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import { LookupRegionRequestData, LookupRegionResponse } from '@googlemaps/region-lookup';
// @ts-ignore
import { lookupRegion } from '@googlemaps/region-lookup/dist/index.esm.js';
import Map from './map';
import { Container } from './styled';
import { AirbnbMarketMapProps } from './types';

const AirbnbMarketMap = ({ city, properties, googleApiKey, mapId }: AirbnbMarketMapProps) => {
    const [placeId, setPlaceId] = useState<string>();
    useEffect(() => {
        const fetchData = async () => {
            const headers = {
                'X-Goog-Api-Key': googleApiKey,
            };
            const data: LookupRegionRequestData = {
                identifiers: [
                    {
                        place: city,
                        place_type: 'locality',
                        region_code: 'us',
                    },
                ],
            };
            try {
                const response: LookupRegionResponse = await lookupRegion({ headers, data });
                if (response.data.matches.length > 0) {
                    setPlaceId(response.data.matches[0].matchedPlaceId);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [city, googleApiKey]);

    return (
        <Container>
            <Wrapper apiKey={googleApiKey} version="beta">
                <Map mapId={mapId} placeId={placeId} properties={properties} />
            </Wrapper>
        </Container>
    );
};

export default AirbnbMarketMap;
