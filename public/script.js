$(document).ready(function () {
  $("#addname").click(function () {
    var formData = JSON.stringify({
      name: document.getElementById("txtname").value,
    });
    $.ajax({
      type: "POST",
      url: "/name/add",
      async: false,
      data: formData,

      contentType: "application/json",
    })
    .done(function (object) {
      //alert(object);
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      //alert("Failed: " + errorThrown);
    })
    .always(function (a, textStatus, b) {
      //alert("Final status: " + textStatus);
    });

    console.log("ok");
  });
 


});
