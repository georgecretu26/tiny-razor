import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/reddit';
import Empty from '../../components/reddit/Empty';
import Content from '../../components/reddit/Content';


class Reddit extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            error: '',
            isLoading: '',
        };
    }

    static getDerivedStateFromProps(props, state){
        if(props.state.reddit !== state){
            const { error, data, isLoading } = props.state.reddit;
            return{
                data,
                error,
                isLoading,
            };
        }
        return null;
    }

    renderContent(data, isLoading){
        if(data.length < 1) {
            return (<Empty onClick={this.props.fetchSubreddit} isLoading={isLoading}/>)
        }
        return (
            <Content 
            data={data} 
            isLoading={isLoading} 
            hide={this.props.removeItem}
            />
        )
    }

    render(){
        const { data, isLoading } = this.state;
        return(
            <div>
                { this.renderContent(data, isLoading) }
            </div>
        );
    };
}


const mapStateToProps = state => ({ state });
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Reddit);