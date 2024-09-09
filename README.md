# FindUserGitHub
 Este projeto é um web-app desenvolvido em React Native para buscar e exibir informações de usuários e repositórios do GitHub. A aplicação permite pesquisar pelo nome de usuário, listar os repositórios e exibir detalhes de cada um deles. Além disso, mantém um histórico das buscas recentes para fácil acesso.

## Tecnologias Utilizadas
- React Native (Expo): Para desenvolvimento mobile.
- TypeScript: Linguagem de programação utilizada.
- Axios: Para fazer as requisições HTTP à API do GitHub.
- Styled-components: Para estilização dos componentes.

## Funcionalidades
1. Busca de Usuários: Busque qualquer usuário do GitHub através de seu username e exiba informações como foto, nome, login e localização.
2. Perfil Detalhado: Exibe informações detalhadas do usuário, incluindo quantidade de seguidores, repositórios públicos e mais.
3. Lista de Repositórios: Veja todos os repositórios públicos do usuário, com detalhes como nome, linguagem, descrição e datas de criação e último push.
4. Histórico de Pesquisas: Acompanhe os últimos usuários pesquisados, com rápido acesso a seus perfis.
5. Navegação até Repositórios: Clique em um repositório para ser redirecionado ao GitHub.

# Instalação
### Clone o repositório:

```bash
git clone https://github.com/seu-usuario/findusergithub.git
```
### Acesse a pasta do projeto:

```bash
cd findusergithub
```

### Instale as dependências:

```bash
npm install
```

## Como Rodar o Projeto
### Para iniciar o projeto iremos usar o <strong>Expo</strong>, utilize:

```bash
npx expo start
```

### Por fim, <strong>escanei o QR code, e baixe o app do Expo Go, para conseguir rodar a aplicação em seu celular</strong>, ou acessar o localhost para acessar de forma Web.

# Configuração do Ambiente (.env)
No arquivo .env, você precisa configurar a variável ***GITHUB_TOKEN***, que será utilizada para autenticar as requisições à API do GitHub.

## Gerando o token GitHub:
1. Logar no GitHub: Entre na sua conta do GitHub.

2. Navegar até as configurações: Clique no seu avatar no canto superior direito, depois vá em `Settings` (Configurações).

3. Ir para `"Developer settings"`: No menu lateral esquerdo, role até o final e clique em Developer settings.

4. Criar um novo token:
    No menu esquerdo, clique em ***Personal access tokens*** e depois em Tokens (`classic`).
    Clique no botão Generate new token.

5. Configurar o token:
    Dê um nome para o token.
    Escolha a validade (por quanto tempo o token será válido).
    Marque as permissões que você deseja que o token tenha. Se for apenas para leitura de informações públicas, marque repo e user.

6. Gerar o token:
    Clique em Generate token no final da página.
    O GitHub vai mostrar seu token apenas uma vez, então copie-o e armazene-o em um lugar seguro (ex: arquivo `.env` no projeto).

    ```
    GITHUB_TOKEN=seu_token_aqui
    ```
# Figma
Se desejar conferir o design que foi desenvolvido no Figma, clique no link abaixo:


Link do [Figma](https://www.figma.com/design/jm1pAFrjBeGB7YF8CZM9Li/Untitled?node-id=1-47&node-type=FRAME&t=IuowpJgywc28eEfL-0)

# Links de Entrega
- Repositório no GitHub: https://github.com/seu-usuario/findusergithub
- Link de download do [APK](https://drive.google.com/drive/folders/1KhA185sSHDc6NkA1LZCmgCFeF-yN5mOc?usp=sharing)

# layouts

![image](https://github.com/user-attachments/assets/799185f4-d8ea-46e1-9ff8-55a4eb1c5709)
