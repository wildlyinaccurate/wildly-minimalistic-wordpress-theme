requirejs.config {
  paths: {
    requireLib: '../../components/requirejs/require',
    hljs: 'vendor/highlight.pack',
    highlightjs: '../../components/highlightjs/highlight.pack'
  }
}

requirejs ['highlight']
