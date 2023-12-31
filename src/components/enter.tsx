import { Dispatch } from "react"

export const Enter = ({page, setPage}:{page: number; setPage: Dispatch<React.SetStateAction<number>>}) => {
  return (
    <>
    <h2>Кем бы вы были на борту «Кекуит»?</h2>
    <p><span className='violet'>Разведывательный звездолет «Кекуит» бороздит просторы космоса в поиске экзопланеты для терраформирования в течение 325 серий. Экипаж звездолета отважно борется за спасение жизней всего человечества.</span></p>
    <p>Кто же из них ваше альтер-эго?</p>
    <p>Неунывающий и мужественный <span className='violet'>капитан Нехебкау?</span></p>
    <p>Изобретательный и находчивый <span className='violet'>старпом Нефермаат?</span></p>
    <p>Симпатичная и невозмутимая <span className='violet'>Сатхатхор?</span></p>
    <p>Хладнокровная и обаятельная <span className='violet'>ИИ Кекукит?</span></p>
    <p>Или несравненный <span className='violet'>мистер НЁХ</span> в роли глюков Нефе?..</p>
    <p>Не пройдешь - не узнаешь.</p>
    <button className='button' onClick={() => setPage(page + 1)}>Хочу знать правду!</button>
  </>
  )
}