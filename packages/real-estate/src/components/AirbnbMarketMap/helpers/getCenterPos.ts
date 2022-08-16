import { MapPositionResolverOpts } from './positionResolver';

export default function getCenterPos({ trigger, content }: MapPositionResolverOpts) {
    const halfWidth = content.width / 2;
    const halfHeight = content.height / 2;
    const left = trigger.x - halfWidth;
    const top = trigger.y - halfHeight;

    return {
        left,
        top,
        halfWidth,
        halfHeight,
    };
}
