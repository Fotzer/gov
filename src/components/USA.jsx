import Entry from './Entry';
import './USA.css';

function USA() {
  return (
    <div className="usa-content">
        <div className="usa-header">
            <h2>USA</h2>
        </div>

        <div className="usa-about"> 
            <h2>USA's U3A</h2>
            
            <Entry title="USD's University of the Third Age" title_href="https://www.sandiego.edu/cas/centers/humanities-center/u3a/">
                <p>USD's University of the Third Age (U3A) is the longest-running community outreach program on campus. It is a three-week program, held twice per year, that brings together avid learners, ages 55+, from a variety of backgrounds and industries to explore, discuss and interact together during sessions that span a range of interesting topics.</p>
            </Entry>
        </div>
    </div>
  );
}

export default USA;
