document.addEventListener('DOMContentLoaded', function() {
    const rosa = document.getElementById('rosa');
    const musica = document.getElementById('musica');
    const videoContainer = document.getElementById('video-container');
    const mensagem = document.getElementById('mensagem');
    const jardim = document.querySelector('.jardim');
    
    // Criar pétalas dinamicamente
    function criarPetalas() {
        const camadas = {
            pequenas: { count: 5, size: [60, 80], distance: 30 },
            medias: { count: 6, size: [80, 100], distance: 40 },
            grandes: { count: 7, size: [100, 120], distance: 50 }
        };
        
        for (const [classe, config] of Object.entries(camadas)) {
            const camada = document.querySelector(`.${classe}`);
            
            for (let i = 0; i < config.count; i++) {
                const petala = document.createElement('div');
                petala.className = 'petala';
                petala.style.width = `${config.size[0]}px`;
                petala.style.height = `${config.size[1]}px`;
                
                const angle = (360 / config.count) * i;
                petala.style.transform = `rotate(${angle}deg) translateY(-${config.distance}px)`;
                
                camada.appendChild(petala);
            }
        }
    }
    
    criarPetalas();
    
    // Evento ao clicar na rosa
    rosa.addEventListener('click', function() {
        // Esconder a rosa
        rosa.style.display = 'none';
        
        // Tocar música
        musica.currentTime = 0;
        musica.volume = 0.7;
        musica.play();
        
        // Explodir pétalas (100 no total)
        const totalPetalas = 100;
        let petalasCriadas = 0;
        
        function explodirPetalas() {
            const grupo = Math.min(10, totalPetalas - petalasCriadas);
            
            for (let i = 0; i < grupo; i++) {
                const petala = document.createElement('div');
                petala.className = 'petala-explosao';
                
                // Tamanho aleatório
                const tamanho = Math.random() * 50 + 30;
                petala.style.width = `${tamanho}px`;
                petala.style.height = `${tamanho * 1.5}px`;
                
                // Posição inicial (centro da rosa)
                petala.style.left = '50%';
                petala.style.top = '30%';
                
                // Direção aleatória
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 500 + 200;
                petala.style.setProperty('--tx', `${Math.cos(angle) * distance}px`);
                petala.style.setProperty('--ty', `${Math.sin(angle) * distance}px`);
                petala.style.animationDuration = `${Math.random() * 2 + 1}s`;
                
                // Cor aleatória
                const hue = Math.random() * 20 + 330;
                petala.style.background = `linear-gradient(to bottom, hsl(${hue}, 100%, 70%), hsl(${hue}, 100%, 50%))`;
                
                jardim.appendChild(petala);
                
                // Remover após animação
                setTimeout(() => petala.remove(), 3000);
                
                petalasCriadas++;
            }
            
            // Mostrar vídeo e mensagem quando 50% das pétalas explodiram
            if (petalasCriadas === Math.floor(totalPetalas / 2)) {
                videoContainer.classList.add('mostrar');
                mensagem.classList.add('mostrar');
                
                // Iniciar vídeo (para YouTube API)
                if (typeof YT !== 'undefined' && YT.Player) {
                    new YT.Player('video-romantico', {
                        events: {
                            'onReady': (event) => event.target.playVideo()
                        }
                    });
                }
            }
            
            // Continuar até criar todas as pétalas
            if (petalasCriadas < totalPetalas) {
                setTimeout(explodirPetalas, 200);
            }
        }
        
        explodirPetalas();
    });
    
    // Carregar API do YouTube
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});
