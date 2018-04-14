import Model from '../lib/model.js';

export default class DiaryModel extends Model {
    constructor(momentDate) {
        super();
        this.set({
            day: momentDate.date(),
            month: momentDate.month(),
        });
    }

    url() {
        return `api/get/namedays?day=${this.get('day')}&month=${this.get('month')}`;
    }

    parserResponse(response) {
        return response.json().then(json => json.data);
    }
}
