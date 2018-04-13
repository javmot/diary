import Model from 'app/lib/model';
import fetchMock from 'fetch-mock';

describe('model', () => {
    let model;

    beforeEach(() => {
        model = new Model();
        fetchMock.restore();
    });

    describe('#constructor', () => {
        it('should add empty object data', () => {
            expect(model.data).toBeEmptyObject();
        });
    });

    describe('#fetch', () => {
        it('should request data and store in model', () => {
            const response = { hello: 'world' };

            fetchMock.get(model.url(), response);

            model.fetch().then(() => expect(model.get()).toEqual(response));
        });
    });

    describe('#set', () => {
        it('should publish a update event', () => {
            const cb = jasmine.createSpy('callback');
            const event = 'update';

            model.subscribe(event, cb);
            model.set({ data: 'test' });

            expect(cb).toHaveBeenCalled();
        });
    });

    describe('#get', () => {
        it('should return a data item', () => {
            const data = { hello: 'world' };

            model.set(data);

            expect(model.get('hello')).toEqual(data.hello);
        });
    });
});
