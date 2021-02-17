const boton = document.getElementById("button");
const input = document.getElementById("range");
const view = document.getElementById("view");
const pcd = document.getElementById("cost");

input.addEventListener("input", () => {
  let inputValue = input.value;
  if (inputValue === "1") {
    Reflect.set(view, "textContent", "10.000 views");
    Reflect.set(pcd, "textContent", "8$");
    console.log("cambios en el input: 1");
  } else if (inputValue === "2") {
    Reflect.set(view, "textContent", "50.000 views");
    Reflect.set(pcd, "textContent", "12$");
    console.log("cambios en el input: 2");
  } else if (inputValue === "3") {
    Reflect.set(view, "textContent", "100.000 views");
    Reflect.set(pcd, "textContent", "16$");
    console.log("cambios en el input: 3");
  }
});
