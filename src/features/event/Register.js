import React, { Component } from 'react'
import './Register.css'
import moment from 'moment'
import { connect } from 'react-redux'
import { setField, resetFields } from './redux'
import Input from '../../common/Input'

import { lifecycle, compose } from 'recompose'

const closeTime = moment('2018-04-01 12:00')

const enhance = compose(
  connect(state => state, { setField, resetFields }),
  lifecycle({
    componentDidMount() {
      this.interval = setInterval(() => {
        const millis = closeTime.diff(moment())
        const duration = moment.duration(millis)
        this.props.setField(
          'countdown',
          `${Math.floor(duration.asHours())} hours ${duration.minutes()} 
        minutes ${duration.seconds()}
        seconds`
        )
      }, 1000)
    },
    componentWillUnmount() {
      clearInterval(this.interval)
    }
  })
)

export const Register = props => {
  const {
    name,
    email,
    ticketType,
    food,
    agreeTerms,
    setField,
    resetFields,
    countdown
  } = props
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Evenn Registration Form</h1>
        <p>Registration will be closed in {countdown}</p>
        <Input
          value={name}
          onChange={value => setField('name', value)}
          placeholder="e.g. John Doe"
          label="Name"
        />
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              value={name}
              onChange={e => setField('name', e.target.value)}
              className="input"
              type="text"
              placeholder="Text input"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input
              value={email}
              onChange={e => setField('email', e.target.value)}
              className="input is-danger"
              type="email"
              placeholder="Email input"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle" />
            </span>
          </div>
          <p className="help is-danger">This email is invalid</p>
        </div>

        <div className="field">
          <label className="label">Ticket Type</label>
          <div className="control">
            <div className="select">
              <select
                value={ticketType}
                onChange={e => setField('ticketType', e.target.value)}
              >
                <option>Select type..</option>
                <option value="regular">Regular - 100THB</option>
                <option value="premium">Premium - 300THB</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Add food?</label>
          <div className="control">
            <label className="radio">
              <input
                type="radio"
                onClick={() => setField('food', true)}
                checked={food}
                name="question"
              />{' '}
              Yes (+50 THB)
            </label>
            <label className="radio">
              <input
                type="radio"
                onClick={() => setField('setFood', false)}
                checked={!food}
                name="question"
              />{' '}
              No
            </label>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input
                type="checkbox"
                onClick={e => setField('agreeTerms', e.target.checked)}
                checked={agreeTerms}
              />{' '}
              I agree to the <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <p>Price: 100 THB</p>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Register</button>
          </div>
          <div className="control">
            <button className="button is-text" onClick={() => resetFields()}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default enhance(Register)
