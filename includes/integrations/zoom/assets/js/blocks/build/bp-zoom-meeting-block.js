/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/blocks/bp-zoom-meeting-block.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/blocks/bp-zoom-meeting-block.js":
/*!***************************************************!*\
  !*** ./assets/js/blocks/bp-zoom-meeting-block.js ***!
  \***************************************************/
/*! exports provided: isBuddyBossInCategories, getMeetingBlocks, getWebinarBlocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBuddyBossInCategories", function() { return isBuddyBossInCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMeetingBlocks", function() { return getMeetingBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWebinarBlocks", function() { return getWebinarBlocks; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./request */ "./assets/js/blocks/request.js");












var moment_default_datetime_format = 'YYYY-MM-DD HH:mm:ss';
/**
 * Returns whether buddyboss category is in editor cats list or not
 *
 * @return {boolean} true if category is in list.
 */

var isBuddyBossInCategories = function isBuddyBossInCategories() {
  var blockCategories = wp.blocks.getCategories();

  for (var i in blockCategories) {
    if ('buddyboss' === blockCategories[i].slug) {
      return true;
    }
  }

  return false;
};
var currentDateTime = new Date(bpZoomMeetingBlock.wp_date_time);
currentDateTime.setMinutes(currentDateTime.getMinutes() + (60 - currentDateTime.getMinutes()));
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["registerBlockType"])('bp-zoom-meeting/create-meeting', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Zoom Meeting', 'buddyboss-pro'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Create meeting in Zoom', 'buddyboss-pro'),
  icon: 'video-alt2',
  category: isBuddyBossInCategories() ? 'buddyboss' : 'common',
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('zoom', 'buddyboss-pro'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('meeting', 'buddyboss-pro')],
  supports: {
    html: false,
    reusable: false
  },
  attributes: {
    id: {
      type: 'number',
      default: ''
    },
    meetingId: {
      type: 'number',
      default: ''
    },
    hostId: {
      type: 'string',
      default: typeof bpZoomMeetingBlock.default_host_id !== 'undefined' ? bpZoomMeetingBlock.default_host_id : ''
    },
    hostDisplayName: {
      type: 'string',
      default: typeof bpZoomMeetingBlock.default_host_user !== 'undefined' ? bpZoomMeetingBlock.default_host_user : ''
    },
    alt_hosts: {
      type: 'string',
      default: ''
    },
    title: {
      type: 'string',
      default: ''
    },
    description: {
      type: 'string',
      default: ''
    },
    startDate: {
      type: 'string',
      default: moment__WEBPACK_IMPORTED_MODULE_9___default()(currentDateTime).format(moment_default_datetime_format)
    },
    duration: {
      type: 'string',
      default: '30'
    },
    timezone: {
      type: 'string',
      default: typeof bpZoomMeetingBlock.wp_timezone !== 'undefined' ? bpZoomMeetingBlock.wp_timezone : ''
    },
    password: {
      type: 'string',
      default: ''
    },
    registration: {
      type: 'boolean',
      default: false
    },
    registration_type: {
      type: 'number',
      default: 1
    },
    hostVideo: {
      type: 'boolean',
      default: false
    },
    participantsVideo: {
      type: 'boolean',
      default: false
    },
    joinBeforeHost: {
      type: 'boolean',
      default: false
    },
    muteParticipants: {
      type: 'boolean',
      default: false
    },
    waitingRoom: {
      type: 'boolean',
      default: false
    },
    authentication: {
      type: 'boolean',
      default: false
    },
    autoRecording: {
      type: 'string',
      default: 'none'
    },
    recurring: {
      type: 'boolean',
      default: false
    },
    recurrence: {
      type: 'number',
      default: 1
    },
    repeat_interval: {
      type: 'number',
      default: 1
    },
    end_time_select: {
      type: 'string',
      default: 'date'
    },
    end_times: {
      type: 'number',
      default: 7
    },
    end_date_time: {
      type: 'string',
      default: moment__WEBPACK_IMPORTED_MODULE_9___default()(new Date().setDate(new Date(bpZoomMeetingBlock.wp_date_time).getDate() + 6)).format(moment_default_datetime_format)
    },
    weekly_days: {
      type: 'array',
      default: ['4']
    },
    monthly_occurs_on: {
      type: 'string',
      default: 'day'
    },
    monthly_day: {
      type: 'number',
      default: 1
    },
    monthly_week: {
      type: 'number',
      default: 1
    },
    monthly_week_day: {
      type: 'number',
      default: 1
    },
    occurrences: {
      type: 'array',
      default: []
    },
    current_occurrence: {
      type: 'object',
      default: {}
    },
    occurrence_edit: {
      type: 'boolean',
      default: false
    },
    current_occurrence_start_time: {
      type: 'string',
      default: ''
    },
    current_occurrence_duration: {
      type: 'number',
      default: 0
    },
    meetingFormType: {
      type: 'string',
      default: ''
    },
    external_meeting: {
      type: 'boolean',
      default: false
    }
  },
  edit: function edit(props) {
    var clientId = props.clientId,
        setAttributes = props.setAttributes;
    var host_user_type = typeof bpZoomMeetingBlock.default_host_user_type !== 'undefined' ? bpZoomMeetingBlock.default_host_user_type : 1;
    var _props$attributes = props.attributes,
        meetingId = _props$attributes.meetingId,
        hostId = _props$attributes.hostId,
        hostDisplayName = _props$attributes.hostDisplayName,
        title = _props$attributes.title,
        description = _props$attributes.description,
        startDate = _props$attributes.startDate,
        duration = _props$attributes.duration,
        timezone = _props$attributes.timezone,
        password = _props$attributes.password,
        registration = _props$attributes.registration,
        registration_type = _props$attributes.registration_type,
        hostVideo = _props$attributes.hostVideo,
        participantsVideo = _props$attributes.participantsVideo,
        joinBeforeHost = _props$attributes.joinBeforeHost,
        muteParticipants = _props$attributes.muteParticipants,
        waitingRoom = _props$attributes.waitingRoom,
        authentication = _props$attributes.authentication,
        autoRecording = _props$attributes.autoRecording,
        meetingFormType = _props$attributes.meetingFormType,
        alt_hosts = _props$attributes.alt_hosts,
        external_meeting = _props$attributes.external_meeting,
        recurring = _props$attributes.recurring,
        recurrence = _props$attributes.recurrence,
        repeat_interval = _props$attributes.repeat_interval,
        end_times = _props$attributes.end_times,
        end_date_time = _props$attributes.end_date_time,
        end_time_select = _props$attributes.end_time_select,
        weekly_days = _props$attributes.weekly_days,
        monthly_occurs_on = _props$attributes.monthly_occurs_on,
        monthly_day = _props$attributes.monthly_day,
        monthly_week = _props$attributes.monthly_week,
        monthly_week_day = _props$attributes.monthly_week_day,
        occurrences = _props$attributes.occurrences,
        current_occurrence = _props$attributes.current_occurrence,
        occurrence_edit = _props$attributes.occurrence_edit,
        current_occurrence_start_time = _props$attributes.current_occurrence_start_time,
        current_occurrence_duration = _props$attributes.current_occurrence_duration;

    var repeat_interval_options = [],
        repeat_every = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('day', 'buddyboss-pro'),
        start_date_dt = new Date(startDate),
        end_date_dt = new Date();

    var setMeetingId = function setMeetingId(val) {
      var reg = new RegExp('^\\d+$');

      if ('' !== val && reg.test(val)) {
        val = parseInt(val.toString().replace(/\s/g, ''));
      }

      setAttributes({
        meetingId: val
      });
    };

    var setHostId = function setHostId(val) {
      setAttributes({
        hostId: val
      });
    };

    var setHostDisplayName = function setHostDisplayName(val) {
      setAttributes({
        hostDisplayName: val
      });
    };

    var setTitle = function setTitle(val) {
      setAttributes({
        title: val
      });
    };

    var setDescription = function setDescription(val) {
      setAttributes({
        description: val
      });
    };

    var setStartDate = function setStartDate(val) {
      var nowDate = new Date(bpZoomMeetingBlock.wp_date_time);
      var selectedDate = new Date(val);

      if (nowDate.getTime() < selectedDate.getTime()) {
        setAttributes({
          startDate: val
        });
        var end_date_time_date = new Date(end_date_time);

        if (selectedDate.getTime() >= end_date_time_date.getTime()) {
          var start_date_dt_val = new Date(val);

          if (recurrence === 1) {
            start_date_dt_val.setDate(start_date_dt_val.getDate() + 6 * repeat_interval);
            setEndDateTime(moment__WEBPACK_IMPORTED_MODULE_9___default()(start_date_dt_val).format(moment_default_datetime_format));
          } else if (recurrence === 2) {
            start_date_dt_val.setDate(start_date_dt_val.getDate() + 6 * (7 * repeat_interval));
            setEndDateTime(moment__WEBPACK_IMPORTED_MODULE_9___default()(start_date_dt_val).format(moment_default_datetime_format));
          } else if (recurrence === 3) {
            start_date_dt_val.setMonth(start_date_dt_val.getMonth() + 6 * repeat_interval);
            setEndDateTime(moment__WEBPACK_IMPORTED_MODULE_9___default()(start_date_dt_val).format(moment_default_datetime_format));
          }
        }
      }
    };

    var setDuration = function setDuration(val) {
      setAttributes({
        duration: val
      });
    };

    var setTimezone = function setTimezone(val) {
      setAttributes({
        timezone: val
      });
      var currentDateTimeZoneWise = new Date(new Date().toLocaleString('en-US', {
        timeZone: val
      }));
      var month = '' + (currentDateTimeZoneWise.getMonth() + 1),
          day = '' + currentDateTimeZoneWise.getDate(),
          year = currentDateTimeZoneWise.getFullYear(),
          hour = '' + currentDateTimeZoneWise.getHours(),
          minutes = '' + currentDateTimeZoneWise.getMinutes(),
          seconds = '' + currentDateTimeZoneWise.getSeconds();

      if (month.length < 2) {
        month = '0' + month;
      }

      if (day.length < 2) {
        day = '0' + day;
      }

      if (hour.length < 2) {
        hour = '0' + hour;
      }

      if (minutes.length < 2) {
        minutes = '0' + minutes;
      }

      if (seconds.length < 2) {
        seconds = '0' + seconds;
      }

      bpZoomMeetingBlock.wp_date_time = [year, month, day].join('-') + 'T' + [hour, minutes, seconds].join(':');
      var currentStartDateObj = new Date(startDate);

      if (meetingId.length === 0 && currentStartDateObj < currentDateTimeZoneWise) {
        setAttributes({
          startDate: bpZoomMeetingBlock.wp_date_time
        });
      }
    };

    var setPassword = function setPassword(val) {
      setAttributes({
        password: val
      });
    };

    var setRegistration = function setRegistration(val) {
      setAttributes({
        registration: val
      });
    };

    var setRegistrationType = function setRegistrationType(val) {
      setAttributes({
        registration_type: parseInt(val)
      });
    };

    var setHostVideo = function setHostVideo(val) {
      setAttributes({
        hostVideo: val
      });
    };

    var setParticipantsVideo = function setParticipantsVideo(val) {
      setAttributes({
        participantsVideo: val
      });
    };

    var setJoinBeforeHost = function setJoinBeforeHost(val) {
      setAttributes({
        joinBeforeHost: val
      });
    };

    var setMuteParticipants = function setMuteParticipants(val) {
      setAttributes({
        muteParticipants: val
      });
    };

    var setWaitingRoom = function setWaitingRoom(val) {
      setAttributes({
        waitingRoom: val
      });
    };

    var setAuthentication = function setAuthentication(val) {
      setAttributes({
        authentication: val
      });
    };

    var setAutoRecording = function setAutoRecording(val) {
      setAttributes({
        autoRecording: val
      });
    };

    var setMeetingFormType = function setMeetingFormType(val) {
      setAttributes({
        meetingFormType: val
      });
    };

    var setRecurring = function setRecurring(val) {
      setAttributes({
        recurring: val
      });
    };

    var setRecurrence = function setRecurrence(val) {
      setAttributes({
        recurrence: parseInt(val)
      });

      if (val == 1) {
        end_date_dt.setDate(start_date_dt.getDate() + 6 * repeat_interval);
        setEndDateTime(moment__WEBPACK_IMPORTED_MODULE_9___default()(end_date_dt).format(moment_default_datetime_format));
      } else if (val == 2) {
        end_date_dt.setDate(start_date_dt.getDate() + 6 * (7 * repeat_interval));
        setEndDateTime(moment__WEBPACK_IMPORTED_MODULE_9___default()(end_date_dt).format(moment_default_datetime_format));
      } else if (val == 3) {
        end_date_dt.setMonth(start_date_dt.getMonth() + 6 * repeat_interval);
        setEndDateTime(moment__WEBPACK_IMPORTED_MODULE_9___default()(end_date_dt).format(moment_default_datetime_format));
      }
    };

    var setRepeatInterval = function setRepeatInterval(val) {
      setAttributes({
        repeat_interval: val
      });

      if (recurrence === 1) {
        end_date_dt.setDate(start_date_dt.getDate() + 6 * val);
        setEndDateTime(moment__WEBPACK_IMPORTED_MODULE_9___default()(end_date_dt).format(moment_default_datetime_format));
      } else if (recurrence === 2) {
        end_date_dt.setDate(start_date_dt.getDate() + 6 * (7 * val));
        setEndDateTime(moment__WEBPACK_IMPORTED_MODULE_9___default()(end_date_dt).format(moment_default_datetime_format));
      } else if (recurrence === 3) {
        end_date_dt.setMonth(start_date_dt.getMonth() + 6 * val);
        setEndDateTime(moment__WEBPACK_IMPORTED_MODULE_9___default()(end_date_dt).format(moment_default_datetime_format));
      }
    };

    var setEndTimes = function setEndTimes(val) {
      setAttributes({
        end_times: parseInt(val)
      });
    };

    var setEndDateTime = function setEndDateTime(val) {
      var meetingDate = new Date(startDate);
      var selectedDate = new Date(val);

      if (meetingDate.getTime() < selectedDate.getTime()) {
        setAttributes({
          end_date_time: val
        });
      }
    };

    var setOccurrenceStartTime = function setOccurrenceStartTime(start_time) {
      var nowDate = new Date();
      var selectedDate = new Date(start_time);

      if (nowDate.getTime() < selectedDate.getTime()) {
        setAttributes({
          current_occurrence_start_time: start_time
        });
      }
    };

    var setOccurrenceDuration = function setOccurrenceDuration(duration_val) {
      setAttributes({
        current_occurrence_duration: duration_val
      });
    };

    var setEndTimeSelect = function setEndTimeSelect(val) {
      setAttributes({
        end_time_select: val
      });
    };

    var setWeeklyDays = function setWeeklyDays(val) {
      setAttributes({
        weekly_days: val
      });
    };

    var setMonthlyOccursOn = function setMonthlyOccursOn(val) {
      setAttributes({
        monthly_occurs_on: val
      });
    };

    var setMonthlyDay = function setMonthlyDay(val) {
      setAttributes({
        monthly_day: parseInt(val)
      });
    };

    var setMonthlyWeek = function setMonthlyWeek(val) {
      setAttributes({
        monthly_week: val
      });
    };

    var setMonthlyWeekDay = function setMonthlyWeekDay(val) {
      setAttributes({
        monthly_week_day: parseInt(val)
      });
    };

    var setOccurrences = function setOccurrences(val) {
      setAttributes({
        occurrences: val
      });

      for (var o in val) {
        var nowDate = new Date(bpZoomMeetingBlock.wp_date_time);
        var selectedDate = new Date(val[o].start_time);

        if (nowDate.getTime() < selectedDate.getTime() && 'deleted' !== val[o].status) {
          setStartDate(val[o].start_time);
          break;
        }
      }
    };

    var setOccurrenceEdit = function setOccurrenceEdit(val) {
      setAttributes({
        occurrence_edit: val
      });
    };

    var setCurrentOccurrence = function setCurrentOccurrence(val) {
      setAttributes({
        current_occurrence: val
      });
      setOccurrenceDuration(val.duration);
      setOccurrenceStartTime(val.start_time);
    };

    var setAltHosts = function setAltHosts(val) {
      setAttributes({
        alt_hosts: val
      });
    };

    var setExternalMeeting = function setExternalMeeting(val) {
      setAttributes({
        external_meeting: val
      });
    };

    var settings = Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_5__["__experimentalGetSettings"])();

    var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
        isPickerOpen = _useState2[0],
        setIsPickerOpen = _useState2[1];

    var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
        isRecurrencePickerOpen = _useState4[0],
        setIsRecurrencePickerOpen = _useState4[1];

    var resolvedFormat = settings.formats.datetime || 'Y-m-d H:i:s';
    var auto_recording_options = [];

    if (host_user_type == 2) {
      auto_recording_options = [{
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('No Recordings', 'buddyboss-pro'),
        value: 'none'
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Cloud', 'buddyboss-pro'),
        value: 'cloud'
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Local', 'buddyboss-pro'),
        value: 'local'
      }];
    } else {
      auto_recording_options = [{
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('No Recordings', 'buddyboss-pro'),
        value: 'none'
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Local', 'buddyboss-pro'),
        value: 'local'
      }];
    }

    if (recurrence === 1) {
      repeat_every = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('day', 'buddyboss-pro');
      repeat_interval_options = [];

      for (var i = 1; i <= 15; i++) {
        repeat_interval_options.push({
          label: i,
          value: i
        });
      }
    } else if (recurrence === 2) {
      repeat_every = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('week', 'buddyboss-pro');
      repeat_interval_options = [];

      for (var _i = 1; _i <= 12; _i++) {
        repeat_interval_options.push({
          label: _i,
          value: _i
        });
      }
    } else if (recurrence === 3) {
      repeat_every = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('month', 'buddyboss-pro');
      repeat_interval_options = [];

      for (var _i2 = 1; _i2 <= 3; _i2++) {
        repeat_interval_options.push({
          label: _i2,
          value: _i2
        });
      }
    }

    var setMeetingObject = function setMeetingObject(response) {
      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(response.host_name)) {
        setHostDisplayName(response.host_name);
      }

      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(response.host_email)) {
        setHostId(response.host_email);
      }

      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(response.meeting)) {
        var meeting = response.meeting;

        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting.id)) {
          setMeetingId(meeting.id);
        }

        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting.host_id)) {
          setHostId(meeting.host_id);
        }

        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting.topic)) {
          setTitle(meeting.topic);
        }

        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting.agenda)) {
          setDescription(meeting.agenda);
        }

        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting.timezone)) {
          setTimezone(meeting.timezone);
        }

        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting.start_time)) {
          setAttributes({
            startDate: meeting.start_time
          });
        }

        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting.duration)) {
          setDuration(meeting.duration);
        } else if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting.occurrences) && meeting.occurrences.length) {
          setDuration(meeting.occurrences[0].duration);
        }

        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting.password)) {
          setPassword(meeting.password);
        }

        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting.type) && [3, 8].includes(meeting.type)) {
          setRecurring(true);
        } else {
          setRecurring(false);
        }

        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting.occurrences) && meeting.occurrences.length) {
          setOccurrences(meeting.occurrences);
        }

        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting.recurrence)) {
          var meeting_recurrence = meeting.recurrence;

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting_recurrence.type)) {
            setRecurrence(meeting_recurrence.type);
          }

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting_recurrence.repeat_interval)) {
            setRepeatInterval(meeting_recurrence.repeat_interval);
          }

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting_recurrence.end_times)) {
            setEndTimes(meeting_recurrence.end_times);
            setEndTimeSelect('times');
          }

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting_recurrence.end_date_time)) {
            setEndDateTime(meeting_recurrence.end_date_time);
            setEndTimeSelect('date');
          }

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting_recurrence.weekly_days)) {
            setWeeklyDays(meeting_recurrence.weekly_days.split(','));
          }

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting_recurrence.monthly_day)) {
            setMonthlyDay(meeting_recurrence.monthly_day);
            setMonthlyOccursOn('day');
          }

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting_recurrence.monthly_week)) {
            setMonthlyWeek(meeting_recurrence.monthly_week);
            setMonthlyOccursOn('week');
          }

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting_recurrence.monthly_week_day)) {
            setMonthlyWeekDay(meeting_recurrence.monthly_week_day);
            setMonthlyOccursOn('week');
          }
        }

        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting.settings)) {
          var meeting_settings = meeting.settings;

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting_settings.alternative_hosts)) {
            setAltHosts(meeting_settings.alternative_hosts);
          }

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting_settings.approval_type) && 0 == meeting_settings.approval_type) {
            setRegistration(true);
          }

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting_settings.registration_type)) {
            setRegistrationType(meeting_settings.registration_type);
          }

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting_settings.host_video)) {
            setHostVideo(meeting_settings.host_video);
          }

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting_settings.participant_video)) {
            setParticipantsVideo(meeting_settings.participant_video);
          }

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting_settings.join_before_host)) {
            setJoinBeforeHost(meeting_settings.join_before_host);
          }

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting_settings.mute_upon_entry)) {
            setMuteParticipants(meeting_settings.mute_upon_entry);
          }

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting_settings.waiting_room)) {
            setWaitingRoom(meeting_settings.waiting_room);
          }

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting_settings.meeting_authentication)) {
            setAuthentication(meeting_settings.meeting_authentication);
          }

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(meeting_settings.auto_recording)) {
            setAutoRecording(meeting_settings.auto_recording);
          }
        }
      }
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, '' === meetingFormType ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Placeholder"], {
      icon: "video-alt2",
      className: "bb-input-container meeting_block_title",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Zoom Meeting', 'buddyboss-pro'),
      instructions: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Create meeting or add existing meeting.', 'buddyboss-pro')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      isSecondary: true,
      onClick: function onClick() {
        setMeetingFormType('create');
      }
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Create Meeting', 'buddyboss-pro')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      isSecondary: true,
      onClick: function onClick() {
        setMeetingFormType('existing');
      }
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Add Existing Meeting', 'buddyboss-pro'))) : '', 'existing' === meetingFormType ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Placeholder"], {
      icon: "video-alt2",
      className: "bb-meeting-id-input-container",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Add Existing Meeting', 'buddyboss-pro')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Meeting ID', 'buddyboss-pro'),
      value: meetingId,
      className: "components-placeholder__input bb-meeting-id-wrap",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter meeting ID without spaces…', 'buddyboss-pro'),
      onChange: setMeetingId
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["BaseControl"], {
      className: "bb-buttons-wrap"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      isPrimary: true,
      onClick: function onClick(e) {
        var target = e.target;
        target.setAttribute('disabled', true);
        var meeting_data = {
          '_wpnonce': bpZoomMeetingBlock.bp_zoom_meeting_nonce,
          'bp-zoom-meeting-id': meetingId
        };
        Object(_request__WEBPACK_IMPORTED_MODULE_10__["zoomMeetingFetch"])(meeting_data).then(function (response) {
          target.removeAttribute('disabled');
          target.innerHTML = '<i class="bb-icon-l bb-icon-bolt"></i>';
          wp.data.dispatch('core/notices').createNotice('success', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Meeting Synced.', 'buddyboss-pro'), {
            isDismissible: true
          }); // Set meeting object.

          setMeetingObject(response); // Set meeting form to create.

          setMeetingFormType('create'); //Set external meeting to true.

          setExternalMeeting(true); // Save the post.

          var editorInfo = wp.data.select('core/editor');

          if (editorInfo.isEditedPostSaveable()) {
            if (!editorInfo.isCurrentPostPublished() && ~['draft', 'auto-draft'].indexOf(editorInfo.getEditedPostAttribute('status'))) {
              wp.data.dispatch('core/editor').autosave();
            } else {
              wp.data.dispatch('core/editor').savePost();
            }
          }
        }).catch(function (error) {
          target.removeAttribute('disabled');
          wp.data.dispatch('core/notices').createNotice('error', error.error, {
            isDismissible: true
          });
        });
      }
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Save', 'buddyboss-pro')), meetingId < 1 || '' === meetingId ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      isTertiary: true,
      onClick: function onClick() {
        setMeetingFormType('');
      }
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Cancel', 'buddyboss-pro')) : ''))) : '', 'create' === meetingFormType ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Placeholder"], {
      icon: "video-alt2",
      label: !external_meeting ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Create Meeting', 'buddyboss-pro') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Existing Meeting', 'buddyboss-pro'),
      className: "bp-meeting-block-create"
    }, meetingId > 1 || '' !== meetingId ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      isLink: true,
      onClick: function onClick(e) {
        var target = e.currentTarget;
        target.innerHTML = '<i class="bb-icon-l bb-icon-spinner animate-spin"></i> ' + Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Sync', 'buddyboss-pro');
        target.setAttribute('disabled', true);
        var meeting_data = {
          '_wpnonce': bpZoomMeetingBlock.bp_zoom_meeting_nonce,
          'bp-zoom-meeting-id': meetingId
        };
        Object(_request__WEBPACK_IMPORTED_MODULE_10__["zoomMeetingFetch"])(meeting_data).then(function (response) {
          target.removeAttribute('disabled');
          target.innerHTML = '<i class="bb-icon-l bb-icon-bolt"></i> ' + Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Sync', 'buddyboss-pro');
          wp.data.dispatch('core/notices').createNotice('success', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Meeting Synced.', 'buddyboss-pro'), {
            isDismissible: true
          }); // Set meeting object.

          setMeetingObject(response); // Set meeting form to create.

          setMeetingFormType('create'); // Save the post.

          var editorInfo = wp.data.select('core/editor');

          if (editorInfo.isEditedPostSaveable()) {
            if (!editorInfo.isCurrentPostPublished() && ~['draft', 'auto-draft'].indexOf(editorInfo.getEditedPostAttribute('status'))) {
              wp.data.dispatch('core/editor').autosave();
            } else {
              wp.data.dispatch('core/editor').savePost();
            }
          }
        }).catch(function (error) {
          target.removeAttribute('disabled');
          target.innerHTML = '<i class="bb-icon-l bb-icon-bolt"></i> ' + Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Sync', 'buddyboss-pro');
          wp.data.dispatch('core/notices').createNotice('error', error.error, {
            isDismissible: true
          });
        });
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("i", {
      className: "bb-icon-l bb-icon-bolt"
    }), " ", Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Sync', 'buddyboss-pro')) : '', Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
      label: "",
      type: "hidden",
      value: meetingId
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Title', 'buddyboss-pro'),
      value: title,
      onChange: setTitle
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["BaseControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('When', 'buddyboss-pro'),
      className: "bb-meeting-time-wrap"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("time", {
      dateTime: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_5__["date"])('c', startDate)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      icon: "edit",
      isTertiary: true,
      isLink: true,
      onClick: function onClick() {
        return setIsPickerOpen(function (_isPickerOpen) {
          return !_isPickerOpen;
        });
      }
    }, moment__WEBPACK_IMPORTED_MODULE_9___default()(startDate).format('MMMM DD, YYYY h:mm a')), isPickerOpen && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Popover"], {
      onClose: setIsPickerOpen.bind(null, false)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["DateTimePicker"], {
      currentDate: startDate,
      onChange: setStartDate,
      is12Hour: true
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Timezone', 'buddyboss-pro'),
      value: timezone,
      options: bpZoomMeetingBlock.timezones,
      onChange: setTimezone,
      className: "bb_inline_selectBox"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Auto Recording', 'buddyboss-pro'),
      value: autoRecording,
      options: auto_recording_options,
      onChange: setAutoRecording,
      className: "bb_inline_selectBox"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["BaseControl"], {
      className: "bb-buttons-wrap"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      className: "submit-meeting",
      isPrimary: true,
      onClick: function onClick(e) {
        var target = e.target;
        target.setAttribute('disabled', true);
        var meeting_data = {
          '_wpnonce': bpZoomMeetingBlock.bp_zoom_meeting_nonce,
          'bp-zoom-meeting-zoom-id': meetingId,
          'bp-zoom-meeting-start-date': startDate,
          'bp-zoom-meeting-timezone': timezone,
          'bp-zoom-meeting-duration': duration,
          'bp-zoom-meeting-password': password,
          'bp-zoom-meeting-recording': autoRecording,
          'bp-zoom-meeting-alt-host-ids': alt_hosts,
          'bp-zoom-meeting-title': title,
          'bp-zoom-meeting-description': description
        };
        meeting_data['bp-zoom-meeting-type'] = 2;

        if (recurring) {
          if (1 === recurrence) {
            if ('date' === end_time_select) {
              meeting_data['bp-zoom-meeting-end-date-time'] = end_date_time;
            } else {
              meeting_data['bp-zoom-meeting-end-times'] = end_times;
            }

            meeting_data['bp-zoom-meeting-recurrence'] = 1;
            meeting_data['bp-zoom-meeting-end-time-select'] = end_time_select;
            meeting_data['bp-zoom-meeting-repeat-interval'] = repeat_interval;
            meeting_data['bp-zoom-meeting-type'] = 8;
          } else if (2 === recurrence) {
            if (weekly_days) {
              meeting_data['bp-zoom-meeting-weekly-days'] = weekly_days;
            }

            if ('date' === end_time_select) {
              meeting_data['bp-zoom-meeting-end-date-time'] = end_date_time;
            } else {
              meeting_data['bp-zoom-meeting-end-times'] = end_times;
            }

            meeting_data['bp-zoom-meeting-recurrence'] = 2;
            meeting_data['bp-zoom-meeting-end-time-select'] = end_time_select;
            meeting_data['bp-zoom-meeting-repeat-interval'] = repeat_interval;
            meeting_data['bp-zoom-meeting-type'] = 8;
          } else if (3 === recurrence) {
            if ('day' === monthly_occurs_on) {
              meeting_data['bp-zoom-meeting-monthly-day'] = monthly_day;
            } else if ('week' === monthly_occurs_on) {
              meeting_data['bp-zoom-meeting-monthly-week'] = monthly_week;
              meeting_data['bp-zoom-meeting-monthly-week-day'] = monthly_week_day;
            }

            if ('date' === end_time_select) {
              meeting_data['bp-zoom-meeting-end-date-time'] = end_date_time;
            } else {
              meeting_data['bp-zoom-meeting-end-times'] = end_times;
            }

            meeting_data['bp-zoom-meeting-recurrence'] = 3;
            meeting_data['bp-zoom-meeting-monthly-occurs-on'] = monthly_occurs_on;
            meeting_data['bp-zoom-meeting-end-time-select'] = end_time_select;
            meeting_data['bp-zoom-meeting-repeat-interval'] = repeat_interval;
            meeting_data['bp-zoom-meeting-type'] = 8;
          } else {
            meeting_data['bp-zoom-meeting-type'] = 3;
          }
        }

        if (registration) {
          meeting_data['bp-zoom-meeting-registration'] = 1;

          if (meeting_data['bp-zoom-meeting-type'] === 8) {
            meeting_data['bp-zoom-meeting-registration-type'] = registration_type;
          }
        }

        if (joinBeforeHost) {
          meeting_data['bp-zoom-meeting-join-before-host'] = 1;
        }

        if (hostVideo) {
          meeting_data['bp-zoom-meeting-host-video'] = 1;
        }

        if (participantsVideo) {
          meeting_data['bp-zoom-meeting-participants-video'] = 1;
        }

        if (muteParticipants) {
          meeting_data['bp-zoom-meeting-mute-participants'] = 1;
        }

        if (waitingRoom) {
          meeting_data['bp-zoom-meeting-waiting-room'] = 1;
        }

        if (authentication) {
          meeting_data['bp-zoom-meeting-authentication'] = 1;
        }

        wp.ajax.send('zoom_meeting_block_add', {
          data: meeting_data,
          success: function success(response) {
            if (response.meeting.id) {
              setMeetingId(response.meeting.id);
            }

            if (typeof response.meeting.occurrences !== 'undefined' && response.meeting.occurrences.length) {
              setOccurrences(response.meeting.occurrences);
            }

            target.removeAttribute('disabled');
            wp.data.dispatch('core/notices').createNotice('success', // Can be one of: success, info, warning, error.
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Meeting Updated.', 'buddyboss-pro'), // Text string to display.
            {
              isDismissible: true // Whether the user can dismiss the notice.

            });
            setMeetingFormType('create'); //save post if is ok to save

            var editorInfo = wp.data.select('core/editor');

            if (editorInfo.isEditedPostSaveable()) {
              if (!editorInfo.isCurrentPostPublished() && ~['draft', 'auto-draft'].indexOf(editorInfo.getEditedPostAttribute('status'))) {
                wp.data.dispatch('core/editor').autosave();
              } else {
                wp.data.dispatch('core/editor').savePost();
              }
            }
          },
          error: function error(_error) {
            target.removeAttribute('disabled');

            if (typeof _error.errors !== 'undefined') {
              for (var er in _error.errors) {
                wp.data.dispatch('core/notices').createNotice('error', _error.errors[er].message, // Text string to display.
                {
                  isDismissible: true // Whether the user can dismiss the notice.

                });
              }
            } else {
              wp.data.dispatch('core/notices').createNotice('error', // Can be one of: success, info, warning, error.
              _error.error, // Text string to display.
              {
                isDismissible: true // Whether the user can dismiss the notice.

              });
            }
          }
        });
      }
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Save Meeting', 'buddyboss-pro')), meetingId < 1 || '' === meetingId ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      isTertiary: true,
      onClick: function onClick() {
        setMeetingFormType('');
      }
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Cancel', 'buddyboss-pro')) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      isDestructive: true,
      onClick: function onClick(e) {
        var target = e.target;

        if (confirm('Are you sure you want to delete this meeting?', 'buddyboss-pro')) {
          target.setAttribute('disabled', true);
          var meeting_data = {
            '_wpnonce': bpZoomMeetingBlock.bp_zoom_meeting_nonce,
            'bp-zoom-meeting-zoom-id': meetingId
          };
          wp.ajax.send('zoom_meeting_block_delete_meeting', {
            data: meeting_data,
            success: function success() {
              wp.data.dispatch('core/block-editor').removeBlock(clientId);
              target.removeAttribute('disabled');
              wp.data.dispatch('core/notices').createNotice('success', // Can be one of: success, info, warning, error.
              Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Meeting Deleted.', 'buddyboss-pro'), // Text string to display.
              {
                isDismissible: true // Whether the user can dismiss the notice.

              });
              var editorInfo = wp.data.select('core/editor'); // save post if is ok to save

              if (editorInfo.isEditedPostSaveable()) {
                if (!editorInfo.isCurrentPostPublished() && ~['draft', 'auto-draft'].indexOf(editorInfo.getEditedPostAttribute('status'))) {
                  wp.data.dispatch('core/editor').autosave();
                } else {
                  wp.data.dispatch('core/editor').savePost();
                }
              }
            },
            error: function error(_error2) {
              target.removeAttribute('disabled');

              if (typeof _error2.errors !== 'undefined') {
                for (var er in _error2.errors) {
                  wp.data.dispatch('core/notices').createNotice('error', _error2.errors[er].message, // Text string to display.
                  {
                    isDismissible: true // Whether the user can dismiss the notice.

                  });
                }
              } else {
                wp.data.dispatch('core/notices').createNotice('error', // Can be one of: success, info, warning, error.
                _error2.error, // Text string to display.
                {
                  isDismissible: true // Whether the user can dismiss the notice.

                });
              }
            }
          });
        }
      }
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Delete', 'buddyboss-pro'))))) : '', 'create' === meetingFormType ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Settings', 'buddyboss-pro'),
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextareaControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Description (optional)', 'buddyboss-pro'),
      value: description,
      onChange: setDescription
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Passcode (optional)', 'buddyboss-pro'),
      onChange: setPassword,
      value: password
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
      type: "number",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Duration (minutes)', 'buddyboss-pro'),
      onChange: setDuration,
      value: duration
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Default Host', 'buddyboss-pro'),
      type: "text",
      disabled: true,
      value: hostDisplayName
    }), host_user_type == 2 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Alternative Hosts', 'buddyboss-pro'),
      onChange: setAltHosts,
      value: alt_hosts,
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Example: mary@company.com', 'buddyboss-pro'),
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Entered by email, comma separated. Each email added needs to match with a user in your Zoom account.', 'buddyboss-pro')
    }) : '', Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["CheckboxControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Start video when host joins', 'buddyboss-pro'),
      checked: hostVideo,
      onChange: setHostVideo,
      className: "bb-checkbox-wrap"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["CheckboxControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Start video when participants join', 'buddyboss-pro'),
      checked: participantsVideo,
      onChange: setParticipantsVideo,
      className: "bb-checkbox-wrap"
    }), host_user_type == 2 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["CheckboxControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Require Registration', 'buddyboss-pro'),
      checked: registration,
      onChange: setRegistration,
      className: "bb-checkbox-wrap"
    }), registration && recurring ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RadioControl"], {
      selected: registration_type,
      options: [{
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Attendees register once and can attend any of the occurrences', 'buddyboss-pro'),
        value: 1
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Attendees need to register for each occurrence to attend', 'buddyboss-pro'),
        value: 2
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Attendees register once and can choose one or more occurrences to attend', 'buddyboss-pro'),
        value: 3
      }],
      onChange: setRegistrationType
    })) : '') : '', Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["CheckboxControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enable join before host', 'buddyboss-pro'),
      checked: joinBeforeHost,
      onChange: setJoinBeforeHost,
      className: "bb-checkbox-wrap"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["CheckboxControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Mute participants upon entry', 'buddyboss-pro'),
      checked: muteParticipants,
      onChange: setMuteParticipants,
      className: "bb-checkbox-wrap"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["CheckboxControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enable waiting room', 'buddyboss-pro'),
      checked: waitingRoom,
      onChange: setWaitingRoom,
      className: "bb-checkbox-wrap"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["CheckboxControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Only authenticated users can join', 'buddyboss-pro'),
      checked: authentication,
      onChange: setAuthentication,
      className: "bb-checkbox-wrap"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Recurring Options', 'buddyboss-pro'),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["CheckboxControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Recurring Meeting', 'buddyboss-pro'),
      checked: recurring,
      onChange: setRecurring
    }), true === recurring ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Recurrence', 'buddyboss-pro'),
      value: recurrence,
      options: [{
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Daily', 'buddyboss-pro'),
        value: 1
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Weekly', 'buddyboss-pro'),
        value: 2
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Monthly', 'buddyboss-pro'),
        value: 3
      }],
      onChange: setRecurrence
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Repeat every', 'buddyboss-pro'),
      value: repeat_interval,
      options: repeat_interval_options,
      onChange: setRepeatInterval,
      help: repeat_every
    }), 2 === recurrence ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Days', 'buddyboss-pro'),
      value: weekly_days,
      options: [{
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Sunday', 'buddyboss-pro'),
        value: 1
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Monday', 'buddyboss-pro'),
        value: 2
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Tuesday', 'buddyboss-pro'),
        value: 3
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Wednesday', 'buddyboss-pro'),
        value: 4
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Thursday', 'buddyboss-pro'),
        value: 5
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Friday', 'buddyboss-pro'),
        value: 6
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Saturday', 'buddyboss-pro'),
        value: 7
      }],
      onChange: setWeeklyDays,
      multiple: true
    }) : '', 3 === recurrence ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Occures on', 'buddyboss-pro'),
      value: monthly_occurs_on,
      options: [{
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Day of the month', 'buddyboss-pro'),
        value: 'day'
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Week of the month', 'buddyboss-pro'),
        value: 'week'
      }],
      onChange: setMonthlyOccursOn
    }), 'day' === monthly_occurs_on ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Day', 'buddyboss-pro'),
      value: monthly_day,
      options: [{
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('1', 'buddyboss-pro'),
        value: 1
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('2', 'buddyboss-pro'),
        value: 2
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('3', 'buddyboss-pro'),
        value: 3
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('4', 'buddyboss-pro'),
        value: 4
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('5', 'buddyboss-pro'),
        value: 5
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('6', 'buddyboss-pro'),
        value: 6
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('7', 'buddyboss-pro'),
        value: 7
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('8', 'buddyboss-pro'),
        value: 8
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('9', 'buddyboss-pro'),
        value: 9
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('10', 'buddyboss-pro'),
        value: 10
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('11', 'buddyboss-pro'),
        value: 11
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('12', 'buddyboss-pro'),
        value: 12
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('13', 'buddyboss-pro'),
        value: 13
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('14', 'buddyboss-pro'),
        value: 14
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('15', 'buddyboss-pro'),
        value: 15
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('16', 'buddyboss-pro'),
        value: 16
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('17', 'buddyboss-pro'),
        value: 17
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('18', 'buddyboss-pro'),
        value: 18
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('19', 'buddyboss-pro'),
        value: 19
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('20', 'buddyboss-pro'),
        value: 20
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('21', 'buddyboss-pro'),
        value: 21
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('22', 'buddyboss-pro'),
        value: 22
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('23', 'buddyboss-pro'),
        value: 23
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('24', 'buddyboss-pro'),
        value: 24
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('25', 'buddyboss-pro'),
        value: 25
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('26', 'buddyboss-pro'),
        value: 26
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('27', 'buddyboss-pro'),
        value: 27
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('28', 'buddyboss-pro'),
        value: 28
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('29', 'buddyboss-pro'),
        value: 29
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('30', 'buddyboss-pro'),
        value: 30
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('31', 'buddyboss-pro'),
        value: 31
      }],
      onChange: setMonthlyDay,
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('of the month', 'buddyboss-pro')
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
      value: monthly_week,
      options: [{
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('First', 'buddyboss-pro'),
        value: 1
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Second', 'buddyboss-pro'),
        value: 2
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Third', 'buddyboss-pro'),
        value: 3
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Fourth', 'buddyboss-pro'),
        value: 4
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Last', 'buddyboss-pro'),
        value: -1
      }],
      onChange: setMonthlyWeek
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
      value: monthly_week_day,
      options: [{
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Sunday', 'buddyboss-pro'),
        value: 1
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Monday', 'buddyboss-pro'),
        value: 2
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Tuesday', 'buddyboss-pro'),
        value: 3
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Wednesday', 'buddyboss-pro'),
        value: 4
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Thursday', 'buddyboss-pro'),
        value: 5
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Friday', 'buddyboss-pro'),
        value: 6
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Saturday', 'buddyboss-pro'),
        value: 7
      }],
      onChange: setMonthlyWeekDay,
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('of the month', 'buddyboss-pro')
    }))) : '', 4 !== recurrence ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('End by', 'buddyboss-pro'),
      value: end_time_select,
      options: [{
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Date', 'buddyboss-pro'),
        value: 'date'
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Occurrences', 'buddyboss-pro'),
        value: 'times'
      }],
      onChange: setEndTimeSelect
    }), 'date' == end_time_select ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("time", {
      dateTime: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_5__["date"])('c', end_date_time)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      icon: "edit",
      isTertiary: true,
      isLink: true,
      onClick: function onClick() {
        return setIsRecurrencePickerOpen(function (isRecurrencePickerOpen) {
          return !isRecurrencePickerOpen;
        });
      }
    }, moment__WEBPACK_IMPORTED_MODULE_9___default()(end_date_time).format('MMMM DD, YYYY')), isRecurrencePickerOpen && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Popover"], {
      onClose: setIsRecurrencePickerOpen.bind(null, false)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["DatePicker"], {
      currentDate: end_date_time,
      onChange: setEndDateTime
    }))) : '', 'times' == end_time_select ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('End After', 'buddyboss-pro'),
      value: end_times,
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('occurences', 'buddyboss-pro'),
      options: [{
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('1', 'buddyboss-pro'),
        value: 1
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('2', 'buddyboss-pro'),
        value: 2
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('3', 'buddyboss-pro'),
        value: 3
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('4', 'buddyboss-pro'),
        value: 4
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('5', 'buddyboss-pro'),
        value: 5
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('6', 'buddyboss-pro'),
        value: 6
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('7', 'buddyboss-pro'),
        value: 7
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('8', 'buddyboss-pro'),
        value: 8
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('9', 'buddyboss-pro'),
        value: 9
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('10', 'buddyboss-pro'),
        value: 10
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('11', 'buddyboss-pro'),
        value: 11
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('12', 'buddyboss-pro'),
        value: 12
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('13', 'buddyboss-pro'),
        value: 13
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('14', 'buddyboss-pro'),
        value: 14
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('15', 'buddyboss-pro'),
        value: 15
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('16', 'buddyboss-pro'),
        value: 16
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('17', 'buddyboss-pro'),
        value: 17
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('18', 'buddyboss-pro'),
        value: 18
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('19', 'buddyboss-pro'),
        value: 19
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('20', 'buddyboss-pro'),
        value: 20
      }],
      onChange: setEndTimes
    }) : '') : '') : ''), true === recurring && occurrences.length ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Occurrences', 'buddyboss-pro'),
      initialOpen: false
    }, occurrences.map(function (occurrence) {
      var nowDate = new Date(bpZoomMeetingBlock.wp_date_time);
      var selectedDate = new Date(occurrence.start_time);

      if (nowDate.getTime() > selectedDate.getTime() || 'deleted' === occurrence.status) {
        return '';
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        key: occurrence.occurrence_id
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["__experimentalText"], {
        as: "p"
      }, moment__WEBPACK_IMPORTED_MODULE_9___default()(occurrence.start_time).format('MMMM DD, YYYY h:mm a')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        isLink: true,
        className: "edit-occurrences-button",
        onClick: function onClick() {
          setOccurrenceEdit(true);
          setCurrentOccurrence(occurrence);
        }
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Edit', 'buddyboss-pro')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        isLink: "true",
        className: "edit-occurrences-button",
        onClick: function onClick(e) {
          var target = e.target;

          if (!confirm(bpZoomMeetingBlock.delete_occurrence_confirm_str)) {
            return false;
          }

          target.setAttribute('disabled', true);
          var meeting_data = {
            '_wpnonce': bpZoomMeetingBlock.bp_zoom_meeting_nonce,
            'bp-zoom-meeting-zoom-id': meetingId,
            'bp-zoom-meeting-occurrence-id': occurrence.occurrence_id
          };
          wp.ajax.send('zoom_meeting_block_delete_occurrence', {
            data: meeting_data,
            success: function success() {
              setOccurrences(occurrences.filter(function (obj) {
                return obj.occurrence_id !== occurrence.occurrence_id;
              }));
              setOccurrenceEdit(false);
              target.removeAttribute('disabled');
              wp.data.dispatch('core/notices').createNotice('success', // Can be one of: success, info, warning, error.
              Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Occurrence Deleted.', 'buddyboss-pro'), // Text string to display.
              {
                isDismissible: true // Whether the user can dismiss the notice.

              });
              var editorInfo = wp.data.select('core/editor'); // save post if is ok to save

              if (editorInfo.isEditedPostSaveable()) {
                if (!editorInfo.isCurrentPostPublished() && ~['draft', 'auto-draft'].indexOf(editorInfo.getEditedPostAttribute('status'))) {
                  wp.data.dispatch('core/editor').autosave();
                } else {
                  wp.data.dispatch('core/editor').savePost();
                }
              }
            },
            error: function error(_error3) {
              target.removeAttribute('disabled');

              if (typeof _error3.errors !== 'undefined') {
                for (var er in _error3.errors) {
                  wp.data.dispatch('core/notices').createNotice('error', _error3.errors[er].message, // Text string to display.
                  {
                    isDismissible: true // Whether the user can dismiss the notice.

                  });
                }
              } else {
                wp.data.dispatch('core/notices').createNotice('error', // Can be one of: success, info, warning, error.
                _error3.error, // Text string to display.
                {
                  isDismissible: true // Whether the user can dismiss the notice.

                });
              }
            }
          });
        }
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Delete', 'buddyboss-pro')), occurrence_edit && current_occurrence && current_occurrence.occurrence_id === occurrence.occurrence_id ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["DateTimePicker"], {
        is12Hour: true,
        currentDate: current_occurrence_start_time,
        onChange: setOccurrenceStartTime
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
        type: "number",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Duration (minutes)', 'buddyboss-pro'),
        onChange: setOccurrenceDuration,
        value: current_occurrence_duration
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["BaseControl"], {
        className: "bb-buttons-wrap"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        isPrimary: true,
        className: "submit-meeting",
        onClick: function onClick(e) {
          var target = e.target;
          target.setAttribute('disabled', true);
          var meeting_data = {
            '_wpnonce': bpZoomMeetingBlock.bp_zoom_meeting_nonce,
            'bp-zoom-meeting-zoom-id': meetingId,
            'bp-zoom-meeting-occurrence-id': current_occurrence.occurrence_id,
            'bp-zoom-meeting-start-time': current_occurrence_start_time,
            'bp-zoom-meeting-timezone': timezone,
            'bp-zoom-meeting-duration': current_occurrence_duration,
            'bp-zoom-meeting-recording': autoRecording,
            'bp-zoom-meeting-alt-host-ids': alt_hosts
          };

          if (joinBeforeHost) {
            meeting_data['bp-zoom-meeting-join-before-host'] = 1;
          }

          if (hostVideo) {
            meeting_data['bp-zoom-meeting-host-video'] = 1;
          }

          if (participantsVideo) {
            meeting_data['bp-zoom-meeting-participants-video'] = 1;
          }

          if (muteParticipants) {
            meeting_data['bp-zoom-meeting-mute-participants'] = 1;
          }

          if (waitingRoom) {
            meeting_data['bp-zoom-meeting-waiting-room'] = 1;
          }

          if (authentication) {
            meeting_data['bp-zoom-meeting-authentication'] = 1;
          }

          wp.ajax.send('zoom_meeting_block_update_occurrence', {
            data: meeting_data,
            success: function success() {
              for (var o_index in occurrences) {
                if (occurrences[o_index].occurrence_id === current_occurrence.occurrence_id) {
                  occurrences[o_index].duration = current_occurrence_duration;
                  occurrences[o_index].start_time = current_occurrence_start_time;
                  break;
                }
              }

              setOccurrences(occurrences);
              setOccurrenceEdit(false);
              target.removeAttribute('disabled');
              wp.data.dispatch('core/notices').createNotice('success', // Can be one of: success, info, warning, error.
              Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Meeting Updated.', 'buddyboss-pro'), // Text string to display.
              {
                isDismissible: true // Whether the user can dismiss the notice.

              });
              var editorInfo = wp.data.select('core/editor'); // save post if is ok to save

              if (editorInfo.isEditedPostSaveable()) {
                if (!editorInfo.isCurrentPostPublished() && ~['draft', 'auto-draft'].indexOf(editorInfo.getEditedPostAttribute('status'))) {
                  wp.data.dispatch('core/editor').autosave();
                } else {
                  wp.data.dispatch('core/editor').savePost();
                }
              }
            },
            error: function error(_error4) {
              target.removeAttribute('disabled');

              if (typeof _error4.errors !== 'undefined') {
                for (var er in _error4.errors) {
                  wp.data.dispatch('core/notices').createNotice('error', _error4.errors[er].message, // Text string to display.
                  {
                    isDismissible: true // Whether the user can dismiss the notice.

                  });
                }
              } else {
                wp.data.dispatch('core/notices').createNotice('error', // Can be one of: success, info, warning, error.
                _error4.error, // Text string to display.
                {
                  isDismissible: true // Whether the user can dismiss the notice.

                });
              }
            }
          });
        }
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Save', 'buddyboss-pro')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        isTertiary: true,
        onClick: function onClick() {
          setOccurrenceEdit(false);
        }
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Cancel', 'buddyboss-pro')))) : '');
    })) : '') : '');
  }
});

