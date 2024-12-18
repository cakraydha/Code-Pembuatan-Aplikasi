function calculateOilType() {
    const sg = parseFloat(document.getElementById('sg').value);
    const api = parseFloat(document.getElementById('api').value);
    const resultText = document.getElementById('result-text');
  
    if (isNaN(sg) || isNaN(api)) {
      resultText.innerHTML = "Please enter valid SG and API values.";
    } else {
      let oilType = "";
  
      if (api > 31.1) {
        oilType = "Light Oil 🟡";
      } else if (api >= 22.3 && api <= 31.1) {
        oilType = "Medium Oil 🟠";
      } else if (api < 22.3 && api >= 10) {
        oilType = "Heavy Oil 🔴";
      } else {
        oilType = "Extra Heavy Oil ⚫";
      }
  
      resultText.innerHTML = `The determined oil type is: <strong>${oilType}</strong>`;
    }
  
    document.getElementById('result-modal').style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById('result-modal').style.display = "none";
  }
  