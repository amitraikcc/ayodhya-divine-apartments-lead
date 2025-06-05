
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
    // Google Apps Script Web App URL - you'll need to create this
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData)
    });

    // Since we're using no-cors, we can't read the response
    // We'll assume success if no error is thrown
    console.log('Lead submitted to Google Sheets:', leadData);
    return true;
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return false;
  }
};

// Alternative method using Google Forms
export const submitToGoogleForm = async (leadData: LeadData): Promise<boolean> => {
  try {
    // Replace with your Google Form URL and field IDs
    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
    
    const formData = new FormData();
    formData.append('entry.NAME_FIELD_ID', leadData.name);
    formData.append('entry.PHONE_FIELD_ID', `${leadData.countryCode}${leadData.phone}`);
    formData.append('entry.EMAIL_FIELD_ID', leadData.email);
    formData.append('entry.SOURCE_FIELD_ID', leadData.source);
    
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
