$("#generateButton").click(function () {
  genQrCode()
});

function genQrCode() {
  var linkName = $("#linkName").val();
  console.log(linkName);
  var str = linkName;
  $("#linkNameReplace").text(linkName);
  $("#box1").html("");
  var qrcode = new QRCode("box1", {
    text: str,
    width: 256,
    height: 256,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
}

$("#DownloadQrImage").click(function () {
  DownloadQrImage();
});

function DownloadQrImage() {
  html2canvas($("#A4Page"), {
      letterRendering: 1,
      allowTaint : true,
  		onrendered: function (canvas) {
  			canvas.toBlob(function (blob) {
  				saveAs(blob, "QR_Code.png");
  			});
  		}
  });
}
