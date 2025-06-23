document.addEventListener('DOMContentLoaded', function() {
    const rosa = document.getElementById('rosa');
    const musica = document.getElementById('musica');
    const videoContainer = document.getElementById('video-container');
    const mensagem = document.getElementById('mensagem');
    const jardim = document.querySelector('.jardim');
    
    // Configuração inicial
    let petalasExplodidas = 0;
    const totalPetalas = 100;
    
    // Evento ao clicar na rosa
    rosa.addEventListener('click', function() {
        // Esconder a rosa original
        rosa.style.display = 'none';
        
        // Tocar música
        musica.currentTime = 0;
        musica.volume = 0.7;
        musica.play();
        
        // Mostrar vídeo e mensagem
        videoContainer.classList.add('show');
        mensagem.classList.add('show');
        
        // Criar explosão de pétalas
        criarExplosaoPetalas();
    });
    
    function criarExplosaoPetalas() {
        if(petalasExplodidas >= totalPetalas) return;
        
        // Criar grupo de 10 pétalas de cada vez
        const grupo = Math.min(10, totalPetalas - petalasExplodidas);
        
        for(let i = 0; i < grupo; i++) {
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
            petala.style.background = `linear-gradient(to bottom, hsl(${hue}, 100%, 70%), hsl(${hue}, 100%, 50%))`;
            
            jardim.appendChild(petala);
            
            // Remover após animação
            setTimeout(() => petala.remove(), 3000);
            
            petalasExplodidas++;
        }
        
        // Continuar até criar todas as pétalas
        setTimeout(criarExplosaoPetalas, 200);
    }
});
