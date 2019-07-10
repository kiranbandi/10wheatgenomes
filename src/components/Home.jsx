import React, { Component } from 'react';
//  Image url handling is convoluted in scss , much easier to set inline and get images from root
let backgroundStyle = { backgroundImage: 'url(assets/img/wheat_banner.jpg)' };
import ReactSelect from 'react-select';

const wheatVarieties = [
  { "label": "ArinaLrFor", "value": "arinalrfor" },
  { "label": "Artificial Synthetic Hexaploid", "value": "ashsyn" },
  { "label": "Chinese Spring", "value": "chinese" },
  { "label": "Jagger", "value": "jagger" },
  { "label": "Julius", "value": "julius" },
  { "label": "Lancer", "value": "lancer" },
  { "label": "CDC Landmark", "value": "landmark" },
  { "label": "CDC Stanley", "value": "stanley" },
  { "label": "Mace", "value": "mace" },
  { "label": "Norin 61", "value": "norin61" },
  { "label": "Spelt (PI190962)", "value": "spelta" },
  { "label": "SY Mattis", "value": "sy_mattis" }
];

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      source: { "label": "Arina", "value": "arinalrfor" },
      target: { "label": "Jagger", "value": "jagger" }
    };
    this.onSelectGenome = this.onSelectGenome.bind(this);
    this.redirectPage = this.redirectPage.bind(this);
  }

  onSelectGenome(genome, select) {
    if (select.name == 'source-genome') {
      this.setState({ 'source': genome });
    }
    else {
      this.setState({ 'target': genome });
    }
  }

  redirectPage(event) {
    const { source = 'arinalrfor', target = 'jagger' } = this.state;
    if (event.target.id == 'synvisio') {
      window.open("https://synvisio.usask.ca/#/Dashboard/"+ source.value + "_" + target.value, "_blank");
    }
    else {
      window.open("https://accusyn.usask.ca/?gff="+ source.value + "_" + target.value + "_coordinate"+"&collinearity="+source.value + "_" + target.value + "_collinear", "_blank");
    }
  }

  render() {

    const { source, target } = this.state;

    return (
      <div>
        <div className="home-header" style={backgroundStyle}>
          <div className="container">
            <div className='col-lg-12 text-lg-left text-md-center text-sm-center text-xs-center'>
              <h1>10+ Wheat Genomes Visualizer</h1>
              <p>Explore the collinearity between the genomes  using Synteny Visualization Systems <b>SynVisio</b> or <b>AccuSyn</b> developed at the University of Saskatchewan.</p>
            </div>
          </div>
        </div>

        <div className="container home-body">
          <h1>How Does this Work ?</h1>
          <ul className='m-b'>
            <li>Pick a source genome and a taget genome to get started.</li>
            <li><b>SynVisio</b> offers Linear Plots, Dot plots and Hive Plots.</li>
            <li><b>AccuSyn</b> offers Circos Style Plots.</li>
            <li>Both the systems are interactive and offer users the ability to explore collinearity across multiple levels (Genome, Chromosome, Individiual Collinear Block.Users can also download the visuals generated in publication ready SVG formats.</li>
          </ul>

          <div className='selection-box row m-t-md'>

            <div className="genome-select col-xs-12 col-sm-6">
              <span className='inner-span'>Source</span>
              <div className='react-select-root'>
                <ReactSelect
                  name='source-genome'
                  value={source}
                  options={wheatVarieties}
                  styles={{ option: (styles) => ({ ...styles, color: 'black', textAlign: 'left' }) }}
                  onChange={this.onSelectGenome} />
              </div>
            </div>
            <div className="genome-select col-xs-12 col-sm-6">
              <span className='inner-span'>Target</span>
              <div className='react-select-root'>
                <ReactSelect
                  name='target-genome'
                  value={target}
                  options={wheatVarieties}
                  styles={{ option: (styles) => ({ ...styles, color: 'black', textAlign: 'left' }) }}
                  onChange={this.onSelectGenome} />
              </div>
            </div>

            <div className='col-xs-12 m-a-md text-center'>
              <button id='synvisio' className='btn btn-lg btn-primary m-r' onClick={this.redirectPage}>SynVisio (Linear, Hive, Dot Plots)</button>
              <button id='accusyn' className='btn btn-lg btn-primary' onClick={this.redirectPage}>AccuSyn (Circos Plots)</button>
            </div>
          </div>
        </div>
      </div>

    )
  }
};

export default Home;


