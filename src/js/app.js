import DiaryModel from './diary/model.js';

const diaryModel = new DiaryModel({
    day: 4,
    month: 4,
});

diaryModel.fetch().then(() => console.log(diaryModel.get()));
