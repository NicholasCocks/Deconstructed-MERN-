import React from 'react';

export default class Seed extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const { fetchAllQuestions, fetchAllData } = this.props

    fetchAllQuestions()
    fetchAllData()
  }

  handleOptions(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateDB(this.state)
  }

  accountOptions() {
    return Object.values(this.props.questions)
      .map(question => 
        <option value={question._id}>{question.question}</option>
      )
  }

  dataclassOptions() {
    return Object.values(this.props.dataclasses)
      .map(dataclass => 
        <option value={dataclass._id}>{dataclass.class}</option>  
      )
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select name="accounts" id="accounts" onChange={this.handleOptions('accounts')}>
          <option selected disabled>Accounts</option>
          {this.accountOptions()}
        </select>

        <select name="dataclasses" id="dataclasses" onChange={this.handleOptions('dataclasses')}>
          <option selected disabled>Dataclasses</option>
          {this.dataclassOptions()}
        </select>

        <button>Update</button>
      </form>
    )
  }
}