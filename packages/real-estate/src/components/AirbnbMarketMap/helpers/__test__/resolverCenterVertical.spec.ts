import { MapPositionResolverOpts } from '../positionResolver';
import resolverCenterVertical from '../resolverCenterVertical';

describe('resolverCenterVertical', () => {
    it('should return the position to the right of the trigger', () => {
        const opts: MapPositionResolverOpts = {
            content: {
                width: 100,
                height: 100,
            },
            bounds: {
                topLeft: {
                    x: -100,
                    y: -100,
                },
                bottomRight: {
                    x: 100,
                    y: 100,
                },
            },
            trigger: {
                x: 0,
                y: 0,
            },
        };
        const position = resolverCenterVertical(opts);
        expect(position).toEqual({
            left: opts.trigger.x,
            top: opts.trigger.y - opts.content.height / 2,
        });
    });

    it('should return the position to the left of the trigger', () => {
        const opts: MapPositionResolverOpts = {
            content: {
                width: 100,
                height: 100,
            },
            bounds: {
                topLeft: {
                    x: -100,
                    y: -100,
                },
                bottomRight: {
                    x: 100,
                    y: 100,
                },
            },
            trigger: {
                x: 25,
                y: 0,
            },
        };
        const position = resolverCenterVertical(opts);
        expect(position).toEqual({
            left: opts.trigger.x - opts.content.width,
            top: opts.trigger.y - opts.content.height / 2,
        });
    });

    it('should return false when not possible to resolve the position', () => {
        const opts: MapPositionResolverOpts = {
            content: {
                width: 150,
                height: 150,
            },
            bounds: {
                topLeft: {
                    x: -100,
                    y: -100,
                },
                bottomRight: {
                    x: 100,
                    y: 100,
                },
            },
            trigger: {
                x: 0,
                y: 0,
            },
        };
        const position = resolverCenterVertical(opts);
        expect(position).toEqual(false);
    });

    it('should return false when content does not fit in the container', () => {
        const opts: MapPositionResolverOpts = {
            content: {
                width: 150,
                height: 150,
            },
            bounds: {
                topLeft: {
                    x: -100,
                    y: -50,
                },
                bottomRight: {
                    x: 100,
                    y: 50,
                },
            },
            trigger: {
                x: 0,
                y: 0,
            },
        };
        const position = resolverCenterVertical(opts);
        expect(position).toEqual(false);
    });
});
