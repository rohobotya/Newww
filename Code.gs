function doPost(e) {
  try {
    var data = e.parameter;
    var folder = DriveApp.getFolderById("YOUR_FOLDER_ID");  
    var sheet = SpreadsheetApp.openById("YOUR_SHEET_ID").getActiveSheet();

    var file;
    if (e.files && e.files['file']) {
      var upload = e.files['file'];
      file = folder.createFile(upload);
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    }

    sheet.appendRow([
      new Date(),
      data.name,
      data.phone,
      data.city,
      data.address,
      data.payment_channel,
      file ? file.getUrl() : ""
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ result: "success", fileUrl: file ? file.getUrl() : "" })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", message: err.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}