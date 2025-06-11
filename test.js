const correctCode = "1234";
    let currentCode = "";

    const screen = document.getElementById("screen");
    const message = document.getElementById("message");
    const lockIcon = document.getElementById("lockIcon");
    const spinner = document.getElementById("spinner");

    function pressKey(num) {
      if (currentCode.length >= 6) return;
      currentCode += num;
      screen.textContent = "*".repeat(currentCode.length);
      message.textContent = "";
    }

    function clearCode() {
      currentCode = "";
      screen.textContent = "";
      message.textContent = "";
    }

    function submitCode() {
      message.textContent = "";
      spinner.style.display = "block";

      setTimeout(() => {
        spinner.style.display = "none";

        if (currentCode === correctCode) {
          lockIcon.textContent = "🔓";
          message.textContent = "Unlocked!";
          message.style.color = "lightgreen";
        } else {
          lockIcon.classList.add("shake");
          message.textContent = "Wrong code!";
          message.style.color = "red";
          setTimeout(() => lockIcon.classList.remove("shake"), 500);
        }

        clearCode();
      }, 1000);
    }
