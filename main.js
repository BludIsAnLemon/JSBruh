function hasErrors(code) {
  try {
    new Function(code)
    return false;
  } catch (e) {
    return true;
  }
};

const codeToBeEncoded = document.getElementById('codeToBeEncoded');

codeToBeEncoded.value = "alert(1)";

const encodeBtn = document.getElementById('encodeBtn');

const executeBtn = document.getElementById('executeBtn');

const output = document.getElementById('output');

encodeBtn.addEventListener('click', function() {
  if(hasErrors(codeToBeEncoded.value)) {
    alert('Code has errors!');
    return
  }
  
  output.textContent = 'Obfuscating.....';
  output.textContent = Bruhify(codeToBeEncoded.value);
  alert("Obfuscation is done!");
})

executeBtn.addEventListener('click', function() {
  eval(output.textContent)
})

function addStatement(code) {
  return `if(true && !false || !!true) { ${code} }`;
}

function addUselessLoop(code) {
  return `for(let i = 0; i < 1; i++) { ${code} }`
}

function wrapInIIFE(code) {
  return `(() => { ${code} })()`
}

function addUselessComments(code) {
  return `/* ${Math.random() * Math.random()} */ ${code}`
}

function addRandomNumber(code) {
  return ` { ${Math.random()}; } ${code}`
}

function Bruhify(code) {
  let result = code
  for(let i = 0; i < 2; i++) {
    result = JScrewIt.encode(result);
  }
  let hellCode = addStatement(result);
  
  for(let i = 0; i < 3; i++) {
    hellCode = addStatement(hellCode);
    hellCode = addUselessLoop(hellCode);
  }
  
  for(let i = 0; i < 4; i++) {
    hellCode = addStatement(hellCode);
    hellCode = addUselessLoop(hellCode);
    hellCode = wrapInIIFE(hellCode);
    hellCode = addRandomNumber(hellCode);
    hellCode = addUselessComments(hellCode);
  }
  
  hellCode = `if(true && !false || !!true) { ${hellCode} }`;
  
  return hellCode;
}

function copyText(text) {
  navigator.clipboard.writeText(text);
}