    let index = 0;
    const slides = document.getElementById("slides");
    const totalSlides = slides.children.length;

    function mostrarSlide() {
      slides.style.transform = `translateX(-${index * 100}%)`;
    }

    function avancar() {
      index = (index + 1) % totalSlides;
      mostrarSlide();
    }

    function voltar() {
      index = (index - 1 + totalSlides) % totalSlides;
      mostrarSlide();
    }

    // Troca automática a cada 3 segundos
    setInterval(() => {
      avancar();
    }, 10000);