if (bpZoomMeetingBlock.webinar_enabled) {
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["registerBlockType"])('bp-zoom-meeting/create-webinar', {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Zoom Webinar', 'buddyboss-pro'),
    description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Create webinar in Zoom', 'buddyboss-pro'),
    icon: 'video-alt2',
    category: isBuddyBossInCategories() ? 'buddyboss' : 'common',
    keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('zoom', 'buddyboss-pro'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('webinar', 'buddyboss-pro')],
    supports: {
      html: false,
      reusable: false
    },
    attributes: {
      id: {
        type: 'number',
        default: ''
      },
      webinarId: {
        type: 'number',
        default: ''
      },
      hostId: {
        type: 'string',
        default: typeof bpZoomMeetingBlock.default_host_id !== 'undefined' ? bpZoomMeetingBlock.default_host_id : ''
      },
      hostDisplayName: {
        type: 'string',
        default: typeof bpZoomMeetingBlock.default_host_user !== 'undefined' ? bpZoomMeetingBlock.default_host_user : ''
      },
      alt_hosts: {
        type: 'string',
        default: ''
      },
      title: {
        type: 'string',
        default: ''
      },
      description: {
        type: 'string',
        default: ''
      },
      startDate: {
        type: 'string',
        default: moment__WEBPACK_IMPORTED_MODULE_9___default()(currentDateTime).format(moment_default_datetime_format)
      },
      duration: {
        type: 'string',
        default: '30'
      },
      timezone: {
        type: 'string',
        default: typeof bpZoomMeetingBlock.wp_timezone !== 'undefined' ? bpZoomMeetingBlock.wp_timezone : ''
      },
      password: {
        type: 'string',
        default: ''
      },
      registration: {
        type: 'boolean',
        default: false
      },
      registration_type: {
        type: 'number',
        default: 1
      },
      hostVideo: {
        type: 'boolean',
        default: false
      },
      panelistsVideo: {
        type: 'boolean',
        default: false
      },
      practiceSession: {
        type: 'boolean',
        default: false
      },
      onDemand: {
        type: 'boolean',
        default: false
      },
      authentication: {
        type: 'boolean',
        default: false
      },
      autoRecording: {
        type: 'string',
        default: 'none'
      },
      recurring: {
        type: 'boolean',
        default: false
      },
      recurrence: {
        type: 'number',
        default: 1
      },
      repeat_interval: {
        type: 'number',
        default: 1
      },
      end_time_select: {
        type: 'string',
        default: 'date'
      },
      end_times: {
        type: 'number',
        default: 7
      },
      end_date_time: {
        type: 'string',
        default: moment__WEBPACK_IMPORTED_MODULE_9___default()(new Date().setDate(new Date(bpZoomMeetingBlock.wp_date_time).getDate() + 6)).format(moment_default_datetime_format)
      },
      weekly_days: {
        type: 'array',
        default: ['4']
      },
      monthly_occurs_on: {
        type: 'string',
        default: 'day'
      },
      monthly_day: {
        type: 'number',
        default: 1
      },
      monthly_week: {
        type: 'number',
        default: 1
      },
      monthly_week_day: {
        type: 'number',
        default: 1
      },
      occurrences: {
        type: 'array',
        default: []
      },
      current_occurrence: {
        type: 'object',
        default: {}
      },
      occurrence_edit: {
        type: 'boolean',
        default: false
      },
      current_occurrence_start_time: {
        type: 'string',
        default: ''
      },
      current_occurrence_duration: {
        type: 'number',
        default: 0
      },
      webinarFormType: {
        type: 'string',
        default: ''
      },
      external_webinar: {
        type: 'boolean',
        default: false
      }
    },
    edit: function edit(props) {
      var clientId = props.clientId,
          setAttributes = props.setAttributes;
      var host_user_type = typeof bpZoomMeetingBlock.default_host_user_type !== 'undefined' ? bpZoomMeetingBlock.default_host_user_type : 1;
      var private_webinar = typeof bpZoomMeetingBlock.private_webinar !== 'undefined' ? bpZoomMeetingBlock.private_webinar : false;
      var _props$attributes2 = props.attributes,
          webinarId = _props$attributes2.webinarId,
          hostId = _props$attributes2.hostId,
          hostDisplayName = _props$attributes2.hostDisplayName,
          title = _props$attributes2.title,
          description = _props$attributes2.description,
          startDate = _props$attributes2.startDate,
          duration = _props$attributes2.duration,
          timezone = _props$attributes2.timezone,
          password = _props$attributes2.password,
          registration = _props$attributes2.registration,
          registration_type = _props$attributes2.registration_type,
          hostVideo = _props$attributes2.hostVideo,
          panelistsVideo = _props$attributes2.panelistsVideo,
          practiceSession = _props$attributes2.practiceSession,
          onDemand = _props$attributes2.onDemand,
          authentication = _props$attributes2.authentication,
          autoRecording = _props$attributes2.autoRecording,
          webinarFormType = _props$attributes2.webinarFormType,
          alt_hosts = _props$attributes2.alt_hosts,
          external_webinar = _props$attributes2.external_webinar,
          recurring = _props$attributes2.recurring,
          recurrence = _props$attributes2.recurrence,
          repeat_interval = _props$attributes2.repeat_interval,
          end_times = _props$attributes2.end_times,
          end_date_time = _props$attributes2.end_date_time,
          end_time_select = _props$attributes2.end_time_select,
          weekly_days = _props$attributes2.weekly_days,
          monthly_occurs_on = _props$attributes2.monthly_occurs_on,
          monthly_day = _props$attributes2.monthly_day,
          monthly_week = _props$attributes2.monthly_week,
          monthly_week_day = _props$attributes2.monthly_week_day,
          occurrences = _props$attributes2.occurrences,
          current_occurrence = _props$attributes2.current_occurrence,
          occurrence_edit = _props$attributes2.occurrence_edit,
          current_occurrence_start_time = _props$attributes2.current_occurrence_start_time,
          current_occurrence_duration = _props$attributes2.current_occurrence_duration;

      var repeat_interval_options = [],
          repeat_every = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('day', 'buddyboss-pro'),
          start_date_dt = new Date(startDate),
          end_date_dt = new Date();

      var setWebinarId = function setWebinarId(val) {
        var reg = new RegExp('^\\d+$');

        if ('' !== val && reg.test(val)) {
          val = parseInt(val.toString().replace(/\s/g, ''));
        }

        setAttributes({
          webinarId: val
        });
      };

      var setHostId = function setHostId(val) {
        setAttributes({
          hostId: val
        });
      };

      var setHostDisplayName = function setHostDisplayName(val) {
        setAttributes({
          hostDisplayName: val
        });
      };

      var setTitle = function setTitle(val) {
        setAttributes({
          title: val
        });
      };

      var setDescription = function setDescription(val) {
        setAttributes({
          description: val
        });
      };

      var setStartDate = function setStartDate(val) {
        var nowDate = new Date(bpZoomMeetingBlock.wp_date_time);
        var selectedDate = new Date(val);

        if (nowDate.getTime() < selectedDate.getTime()) {
          setAttributes({
            startDate: val
          });
          var end_date_time_date = new Date(end_date_time);

          if (selectedDate.getTime() >= end_date_time_date.getTime()) {
            var start_date_dt_val = new Date(val);

            if (recurrence === 1) {
              start_date_dt_val.setDate(start_date_dt_val.getDate() + 6 * repeat_interval);
              setEndDateTime(moment__WEBPACK_IMPORTED_MODULE_9___default()(start_date_dt_val).format(moment_default_datetime_format));
            } else if (recurrence === 2) {
              start_date_dt_val.setDate(start_date_dt_val.getDate() + 6 * (7 * repeat_interval));
              setEndDateTime(moment__WEBPACK_IMPORTED_MODULE_9___default()(start_date_dt_val).format(moment_default_datetime_format));
            } else if (recurrence === 3) {
              start_date_dt_val.setMonth(start_date_dt_val.getMonth() + 6 * repeat_interval);
              setEndDateTime(moment__WEBPACK_IMPORTED_MODULE_9___default()(start_date_dt_val).format(moment_default_datetime_format));
            }
          }
        }
      };

      var setDuration = function setDuration(val) {
        setAttributes({
          duration: val
        });
      };

      var setTimezone = function setTimezone(val) {
        setAttributes({
          timezone: val
        });
        var currentDateTimeZoneWise = new Date(new Date().toLocaleString('en-US', {
          timeZone: val
        }));
        var month = '' + (currentDateTimeZoneWise.getMonth() + 1),
            day = '' + currentDateTimeZoneWise.getDate(),
            year = currentDateTimeZoneWise.getFullYear(),
            hour = '' + currentDateTimeZoneWise.getHours(),
            minutes = '' + currentDateTimeZoneWise.getMinutes(),
            seconds = '' + currentDateTimeZoneWise.getSeconds();

        if (month.length < 2) {
          month = '0' + month;
        }

        if (day.length < 2) {
          day = '0' + day;
        }

        if (hour.length < 2) {
          hour = '0' + hour;
        }

        if (minutes.length < 2) {
          minutes = '0' + minutes;
        }

        if (seconds.length < 2) {
          seconds = '0' + seconds;
        }

        bpZoomMeetingBlock.wp_date_time = [year, month, day].join('-') + 'T' + [hour, minutes, seconds].join(':');
        var currentStartDateObj = new Date(startDate);

        if (webinarId.length === 0 && currentStartDateObj < currentDateTimeZoneWise) {
          setAttributes({
            startDate: bpZoomMeetingBlock.wp_date_time
          });
        }
      };

      var setPassword = function setPassword(val) {
        setAttributes({
          password: val
        });
      };

      var setRegistration = function setRegistration(val) {
        setAttributes({
          registration: val
        });
      };

      var setRegistrationType = function setRegistrationType(val) {
        setAttributes({
          registration_type: parseInt(val)
        });
      };

      var setHostVideo = function setHostVideo(val) {
        setAttributes({
          hostVideo: val
        });
      };

      var setPanelistsVideo = function setPanelistsVideo(val) {
        setAttributes({
          panelistsVideo: val
        });
      };

      var setPracticeSession = function setPracticeSession(val) {
        setAttributes({
          practiceSession: val
        });
      };

      var setOnDemand = function setOnDemand(val) {
        setAttributes({
          onDemand: val
        });
      };

      var setAuthentication = function setAuthentication(val) {
        setAttributes({
          authentication: val
        });
      };

      var setAutoRecording = function setAutoRecording(val) {
        setAttributes({
          autoRecording: val
        });
      };

      var setWebinarFormType = function setWebinarFormType(val) {
        setAttributes({
          webinarFormType: val
        });
      };

      var setRecurring = function setRecurring(val) {
        setAttributes({
          recurring: val
        });
      };

      var setRecurrence = function setRecurrence(val) {
        setAttributes({
          recurrence: parseInt(val)
        });

        if (val == 1) {
          end_date_dt.setDate(start_date_dt.getDate() + 6 * repeat_interval);
          setEndDateTime(moment__WEBPACK_IMPORTED_MODULE_9___default()(end_date_dt).format(moment_default_datetime_format));
        } else if (val == 2) {
          end_date_dt.setDate(start_date_dt.getDate() + 6 * (7 * repeat_interval));
          setEndDateTime(moment__WEBPACK_IMPORTED_MODULE_9___default()(end_date_dt).format(moment_default_datetime_format));
        } else if (val == 3) {
          end_date_dt.setMonth(start_date_dt.getMonth() + 6 * repeat_interval);
          setEndDateTime(moment__WEBPACK_IMPORTED_MODULE_9___default()(end_date_dt).format(moment_default_datetime_format));
        }
      };

      var setRepeatInterval = function setRepeatInterval(val) {
        setAttributes({
          repeat_interval: val
        });

        if (recurrence === 1) {
          end_date_dt.setDate(start_date_dt.getDate() + 6 * val);
          setEndDateTime(moment__WEBPACK_IMPORTED_MODULE_9___default()(end_date_dt).format(moment_default_datetime_format));
        } else if (recurrence === 2) {
          end_date_dt.setDate(start_date_dt.getDate() + 6 * (7 * val));
          setEndDateTime(moment__WEBPACK_IMPORTED_MODULE_9___default()(end_date_dt).format(moment_default_datetime_format));
        } else if (recurrence === 3) {
          end_date_dt.setMonth(start_date_dt.getMonth() + 6 * val);
          setEndDateTime(moment__WEBPACK_IMPORTED_MODULE_9___default()(end_date_dt).format(moment_default_datetime_format));
        }
      };

      var setEndTimes = function setEndTimes(val) {
        setAttributes({
          end_times: parseInt(val)
        });
      };

      var setEndDateTime = function setEndDateTime(val) {
        var meetingDate = new Date(startDate);
        var selectedDate = new Date(val);

        if (meetingDate.getTime() < selectedDate.getTime()) {
          setAttributes({
            end_date_time: val
          });
        }
      };

      var setOccurrenceStartTime = function setOccurrenceStartTime(start_time) {
        var nowDate = new Date();
        var selectedDate = new Date(start_time);

        if (nowDate.getTime() < selectedDate.getTime()) {
          setAttributes({
            current_occurrence_start_time: start_time
          });
        }
      };

      var setOccurrenceDuration = function setOccurrenceDuration(duration_val) {
        setAttributes({
          current_occurrence_duration: duration_val
        });
      };

      var setEndTimeSelect = function setEndTimeSelect(val) {
        setAttributes({
          end_time_select: val
        });
      };

      var setWeeklyDays = function setWeeklyDays(val) {
        setAttributes({
          weekly_days: val
        });
      };

      var setMonthlyOccursOn = function setMonthlyOccursOn(val) {
        setAttributes({
          monthly_occurs_on: val
        });
      };

      var setMonthlyDay = function setMonthlyDay(val) {
        setAttributes({
          monthly_day: parseInt(val)
        });
      };

      var setMonthlyWeek = function setMonthlyWeek(val) {
        setAttributes({
          monthly_week: val
        });
      };

      var setMonthlyWeekDay = function setMonthlyWeekDay(val) {
        setAttributes({
          monthly_week_day: parseInt(val)
        });
      };

      var setOccurrences = function setOccurrences(val) {
        setAttributes({
          occurrences: val
        });

        for (var o in val) {
          var nowDate = new Date(bpZoomMeetingBlock.wp_date_time);
          var selectedDate = new Date(val[o].start_time);

          if (nowDate.getTime() < selectedDate.getTime() && 'deleted' !== val[o].status) {
            setStartDate(val[o].start_time);
            break;
          }
        }
      };

      var setOccurrenceEdit = function setOccurrenceEdit(val) {
        setAttributes({
          occurrence_edit: val
        });
      };

      var setCurrentOccurrence = function setCurrentOccurrence(val) {
        setAttributes({
          current_occurrence: val
        });
        setOccurrenceDuration(val.duration);
        setOccurrenceStartTime(val.start_time);
      };

      var setAltHosts = function setAltHosts(val) {
        setAttributes({
          alt_hosts: val
        });
      };

      var setExternalWebinar = function setExternalWebinar(val) {
        setAttributes({
          external_webinar: val
        });
      };

      var settings = Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_5__["__experimentalGetSettings"])();

      var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
          _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
          isPickerOpen = _useState6[0],
          setIsPickerOpen = _useState6[1];

      var _useState7 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
          _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),
          isRecurrencePickerOpen = _useState8[0],
          setIsRecurrencePickerOpen = _useState8[1];

      var resolvedFormat = settings.formats.datetime || 'Y-m-d H:i:s';
      var auto_recording_options = [];

      if (host_user_type == 2) {
        auto_recording_options = [{
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('No Recordings', 'buddyboss-pro'),
          value: 'none'
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Cloud', 'buddyboss-pro'),
          value: 'cloud'
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Local', 'buddyboss-pro'),
          value: 'local'
        }];
      } else {
        auto_recording_options = [{
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('No Recordings', 'buddyboss-pro'),
          value: 'none'
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Local', 'buddyboss-pro'),
          value: 'local'
        }];
      }

      if (recurrence === 1) {
        repeat_every = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('day', 'buddyboss-pro');
        repeat_interval_options = [];

        for (var i = 1; i <= 15; i++) {
          repeat_interval_options.push({
            label: i,
            value: i
          });
        }
      } else if (recurrence === 2) {
        repeat_every = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('week', 'buddyboss-pro');
        repeat_interval_options = [];

        for (var _i3 = 1; _i3 <= 12; _i3++) {
          repeat_interval_options.push({
            label: _i3,
            value: _i3
          });
        }
      } else if (recurrence === 3) {
        repeat_every = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('month', 'buddyboss-pro');
        repeat_interval_options = [];

        for (var _i4 = 1; _i4 <= 3; _i4++) {
          repeat_interval_options.push({
            label: _i4,
            value: _i4
          });
        }
      }

      var setWebinarObject = function setWebinarObject(response) {
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(response.host_name)) {
          setHostDisplayName(response.host_name);
        }

        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(response.host_email)) {
          setHostId(response.host_email);
        }

        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(response.webinar)) {
          var webinar = response.webinar;

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar.id)) {
            setWebinarId(webinar.id);
          }

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar.host_id)) {
            setHostId(webinar.host_id);
          }

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar.topic)) {
            setTitle(webinar.topic);
          }

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar.agenda)) {
            setDescription(webinar.agenda);
          }

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar.timezone)) {
            setTimezone(webinar.timezone);
          }

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar.start_time)) {
            setAttributes({
              startDate: webinar.start_time
            });
          }

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar.duration)) {
            setDuration(webinar.duration);
          } else if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar.occurrences) && webinar.occurrences.length) {
            setDuration(webinar.occurrences[0].duration);
          }

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar.password)) {
            setPassword(webinar.password);
          }

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar.type) && [6, 9].includes(webinar.type)) {
            setRecurring(true);
          } else {
            setRecurring(false);
          }

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar.occurrences) && webinar.occurrences.length) {
            setOccurrences(webinar.occurrences);
          }

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar.recurrence)) {
            var webinar_recurrence = webinar.recurrence;

            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar_recurrence.type)) {
              setRecurrence(webinar_recurrence.type);
            }

            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar_recurrence.repeat_interval)) {
              setRepeatInterval(webinar_recurrence.repeat_interval);
            }

            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar_recurrence.end_times)) {
              setEndTimes(webinar_recurrence.end_times);
              setEndTimeSelect('times');
            }

            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar_recurrence.end_date_time)) {
              setEndDateTime(webinar_recurrence.end_date_time);
              setEndTimeSelect('date');
            }

            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar_recurrence.weekly_days)) {
              setWeeklyDays(webinar_recurrence.weekly_days.split(','));
            }

            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar_recurrence.monthly_day)) {
              setMonthlyDay(webinar_recurrence.monthly_day);
              setMonthlyOccursOn('day');
            }

            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar_recurrence.monthly_week)) {
              setMonthlyWeek(webinar_recurrence.monthly_week);
              setMonthlyOccursOn('week');
            }

            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar_recurrence.monthly_week_day)) {
              setMonthlyWeekDay(webinar_recurrence.monthly_week_day);
              setMonthlyOccursOn('week');
            }
          }

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar.settings)) {
            var webinar_settings = webinar.settings;

            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar_settings.alternative_hosts)) {
              setAltHosts(webinar_settings.alternative_hosts);
            }

            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar_settings.approval_type) && 0 == webinar_settings.approval_type) {
              setRegistration(true);
            }

            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar_settings.registration_type)) {
              setRegistrationType(webinar_settings.registration_type);
            }

            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar_settings.host_video)) {
              setHostVideo(webinar_settings.host_video);
            }

            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar_settings.panelists_video)) {
              setPanelistsVideo(webinar_settings.panelists_video);
            }

            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar_settings.practice_session)) {
              setPracticeSession(webinar_settings.practice_session);
            }

            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar_settings.on_demand)) {
              setOnDemand(webinar_settings.on_demand);
            }

            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar_settings.meeting_authentication)) {
              setAuthentication(webinar_settings.meeting_authentication);
            }

            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(webinar_settings.auto_recording)) {
              setAutoRecording(webinar_settings.auto_recording);
            }
          }
        }
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, '' === webinarFormType ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Placeholder"], {
        icon: "video-alt2",
        className: "bb-input-container webinar_block_title",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Zoom Webinar', 'buddyboss-pro'),
        instructions: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Create webinar or add existing webinar.', 'buddyboss-pro')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        isSecondary: true,
        onClick: function onClick() {
          setWebinarFormType('create');
        }
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Create Webinar', 'buddyboss-pro')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        isSecondary: true,
        onClick: function onClick() {
          setWebinarFormType('existing');
        }
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Add Existing Webinar', 'buddyboss-pro'))) : '', 'existing' === webinarFormType ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Placeholder"], {
        icon: "video-alt2",
        className: "bb-meeting-id-input-container",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Add Existing Webinar', 'buddyboss-pro')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Webinar ID', 'buddyboss-pro'),
        value: webinarId,
        className: "components-placeholder__input bb-meeting-id-wrap",
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter webinar ID without spaces…', 'buddyboss-pro'),
        onChange: setWebinarId
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["BaseControl"], {
        className: "bb-buttons-wrap"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        isPrimary: true,
        onClick: function onClick(e) {
          var target = e.target;
          target.setAttribute('disabled', true);
          var webinar_data = {
            '_wpnonce': bpZoomMeetingBlock.bp_zoom_webinar_nonce,
            'bp-zoom-webinar-id': webinarId
          };
          Object(_request__WEBPACK_IMPORTED_MODULE_10__["zoomWebinarFetch"])(webinar_data).then(function (response) {
            target.removeAttribute('disabled');
            target.innerHTML = '<i class="bb-icon-l bb-icon-bolt"></i>';
            wp.data.dispatch('core/notices').createNotice('success', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Webinar Synced.', 'buddyboss-pro'), {
              isDismissible: true
            }); // Set webinar object.

            setWebinarObject(response); // Set webinar form to create.

            setWebinarFormType('create'); //Set external webinar to true.

            setExternalWebinar(true); // Save the post.

            var editorInfo = wp.data.select('core/editor');

            if (editorInfo.isEditedPostSaveable()) {
              if (!editorInfo.isCurrentPostPublished() && ~['draft', 'auto-draft'].indexOf(editorInfo.getEditedPostAttribute('status'))) {
                wp.data.dispatch('core/editor').autosave();
              } else {
                wp.data.dispatch('core/editor').savePost();
              }
            }
          }).catch(function (error) {
            target.removeAttribute('disabled');
            wp.data.dispatch('core/notices').createNotice('error', error.error, {
              isDismissible: true
            });
          });
        }
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Save', 'buddyboss-pro')), webinarId < 1 || '' === webinarId ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        isTertiary: true,
        onClick: function onClick() {
          setWebinarFormType('');
        }
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Cancel', 'buddyboss-pro')) : ''))) : '', 'create' === webinarFormType ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Placeholder"], {
        icon: "video-alt2",
        label: !external_webinar ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Create Webinar', 'buddyboss-pro') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Existing Webinar', 'buddyboss-pro'),
        className: "bp-meeting-block-create"
      }, webinarId > 1 || '' !== webinarId ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        isLink: true,
        onClick: function onClick(e) {
          var target = e.currentTarget;
          target.innerHTML = '<i class="bb-icon-l bb-icon-spinner animate-spin"></i> ' + Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Sync', 'buddyboss-pro');
          target.setAttribute('disabled', true);
          var webinar_data = {
            '_wpnonce': bpZoomMeetingBlock.bp_zoom_webinar_nonce,
            'bp-zoom-webinar-id': webinarId
          };
          Object(_request__WEBPACK_IMPORTED_MODULE_10__["zoomWebinarFetch"])(webinar_data).then(function (response) {
            target.removeAttribute('disabled');
            target.innerHTML = '<i class="bb-icon-l bb-icon-bolt"></i> ' + Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Sync', 'buddyboss-pro');
            wp.data.dispatch('core/notices').createNotice('success', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Webinar Synced.', 'buddyboss-pro'), {
              isDismissible: true
            }); // Set webinar object.

            setWebinarObject(response); // Set webinar form to create.

            setWebinarFormType('create'); // Save the post.

            var editorInfo = wp.data.select('core/editor');

            if (editorInfo.isEditedPostSaveable()) {
              if (!editorInfo.isCurrentPostPublished() && ~['draft', 'auto-draft'].indexOf(editorInfo.getEditedPostAttribute('status'))) {
                wp.data.dispatch('core/editor').autosave();
              } else {
                wp.data.dispatch('core/editor').savePost();
              }
            }
          }).catch(function (error) {
            target.removeAttribute('disabled');
            target.innerHTML = '<i class="bb-icon-l bb-icon-bolt"></i> ' + Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Sync', 'buddyboss-pro');
            wp.data.dispatch('core/notices').createNotice('error', error.error, {
              isDismissible: true
            });
          });
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("i", {
        className: "bb-icon-l bb-icon-bolt"
      }), " ", Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Sync', 'buddyboss-pro')) : '', Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
        label: "",
        type: "hidden",
        value: webinarId
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Title', 'buddyboss-pro'),
        value: title,
        onChange: setTitle
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["BaseControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('When', 'buddyboss-pro'),
        className: "bb-meeting-time-wrap"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("time", {
        dateTime: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_5__["date"])('c', startDate)
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        icon: "edit",
        isTertiary: true,
        isLink: true,
        onClick: function onClick() {
          return setIsPickerOpen(function (_isPickerOpen) {
            return !_isPickerOpen;
          });
        }
      }, moment__WEBPACK_IMPORTED_MODULE_9___default()(startDate).format('MMMM DD, YYYY h:mm a')), isPickerOpen && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Popover"], {
        onClose: setIsPickerOpen.bind(null, false)
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["DateTimePicker"], {
        currentDate: startDate,
        onChange: setStartDate,
        is12Hour: true
      })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Timezone', 'buddyboss-pro'),
        value: timezone,
        options: bpZoomMeetingBlock.timezones,
        onChange: setTimezone,
        className: "bb_inline_selectBox"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Auto Recording', 'buddyboss-pro'),
        value: autoRecording,
        options: auto_recording_options,
        onChange: setAutoRecording,
        className: "bb_inline_selectBox"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["BaseControl"], {
        className: "bb-buttons-wrap"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        className: "submit-meeting",
        isPrimary: true,
        onClick: function onClick(e) {
          var target = e.target;
          target.setAttribute('disabled', true);
          var webinar_data = {
            '_wpnonce': bpZoomMeetingBlock.bp_zoom_webinar_nonce,
            'bp-zoom-webinar-zoom-id': webinarId,
            'bp-zoom-webinar-start-date': startDate,
            'bp-zoom-webinar-timezone': timezone,
            'bp-zoom-webinar-duration': duration,
            'bp-zoom-webinar-password': password,
            'bp-zoom-webinar-recording': autoRecording,
            'bp-zoom-webinar-alt-host-ids': alt_hosts,
            'bp-zoom-webinar-title': title,
            'bp-zoom-webinar-description': description
          };
          webinar_data['bp-zoom-webinar-type'] = 5;

          if (recurring) {
            if (1 === recurrence) {
              if ('date' === end_time_select) {
                webinar_data['bp-zoom-webinar-end-date-time'] = end_date_time;
              } else {
                webinar_data['bp-zoom-webinar-end-times'] = end_times;
              }

              webinar_data['bp-zoom-webinar-recurrence'] = 1;
              webinar_data['bp-zoom-webinar-end-time-select'] = end_time_select;
              webinar_data['bp-zoom-webinar-repeat-interval'] = repeat_interval;
              webinar_data['bp-zoom-webinar-type'] = 9;
            } else if (2 === recurrence) {
              if (weekly_days) {
                webinar_data['bp-zoom-webinar-weekly-days'] = weekly_days;
              }

              if ('date' === end_time_select) {
                webinar_data['bp-zoom-webinar-end-date-time'] = end_date_time;
              } else {
                webinar_data['bp-zoom-webinar-end-times'] = end_times;
              }

              webinar_data['bp-zoom-webinar-recurrence'] = 2;
              webinar_data['bp-zoom-webinar-end-time-select'] = end_time_select;
              webinar_data['bp-zoom-webinar-repeat-interval'] = repeat_interval;
              webinar_data['bp-zoom-webinar-type'] = 9;
            } else if (3 === recurrence) {
              if ('day' === monthly_occurs_on) {
                webinar_data['bp-zoom-webinar-monthly-day'] = monthly_day;
              } else if ('week' === monthly_occurs_on) {
                webinar_data['bp-zoom-webinar-monthly-week'] = monthly_week;
                webinar_data['bp-zoom-webinar-monthly-week-day'] = monthly_week_day;
              }

              if ('date' === end_time_select) {
                webinar_data['bp-zoom-webinar-end-date-time'] = end_date_time;
              } else {
                webinar_data['bp-zoom-webinar-end-times'] = end_times;
              }

              webinar_data['bp-zoom-webinar-recurrence'] = 3;
              webinar_data['bp-zoom-webinar-monthly-occurs-on'] = monthly_occurs_on;
              webinar_data['bp-zoom-webinar-end-time-select'] = end_time_select;
              webinar_data['bp-zoom-webinar-repeat-interval'] = repeat_interval;
              webinar_data['bp-zoom-webinar-type'] = 9;
            } else {
              webinar_data['bp-zoom-webinar-type'] = 6;
            }
          }

          if (registration) {
            webinar_data['bp-zoom-webinar-registration'] = 1;

            if (webinar_data['bp-zoom-webinar-type'] === 8) {
              webinar_data['bp-zoom-webinar-registration-type'] = registration_type;
            }
          }

          if (hostVideo) {
            webinar_data['bp-zoom-webinar-host-video'] = 1;
          }

          if (panelistsVideo) {
            webinar_data['bp-zoom-webinar-panelists-video'] = 1;
          }

          if (onDemand) {
            webinar_data['bp-zoom-webinar-on-demand'] = 1;
          }

          if (authentication) {
            webinar_data['bp-zoom-webinar-authentication'] = 1;
          }
											
          if ( practiceSession ) {
            webinar_data['bp-zoom-webinar-practice-session'] = 1;
          }

          wp.ajax.send('zoom_webinar_block_add', {
            data: webinar_data,
            success: function success(response) {
              if (response.webinar.id) {
                setWebinarId(response.webinar.id);
              }

              if (typeof response.webinar.occurrences !== 'undefined' && response.webinar.occurrences.length) {
                setOccurrences(response.webinar.occurrences);
              }

              target.removeAttribute('disabled');
              wp.data.dispatch('core/notices').createNotice('success', // Can be one of: success, info, warning, error.
              Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Webinar Updated.', 'buddyboss-pro'), // Text string to display.
              {
                isDismissible: true // Whether the user can dismiss the notice.

              });
              setWebinarFormType('create'); //save post if is ok to save

              var editorInfo = wp.data.select('core/editor');

              if (editorInfo.isEditedPostSaveable()) {
                if (!editorInfo.isCurrentPostPublished() && ~['draft', 'auto-draft'].indexOf(editorInfo.getEditedPostAttribute('status'))) {
                  wp.data.dispatch('core/editor').autosave();
                } else {
                  wp.data.dispatch('core/editor').savePost();
                }
              }
            },
            error: function error(_error5) {
              target.removeAttribute('disabled');

              if (typeof _error5.errors !== 'undefined') {
                for (var er in _error5.errors) {
                  wp.data.dispatch('core/notices').createNotice('error', _error5.errors[er].message, // Text string to display.
                  {
                    isDismissible: true // Whether the user can dismiss the notice.

                  });
                }
              } else {
                wp.data.dispatch('core/notices').createNotice('error', // Can be one of: success, info, warning, error.
                _error5.error, // Text string to display.
                {
                  isDismissible: true // Whether the user can dismiss the notice.

                });
              }
            }
          });
        }
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Save Webinar', 'buddyboss-pro')), webinarId < 1 || '' === webinarId ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        isTertiary: true,
        onClick: function onClick() {
          setWebinarFormType('');
        }
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Cancel', 'buddyboss-pro')) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        isDestructive: true,
        onClick: function onClick(e) {
          var target = e.target;

          if (confirm('Are you sure you want to delete this webinar?', 'buddyboss-pro')) {
            target.setAttribute('disabled', true);
            var webinar_data = {
              '_wpnonce': bpZoomMeetingBlock.bp_zoom_webinar_nonce,
              'bp-zoom-webinar-zoom-id': webinarId
            };
            wp.ajax.send('zoom_webinar_block_delete_webinar', {
              data: webinar_data,
              success: function success() {
                wp.data.dispatch('core/block-editor').removeBlock(clientId);
                target.removeAttribute('disabled');
                wp.data.dispatch('core/notices').createNotice('success', // Can be one of: success, info, warning, error.
                Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Webinar Deleted.', 'buddyboss-pro'), // Text string to display.
                {
                  isDismissible: true // Whether the user can dismiss the notice.

                });
                var editorInfo = wp.data.select('core/editor'); // save post if is ok to save

                if (editorInfo.isEditedPostSaveable()) {
                  if (!editorInfo.isCurrentPostPublished() && ~['draft', 'auto-draft'].indexOf(editorInfo.getEditedPostAttribute('status'))) {
                    wp.data.dispatch('core/editor').autosave();
                  } else {
                    wp.data.dispatch('core/editor').savePost();
                  }
                }
              },
              error: function error(_error6) {
                target.removeAttribute('disabled');

                if (typeof _error6.errors !== 'undefined') {
                  for (var er in _error6.errors) {
                    wp.data.dispatch('core/notices').createNotice('error', _error6.errors[er].message, // Text string to display.
                    {
                      isDismissible: true // Whether the user can dismiss the notice.

                    });
                  }
                } else {
                  wp.data.dispatch('core/notices').createNotice('error', // Can be one of: success, info, warning, error.
                  _error6.error, // Text string to display.
                  {
                    isDismissible: true // Whether the user can dismiss the notice.

                  });
                }
              }
            });
          }
        }
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Delete', 'buddyboss-pro'))))) : '', 'create' === webinarFormType ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Settings', 'buddyboss-pro'),
        initialOpen: true
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextareaControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Description (optional)', 'buddyboss-pro'),
        value: description,
        onChange: setDescription
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Passcode (optional)', 'buddyboss-pro'),
        onChange: setPassword,
        value: password
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
        type: "number",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Duration (minutes)', 'buddyboss-pro'),
        onChange: setDuration,
        value: duration
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Default Host', 'buddyboss-pro'),
        type: "text",
        disabled: true,
        value: hostDisplayName
      }), host_user_type == 2 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Alternative Hosts', 'buddyboss-pro'),
        onChange: setAltHosts,
        value: alt_hosts,
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Example: mary@company.com', 'buddyboss-pro'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Entered by email, comma separated. Each email added needs to match with a user in your Zoom account.', 'buddyboss-pro')
      }) : '', Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["CheckboxControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Start video when host joins', 'buddyboss-pro'),
        checked: hostVideo,
        onChange: setHostVideo,
        className: "bb-checkbox-wrap"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["CheckboxControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Start video when panelists join', 'buddyboss-pro'),
        checked: panelistsVideo,
        onChange: setPanelistsVideo,
        className: "bb-checkbox-wrap"
      }), host_user_type == 2 && !private_webinar ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["CheckboxControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Require Registration', 'buddyboss-pro'),
        checked: registration,
        onChange: setRegistration,
        className: "bb-checkbox-wrap"
      }), registration && recurring ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RadioControl"], {
        selected: registration_type,
        options: [{
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Attendees register once and can attend any of the occurrences', 'buddyboss-pro'),
          value: 1
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Attendees need to register for each occurrence to attend', 'buddyboss-pro'),
          value: 2
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Attendees register once and can choose one or more occurrences to attend', 'buddyboss-pro'),
          value: 3
        }],
        onChange: setRegistrationType
      })) : '') : '', Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["CheckboxControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enable practice session', 'buddyboss-pro'),
        checked: practiceSession,
        onChange: setPracticeSession,
        className: "bb-checkbox-wrap"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["CheckboxControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Only authenticated users can join', 'buddyboss-pro'),
        checked: authentication,
        onChange: setAuthentication,
        className: "bb-checkbox-wrap"
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Recurring Options', 'buddyboss-pro'),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["CheckboxControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Recurring Webinar', 'buddyboss-pro'),
        checked: recurring,
        onChange: setRecurring
      }), true === recurring ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Recurrence', 'buddyboss-pro'),
        value: recurrence,
        options: [{
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Daily', 'buddyboss-pro'),
          value: 1
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Weekly', 'buddyboss-pro'),
          value: 2
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Monthly', 'buddyboss-pro'),
          value: 3
        }],
        onChange: setRecurrence
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Repeat every', 'buddyboss-pro'),
        value: repeat_interval,
        options: repeat_interval_options,
        onChange: setRepeatInterval,
        help: repeat_every
      }), 2 === recurrence ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Days', 'buddyboss-pro'),
        value: weekly_days,
        options: [{
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Sunday', 'buddyboss-pro'),
          value: 1
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Monday', 'buddyboss-pro'),
          value: 2
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Tuesday', 'buddyboss-pro'),
          value: 3
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Wednesday', 'buddyboss-pro'),
          value: 4
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Thursday', 'buddyboss-pro'),
          value: 5
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Friday', 'buddyboss-pro'),
          value: 6
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Saturday', 'buddyboss-pro'),
          value: 7
        }],
        onChange: setWeeklyDays,
        multiple: true
      }) : '', 3 === recurrence ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Occures on', 'buddyboss-pro'),
        value: monthly_occurs_on,
        options: [{
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Day of the month', 'buddyboss-pro'),
          value: 'day'
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Week of the month', 'buddyboss-pro'),
          value: 'week'
        }],
        onChange: setMonthlyOccursOn
      }), 'day' === monthly_occurs_on ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Day', 'buddyboss-pro'),
        value: monthly_day,
        options: [{
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('1', 'buddyboss-pro'),
          value: 1
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('2', 'buddyboss-pro'),
          value: 2
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('3', 'buddyboss-pro'),
          value: 3
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('4', 'buddyboss-pro'),
          value: 4
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('5', 'buddyboss-pro'),
          value: 5
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('6', 'buddyboss-pro'),
          value: 6
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('7', 'buddyboss-pro'),
          value: 7
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('8', 'buddyboss-pro'),
          value: 8
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('9', 'buddyboss-pro'),
          value: 9
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('10', 'buddyboss-pro'),
          value: 10
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('11', 'buddyboss-pro'),
          value: 11
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('12', 'buddyboss-pro'),
          value: 12
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('13', 'buddyboss-pro'),
          value: 13
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('14', 'buddyboss-pro'),
          value: 14
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('15', 'buddyboss-pro'),
          value: 15
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('16', 'buddyboss-pro'),
          value: 16
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('17', 'buddyboss-pro'),
          value: 17
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('18', 'buddyboss-pro'),
          value: 18
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('19', 'buddyboss-pro'),
          value: 19
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('20', 'buddyboss-pro'),
          value: 20
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('21', 'buddyboss-pro'),
          value: 21
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('22', 'buddyboss-pro'),
          value: 22
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('23', 'buddyboss-pro'),
          value: 23
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('24', 'buddyboss-pro'),
          value: 24
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('25', 'buddyboss-pro'),
          value: 25
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('26', 'buddyboss-pro'),
          value: 26
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('27', 'buddyboss-pro'),
          value: 27
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('28', 'buddyboss-pro'),
          value: 28
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('29', 'buddyboss-pro'),
          value: 29
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('30', 'buddyboss-pro'),
          value: 30
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('31', 'buddyboss-pro'),
          value: 31
        }],
        onChange: setMonthlyDay,
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('of the month', 'buddyboss-pro')
      }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
        value: monthly_week,
        options: [{
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('First', 'buddyboss-pro'),
          value: 1
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Second', 'buddyboss-pro'),
          value: 2
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Third', 'buddyboss-pro'),
          value: 3
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Fourth', 'buddyboss-pro'),
          value: 4
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Last', 'buddyboss-pro'),
          value: -1
        }],
        onChange: setMonthlyWeek
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
        value: monthly_week_day,
        options: [{
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Sunday', 'buddyboss-pro'),
          value: 1
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Monday', 'buddyboss-pro'),
          value: 2
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Tuesday', 'buddyboss-pro'),
          value: 3
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Wednesday', 'buddyboss-pro'),
          value: 4
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Thursday', 'buddyboss-pro'),
          value: 5
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Friday', 'buddyboss-pro'),
          value: 6
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Saturday', 'buddyboss-pro'),
          value: 7
        }],
        onChange: setMonthlyWeekDay,
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('of the month', 'buddyboss-pro')
      }))) : '', 4 !== recurrence ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('End by', 'buddyboss-pro'),
        value: end_time_select,
        options: [{
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Date', 'buddyboss-pro'),
          value: 'date'
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Occurrences', 'buddyboss-pro'),
          value: 'times'
        }],
        onChange: setEndTimeSelect
      }), 'date' == end_time_select ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("time", {
        dateTime: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_5__["date"])('c', end_date_time)
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        icon: "edit",
        isTertiary: true,
        isLink: true,
        onClick: function onClick() {
          return setIsRecurrencePickerOpen(function (isRecurrencePickerOpen) {
            return !isRecurrencePickerOpen;
          });
        }
      }, moment__WEBPACK_IMPORTED_MODULE_9___default()(end_date_time).format('MMMM DD, YYYY')), isRecurrencePickerOpen && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Popover"], {
        onClose: setIsRecurrencePickerOpen.bind(null, false)
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["DatePicker"], {
        currentDate: end_date_time,
        onChange: setEndDateTime
      }))) : '', 'times' == end_time_select ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('End After', 'buddyboss-pro'),
        value: end_times,
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('occurences', 'buddyboss-pro'),
        options: [{
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('1', 'buddyboss-pro'),
          value: 1
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('2', 'buddyboss-pro'),
          value: 2
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('3', 'buddyboss-pro'),
          value: 3
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('4', 'buddyboss-pro'),
          value: 4
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('5', 'buddyboss-pro'),
          value: 5
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('6', 'buddyboss-pro'),
          value: 6
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('7', 'buddyboss-pro'),
          value: 7
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('8', 'buddyboss-pro'),
          value: 8
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('9', 'buddyboss-pro'),
          value: 9
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('10', 'buddyboss-pro'),
          value: 10
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('11', 'buddyboss-pro'),
          value: 11
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('12', 'buddyboss-pro'),
          value: 12
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('13', 'buddyboss-pro'),
          value: 13
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('14', 'buddyboss-pro'),
          value: 14
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('15', 'buddyboss-pro'),
          value: 15
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('16', 'buddyboss-pro'),
          value: 16
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('17', 'buddyboss-pro'),
          value: 17
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('18', 'buddyboss-pro'),
          value: 18
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('19', 'buddyboss-pro'),
          value: 19
        }, {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('20', 'buddyboss-pro'),
          value: 20
        }],
        onChange: setEndTimes
      }) : '') : '') : ''), true === recurring && occurrences.length ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Occurrences', 'buddyboss-pro'),
        initialOpen: false
      }, occurrences.map(function (occurrence) {
        var nowDate = new Date(bpZoomMeetingBlock.wp_date_time);
        var selectedDate = new Date(occurrence.start_time);

        if (nowDate.getTime() > selectedDate.getTime() || 'deleted' === occurrence.status) {
          return '';
        }

        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
          key: occurrence.occurrence_id
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["__experimentalText"], {
          as: "p"
        }, moment__WEBPACK_IMPORTED_MODULE_9___default()(occurrence.start_time).format('MMMM DD, YYYY h:mm a')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          isLink: true,
          className: "edit-occurrences-button",
          onClick: function onClick() {
            setOccurrenceEdit(true);
            setCurrentOccurrence(occurrence);
          }
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Edit', 'buddyboss-pro')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          isLink: "true",
          className: "edit-occurrences-button",
          onClick: function onClick(e) {
            var target = e.target;

            if (!confirm(bpZoomMeetingBlock.delete_occurrence_confirm_str)) {
              return false;
            }

            target.setAttribute('disabled', true);
            var webinar_data = {
              '_wpnonce': bpZoomMeetingBlock.bp_zoom_webinar_nonce,
              'bp-zoom-webinar-zoom-id': webinarId,
              'bp-zoom-webinar-occurrence-id': occurrence.occurrence_id
            };
            wp.ajax.send('zoom_webinar_block_delete_occurrence', {
              data: webinar_data,
              success: function success() {
                setOccurrences(occurrences.filter(function (obj) {
                  return obj.occurrence_id !== occurrence.occurrence_id;
                }));
                setOccurrenceEdit(false);
                target.removeAttribute('disabled');
                wp.data.dispatch('core/notices').createNotice('success', // Can be one of: success, info, warning, error.
                Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Occurrence Deleted.', 'buddyboss-pro'), // Text string to display.
                {
                  isDismissible: true // Whether the user can dismiss the notice.

                });
                var editorInfo = wp.data.select('core/editor'); // save post if is ok to save

                if (editorInfo.isEditedPostSaveable()) {
                  if (!editorInfo.isCurrentPostPublished() && ~['draft', 'auto-draft'].indexOf(editorInfo.getEditedPostAttribute('status'))) {
                    wp.data.dispatch('core/editor').autosave();
                  } else {
                    wp.data.dispatch('core/editor').savePost();
                  }
                }
              },
              error: function error(_error7) {
                target.removeAttribute('disabled');

                if (typeof _error7.errors !== 'undefined') {
                  for (var er in _error7.errors) {
                    wp.data.dispatch('core/notices').createNotice('error', _error7.errors[er].message, // Text string to display.
                    {
                      isDismissible: true // Whether the user can dismiss the notice.

                    });
                  }
                } else {
                  wp.data.dispatch('core/notices').createNotice('error', // Can be one of: success, info, warning, error.
                  _error7.error, // Text string to display.
                  {
                    isDismissible: true // Whether the user can dismiss the notice.

                  });
                }
              }
            });
          }
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Delete', 'buddyboss-pro')), occurrence_edit && current_occurrence && current_occurrence.occurrence_id === occurrence.occurrence_id ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["DateTimePicker"], {
          is12Hour: true,
          currentDate: current_occurrence_start_time,
          onChange: setOccurrenceStartTime
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
          type: "number",
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Duration (minutes)', 'buddyboss-pro'),
          onChange: setOccurrenceDuration,
          value: current_occurrence_duration
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["BaseControl"], {
          className: "bb-buttons-wrap"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          isPrimary: true,
          className: "submit-meeting",
          onClick: function onClick(e) {
            var target = e.target;
            target.setAttribute('disabled', true);
            var webinar_data = {
              '_wpnonce': bpZoomMeetingBlock.bp_zoom_webinar_nonce,
              'bp-zoom-webinar-zoom-id': webinarId,
              'bp-zoom-webinar-occurrence-id': current_occurrence.occurrence_id,
              'bp-zoom-webinar-start-time': current_occurrence_start_time,
              'bp-zoom-webinar-timezone': timezone,
              'bp-zoom-webinar-duration': current_occurrence_duration,
              'bp-zoom-webinar-recording': autoRecording,
              'bp-zoom-webinar-alt-host-ids': alt_hosts
            };

            if (hostVideo) {
              webinar_data['bp-zoom-webinar-host-video'] = 1;
            }

            if (panelistsVideo) {
              webinar_data['bp-zoom-webinar-panelists-video'] = 1;
            }

            if (practiceSession) {
              webinar_data['bp-zoom-webinar-practice-session'] = 1;
            }

            if (onDemand) {
              webinar_data['bp-zoom-webinar-on-demand'] = 1;
            }

            if (authentication) {
              webinar_data['bp-zoom-webinar-authentication'] = 1;
            }

            wp.ajax.send('zoom_webinar_block_update_occurrence', {
              data: webinar_data,
              success: function success() {
                for (var o_index in occurrences) {
                  if (occurrences[o_index].occurrence_id === current_occurrence.occurrence_id) {
                    occurrences[o_index].duration = current_occurrence_duration;
                    occurrences[o_index].start_time = current_occurrence_start_time;
                    break;
                  }
                }

                setOccurrences(occurrences);
                setOccurrenceEdit(false);
                target.removeAttribute('disabled');
                wp.data.dispatch('core/notices').createNotice('success', // Can be one of: success, info, warning, error.
                Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Webinar Updated.', 'buddyboss-pro'), // Text string to display.
                {
                  isDismissible: true // Whether the user can dismiss the notice.

                });
                var editorInfo = wp.data.select('core/editor'); // save post if is ok to save

                if (editorInfo.isEditedPostSaveable()) {
                  if (!editorInfo.isCurrentPostPublished() && ~['draft', 'auto-draft'].indexOf(editorInfo.getEditedPostAttribute('status'))) {
                    wp.data.dispatch('core/editor').autosave();
                  } else {
                    wp.data.dispatch('core/editor').savePost();
                  }
                }
              },
              error: function error(_error8) {
                target.removeAttribute('disabled');

                if (typeof _error8.errors !== 'undefined') {
                  for (var er in _error8.errors) {
                    wp.data.dispatch('core/notices').createNotice('error', _error8.errors[er].message, // Text string to display.
                    {
                      isDismissible: true // Whether the user can dismiss the notice.

                    });
                  }
                } else {
                  wp.data.dispatch('core/notices').createNotice('error', // Can be one of: success, info, warning, error.
                  _error8.error, // Text string to display.
                  {
                    isDismissible: true // Whether the user can dismiss the notice.

                  });
                }
              }
            });
          }
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Save', 'buddyboss-pro')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          isTertiary: true,
          onClick: function onClick() {
            setOccurrenceEdit(false);
          }
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Cancel', 'buddyboss-pro')))) : '');
      })) : '') : '');
    }
  });
}
/**
 * Get meeting blocks in current editor
 *
 * @return {[]} Array of meeting blocks
 */


