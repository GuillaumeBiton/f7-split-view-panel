<template lang='pug'>
#app
  // Status bar overlay for fullscreen mode
  f7-statusbar

  // Right panel with cover effect
  f7-panel(right, reveal)
    f7-block
      p Right panel content goes here

  // Left panel with reveal effect
  f7-panel(left cover)
    // Left view
    f7-view.view-left(navbar-through, :dynamic-navbar='true')
      f7-navbar
        f7-nav-center(sliding) Left View
      f7-pages
        f7-page(name='index-left')
          f7-block-title Left View Links
          f7-list
            f7-list-item(title='Left Page 1', link='/left-page-1/')
            f7-list-item(title='Left Page 2', link='/left-page-2/')

          f7-block-title Control Main View
          f7-list
            f7-list-item(title='About', link='/about/', link-view='.view-main', link-close-panel)
            f7-list-item(title='Services', link='/services/', link-view='.view-main', link-close-panel)
            f7-list-item(title='Back in history', link='#', link-close-panel, @click='$f7.mainView.router.back()')
              
  // Views
  f7-views
    // Right view, it is main view
    f7-view(main, navbar-through, :dynamic-navbar='true')
      f7-navbar
        f7-nav-center(sliding) Main View
        f7-nav-right
          f7-link(icon='icon-bars', open-panel='left')
      // Pages
      f7-pages
        // Page, data-page contains page name
        f7-page(name='index-1')
          // Scrollable page content
          f7-block-title Hello
          f7-block(inner)
            p This is an example of split view application layout where left view degrades to panel on narrow screens (iPad portrait and iPhone). It behaves like default Mail app on iOS 7.
            p Each view may have different layout, different navbar type (dynamic, fixed or static) or without navbar. You can easily control one view from another without any line of JavaScript just using "data-view" attribute on links.
            p Additional right panel is also available: 
              f7-link(open-panel='right') right panel
          f7-list
            f7-list-item(title='About', link='/about/') 
            f7-list-item(title='Services', link='/services/')
///
</template>

<script>
export default {
  name: 'app'
}
</script>

<style src='framework7/dist/css/framework7.ios.css'></style>
<style src='framework7/dist/css/framework7.ios.colors.css'></style>
<style lang="sass?indentedSyntax">
  $panel-width: 320px
  $toolbar-size: 44px
  
  /* set border between views */
  .view-left
    border-right: 1px solid #b2b2b2
  
  /* This will fix flicker navbar in left panel view */
  .panel-left .page-content
    padding: 0
  
  /* this fix navbar-through on left panel view */
  .panel-left .page
    margin-top: $toolbar-size
    padding-bottom: $toolbar-size
  .panel-left .navbar
    position: relative
    margin-bottom: -$toolbar-size
  
  /* fixing panel width */
  .panel.panel-left.panel-cover
    width: $panel-width
    left: -$panel-width
  body.with-panel-left-cover .panel-left
    transform: translate3d($panel-width, 0, 0)
  
  /* iPad Landscape Mode */
  @media("min-width: 769px")
    body .panel.panel-left.panel-cover
      left: 0
      width: $panel-width
      display: block
    .view-main
      float: right
      width: calc(100% - #{$panel-width})
    .view-main .navbar .open-panel
      display: none
</style>