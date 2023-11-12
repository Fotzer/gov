import './Europe.css';
import Entry from './Entry';

function Europe(props) {
  return (
    <div className="europe-content">
        <div className="europe-header">
            <h2>{props.language_ua ? "Європа" : "Europe"}</h2>
        </div>

        <div className="europe-about"> 

        <Entry title="u3a.org.uk" title_href="https://www.u3a.org.uk/">
        <p>{props.language_ua ? "u3a - це британська колекція 1000+ благодійних організацій, які надають можливість тим, хто більше не працює, збиратися разом і навчатися заради задоволення." : "u3a is a UK-wide collection of 1000+ charities that provide the opportunity for those no longer in work to come together and learn for fun."}</p>
        </Entry>

        <Entry title={props.language_ua ? "Бернський університет для людей похилого віку" : "The Bern Senior Citizens' University"} title_href="https://www.unibe.ch/university/university_for_everyone/senior_citizens__university/index_eng.html">
            <p>{props.language_ua ? "Бернський університет для людей похилого віку відкритий для всіх, кому за 60 років. Тут щотижня проходять лекції на різноманітні теми та дослідницькі напрямки. Попередньої освіти не вимагається - важливо лише, щоб ви цікавилися деякими або всіма темами, що розглядаються. Ми з нетерпінням чекаємо на зустріч з вами!" : "The Bern Senior Citizens' University is open to everyone over the age of 60. It runs weekly lectures on a range of different topics and research areas. No specific previous education is required – what's important is simply that you are interested in some or all of the topics covered. We look forward to seeing you!"}</p>
        </Entry>

        <Entry title={props.language_ua ? "Інститут ЮНЕСКО з навчання впродовж життя" : "UNESCO Institute for Lifelong Learning"} title_href="https://www.uil.unesco.org/en/unesco-institute">
            <p>{props.language_ua ? "Інститут ЮНЕСКО з навчання впродовж життя (ІЮОЖ) розташований у Гамбурзі, Німеччина, і є одним з восьми освітніх інститутів ЮНЕСКО. ІЮОЖ надає підтримку державам-членам у сфері навчання впродовж життя, зосереджуючись на навчальних екосистемах, навичках для життя та роботи, а також на інклюзивному навчанні." : "The UNESCO Institute for Lifelong Learning (UIL) is located in Hamburg, Germany, and is one of UNESCO’s eight education Institutes. UIL supports Member States in the field of lifelong learning with a focus on learning ecosystems, skills for life and work, and inclusive learning."}</p>
        </Entry>

        </div>
    </div>
  );
}

export default Europe;
