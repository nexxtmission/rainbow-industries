import React from 'react';
import {
    DividerText,
    ItemDescription,
    ItemTitle,
    PropertyDetails,
    PropertyDetailsItems,
    PropertyDetailsZipCode,
    PropertyExtraItem,
    PropertyExtraItems,
    PropertyImageContainer,
    PropertyInfoContainer,
    PropertyInfoMouseArea,
    PropertyNameLink,
} from './styled';
import { PropertyInfoProps } from './types';

const PropertyInfo = ({ property, onMouseLeave }: PropertyInfoProps) => {
    const stopPropagation = (e: React.MouseEvent | React.DragEvent) => e.stopPropagation();
    const imageUrl = property?.imageUrl || 'https://placehold.jp/300x150.png';
    return (
        <PropertyInfoMouseArea onMouseLeave={onMouseLeave}>
            <PropertyInfoContainer onMouseDown={stopPropagation} onDoubleClick={stopPropagation}>
                <PropertyImageContainer>
                    <img src={imageUrl} alt="placeholder" />
                </PropertyImageContainer>
                <PropertyNameLink href="#">{property?.name}</PropertyNameLink>
                <PropertyDetails>
                    <PropertyDetailsItems>
                        <span>1 bedrooms</span>
                    </PropertyDetailsItems>
                    <PropertyDetailsZipCode>Zipcode: {property?.zipCode}</PropertyDetailsZipCode>
                </PropertyDetails>
                <DividerText>Last 12 months</DividerText>
                <PropertyExtraItems>
                    <PropertyExtraItem>
                        <ItemTitle>23</ItemTitle>
                        <ItemDescription>Days Available</ItemDescription>
                    </PropertyExtraItem>
                    <PropertyExtraItem>
                        <ItemTitle>$163</ItemTitle>
                        <ItemDescription>Avg. Daily Rate</ItemDescription>
                    </PropertyExtraItem>
                    <PropertyExtraItem>
                        <ItemTitle>8%</ItemTitle>
                        <ItemDescription>Occupancy</ItemDescription>
                    </PropertyExtraItem>
                    <PropertyExtraItem>
                        <ItemTitle>$324</ItemTitle>
                        <ItemDescription>Revenue</ItemDescription>
                    </PropertyExtraItem>
                </PropertyExtraItems>
            </PropertyInfoContainer>
        </PropertyInfoMouseArea>
    );
};

export default PropertyInfo;
