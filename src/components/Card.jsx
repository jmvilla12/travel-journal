import LocationDotSVG from "./icons/LocationDotSVG";

export default function Card(props) {
    return (
        <div className="card">
            <div>
                <img src={props.imageUrl}
                className="card--image"
                alt="card"/>
            </div>
            <div className="card--stats">
                <span className="card--location"><LocationDotSVG />{props.location}&nbsp;</span>
                <a className="card--location--link" href={props.googleMapsUrl}>
                    View on Google Maps
                </a>
                <h3 className="card--title">{props.title}</h3>
                <span className="card--date">{props.startDate}&nbsp;-&nbsp;{props.endDate}</span>
                <p className="card--description">{props.description}</p>
            </div> 
        </div>
    );
}