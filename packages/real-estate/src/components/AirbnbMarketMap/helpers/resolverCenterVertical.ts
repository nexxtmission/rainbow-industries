import { Position } from 'react-rainbow-components/components/InternalOverlay';
import getCenterPos from './getCenterPos';
import { MapPositionResolverOpts } from './positionResolver';

export default function resolverCenterVertical(opts: MapPositionResolverOpts): Position | boolean {
    const { left, top, halfWidth } = getCenterPos(opts);
    const { content, bounds } = opts;

    if (top < bounds.topLeft.y || top + content.height > bounds.bottomRight.y) {
        return false;
    }
    if (left + halfWidth + content.width <= bounds.bottomRight.x) {
        return {
            left: left + halfWidth,
            top,
        };
    }
    if (left - halfWidth >= bounds.topLeft.x) {
        return {
            left: left - halfWidth,
            top,
        };
    }
    return false;
}
