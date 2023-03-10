import WilderCard from "./WilderCard";
import "./WildersGrid.css";

export default function WildersGrid({ wilders, fetchData }) {
  return (
    <main className="container">
      <h2>Wilders</h2>
      <section className="card-row">
        {wilders.map((wilder, index) => (
          <WilderCard
            key={index}
            name={wilder.name}
            id={wilder.id}
            skills={wilder.skills}
            fetchData={fetchData}
          />
        ))}
      </section>
    </main>
  );
}
