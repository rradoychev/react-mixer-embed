"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ReactMixerEmbed
 * 
 * @description: Lightweight component for embedding mixer into React applications.
 * @author: rradoychev
 * 
 * Available options:
 * =============================================================================
 * DEFAULT SETTINGS - the video will be embed by default. 
 * Use the following options to change the settings:
 * video (optional) - can set to false to disable the video.
 * chat (optional) - set to true to embed chat next to the video.
 * channel - the channel name.
 * =============================================================================
 * 
 * Example usage:
 * <ReactMixerEmbed options={{
 *  channel: "mixer",
 *  chat: true
 * }} />
 * 
 * @param {*} options Add options to the embedded element
 */
var ReactMixerEmbed = function ReactMixerEmbed(_ref) {
  var _ref$options = _ref.options,
      options = _ref$options === void 0 ? {
    channel: "mixer",
    video: true,
    chat: false
  } : _ref$options;
  var channel = options.channel,
      _options$video = options.video,
      video = _options$video === void 0 ? true : _options$video,
      chat = options.chat;
  var embedClassName = "react-mixer-embed-wrapper";
  return _react.default.createElement(_react.default.Fragment, null, video && _react.default.createElement("iframe", {
    className: "".concat(embedClassName, " video"),
    title: "Mixer video embed for ".concat(channel),
    src: "https://mixer.com/embed/player/".concat(channel)
  }), chat && _react.default.createElement("iframe", {
    className: "".concat(embedClassName, " chat"),
    title: "Mixer chat embed for ".concat(channel),
    src: "https://mixer.com/embed/chat/".concat(channel)
  }));
};

var _default = ReactMixerEmbed;
exports.default = _default;