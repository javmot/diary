import DiaryCollection from './diary/collection';
import DiaryView from './diary/view';

const diaryCollection = new DiaryCollection();
const diaryView = new DiaryView('diary', diaryCollection);

diaryCollection.fetch();
diaryView.render();
