export default class Observable {
    constructor() {
        this.subscribers = [];
    }

    subscribe(event, handler, ctx) {
        this.subscribers.push({ event, handler, ctx });
    }

    unsubscribe(handler) {
        this.subscribers = this.subscribers.filter(subscriber => subscriber.handler !== handler);
    }

    publish(event, data) {
        this.subscribers.forEach((subscriber) => {
            if (subscriber.event === event) {
                subscriber.handler.call(subscriber.ctx, data);
            }
        });
    }
}
