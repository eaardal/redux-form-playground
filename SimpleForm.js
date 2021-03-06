import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
export const fields = ['firstName', 'lastName', 'email', 'sex', 'favoriteColor', 'employed', 'notes'];

class SimpleForm extends Component {

  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  };

  render() {
    const {
      fields: {firstName, lastName, email, sex, favoriteColor, employed, notes},
      handleSubmit,
      resetForm,
      submitting
    } = this.props;

    return(
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name
            <input type="text" placeholder="First Name" {...firstName} />
          </label>
        </div>
        <div>
          <label>
            Last Name
            <input type="text" placeholder="Last Name" {...lastName} />
          </label>
        </div>
        <div>
          <label>
            Email
            <input type="text" placeholder="Email" {...email} />
          </label>
        </div>
        <div>
          <label>
            Sex
          </label>
          <label>
            <input type="radio" {...sex} value="male" checked={sex.value === 'male'} />
            Male
          </label>
          <label>
            <input type="radio" {...sex} value="female" checked={sex.value === 'female'} />
            Female
          </label>
        </div>
        <div>
          <label>Favorite Color</label>
          <div>
            <select {...favoriteColor}>
              <option></option>
              <option value="ff0000">Red</option>
              <option value="00ff00">Green</option>
              <option value="0000ff">Blue</option>
            </select>
          </div>
        </div>
        <div>
          <label>
            <input type="checkbox" {...employed}/> Employed
          </label>
        </div>
        <div>
          <label>Notes</label>
          <div>
            <textarea
              {...notes}
              value={notes.value || ''}
            />
          </div>
        </div>
        <div>
          <button disabled={submitting} onClick={handleSubmit}>
            {submitting ? <i/> : <i/>} Submit
          </button>
          <button disabled={submitting} onClick={resetForm}>
            Clear values
          </button>
        </div>
      </form>
    );
  }

}

export default reduxForm({
  form: 'simple',
  fields
})(SimpleForm);
