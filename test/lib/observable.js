import Observable from '../../src/js/lib/observable';

describe('observable', () => {
    let observable;

    beforeEach(() => {
        observable = new Observable();
    });

    describe('#constructor', () => {
        it('should add empty array subscribers', () => {
            expect(observable.subscribers).toBeEmptyArray();
        });
    });

    describe('#subscribe', () => {
        it('should add a event listener to the observer', () => {
            const cb = jasmine.createSpy('callback');
            const name = 'test:event';

            observable.subscribe(name, cb);
            observable.publish(name);

            expect(cb).toHaveBeenCalled();
        });
    });

    describe('#unsubscribe', () => {
        it('should remove a event listener to the observer', () => {
            const cb = jasmine.createSpy('callback');
            const name = 'test:event';

            observable.subscribe(name, cb);
            observable.unsubscribe(cb);
            observable.publish(name);

            expect(cb).not.toHaveBeenCalled();
        });
    });
});
