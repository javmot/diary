import DiaryModel from 'app/diary/model';
import fetchMock from 'fetch-mock';

describe('model', () => {
    let diaryModel;
    const day = 3;
    const month = 4;

    beforeEach(() => {
        diaryModel = new DiaryModel({ day, month });
        fetchMock.restore();
    });

    describe('#fetch', () => {
        it('should request data and store in model', () => {
            const response = { data: { hello: 'world' } };

            fetchMock.get(diaryModel.url(), response);

            diaryModel.fetch().then(() => expect(diaryModel.get()).toEqual(response.data));
        });
    });
});
