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
        <p>Jede Nacht zwingt uns ein innerer Taktgeber
          dazu, die Augen zu schließen und zu schlafen. Es scheint als
           wird uns dieser Rhythmus diktiert, ohne, dass wir Einfluss
           darauf nehmen können.</p>
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
