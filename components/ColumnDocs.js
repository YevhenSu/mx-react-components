const React = require('react');

const { Row, Column, Styles } = require('mx-react-components');

const Markdown = require('components/Markdown');

const ColumnDocs = React.createClass({
  render () {
    const styles = this.styles();

    return (
      <div>
        <h1>
          Row
          <label>A row component used to wrap a Column for a response grid.</label>
        </h1>

        <h3>Demo</h3>
        <div className='flex'>
          <Row>
            <Column columnLarge={6}>
              <div style={styles.responsiveDiv}>First Column</div>
            </Column>
            <Column columnLarge={6}>
              <div style={styles.responsiveDiv}>Second Column</div>
            </Column>
          </Row>
        </div>

        <h3>Usage</h3>
        <h5>style <label>Object or Array</label></h5>
        <p>A style object used to style the div that wraps the uploader&#39;s content</p>

        <h5>children <label>Node</label></h5>
        <p>This should be one or more {`
            <Column />
        `} nodes to be displayed.</p>

        <h3>Example</h3>
        <Markdown>
          {`
            <Row>
              <Column columnLarge={6}>
                <div style={styles.responsiveDiv}>First Column</div>
              </Column>
            </Row>
          `}
        </Markdown>
      </div>
    );
  },

  styles () {
    return {
      responsiveDiv: {
        boxSizing: 'border-box',
        backgroundColor: Styles.Colors.PORCELAIN,
        border: '1px solid' + Styles.Colors.FOG,
        borderRadius: 3,
        padding: 10,
        width: '100%'
      }
    };
  }
});

module.exports = ColumnDocs;