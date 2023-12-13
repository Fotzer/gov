import './Survey.css';
import Entry from './Entry';

function Survey(props) {
  return (
    <div className="survey-content">
        <div className="survey-header">
            <h2>{props.language_ua ? "Опитування" : "Survey"}</h2>
        </div>

        <div className="survey-about"> 

            <Entry title={props.language_ua ? "Форма" : "Stakeholders form"} title_href="https://docs.google.com/forms/d/e/1FAIpQLSfOHCKs8cAuQS3jh9yg6rT1YTxmjNsj_bW-9D96ZoBEs9oaxA/viewform?usp=sf_link">
                <p>{props.language_ua ? "Для розвитку освіти людей третього віку необхідно почути думку і зібрати дані про обізнаність людей. Тому закликаємо Вас допомогти нам і пройти коротке опитування." : "To develop the education of people of the third age, it is necessary to hear the opinion and collect data on people's awareness. Therefore, we invite you to help us and complete a short survey."}</p>
            </Entry>

        </div>
    </div>
  );
}

export default Survey;
