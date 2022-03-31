module.exports = {
  toggleSettingsBox() {
    $(".settings-box__close-btn, .settings.icon").on("click", () => {
      $(".settings-box").toggleClass("hide-box")
    })
  },
  changeColors() {
    const themeClasses = [];
    $(".settings-box__option--color").each(function() {
      themeClasses.push($(this).data("theme"));
    })
    
    $(".settings-box__option--color").on("click", function() {
      $("body").removeClass(themeClasses.join(" ")).addClass($(this).data("theme"))
      $(this).addClass("active").siblings().removeClass("active")
    })
  }
}