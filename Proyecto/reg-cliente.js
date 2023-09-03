document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('registrarButton').addEventListener('click', function () {
        const nombre = document.getElementById('nombre').value;
        const apellidoMaterno = document.getElementById('apellidoMaterno').value;
        const apellidoPaterno = document.getElementById('apellidoPaterno').value;
        const celular = document.getElementById('celular').value;
        const direccion = document.getElementById('direccion').value;
        const correo = document.getElementById('correo').value;
        const contrasena = document.getElementById('contrasena').value;
        const confirmarContrasena = document.getElementById('confirmarContrasena').value;
        const tipoCliente = document.getElementById('cliente').checked;
        const tipoEmpresa = document.getElementById('empresa').checked;

        const errorMessages = document.getElementById('errorMessages');
        errorMessages.innerHTML = '';

        if (!nombre || !apellidoMaterno || !apellidoPaterno || !celular || !direccion || !correo || !contrasena || !confirmarContrasena || (!tipoCliente && !tipoEmpresa)) {
            errorMessages.innerHTML += '<p>Todos los campos son obligatorios.</p>';
        }

        const celularPattern = /^\d+$/;
        if (!celularPattern.test(celular)) {
            errorMessages.innerHTML += '<p>El celular debe contener solo dígitos enteros.</p>';
        }

        const correoPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!correoPattern.test(correo)) {
            errorMessages.innerHTML += '<p>El correo electrónico no es válido.</p>';
        }

        const contrasenaPattern = /^(?=.*[A-Z])(?=.*\d).{12,}$/;
        if (!contrasenaPattern.test(contrasena)) {
            errorMessages.innerHTML += '<p>La contraseña debe tener al menos una letra en mayúscula, 12 caracteres y al menos 2 números.</p>';
        }

        if (contrasena !== confirmarContrasena) {
            errorMessages.innerHTML += '<p>Las contraseñas no coinciden.</p>';
        }

        if (errorMessages.innerHTML === '') {
            document.getElementById('myForm').submit();
        }
    });
});
