import './Ukraine.css';
import Entry from './Entry';

function Ukraine() {
  return (
    <div className="ukraine-content">
        <div className="ukraine-header">
            <h2>Ukraine</h2>
        </div>

        <div className="ukraine-about"> 
            <h2>Ukraine's U3A</h2>
            <Entry title="University of the third age 'Proton'" title_href="https://u3a.com.ua/">
                <p>The Let's Help! charitable foundation founded the Proton University of the Third Age to improve the quality and duration of active life for people of retirement age. This is a charitable educational and social project aimed at providing people aged 60+ with barrier-free access to education.</p>
            </Entry>

            <Entry title="Lviv University of the Third Age" title_href="https://ipodp.lnu.edu.ua/about/centres/tsentr-neperervnoji-osvity/universytetu-tretoho-viku">
                <p>Lviv University of the Third Age (LUTA) was created to implement the principle of lifelong learning for older people and support their physical, psychological and social abilities.</p>
            </Entry>

            <Entry title="Diia.Education for people of elegant age" title_href="https://osvita.diia.gov.ua/catalog/appointment/for-people-of-elegant-age">
                <p>Diia.Osvita is a national edutainment educational platform of relevant knowledge and skills.</p>
            </Entry>
        </div>
    </div>
  );
}

export default Ukraine;
