export const validate = (name, data, required) => {
    switch (name) {
      case "name":
      case "surname":
      case "address":
      case "country":
      case "city": 
        //Aqui evaluaremos strings que NO pueden tener números
  
        if (data === "" && required === true) {
  
          
          return {message: "Please fill the field", validated: false};
  
          //Evaluamos mediante la expresión regular 
        } else if (!/[a-z]/gi.test(data)) {
          return {message: "Please fill with a valid text", validated: false};
        }
  
        return {message: "", validated: true};
  
      case "email":
        if (data === "" && required === true) {
          return {message: "Please fill the field", validated: false};
        } else if (
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data)
        ) {
          return {message: "Invalid e-mail format", validated: false};
        }
  
        return {message: "", validated: true};
  
      case "password":
        if (data === "" && required === true) {
          return {message: "Please fill the field", validated: false};
        } else if (!/[\d()+-]/g.test(data)) {
          return {message: "Invalid password format", validated: false};
        }
        return {message: "", validated: true};
      case "postcode":  
      case "phone":
      case "tfno":
      case "telefono":
      case "phonenumber":
        if (data === "" && required === true) {
          return {message: "Please fill the field", validated: false};
        } else if (/\+?\(?\d{2,4}\)?[\d\s-]{12,}/.test(data)) {
          return {message: "Invalid password format", validated: false};
        }
        return {message: "", validated: true};
         
      case "dni":
      case "document":
      case "nif":
        break;
  
      default:
        console.log("Fielt not recognized");
    }
  };