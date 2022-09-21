import React from 'react';
import { RenderIf } from 'react-rainbow-components';
import { Close } from '@rainbow-modules/icons';
import {
    CloseButtonIcon,
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

const PropertyInfo = ({ property, onRequestClose }: PropertyInfoProps) => {
    const stopPropagation = (e: React.MouseEvent | React.DragEvent) => e.stopPropagation();
    const imageUrl = property?.photoUrl || 'https://placehold.jp/300x150.png';

    return (
        <PropertyInfoMouseArea>
            <PropertyInfoContainer onMouseDown={stopPropagation} onDoubleClick={stopPropagation}>
                <CloseButtonIcon
                    icon={<Close />}
                    variant="neutral"
                    size="small"
                    onClick={onRequestClose}
                />
                <PropertyImageContainer>
                    <img src={imageUrl} alt="placeholder" />
                </PropertyImageContainer>
                <PropertyNameLink href={property?.airbnbUrl} target="_blank">
                    {property?.name}
                </PropertyNameLink>
                <PropertyDetails>
                    <PropertyDetailsItems>
                        <RenderIf isTrue={property?.beds}>
                            <span>{property?.beds} beds&nbsp;&nbsp;</span>
                        </RenderIf>
                        <RenderIf isTrue={property?.beds}>
                            <span>{property?.bathrooms} bathrooms</span>
                        </RenderIf>
                    </PropertyDetailsItems>
                    <PropertyDetailsZipCode>Zipcode: {property?.zipCode}</PropertyDetailsZipCode>
                </PropertyDetails>
                <RenderIf isTrue={property?.extraDetails?.items?.length}>
                    <DividerText>{property?.extraDetails?.label}</DividerText>
                    <PropertyExtraItems>
                        {property?.extraDetails?.items?.map((item) => (
                            <PropertyExtraItem>
                                <ItemTitle>{item.value}</ItemTitle>
                                <ItemDescription>{item.label}</ItemDescription>
                            </PropertyExtraItem>
                        ))}
                    </PropertyExtraItems>
                </RenderIf>
            </PropertyInfoContainer>
        </PropertyInfoMouseArea>
    );
};

export default PropertyInfo;
