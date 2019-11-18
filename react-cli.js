const fs = require("fs");
const path = require("path");
const json = require("react-cli/react-cli.tamplates.json");

const create_file = (file_name, dir_path, file_type, file_template, createFolder) => {
  let filePath = null;
  if (createFolder) {
    //create the dirctory in the right path
    let dirPath = "";

    if(dir_path) {
      dirPath = path.resolve(
        path.normalize(path.join(`${dir_path}`, `${file_name}`))
      );
    }
    else {
      dirPath = path.resolve(
        path.normalize(path.join(`${file_name}`))
      );
    }

    dirPath = dirPath.replace(file_name.toLocaleLowerCase(), file_name);
    fs.mkdirSync(dirPath, { recursive: true });
    
    //update file path to include the new dirctory
    filePath = path.resolve(
      path.normalize(path.join(`${dirPath}`,`${file_name}${file_type}`))
    );
  } 
  else if(dir_path) {
    //update file path with the dirctory path he will be created
    filePath = path.resolve(
      path.normalize(path.join(`${dir_path}`,`${file_name}${file_type}`))
    );
  }
  else {
    //there Isn’t dir path, the file is created in the location (folder) the user triger the cmd
    filePath = path.resolve(path.normalize(`${file_name}${file_type}`));
  }

  filePath = filePath.replace(file_name.toLocaleLowerCase(), file_name);

  fs.writeFileSync(filePath, file_template, { encoding: "utf-8" });

  console.log(
    "\x1b[32m",
    `${file_name}${file_type} was created successfully`,
    "\x1b[0m"
  );
}

const create_template = (template_type, file_type, capitalized_component_name) => {
  let template = "";
  const raw_temp = json[`${template_type}${file_type}`];

  if(raw_temp) {
    template = raw_temp.join("").replace(/App/g,capitalized_component_name);
  }

  return template;
}

// in the app json file after "npm i react-cli" put "react-cli crc"
const creatReactComponent = (componentName, componentPath, createFolder) => {
  if (!componentName) {
    return console.log(
      "\x1b[47m\x1b[31m",
      "The name of the component is requier",
      "\x1b[0m"
    );
  }

  const types = [".js", ".test.js", ".css"];
  const template_type = "component";
  const capitalized_component_name =
    componentName.charAt(0).toUpperCase() + componentName.slice(1);

  for (const type of types) {
    const tamplet = create_template(template_type, type, capitalized_component_name);
    create_file(
      capitalized_component_name,
      componentPath,
      type,
      tamplet,
      createFolder
    );
  }
};

// in the app json file after "npm i react-cli" put "react-cli crc"
const creatReactFunctionalComponent = (componentName, componentPath, createFolder) => {
  if (!componentName) {
    return console.log(
      "\x1b[47m\x1b[31m",
      "The name of the component is requier",
      "\x1b[0m"
    );
  }

  const types = [".js", ".test.js", ".css"];
  let template_type = "component";
  const capitalized_component_name =
    componentName.charAt(0).toUpperCase() + componentName.slice(1);

  for (const type of types) {

    if(type===".js") {
      template_type = "functional.component";
    }
    else {
      template_type = "component";
    }

    const tamplet = create_template(template_type, type, capitalized_component_name);

    create_file(
      capitalized_component_name,
      componentPath,
      type,
      tamplet,
      createFolder
    );
  }
};

// in the app json file after "npm i react-cli" put "react-cli crnc"
const creatReactNativeComponent = (componentName, componentPath, createFolder, splitReactNativeFile) => {
  if (!componentName) {
    return console.log(
      "\x1b[47m\x1b[31m",
      "The name of the component is requier",
      "\x1b[0m"
    );
  }

  const types = [".js"];
  let template_type = "rn.ws.component";

  if(splitReactNativeFile) {
    template_type = "rn.component";
    types.push(".style.js");
  }

  const capitalized_component_name =
    componentName.charAt(0).toUpperCase() + componentName.slice(1);

  for (const type of types) {

    let tamplet = "";
    if(type === ".style.js") {
      tamplet = create_template("rn", type, capitalized_component_name);
    }
    else {
      tamplet = create_template(template_type, type, capitalized_component_name);
    }

    create_file(
      capitalized_component_name,
      componentPath,
      type,
      tamplet,
      createFolder
    );
  }
};

// in the app json file after "npm i react-cli" put "react-cli crnc"
const creatReactNativeFunctionalComponent = (componentName, componentPath, createFolder, splitReactNativeFile) => {
  if (!componentName) {
    return console.log(
      "\x1b[47m\x1b[31m",
      "The name of the component is requier",
      "\x1b[0m"
    );
  }

  const types = [".js"];
  let template_type = "rn.ws.functional.component";

  if(splitReactNativeFile) {
    template_type = "rn.functional.component";
    types.push(".style.js");
  }

  const capitalized_component_name =
    componentName.charAt(0).toUpperCase() + componentName.slice(1);

  for (const type of types) {
    
    let tamplet = "";
    if(type === ".style.js") {
      tamplet = create_template("rn", type, capitalized_component_name);
    }
    else {
      tamplet = create_template(template_type, type, capitalized_component_name);
    }

    create_file(
      capitalized_component_name,
      componentPath,
      type,
      tamplet,
      createFolder
    );
  }
};


module.exports = {
  creatReactComponent,
  creatReactFunctionalComponent,
  creatReactNativeComponent,
  creatReactNativeFunctionalComponent
};