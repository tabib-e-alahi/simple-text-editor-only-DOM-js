// ============= Bold ==========================
document.getElementById("text-bold").addEventListener("click", function () {
  decorateTheText("text-input-field", "font-bold");
});

// ============= Italic ==========================
document.getElementById("text-italic").addEventListener("click", function () {
  decorateTheText("text-input-field", "italic");
});

// ============= Underline ==========================
document
  .getElementById("text-underline")
  .addEventListener("click", function () {
    decorateTheText("text-input-field", "underline");
  });

// ============= Text Left ==========================
document
  .getElementById("text-align-left")
  .addEventListener("click", function () {
    alignTheText(
      "text-input-field",
      "text-left",
      "text-center",
      "text-right",
      "text-justify"
    );
  });

// ============= Text Center ==========================
document
  .getElementById("text-align-center")
  .addEventListener("click", function () {
    alignTheText(
      "text-input-field",
      "text-center",
      "text-left",
      "text-right",
      "text-justify"
    );
  });

// ============= Text Right ==========================
document
  .getElementById("text-align-right")
  .addEventListener("click", function () {
    alignTheText(
      "text-input-field",
      "text-right",
      "text-left",
      "text-center",
      "text-justify"
    );
  });

// ============= Text Justify ==========================
document
  .getElementById("text-align-justify")
  .addEventListener("click", function () {
    alignTheText(
      "text-input-field",
      "text-justify",
      "text-left",
      "text-right",
      "text-center"
    );
  });

// ============= Font Size ==========================
document.getElementById("text-size").addEventListener("input", function () {
  const inputFontSizeField = document.getElementById("text-size");

  const inputFontSizeValue = inputFontSizeField.value;
  if (isNaN(inputFontSizeValue)) {
    inputFontSizeValue = 1;
  }
  const fontSizeValue = parseFloat(inputFontSizeValue);
  const newFontSize = fontSizeValue + "px";
  const inputTextField = document.getElementById("text-input-field");
  inputTextField.style.fontSize = newFontSize;
});

// ============= Font Color ==========================
document.getElementById("text-color").addEventListener("input", function () {
  const inputFontColorField = document.getElementById("text-color");
  const inputFontColor = inputFontColorField.value;

  const inputTextField = document.getElementById("text-input-field");
  inputTextField.style.color = inputFontColor;
});

// ====================== the text decoration function ============================
function decorateTheText(fieldId, textId) {
  const inputTextField = document.getElementById(fieldId);
  if (inputTextField.classList.contains(textId)) {
    inputTextField.classList.remove(textId);
  } else {
    inputTextField.classList.add(textId);
  }
}

// ================== text align function ===================
function alignTheText(fId, add, r1, r2, r3) {
  const inputTextField = document.getElementById(fId);

  inputTextField.classList.remove(r1);
  inputTextField.classList.remove(r2);
  inputTextField.classList.remove(r3);

  if (inputTextField.classList.contains(add)) {
    inputTextField.classList.remove(add);
  } else {
    inputTextField.classList.add(add);
  }
}
