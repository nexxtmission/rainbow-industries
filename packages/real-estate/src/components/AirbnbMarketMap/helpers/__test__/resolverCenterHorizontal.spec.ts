import { MapPositionResolverOpts } from '../positionResolver';
import resolverCenterHorizontal from '../resolverCenterHorizontal';

describe('resolverCenterHorizontal', () => {
    it('should return the position above the trigger element', () => {
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
        const position = resolverCenterHorizontal(opts);
        expect(position).toEqual({
            left: opts.trigger.x - opts.content.width / 2,
            top: opts.trigger.y - opts.content.height,
        });
    });

    it('should return return the position below the trigger element', () => {
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
                y: -50,
            },
        };
        const position = resolverCenterHorizontal(opts);
        expect(position).toEqual({
            left: opts.trigger.x - opts.content.width / 2,
            top: opts.trigger.y,
        });
    });

    it('should return false when not possible to resolve position', () => {
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
        const position = resolverCenterHorizontal(opts);
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
                    x: -50,
                    y: -100,
                },
                bottomRight: {
                    x: 50,
                    y: 100,
                },
            },
            trigger: {
                x: 0,
                y: 0,
            },
        };
        const position = resolverCenterHorizontal(opts);
        expect(position).toEqual(false);
    });
});
