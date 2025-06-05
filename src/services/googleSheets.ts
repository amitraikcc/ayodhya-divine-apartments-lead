
interface LeadData {
  name: string;
  countryCode: string;
  phone: string;
  email: string;
  timestamp: string;
  source: string;
}

export const submitToGoogleSheets = async (leadData: LeadData): Promise<boolean> => {
  try {
    // Google Apps Script Web App URL for your specific sheet
    // You'll need to replace this with your actual deployed script URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyRXXTvsunjTNmAYFFw8aE5RBa0IWqb8OZn48M8Jj3jypHnr3B4I9DA3DlRVcCyvakl/exec';
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: leadData.name,
        countryCode: leadData.countryCode,
        phone: leadData.phone,
        email: leadData.email,
        timestamp: leadData.timestamp,
        source: leadData.source,
        spreadsheetId: '1dGsIZ_pOpxXTWEFqfTO5SmJbDBlzRNGABng3BQEgF8A'
      })
    });

    console.log('Lead submitted to Google Sheets:', leadData);
    return true;
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return false;
  }
};

// Alternative method using Google Forms if you prefer
export const submitToGoogleForm = async (leadData: LeadData): Promise<boolean> => {
  try {
    // You can create a Google Form that feeds into your sheet and use this method instead
    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
    
    const formData = new FormData();
    formData.append('entry.NAME_FIELD_ID', leadData.name);
    formData.append('entry.PHONE_FIELD_ID', `${leadData.countryCode}${leadData.phone}`);
    formData.append('entry.EMAIL_FIELD_ID', leadData.email);
    formData.append('entry.SOURCE_FIELD_ID', leadData.source);
    formData.append('entry.TIMESTAMP_FIELD_ID', leadData.timestamp);
    
    await fetch(GOOGLE_FORM_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    });

    console.log('Lead submitted to Google Form:', leadData);
    return true;
  } catch (error) {
    console.error('Error submitting to Google Form:', error);
    return false;
  }
};
