<p align="center">
  <img src="./assets/logo_v1/logo.png" alt="React CLI Logo">
</p>

# React CLI 

React CLI is a tool that helps develop react and react native based applications by automatically generate components for these frameworks.

React CLI does **not** require *any* additional changes to your code or method of development. 

# Installation

Either through cloning with git or by using [npm](http://npmjs.org) (the recommended way):

```bash
npm install -g git+https://github.com/matanatia/react-cli.git
```

And React CLI will be installed globally to your system path.

You can also install React CLI as a development dependency:

```bash
npm install --save-dev git+https://github.com/matanatia/react-cli.git
```

With a local installation, React CLI will not be available in your system path. Instead, the local installation of React CLI can be run by calling it from within an npm script (such as `npm start`) or using `npx git+https://github.com/matanatia/react-cli.git`.

# Usage 

```bash
react-cli [command] [component name] [location] [options]
```

For commands list, use the `react-cli` without any parameters:

```bash
react-cli 
```

## Commands
The commands avilable for this version are as follows:

 - **create-react-component** - 
 
    create 3 files - `component_name.js` (react class base component), `component_name.css` file and `component_name.test.js`.
    when using the `-f` option create these files inside a folder with the name of the component at the location given by the user 
    (if location not specified create the files in the location where the cli has been used), for example: 

    ```bash
    react-cli create-react-component MyComponent ./src/components -f
    ```

 - **crc** - alias for **create-react-component**

 - **create-react-functional-component** -

    create 3 files - `component_name.js` (react functional base component), `component_name.css` file and `component_name.test.js`.
    when using the `-f` option create these files inside a folder with the name of the component at the location given by the user 
    (if location not specified create the files in the location where the cli has been used), for example: 

    ```bash
    react-cli create-react-functional-component MyComponent ./src/components -f
    ```

 - **crfc** - alias for **create-react-functional-component**

 - **create-react-native-component** -

    With `-sp` option this command create 2 files `component_name.js` (react native class base component) and `component_name.style.js` file.
    Without `-sp` option this command create 1 file `component_name.js` (react native class base component) and inside the component file there will be `style` object.
    when using the `-f` option create these files inside a folder with the name of the component at the location given by the user 
    (if location not specified create the files in the location where the cli has been used), for example: 

    ```bash
    react-cli create-react-native-component MyComponent ./src/components -f -sp
    ```

 - **crnc** - alias for **create-react-native-component**

 - **create-react-native-functional-component** -

    With `-sp` option this command create 2 files `component_name.js` (react native functional base component) and `component_name.style.js` file.
    Without `-sp` option this command create 1 file `component_name.js` (react native functional base component) and inside the component file there will be `style` object.
    when using the `-f` option create these files inside a folder with the name of the component at the location given by the user 
    (if location not specified create the files in the location where the cli has been used), for example: 

    ```bash
    react-cli create-react-native-functional-component MyComponent ./src/components -f -sp
    ```

 - **crnfc** - alias for **create-react-native-functional-component**

## For local installation

Example for **package.json** scripts:

```bash
{
  "name": "my-app",
  ...
  "scripts": {
    "create-react-component": "react-cli crc",
    "create-react-component-f": "react-cli crfc",
    "create-rn-component": "react-cli crnc",
    "create-rn-component-f": "react-cli crnfc"
  },
  ...
}
```

**Usage with npm:**

```bash
npm run create-react-component -f
npm run create-rn-component -f -sp
```

- **If you want to change the tamplate for the application you can change it at the react-cli.tamplates.json file in the react-cli folder at your node_modules folder**

