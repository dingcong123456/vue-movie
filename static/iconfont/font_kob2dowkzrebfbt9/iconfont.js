;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-dianying" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.999975 1023.99995C229.677107 1023.99995 0 794.322844 0 511.999975 0 229.702034 229.677107 0 511.999975 0c282.297941 0 511.999975 229.702034 511.999975 511.999975C1023.99995 794.322844 794.297917 1023.99995 511.999975 1023.99995zM511.999975 77.67244c-239.473406 0-434.352462 194.829202-434.352462 434.327535s194.854129 434.352462 434.352462 434.352462c239.498333 0 434.327535-194.854129 434.327535-434.352462S751.498308 77.67244 511.999975 77.67244zM511.999975 141.709828c-51.947807 0-94.04946 42.076726-94.04946 94.024533s42.101653 94.04946 94.04946 94.04946c51.92288 0 94.024533-42.101653 94.024533-94.04946S563.922855 141.709828 511.999975 141.709828zM511.999975 694.21613c-51.947807 0-94.04946 42.101653-94.04946 94.04946s42.101653 94.04946 94.04946 94.04946c51.92288 0 94.024533-42.101653 94.024533-94.04946S563.922855 694.21613 511.999975 694.21613zM835.178148 331.229585c-25.375656-45.342159-82.632907-61.519763-127.999994-36.169034-45.342159 25.375656-61.54469 82.657834-36.144107 127.999994 25.350729 45.317232 82.60798 61.519763 127.975067 36.144107S860.50395 376.546817 835.178148 331.229585zM352.965903 600.964333c-25.375656-45.342159-82.632907-61.54469-127.999994-36.169034-45.317232 25.350729-61.54469 82.632907-36.169034 127.999994 25.400583 45.342159 82.657834 61.519763 127.999994 36.169034C362.139028 703.588671 378.341559 646.281565 352.965903 600.964333zM224.965909 459.204651c45.342159 25.375656 102.649265 9.173125 127.999994-36.144107 25.375656-45.317232 9.173125-102.624338-36.169034-127.999994-45.317232-25.350729-102.599411-9.173125-127.999994 36.169034C163.446146 376.546817 179.648677 433.828995 224.965909 459.204651zM707.178154 728.964327c45.342159 25.350729 102.624338 9.173125 127.999994-36.169034 25.350729-45.342159 9.173125-102.649265-36.169034-127.999994-45.342159-25.375656-102.624338-9.173125-127.975067 36.169034C645.633464 646.281565 661.835995 703.588671 707.178154 728.964327zM473.687221 580.524217c37.864068 21.187925 85.673998 7.702434 106.836996-30.211488 21.187925-37.839141 7.65258-85.673998-30.186561-106.836996-37.864068-21.187925-85.698925-7.677507-106.861923 30.211488C422.287808 511.526363 435.823153 559.336292 473.687221 580.524217z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo-sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M716.6003 213.800623c-138.851102-138.915088-364.020238-138.915088-502.935326 0s-138.915088 364.084225 0 502.935326a355.573996 355.573996 0 0 0 502.935326 0 355.573996 355.573996 0 0 0 0-502.935326z m-580.359212 580.359212a465.183184 465.183184 0 1 1 657.783099 0 465.183184 465.183184 0 0 1-657.783099 0z m868.939152 211.156054a63.474789 63.474789 0 0 1-89.837303 0l-89.773316-89.837303a63.410803 63.410803 0 1 1 89.773316-89.773316l89.837303 89.773316a63.346816 63.346816 0 0 1 0 89.837303z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)