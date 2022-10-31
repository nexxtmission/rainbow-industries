import positionResolver, { MapPositionResolverOpts } from '../positionResolver';

describe('positionResolver', () => {
    it('should return the correct position when the bounds are smaller than content', () => {
        const opts: MapPositionResolverOpts = {
            content: {
                width: 100,
                height: 100,
            },
            bounds: {
                topLeft: {
                    x: -25,
                    y: -25,
                },
                bottomRight: {
                    x: 25,
                    y: 25,
                },
            },
            trigger: {
                x: 0,
                y: 0,
            },
        };
        expect(positionResolver(opts)).toEqual({ top: -25 + 54, left: -25 });
    });
});
