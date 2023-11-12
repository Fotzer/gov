import './Ukraine.css';
import Entry from './Entry';

function Ukraine(props) {
  return (
    <div className="ukraine-content">
        <div className="ukraine-header">
            <h2>{props.language_ua ? "Україна" : "Ukraine"}</h2>
        </div>

        <div className="ukraine-about"> 
            <h2>{props.language_ua ? "Освіта третього віку в Україні" : "Ukraine's U3A"}</h2>
            <Entry title={props.language_ua ? "Університет третього віку 'Протон'" : "University of the third age 'Proton'"} title_href="https://u3a.com.ua/">
                {props.language_ua ? <p>Благодійний фонд "Давай допоможемо!" заснував Університет третього віку "Протон", щоб покращити якість та тривалість активного життя людей пенсійного віку. Це благодійний освітньо-соціальний проект, спрямований на забезпечення безбар'єрного доступу до освіти для людей віком 60+.</p> : <p>The Let's Help! charitable foundation founded the Proton University of the Third Age to improve the quality and duration of active life for people of retirement age. This is a charitable educational and social project aimed at providing people aged 60+ with barrier-free access to education.</p>}
            </Entry>

            <Entry title={props.language_ua ? "Львівський університет третього віку'" : "Lviv University of the Third Age"} title_href="https://ipodp.lnu.edu.ua/about/centres/tsentr-neperervnoji-osvity/universytetu-tretoho-viku">
                {props.language_ua ? <p>Львівський університет третього віку (ЛУТВ) створений з метою реалізації принципу безперервної освіти для людей похилого віку та підтримки їхніх фізичних, психологічних і соціальних здібностей.</p> : <p>Lviv University of the Third Age (LUTA) was created to implement the principle of lifelong learning for older people and support their physical, psychological and social abilities.</p>}
            </Entry>

            <Entry title={props.language_ua ? "Дія.освіта для людей елегантного віку'" : "Diia.Education for people of elegant age"} title_href="https://osvita.diia.gov.ua/catalog/appointment/for-people-of-elegant-age">
                {props.language_ua ? <p>Дія.Освіта - це національна освітня платформа актуальних знань та навичок.</p> : <p>Diia.Osvita is a national edutainment educational platform of relevant knowledge and skills.</p>}
            </Entry>
        </div>
    </div>
  );
}

export default Ukraine;
