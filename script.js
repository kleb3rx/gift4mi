// script.js

$(document).ready(function() {
    // Animações de entrada
    $("header").hide().slideDown(1000);
    $(".content-block").css("opacity", 0).each(function(index) {
        $(this).delay(500 * index).animate({ opacity: 1 }, 1000);
    });

    // Animação de navegação suave
    $("nav ul li a").click(function(event) {
        event.preventDefault();
        let target = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(target).offset().top - 50
        }, 1000);
    });

    // Efeito de hover nas fotos da galeria
    $(".foto").hover(function() {
        $(this).animate({ width: "190px" }, 300);
    }, function() {
        $(this).animate({ width: "180px" }, 300);
    });

    // Efeito de clique nas mensagens
    $(".mensagem").click(function() {
        $(this).animate({ fontSize: "1.4em", color: "#ff69b4" }, 400).fadeOut(200).fadeIn(400);
    });

    // Validação simples do formulário de contato
    $("#contact-form").submit(function(event) {
        event.preventDefault();
        let name = $("#name").val();
        let email = $("#email").val();
        let message = $("#message").val();

        if (name === "" || email === "" || message === "") {
            alert("Por favor, preencha todos os campos.");
        } else {
            alert("Mensagem enviada com sucesso!");
            $(this).trigger("reset");
        }
    });
});
