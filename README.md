<img width="1404" alt="Screenshot 2024-03-24 at 10 47 58 AM" src="https://github.com/mounishvatti/pandacoinweb3/assets/76279858/b2badf6a-fd1e-4222-a550-8528b6455d36">

# 🐼💰 PandaCoin Web3.0 Application (Vite + React)

## This is a Vite+React WEB3.0 Application using Tailwindcss for PandaCoin using Ethereum Blockchain Network &amp; writing Solidity Smart Contracts and integrating it with Metamask Extension to transfer SepoliaETH globally.



### Tech Stack

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white) ![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white) 

![Brave](https://img.shields.io/badge/Brave-FB542B?style=for-the-badge&logo=Brave&logoColor=white)

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

### Clone this repository

```bash
git clone https://github.com/mounishvatti/pandacoinweb3.git
```

### cd to the client directory

```bash
cd pandacoinweb3/client
```
### install node modules

```bash
npm install
```

### Install tailwindcss (Scroll down for steps)

### Install react-icons & ethers in your client directory 

Use the npm command:

```bash
npm i react-icons
npm install --save ethers
``` 

### cd to the smart_contract directory

```bash
cd pandacoinweb3/smart_contract
```

```bash
npm init
```

### install [`Hardhat`](https://hardhat.org/hardhat-runner/docs/getting-started)

```bash
npm install --save-dev hardhat
```

### If you want to make it from the scratch follow the steps below:

#### create a folder named web3project

#### create two folders under web3project named client & smart_contract

#### Make sure you have nodejs installed
If not then download from the link provided below

[`Nodejs`](https://nodejs.org/en/download/)

This project was made using `Vite`

#### cd to the client folder and follow the following steps:

Follow the link to understand the procedure for working with vite

[`Vitejs`](https://vitejs.dev/guide/)

#### With NPM:

```bash
npm create vite@latest
```

#### With Yarn:

```bash
yarn create vite
```

#### With PNPM:
```bash
pnpm create vite
```

#### Choose your preferred template

`vue` `react` `vanilla` etc.

#### Choose either TypeScript or JavaSript

`TypeScript`
`TypeScript + swc`
`JavaScript`
`JavaScript + swc`

#### We're using Tailwindcss Using PostCSS

### Install Tailwind CSS

- Install tailwindcss and its peer dependencies via npm, and create your tailwind.config.js file.

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

### Add Tailwind to your PostCSS configuration
Create a `postcss.config.js` in your root directory if it doesn’t exist already. This is where you will configure plugins
- Add tailwindcss and autoprefixer to your postcss.config.js file, or wherever PostCSS is configured in your project.

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```
### Configure your template paths

- Add the paths to all of your template files in your `tailwind.config.js` file.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Add the Tailwind directives to your CSS

- Add the `@tailwind` directives for each of Tailwind’s layers to your ./src/index.css file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Start your build process

```bash
npm run start
```

### Follow the Tailwind's official documentation for detailed explanation

[`Tailwind + React`](https://tailwindcss.com/docs/guides/create-react-app)

[`Tailwind using PostCSS`](https://tailwindcss.com/docs/installation/using-postcss)

### Install react-icons & ethers in your client directory 

Use the npm command:

```bash
npm i react-icons
npm install --save ethers
```

### cd to the smart_contract folder and do the following:

### npm init

```bash
npm init
```

### Using Hardhat for testing out SmartContracts

[`Hardhat`](https://hardhat.org/hardhat-runner/docs/getting-started)

## Installing hardhat

```bash
npm install --save-dev hardhat
```

### npx hardhat init

```bash
$ npx hardhat init
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888

👷 Welcome to Hardhat v2.19.0 👷‍

? What do you want to do? …
❯ Create a JavaScript project
  Create a TypeScript project
  Create an empty hardhat.config.js
  Quit
  
```

### Select `Create a JavaScript project`

Make sure you checkout the `@nomiclabs/hardhat-waffle` as we'll be using it in this project.

[`Hardhat-Plugins`](https://hardhat.org/hardhat-runner/plugins)

### Video Lecture by [`JS Mastery`](https://www.youtube.com/@javascriptmastery)
[`Build and Deploy a Modern Web 3.0 Blockchain App | Solidity, Smart Contracts, Crypto`](https://youtu.be/Wn_Kb3MR_cU?si=GP6AewHbyVxhR2kw) by [`@adrianhajdin`](https://github.com/adrianhajdin) 




