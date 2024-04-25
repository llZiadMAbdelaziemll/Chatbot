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
const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

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
  // const {
  //   transcript,
  //   listening,
  //   resetTranscript,
  //   browserSupportsSpeechRecognition,
  // } = useSpeechRecognition();

  // const [isListening, setIsListening] = useState(false);
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

  // useEffect(() => {
  //   if (listening) {
  //     setIsListening(true);
  //   } else {
  //     setIsListening(false);
  //   }
  // }, [listening]);

  // useEffect(() => {
  //   if (transcript) {
  //     setInput(transcript);
  //   }
  // }, [transcript]);

  // const toggleListening = () => {
  //   if (!isListening) {
  //     resetTranscript(); // Reset transcript when starting listening
  //   }
  //   setIsListening((prevListening) => !prevListening);
  //   console.log(transcript);
  // };
  const allResponsesDisplayed = resultData === "";
  function handleSubmit(e) {
    e.preventDefault();
    if (input !== "") onSent();
  }
  // function handleMic() {
  //   resetTranscript();
  // }

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
          {timeoutIds.length !== 0 && !allResponsesDisplayed && (
            <StopRunning stopTypingAnimation={stopTypingAnimation} />
          )}
        </>
      )}
      {/* {loading ? (
            <div className="loader">
              <hr />
              <hr />
              <hr />
            </div>
          ) : (
            <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
          )} */}
      {/* <MdMic
        className="mic"
        onClick={() => {
          handleMic();
          console.log(resetTranscript);
        }}
      /> */}
      {/*<button className="mic" onClick={toggleListening}>
        {isListening ? "Stop Listening" : "Start Listening"}
    </button>*/}
      <Form type="normal" onSubmit={handleSubmit}>
        <Button type="reset" onClick={() => newChat()}>
          <Span>
            <MdOutlineCleaningServices />
          </Span>
        </Button>
        <Input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Ask any question here..."
        />

        <Button>
          <Span>
            <MdSend />
          </Span>
        </Button>
      </Form>
    </StyledBody>
  );
}
