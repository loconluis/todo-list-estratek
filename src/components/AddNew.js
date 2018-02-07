import React from 'react';
import { connect } from 'react-redux';
// actions
import { addToTodos } from '../actions'

class AddNew extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      error: '',
    };
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onDescriptionChange(e) {
    const description = e.target.value;
    this.setState(() => ({ description }))
  }

  handleSubmit() {
    if(!this.state.description) {
      this.setState(() => ({ error: 'Porfavor provee una descripción' }))
    } else {
      this.setState(() => ({ error: '' }))
      this.props.addTodo(this.state.description)
      this.setState(() => ({ description: '' }))
    }
  }

  render() {
    return (
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nuevo Pendiente"
            aria-label="New todo"
            aria-describedby="basic"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={this.handleSubmit}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <div>
          { this.state.error && <p className="error-label">{this.state.error}</p> }
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: description => dispatch(addToTodos(description)),
})

export default connect(null, mapDispatchToProps)(AddNew);