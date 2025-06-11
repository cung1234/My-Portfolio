    function submitCode() {
        message.textContent = "";
        spinner.style.display = "block";

        setTimeout(() => {
            spinner.style.display = "none";

    if (currentCode === correctCode) {
        lockIcon.textContent = "🔓";
        message.textContent = "Unlocked!";
        message.style.color = "lightgreen";
        setTimeout(() => {
            window.location.href = "test2";
                }, 700);
            } else {
                lockIcon.classList.add("shake");
                message.textContent = "Wrong code!";
                message.style.color = "red";
                setTimeout(() => lockIcon.classList.remove("shake"), 500);
            }

            clearCode();
        }, 1000);
    }