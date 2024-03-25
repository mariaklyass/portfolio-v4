interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormResponse {
  success: boolean;
  message: string;
}

export const sendContactForm = async (
  data: ContactFormData
): Promise<ContactFormResponse> => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    const responseData: ContactFormResponse = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    throw new Error("Failed to send message");
  }
};
