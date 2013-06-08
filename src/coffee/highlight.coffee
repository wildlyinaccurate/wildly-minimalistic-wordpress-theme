define ['jquery', 'hljs'], ($, hljs) ->
  hljs.tabReplace = '    ';

  $('pre, code').each (index, element) ->
    console.log element, this
    hljs.highlightBlock(element);
