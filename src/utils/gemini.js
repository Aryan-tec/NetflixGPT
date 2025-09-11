// src/utils/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_KEY } from "./constants"; // Import the API key

const genAI = new GoogleGenerativeAI(GEMINI_KEY);

// Get the specific model you want to use
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model;
