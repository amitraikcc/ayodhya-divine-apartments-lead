
// Copy this code to Google Apps Script (script.google.com)
// This file should be created in Google Apps Script, not in your project

function doPost(e) {
  try {
    // Your Google Sheet ID
    const SHEET_ID = '1dGsIZ_pOpxXTWEFqfTO5SmJbDBlzRNGABng3BQEgF8A';
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Open the spreadsheet
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Prepare the row data
    const rowData = [
      new Date(data.timestamp), // Timestamp
      data.name,               // Full Name
      data.countryCode,        // Country Code
      data.phone,              // Phone Number
      data.email,              // Email Address
      data.source              // Source (Contact Form / Popup Form)
    ];
    
    // Add headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Full Name', 'Country Code', 'Phone Number', 'Email Address', 'Source']);
    }
    
    // Append the data
    sheet.appendRow(rowData);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput('Google Apps Script is working!')
    .setMimeType(ContentService.MimeType.TEXT);
}
