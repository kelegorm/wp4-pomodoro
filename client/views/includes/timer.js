/**
 * Created by Dmitry on 08/04/14.
 */

Template.timer.helpers({
    currentTimerName: 'pomodoro',
    currentTimer: function () {
        return '' + new Date().getMinutes() + ':' + new Date().getSeconds();
    }

});