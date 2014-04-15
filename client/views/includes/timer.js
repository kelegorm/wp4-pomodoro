/**
 * Created by Dmitry on 08/04/14.
 */

Template.timer.rendered = function () {
    PomodoroTimer.run(this);
};

Template.timer.destroyed = function () {
    PomodoroTimer.unbind(this);
};

Template.timer.helpers({
    timerType: function () {
        return Session.get('timerType');
    }, //or break
    currentTime: function () {
        return Session.get('currentTime');
    }
});

Template.timer.events({
    'click .start': function (event) {
        event.preventDefault();

        Pomodoros.insert({started: new Date()});
    }
});