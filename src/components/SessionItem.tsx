import Button from './UI/Button';

type SessionType = {
  id: string;
  title: string;
  summary: string;
  description: string;
  date: string;
  duration: number;
  image: string;
}

interface SessionItemProps {
  id: string;
  image: string;
  title: string;
  description: string;
}

export default function SessionItem({image, title, description, id }: SessionItemProps) {
  const indexOfFirstPeriod: number = description.indexOf('.') + 1;
  // only output first sentence of description
  const descriptionShort: string = description.substring(0, indexOfFirstPeriod > 55 ? 55: indexOfFirstPeriod) + (indexOfFirstPeriod > 55 ? '...' : '');

  return (
    <div className="session-item">
      <img src={image} alt="conceptual image"/>
      <div className="session-data">
        <h3>{title}</h3>
        <p>{descriptionShort}</p>
      </div>
      <Button to={`/sessions/${id}`}>Learn More</Button>
    </div>
  );
}