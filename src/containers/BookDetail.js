import React from "react";
import { connect } from "react-redux";
class BookDetail extends React.Component{
    render() {
        if (!this.props.book) {
          return (
           <div>   select a book 
            </div>
          );
        }
    
        return(
            <div className="header">
            <div>Title: {this.props.book.title}</div>
            <div>Pages: {this.props.book.pages}</div>
            <div>Author: {this.props.book.author}</div>

            <div>Description: {this.props.book.description}</div>

        </div>
        );
    }
}
function mapStateToProps(state){
    return {
        book: state.activeBook
      };
    }
export default connect(mapStateToProps)(BookDetail);