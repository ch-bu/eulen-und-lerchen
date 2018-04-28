import React from 'react';

class Histogram extends React.Component{
  constructor(props) {
    super(props);

    this.lerche = <p>Von Lerchen sagt man, dass sie früher müde werden,
      aber dafür auch früh aufstehen. Lerchen werden oft als
      produktiver wahrgenommen als Eulen, die bis in die Puppen schlafen.
      Ein Blick auf die Verteilung der Schlaftypen zeigt uns aber, dass
      die die meisten Menschen weder eine klassische Lerche noch eine
      klassische Eule sind.</p>;

    this.eule = <p>Eulen sind Partygänger, nachtsarbeitende Menschen und
      in der Regel morgens unredselige Zeitgenossen.
      Ein Blick auf die Verteilung der Schlaftypen zeigt uns aber, dass
      die die meisten Menschen weder eine klassische Lerche noch eine
      klassische Eule sind.</p>;
  }

  render() {
    return (
      <div>
        <h2>Eine {this.props.animal}</h2>
          {this.props.animal == "Lerche" && this.lerche}
          {this.props.animal == "Eule" && this.eule}
      </div>
    )
  }
}

export default Histogram;
