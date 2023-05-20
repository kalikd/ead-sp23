import React, { useState } from 'react';
export default function withCounter(WrappedComponent){
    class NewComponent extends React.Component{
        constructor(props){
            super(props);
            this.state = {count:0};
            //this.increment = this.increment.bind(this)
        }
        increment = () =>{
            this.setState(prev => ({count: prev.count + 1}));
        }
        render(){
            return <WrappedComponent count={this.state.count} increment={this.increment} {...this.props} />
        }
       
    }
   return NewComponent;
}