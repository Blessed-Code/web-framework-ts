interface UserPops {
  name?: string; // kasih question mark berarti opsional
  age?: number;
}

export class User {
  // constructor(private data: { name: string; age: number }) {} // daripada buat pake object literal mending kita buat pake interface
  constructor(private data: UserPops) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserPops): void {
    // karena props udah opsional kita bsia update salah satu aja
    Object.assign(this.data, update);
  }
}
