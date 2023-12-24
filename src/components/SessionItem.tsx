import Button from './UI/Button';

interface SessionItemProps {
  id: string;
  image: string;
  title: string;
  summary: string;
}

export default function SessionItem({image, title, summary, id }: SessionItemProps) {

  return (
    <div className="session-item">
      <img src={image} alt="conceptual image"/>
      <div className="session-data">
        <h3>{title}</h3>
        <p>{summary}</p>
        <p className="actions">
          <Button to={id}>Learn More</Button>
        </p>
      </div>
    </div>
  );
}