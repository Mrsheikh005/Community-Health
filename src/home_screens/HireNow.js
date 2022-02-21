import React, { Component } from 'react';
import { View,Text} from 'react-native';
import MultiSelect from 'react-native-multiple-select';

const items = [{
    id: '1',
    name: '9 Am to 11 Am'
  }, {
    id: '2',
    name: '11 Am to 1 Pm'
  }, {
    id: '3',
    name: '1 Pm to 3 Pm'
  }, {
    id: '4',
    name: '3 Pm to 5 Pm'
  }, {
    id: '5',
    name: '5 Am to 7 Pm'
  },
];

export default class HireNow extends Component {

  state = {
    selectedItems : []
  };

  
  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };

  render() {
    const { selectedItems } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Pick Items"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={ (text)=> console.log(text)}
          
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#CCC"
          submitButtonText="Submit"
          
        />
        <View>
          <Text>{this.state.selectedItems}</Text>
        </View>
      </View>
    );
  }
}