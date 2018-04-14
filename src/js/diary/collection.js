import Collection from '../lib/collection.js';
import DiaryModel from './model.js';

export default class DiaryCollection extends Collection {
    constructor() {
        super(DiaryModel);
        this.addWeekModel();
    }

    addWeekModel() {
        const now = moment();
        for (let day = 1; day <= 7; day++) {
            this.add(now.isoWeekday(day));
        }
    }
}
