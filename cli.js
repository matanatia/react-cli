#!/usr/bin/env node
const app = require("react-cli");

//get the vars from the user
const args = process.argv.slice(2);
const cmdFlags = JSON.parse(process.env.npm_config_argv).original;
const cmdName = args[0];
let componentName = typeof args[1] === "string" ? args[1].replace(/[^a-zA-Z ]/g, "") : args[1];
let componentPath = args[2];
let createFolder = false;
let splitReactNativeFile = false;

//check if the flag of create folder in the right place
if(cmdFlags.indexOf("-f") !== -1) {
    createFolder = true;
}

if(cmdFlags.indexOf("-sp") !== -1) {
    splitReactNativeFile = true;
}

const cmdList = {
    "create-react-component": app.creatReactComponent,
    "crc": app.creatReactComponent,
    "create-react-functional-component": app.creatReactFunctionalComponent,
    "crfc": app.creatReactFunctionalComponent,
    "create-react-native-component": app.creatReactNativeComponent,
    "crnc": app.creatReactNativeComponent,
    "create-react-native-functional-component": app.creatReactNativeFunctionalComponent,
    "crnfc": app.creatReactNativeFunctionalComponent
}

if(cmdList[cmdName]) {

    const func = cmdList[cmdName];
    func(componentName, componentPath, createFolder, splitReactNativeFile);
    
}
else {
    console.log(
        "\x1b[47m\x1b[31m",
        `The cmd ${cmdName} isn't recognized`,
        "\x1b[0m \n\n",
        "You can use the following commands:\n",
        "\x1b[34m \n",
        `${Object.keys(cmdList).join("\n ")}`,
        "\n \x1b[0m"
      );
}