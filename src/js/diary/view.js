import View from '../lib/view.js';
import tmpl from './tmpl.js';

export default class DiaryView extends View {
    constructor(id, model) {
        super(id, model, tmpl);
    }
}
