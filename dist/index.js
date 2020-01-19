"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./react-mixer-embed.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ReactMixerEmbed
 * 
 * @description: Lightweight component for embedding mixer into any Javascript application.
 * @author: rradoychev
 * 
 * Available options:
 * =============================================================================
 * DEFAULT SETTINGS - the video will be embed by default. 
 * Use the following options to change the settings:
 * enableChat (optional) - set to true to enable chat together with the video.
 * chatOnly (optional) - set to true to embed only the chat.
 * channelName - the channel that you want to embed from.
 * =============================================================================
 * 
 * Example usage:
 * <ReactMixerEmbed options={{
 *  channelName: "mixer",
 *  enableChat: true
 * }} />
 * 
 * @param {*} options Add options to the embedded element
 */
var ReactMixerEmbed = function ReactMixerEmbed(_ref) {
  var _ref$options = _ref.options,
      options = _ref$options === void 0 ? {
    channelName: "mixer",
    enableChat: false,
    chatOnly: false
  } : _ref$options;
  var channelName = options.channelName,
      enableChat = options.enableChat,
      chatOnly = options.chatOnly;
  var embedClassName = "react-mixer-embed-wrapper";

  if (enableChat || chatOnly) {
    if (enableChat) {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("iframe", {
        className: "".concat(embedClassName, " video"),
        title: "Mixer video embed for ".concat(channelName),
        src: "https://mixer.com/embed/player/".concat(channelName)
      }), _react.default.createElement("iframe", {
        className: "".concat(embedClassName, " chat"),
        name: "radoslav",
        title: "Mixer chat embed for ".concat(channelName),
        src: "https://mixer.com/embed/chat/".concat(channelName)
      }));
    }

    if (chatOnly) {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("iframe", {
        className: "".concat(embedClassName, " chat"),
        title: "Mixer video embed for ".concat(channelName),
        src: "https://mixer.com/embed/chat/".concat(channelName)
      }));
    }
  } else {
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("iframe", {
      className: "".concat(embedClassName, " video"),
      title: "Mixer video embed for ".concat(channelName),
      src: "https://mixer.com/embed/player/".concat(channelName)
    }));
  }
};

var _default = ReactMixerEmbed;
exports.default = _default;