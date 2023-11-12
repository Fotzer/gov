import Entry from './Entry';
import './USA.css';

function USA(props) {
  return (
    <div className="usa-content">
        <div className="usa-header">
            <h2>{props.language_ua ? "Америка" : "USA"}</h2>
        </div>

        <div className="usa-about"> 
            <h2>{props.language_ua ? "Освіта третього віку в Америці" : "USA's U3A"}</h2>
            
            <Entry title={props.language_ua ? "Університет третього віку USD" : "USD's University of the Third Age"} title_href="https://www.sandiego.edu/cas/centers/humanities-center/u3a/">
            {props.language_ua ? "Університет третього віку (U3A) - це найдовша програма для людей похилого віку на кампусі Університету. Це тритижнева програма, що проводиться двічі на рік, яка об'єднує завзятих студентів віком від 55 років, які мають різний досвід та працюють у різних галузях, щоб разом досліджувати, обговорювати та взаємодіяти під час сесій, які охоплюють широкий спектр цікавих тем." : <p>USD's University of the Third Age (U3A) is the longest-running community outreach program on campus. It is a three-week program, held twice per year, that brings together avid learners, ages 55+, from a variety of backgrounds and industries to explore, discuss and interact together during sessions that span a range of interesting topics.</p>}
            </Entry>
        </div>
    </div>
  );
}

export default USA;
