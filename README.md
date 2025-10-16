# ONG Adoção de Animais – Entrega III: Interatividade e SPA

## Descrição
Nesta terceira entrega, o site da **ONG Adoção de Animais** evoluiu de uma interface estática para uma **aplicação web dinâmica e interativa**, utilizando **JavaScript avançado**.  

O objetivo principal foi transformar as páginas HTML em uma **Single Page Application (SPA) funcional**, com **templates JavaScript** e validação de formulários, simulando uma aplicação web real.

As páginas principais continuam sendo: `index.html`, `projetos.html`, `cadastro.html` e `voluntariado.html`, agora integradas e navegáveis via SPA.

---

## Acesse o site
- Você pode acessar a versão publicada no GitHub Pages:  
  https://rickpg231.github.io/Atividade3_Ong_Adocao_Animais/

---

## Objetivos
- Transformar a interface estática em uma aplicação web dinâmica  
- Demonstrar domínio de **manipulação do DOM**, eventos e armazenamento local  
- Implementar **SPA básico** e **templates JavaScript**  
- Validar formulários com aviso de preenchimento incorreto  
- Organizar código JavaScript de forma modular  

---

## Tecnologias
- **HTML5** e **CSS3** (Grid, Flexbox, variáveis, responsividade)  
- **JavaScript** (SPA, templates, DOM, eventos, validação de formulários)  
- **Armazenamento local** (localStorage/sessionStorage, opcional)  
- **Imagens otimizadas** (`.webp` e `.jpg`)  

---

## Layout, Responsividade e SPA
- **Grid** para estrutura principal (`header`, `main`, `footer`)  
- **Flexbox** para componentes internos (cards, formulários, menus)  
- **Sistema de 12 colunas** e 5 breakpoints:  
  - 1440px → desktop grande  
  - 1200px → desktop médio  
  - 992px  → tablet horizontal  
  - 768px  → tablet vertical  
  - 480px  → celular  
- **Menu responsivo**: desktop horizontal e mobile com hambúrguer e dropdown  
- **SPA**: navegação entre seções sem recarregar a página  
- **Templates JS**: carregamento de conteúdo dinâmico por seção  

---

## Funcionalidades Implementadas
- **Validação de formulários**: campos obrigatórios, CPF, e-mail e seleção de dias da semana  
- **Mensagens de sucesso** exibidas dinamicamente após submissão  
- **SPA funcional**: conteúdo de cada página carregado via JavaScript, evitando scroll desnecessário  
- **Scripts modularizados**: `spa.js`, `cadastro.js`, `mascaras.js`  

---

## Conclusão
A entrega III garante que o site seja **dinâmico, interativo e modular**, mantendo **responsividade, acessibilidade e consistência visual**.  
A navegação entre páginas é agora **fluida**, e os formulários apresentam **validação avançada**, simulando uma aplicação web real.
