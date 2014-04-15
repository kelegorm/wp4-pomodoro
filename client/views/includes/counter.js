/**
 * Created by Dmitry on 08/04/14.
 */

Template.counter.helpers({
    todayCount: function () {
        var today = new Date();
        today.setHours(0, 0, 0);
        return Pomodoros.find({started:{$gt: today}}).count();
    }
});