define ['hljs'], (hljs) ->
  elements = document.getElementsByTagName('pre')

  hljs.highlightBlock(element, '    ') for element in elements

  @