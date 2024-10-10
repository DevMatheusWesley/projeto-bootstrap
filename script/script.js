// Código JavaScript para manipulação do formulário
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Email enviado: ${email}`);
});

// Mostrar/Esconder botão de rolagem para cima
window.onscroll = function() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

// Ação do botão de rolagem para cima
document.querySelector('.scroll-to-top').addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});


//acordeon

const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const button = item.querySelector('.accordion-button');
        
        button.addEventListener('click', () => {
            const content = item.querySelector('.accordion-content');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });

        item.addEventListener('mouseleave', () => {
            const content = item.querySelector('.accordion-content');
            content.style.display = 'none';
        });
    });


    function toggleMenu() {
        const sidebar = document.getElementById('sidebarMenu');
        sidebar.classList.toggle('show');
    }
    

    // Função para exibir o menu
    function showChatbotMenu() {
        document.getElementById('chatbot-menu').style.display = 'block';
    }

    // Função para fechar o menu
    function closeChatbotMenu() {
        document.getElementById('chatbot-menu').style.display = 'none';
    }

    // Função para navegação
    function navigateTo(url) {
        window.location.href = url;
    }


    // Função tutorial
    function changeVideo(videoSrc, title, description) {
        // Troca o vídeo principal
        document.getElementById('main-video').src = videoSrc;
        // Atualiza o título do vídeo
        document.getElementById('video-title').innerText = title;
        // Atualiza a descrição do vídeo
        document.getElementById('video-description').innerText = description;
    }
    

   
//Script carrosel noticias

const carousel = document.querySelector('.carousel3');
        const prevBtn = document.querySelector('.prev3');
        const nextBtn = document.querySelector('.next3');

        let currentIndex = 0;
        const itemCount = 10; // Número de itens no carrossel
        const itemsVisible = 5; // Número de itens visíveis de uma vez
        const itemWidth = carousel.querySelector('.carousel-item3').offsetWidth + 20; // Largura do item + margem

        function updateCarouselPosition() {
            const newTransformValue = -(currentIndex * itemWidth);
            carousel.style.transform = `translateX(${newTransformValue}px)`;
        }

        nextBtn.addEventListener('click', () => {
            if (currentIndex < itemCount - itemsVisible) {
                currentIndex++;
            } else {
                currentIndex = 0; // Volta para o início
            }
            updateCarouselPosition();
        });

    
        

        
    