module.exports = {
  toggleFullscreen() {
    $(".toggle-fullscreen").on("click", function () {
      const el = document.documentElement;
      $(this).toggleClass("fullscreen")
      if($(this).hasClass("fullscreen")) {
        el.requestFullscreen()
      }
      else {
        document.exitFullscreen()
      }
    })
    
  },
}