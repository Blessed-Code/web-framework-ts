interface UserPops {
  name?: string; // kasih question mark berarti opsional
  age?: number;
}

// type () => {} artinya function yang gak terima arguments dan returnya object
// ini jadi membingungkan karena ini syntax type alias
type Callback = () => void;

export class User {
  // karena gak tau key dalem objectnya apa aja kita specifynya begini
  // dimana events adalah object, apapun nama keynya tipenya string, dan valuenya array of Callback
  events: { [key: string]: Callback[] } = {};

  // constructor(private data: { name: string; age: number }) {} // daripada buat pake object literal mending kita buat pake interface
  constructor(private data: UserPops) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserPops): void {
    // karena props udah opsional kita bsia update salah satu aja
    Object.assign(this.data, update);
  }

  // on(eventName: string, callback: () => void) {} // daripada nulis langsung begitu, mending typenya kita pakein type alias
  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  }
}
