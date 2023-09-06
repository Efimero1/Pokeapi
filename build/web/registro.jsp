<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="CSS/Registro.css" rel="stylesheet" type="text/css"/>
    <title>Registro de Entrenador Pok�mon</title>
</head>
<body>
    <div class="background"></div>
    <div class="container">
        <h1>Registro de Entrenador Pok�mon</h1>
        <form action="RegistrarUsuario" method="post">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="txtName" required>
            
            <label for="usuario">Usuario:</label>
            <input type="text" id="usuario" name="txtUsuario" required>
            
            <label for="correo">Correo electr�nico:</label>
            <input type="email" id="correo" name="txtEmail" required>
            
            <label for="contrasena">Contrase�a:</label>
            <input type="password" id="contrasena" name="txtPassword" required>
            
            <button type="submit">Registrarse</button>
        </form>
        <p>�Ya tienes una cuenta? <a href="login.jsp">Inicia sesi�n aqu�</a></p>
    </div>
</body>
</html>
