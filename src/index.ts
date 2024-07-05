import { User } from "./models/User";

// karena propertynya opsional kita bisa buat dia jadi kosong dulu tanpa inisial values
// ini sangat useful. misal kita mau mereka enter email dan password dulu
// const newUser = new User({});
const newUser = new User({ name: "Bernardus Joshua", age: 25 });

newUser.on("change", () => {
  console.log("change no 1");
});
newUser.on("change", () => {
  console.log("change no 2");
});
newUser.on("save", () => {
  console.log("save was triggered");
});

newUser.trigger("change");
newUser.trigger("save");
