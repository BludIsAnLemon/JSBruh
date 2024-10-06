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
  return `if(true && !false || !!true) {
            ${code}
          }`;
}

function addUselessLoop(code) {
  return `for(let i = 0; i < 1; i++) {
            ${code}
          }`
}

function Bruhify(code) {
  let result = JScrewIt.encode(code);
  for(let i = 0; i < 9; i++) {
    result = JScrewIt.encode(result);
  }
  let hellCode = addStatement(result);
  
  for(let i = 0; i < 10; i++) {
    hellCode = addStatement(hellCode);
    hellCode = addUselessLoop(hellCode);
  }
  
  hellCode = JScrewIt.encode(hellCode);
  hellCode = JScrewIt.encode(hellCode);
  hellCode = JScrewIt.encode(hellCode);
  
  for(let i = 0; i < 10; i++) {
    hellCode = addStatement(hellCode);
    hellCode = addUselessLoop(hellCode);
  }
  
  return `if(true && !false || !!true) {
            ${hellCode}
          }`;
}

function copyText(text) {
  navigator.clipboard.writeText(text);
}