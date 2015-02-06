Polymer
  open: false

  ready: ->
    # HACK
    @eventWaiting = false
    document.addEventListener 'click', (e) =>
      @eventWaiting = true
      @async =>
        if @eventWaiting
          @open = false
          @$.container.classList.toggle 'show', @open
          return
      , 0
      return

    return

  onSearchTap: (e) ->
    @open = !@open
    @$.container.classList.toggle 'show', @open

    if @open
      @$.input.focus()

    return

  onContainerTap: (e) ->
    @eventWaiting = false
    return
