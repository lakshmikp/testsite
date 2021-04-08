$(function () {
  var includes = $('[content-include]')
  $.each(includes, function () {
    var file = $(this).data('include')
    $(this).load(file)
  })
})
