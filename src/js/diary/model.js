import Model from '../lib/model.js';

export default class DiaryModel extends Model {
    constructor(date) {
        super();
        this.set(date);
    }

    url() {
        return `api/get/namedays?day=${this.get('day')}&month=${this.get('month')}`;
    }

    parserResponse(response) {
        return response.json().then(json => json.data);
    }
}
