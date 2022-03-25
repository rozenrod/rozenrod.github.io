const CACHE = 'cache-only-v1';

// При установке воркера мы должны закешировать часть данных (статику).
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
				'index.html',
				'/css/align_buttons.css',
				'/css/app.css',
				'/css/base.css',
				'/css/button.css',
				'/css/color-tool.css',
				'/css/context-menu.css',
				'/css/darkmode.css',
				'/css/dialog.css',
				'/css/draginput.css',
				'/css/dropdown.css',
				'/css/fonts.css',
				'/css/jgraduate.css',
				'/css/jpicker.css',
				'/css/keyboard.css',
				'/css/loading.css',
				'/css/menu.css',
				'/css/method-draw.css',
				'/css/modal.css',
				'/css/palette.css',
				'/css/panel.css',
				'/css/rulers.css',
				'/css/select.css',
				'/css/shapelib.css',
				'/css/source.css',
				'/css/sponsors.css',
				'/css/text.css',
				'/css/tools.css',
				'/css/zoom-dropdown.css',
				'/extensions/ext-shapes.xml',
				'/images/mappoint.gif',
				'/images/AlphaBar.png',
				'/images/bar-opacity.png',
				'/images/Bars.png',
				'/images/drag.png',
				'/images/dragging.png',
				'/images/eyedropper.png',
				'/images/logo.png',
				'/images/map-opacity.png',
				'/images/mappoint_c.png',
				'/images/mappoint_f.png',
				'/images/Maps.png',
				'/images/pencil_cursor.png',
				'/images/preview-opacity.png',
				'/images/rotate.png',
				'/images/eyedropper.svg',
				'/images/favicon.svg',
				'/images/NoColor.svg',
				'/images/placeholder.svg',
				'/images/rangearrows.svg',
				'/images/rangearrows2.svg',
				'/js/browser.js',
				'/js/Canvas.js',
				'/js/ContextMenu.js',
				'/js/dao.js',
				'/js/Darkmode.js',
				'/js/dialog.js',
				'/js/dragupload.js',
				'/js/draw.js',
				'/js/editor.js',
				'/js/exportHandler.js',
				'/js/eyedropper.js',
				'/js/fonts.js',
				'/js/grid.js',
				'/js/history.js',
				'/js/Image.js',
				'/js/Import.js',
				'/js/jquery.attr.js',
				'/js/Keyboard.js',
				'/js/loading.js',
				'/js/math.js',
				'/js/Menu.js',
				'/js/method-draw.js',
				'/js/Modal.js',
				'/js/modalbackup.js',
				'/js/modals.js',
				'/js/PaintBox.js',
				'/js/Palette.js',
				'/js/Pan.js',
				'/js/Panel.js',
				'/js/paste.js',
				'/js/path.js',
				'/js/Rulers.js',
				'/js/sanitize.js',
				'/js/select.js',
				'/js/selectedChanged.js',
				'/js/Shapelib.js',
				'/js/shapes.js',
				'/js/start.js',
				'/js/state.js',
				'/js/svgcanvas.js',
				'/js/svgtransformlist.js',
				'/js/svgutils.js',
				'/js/Text.js',
				'/js/Textonpath.js',
				'/js/Title.js',
				'/js/Toolbar.js',
				'/js/translate.js',
				'/js/units.js',
				'/js/utils.js',
				'/js/Zoom.js',
				'/js/lib/canvg.js',
				'/js/lib/contextmenu.js',
				'/js/lib/css.min.js',
				'/js/lib/filesaver.js',
				'/js/lib/jpicker.min.js',
				'/js/lib/jquery.contextMenu.js',
				'/js/lib/jquery.hotkeys.min.js',
				'/js/lib/jquery.jgraduate.js',
				'/js/lib/jquery-3.5.1.min.js',
				'/js/lib/jquery-draginput.js',
				'/js/lib/jquery-ui-1.8.17.custom.min.js',
				'/js/lib/mousewheel.js',
				'/js/lib/pathseg.js',
				'/js/lib/requestanimationframe.js',
				'/js/lib/rgbcolor.js',
				'/js/lib/taphold.js',
				'/js/lib/touch.js',
				'/js/shapelib/arrow.json',
				'/js/shapelib/dialog_balloon.json',
				'/js/shapelib/flowchart.json',
				'/js/shapelib/game.json',
				'/js/shapelib/math.json',
				'/js/shapelib/music.json',
				'/js/shapelib/nature.json',
				'/js/shapelib/object.json',
				'/js/shapelib/social.json',
				'/js/shapelib/symbol.json',
				'/js/shapelib/ui.json',
				'/js/shapelib/weather.json',
				'/shapelib/arrow.json',
				'/shapelib/dialog_balloon.json',
				'/shapelib/flowchart.json',
				'/shapelib/game.json',
				'/shapelib/math.json',
				'/shapelib/music.json',
				'/shapelib/nature.json',
				'/shapelib/object.json',
				'/shapelib/social.json',
				'/shapelib/symbol.json',
				'/shapelib/ui.json',
				'/shapelib/weather.json',
				'/shapelib/raphael.txt',

      ]);
    })
  );
});

self.addEventListener('activate', (event) => {
	console.log('Активирован');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
  );
});