var getMeetingBlocks = function getMeetingBlocks() {
  var editorBlocks = wp.data.select('core/block-editor').getBlocks(),
      meetingBlocks = [];
  var i = 0;

  for (i in editorBlocks) {
    if (editorBlocks[i].isValid && editorBlocks[i].name === 'bp-zoom-meeting/create-meeting') {
      meetingBlocks.push(editorBlocks[i]);
    }
  }

  return meetingBlocks;
};
/**
 * Get webinar blocks in current editor
 *
 * @return {[]} Array of webinar blocks
 */

var getWebinarBlocks = function getWebinarBlocks() {
  var editorBlocks = wp.data.select('core/block-editor').getBlocks(),
      webinarBlocks = [];
  var i = 0;

  for (i in editorBlocks) {
    if (editorBlocks[i].isValid && editorBlocks[i].name === 'bp-zoom-meeting/create-webinar') {
      webinarBlocks.push(editorBlocks[i]);
    }
  }

  return webinarBlocks;
};
wp.domReady(function () {
  var postSaveButtonClasses = '.editor-post-publish-button';
  jQuery(document).on('click', postSaveButtonClasses, function (e) {
    e.stopPropagation();
    e.preventDefault();
    var meetingBlocks = getMeetingBlocks();

    if (meetingBlocks.length) {
      for (var i in meetingBlocks) {
        jQuery('#block-' + meetingBlocks[i].clientId).find('.submit-meeting').trigger('click');
      }
    }

    var webinarBlocks = getWebinarBlocks();

    if (webinarBlocks.length) {
      for (var _i5 in webinarBlocks) {
        jQuery('#block-' + webinarBlocks[_i5].clientId).find('.submit-meeting').trigger('click');
      }
    } //wp.data.dispatch( 'core/editor' ).lockPostSaving( 'bpZoomMeetingBlocks' );

  });
}); // const unsubscribe = wp.data.subscribe(function () {
//     let select = wp.data.select('core/editor');
//     var isSavingPost = select.isSavingPost();
//     var isAutosavingPost = select.isAutosavingPost();
//     if (isSavingPost && !isAutosavingPost) {
//         unsubscribe();
//         wp.data.dispatch('core/notices').createNotice(
//             'error', // Can be one of: success, info, warning, error.
//             __( 'Please save the meeting.', 'buddyboss-pro' ), // Text string to display.
//             {
//                 isDismissible: true, // Whether the user can dismiss the notice.
//             }
//         );
//     }
// });

