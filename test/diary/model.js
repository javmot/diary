import DiaryModel from 'app/diary/model';
import fetchMock from 'fetch-mock';
import moment from 'moment';

describe('model', () => {
    let diaryModel;
    const now = moment();
    const day = now.date();
    const month = now.month();

    beforeEach(() => {
        diaryModel = new DiaryModel(now);
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
