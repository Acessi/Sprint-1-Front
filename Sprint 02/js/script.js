document.addEventListener('DOMContentLoaded', () => {
    const hamburguerIcon = document.getElementById('hamburguer-icon');
    const menu = document.getElementById('menu');
    const searchIcon = document.getElementById('search-icon');
    const searchContainer = document.getElementById('search-container');
    const busca = document.getElementById('busca');

    // Alterna o menu ao clicar no ícone do hambúrguer
    hamburguerIcon.addEventListener('click', () => {
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
            menu.classList.add('hide');
        } else {
            menu.style.display = 'block'; // Torna o menu visível antes de adicionar a classe show
            menu.classList.remove('hide');
            menu.classList.add('show');
        }
    });

    // Fecha o menu ao clicar fora dele, deslizando para a esquerda
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnHamburguer = hamburguerIcon.contains(event.target);
        const isClickOnSearch = searchIcon.contains(event.target);
        const isClickOnBusca = busca.contains(event.target); // Verifica se clicou no link de busca

        // Se o clique não for no menu nem no ícone do hambúrguer, feche o menu
        if (!isClickInsideMenu && !isClickOnHamburguer) {
            menu.classList.remove('show');
            menu.classList.add('hide');
        }

        // Alterna o campo de pesquisa ao clicar na lupa ou no link "BUSCA"
        if (isClickOnSearch || isClickOnBusca) {
            if (searchContainer.style.display === 'none' || searchContainer.style.display === '') {
                searchContainer.style.display = 'block'; // Exibe o campo de pesquisa
            } else {
                searchContainer.style.display = 'none'; // Oculta o campo de pesquisa
            }
        }

        // Fecha o campo de pesquisa ao clicar fora dele
        if (!searchContainer.contains(event.target) && !isClickOnSearch && !isClickOnBusca) {
            searchContainer.style.display = 'none';
        }
    });

    // Adiciona um evento de animação para ocultar o menu após a animação de saída
    menu.addEventListener('animationend', () => {
        if (menu.classList.contains('hide')) {
            menu.style.display = 'none'; // Oculta o menu após a animação
        }
    });
});

// Adiciona um evento de mudança (change) ao input de upload de imagem
document.getElementById('carregarImagem').addEventListener('change', function(event) {
    // Obtém o elemento onde a imagem carregada será exibida
    const visualizacaoImagem = document.getElementById('imagemUsuario');
    // Obtém o arquivo selecionado pelo usuário
    const arquivo = event.target.files[0];

    // Verifica se algum arquivo foi selecionado
    if (arquivo) {
        // Cria um objeto FileReader para ler o conteúdo do arquivo
        const leitor = new FileReader();

        // Define uma função que será chamada quando o FileReader terminar de carregar o arquivo
        leitor.onload = function(e) {
            // Define a imagem carregada como o resultado do FileReader (a URL da imagem)
            visualizacaoImagem.src = e.target.result;
        };

        // Lê o conteúdo do arquivo como uma URL de dados (Data URL)
        leitor.readAsDataURL(arquivo);
    }
});