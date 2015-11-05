(function(angular,app) {
    'use strict';

    app.service('KeyboardService', KeyboardService);

    KeyboardService.$inject = ['$document'];

    function KeyboardService($document) {
        var RIGHT = 'right',
            LEFT  = 'left',
            SPACE = 'space';

        var keyboardMap = {
            37: LEFT,
            39: RIGHT,
            32: SPACE
        };

        this.init = function() {
            var self = this;
            this.keyEventHandlers = [];
            $document.unbind('keyup');
            $document.bind('keyup', function(event) {
                var key = keyboardMap[event.which];

                if (key) {
                    event.preventDefault();
                    self._handleKeyEvent(key,event);
                }
            });
        };

        this.on = function(cb) {
            this.keyEventHandlers.push(cb);
        };

        this._handleKeyEvent = function(key,event) {
            var callbacks = this.keyEventHandlers;
            if (!callbacks) {
                return;
            } else {
                event.preventDefault();
                for(var i=0; i<callbacks.length;i++) {
                    var cb = callbacks[i];
                    cb(key,event);
                }

            }
        }

    }

})(angular,keyboardPage);
