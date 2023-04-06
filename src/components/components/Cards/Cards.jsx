import style from './Cards.module.css';

export function HomeCard({ name }) {
  return (
    <div style={{minHeight: '65vh',marginTop: '5vh', border: '1px solid white'}}>
      <h1>{name}</h1>
    </div>
  );
}
