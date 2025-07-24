const form = document.querySelector('form');
const inputs = form.querySelectorAll('input, textarea');

inputs.forEach(input => {
    input.addEventListener('input', function() {
        if (input.value.trim() !== '') {
            input.classList.remove('obrigatorio');
            input.classList.add('valido');
            input.classList.remove('erro');
            if (input.nextElementSibling && input.nextElementSibling.classList.contais('mensagem-erro')) {
                input.nextElementSibling.remove();
            }
        } else {
            input.classList.remove('valido');
            input.classList.add('obrigatorio');
            input.classList.add('erro');

            if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('mensagem-erro')) {
                const mensagem = document.createElement('div'); 
                mensagem.className = 'mensagem-erro';
                mensagem.textContent = 'Campo obrigatório';
                input.parentNode.insertBefore(mensagem, input.nextSibling);
            }
        }

    });
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let valido = true;

    form.querySelectorAll('.mensagem-erro').forEach(mensagem => mensagem.remove());

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.classList.add('obrigatorio');
            input.classList.add('erro');
            input.classList.remove('valido');
            valido = false;

            if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('mensagem-erro')) {
                const mensagem = document.createElement('div');
                mensagem.className = 'mensagem-erro';
                mensagem.textContent = 'Campo obrigatório';
                input.parentNode.insertBefore(mensagem, input.nextSibling);
            }
        } else {
            input.classList.remove('obrigatorio');
            input.classList.remove('erro');
            input.classList.add('valido');

            if (input.nextElementSibling && input.nextElementSibling.classList.contains('mensagem-erro')) {
                input.nextElementSibling.remove();
            }
        }
    });

    if (valido) {
        form.submit();
    }
});