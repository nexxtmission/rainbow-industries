import { Position, Size } from 'react-rainbow-components/components/InternalOverlay';
import resolverCenter from './resolverCenter';
import resolverCenterHorizontal from './resolverCenterHorizontal';
import resolverCenterVertical from './resolverCenterVertical';

export interface MapPositionResolverOpts {
    trigger: {
        x: number;
        y: number;
    };
    content: Size;
    bounds: {
        topLeft: {
            x: number;
            y: number;
        };
        bottomRight: {
            x: number;
            y: number;
        };
    };
}

// eslint-disable-next-line no-unused-vars
const resolvers: Array<(opts: MapPositionResolverOpts) => Position | boolean> = [
    resolverCenterVertical,
    resolverCenterHorizontal,
    resolverCenter,
];

const TOP_PADDING = 54;

export default function positionResolver(opts: MapPositionResolverOpts): Position {
    let pos;
    resolvers.some((resolver) => {
        const ret = resolver(opts);
        if (ret) {
            pos = ret;
            return true;
        }
        return false;
    });
    if (pos) {
        return pos;
    }
    return {
        left: opts.bounds.topLeft.x,
        top: opts.bounds.topLeft.y + TOP_PADDING,
    };
}
