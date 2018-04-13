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

            fetchMock.get(`api/get/namedays?day=${day}&month=${month}`, response);

            diaryModel.fetch()
                .then(() => expect(diaryModel.get('hello')).toEqual(response.data.hello));
        });
    });
});
