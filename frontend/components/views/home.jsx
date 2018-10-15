import React from 'react'
import Header from './header'
import SearchConatiner from '../containers/search_container'

export default class Home extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log("in home" +JSON.stringify(this.props));
 
  }
  render() {
    return (
      <div>
         <Header />
         <SearchConatiner />
      </div>
    )
  }
};

 
