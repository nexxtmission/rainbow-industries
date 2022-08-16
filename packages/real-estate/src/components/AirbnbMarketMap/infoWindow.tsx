import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { InfoWindowProps } from './types';

const InfoWindow = ({ isOpen, map, property, children }: InfoWindowProps) => {
    const infoWindow = useRef<google.maps.InfoWindow>(new google.maps.InfoWindow());
    const [containerElement, setContainerElement] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        if (isOpen && property) {
            const element = document.createElement('div');
            infoWindow.current.setContent(element);
            infoWindow.current.setPosition(property.coordinates);
            infoWindow.current.open({
                anchor: null,
                map,
            });
            setContainerElement(element);
        }
        return () => {
            infoWindow.current.close();
        };
    }, [isOpen, property, map]);

    if (isOpen && containerElement) {
        console.log(containerElement);
        return ReactDOM.createPortal(children, containerElement);
    }
    return null;
};

export default InfoWindow;
