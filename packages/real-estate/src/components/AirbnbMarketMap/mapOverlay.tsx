import React from 'react';
import { MapOverlayContainer, StyledMapOverlay } from './styled';
import { MapOverlayProps } from './types';

const MapOverlay = ({ onMouseLeave, children }: MapOverlayProps) => {
    console.log('MapOverlay');
    return (
        <MapOverlayContainer>
            <StyledMapOverlay>{children}</StyledMapOverlay>
        </MapOverlayContainer>
    );
};

export default MapOverlay;
