document.getElementById("whatsappForm").addEventListener("submit", function(e){

  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  let whatsappMessage =
`New Service Booking

Name: ${name}
Phone: ${phone}
Message: ${message}`;

  let whatsappURL =
`https://wa.me/971525400103?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappURL, "_blank");

});