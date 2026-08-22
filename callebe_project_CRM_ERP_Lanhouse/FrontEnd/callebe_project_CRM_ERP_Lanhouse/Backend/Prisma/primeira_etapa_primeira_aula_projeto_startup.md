# Projeto Startup — Primeira aula

## 1. Primeira etapa: estrutura inicial do projeto

Nesta primeira etapa foi criada a estrutura básica de uma página web para o projeto **Sistema de organização de cliente e Gestão profissional**.

### Objetivo da aula

Montar a estrutura inicial do frontend utilizando:

- HTML5 para a estrutura da página;
- CSS3 para a estilização;
- Cabeçalho (`header`) com menu de navegação;
- Área principal (`main`) para apresentação do sistema;
- Botões de acesso ao Dashboard e à área de login;
- Estrutura inicial para futuras seções do projeto.

## 2. Estrutura de arquivos

A organização inicial utilizada foi:

```text
FrontEnd/
├── index.html
├── style.css
└── Pages/
    ├── cadastro.html
    └── login.html
```

## 3. HTML inicial

O arquivo `index.html` contém a estrutura principal da página:

- `header`: cabeçalho do sistema;
- `nav`: menu de navegação;
- `main`: conteúdo principal;
- `section`: áreas destinadas aos conteúdos do projeto;
- `button`: botões de Dashboard e Entrar.

O menu possui links para:

- Início;
- Cadastro;
- Login.

## 4. CSS inicial

No arquivo `style.css` foi aplicada uma configuração inicial para remover margens e espaçamentos padrão do navegador:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

Também foi iniciada a estilização do cabeçalho:

```css
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    height: 72px;
    max-width: 100%;
}
```

## 5. Observação importante sobre o menu

Na primeira versão, o seletor:

```css
ul li a
```

foi utilizado para tentar organizar os itens do menu. Porém, `display: flex` e `gap` devem ser aplicados preferencialmente ao elemento que contém os itens, como o `ul`.

Uma forma mais adequada para a próxima etapa será:

```css
nav ul {
    display: flex;
    gap: 1rem;
    list-style: none;
}
```

Assim, os itens do menu ficam organizados horizontalmente.

## 6. Resultado esperado da primeira aula

Ao finalizar esta etapa, o projeto deve possuir uma página inicial com:

1. Um cabeçalho preto;
2. Um menu de navegação;
3. Links para Início, Cadastro e Login;
4. Um título apresentando o sistema;
5. Uma descrição do projeto;
6. Botões para Dashboard e Entrar;
7. Estrutura preparada para receber as próximas partes do sistema.

## 7. Próximas etapas

Nas próximas aulas, a estrutura poderá evoluir para:

- criação das páginas de cadastro e login;
- estilização completa da interface;
- criação do Dashboard;
- criação dos cards/boxes;
- integração com o backend;
- gerenciamento de clientes;
- organização dos dados;
- funcionalidades de autenticação.

---

**Primeira etapa concluída:** estrutura inicial do frontend com HTML e CSS.
