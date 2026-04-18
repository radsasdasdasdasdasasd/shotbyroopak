const bookingForm = document.querySelector("#bookingForm");
const formStatus = document.querySelector("#formStatus");
const emailLink = document.querySelector("#emailLink");

if (bookingForm && formStatus && emailLink) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(bookingForm);
    const values = Object.fromEntries(formData.entries());

    const summary = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone || "Not provided"}`,
      `Session Type: ${values.sessionType}`,
      `Preferred Date: ${values.date}`,
      `Location: ${values.location || "To be discussed"}`,
      "",
      "Shoot Details:",
      values.details
    ].join("\n");

    const subject = encodeURIComponent(`ShotByRoopak Booking Inquiry - ${values.sessionType}`);
    const body = encodeURIComponent(summary);

    formStatus.textContent =
      `Thanks, ${values.name}. Your inquiry is ready to send to ShotByRoopak. Use the button below to open the email draft.`;

    emailLink.href = `mailto:roopakravi35@gmail.com?subject=${subject}&body=${body}`;
    emailLink.textContent = "Send Inquiry to roopakravi35@gmail.com";
    emailLink.classList.remove("hidden");
  });
}
