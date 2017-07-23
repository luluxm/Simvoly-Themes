;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-diannao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M960 64l-896 0c-26.528 0-48 21.472-48 48l0 640c0 26.496 21.472 48 48 48l304 0 0 80-64 64 0 16 416 0 0-16-64-64 0-80 304 0c26.496 0 48-21.504 48-48l0-640c0-26.528-21.504-48-48-48zM944 672l-864 0 0-544 864 0 0 544z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M682.667008 47.65184 341.984256 47.65184c-42.635264 0-77.44 34.884608-77.44 77.436928l0 774.513664c0 42.59328 34.804736 77.44 77.44 77.44l340.682752 0c42.597376 0 77.441024-34.84672 77.441024-77.44L760.108032 125.087744C760.108032 82.536448 725.264384 47.65184 682.667008 47.65184zM465.854464 109.584384l92.944384 0c8.556544 0 15.545344 6.946816 15.545344 15.504384 0 8.602624-6.987776 15.504384-15.545344 15.504384l-92.944384 0c-8.51968 0-15.422464-6.90176-15.422464-15.504384C450.432 116.5312 457.33376 109.584384 465.854464 109.584384zM512.285696 946.034688c-25.637888 0-46.470144-20.754432-46.470144-46.43328s20.832256-46.512128 46.470144-46.512128c25.757696 0 46.512128 20.83328 46.512128 46.512128S538.044416 946.034688 512.285696 946.034688zM729.220096 822.162432 295.552 822.162432 295.552 202.528768l433.668096 0L729.220096 822.162432z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-pad" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M796.224 64 227.776 64C186.752 64 153.216 97.536 153.216 138.56l0 745.472c0 40.96 33.536 76.032 74.56 76.032l568.512 0c41.024 0 74.56-35.072 74.56-76.032L870.848 138.56C870.784 97.536 837.248 64 796.224 64M504.448 928.704c-24.768 0-44.736-19.968-44.736-44.672 0-24.768 19.968-44.736 44.736-44.736 24.704 0 44.736 19.968 44.736 44.736C549.184 908.672 529.152 928.704 504.448 928.704M817.152 798.912 206.912 798.912 206.912 117.44l610.176 0L817.088 798.912z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-category" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M134.095238 256C147.560466 256 158.476191 246.448741 158.476191 234.666667 158.476191 222.884592 147.560466 213.333333 134.095238 213.333333L36.571428 213.333333C23.1062 213.333333 12.190476 222.884592 12.190476 234.666667 12.190476 246.448741 23.1062 256 36.571428 256L134.095238 256Z"  ></path>' +
    '' +
    '<path d="M134.095238 533.333333C147.560466 533.333333 158.476191 523.782074 158.476191 512 158.476191 500.217926 147.560466 490.666667 134.095238 490.666667L36.571428 490.666667C23.1062 490.666667 12.190476 500.217926 12.190476 512 12.190476 523.782074 23.1062 533.333333 36.571428 533.333333L134.095238 533.333333Z"  ></path>' +
    '' +
    '<path d="M134.095238 810.666667C147.560466 810.666667 158.476191 801.115407 158.476191 789.333333 158.476191 777.55126 147.560466 768 134.095238 768L36.571428 768C23.1062 768 12.190476 777.55126 12.190476 789.333333 12.190476 801.115407 23.1062 810.666667 36.571428 810.666667L134.095238 810.666667Z"  ></path>' +
    '' +
    '<path d="M987.428572 256C1000.893801 256 1011.809523 246.448741 1011.809523 234.666667 1011.809523 222.884592 1000.893801 213.333333 987.428572 213.333333L280.380951 213.333333C266.915725 213.333333 256 222.884592 256 234.666667 256 246.448741 266.915725 256 280.380951 256L987.428572 256Z"  ></path>' +
    '' +
    '<path d="M993.52381 533.333333C1006.989037 533.333333 1017.904762 523.782074 1017.904762 512 1017.904762 500.217926 1006.989037 490.666667 993.52381 490.666667L286.47619 490.666667C273.010963 490.666667 262.095238 500.217926 262.095238 512 262.095238 523.782074 273.010963 533.333333 286.47619 533.333333L993.52381 533.333333Z"  ></path>' +
    '' +
    '<path d="M996.571428 810.666667C1010.036657 810.666667 1020.952382 801.115407 1020.952382 789.333333 1020.952382 777.55126 1010.036657 768 996.571428 768L289.52381 768C276.058581 768 265.142857 777.55126 265.142857 789.333333 265.142857 801.115407 276.058581 810.666667 289.52381 810.666667L996.571428 810.666667Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-close" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M176.661601 817.172881C168.472798 825.644055 168.701706 839.149636 177.172881 847.338438 185.644056 855.527241 199.149636 855.298332 207.338438 846.827157L826.005105 206.827157C834.193907 198.355983 833.964998 184.850403 825.493824 176.661601 817.02265 168.472798 803.517069 168.701706 795.328267 177.172881L176.661601 817.172881Z"  ></path>' +
    '' +
    '<path d="M795.328267 846.827157C803.517069 855.298332 817.02265 855.527241 825.493824 847.338438 833.964998 839.149636 834.193907 825.644055 826.005105 817.172881L207.338438 177.172881C199.149636 168.701706 185.644056 168.472798 177.172881 176.661601 168.701706 184.850403 168.472798 198.355983 176.661601 206.827157L795.328267 846.827157Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-link" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M331.502964 331.496564c-11.110365 11.110365-11.110365 29.107109 0 40.191874l321.816594 321.790994c11.110365 11.161565 29.107109 11.110365 40.191874 0.0256 11.110365-11.110365 11.110365-29.081509 0-40.191874L371.720439 331.496564C360.610073 320.411799 342.61333 320.411799 331.502964 331.496564z"  ></path>' +
    '' +
    '<path d="M96.2141 59.958213 59.990213 96.2077c-79.97415 79.97415-79.99975 209.637745 0 289.611895l126.719604 126.719604c62.668604 62.719804 155.749913 75.878163 231.602476 40.243074 0.281599-0.128 0.537598-0.230399 0.844797-0.332799 0.537598-0.255999 1.177596-0.486398 1.715195-0.742398-0.0512-0.128 0.0512 0.128 0 0 2.713592-1.356796 5.171184-3.07199 7.449577-5.350383 11.238365-11.238365 11.238365-29.491108 0-40.755073-9.036772-9.011172-22.24633-10.598367-33.049497-5.171184-0.0512-0.1536 0.0768 0.1536 0 0-56.575823 25.72792-125.849207 15.180753-172.364261-31.359902L103.433277 349.621308c-59.980613-60.006212-59.980613-157.234709 0-217.215321L132.386787 103.426877c59.980613-59.980613 157.234709-59.955013 217.215321 0l119.474827 119.474827c47.283052 47.257452 57.292621 117.810832 30.131106 174.847454 0 0 0.0256-0.0256 0 0-0.0768 0.204799 0.1024-0.204799 0 0 0.0512 0.0256-0.0256-0.0256 0 0-3.839988 10.239968-2.227193 22.707129 6.015981 30.950303 11.238365 11.238365 29.491108 11.263965 40.755073 0 2.303993-2.303993 4.377586-4.915185 5.759982-7.679976 0.1536 0.0256-0.179199-0.0256 0 0 37.196684-76.313361 24.217524-170.905066-39.167878-234.316068l-126.719604-126.719604C305.851844-19.990337 176.16265-19.990337 96.2141 59.958213z"  ></path>' +
    '' +
    '<path d="M963.411389 927.155503l-36.249487 36.223887c-79.97415 79.97415-209.637745 79.97415-289.611895-0.0256l-126.719604-126.694004c-62.668604-62.668604-75.878163-155.775513-40.217474-231.602476 0.128-0.281599 0.230399-0.537598 0.332799-0.844797 0.255999-0.537598 0.511998-1.203196 0.742398-1.715195 0.128 0.0512-0.128-0.0512 0 0 1.356796-2.713592 3.07199-5.171184 5.350383-7.449577 11.238365-11.238365 29.491108-11.238365 40.780673 0 8.985572 9.011172 10.572767 22.220731 5.119984 33.049497 0.179199 0.0768-0.128-0.0768 0 0-25.72792 56.601423-15.155153 125.823607 31.385502 172.364261l119.474827 119.449227c60.006212 60.006212 157.234709 60.006212 217.215321 0l28.95351-28.95351c60.006212-60.006212 59.980613-157.234709 0-217.189721l-119.449227-119.474827c-47.283052-47.257452-117.810832-57.292621-174.847454-30.131106-0.0256 0 0.0256 0 0 0-0.204799 0.128 0.230399-0.0768 0 0-0.0256 0 0.0256 0.0256 0 0-10.239968 3.865588-22.707129 2.252793-30.950303-6.015981-11.238365-11.263965-11.238365-29.491108-0.0256-40.755073 2.303993-2.278393 4.889585-4.351986 7.705576-5.734382-0.0256-0.128 0.0256 0.179199 0 0 76.313361-37.222284 170.905066-24.217524 234.290468 39.167878l126.719604 126.719604C1043.359939 717.492158 1043.359939 847.181353 963.411389 927.155503z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-move" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M501.0944 1021.824c6.9376 2.8928 14.8224 2.8928 21.8112 0 3.4304-1.4336 6.528-3.4816 9.1136-6.0672 0.0256 0 0.0768-0.0256 0.0768-0.0256l158.9248-158.9248c11.1104-11.1104 11.1104-29.1328 0-40.2176-11.0848-11.0848-29.0816-11.0848-40.1664 0.0256l-110.4384 110.4128 0.0256-335.36c0-15.6928-12.7232-28.416-28.416-28.416s-28.416 12.6976-28.416 28.3904l0 335.3856-110.4128-110.4128c-11.1104-11.0848-29.1072-11.0848-40.1408 0-11.1104 11.1104-11.136 29.1072-0.0512 40.192l158.9504 158.9248c0.8192 0.8192 1.8944 1.1776 2.816 1.8688C496.7168 1019.1872 498.688 1020.8256 501.0944 1021.824z"  ></path>' +
    '' +
    '<path d="M522.9056 2.176c-6.9376-2.8928-14.8224-2.8928-21.7856 0C497.6896 3.584 494.592 5.632 491.9808 8.2176c-0.0256 0-0.0768 0.0512-0.0768 0.0512L332.9792 167.168c-11.1104 11.1104-11.1104 29.1328 0 40.2176 11.0848 11.0848 29.0816 11.0848 40.1664-0.0256l110.4384-110.4128-0.0256 335.36c0 15.6928 12.7232 28.416 28.416 28.416 15.6928 0 28.4416-12.6976 28.4416-28.3904L540.416 96.9472l110.4128 110.4128c11.1104 11.0848 29.1072 11.0848 40.1408 0 11.1104-11.1104 11.1616-29.1072 0.0512-40.192l-158.9504-158.8992c-0.8192-0.8448-1.8944-1.2032-2.816-1.8944C527.2832 4.8128 525.312 3.1744 522.9056 2.176z"  ></path>' +
    '' +
    '<path d="M1021.824 522.9056c2.8928-6.9376 2.8928-14.8224 0-21.8112-1.408-3.4304-3.456-6.528-6.0416-9.1136 0-0.0256-0.0512-0.0768-0.0512-0.0768l-158.8992-158.9248c-11.1104-11.1104-29.1584-11.1104-40.2432 0-11.0592 11.0848-11.0592 29.0816 0.0512 40.1664l110.3872 110.4384-335.36-0.0256c-15.6928 0-28.3904 12.7232-28.3904 28.416s12.6976 28.416 28.3904 28.416l335.36 0-110.3872 110.4128c-11.1104 11.1104-11.1104 29.1072 0 40.1408 11.1104 11.1104 29.1072 11.136 40.192 0.0512l158.8992-158.9504c0.8448-0.8192 1.2032-1.8944 1.8944-2.816C1019.1872 527.2832 1020.8256 525.312 1021.824 522.9056z"  ></path>' +
    '' +
    '<path d="M2.176 501.0944c-2.8928 6.9376-2.8928 14.8224 0 21.7856 1.408 3.456 3.456 6.5536 6.0416 9.1392l0.0512 0.0512 158.8992 158.9504c11.1104 11.1104 29.1584 11.1104 40.2432 0 11.0592-11.1104 11.0592-29.1072-0.0512-40.192l-110.3872-110.4384 335.36 0.0512c15.6928 0 28.3904-12.7488 28.3904-28.416 0-15.6928-12.6976-28.4416-28.3904-28.4416l-335.36 0.0256 110.3872-110.4128c11.1104-11.1104 11.1104-29.1072 0-40.1408-11.1104-11.1104-29.1072-11.1616-40.192-0.0512l-158.8992 158.9504c-0.8448 0.8192-1.2032 1.8944-1.8944 2.816C4.8128 496.7168 3.1744 498.688 2.176 501.0944z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fangda" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M904.358621 343.844186l-71.980381-71.980381-184.411033 184.440709-80.244602-80.274278L752.133637 191.619202l-71.980381-71.980381c0-30.953989 25.069979-56.051597 56.050574-56.051597l168.153768 0c30.983665 0 56.053644 25.097608 56.053644 56.051597l0 168.153768C960.412264 318.746578 935.342286 343.844186 904.358621 343.844186zM343.844697 904.360156c0 30.953989-25.125237 56.050574-56.051597 56.050574L119.639333 960.41073c-30.982642 0-56.05262-25.096585-56.05262-56.050574L63.586712 736.206388c0-30.953989 25.069979-56.050574 56.05262-56.050574l71.979358 71.980381 184.412057-184.440709 80.245625 80.274278L271.863293 832.40638 343.844697 904.360156z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fanhuidingbu" viewBox="0 0 1114 1024">' +
    '' +
    '<path d="M1024 0 89.043478 0C39.869217 0 0 39.869217 0 89.043478l0 845.913043c0 49.174261 39.869217 89.043478 89.043478 89.043478l934.956522 0c49.174261 0 89.043478-39.869217 89.043478-89.043478L1113.043478 89.043478C1113.043478 39.869217 1073.174261 0 1024 0zM849.541565 670.98713c-8.748522 8.748522-22.750609 8.726261-31.410087 0.089043L566.205217 419.127652 314.278957 671.076174c-8.570435 8.570435-22.706087 8.614957-31.410087-0.089043-8.748522-8.748522-8.726261-22.750609-0.089043-31.410087l267.753739-267.753739c4.274087-4.274087 9.928348-6.41113 15.60487-6.433391 5.765565-0.044522 11.419826 2.114783 15.716174 6.433391l267.753739 267.753739C858.178783 648.147478 858.223304 662.305391 849.541565 670.98713z"  ></path>' +
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