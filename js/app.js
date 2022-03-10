var bill = 0;
var tip = 5;
var people = 0;
var tipAmount = 0;
var totalAmount = 0;

$(".calculator__input").on("input", function(){
    var id = $(this).attr("id");
    var value = $("#" + id).val();
    eval(id + " = " + value);
    calculateTip();
})

$(".calculator__keypad > .calculator__key:not(:last-child)").click(function(){
    var tipValue = $(this).text();
    tip = Number(tipValue.substr(0,tipValue.length-1));
    $(".current-tip").removeClass("current-tip");
    $(this).addClass("current-tip");
    calculateTip();
})

$(".calculator__key--custom").on("input", function(){
    $(".current-tip").removeClass("current-tip");
    var tipValue = $(this).val();
    tip = Number(tipValue);
    $(".calculator__key--custom").css("border", "1px solid hsl(172, 67%, 45%)");
    calculateTip();
})

function calculateTip() {
    if ( people == 0){
        $(".warning").css("display", "inline-block");
    } else  {
        tipAmount = Number((tip / 100) * bill).toFixed(2);
        totalAmount = Number(tipAmount * people).toFixed(2);

        $(".tip-amount").text(tipAmount);
        $(".total-amount").text(totalAmount);
        $(".warning").css("display", "none");
    }
}

$(".calculator__key--reset").click(function(){
    location.reload();
})