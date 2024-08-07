import axios, { AxiosResponse } from "axios";
interface UserProps {
  name?: string; // kasih question mark berarti opsional
  age?: number;
  id?: number;
}

export class User {
  // constructor(private data: { name: string; age: number }) {} // daripada buat pake object literal mending kita buat pake interface
  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    // karena props udah opsional kita bsia update salah satu aja
    Object.assign(this.data, update);
  }

  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get("id")}`).then((response: AxiosResponse) => {
      this.set(response.data);
    });
  }

  save(): void {
    const id = this.get("id");

    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post("http://localhost:3000/users/", this.data);
    }
  }
}
