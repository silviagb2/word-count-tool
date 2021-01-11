$(document).ready(function(){
    $("#btn").click(function(){
        var str = $('#str').val().split('')
        console.log(str.length)

        var output = $("#output")
        output.text(str.length)
      });
  });