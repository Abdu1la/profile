$(".puzzleWrap").hide();
$(".Hint1").hide();
$(".Hint2").hide();
$(".puzzleEight").hide();
let count = 0;
let userAnswer = [];
let theAnswer = ['A', 'B', 'D', 'U', 'L', 'L', 'A', 'H'];

$(".answer.yes").click(function() {
  $(".puzzleWrap").show();
  $(".puzzleHintUnderline").addClass("Underline");
  $(".puzzleEight").addClass("Eight");
  $(".puzzleEight").show();
  setTimeout(function() {
           $(".Hint1").show();
        }, 5000);
  setTimeout(function() {
           $(".Hint2").show();
        }, 15000);
 
  $("span").click(function() {

    let clickedWord = $(this).text();
    let result;
    let c;
    let d = true;
    clickedWord = clickedWord.toUpperCase();
    userAnswer[count] = clickedWord;
    $(".A" + count).text(clickedWord);
    count = count + 1;
    // console.log(userAnswer);
    if (userAnswer.length === theAnswer.length) {
      for (let i = 0; i < userAnswer.length; i++) {
        result = userAnswer[i] == theAnswer[i];
        c = result && d;
        d = c;


      }
      // console.log(d);
      if (c === false) {
        count = 0;
        userAnswer = [];
        $(".puzzleWrap").addClass("apply-shake");
        $(".puzzle").text("?");
        setTimeout(function() {
          $(".puzzleWrap").removeClass("apply-shake");
        }, 1000);

      }

      if (c === true) {
        $(".Hint1").hide();
        $(".Hint2").hide();
        $(".puzzleHintQ").text("is an Introvert.");
        $(".puzzleHintQ").addClass("large");
        setTimeout(function() {
          $(".miniGame").hide();
        }, 5000);

      }

    }
  });

});


$(".answer.no").click(function() {
  $(".miniGame").hide();
  $(".puzzleEight").hide();
  $(".puzzleHintUnderline").removeClass("Underline");
});

(function() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fade-in-element');
        element.classList.remove('hidden');
      }
    }


  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();

window.addEventListener('scroll', function(){
  let footer = document.querySelector('footer');
  windowHeight = window.innerHeight;
  var positionFromTop = footer.getBoundingClientRect().top;

  if (positionFromTop - windowHeight <= 0) {
    $("footer").addClass("active");
  }

});

// window.addEventListener("scroll", reveal);
//
// function reveal() {
//   var reveals = $("footer");
//
//   for (var i = 0; i < reveals.length; i++) {
//     var windowheight = window.innerHeight;
//     var revealtop = reveals[i].getBoundingClientRect().top;
//     var revealpoint = 150;
//
//     if (revealtop < windowheight - revealpoint) {
//       reveals[i].classList.add('active');
//     } else {
//       reveals[i].classList.remove('active');
//     }
//   }
// }
