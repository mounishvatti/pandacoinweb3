# PandaCoin Web3.0 Application (Vite + React)

This is a Vite+React WEB3.0 Application using Tailwindcss for PandaCoin using Ethereum Blockchain Network &amp; writing Solidity Smart Contracts and integrating it with Metamask Extension to transfer SepoliaETH globally.

![PandaCoin](client/src/assets/website.png)

### Clone this repository

```
git clone https://github.com/mounishvatti/pandacoinweb3.git
```

## cd to the client directory

```
cd pandacoinweb3/client
```
## install node modules

```
npm install
```

## Install tailwindcss (Scroll down for steps)

## Install react-icons & ethers in your client directory 

Use the npm command:

```
npm i react-icons
npm install --save ethers
``` 

## cd to the smart_contract directory

```
cd pandacoinweb3/smart_contract
```

```
npm init
```

## install [`Hardhat`](https://hardhat.org/hardhat-runner/docs/getting-started)

```
npm install --save-dev hardhat
```

# If you want to make it from the scratch follow the steps below:

## create a folder named web3project

## create two folders under web3project named client & smart_contract

## Make sure you have nodejs installed
If not then download from the link provided below

[`Nodejs`](https://nodejs.org/en/download/)

This project was made using Vite

## cd to the client folder and follow the following steps:

Follow the link to understand the procedure for working with vite

[`Vitejs`](https://vitejs.dev/guide/)

## With NPM:

```
npm create vite@latest
```

## With Yarn:

```
yarn create vite
```

## With PNPM:
```
pnpm create vite
```

## Choose your preferred template

`vue` `react` `vanilla` etc.

## Choose either TypeScript or JavaSript

`TypeScript`
`TypeScript + swc`
`JavaScript`
`JavaScript + swc`

## We're using Tailwindcss Using PostCSS

# Install Tailwind CSS

- Install tailwindcss and its peer dependencies via npm, and create your tailwind.config.js file.

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

# Add Tailwind to your PostCSS configuration
Create a `postcss.config.js` in your root directory if it doesn’t exist already. This is where you will configure plugins
- Add tailwindcss and autoprefixer to your postcss.config.js file, or wherever PostCSS is configured in your project.

```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```
# Configure your template paths

- Add the paths to all of your template files in your `tailwind.config.js` file.

```
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

# Add the Tailwind directives to your CSS

- Add the `@tailwind` directives for each of Tailwind’s layers to your ./src/index.css file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# Start your build process

```
npm run start
```

## Follow the Tailwind's official documentation for detailed explanation

[`Tailwind + React`](https://tailwindcss.com/docs/guides/create-react-app)

[`Tailwind using PostCSS`](https://tailwindcss.com/docs/installation/using-postcss)

## Install react-icons & ethers in your client directory 

Use the npm command:

```
npm i react-icons
npm install --save ethers
```

## cd to the smart_contract folder and do the following:

## npm init

```
npm init
```

## Using Hardhat for testing out SmartContracts

[`Hardhat`](https://hardhat.org/hardhat-runner/docs/getting-started)

# Installing hardhat

```
npm install --save-dev hardhat
```

# npx hardhat init

```
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

## Select `Create a JavaScript project`

Make sure you checkout the `@nomiclabs/hardhat-waffle` as we'll be using it in this project.

[`Hardhat-Plugins`](https://hardhat.org/hardhat-runner/plugins)

## Video Lecture by [`JS Mastery`](https://www.youtube.com/@javascriptmastery)
[`Build and Deploy a Modern Web 3.0 Blockchain App | Solidity, Smart Contracts, Crypto`](https://youtu.be/Wn_Kb3MR_cU?si=GP6AewHbyVxhR2kw) by [`@adrianhajdin`](https://github.com/adrianhajdin) 




