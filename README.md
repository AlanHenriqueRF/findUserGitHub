# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

# Gerando o token GitHub

1- Logar no GitHub: Entre na sua conta do GitHub.

2- Navegar até as configurações: Clique no seu avatar no canto superior direito, depois vá em Settings (Configurações).

3- Ir para "Developer settings": No menu lateral esquerdo, role até o final e clique em Developer settings.

4- Criar um novo token:
    No menu esquerdo, clique em Personal access tokens e depois em Tokens (classic).
    Clique no botão Generate new token.

5- Configurar o token:
    Dê um nome para o token.
    Escolha a validade (por quanto tempo o token será válido).
    Marque as permissões que você deseja que o token tenha. Se for apenas para leitura de informações públicas, marque repo e user.

6- Gerar o token:
    Clique em Generate token no final da página.
    O GitHub vai mostrar seu token apenas uma vez, então copie-o e armazene-o em um lugar seguro (ex: arquivo .env no projeto).