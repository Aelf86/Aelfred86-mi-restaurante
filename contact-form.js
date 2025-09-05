const formContacto = document.querySelector("#formulario");
formContacto.addEventListener("submit", function (event) {
  event.preventDefault();
});

const resultadoContacto = document.querySelector("#resultado-contacto");
resultadoContacto.innerHTML = `
                <div class="datos-enviados">
                    <p><strong>Nombre:</strong> ${nombre}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Mensaje:</strong> ${mensaje}</p>
                </div>
                <p style="margin-top: 15px;">¡Gracias por contactarnos! Te responderemos a la brevedad.</p>
            `;
            
