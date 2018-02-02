import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DefinitionList extends Component {

  render() {
    const { listInfo } = this.props;
    const { _makeList } = this;
    return (
      <dl>
        {_makeList(listInfo)}
      </dl>
    );
  }

  _makeList(items) {
    return items.map(item => {
      const noSubList = item.listDesc
        .filter(value => !value.listDesc)
        .reduce((accumulator, currentValue, currentIndex) => {
          if(currentIndex === 0) return accumulator + currentValue.listTerm;
          return accumulator + ', ' + currentValue.listTerm;
        }, '');
      const subList = item.listDesc
        .filter(value => value.listDesc);
      return (
        <div className="row" key={item.id}>
          <dt className="col-md-3 font-weight-normal my-3">{item.listTerm}</dt>
          <dd className="col-md-9 my-3">
            {noSubList}
            {subList.length === 0 ? null : <DefinitionList listInfo={subList} />}
          </dd>
        </div>
      );
    })
  }
  
}

DefinitionList.propTypes = {
  listInfo: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    listTerm: PropTypes.string.isRequired,
    listDesc: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      listTerm: PropTypes.string.isRequired,
      listDesc: PropTypes.array,
    })).isRequired,
  })).isRequired,
};

export default DefinitionList;