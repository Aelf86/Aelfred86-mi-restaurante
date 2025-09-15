const formContacto = document.querySelector("#formulario");
formContacto.addEventListener("submit", function (event) {
  event.preventDefault();
});

const resultadoContacto = document.querySelector("#resultado-mouse");
resultadoContacto.innerHTML = `
                <div class="datos-enviados">
                    <p><strong>Nombre:</strong> ${nombre}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Mensaje:</strong> ${mensaje}</p>
                </div>
                <p style="margin-top: 15px;">¡Gracias por contactarnos! Te responderemos a la brevedad.</p>
            `;
            
// Boton interactivo submit form

document.addEventListener('DOMContentLoaded', function() {
    const formContacto = document.querySelector("#formulario");
    const resultadoContacto = document.querySelector("#resultado-mouse");
    const submitButton = document.querySelector("#submit-hover");
    
    // Efectos de hover para el botón
    submitButton.addEventListener('mouseover', function() {
        this.style.backgroundColor = "#48bb78";
        this.innerHTML = "¡Enviar ahora! 🔥";
    });
    
    submitButton.addEventListener('mouseout', function() {
        this.style.backgroundColor = "";
        this.innerHTML = "Enviar reserva";
    });
    
    // Manejar el envío del formulario
    formContacto.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Obtener valores del formulario
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;
        
        // Mostrar mensaje de confirmación
        resultadoContacto.innerHTML = `
            <div class="datos-enviados">
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensaje:</strong> ${mensaje}</p>
            </div>
            <p style="margin-top: 15px; color: green; font-weight: bold;">¡Gracias por contactarnos! Te responderemos a la brevedad.</p>
        `;
        
        // Efecto visual de mi botón
        submitButton.innerHTML = "¡Enviado! ✅";
        submitButton.style.backgroundColor = "#48bb78";
        
        // Opcional: Resetear el formulario después de 3 segundos
        setTimeout(function() {
            formContacto.reset();
            submitButton.innerHTML = "Enviar reserva";
            submitButton.style.backgroundColor = "";
        }, 3000);
    });
});