/**
 * A compare helper for lodash's difference by
 */

var compareBlocks = function compareBlocks(block) {
  return block.clientId;
};
/**
 * A change listener for blocks
 *
 * The subscribe on the 'core/editor' getBlocks() function fires on any change,
 * not just additions/removals. Therefore we actually compare the array with a
 * previous state and look for changes in length or uid.
 */


var onBlocksChangeListener = function onBlocksChangeListener(selector, listener) {
  var previousBlocks = selector();
  return function () {
    var selectedBlocks = selector();

    if (selectedBlocks.length !== previousBlocks.length) {
      listener(selectedBlocks, previousBlocks);
      previousBlocks = selectedBlocks;
    } else if (Object(lodash__WEBPACK_IMPORTED_MODULE_8__["differenceBy"])(selectedBlocks, previousBlocks, compareBlocks).length) {
      listener(selectedBlocks, previousBlocks, Object(lodash__WEBPACK_IMPORTED_MODULE_8__["differenceBy"])(selectedBlocks, previousBlocks, compareBlocks));
      previousBlocks = selectedBlocks;
    }
  };
};

var blockEditorLoaded = false;
var blockEditorLoadedInterval = setInterval(function () {
  if (document.getElementById('post-title-0') || document.getElementById('post-title-1')) {
    /*post-title-1 is ID of Post Title Textarea*/
    blockEditorLoaded = true;
    /**
     * Subscribe to block data
     *
     * This function subscribes to block data, compares old and new states upon
     * change and fires actions accordingly.
     */

    wp.data.subscribe(onBlocksChangeListener(wp.data.select('core/block-editor').getBlocks, function (blocks, oldBlocks) {
      var difference = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var addedBlocks = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["differenceBy"])(blocks, oldBlocks, compareBlocks);
      var deletedBlocks = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["differenceBy"])(oldBlocks, blocks, compareBlocks);

      if (oldBlocks.length == blocks.length && difference) {
        // A block has been deleted
        for (var i in deletedBlocks) {
          var block = deletedBlocks[i];
          var actionName = 'blocks.transformed.from.' + Object(lodash__WEBPACK_IMPORTED_MODULE_8__["camelCase"])(block.name);
          Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__["doAction"])(actionName, block);
        } // A block has been added


        for (var i in addedBlocks) {
          var _block = addedBlocks[i];

          var _actionName = 'blocks.transformed.to.' + Object(lodash__WEBPACK_IMPORTED_MODULE_8__["camelCase"])(_block.name);

          Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__["doAction"])(_actionName, _block);
        }
      } // A block has been added


      for (var i in addedBlocks) {
        var _block2 = addedBlocks[i];

        var _actionName2 = 'blocks.added.' + Object(lodash__WEBPACK_IMPORTED_MODULE_8__["camelCase"])(_block2.name);

        Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__["doAction"])(_actionName2, _block2);
      } // A block has been deleted


      for (var i in deletedBlocks) {
        var _block3 = deletedBlocks[i];

        var _actionName3 = 'blocks.removed.' + Object(lodash__WEBPACK_IMPORTED_MODULE_8__["camelCase"])(_block3.name);

        Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__["doAction"])(_actionName3, _block3);
      }
    }));
  }

  if (blockEditorLoaded) {
    clearInterval(blockEditorLoadedInterval);
  }
}, 500);
/**
 * An action listener, which fires the deletion of the metadata
 * once the remove action is seen.
 */

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__["addAction"])('blocks.added.bpZoomMeetingCreateMeeting', 'bpZoomMeetingCreateMeeting/addBlock', function (block) {
  block.attributes.meetingId = '';
  block.attributes.id = '';
});
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__["addAction"])('blocks.added.bpZoomMeetingCreateWebinar', 'bpZoomMeetingCreateWebinar/addBlock', function (block) {
  block.attributes.webinarId = '';
  block.attributes.id = '';
}); // addAction('blocks.removed.bpZoomMeetingCreateMeeting', 'bpZoomMeetingCreateMeeting/removeBlock', ( block ) => {
// 	console.log('remove');
// });

