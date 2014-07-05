$(document).ready(function(){

  function goTo(slide){
    el = "#" + slide
    $(el).on("click", function(){
      $("li[data-slidr-breadcrumbs='" + slide + "']").click()
    })
  }

  goTo("one")
  goTo("two")
  goTo("three")
  goTo("four")
  goTo("five")


  var slide = slidr.create('slidr-div', {
          before: function(e){
            var step = "#" + e.in.slidr
            var nav = $(".step", ".nav")
            $(nav).removeClass("active")
            $(step).addClass("active")
          },
          after: function(e){
            var slide = ".slide-" + e.in.slidr
            var amount = ".ind_cost-" + e.in.slidr
            var footnote = ".footnote-" + e.in.slidr
            var addedCost = $(slide).data().money
            $(amount).addClass("bigger")
            $(footnote).addClass("opacity")

            function addCost(){
              if (e.in.slidr === "five"){
                setTimeout($(".arrow").addClass("animated flash"), 3000)
                $("#cost").hide().html("$" + addedCost).fadeIn("slow")
              }else{
                $("#cost").hide().html("$" + addedCost).fadeIn("slow")}
              }

            setTimeout(addCost, 2000)
          },
          breadcrumbs: false,
          controls: "border",
          direction: "h",
          fade: true,
          keyboard: true,
          touch: true,
          timing: { 'fade': '0.5s ease-in' },
          transition: "fade"
        });

  slide.add('h', ["one", "two", "three", "four", "five"]);

  slide.start()

  if (Modernizr.touch){
    $(".slidr-control.left, .slidr-control.right").hide()
  }

  $(".last").on("scroll", function(){
    $(".scrollOut").fadeOut(1000)
    $(".scrollIn").fadeIn(1000)
    $(".scrollOut").css("height", "0")
  })

})
