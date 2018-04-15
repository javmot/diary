import Model from '../lib/model';

export default class DiaryModel extends Model {
    constructor(date) {
        super();
        this.set({ date });
    }

    url() {
        const day = this.get('date').date();
        const month = this.get('date').month();
        return `api/get/namedays?day=${day}&month=${month}`;
    }

    parserResponse(response) {
        return responseon().then(json => json.data);
    }
}
