requirejs.config {
  paths: {
    requireLib: '../../components/requirejs/require',
    hljs: 'vendor/highlight.pack',
    highlightjs: '../../components/highlightjs/highlight.pack',
    jquery: '../../components/jquery/jquery'
  }
}

requirejs ['highlight']
