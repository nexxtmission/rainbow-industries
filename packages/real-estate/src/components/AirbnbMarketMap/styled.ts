import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const MapContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const StyledMapOverlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 8px;
`;

export const PropertyInfoMouseArea = styled.div`
    padding: 4px;
    margin: -4px;
`;

export const PropertyInfoContainer = styled.div`
    position: relative;
    width: 250px;
    padding: 4px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 8px;
    cursor: auto;

    ::before {
        content: '';
        position: absolute;
        top: -5px;
        right: -5px;
        bottom: -5px;
        left: -5px;
        z-index: -1;
    }
`;

export const PropertyImageContainer = styled.div`
    width: 100%;
    height: 100px;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 8px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`;

export const PropertyNameLink = styled.a`
    font-size: 1.1em;
    text-decoration: underline;
    color: #000;
    font-weight: bold;
`;

export const PropertyDetails = styled.div`
    display: flex;
    margin: 8px 0;
`;

export const PropertyDetailsItems = styled.div`
    flex: 1;
    display: flex;
`;

export const PropertyDetailsZipCode = styled.div`
    color: #ccc;
`;

export const DividerText = styled.p`
    margin: 0 0 4px 0;
    font-size: 0.8em;
`;

export const PropertyExtraItems = styled.div`
    display: flex;
    align-items: center;
    border-radius: 8px;
    background-color: rgba(168, 178, 180, 0.1);
    min-height: 48px;
`;

export const PropertyExtraItem = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 0px;
    align-items: center;
    min-width: 0;
    overflow: hidden;
    padding: 4px;

    &:not(:last-child) {
        border-right: 1px solid #ccc;
    }
`;

export const ItemTitle = styled.span`
    font-size: 1em;
    font-weight: bold;
`;

export const ItemDescription = styled.span`
    color: #000;
    font-size: 0.8em;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
