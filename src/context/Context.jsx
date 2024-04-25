import { createContext, useState } from "react";
import runChat from "../services/apiChatbot";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [timeoutIds, setTimeoutIds] = useState([]);

  const delayPara = (index, nextWord) => {
    const id = setTimeout(function () {
      setResultData((prev) => prev + nextWord);
    }, 70 * index);
    setTimeoutIds((prev) => [...prev, id]);
  };
  const stopTypingAnimation = () => {
    timeoutIds.forEach(clearTimeout);
    setTimeoutIds([]);
  };
  const newChat = () => {
    setLoading(false);
    setShowResult(false);
    setTimeoutIds([]);
  };
  const deleteAllChats = () => {
    setPrevPrompts([]);
  };
  const deleteChat = (chatId) => {
    setPrevPrompts((prev) => prev.filter((chat) => chat.id !== chatId));
  };
  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;
    const newPrompt = {
      id: Date.now(),
      prompt: input,
      date: new Date(),
    };
    if (prompt !== undefined) {
      response = await runChat(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompts((prev) => [
        ...prev,
        newPrompt,
        // {  prompt: input, date: new Date() },
      ]);
      setRecentPrompt(input);
      response = await runChat(input);
    }

    let responseArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || 1 % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("<br/>");
    let newResponseArray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }

    setLoading(false);
    setInput("");
  };
  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    input,
    setInput,
    showResult,
    loading,
    resultData,
    newChat,
    stopTypingAnimation,
    timeoutIds,
    deleteChat,
    deleteAllChats,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
