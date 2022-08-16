import { Position } from 'react-rainbow-components/components/InternalOverlay';
import getCenterPos from './getCenterPos';
import { MapPositionResolverOpts } from './positionResolver';

export default function resolverCenter(opts: MapPositionResolverOpts): Position | boolean {
    const { left, top } = getCenterPos(opts);
    const { content, bounds } = opts;

    if (
        left > bounds.topLeft.x &&
        left + content.width <= bounds.bottomRight.x &&
        top > bounds.topLeft.y &&
        top + content.height <= bounds.bottomRight.y
    ) {
        return {
            left,
            top,
        };
    }
    return false;
}
