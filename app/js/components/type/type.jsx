import React from 'react';
import Fade from 'react-reveal/Fade';
import Histogram from './histogram.jsx';

class Type extends React.Component {
  constructor(props) {
    super(props);

    this.state = {'animal': null, 'showHistogram': false};
    this.chooseAnimal = this.chooseAnimal.bind(this);
  }

  render() {
    const eulenLerchen = ["Lerche", "Eule"].map((animal, index) => {
      return <Fade key={index} duration={3000}><li
        data-animal={animal} onClick={this.chooseAnimal}></li></Fade>;
    });

    return (
      <div id="type">
        <section className="question">
          <h1>Welcher Schlaftyp bist du?</h1>
          <p>Der Volksmund sagt, es gibt zwei Schlaftypen: Eulen und
          Lerchen. Eulen gehen spät zu Bett, Lerchen früh.
          Nehme wir einmal an, es gäbe dies zwei Schlaftypen,
          würdest du dich als Eule oder als Lerche einordnen?</p>

          <ul className="choice">
            {eulenLerchen}
          </ul>

        </section>
        <section className="histogram">
          {this.state.showHistogram ? <Histogram animal={this.state.animal}/> : null}
        </section>
      </div>
    )
  }

  chooseAnimal(animal) {
    this.setState({'animal': animal.target.getAttribute('data-animal'),
                   'showHistogram': true}, () => {
      // Scroll histogram into view
      var element = document.getElementsByClassName('histogram')[0];
      element.scrollIntoView({behavior: 'smooth'});
    });
  }
}

export default Type;
