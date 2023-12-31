import { useState } from 'react';
import './App.css';
import { QuestionList } from './components/questionList';
import { Person, QUESTIONS } from './constant';
import { Enter } from './components/enter';

function App() {
  const [page, setPage] = useState<number>(0);
  const [score, setScore] = useState<number[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<number>(0);
  const [folks, setFolks] = useState<boolean>(false);
  const handleClick = () => {
    window.scroll(0,0);
    setPage(page + 1);
    setScore((prev) => ([...prev, currentAnswer]));
  }
  
  const calculateScore = () => {
      Person.forEach((person) => person.score = score.filter((value) => (value === person.id)).length)
      Person.sort((a, b) => b.score-a.score);
      const answer = Person[0];
      return (<>
          <h2>Итак, вы... {answer.name}</h2>
          <p className='violet'>{answer.text}</p>
          <div>
            <img src={answer.img} alt='answer' width='100%'/>
          </div>
        </>
      )
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Space Oddity</h1>
      </header>
      <main className='main'>
        <div className='container'>
          {page === 0 && !folks &&
            <Enter
              page={page}
              setPage={setPage}
            />
          }
          {page > 0 && page <= QUESTIONS.length && !folks &&
            <div className='questions'>
              <QuestionList
                page={page}
                setCurrentAnswer={setCurrentAnswer}
              />
              <button className='button' onClick={handleClick}>
                  Дальше
              </button>
            </div>
          }
          {page > QUESTIONS.length && !folks &&
            <>
              {calculateScore()}
              <div className='btn_folks'>
                <button className='button' onClick={() => setFolks(true)}>That's all, folks!</button>
                <button className='button' onClick={() => {
                  setPage(0);
                  setCurrentAnswer(0);
                  setScore([]);
                  setFolks(false);
                }}>Сыграть снова</button>
              </div>
            </>
          }
          {folks && <>
            <iframe
                  width="550"
                  height="350"
                  src={`https://www.youtube.com/embed/iYYRH4apXDo`}
                  allowFullScreen
                  title="Embedded youtube"
                />
          </>}
        </div>
      </main>
      <footer className='footer'>
        (c) <a href='https://acomics.ru/~spaceoddity'>Space Oddity</a> by natlalihuitl
      </footer>
    </div>
  );
}

export default App;
