document.addEventListener("DOMContentLoaded", () => {

    const music = document.getElementById("music");
    const open = document.getElementById("open");

    music.addEventListener("click", () => {
        window.open("https://open.spotify.com/search/Ser%20Parte%20Siddhartha", "_blank");
    });

    open.addEventListener("click", () => {

        document.querySelector(".container").innerHTML = `

        <div style="background:white;padding:30px;border-radius:25px;box-shadow:0 10px 30px rgba(0,0,0,.2);color:#5b4b49;animation:aparecer 1s;">

        <h2>💌 Mi amor...</h2>

        <p>
        Hoy quiero abrirte mi corazón.
        </p>

        <p>
        Aunque la distancia nos ponga pruebas, sigo eligiéndote cada día.
        </p>

        <p>
        Sé que hemos pasado momentos difíciles, pero mi deseo sigue siendo el mismo:
        caminar a tu lado, crecer contigo y construir un futuro juntos.
        </p>

        <p>
        Quiero que nunca olvides cuánto te amo, cuánto te extraño y lo mucho que anhelo el día en que ya no exista la distancia entre nosotros.
        </p>

        <p>
        Gracias por permanecer, por intentarlo y por seguir siendo parte de mi vida.
        </p>

        <h3>❤️ Con todo mi amor... Hoy y siempre.</h3>

        </div>

        `;
    });

});
