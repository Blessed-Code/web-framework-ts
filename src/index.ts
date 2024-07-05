import { User } from "./models/User";

// karena propertynya opsional kita bisa buat dia jadi kosong dulu tanpa inisial values
// ini sangat useful. misal kita mau mereka enter email dan password dulu
// const newUser = new User({});
const newUser = new User({ name: "Bernardus Joshua", age: 25 });

newUser.set({ name: "newName" }); // sekarang bisa update 1 aja

console.log(newUser.get("name"));
console.log(newUser.get("age"));
