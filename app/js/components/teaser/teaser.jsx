import React from 'react';
import Fade from 'react-reveal/Fade';
import sleepImage from '../../../images/sleep.jpg';

class Teaser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="index">
      <Fade duration={6000}>
        <section id="teaser">
            <div id="teaser-text">
              <h1>Von Eulen und Lerchen</h1>
              <p>Jede Nacht zwingt uns ein innerer Taktgeber
                dazu, die Augen zu schließen und zu schlafen. Der Schlaf
                wird uns diktiert, ohne, dass wir auf ihn Einfluss
                 nehmen können. Aber warum?</p>
            </div>
        </section>
      </Fade>


      <section id="taktgeber">
        <Fade duration={8000}>
          <div className="clock">
            <div className="hours-container">
              <div className="hours"></div>
            </div>
            <div className="minutes-container">
              <div className="minutes"></div>
            </div>
            <div className="seconds-container">
              <div className="seconds"></div>
            </div>
          </div>
        </Fade>

        <div className="taktgeber-text">
          <p>Nicht jede Person schläft gleich lang und zur
          gleichen Uhrzeit. Der Volksmund spricht von Eulen und Lerchen.
          Eulen gehen spät in's Bett stehen spät auf.
          Lerchen stehen früh auf und gehen früh in's Bett. </p>
        <p>Vielen Personen fällt es allerdings verflixxt schwer, gegen ihren
          Rhyhtmus zu schlafen. Wie viele Eulen wollten nicht schon
          zu Frühaufstehern werden und sind schon in der Schule gescheitert?
          Wie viele Lerchen wollten schon einmal lange Feiern gehen, ohne bereits
          um 10 Uhr müde zu sein?</p>
        <p>Es fällt uns so schwer, weil wir nur geringe Kontrolle
           über unseren inneren Taktgeber haben. Es ist fasst so,
           als hätte uns die Natur einen Schlafrhyhtmus diktiert, um
           den wir unser Leben anpassen müssen.</p>
        </div>
      </section>


      <Fade duration={3000}>
        <section id="test" ref="box1">

            <p>Das ist ein Test</p>

        </section>
      </Fade>
    </div>
    )
  }

  // componentDidMount() {
  //   // window.sr = ScrollReveal({reset: true});
  //   // sr.reveal(this.refs.box1, { duration: 3000, distance: "20px",
  //   //                        origin: 'top', opacity: 0.1});
  //   ScrollReveal().reveal(this.refs.box1, { duration: 3000, distance: "20px",
  //                          origin: 'top', opacity: 0.1});
  // }
}

export default Teaser;
