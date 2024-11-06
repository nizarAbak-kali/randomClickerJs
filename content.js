


function getRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
  }
  
  function randomCheck() {
    // Cases à cocher
    document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
      checkbox.checked = Math.random() >= 0.5;
    });
  
    // Boutons radio
    const radioGroups = {};
    document.querySelectorAll("input[type='radio']").forEach(radio => {
      if (!radioGroups[radio.name]) {
        radioGroups[radio.name] = [];
      }
      radioGroups[radio.name].push(radio);
    });
    Object.values(radioGroups).forEach(group => {
      const randomRadio = group[Math.floor(Math.random() * group.length)];
      randomRadio.checked = true;
    });
  
    // Champs de texte
    document.querySelectorAll("input[type='text'], input[type='email'], input[type='password'], textarea").forEach(input => {
      input.value = getRandomString(10);
    });
  }
  
  function getRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
  }
  
  function randomCheckPrimeNG() {

    // Cases à cocher PrimeNG
    document.querySelectorAll(".p-checkbox-box").forEach(checkbox => {
      if (Math.random() >= 0.5) {
        checkbox.click();  // Simule un clic pour cocher/décocher
      }
    });
  
    // Boutons radio PrimeNG
    const radioGroups = {};
    document.querySelectorAll(".p-radiobutton").forEach(radio => {
      console.log("test: ", radio);
      const randomRadio = Math.random();
      console.log(randomRadio);
      randomRadio >= 0.3 ? radio.click(): console.log("no-click");
      // const radioGroupName = radio.closest('.p-radiobutton').getAttribute('name');
      // if (radioGroupName) {
      //   if (!radioGroups[radioGroupName]) {
      //     radioGroups[radioGroupName] = [];
      //   }
      //   radioGroups[radioGroupName].push(radio);
      // }
    });
  
    // Object.values(radioGroups).forEach(group => {
    //   const randomRadio = group[Math.floor(Math.random() * group.length)];
    //   randomRadio.click();  // Simule un clic pour sélectionner un bouton radio
    // });
  
    // Champs de texte
    document.querySelectorAll("input[type='text'], input[type='email'], input[type='password'], textarea").forEach(input => {
      input.value = getRandomString(10);
    });
  }
  
  // Appelle la fonction principale
  randomCheckPrimeNG();
  
  // Appelle la fonction principale
  randomCheck();
  