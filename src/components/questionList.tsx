import { Dispatch, SetStateAction, useState } from "react";
import { QUESTIONS } from "../constant"

export const QuestionList = ({
  page,
  setCurrentAnswer
}: {
  page: number;
  setCurrentAnswer: Dispatch<SetStateAction<number>>
}) => {
  const { id, question, answers } = QUESTIONS[page - 1];

  return (
    <div className="">
      <p className="violet">{id}. {question}</p>
      {answers.map(({ person, text, mem }) => (
        <>
          <label key={person} className="question">
            <input
              name="person"
              type="radio"
              value={person}
              onChange={(e) => setCurrentAnswer(+e.target.value)}
            />
            {person?
              <p>{text}</p> :
              <div className="video-responsive">
                <iframe
                  width="300"
                  height="200"
                  src={`https://www.youtube.com/embed/${text}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              </div>
            }
          </label>
          {mem && <div className="mem"> <img src={mem} width='500' alt='mem' className="mem__img"/></div>}
        </>
      ))}

    </div>
  )
}