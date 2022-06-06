const nombre = document.getElementById("nombre");
const monto = document.getElementById("monto");
const button = document.getElementById("button");
const ul = document.getElementById("unorderedList");
const total = document.getElementById("total");
const contribucion = document.getElementById("contribucion");

let contadorPersona = 0;
let montoArray = [];

button.addEventListener("click", () => {
  if (monto.value !== "" && nombre.value !== "") {
    contadorPersona += 1;
    const li = document.createElement("li");
    li.innerHTML = `${nombre.value}: $${monto.value}`;
    li.setAttribute("class", "list-group-item");
    ul.appendChild(li);
    montoArray.push(parseInt(monto.value));
    let montoArraySuma = montoArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    total.innerText = `Total: $${montoArraySuma}`;
    contribucion.innerText = `Tiene que pagar cada uno: $${(
      montoArraySuma / contadorPersona
    )}`;
  }
});