/**
 * Created by Dmitry on 13/04/14.
 */

PomodoroTimer = function () {
    var _target;
    var _intervalId = null;

    var run = function (target) {
        _target = target;
        if (_intervalId === null) {
            _intervalId = Meteor.setInterval(tick, 1000);
        }
    };

    var unbind = function (target) {
        if (target === _target) {
            _target = null;
        }
    };

    var getLastTime = function (date) {
        var endTime = new Date(date);
        endTime.setTime(endTime.getTime() + 25 * 60000);

        var seconds = moment().diff(endTime, 'seconds');
        var minutes = ~~(seconds / 60);

        return  + minutes + ':' + Math.abs(seconds % 60);
    };

    var tick = function () {
        var pomodoro = currentPomodoro();

        console.log(pomodoro);

        var timerType = (pomodoro)?'pomodoro':'break';
        var currentTime = (pomodoro)?getLastTime(pomodoro.started):'--';

        Session.set('timerType', timerType);
        Session.set('currentTime', currentTime);
    };

    var currentPomodoro = function () {
        var pomodoro = Pomodoros.findOne({}, {sort: {started: -1}});

        if (pomodoro) {
            var finishTime = pomodoro.started.getTime() + 25 * 60000;
            if (finishTime < new Date().getTime()) {
                pomodoro = null;
            }
        }

        return pomodoro;
    };

    return {
        run: run,
        unbind: unbind
    };
}();