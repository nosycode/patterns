import { Observer } from './observer';

export class Observable {
  private observers: Observer[] = [];
  private changed: boolean;

  setChanged(): void {
    this.changed = true;
  }
  clearChanged(): void {
    this.changed = false;
  }
  hasChanged(): boolean {
    return this.changed;
  }
  addObserver(o: Observer): void {
    this.observers.push(o);
  }
  removeObserver(o: Observer): void {
    const i: number = this.observers.indexOf(o);
    if (i >= 0) {
      this.observers.splice(i, 1);
    }
  }
  notifyObservers(arg?: Object): void {
    if (this.changed) {
      for (const observer of this.observers) {
        observer.update(this, arg);
      }
      this.changed = false;
    }
  }
}
