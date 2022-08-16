import { MapPositionResolverOpts } from '../positionResolver';
import resolverCenter from '../resolverCenter';

describe('resolverCenter', () => {
    it('should return the position centered over the trigger', () => {
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
        const position = resolverCenter(opts);
        expect(position).toEqual({
            left: 0 - 100 / 2,
            top: 0 - 100 / 2,
        });
    });

    it('should return false', () => {
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
        const position = resolverCenter(opts);
        expect(position).toBe(false);
    });
});
