import './Entry.css';

function Entry(props) {
  return (
    <div className="entry-content">
        <h1>{props.title} {props.title_href ? <a className='title-a' href={props.title_href}> ⧉</a> : ""}</h1>

        {props.children}
    </div>
  );
}

export default Entry;
