import Collection from '../lib/collection.js';
import DiaryModel from './model.js';

export default class DiaryCollection extends Collection {
    constructor() {
        super(DiaryModel);
        this.addWeekModel();
    }

    addWeekModel() {
        for (let day = 1; day <= 7; day++) {
            const now = moment();
            this.add(now.isoWeekday(day));
        }
    }
}
