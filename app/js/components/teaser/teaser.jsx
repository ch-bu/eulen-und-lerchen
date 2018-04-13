import React from 'react';
import Zoom from 'react-reveal/Zoom';
import sleepImage from '../../../images/sleep.jpg';

class Teaser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="index">
      <section id="teaser">
          <h1>Von Eulen und Lerchen</h1>
      </section>

      <section id="taktgeber">
        <p>Jede Nacht zwingt uns ein innerer Taktgeber
          dazu, die Augen zu schließen und zu schlafen. Es scheint als
           wird uns dieser Rhythmus diktiert, ohne, dass wir Einfluss
           darauf nehmen können.</p>
      </section>

      <Zoom duration={3000}>
        <section id="test" ref="box1">

            <p>Das ist ein Test</p>

        </section>
      </Zoom>
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
