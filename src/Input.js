import React from 'react'

export default ({
  value,
  onChange,
  type = 'text',
  error,
  placeholder,
  label,
  icon
}) => (
  <div className="field">
    <label className="label">{label}</label>
    <div
      className={`control ${icon ? 'has-icons-left' : ''} ${
        error ? 'has-icons-right' : ''
      }`}
    >
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        className={`input ${error ? 'is-danger' : ''}`}
        type={type}
        placeholder={placeholder}
      />
      {icon && (
        <span className="icon is-small is-left">
          <i className={`fas fa-${icon}`} />
        </span>
      )}

      {error && (
        <span className="icon is-small is-right">
          <i className="fas fa-exclamation-triangle" />
        </span>
      )}
    </div>
    <p className="help is-danger">{error}</p>
  </div>
)
