import View from '../lib/view';
import tmpl from './tmpl.tmpl';

export default class DiaryView extends View {
    constructor(id, model) {
        super(id, model, tmpl);
    }
}
