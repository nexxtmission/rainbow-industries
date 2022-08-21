import positionResolver, { MapPositionResolverOpts } from '../positionResolver';

describe('positionResolver', () => {
    it('should return position at 0:0 when the bounds are smaller than content', () => {
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
        expect(positionResolver(opts)).toEqual({ top: 0, left: 0 });
    });
});