/***/ }),

/***/ "./assets/js/blocks/request.js":
/*!*************************************!*\
  !*** ./assets/js/blocks/request.js ***!
  \*************************************/
/*! exports provided: zoomMeetingFetch, zoomWebinarFetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomMeetingFetch", function() { return zoomMeetingFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomWebinarFetch", function() { return zoomWebinarFetch; });
/**
 * Fetch Zoom Meeting from Zoom API.
 * @param data
 * @returns {Promise}
 */
var zoomMeetingFetch = function zoomMeetingFetch(data) {
  return new Promise(function (resolve, reject) {
    wp.ajax.send('zoom_meeting_sync', {
      data: data,
      success: function success(response) {
        resolve(response);
      },
      error: function error(_error) {
        reject(_error);
      }
    });
  });
};
/**
 * Fetch Zoom Webinar from Zoom API.
 * @param data
 * @returns {Promise}
 */

var zoomWebinarFetch = function zoomWebinarFetch(data) {
  return new Promise(function (resolve, reject) {
    wp.ajax.send('zoom_webinar_sync', {
      data: data,
      success: function success(response) {
        resolve(response);
      },
      error: function error(_error2) {
        reject(_error2);
      }
    });
  });
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/date":
/*!***************************************!*\
  !*** external {"this":["wp","date"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["date"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/hooks":
/*!****************************************!*\
  !*** external {"this":["wp","hooks"]} ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["hooks"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "lodash":
/*!**********************************!*\
  !*** external {"this":"lodash"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ }),

/***/ "moment":
/*!**********************************!*\
  !*** external {"this":"moment"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["moment"]; }());

/***/ })

/******/ });
//# sourceMappingURL=bp-zoom-meeting-block.js.map