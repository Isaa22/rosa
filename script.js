document.addEventListener('DOMContentLoaded', function() {
    const rosa = document.getElementById('rosa');
    const musica = document.getElementById('musica');
    const jardim = document.querySelector('.jardim');
    
    // Efeito de pétalas caindo suavemente
    function criarPetalaFlutuante() {
        const petala = document.createElement('div');
        petala.className = 'petala-explosao';
        
        // Tamanho aleatório
        const tamanho = Math.random() * 30 + 20;
        petala.style.width = `${tamanho}px`;
        petala.style.height = `${tamanho * 1.5}px`;
        
        // Posição inicial
        const startX = Math.random() * window.innerWidth;
        petala.style.left = `${startX}px`;
        petala.style.top = '-50px';
        
        // Configuração da animação
        const endX = (Math.random() - 0.5) * 200;
        const endY = window.innerHeight + 50;
        const duration = Math.random() * 3 + 2;
        
        petala.style.setProperty('--tx', `${endX}px`);
        petala.style.setProperty('--ty', `${endY}px`);
        petala.style.animationDuration = `${duration}s`;
        
        jardim.appendChild(petala);
        
        // Remover após animação
        setTimeout(() => petala.remove(), duration * 1000);
    }
    
    // Pétalas caindo continuamente
    setInterval(criarPetalaFlutuante, 500);
    
    // Evento ao clicar na rosa
    rosa.addEventListener('click', function() {
        // Tocar música
        musica.currentTime = 0;
        musica.volume = 0.5;
        musica.play();
        
        // Esconder rosa original
        rosa.style.display = 'none';
        
        // Explosão de pétalas
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
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
                const endX = Math.cos(angle) * distance;
                const endY = Math.sin(angle) * distance;
                
                petala.style.setProperty('--tx', `${endX}px`);
                petala.style.setProperty('--ty', `${endY}px`);
                petala.style.animationDuration = `${Math.random() * 2 + 1}s`;
                
                // Cor aleatória (tons de vermelho/rosa)
                const hue = Math.random() * 20 + 330;
                petala.style.background = `linear-gradient(to bottom, hsl(${hue}, 100%, 70%) 0%, hsl(${hue}, 100%, 50%) 100%)`;
                
                jardim.appendChild(petala);
                
                // Remover após animação
                setTimeout(() => petala.remove(), 3000);
            }, i * 50);
        }
        
        // Mostrar mensagem romântica
        setTimeout(() => {
            const mensagem = document.createElement('div');
            mensagem.className = 'mensagem';
            mensagem.textContent = 'O Amor é como uma Rosa...\nBelo e Inesquecível!';
            jardim.appendChild(mensagem);
            
            setTimeout(() => {
                mensagem.style.opacity = '1';
            }, 100);
        }, 1000);
        
        // Botão de reiniciar
        setTimeout(() => {
            const botao = document.createElement('button');
            botao.textContent = 'Ver Novamente';
            botao.style.position = 'fixed';
            botao.style.bottom = '20px';
            botao.style.right = '20px';
            botao.style.padding = '10px 20px';
            botao.style.background = 'linear-gradient(45deg, #ff1493, #ff69b4)';
            botao.style.color = 'white';
            botao.style.border = 'none';
            botao.style.borderRadius = '20px';
            botao.style.cursor = 'pointer';
            botao.style.zIndex = '40';
            botao.style.boxShadow = '0 0 10px rgba(255, 20, 147, 0.7)';
            
            botao.addEventListener('click', function() {
                location.reload();
            });
            
            document.body.appendChild(botao);
        }, 3000);
    });
});
