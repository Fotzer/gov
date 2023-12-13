import './Languages.css';
import Entry from './Entry';

function Survey(props) {
  return (
    <div className="languages-content">
        <div className="languages-header">
            <h2>{props.language_ua ? "Вивчення мов" : "Learning languages"}</h2>
        </div>

        <div className="languages-about"> 

            <Entry title={props.language_ua ? "Грайте та вивчайте" : "Play and learn"} title_href="https://www.duolingo.com/">
                <p>{props.language_ua ? "Для бажаючих розвинути свої навички будь-якої мови, пропонуємо використовувати додаток Дуалінго." : "For those who want to develop their skills in any language, we suggest using the Dualingo application."}</p>
            </Entry>

        </div>
    </div>
  );
}

export default Survey;
