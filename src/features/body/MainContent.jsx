import React from "react";
import styled from "styled-components";

const StyledContent = styled.div`
  padding: 0 30px 120px;
  max-height: 67vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 480px) {
    padding: 0 0 120px;
  }
`;

const Question = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  margin-bottom: 10px;
`;

const Answer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
`;
const Content = styled.div`
  max-width: 450px;
  padding: 8px;

  font-size: 16px;
  @media (max-width: 480px) {
    max-width: 30rem;
  }
`;
const QuestionContent = styled.div`
  background: var(--color-main);
  color: var(--color-secondary);
  border-radius: 6px 6px 0 6px;
`;
const AnswerContent = styled.div`
  /* color: rgba(245, 245, 245, 0.6); */
  color: var(--color-content-text);

  background-color: var(--color-content-bg);
  border-radius: 6px;
`;
export default function MainContent({ recentPrompt, resultData, loading }) {
  return (
    <StyledContent>
      <Question>
        <QuestionContent>
          <Content>{recentPrompt}</Content>
        </QuestionContent>
      </Question>
      {loading ? (
        <div className="loader">
          <hr />
          <hr />
          <hr />
        </div>
      ) : (
        <Answer>
          <AnswerContent>
            <Content dangerouslySetInnerHTML={{ __html: resultData }}></Content>
          </AnswerContent>
        </Answer>
      )}
      {/* <Answer>
        <AnswerContent>
          <Content dangerouslySetInnerHTML={{ __html: resultData }}></Content>
        </AnswerContent>
      </Answer> */}
    </StyledContent>
  );
}
