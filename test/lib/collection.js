import Collection from 'app/lib/collection';
import Model from 'app/lib/model';

import fetchMock from 'fetch-mock';

describe('collection', () => {
    let collection;

    beforeEach(() => {
        collection = new Collection(Model);
        fetchMock.restore();
    });

    describe('#constructor', () => {
        it('should add empty model array and model class', () => {
            expect(collection.models).toBeEmptyArray();
            expect(collection.Model).toEqual(Model);
        });
    });

    describe('#add', () => {
        it('should add a new model to collection and publish an add event', () => {
            const cb = jasmine.createSpy('callback');
            const event = 'add';

            collection.subscribe(event, cb);
            collection.add();

            expect(collection.models).toBeArrayOfSize(1);
            expect(collection.models[0]).toEqual(jasmine.any(Model));
            expect(cb).toHaveBeenCalled();
        });
    });

    describe('#fetch', () => {
        it('should publish a update event when all models are fetched', () => {
            const cb = jasmine.createSpy('callback');
            const event = 'update';
            const response = { hello: 'world' };

            fetchMock.get('/', response);
            collection.subscribe(event, cb);
            collection.add();
            collection.add();

            collection.fetch().then(() => {
                expect(collection.models[0].get()).toEqual(response);
                expect(collection.models[1].get()).toEqual(response);
                expect(cb).toHaveBeenCalled();
            });
        });
    });

    describe('#get', () => {
        it('should return a array with models data', () => {
            const data1 = { test1: 'test' };
            const data2 = { test2: 'test' };

            collection.add(data1);
            collection.add(data2);

            expect(collection.get()).toBeArrayOfSize(2);
            expect(collection.get()).toContain(data1);
            expect(collection.get()).toContain(data2);
        });
    });

    describe('#map', () => {
        it('should return a array with models data', () => {
            const result = 'test';
            const cb = jasmine.createSpy('callback').and.returnValue(result);

            collection.add();
            collection.add();
            collection.add();
            const mapResult = collection.map(cb);

            expect(cb).toHaveBeenCalledTimes(3);
            expect(cb).toHaveBeenCalledWith(jasmine.any(Model));
            expect(mapResult).toEqual([result, result, result]);
        });
    });
});
