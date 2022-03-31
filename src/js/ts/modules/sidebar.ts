module.exports =  {
  toggleBtn() {
    $(".toggle-sidebar").on("click" , () => {
      $(".page__content, .page__sidebar").toggleClass("no-sidebar")
    })
  },
  toggleSubMenu() {
    $(".page__sidebar-nav--links > li.has-sub-menu").on("click", function(e) {
      if(e.target.parentElement.closest(".page__sidebar-nav--sublinks")) {
        return
      }
      $(this).toggleClass("active")
      $(this).find(".page__sidebar-nav--sublinks").slideToggle(300);
    })
  }
}