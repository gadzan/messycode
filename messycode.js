$input.text({
  type: $kbType.search,
  placeholder: "请输入文字",
  text: "",
  handler: function(text) {
    $http.get({
      url: "https://raw.githubusercontent.com/gadzan/messycode/master/messycode.json",
      handler: function(resp) {
        var chaos = resp.data.replace(/\"/g, "")
        $clipboard.text = text + chaos
        $ui.toast("已复制到剪贴板")
      }
    })
  }
})
