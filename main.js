$(document).ready(function () {
    const videos = document.querySelectorAll(".grid-item video");

    // Intersection Observer para reproducir los videos cuando aparecen en pantalla
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.play(); // Reproduce el video si está visible
            } else {
                entry.target.pause(); // Pausa el video si sale de pantalla
            }
        });
    }, { threshold: 0.5 }); // Se activará cuando el 50% del video sea visible

    // Aplicar el observador a cada video
    videos.forEach((video) => {
        observer.observe(video);
    });

    // Funcionalidad para mostrar el título al pasar el mouse sobre los videos
    $(".grid-item").each(function () {
        var itemTitle = $(".grid-item-title");

        // Agregar clase cuando el mouse entra en el video
        $(this).on("mouseenter", function () {
            if ($(this).data("title")) {
                itemTitle.html("<span>" + $(this).data("title") + "</span>");
                itemTitle.addClass("visible");
            }

            // Mover el título con el mouse
            $(document).on("mousemove", function (e) {
                itemTitle.css({
                    left: e.clientX - 10,
                    top: e.clientY + 25,
                });
            });
        });

        // Quitar la clase cuando el mouse sale del video
        $(this).on("mouseleave", function () {
            itemTitle.removeClass("visible");
        });

    });
});

