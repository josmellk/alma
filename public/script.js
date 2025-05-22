async function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const res = await fetch('/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ username, password })
  });
  if (res.ok) {
    alert('Sesión iniciada');
    cargarProductos();
  } else {
    alert('Login fallido');
  }
}

async function cargarProductos() {
  const res = await fetch('/products');
  const productos = await res.json();
  const div = document.getElementById('productos');
  div.innerHTML = productos.map(p => `<p>${p.name} - $${p.price}</p>`).join('');
}
