// Taken from github's code
export type Subscription = { unsubscribe(): void };
export const NullSubscription = {
  unsubscribe() {
    /* Do nothing */
  },
};

export function fromEvent(
  target: EventTarget,
  eventName: string,
  onNext: EventListenerOrEventListenerObject,
  options: boolean | AddEventListenerOptions = false
): Subscription {
  target.addEventListener(eventName, onNext, options);
  return {
    unsubscribe: () => {
      target.removeEventListener(eventName, onNext, options);
    },
  };
}
