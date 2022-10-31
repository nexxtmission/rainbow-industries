import { useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import positionResolver from './helpers/positionResolver';
import { OverlayViewProps } from './types';

const OverlayView = ({ isVisible, map, property, children }: OverlayViewProps) => {
    const overlayView = useRef<google.maps.OverlayView>();
    const containerElement = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (map) {
            overlayView.current = new google.maps.OverlayView();
            overlayView.current.onAdd = onAdd;
            overlayView.current.draw = draw;
            overlayView.current.onRemove = onRemove;
            overlayView.current.setMap(map);
        }
    }, [map]);

    useEffect(() => {
        if (overlayView.current) {
            overlayView.current.draw = draw;
            overlayView.current.draw();
        }
    }, [property]);

    // onAdd, draw and onRemove are required for the OverlayView to work.
    const onAdd = useCallback(() => {
        containerElement.current = document.createElement('div');
        containerElement.current.style.position = 'absolute';
        containerElement.current.style.maxWidth = '100%';

        const panes = overlayView.current?.getPanes();
        if (panes && containerElement.current) {
            panes.floatPane.appendChild(containerElement.current);
        }
    }, []);
    const draw = () => {
        if (isVisible && property && containerElement.current) {
            const mapCanvasProjection = overlayView.current?.getProjection();
            const point = mapCanvasProjection?.fromLatLngToDivPixel(property.latLng);
            const boundsNorth = mapCanvasProjection?.fromLatLngToDivPixel(
                map?.getBounds()?.getNorthEast()!,
            );
            const boundsSouth = mapCanvasProjection?.fromLatLngToDivPixel(
                map?.getBounds()?.getSouthWest()!,
            );
            const div = map?.getDiv().getBoundingClientRect();
            const content = containerElement.current.getBoundingClientRect();
            if (point && div) {
                const { x, y } = point;
                const position = positionResolver({
                    content: {
                        width: content.width,
                        height: content.height,
                    },
                    bounds: {
                        topLeft: {
                            x: boundsSouth!.x,
                            y: boundsNorth!.y,
                        },
                        bottomRight: {
                            x: boundsNorth!.x,
                            y: boundsSouth!.y,
                        },
                    },
                    trigger: {
                        x,
                        y,
                    },
                });
                containerElement.current.style.left = `${position.left}px`;
                containerElement.current.style.top = `${position.top}px`;
            }
        }
    };
    const onRemove = useCallback(() => {
        if (containerElement.current) {
            containerElement.current.parentNode?.removeChild(containerElement.current);
            containerElement.current = null;
        }
    }, [property]);

    if (isVisible && containerElement.current) {
        return ReactDOM.createPortal(children, containerElement.current);
    }
    return null;
};

export default OverlayView;
