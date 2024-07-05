import { User } from "./models/User";

// karena propertynya opsional kita bisa buat dia jadi kosong dulu tanpa inisial values
// ini sangat useful. misal kita mau mereka enter email dan password dulu
// const newUser = new User({});
const newUser = new User({ name: "Bernardus Joshua", age: 25 });

newUser.on("change", () => {});
newUser.on("change", () => {});
newUser.on("click", () => {});

console.log(newUser);
