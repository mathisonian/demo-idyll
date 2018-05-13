const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

const size = 300;

class CustomD3Component extends D3Component {

  initialize(node, props) {
    const svg = this.svg = d3.select(node).append('svg');
    svg.attr('viewBox', `0 0 ${size} ${size}`)
      .style('width', '100%')
      .style('height', 'auto');

    this.circle = svg.append('circle')
      .attr('r', 20)
      .attr('cx', size / 2)
      .attr('cy', size / 2);
  }

  update(props) {
    const { r, g, b } = props;
    this.circle.style('fill', `rgb(${r}, ${g}, ${b})`)
  }
}

module.exports = CustomD3Component;