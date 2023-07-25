function CrearCliente() {
  const dni = prompt("Introduce el D.N.I del nuevo cliente:");
  const nombre = prompt("Introduce el nombre del nuevo cliente:");
  const apellido = prompt("Introduce el apellido del nuevo cliente:");

  // Verificar si el cliente ya existe
  const clienteExistente = clientes.find((c) => c.getDni() === dni);
  if (clienteExistente) {
    alert("Ya existe un cliente con ese DNI.");
    return;
  }

  // Crear el nuevo cliente y agregarlo a la lista de clientes
  const clienteNew = new Cliente();
  clienteNew.setDni(dni);
  clienteNew.setNombre(nombre);
  clienteNew.setApellido(apellido);
  clientes.push(clienteNew);

  const resultado =
    "Datos del nuevo cliente creado: <br>" + clienteNew.toString();
  document.getElementById("resultado").innerHTML = resultado;
}

function buscarCliente(dni) {
  for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].dni === dni) {
      return i;
    }
  }
  return -1;
}
function crearCuenta() {
  const dni = prompt("Introduzca DNI del cliente:");
  let cliente = clientes.find((c) => c.dni === dni);

  if (!cliente) {
    alert("El cliente no está registrado. Por favor, cree el cliente primero.");
    return;
  }
  const numeroCuenta = Math.floor(Math.random() * 10000000000) + 1;
  const existeCuenta = cliente.cuentas.find((c) => c.numero === numeroCuenta);
  if (existeCuenta) {
    alert("Ya existe una cuenta con ese número.");
  } else {
    cliente.cuentas.push({ numero: numeroCuenta, saldo: 0 });
    const textoCuentas = obtenerCuentas(cliente.cuentas);
    document.getElementById("resultado").textContent =
      "CREADO NUEVO NUMERO DE CUENTA: " +
      numeroCuenta +
      " " +
      " Asociada al DNI: " +
      cliente.dni +
      " " +
      " Nombre del titular:" +
      cliente.nombre +
      " " +
      cliente.apellido;
    document.getElementById("resultados").textContent =
      "Cuentas asociadas: " + textoCuentas;
  }
}
function obtenerCuentas(cuentas) {
  let textoCuentas = "";
  for (let i = 0; i < cuentas.length; i++) {
    textoCuentas += `Cuenta ${i + 1}: ${cuentas[i].numero}\n`;
  }
  return textoCuentas;
}
function ingresarDinero() {
  const dni = prompt("Introduzca DNI del cliente:");
  const cliente = clientes.find((c) => c.dni === dni);

  if (!cliente) {
    alert("El cliente no está registrado. Por favor, cree el cliente primero.");
    return;
  }

  const numCuenta = prompt(
    `Introduzca el número de la cuenta (1-${cliente.cuentas.length}):`
  );
  const cuenta = cliente.cuentas[numCuenta - 1];

  if (!cuenta) {
    alert(`No existe la cuenta ${numCuenta} para el cliente con DNI ${dni}.`);
    return;
  }

  const cantidad = parseFloat(prompt("Introduzca la cantidad a ingresar:"));

  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Cantidad inválida. Debe ser un número positivo.");
    return;
  }

  cuenta.saldo += cantidad;

  let saldoCuentas = "";
  for (let i = 0; i < cliente.cuentas.length; i++) {
    saldoCuentas += `Cuenta ${i + 1}: ${cliente.cuentas[i].saldo}€<br>`;
  }

  const mensaje = `Se ha realizado un ingreso con la cantidad ${cantidad}€ en la cuenta ${numCuenta} del cliente ${cliente.nombre} ${cliente.apellido}. Saldo actual: ${cuenta.saldo}€<br><br>Saldo de cuentas:<br>${saldoCuentas}`;

  document.getElementById("resultado").innerHTML = mensaje;
}
function retirarDinero() {
  const dni = prompt("Introduzca DNI del cliente:");
  const cliente = clientes.find((c) => c.dni === dni);

  if (!cliente) {
    alert("El cliente no está registrado. Por favor, cree el cliente primero.");
    return;
  }

  const numCuenta = prompt(
    `Introduzca el número de la cuenta (1-${cliente.cuentas.length}):`
  );
  const cuenta = cliente.cuentas[numCuenta - 1];

  if (!cuenta) {
    alert(`No existe la cuenta ${numCuenta} para el cliente con DNI ${dni}.`);
    return;
  }

  const cantidad = parseFloat(prompt("Introduzca la cantidad a retirar:"));

  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Cantidad inválida. Debe ser un número positivo.");
    return;
  }

  if (cuenta.saldo < cantidad) {
    alert(
      `No tiene suficiente saldo para retirar ${cantidad}€ de la cuenta ${numCuenta}. Saldo actual: ${cuenta.saldo}€`
    );
    return;
  }

  cuenta.saldo -= cantidad;

  let saldoCuentas = "";
  for (let i = 0; i < cliente.cuentas.length; i++) {
    saldoCuentas += `Cuenta ${i + 1}: ${cliente.cuentas[i].saldo}€<br>`;
  }

  const mensaje = `Se ha retirado ${cantidad}€ de la cuenta ${numCuenta} del cliente ${cliente.nombre} ${cliente.apellido}. Saldo actual: ${cuenta.saldo}€<br><br>Saldo de cuentas:<br>${saldoCuentas}`;

  document.getElementById("resultado").innerHTML = mensaje;
}
function eliminarCliente() {
  const dni = prompt("Introduce el D.N.I del cliente a eliminar:");

  // Buscar el cliente con el DNI dado en el array de clientes
  const indiceCliente = buscarCliente(dni);

  if (indiceCliente !== -1) {
    // El cliente existe, proceder a eliminarlo
    const clienteEliminado = clientes.splice(indiceCliente, 1)[0];
    const resultadoMensaje = `Cliente eliminado: ${clienteEliminado.toString()}`;
    document.getElementById("resultado").innerHTML = resultadoMensaje;
  } else {
    const resultadoMensaje = "No existe un cliente con ese DNI.";
    document.getElementById("resultado").innerHTML = resultadoMensaje;
  }
}
