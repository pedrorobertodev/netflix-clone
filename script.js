    const container = document.getElementById("carousel");

    const btnRight = document.querySelector(".scroll-btn.right");
    const btnLeft = document.querySelector(".scroll-btn.left");

    btnRight.addEventListener("click", () => {
        container.scrollBy({ left: 400, behavior: "smooth" });
    });

    btnLeft.addEventListener("click", () => {
        container.scrollBy({ left: -400, behavior: "smooth" });
    });


    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(question => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector("span");

            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                icon.textContent = "+";
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.textContent = "×";
            }
        });
    });
