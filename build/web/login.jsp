
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="CSS/style.css" rel="stylesheet" type="text/css"/>
  <title>Pok�mon Login</title>
</head>
<body>
    <div class="background"></div>
  <div class="login-container">
    <img class="pokemon-logo" src="data:image/png;base64,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" alt="Pokemon Logo">
    <h2>Inicio sesion de entrenador pokemon</h2>
    <form action="InicioSesion" method="post" class="login-form">
      <input type="text" name="txtCorreo" placeholder="Correo" required>
      <input type="password" name="txtPassword" placeholder="Contrase�a" required>
      <button class="login-button" type="submit">Iniciar Sesion</button>
    </form>
    <p>�A�n no tienes una cuenta? <a href="registro.jsp">Reg�strate aqu�</a></p>
  </div>
</body>
</html>
