// (function () {
//     [...document.querySelectorAll(".control")].forEach(button => {
//         button.addEventListener("click", function() {
//             document.querySelector(".active-btn").classList.remove("active-btn");
//             this.classList.add("active-btn");
//             document.querySelector(".active").classList.remove("active");
//             document.getElementById(button.dataset.id).classList.add("active");
//         })
//     });
//     document.querySelector(".theme-btn").addEventListener("click", () => {
//         document.body.classList.toggle("light-mode");
//     })
// })();
(function () {

    // Navigation
    [...document.querySelectorAll(".control")].forEach(button => {

        button.addEventListener("click", function () {

            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");

            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");

        });

    });

    // Theme Toggle

    document.querySelector(".theme-btn").addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

    });

})();


// ---------------- EMAIL JS ---------------- //

emailjs.init("cfQfrN5FcCwiDOv4C");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const btn = form.querySelector("button");

    btn.disabled = true;

    btn.querySelector(".btn-text").innerHTML = "Sending...";

    emailjs.send("service_sd13pzf", "template_q24z5rc", {

        from_name: document.getElementById("from_name").value,

        from_email: document.getElementById("from_email").value,

        subject: document.getElementById("subject").value,

        message: document.getElementById("message").value

    })

    .then(function () {

        alert("✅ Message sent successfully!");

        form.reset();

    })

    .catch(function (error) {

        console.log(error);

        alert("❌ Failed to send message. Please try again.");

    })

    .finally(function () {

        btn.disabled = false;

        btn.querySelector(".btn-text").innerHTML = "Send Message";

    });

});
