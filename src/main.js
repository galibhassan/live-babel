var babel = require('babel-core');

window.addEventListener("load", function () {

  var inputDiv = document.getElementById('inputDiv');
  var outputDiv = document.getElementById('outputDiv');
  inputDiv.addEventListener('keyup', onInputChange)
  
  // Presets list
  var presetsList = {
    jsx :{
      name: "JSX to JS",
      path: require("babel-preset-react")
    }, 
    es6_2015 :{
      name: "ES6 2015 to JS",
      path: require("babel-preset-es2015")
    }
  }

  function onInputChange(event) {
    var code = inputDiv.innerText;
    // console.log(code);

    try {
      var result = babel.transform(code, {
        presets: [presetsList.jsx.path, presetsList.es6_2015.path]
      });
      outputDiv.innerHTML = `<pre> ${result.code} </pre>`;

    }
    catch (err) {
      outputDiv.innerText = err;
    }


  }
});

