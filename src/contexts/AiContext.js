import React, { createContext, useState } from "react";

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const AiContext = createContext();

const AiProvider = ({ children }) => {
  //states
  const [productInput, setProductInput] = useState("");
  const [productOutput, setProductOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //functions
  const getProductDescription = async () => {
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Write a SEO friendly 900-1100 words product description for the following product:\n\n ${productInput}`,
        temperature: 0,
        max_tokens: 1500,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });
      if (response.status === 200) {
        setIsLoading(false);
      }
      const responseCorrect = response?.data?.choices[0]?.text;
      setProductOutput(responseCorrect);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  const aiInfo = {
    productInput,
    setProductInput,
    productOutput,
    setProductOutput,
    getProductDescription,
    isLoading,
    setIsLoading,
  };

  return <AiContext.Provider value={aiInfo}>{children}</AiContext.Provider>;
};

export default AiProvider;
