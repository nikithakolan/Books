
import '../App.css'
import React from 'react';
import BookList from '../containers/BookList'
import BookDetail from '../containers/BookDetail'
import { connect } from 'react-redux'
import {addTodo} from '../action';

let Add = ({ dispatch }) => {
let input1,input2,input3,input4
return (
<div>
<form
onSubmit={e => {
e.preventDefault()
if (!input1.value.trim()) {
return
}
dispatch(addTodo(input1.value,input2.value,input3.value,input4.value))
input1.value = '';
input2.value = '';
input3.value = '';
input4.value = '';
}}
>
<input
ref={node => {
input1 = node
}}
placeholder='title'
/>&nbsp;&nbsp;
<button type="submit">
Add 
</button>
<br/>
<input
ref={node => {
input2 = node
}}
placeholder='pages'
/>
<br/>
<input
ref={node => {
input3 = node
}}
placeholder='authorName'
/>
<br/>
<input
ref={node => {
input4 = node
}}
placeholder='description'
/>

</form>
<BookList/>
<BookDetail/>
</div>

)
}
Add = connect()(Add)

export default Add