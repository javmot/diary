import Model from '../lib/model.js';

export default class DiaryModel extends Model {
    constructor(date) {
        super();
        this.day = date.day;
        this.month = date.month;
    }

    url() {
        return `api/get/namedays?day=${this.day}&month=${this.month}`;
    }

    parserResponse(response) {
        return response.json().then(json => json.data);
    }
}
