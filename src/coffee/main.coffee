requirejs.config {
  paths: {
    hljs: 'vendor/highlight.pack',
    highlightjs: '../../components/highlightjs/highlight.pack',
    jquery: '../../components/jquery/jquery'
  }
}

requirejs ['highlight']
