/**
 * Created by Dmitry on 08/04/14.
 */

Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function () {
    this.route('pomodoro', {
        path: '/'
    });
});