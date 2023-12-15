
import ContactUsMessage from "../models/contactUsMessageModel.js";

export const submitAboutUsForm = async (req, res) => {
    try {
      const { name, email, message } = req.body;
  
      console.log('Received form data:', { name, email, message });
  
      const contactUsMessage = new ContactUsMessage({
        name,
        email,
        message,
      });
  
      await contactUsMessage.save();
  
      res.status(200).json({ message: 'About us form submitted successfully' });
    } catch (error) {
      console.error('Error submitting about us form:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
