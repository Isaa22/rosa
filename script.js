document.addEventListener('DOMContentLoaded', function() {
    const rosa = document.getElementById('rosa');
    const musica = document.getElementById('musica');
    const container = document.querySelector('.container');
    
    // 1. Criar pétalas flutuantes
    function criarPetalaFlutuante() {
        const petala = document.createElement('div');
        petala.className = 'flutuante';
        
        const startX = Math.random() * window.innerWidth;
        const duration = Math.random() * 5 + 4;
        
        petala.style.left = `${startX}px`;
        petala.style.top = '-50px';
        petala.style.transform = `rotate(${Math.random() * 360}deg)`;
        petala.style.animationDuration = `${duration}s`;
        
        container.appendChild(petala);
        
        // Remover após animação
        setTimeout(() => petala.remove(), duration * 1000);
    }
    
    setInterval(criarPetalaFlutuante, 800);
    
    // 2. Evento ao clicar na rosa
    rosa.addEventListener('click', function() {
        // Tocar música
        musica.currentTime = 0;
        musica.volume = 0.7;
        musica.play();
        
        // Esconder rosa principal
        rosa.style.display = 'none';
        
        // A. Explosão de pétalas
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const petala = document.createElement('div');
                petala.className = 'flutuante';
                petala.style.left = '50%';
                petala.style.top = '50%';
                petala.style.width = `${Math.random() * 40 + 20}px`;
                petala.style.height = `${Math.random() * 60 + 30}px`;
                petala.style.background = `linear-gradient(45deg, #ff0000, #ff${Math.floor(Math.random() * 100 + 100)})`;
                
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 500 + 150;
                const duration = Math.random() * 4 + 2;
                
                petala.style.animationDuration = `${duration}s`;
                container.appendChild(petala);
                
                setTimeout(() => {
                    petala.style.left = `${50 + Math.cos(angle) * distance}%`;
                    petala.style.top = `${50 + Math.sin(angle) * distance}%`;
                }, 10);
                
                setTimeout(() => petala.remove(), duration * 1000);
            }, i * 50);
        }
        
        // B. Corações
        for(let i = 0; i < 25; i++) {
            setTimeout(() => {
                const coracao = document.createElement('div');
                coracao.className = 'coracao';
                coracao.style.left = `${50 + (Math.random() - 0.5) * 40}%`;
                coracao.style.top = `${50 + (Math.random() - 0.5) * 40}%`;
                coracao.style.width = `${Math.random() * 30 + 20}px`;
                coracao.style.height = coracao.style.width;
                coracao.style.animationDuration = `${Math.random() * 3 + 2}s`;
                container.appendChild(coracao);
                
                setTimeout(() => coracao.remove(), 5000);
            }, i * 200);
        }
        
        // C. Mensagem principal
        const mensagem = document.createElement('div');
        mensagem.className = 'mensagem';
        mensagem.innerHTML = 'O Amor é Mágico!<br>💖';
        container.appendChild(mensagem);
        
        setTimeout(() => mensagem.style.opacity = '1', 500);
        
        // D. Botão de reiniciar
        setTimeout(() => {
            const botao = document.createElement('button');
            botao.className = 'botao-reiniciar';
            botao.textContent = 'Ver Novamente';
            document.body.appendChild(botao);
            
            setTimeout(() => botao.style.opacity = '1', 100);
            
            botao.addEventListener('click', function() {
                location.reload();
            });
        }, 3000);
    });
});
