(function (e) {
  function t(t) {
    for (
      var s, n, o = t[0], c = t[1], l = t[2], d = 0, f = [];
      d < o.length;
      d++
    )
      (n = o[d]),
        Object.prototype.hasOwnProperty.call(i, n) && i[n] && f.push(i[n][0]),
        (i[n] = 0);
    for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (e[s] = c[s]);
    u && u(t);
    while (f.length) f.shift()();
    return r.push.apply(r, l || []), a();
  }
  function a() {
    for (var e, t = 0; t < r.length; t++) {
      for (var a = r[t], s = !0, o = 1; o < a.length; o++) {
        var c = a[o];
        0 !== i[c] && (s = !1);
      }
      s && (r.splice(t--, 1), (e = n((n.s = a[0]))));
    }
    return e;
  }
  var s = {},
    i = { app: 0 },
    r = [];
  function n(t) {
    if (s[t]) return s[t].exports;
    var a = (s[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  (n.m = e),
    (n.c = s),
    (n.d = function (e, t, a) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (n.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (n.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var s in e)
          n.d(
            a,
            s,
            function (t) {
              return e[t];
            }.bind(null, s)
          );
      return a;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e['default'];
            }
          : function () {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = '/yacoda/');
  var o = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    c = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var l = 0; l < o.length; l++) t(o[l]);
  var u = c;
  r.push([0, 'chunk-vendors']), a();
})({
  0: function (e, t, a) {
    e.exports = a('56d7');
  },
  4678: function (e, t, a) {
    var s = {
      './af': '2bfb',
      './af.js': '2bfb',
      './ar': '8e73',
      './ar-dz': 'a356',
      './ar-dz.js': 'a356',
      './ar-kw': '423e',
      './ar-kw.js': '423e',
      './ar-ly': '1cfd',
      './ar-ly.js': '1cfd',
      './ar-ma': '0a84',
      './ar-ma.js': '0a84',
      './ar-sa': '8230',
      './ar-sa.js': '8230',
      './ar-tn': '6d83',
      './ar-tn.js': '6d83',
      './ar.js': '8e73',
      './az': '485c',
      './az.js': '485c',
      './be': '1fc1',
      './be.js': '1fc1',
      './bg': '84aa',
      './bg.js': '84aa',
      './bm': 'a7fa',
      './bm.js': 'a7fa',
      './bn': '9043',
      './bn.js': '9043',
      './bo': 'd26a',
      './bo.js': 'd26a',
      './br': '6887',
      './br.js': '6887',
      './bs': '2554',
      './bs.js': '2554',
      './ca': 'd716',
      './ca.js': 'd716',
      './cs': '3c0d',
      './cs.js': '3c0d',
      './cv': '03ec',
      './cv.js': '03ec',
      './cy': '9797',
      './cy.js': '9797',
      './da': '0f14',
      './da.js': '0f14',
      './de': 'b469',
      './de-at': 'b3eb',
      './de-at.js': 'b3eb',
      './de-ch': 'bb71',
      './de-ch.js': 'bb71',
      './de.js': 'b469',
      './dv': '598a',
      './dv.js': '598a',
      './el': '8d47',
      './el.js': '8d47',
      './en-au': '0e6b',
      './en-au.js': '0e6b',
      './en-ca': '3886',
      './en-ca.js': '3886',
      './en-gb': '39a6',
      './en-gb.js': '39a6',
      './en-ie': 'e1d3',
      './en-ie.js': 'e1d3',
      './en-il': '7333',
      './en-il.js': '7333',
      './en-in': 'ec2e',
      './en-in.js': 'ec2e',
      './en-nz': '6f50',
      './en-nz.js': '6f50',
      './en-sg': 'b7e9',
      './en-sg.js': 'b7e9',
      './eo': '65db',
      './eo.js': '65db',
      './es': '898b',
      './es-do': '0a3c',
      './es-do.js': '0a3c',
      './es-us': '55c9',
      './es-us.js': '55c9',
      './es.js': '898b',
      './et': 'ec18',
      './et.js': 'ec18',
      './eu': '0ff2',
      './eu.js': '0ff2',
      './fa': '8df4',
      './fa.js': '8df4',
      './fi': '81e9',
      './fi.js': '81e9',
      './fil': 'd69a',
      './fil.js': 'd69a',
      './fo': '0721',
      './fo.js': '0721',
      './fr': '9f26',
      './fr-ca': 'd9f8',
      './fr-ca.js': 'd9f8',
      './fr-ch': '0e49',
      './fr-ch.js': '0e49',
      './fr.js': '9f26',
      './fy': '7118',
      './fy.js': '7118',
      './ga': '5120',
      './ga.js': '5120',
      './gd': 'f6b4',
      './gd.js': 'f6b4',
      './gl': '8840',
      './gl.js': '8840',
      './gom-deva': 'aaf2',
      './gom-deva.js': 'aaf2',
      './gom-latn': '0caa',
      './gom-latn.js': '0caa',
      './gu': 'e0c5',
      './gu.js': 'e0c5',
      './he': 'c7aa',
      './he.js': 'c7aa',
      './hi': 'dc4d',
      './hi.js': 'dc4d',
      './hr': '4ba9',
      './hr.js': '4ba9',
      './hu': '5b14',
      './hu.js': '5b14',
      './hy-am': 'd6b6',
      './hy-am.js': 'd6b6',
      './id': '5038',
      './id.js': '5038',
      './is': '0558',
      './is.js': '0558',
      './it': '6e98',
      './it-ch': '6f12',
      './it-ch.js': '6f12',
      './it.js': '6e98',
      './ja': '079e',
      './ja.js': '079e',
      './jv': 'b540',
      './jv.js': 'b540',
      './ka': '201b',
      './ka.js': '201b',
      './kk': '6d79',
      './kk.js': '6d79',
      './km': 'e81d',
      './km.js': 'e81d',
      './kn': '3e92',
      './kn.js': '3e92',
      './ko': '22f8',
      './ko.js': '22f8',
      './ku': '2421',
      './ku.js': '2421',
      './ky': '9609',
      './ky.js': '9609',
      './lb': '440c',
      './lb.js': '440c',
      './lo': 'b29d',
      './lo.js': 'b29d',
      './lt': '26f9',
      './lt.js': '26f9',
      './lv': 'b97c',
      './lv.js': 'b97c',
      './me': '293c',
      './me.js': '293c',
      './mi': '688b',
      './mi.js': '688b',
      './mk': '6909',
      './mk.js': '6909',
      './ml': '02fb',
      './ml.js': '02fb',
      './mn': '958b',
      './mn.js': '958b',
      './mr': '39bd',
      './mr.js': '39bd',
      './ms': 'ebe4',
      './ms-my': '6403',
      './ms-my.js': '6403',
      './ms.js': 'ebe4',
      './mt': '1b45',
      './mt.js': '1b45',
      './my': '8689',
      './my.js': '8689',
      './nb': '6ce3',
      './nb.js': '6ce3',
      './ne': '3a39',
      './ne.js': '3a39',
      './nl': 'facd',
      './nl-be': 'db29',
      './nl-be.js': 'db29',
      './nl.js': 'facd',
      './nn': 'b84c',
      './nn.js': 'b84c',
      './oc-lnc': '167b',
      './oc-lnc.js': '167b',
      './pa-in': 'f3ff',
      './pa-in.js': 'f3ff',
      './pl': '8d57',
      './pl.js': '8d57',
      './pt': 'f260',
      './pt-br': 'd2d4',
      './pt-br.js': 'd2d4',
      './pt.js': 'f260',
      './ro': '972c',
      './ro.js': '972c',
      './ru': '957c',
      './ru.js': '957c',
      './sd': '6784',
      './sd.js': '6784',
      './se': 'ffff',
      './se.js': 'ffff',
      './si': 'eda5',
      './si.js': 'eda5',
      './sk': '7be6',
      './sk.js': '7be6',
      './sl': '8155',
      './sl.js': '8155',
      './sq': 'c8f3',
      './sq.js': 'c8f3',
      './sr': 'cf1e',
      './sr-cyrl': '13e9',
      './sr-cyrl.js': '13e9',
      './sr.js': 'cf1e',
      './ss': '52bd',
      './ss.js': '52bd',
      './sv': '5fbd',
      './sv.js': '5fbd',
      './sw': '74dc',
      './sw.js': '74dc',
      './ta': '3de5',
      './ta.js': '3de5',
      './te': '5cbb',
      './te.js': '5cbb',
      './tet': '576c',
      './tet.js': '576c',
      './tg': '3b1b',
      './tg.js': '3b1b',
      './th': '10e8',
      './th.js': '10e8',
      './tk': '5aff',
      './tk.js': '5aff',
      './tl-ph': '0f38',
      './tl-ph.js': '0f38',
      './tlh': 'cf75',
      './tlh.js': 'cf75',
      './tr': '0e81',
      './tr.js': '0e81',
      './tzl': 'cf51',
      './tzl.js': 'cf51',
      './tzm': 'c109',
      './tzm-latn': 'b53d',
      './tzm-latn.js': 'b53d',
      './tzm.js': 'c109',
      './ug-cn': '6117',
      './ug-cn.js': '6117',
      './uk': 'ada2',
      './uk.js': 'ada2',
      './ur': '5294',
      './ur.js': '5294',
      './uz': '2e8c',
      './uz-latn': '010e',
      './uz-latn.js': '010e',
      './uz.js': '2e8c',
      './vi': '2921',
      './vi.js': '2921',
      './x-pseudo': 'fd7e',
      './x-pseudo.js': 'fd7e',
      './yo': '7f33',
      './yo.js': '7f33',
      './zh-cn': '5c3a',
      './zh-cn.js': '5c3a',
      './zh-hk': '49ab',
      './zh-hk.js': '49ab',
      './zh-mo': '3a6c',
      './zh-mo.js': '3a6c',
      './zh-tw': '90ea',
      './zh-tw.js': '90ea',
    };
    function i(e) {
      var t = r(e);
      return a(t);
    }
    function r(e) {
      if (!a.o(s, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = 'MODULE_NOT_FOUND'), t);
      }
      return s[e];
    }
    (i.keys = function () {
      return Object.keys(s);
    }),
      (i.resolve = r),
      (e.exports = i),
      (i.id = '4678');
  },
  '56d7': function (e, t, a) {
    'use strict';
    a.r(t);
    a('e260'), a('e6cf'), a('cca6'), a('a79d');
    var s,
      i,
      r,
      n,
      o = a('2b0e'),
      c = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('div', { attrs: { id: 'app' } }, [
          a(
            'div',
            {
              staticClass: 'container top-data-box',
              class: { 'is-fluid': e.isWide },
              attrs: { id: 'yacodaContainer' },
            },
            [
              a(
                'div',
                { staticClass: 'notification' },
                [
                  a(
                    'section',
                    { staticClass: 'hero is-primary is-small is-bold' },
                    [
                      a('div', { staticClass: 'hero-body' }, [
                        a('div', { staticClass: 'container is-pulled-left' }, [
                          a('h1', { staticClass: 'title' }, [e._v(' Yacoda ')]),
                          a('h4', { staticClass: 'subtitle' }, [
                            e._v(' Yet Another Covid 19 Dashboard! '),
                          ]),
                          e._m(0),
                          a('div', { staticClass: 'container' }, [
                            a('div', { staticClass: 'is-pulled-right' }, [
                              e._v('Data as of: ' + e._s(e.lastUpdate)),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]
                  ),
                  a('GlobalSummary', {
                    attrs: { globalSummary: e.globalSummary },
                  }),
                  a(
                    'div',
                    { staticClass: 'tile is-ancestor reverse-display ' },
                    [
                      a(
                        'div',
                        {
                          staticClass: 'tile is-vertical is-parent is-3',
                          staticStyle: {
                            'min-height': '100%',
                            overflow: 'scroll',
                          },
                        },
                        [
                          a('p', { staticClass: 'title' }, [
                            e._v('Chart Countries'),
                          ]),
                          a(
                            'div',
                            { staticClass: 'tile is-child box' },
                            [
                              e._l(e.selectedRegionsSummary, function (e) {
                                return a(
                                  'article',
                                  { key: e.name, staticClass: 'media' },
                                  [
                                    a('RegionLineSummary', {
                                      attrs: {
                                        name: e.name,
                                        confirmed: e.summary.confirmed.value,
                                        deaths: e.summary.deaths.value,
                                        active: e.summary.active.value,
                                        recovered: e.summary.recovered.value,
                                        selected: !0,
                                      },
                                    }),
                                  ],
                                  1
                                );
                              }),
                              a('br'),
                            ],
                            2
                          ),
                          a('i', { attrs: { id: 'countryFilterBlock' } }),
                          a('p', { staticClass: 'title' }, [
                            e._v(' All Countries '),
                          ]),
                          a('p', [
                            a('input', {
                              directives: [
                                {
                                  name: 'model',
                                  rawName: 'v-model',
                                  value: e.countryFilterInput,
                                  expression: 'countryFilterInput',
                                },
                              ],
                              staticClass: 'input',
                              attrs: {
                                type: 'text',
                                placeholder: 'Search Country',
                              },
                              domProps: { value: e.countryFilterInput },
                              on: {
                                input: [
                                  function (t) {
                                    t.target.composing ||
                                      (e.countryFilterInput = t.target.value);
                                  },
                                  e.searchCountry,
                                ],
                              },
                            }),
                          ]),
                          a('br'),
                          a(
                            'div',
                            {
                              staticClass: 'tile is-child box country-selector',
                              staticStyle: {
                                'min-height': '100%',
                                overflow: 'scroll',
                              },
                            },
                            e._l(e.regionsSummary, function (e) {
                              return a(
                                'article',
                                {
                                  key: e.name,
                                  ref: 'allCountries',
                                  refInFor: !0,
                                  staticClass: 'media',
                                  attrs: { 'data-key': e.name },
                                },
                                [
                                  a('RegionLineSummary', {
                                    attrs: {
                                      name: e.name,
                                      confirmed: e.summary.confirmed.value,
                                      deaths: e.summary.deaths.value,
                                      active: e.summary.active.value,
                                      recovered: e.summary.recovered.value,
                                    },
                                  }),
                                ],
                                1
                              );
                            }),
                            0
                          ),
                        ]
                      ),
                      a(
                        'div',
                        { ref: 'chartBlock', staticClass: 'tile is-vertical' },
                        [
                          a('p', { staticClass: 'title' }, [e._v('Chart')]),
                          a(
                            'div',
                            {
                              staticClass: 'tile is-horizontal is-12',
                              class: { 'is-parent': e.isWide },
                            },
                            [
                              a(
                                'div',
                                {
                                  staticClass: 'tile is-child box chart-box',
                                  class: { 'is-10': e.isWide },
                                },
                                [
                                  a('p', { staticClass: 'panel-tabs' }, [
                                    a(
                                      'a',
                                      {
                                        key: 'overTime',
                                        class: {
                                          'is-active': e.isOverTimePanel,
                                        },
                                        on: { click: e.selectOverTimePanel },
                                      },
                                      [e._v('Data Over Time')]
                                    ),
                                    a(
                                      'a',
                                      {
                                        key: 'daily',
                                        class: { 'is-active': e.isDailyPanel },
                                        on: { click: e.selectDailyPanel },
                                      },
                                      [e._v('Daily Data')]
                                    ),
                                  ]),
                                  e.isOverTimePanel
                                    ? a('div', { staticClass: 'panel-block' }, [
                                        e.loaded
                                          ? a(
                                              'div',
                                              {
                                                staticClass: 'container',
                                                class: { 'is-fluid': e.isWide },
                                              },
                                              [
                                                a('RegionChart', {
                                                  attrs: {
                                                    metrics: e.metrics,
                                                    chartRegions:
                                                      e.selectedRegionsSummary,
                                                  },
                                                }),
                                              ],
                                              1
                                            )
                                          : e._e(),
                                      ])
                                    : e._e(),
                                  e.isDailyPanel
                                    ? a('div', [
                                        e.loaded
                                          ? a(
                                              'div',
                                              {
                                                staticClass: 'container',
                                                class: { 'is-fluid': e.isWide },
                                              },
                                              [
                                                a('RegionChart', {
                                                  attrs: {
                                                    isDailyChart: !0,
                                                    metrics: e.metrics,
                                                    chartRegions:
                                                      e.selectedRegionsSummary,
                                                  },
                                                }),
                                              ],
                                              1
                                            )
                                          : e._e(),
                                      ])
                                    : e._e(),
                                ]
                              ),
                              a(
                                'div',
                                {
                                  staticClass:
                                    'tile is-vertical is-2 metric-filter',
                                },
                                [
                                  a(
                                    'div',
                                    {
                                      staticClass: 'tile is-child box',
                                      staticStyle: { 'min-width': '175px' },
                                    },
                                    [
                                      a('div', { staticClass: 'field' }, [
                                        a('input', {
                                          staticClass:
                                            'switch is-rounded is-info',
                                          attrs: {
                                            id: 'switchRoundedInfo',
                                            type: 'checkbox',
                                            name: 'switchRoundedInfo',
                                          },
                                          domProps: {
                                            checked: e.metrics.ACTIVE.status,
                                          },
                                          on: {
                                            click: function (t) {
                                              return e.toggleMetric(
                                                e.metrics.ACTIVE
                                              );
                                            },
                                          },
                                        }),
                                        a(
                                          'label',
                                          {
                                            attrs: { for: 'switchRoundedInfo' },
                                          },
                                          [e._v('Active')]
                                        ),
                                      ]),
                                      a('div', { staticClass: 'field' }, [
                                        a('input', {
                                          staticClass:
                                            'switch is-rounded is-success',
                                          attrs: {
                                            id: 'switchRoundedSuccess',
                                            type: 'checkbox',
                                            name: 'switchRoundedSuccess',
                                          },
                                          domProps: {
                                            checked: e.metrics.CONFIRMED.status,
                                          },
                                          on: {
                                            click: function (t) {
                                              return e.toggleMetric(
                                                e.metrics.CONFIRMED
                                              );
                                            },
                                          },
                                        }),
                                        a(
                                          'label',
                                          {
                                            attrs: {
                                              for: 'switchRoundedSuccess',
                                            },
                                          },
                                          [e._v('Confirmed')]
                                        ),
                                      ]),
                                      a('div', { staticClass: 'field' }, [
                                        a('input', {
                                          staticClass:
                                            'switch is-rounded is-danger',
                                          attrs: {
                                            id: 'switchRoundedDanger',
                                            type: 'checkbox',
                                            name: 'switchRoundedDanger',
                                          },
                                          domProps: {
                                            checked: e.metrics.DEATHS.status,
                                          },
                                          on: {
                                            click: function (t) {
                                              return e.toggleMetric(
                                                e.metrics.DEATHS
                                              );
                                            },
                                          },
                                        }),
                                        a(
                                          'label',
                                          {
                                            attrs: {
                                              for: 'switchRoundedDanger',
                                            },
                                          },
                                          [e._v('Deaths')]
                                        ),
                                      ]),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                ],
                1
              ),
              e._m(1),
            ]
          ),
        ]);
      },
      l = [
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a('ul', [
            a('li', [
              e._v(
                ' Basic Demo of Data Dashboard using Cassandra, Nifi, VueJS, SpringBoot/SpringData and Bulma '
              ),
            ]),
            a('br'),
            a('li', [
              e._v(
                ' This demo is for education/training purpose, for official data and information COVID19 please refer to '
              ),
              a(
                'a',
                { attrs: { href: 'https://www.who.int/', target: '_blank' } },
                [e._v('WHO')]
              ),
              e._v(' and '),
              a(
                'a',
                {
                  attrs: {
                    href: 'https://coronavirus.jhu.edu/map.html',
                    target: '_blank',
                  },
                },
                [e._v('JHU Dashboard')]
              ),
            ]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a('footer', { staticClass: 'footer' }, [
            a('div', { staticClass: 'content has-text-centered' }, [
              a('p', { staticClass: 'has-text-justified' }, [
                a('strong', [e._v('Yacoda')]),
                e._v(' by '),
                a('a', { attrs: { href: 'https://github.com/nabil' } }, [
                  e._v('Nabil M'),
                ]),
                e._v('. '),
                a('br'),
                e._v('The source code is licensed under '),
                a(
                  'a',
                  {
                    attrs: {
                      href:
                        'https://github.com/nabil/c19dashboard/blob/master/LICENSE',
                    },
                  },
                  [e._v('Apache License 2.0')]
                ),
                e._v('. '),
                a('br'),
                a('br'),
                e._v(' The Yacoda dashboard data is provided from: '),
                a('b', [
                  a(
                    'a',
                    {
                      attrs: {
                        hreaf: 'https://github.com/CSSEGISandData/COVID-19',
                      },
                    },
                    [e._v('COVID-19 Data Repository')]
                  ),
                  e._v(
                    ' by the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University'
                  ),
                ]),
                a('br'),
                e._v(
                  '"This data set is licensed under the Creative Commons Attribution 4.0 International (CC BY 4.0) by the Johns Hopkins University on behalf of its Center for Systems Science in Engineering. Copyright Johns Hopkins University 2020." '
                ),
              ]),
            ]),
          ]);
        },
      ],
      u =
        (a('99af'),
        a('c740'),
        a('4160'),
        a('c975'),
        a('a434'),
        a('b0c0'),
        a('b64b'),
        a('159b'),
        a('bc3a')),
      d = a.n(u),
      f = new o['a'](),
      m = f,
      h = m,
      v = a('2877'),
      p = Object(v['a'])(h, s, i, !1, null, null, null),
      b = p.exports,
      y = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          'div',
          {
            directives: [
              {
                name: 'show',
                rawName: 'v-show',
                value: e.loaded.status,
                expression: 'loaded.status',
              },
            ],
          },
          [
            a('line-chart', {
              ref: 'chart',
              attrs: { chartData: e.datacollection, options: e.options },
            }),
          ],
          1
        );
      },
      g = [],
      j = (a('4de4'), a('45fc'), a('07ac'), a('1fca')),
      C = j['b'].reactiveProp,
      _ = {
        extends: j['a'],
        mixins: [C],
        props: ['chartData', 'options'],
        mounted: function () {
          this.renderChart(this.chartData, this.options);
        },
        watch: {
          data: function () {
            this._chart.destroy(), this.renderChart();
          },
        },
      },
      S = _,
      D = Object(v['a'])(S, r, n, !1, null, null, null),
      R = D.exports,
      k = {
        responsive: !0,
        showAllTooltips: !0,
        tooltipEvents: ['mousemove', 'touchstart', 'touchmove'],
        legend: { display: !0, labels: { useLineStyle: !0 } },
        title: { display: !0, text: 'Covid 19 Data Points By Region' },
        tooltips: {
          mode: 'index',
          intersect: !1,
          callbacks: {
            label: function (e, t) {
              var a = t.datasets[e.datasetIndex].label,
                s = t.datasets[e.datasetIndex].data[e.index];
              return a + ': ' + s.y.toLocaleString();
            },
          },
        },
        hover: { mode: 'nearest', animationDuration: 0, intersect: !0 },
        animation: { duration: 1 },
        responsiveAnimationDuration: 0,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: !0,
                stacked: !1,
                callback: function (e) {
                  return e.toLocaleString();
                },
              },
              scaleLabel: { display: !0 },
            },
          ],
          xAxes: [{ type: 'time', time: { unit: 'day' } }],
        },
      },
      w = {
        components: { LineChart: R },
        props: {
          isDailyChart: { type: Boolean, required: !1, default: !1 },
          chartRegions: { type: Array, required: !0 },
          metrics: { type: Object, required: !0 },
        },
        data: function () {
          return {
            apiData: [],
            loaded: { status: !1 },
            options: k,
            datacollection: { datasets: [] },
          };
        },
        mounted: function () {
          var e = this;
          b.$on('TOGGLE_METRIC', function (t) {
            e.toggleMetric(t);
          }),
            b.$on('REDRAW_CHART', function () {
              e.redraw();
            }),
            b.$on('FILL_REDRAW_CHART', function () {
              e.fillAndRedraw();
            }),
            this.fillData();
        },
        computed: {
          chartData: function () {
            return this.datacollection;
          },
          isLoaded: function () {
            return this.loaded;
          },
        },
        methods: {
          buildRegionDataSets: function (e, t, a) {
            this.datacollection.datasets.push({
              label: e.name + '-' + a.name,
              fill: !1,
              borderColor: e.color,
              backgroundColor: e.color,
              pointHoverBorderColor: a.color,
              pointHoverBackgroundColor: a.color,
              pointRadius: 1,
              pointHitRadius: 1,
              pointBorderWidth: 1,
              pointHoverRadius: 1,
              data: t,
            });
          },
          buildRegionData: function (e, t, a) {
            e.push({ t: t.dateRecorded, y: this.getMetricValue(t, a) });
          },
          getMetricValue: function (e, t) {
            return t == this.metrics.CONFIRMED
              ? e.confirmed.value
              : t == this.metrics.DEATHS
              ? e.deaths.value
              : t == this.metrics.ACTIVE
              ? e.active.value
              : void 0;
          },
          getCurrentRegionData: function () {},
          drawChart: function () {
            var e = this;
            this.$set(this.loaded, 'status', !1),
              (this.datacollection.datasets = []);
            var t = {};
            this.chartRegions.forEach(function (a) {
              (t = e.apiData.filter(function (e) {
                return 0 == e.name.localeCompare(a.name);
              })[0]),
                Object.values(e.metrics)
                  .filter(function (e) {
                    return 1 == e.status;
                  })
                  .forEach(function (s) {
                    var i = [];
                    t.data.forEach(function (t) {
                      e.buildRegionData(i, t, s);
                    }),
                      e.buildRegionDataSets(a, i, s);
                  });
            }),
              this.$set(
                this.datacollection,
                'datasets',
                this.datacollection.datasets
              ),
              this.$set(this.loaded, 'status', !0),
              this.$refs.chart.renderChart(this.datacollection, this.options);
          },
          fillData: function () {
            var e = this;
            this.chartRegions.forEach(function (t) {
              if (
                !e.apiData.some(function (e) {
                  return 0 == e.name.localeCompare(t.name);
                })
              ) {
                var a =
                  e.$apiurl + 'c19/data/points/' + t.name + e.$apiurlsuffix;
                d.a
                  .get(a)
                  .then(function (a) {
                    e.apiData.push({
                      name: t.name,
                      data: e.getDailyDataPoints(a.data),
                    });
                  })
                  .then(function () {
                    return e.drawChart();
                  })
                  .catch(function (e) {
                    return console.log(e);
                  });
              }
            });
          },
          toggleMetric: function (e) {
            (this.metrics[e.id] = e), this.drawChart();
          },
          fillAndRedraw: function () {
            this.fillData();
          },
          redraw: function () {
            this.drawChart();
          },
          getDailyValue: function (e, t) {
            var a = e - t;
            return a < 0 ? 0 : a;
          },
          getDailyDataPoints: function (e) {
            if (!this.isDailyChart) return e;
            var t = e.length,
              a = [];
            a.push({
              deaths: { value: 0 },
              active: { value: 0 },
              confirmed: { value: 0 },
              recovered: { value: 0 },
              dateRecorded: e[0].dateRecorded,
            });
            for (var s = 1; s < t; s++)
              s + 1 <= t
                ? a.push({
                    deaths: {
                      value: this.getDailyValue(
                        e[s].deaths.value,
                        e[s - 1].deaths.value
                      ),
                    },
                    active: {
                      value: this.getDailyValue(
                        e[s].active.value,
                        e[s - 1].active.value
                      ),
                    },
                    confirmed: {
                      value: this.getDailyValue(
                        e[s].confirmed.value,
                        e[s - 1].confirmed.value
                      ),
                    },
                    recovered: {
                      value: this.getDailyValue(
                        e[s].recovered.value,
                        e[s - 1].recovered.value
                      ),
                    },
                    dateRecorded: e[s].dateRecorded,
                  })
                : a.push({
                    deaths: {
                      value: this.getDailyValue(
                        e[s + 1].deaths.value,
                        e[s].deaths.value
                      ),
                    },
                    active: {
                      value: this.getDailyValue(
                        e[s + 1].active.value,
                        e[s].active.value
                      ),
                    },
                    confirmed: {
                      value: this.getDailyValue(
                        e[s + 1].confirmed.value,
                        e[s].confirmed.value
                      ),
                    },
                    recovered: {
                      value: this.getDailyValue(
                        e[s + 1].recovered.value,
                        e[s].recovered.value
                      ),
                    },
                    dateRecorded: e[s].dateRecorded,
                  });
            return a;
          },
        },
      },
      E = w,
      x = Object(v['a'])(E, y, g, !1, null, null, null),
      O = x.exports,
      I = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('div', { staticClass: 'tile is-ancestor mt-3' }, [
          a('div', { staticClass: 'tile' }, [
            a(
              'div',
              { staticClass: 'tile is-parent is-horizontal' },
              [
                a('SummaryMetricItem', {
                  attrs: {
                    countValue: e.globalSummary.confirmed.value,
                    subtitle: 'Confirmed',
                    type: 'warning',
                  },
                }),
              ],
              1
            ),
            a(
              'div',
              { staticClass: 'tile is-parent is-horizontal' },
              [
                a('SummaryMetricItem', {
                  attrs: {
                    countValue: e.globalSummary.deaths.value,
                    subtitle: 'Deaths',
                    type: 'danger',
                  },
                }),
              ],
              1
            ),
            a(
              'div',
              { staticClass: 'tile is-parent is-horizontal' },
              [
                a('SummaryMetricItem', {
                  attrs: {
                    countValue: e.globalSummary.active.value,
                    subtitle: 'Actives',
                    type: 'primary',
                  },
                }),
              ],
              1
            ),
            a(
              'div',
              { staticClass: 'tile is-parent is-horizontal' },
              [
                a('SummaryMetricItem', {
                  attrs: {
                    countValue: e.globalSummary.recovered.value,
                    subtitle: 'Recovered',
                    type: 'success',
                  },
                }),
              ],
              1
            ),
          ]),
        ]);
      },
      T = [],
      $ = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          'article',
          { staticClass: 'tile is-child notification', class: e.isType },
          [
            a('p', { staticClass: 'subtitle has-text-centered' }, [
              e._v(e._s(e.subtitle)),
            ]),
            a('p', { staticClass: 'title has-text-centered' }, [
              e._v(e._s(e.countValue.toLocaleString())),
            ]),
          ]
        );
      },
      A = [],
      P = (a('caad'), a('a9e3'), ['danger', 'primary', 'warning', 'success']),
      z = {
        name: 'SummaryMetricItem',
        props: {
          countValue: { type: Number, required: !0 },
          subtitle: { type: String, required: !0 },
          type: {
            type: String,
            required: !0,
            validator: function (e) {
              return P.includes(e);
            },
          },
        },
        data: function () {
          return {};
        },
        computed: {
          isType: function () {
            return 'is-' + this.type;
          },
        },
      },
      M = z,
      N = Object(v['a'])(M, $, A, !1, null, null, null),
      V = N.exports,
      L = {
        name: 'GlobalSummary',
        components: { SummaryMetricItem: V },
        props: { globalSummary: { type: Object, required: !0 } },
        data: function () {
          return {};
        },
      },
      B = L,
      F = Object(v['a'])(B, I, T, !1, null, null, null),
      H = F.exports,
      W = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a('div', { staticClass: 'media-content' }, [
          a('div', { staticClass: 'content' }, [
            a('p', [
              a('strong', [e._v(e._s(e.name))]),
              a('a', { staticClass: 'toggleRegion' }, [
                e.selected
                  ? a(
                      'span',
                      {
                        staticClass: 'has-text-danger',
                        on: {
                          click: function (t) {
                            return e.removeEntry();
                          },
                        },
                      },
                      [e._v(' (-) ')]
                    )
                  : a(
                      'span',
                      {
                        staticClass: 'has-text-success',
                        on: {
                          click: function (t) {
                            return e.addEntry();
                          },
                        },
                      },
                      [e._v(' (+) ')]
                    ),
              ]),
            ]),
            a('table', { staticClass: 'table' }, [
              e._m(0),
              a('tbody', [
                a('tr', [
                  a('td', [e._v(e._s(e.confirmed.toLocaleString()))]),
                  a('td', [e._v(e._s(e.deaths.toLocaleString()))]),
                ]),
              ]),
            ]),
          ]),
        ]);
      },
      q = [
        function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a('thead', [
            a('tr', [a('th', [e._v('Confirmed')]), a('th', [e._v('Deaths')])]),
          ]);
        },
      ],
      G = {
        name: 'RegionLineSummary',
        props: {
          name: { type: String, required: !0 },
          confirmed: { type: Number, required: !0 },
          deaths: { type: Number, required: !0 },
          active: { type: Number, required: !0 },
          recovered: { type: Number, required: !0 },
          selected: { type: Boolean, default: !1 },
        },
        data: function () {
          return {};
        },
        methods: {
          addEntry: function () {
            b.$emit('ADD_REGION', this.name);
          },
          removeEntry: function () {
            b.$emit('REMOVE_REGION', this.name);
          },
        },
      },
      U = G,
      J = (a('85f0'), Object(v['a'])(U, W, q, !1, null, null, null)),
      Y = J.exports,
      Z = ['Morocco', 'Bahrain', 'India', 'Brazil', 'Spain'],
      K = {
        ACTIVE: { id: 'ACTIVE', name: 'Active', status: !0, color: '#209cee' },
        CONFIRMED: {
          id: 'CONFIRMED',
          name: 'Confirmed',
          status: !1,
          color: '#23d160',
        },
        DEATHS: { id: 'DEATHS', name: 'Deaths', status: !1, color: '#ff3860' },
      },
      Q = {
        name: 'App',
        components: { RegionChart: O, GlobalSummary: H, RegionLineSummary: Y },
        data: function () {
          return {
            globalSummary: {
              confirmed: { value: 0 },
              active: { value: 0 },
              deaths: { value: 0 },
              recovered: { value: 0 },
              lastUpdate: 0,
            },
            activePanel: 'OverTime',
            countryFilterInput: '',
            loaded: !1,
            metrics: K,
            defaultRegions: Z,
            regionsSummary: {},
            selectedRegionsSummary: [],
            chartParentNode: null,
            windowWidth: window.innerWidth,
          };
        },
        created: function () {
          var e = this;
          d.a
            .get(this.$apiurl + 'c19/data/summary' + this.$apiurlsuffix)
            .then(function (t) {
              e.globalSummary = t.data;
            })
            .catch(function (e) {
              return console.log(e);
            }),
            d.a
              .get(
                this.$apiurl + 'c19/data/summary/regions' + this.$apiurlsuffix
              )
              .then(function (t) {
                (e.regionsSummary = t.data),
                  e.regionsSummary.forEach(function (t) {
                    t.color = e.randomColor();
                  }),
                  e.regionsSummary.sort(function (e, t) {
                    return (
                      t.summary.confirmed.value - e.summary.confirmed.value
                    );
                  }),
                  Z.forEach(function (t) {
                    var a = e.regionsSummary.splice(
                      e.regionsSummary.findIndex(function (e) {
                        return t == e.name;
                      }),
                      1
                    );
                    e.selectedRegionsSummary = e.selectedRegionsSummary.concat(
                      a
                    );
                  });
              })
              .then(function () {
                return (e.loaded = !0);
              })
              .catch(function (e) {
                return console.log(e);
              }),
            b.$on('ADD_REGION', function (t) {
              e.selectedRegionsSummary.push(
                e.regionsSummary.splice(
                  e.regionsSummary.findIndex(function (e) {
                    return e.name == t;
                  }),
                  1
                )[0]
              ),
                e.clearSearch(),
                b.$emit('FILL_REDRAW_CHART');
            }),
            b.$on('REMOVE_REGION', function (t) {
              e.regionsSummary.push(
                e.selectedRegionsSummary.splice(
                  e.selectedRegionsSummary.findIndex(function (e) {
                    return e.name == t;
                  }),
                  1
                )[0]
              ),
                e.regionsSummary.sort(function (e, t) {
                  return t.summary.confirmed.value - e.summary.confirmed.value;
                }),
                e.clearSearch(),
                b.$emit('REDRAW_CHART');
            });
        },
        mounted: function () {
          var e = this;
          this.$nextTick(function () {
            window.addEventListener('resize', e.onResize);
          }),
            this.resetChartPosition();
        },
        beforeDestroy: function () {
          window.removeEventListener('resize', this.onResize);
        },
        computed: {
          lastUpdate: function () {
            return new Date(this.globalSummary.lastUpdate).toUTCString();
          },
          isOverTimePanel: function () {
            return 'OverTime' == this.activePanel;
          },
          isDailyPanel: function () {
            return 'Daily' == this.activePanel;
          },
          isWide: function () {
            return this.windowWidth > 960;
          },
        },
        methods: {
          onResize: function () {
            (this.windowWidth = window.innerWidth), this.resetChartPosition();
          },
          clearSearch: function () {
            (this.countryFilterInput = ''), this.searchCountry();
          },
          toggleMetric: function (e) {
            for (var t = 0, a = Object.keys(this.metrics); t < a.length; t++) {
              var s = a[t];
              this.metrics[s] == e
                ? (this.metrics[s].status = !e.status)
                : (this.metrics[s].status = !1);
            }
            b.$emit('TOGGLE_METRIC', e);
          },
          selectOverTimePanel: function () {
            this.activePanel = 'OverTime';
          },
          selectDailyPanel: function () {
            this.activePanel = 'Daily';
          },
          randomColor: function () {
            for (var e = '0123456789ABCDEF', t = '#', a = 0; a < 6; a++)
              t += e[Math.floor(16 * Math.random())];
            return t;
          },
          searchCountry: function () {
            var e = this;
            this.$refs.allCountries.forEach(function (t) {
              t.dataset['key']
                .toLowerCase()
                .indexOf(e.countryFilterInput.toLowerCase()) > -1
                ? (t.style.display = 'block')
                : (t.style.display = 'none');
            });
          },
          resetChartPosition: function () {
            if (
              (this.chartParentNode ||
                (this.chartParentNode = this.$refs.chartBlock.parentNode),
              this.windowWidth < 960)
            ) {
              this.$refs.chartBlock.parentNode.removeChild(
                this.$refs.chartBlock
              );
              var e = document.getElementById('countryFilterBlock');
              e.parentNode.insertBefore(this.$refs.chartBlock, e.nextSibling);
            } else this.chartParentNode.appendChild(this.$refs.chartBlock);
          },
        },
      },
      X = Q,
      ee = (a('738e'), Object(v['a'])(X, c, l, !1, null, null, null)),
      te = ee.exports;
    a('15f5'), a('7051');
    (o['a'].config.productionTip = !1),
      (o['a'].config.cached = !0),
      (o['a'].prototype.$apiurl = o['a'].config.cached
        ? ''
        : 'http://localhost:8082/'),
      (o['a'].prototype.$apiurlsuffix = o['a'].config.cached ? '.json' : ''),
      new o['a']({
        render: function (e) {
          return e(te);
        },
      }).$mount('#app');
  },
  '5bc6': function (e, t, a) {},
  '738e': function (e, t, a) {
    'use strict';
    var s = a('5bc6'),
      i = a.n(s);
    i.a;
  },
  '85f0': function (e, t, a) {
    'use strict';
    var s = a('d009'),
      i = a.n(s);
    i.a;
  },
  d009: function (e, t, a) {},
});
//# sourceMappingURL=app.e2cc5216.js.map
