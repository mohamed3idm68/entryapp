import { Component, Fragment } from "react";

// render update course

class CourseList extends Component {
  state = {
    isEdit: false,
  };

  renderCourse = (props) => {
    return (
      <>
        <Fragment>
          <li>
            <span> {this.props.det.name}</span>
            <button onClick={() => this.props.deleteCourse(this.props.index)}>
              delete course
            </button>
            <button onClick={() => this.toggleState()}>edit course</button>
          </li>
        </Fragment>
      </>
    );
  };

  //toggleState

  toggleState = () => {
    let { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit,
    });
  };


  // updateFormItem

  updateFormItem = (e) => {
    e.preventDefault();
    this.props.editCourse(this.props.index ,this.input.value);
    this.toggleState();
 }

  renderUpdateForm = () => {
    return (
      <form onSubmit={this.updateFormItem}>
        <input type="text" ref= {(v) => {this.input = v}} defaultValue={this.props.det.name}/>
        <button >updateCourse</button>
      </form>
    );
  };

  

  render() {

    let {isEdit} = this.state;

    return (
      <Fragment>
        { isEdit ? this.renderUpdateForm() : this.renderCourse()}
      </Fragment>
    );
  }
}



export default CourseList;
