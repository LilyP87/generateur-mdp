const result = document.getElementById("result");
const lengthInput = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

function generatePassword(length, useUpper, useLower, useNumber, useSymbol) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let chars = "";
  if (useUpper) chars += upper;
  if (useLower) chars += lower;
  if (useNumber) chars += number;
  if (useSymbol) chars += symbol;

  if (chars === "") return "";

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password;
}

generateBtn.addEventListener("click", () => {
  const length = +lengthInput.value;
  const password = generatePassword(
    length,
    uppercase.checked,
    lowercase.checked,
    numbers.checked,
    symbols.checked
  );
  result.value = password;
});

copyBtn.addEventListener("click", () => {
  if (result.value !== "") {
    navigator.clipboard.writeText(result.value);
    copyBtn.textContent = "✅ Copié !";
    setTimeout(() => (copyBtn.textContent = "📋 Copier"), 2000);
  }
});
