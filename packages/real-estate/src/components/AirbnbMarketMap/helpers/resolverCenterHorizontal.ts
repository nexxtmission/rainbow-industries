import { Position } from 'react-rainbow-components/components/InternalOverlay';
import getCenterPos from './getCenterPos';
import { MapPositionResolverOpts } from './positionResolver';

export default function resolverCenterHorizontal(
    opts: MapPositionResolverOpts,
): Position | boolean {
    const { left, top, halfHeight } = getCenterPos(opts);
    const { content, bounds } = opts;

    if (left < bounds.topLeft.x || left + content.width > bounds.bottomRight.x) {
        return false;
    }
    if (top - halfHeight >= bounds.topLeft.y) {
        return {
            left,
            top: top - halfHeight,
        };
    }
    if (top + halfHeight + content.height <= bounds.bottomRight.y) {
        return {
            left,
            top: top + halfHeight,
        };
    }

    return false;
}
