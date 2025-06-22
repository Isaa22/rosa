document.addEventListener('DOMContentLoaded', function() {
    const rosa = document.getElementById('rosa');
    const musica = document.getElementById('musica');
    const container = document.querySelector('.container');
    
    // Criar pétalas caindo
    function criarPetala() {
        const petala = document.createElement('div');
        petala.className = 'petala';
        
        // Posição inicial aleatória acima da rosa
        const startX = Math.random() * window.innerWidth;
        const startY = -50;
        
        petala.style.left = `${startX}px`;
        petala.style.top = `${startY}px`;
        
        // Animação de queda
        const duration = Math.random() * 3 + 2; // 2-5 segundos
        const rotation = Math.random() * 360;
        const endY = window.innerHeight + 50;
        
        petala.style.transition = `top ${duration}s linear, transform ${duration}s linear`;
        
        container.appendChild(petala);
        
        // Forçar a animação
        setTimeout(() => {
            petala.style.top = `${endY}px`;
            petala.style.transform = `rotate(${rotation}deg)`;
        }, 10);
        
        // Remover pétala após cair
        setTimeout(() => {
            petala.remove();
        }, duration * 1000);
    }
    
    // Criar pétalas periodicamente
    setInterval(criarPetala, 500);
    
    // Efeito de explosão ao clicar na rosa
    rosa.addEventListener('click', function() {
        // Tocar música
        musica.play();
        
        // Remover a rosa
        rosa.style.display = 'none';
        
        // Criar explosão de pétalas
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const petala = document.createElement('div');
                petala.className = 'petala';
                petala.style.left = '50%';
                petala.style.top = '50%';
                
                // Animação de explosão
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 300 + 100;
                const duration = Math.random() * 2 + 1;
                const rotation = Math.random() * 360;
                
                petala.style.transition = `all ${duration}s ease-out`;
                container.appendChild(petala);
                
                setTimeout(() => {
                    petala.style.left = `${50 + Math.cos(angle) * distance}px`;
                    petala.style.top = `${50 + Math.sin(angle) * distance}px`;
                    petala.style.transform = `rotate(${rotation}deg)`;
                    petala.style.opacity = '0';
                }, 10);
                
                // Remover pétala após animação
                setTimeout(() => {
                    petala.remove();
                }, duration * 1000);
            }, i * 100);
        }
        
        // Mostrar mensagem romântica
        const mensagem = document.createElement('div');
        mensagem.className = 'mensagem';
        mensagem.textContent = 'Você é especial! ❤️';
        container.appendChild(mensagem);
        
        setTimeout(() => {
            mensagem.style.opacity = '1';
        }, 100);
    });
});
