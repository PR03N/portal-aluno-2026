# 🎓 Portal do Aluno - PROEN UFSJ

Este repositório contém o código-fonte do Portal do Aluno, uma aplicação web desenvolvida para a Pró-Reitoria de Ensino de Graduação da Universidade Federal de São João del-Rei (UFSJ).

## 🛠️ Tecnologias Utilizadas

Astro: Framework web focado em performance e velocidade. Utilizado para gerar páginas estáticas rápidas e componentizar layouts.

Tailwind CSS: Framework de CSS utilitário usado para a estilização ágil e responsiva da interface.

JavaScript (Vanilla): Utilizado para interações de interface e requisições externas.

FontAwesome: Biblioteca de ícones.

## 👨‍💻 Para Desenvolvedores: Arquitetura do Projeto

O projeto utiliza o conceito de Data-Driven UI (Interface Orientada a Dados). Isso significa que a estrutura visual (HTML/Astro/Tailwind) está estritamente separada do conteúdo textual.

As páginas localizadas em `src/pages/` atuam apenas como "motores de renderização". Elas importam os arquivos .json da pasta `src/data/`, iteram sobre eles usando `.map()`, e geram a interface na tela.

### Rodando o projeto localmente

Instale as dependências: `npm install`

Inicie o servidor de desenvolvimento local: `npx astro dev --host`

## 📝 Guia de Administração de Conteúdo (Para Editores)

Bem-vindo(a)! Se você precisa atualizar textos, links, ou adicionar/remover botões no Portal, você não precisa alterar o código visual do site.

Todas as modificações são feitas editando os arquivos de texto localizados na pasta `src/data/`. Esses arquivos têm a extensão .json e funcionam como gavetas organizadas de informações.

**⚠️ Regra de Ouro do JSON: Nunca apague as aspas (""), as chaves ({ }), os colchetes ([ ]) ou as vírgulas (,) no final das linhas. Se um campo ficar vazio, deixe-o assim: "campo": "".**

### 1. Como editar a Tela Inicial (main_menu.json)

O arquivo `src/data/main_menu.json` controla os botões coloridos que aparecem logo que o aluno abre o aplicativo. Se você adicionar um bloco novo, um novo botão aparecerá automaticamente. Se apagar um bloco, o botão some.

O que significa cada campo:

- "tipo": Define a aparência do botão. Pode ser "padrao" (quadrado pequeno), "destaque" (retângulo grande horizontal, como o SIGAA) ou "calendario" (exclusivo para o módulo de datas).

- "link": O endereço para onde o botão leva (ex: /ru para páginas internas, ou https://... para sites externos).

- "target": Use "\_self" para abrir na mesma tela, ou "\_blank" para abrir em uma nova aba do navegador.

- "icone": O nome do ícone do FontAwesome (ex: "fa-utensils" para os talheres).

- "titulo" e "subtitulo": Os textos que aparecem no botão.

### 2. Como editar as páginas de _Campi_ e Cursos (campi.json)

O arquivo `src/data/campi.json` alimenta tanto a página de _Campi_ quanto a página de Cursos. Ele é dividido por unidades (_Campi_). Dentro de cada unidade, há uma lista de Cursos.

#### Para a Unidade (Campus):

- "campus": O nome oficial seguido da sigla obrigatória entre parênteses (ex: "Campus Santo Antônio (CSA)"). Atenção: Os parênteses são obrigatórios para a navegação funcionar.

- "localizacao": Cidade e estado.

#### Para os Cursos (dentro da unidade):

- "nome": Nome do curso.

- "modalidade": "Bacharelado", "Licenciatura", etc. (Aparece na etiqueta vermelha).

- "turno": "Integral", "Noturno", etc. (Aparece na etiqueta cinza).

- "descricao": Resumo do curso (ideal manter entre 150 e 200 caracteres para boa leitura no celular).

- "linkSite": Link da página oficial do curso no site da UFSJ.

### 3. Como funciona a Planilha do Calendário Acadêmico

Na tela inicial, o bloco de "Calendário Acadêmico" exibe datas dinâmicas. Esse funcionamento é diferente dos arquivos JSON:

As datas não estão escritas no código do site. Elas são puxadas automaticamente de uma planilha do Google Planilhas.

Planilha usada para configurar o calendário disponível em: https://docs.google.com/spreadsheets/d/1RBVOdw8O2wAPKhs2fktp60CcFam7eUT09dMbl47_RHM/edit?usp=sharing

**Como atualizar**: Quando o calendário letivo mudar, você só precisa abrir a Planilha do Google, adicionar as novas linhas com a Data e a Descrição do Evento (ex: "05/03" - "Início do Semestre Letivo").

Ao salvar a planilha, o aplicativo do aluno será atualizado automaticamente na próxima vez que ele abrir a tela inicial, mostrando sempre os eventos mais próximos de acontecerem.

Obs: apenas as 4 primeiras datas no início da planilha são mostradas na página principal, caso queira aumentar a quantidade de datas apresentadas comunicar com a PROEN.

---

Documentação mantida pela Pró-Reitoria de Ensino de Graduação da UFSJ.
