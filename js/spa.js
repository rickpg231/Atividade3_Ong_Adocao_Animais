// Local onde o conteúdo da página será injetado
const appContent = document.getElementById('app-content');

// Onde a navegação principal está (para atualizar o estado "active")
const mainNavUl = document.querySelector('header nav ul');
const metaDescriptionTag = document.querySelector('meta[name="description"]');


/**
 * Busca o HTML da URL e extrai o conteúdo principal e metadados.
 * @param {string} url - A URL da página a ser carregada.
 * @returns {Promise<object>} Um objeto contendo o novo HTML, título, etc.
 */
async function loadContent(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro ao carregar a página: ${response.statusText}`);
        }
        const html = await response.text();
        
        // 1. Cria um elemento temporário para analisar o HTML completo (DOMParser)
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // 2. Extrai o conteúdo do elemento principal (#app-content) da nova página
        const newContent = doc.getElementById('app-content')?.innerHTML || '';
        
        // 3. Extrai o novo título e a descrição
        const newTitle = doc.querySelector('title')?.textContent;
        const newMetaDesc = doc.querySelector('meta[name="description"]')?.getAttribute('content');
        
        // 4. Extrai o conteúdo do novo menu de navegação
        const newNavHtml = doc.querySelector('header nav ul')?.innerHTML;

        if (!newContent || !newNavHtml) {
            throw new Error("Não foi possível extrair o conteúdo ou o menu da página carregada.");
        }

        return { content: newContent, title: newTitle, metaDesc: newMetaDesc, navHtml: newNavHtml };
        
    } catch (error) {
        console.error('Falha ao carregar o conteúdo:', error);
        // Retorna um erro amigável
        return { 
            content: '<h1>Erro de Carregamento</h1><p>Não foi possível carregar o conteúdo da página.</p>', 
            title: 'Erro' 
        };
    }
}

/**
 * Manipula o clique nos links para carregar o conteúdo via SPA.
 */
async function navigate(e) {
    // 1. Verifica se o clique ocorreu em um <a>
    const link = e.target.closest('a');
    if (!link) return;
    
    const url = link.href;
    
    // 2. Verifica se é um link interno (deve começar com o domínio atual)
    if (url.startsWith(window.location.origin) || url.startsWith('/')) {
        e.preventDefault(); // IMPEDE O COMPORTAMENTO PADRÃO DO NAVEGADOR
        
        // Se a URL for a mesma, apenas ignora
        if (url === window.location.href) {
            return;
        }

        // 3. Carrega e extrai as partes da nova página
        const { content, title, metaDesc, navHtml } = await loadContent(url);
        
        // 4. Atualiza o conteúdo principal
        appContent.innerHTML = content;
        
        // 5. Atualiza a navegação no header para refletir o estado 'active'
        if (mainNavUl && navHtml) {
             mainNavUl.innerHTML = navHtml;
        }

        // 6. Atualiza a URL e o título (History API)
        if (title) {
            document.title = title;
        }
        if (metaDesc && metaDescriptionTag) {
            metaDescriptionTag.setAttribute('content', metaDesc);
        }
        
        // Muda a URL sem recarregar a página (permite usar o botão Voltar)
        window.history.pushState({ path: url }, title, url);

        // Rola a página para o topo
        window.scrollTo(0, 0);
    }
}

/**
 * Manipulador para o botão 'voltar/avançar' do navegador.
 */
function handlePopState(e) {
    const url = window.location.href;
    
    // Verifica se a URL pertence ao domínio
    if (url.startsWith(window.location.origin)) {
        // Recarrega o conteúdo para o estado do histórico
        loadContent(url).then(({ content, title, metaDesc, navHtml }) => {
            if (appContent && content) {
                appContent.innerHTML = content;
                
                if (title) document.title = title;
                if (metaDesc && metaDescriptionTag) metaDescriptionTag.setAttribute('content', metaDesc);
                if (mainNavUl && navHtml) mainNavUl.innerHTML = navHtml;

                // Rola a página para o topo (boa prática ao mudar o conteúdo)
                window.scrollTo(0, 0);
            }
        });
    }
}

// Adiciona os event listeners globais
document.addEventListener('click', navigate);
window.addEventListener('popstate', handlePopState);