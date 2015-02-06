(function() {
  Polymer({
    open: false,
    ready: function() {
      this.eventWaiting = false;
      document.addEventListener('click', (function(_this) {
        return function(e) {
          _this.eventWaiting = true;
          _this.async(function() {
            if (_this.eventWaiting) {
              _this.open = false;
              _this.$.container.classList.toggle('show', _this.open);
            }
          }, 0);
        };
      })(this));
    },
    onSearchTap: function(e) {
      this.open = !this.open;
      this.$.container.classList.toggle('show', this.open);
      if (this.open) {
        this.$.input.focus();
      }
    },
    onContainerTap: function(e) {
      this.eventWaiting = false;
    }
  });

}).call(this);
