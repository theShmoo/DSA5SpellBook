import React from "react";
import FilterByMerkmalWidget from "components/FilterByMerkmalWidget";
import FilterByDisseminationWidget from "components/FilterByDisseminationWidget";

export default class FilterSpellPropertiesWidget extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      filter : {}
    };

    this.handleFilterInput = this.handleFilterInput.bind(this);
  }

  handleFilterInput(filter) {
    var oldFilter = this.state.filter;
    for (var k in filter) {
      oldFilter[k] = filter[k];
    }
    this.setState({filter: oldFilter});
    this.props.onUserInput(oldFilter);
  }

  render() {
    return (
      <div className="form-group">
        <FilterByMerkmalWidget spells={this.props.spells} onUserInput={this.handleFilterInput}/>
        <FilterByDisseminationWidget spells={this.props.spells} onUserInput={this.handleFilterInput}/>
      </div>
    );
  }

}
