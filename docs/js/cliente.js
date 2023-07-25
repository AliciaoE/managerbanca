class Cliente {
  constructor(dni, nombre, apellido) {
    this.dni = dni;
    this.nombre = nombre;
    this.apellido = apellido;
    this.cuentas = [];
  }
  agregarCuenta(cuenta) {
    this.cuentas.push(cuenta);

    obtenerCuentas();
    let textoCuentas = "";
    for (let i = 0; i < this.cuentas.length; i++) {
      textoCuentas += `Cuenta ${i + 1}: ${this.cuentas[i].numero}\n`;
    }
    return textoCuentas;
  }
  getDni() {
    return this.dni;
  }

  setDni(value) {
    this.dni = value;
  }

  getNombre() {
    return this.nombre;
  }

  setNombre(value) {
    this.nombre = value;
  }

  getApellido() {
    return this.apellido;
  }

  setApellido(value) {
    this.apellido = value;
  }

  toString() {
    return (
      " - DNI; " +
      this.getDni() +
      " - Nombre: " +
      this.getNombre() +
      " - Apellido: " +
      this.getApellido()
    );
  }
}

class cuentaNueva {
  constructor(numeroCuenta, saldo) {
    this.numeroCuenta = numeroCuenta;
    this.saldo = saldo;
  }

  // Getter para el número de cuenta
  get getNumeroCuenta() {
    return this.numeroCuenta;
  }

  // Getter para el saldo
  get getSaldo() {
    return this.saldo;
  }

  // Método para agregar fondos a la cuenta
  ingresarDinero(cantidad) {
    this.saldo += cantidad;
  }

  // Método para retirar fondos de la cuenta
  retirarDinero(cantidad) {
    if (cantidad <= this.saldo) {
      this.saldo -= cantidad;
    } else {
      console.log("Fondos insuficientes");
    }
  }

  // Método toString para imprimir información de la cuenta
  toString() {
    return `Cuenta ${this.numeroCuenta} tiene un saldo de ${this.saldo}`;
  }
}
