'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flipper = Flipper;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _decorators = require('./decorators');

var _Prev = require('./Prev');

var _Next = require('./Next');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Flipper(props) {
  return _react2.default.createElement(
    'ul',
    { className: 'pagination' },
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(_Prev.Prev, props)
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(_Next.Next, props)
    )
  );
}

Flipper.propTypes = {
  hasPreviousPage: _propTypes2.default.bool,
  hasNextPage: _propTypes2.default.bool
};

exports.default = (0, _decorators.flip)(Flipper);