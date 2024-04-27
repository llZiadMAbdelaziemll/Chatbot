import React, { useContext, useEffect, useState } from "react";
import { useSpeechRecognition } from "react-speech-recognition";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import DefaultContent from "./DefaultContent";
import { MdMic, MdSend } from "react-icons/md";
import { MdPauseCircleOutline } from "react-icons/md";
import { MdOutlineCleaningServices } from "react-icons/md";
import styled from "styled-components";
import { Context } from "../../context/Context";
import MainContent from "./MainContent";
import StopRunning from "./StopRunning";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  & .input {
    width: 100%;
  }
  & .mic {
    font-size: 4rem;
    color: black;
    cursor: pointer;
  }
`;
const Span = styled.span`
  font-size: 2.5rem;
  display: block;
  padding: 0.5rem 0;
`;
export default function Body() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    stopTypingAnimation,
    timeoutIds,
    newChat,
  } = useContext(Context);
  const responseDone = resultData === "";

  function handleSubmit(e) {
    e.preventDefault();
    if (input !== "") onSent();
  }
  function handleReset() {
    if (recentPrompt !== "") {
      newChat();
      toast.success("a chat was restarted successfully");
    }
  }

  return (
    <StyledBody>
      {!showResult ? (
        <DefaultContent />
      ) : (
        <>
          <MainContent
            recentPrompt={recentPrompt}
            resultData={resultData}
            loading={loading}
          />
          {timeoutIds.length !== 0 && !responseDone && (
            <StopRunning stopTypingAnimation={stopTypingAnimation} />
          )}
        </>
      )}

      <Form type="normal" onSubmit={handleSubmit}>
        <motion.span
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button type="reset" onClick={handleReset}>
            <Span>
              <MdOutlineCleaningServices />
            </Span>
          </Button>
        </motion.span>
        <motion.div
          className="input"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Ask any question here..."
          />
        </motion.div>
        <motion.span
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button>
            <Span>
              <MdSend />
            </Span>
          </Button>
        </motion.span>
      </Form>
    </StyledBody>
  );
}
