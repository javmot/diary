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

    describe('#publish', () => {
        it('should fire the specified event', () => {
            const cb1 = jasmine.createSpy('callback');
            const cb2 = jasmine.createSpy('callback');
            const name1 = 'test:event1';
            const name2 = 'test:event2';

            observable.subscribe(name1, cb1);
            observable.subscribe(name2, cb2);
            observable.publish(name1);

            expect(cb1).toHaveBeenCalled();
            expect(cb2).not.toHaveBeenCalled();
        });
    });


    describe('#unsubscribe', () => {
        it('should remove a event listener to the observer', () => {
            const cb1 = jasmine.createSpy('callback');
            const cb2 = jasmine.createSpy('callback');
            const name1 = 'test:event1';
            const name2 = 'test:event2';

            observable.subscribe(name1, cb1);
            observable.subscribe(name2, cb2);
            observable.unsubscribe(cb1);
            observable.publish(name1);
            observable.publish(name2);

            expect(cb1).not.toHaveBeenCalled();
            expect(cb2).toHaveBeenCalled();
        });
    });
});
