import './Homepage.css';

function HomePage(props) {
  return (
    <div className="homepage-content">
        <div className="homepage-header">
            <h2>{props.language_ua ? "Головна" : "Home"}</h2>
        </div>

        <div className="homepage-about"> 
            <h2>{props.language_ua ? "Вступ" : "About"}</h2>
            <p>{props.language_ua ? "Освіта для людей третього віку залишається важливим питанням у сучасному суспільстві з кількох вагомих причин. По-перше, вона підтримує когнітивне здоров'я, допомагаючи сповільнити вікове зниження когнітивних здібностей і підтримувати розумову активність. По-друге, вона сприяє соціальній взаємодії та залученню до життя громади, долаючи самотність та ізоляцію, від яких часто страждають люди похилого віку. І, нарешті, воно пропонує особисту самореалізацію, дозволяючи людям реалізовувати свої пристрасті, здобувати нові навички та знаходити нове відчуття мети у свої пізні роки. Загалом, навчання впродовж життя для літніх людей покращує їхній добробут, сприяє згуртованості громади та підвищує якість їхнього життя." : "Education for people of the third age remains an important issue in today's society for several good reasons. First, it supports cognitive health by helping to slow the age-related decline in cognitive abilities and maintain mental activity. Secondly, it promotes social interaction and community involvement, addressing the loneliness and isolation that older adults often suffer from. And finally, it offers personal fulfillment, allowing people to pursue their passions, learn new skills, and find a new sense of purpose in their later years. Overall, lifelong learning for older adults improves their well-being, promotes community cohesion, and enhances their quality of life."}</p>
        </div>
    </div>
  );
}

export default HomePage;
