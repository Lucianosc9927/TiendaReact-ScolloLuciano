import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./hero.css";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="heroInfo">
        <h1 className="title">Buen comer</h1>
        <p className="subtitle">Comida cacera</p>
        <p className="description">
          Nos encontramos en <span className="city">Quilmes</span>, Buenos
          Aires. Realizamos envíos a toda la zona en los{" "}
          <span className="hour">
            horarios de 11:00 a 14:00 y de 19:00 a 23:00 horas
          </span>
          . También ofrecemos servicios de catering. Para más información,{" "}
          <a className="link">contactanos</a>.
        </p>
      </div>
      <Link to="/shop">
        <Button value="Pedir ahora" />
      </Link>
    </section>
  );
};
