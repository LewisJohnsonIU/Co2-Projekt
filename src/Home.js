import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="container mt-4">
      <h1>Creating Transparency</h1>
      <p>Empowering Change for a Sustainable Future</p>

      <section id="welcome" className="my-5">
        <h2 className="mb-4">Willkommen auf unserer Webseite</h2>
        <p>
          Wir setzen uns leidenschaftlich für den Schutz der Umwelt und den
          Kampf gegen den Klimawandel ein.
        </p>
      </section>

      <section id="services" className="my-5">
        <h2 className="mb-4">
          Unsere Dienstleistungen - Für eine Lebenswerte Zukunft
        </h2>
        <ul>
          <Link className="home-link" to="/emissions">
            <li>CO²-Emissionsdaten</li>
          </Link>
          <li>Klimawandel-Beratung</li>
          <li>Nachhaltige Lösungen</li>
        </ul>
      </section>

      <section id="image" className="my-5">
        <img src="/index.png" alt="Umweltbild" className="img-fluid" />
        <p className="mt-3">Quelle: Eigene Darstellung/Dalle E</p>
      </section>

      <section id="news" className="my-5">
        <h2 className="mb-4">Aktuelle Nachrichten</h2>
        <article>
          <h3>Neue Studie zeigt steigende Temperaturen</h3>
          <p>
            Die neueste Studie zum Klimawandel enthüllt besorgniserregende
            Trends...
          </p>
          <a href="news-article.html">Lesen Sie mehr</a>
        </article>
      </section>

      <section id="cta" className="my-5">
        <h2 className="mb-4">Handeln Sie jetzt</h2>
        <p>
          Unterstützen Sie unsere Mission und tragen Sie zum Umweltschutz bei.
        </p>
        <a href="contact.html" className="btn btn-primary">
          Jetzt spenden
        </a>
      </section>

      <section id="contact" className="my-5">
        <h2 className="mb-4">Kontaktieren Sie uns</h2>
        <p>
          Haben Sie Fragen oder Anregungen? Schreiben Sie uns eine Nachricht.
        </p>
        <a href="contact.html" className="btn btn-secondary">
          Kontaktformular
        </a>
      </section>
    </main>
  );
}

export default Home;
