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
  new Function(output.textContent)()
})

function addStatement(code) {
  return `if(true && !false || !!true) { \n
            ${code} \n
          }`;
}

function addUselessLoop(code) {
  return `for(let i = 0; i < 1; i++) { \n
            ${code} \n
          }`
}

function wrapInIIFE(code) {
  return `(() => { \n  ${code} \n })()`
}

function addUselessComments(code) {
  return `// ${Math.random() * Math.random()} \n ${code}`
}

function Bruhify(code) {
  let result = JScrewIt.encode(code);
  for(let i = 0; i < 2; i++) {
    result = JScrewIt.encode(result);
  }
  let hellCode = addStatement(result);
  
  for(let i = 0; i < 4; i++) {
    hellCode = addStatement(hellCode);
    hellCode = addUselessLoop(hellCode);
  }
  
  hellCode = JScrewIt.encode(hellCode);
  hellCode = JScrewIt.encode(hellCode);
  
  for(let i = 0; i < 5; i++) {
    hellCode = addStatement(hellCode);
    hellCode = addUselessLoop(hellCode);
    hellCode = wrapInIIFE(hellCode);
    hellCode = addUselessComments(hellCode);
  }
  
  return `if(true && !false || !!true) { \n
            ${hellCode}\n
          }`;
}

function copyText(text) {
  navigator.clipboard.writeText(text);
}