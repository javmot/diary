import DiaryCollection from './diary/collection.js';
import DiaryView from './diary/view.js';

const diaryCollection = new DiaryCollection();
const diaryView = new DiaryView('diary', diaryCollection);

diaryCollection.fetch();
diaryView.render();
