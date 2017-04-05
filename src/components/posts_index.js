import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchPosts} from '../actions/index';


class PostIndex extends Component {
  componentWillMount() {
    // console.log('this would be a good time to call acntion')
    this.props.fetchPosts();
  }
  render() {
    return (
      <div> List of blog posts</div>
    );
  }
 }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchPosts}, dispatch);
// }

// export default connect(null,mapDispatchToProps)(PostIndex);

//简便的写法
// export default connect(null,{fetchPosts:fetchPosts})(PostIndex);
//same key 可以用es6 的语法；
export default connect(null,{fetchPosts})(PostIndex);
