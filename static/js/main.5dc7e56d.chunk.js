(this.webpackJsonpdemo = this.webpackJsonpdemo || []).push([
  [0],
  {
    63: function (e, t, i) {},
    85: function (e, t, i) {},
    86: function (e, t, i) {},
    92: function (e, t, i) {},
    93: function (e, t, i) {},
    94: function (e, t, i) {},
    95: function (e, t, i) {},
    96: function (e, t, i) {},
    97: function (e, t, i) {
      'use strict';
      i.r(t);
      var n = i(0),
        r = i.n(n),
        a = i(70),
        o = i.n(a),
        s = (i(85), i(86), i(120)),
        l = i(118),
        c = i(3),
        d = i(111),
        b = i(112),
        m = i(110),
        g = (i(63), i(2));
      var h = function () {
          return Object(g.jsx)(m.a, {
            bg: 'white',
            boxShadow: 'md',
            py: '3',
            overflow: 'auto',
            children: Object(g.jsx)(d.a, {
              alignItems: 'center',
              justify: 'space-around',
              className: 'hideScroll',
              gridGap: { lg: '1', base: '5' },
              children: [
                'Accessibility',
                'CSS',
                'JavaScript',
                'React',
                'Vue',
                'Round-Ups',
                'UX',
                'Design',
                'Web Design',
                'Figma',
                'Wallpapers',
                'Guides',
                'Business',
                'Career',
                'Privacy',
              ].map(function (e) {
                return Object(g.jsx)(b.a, {
                  cursor: 'pointer',
                  outline: '1px solid transparent',
                  _hover: {
                    outlineColor: '#D33A2C',
                    transition: 'ease-out',
                    transitionDuration: '0.3s',
                  },
                  fontWeight: 'bold',
                  bg: '#FFE3E3',
                  px: '4',
                  py: '2',
                  borderRadius: '10',
                  color: '#D33A2C',
                  children: e,
                });
              }),
            }),
          });
        },
        p = i(124),
        j = i(122),
        x = i(119),
        u = i(123);
      var f = function () {
          var e,
            t = Object(u.a)(),
            i = t.isOpen,
            n = t.onToggle;
          return Object(g.jsxs)(d.a, {
            flexDir: 'column',
            fontFamily: 'Cabin, sans-serif',
            children: [
              Object(g.jsxs)(d.a, {
                bg: '#D33A2C',
                h: '115px',
                justify: 'space-between',
                alignItems: 'center',
                px: { lg: '10', base: '2' },
                children: [
                  Object(g.jsx)(p.a, {
                    src: 'data:image/png;base64,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',
                    alt: 'logo',
                    objectFit: 'contain',
                    h: { base: '50px', lg: '50px' },
                    w: { base: 'auto', lg: 'max' },
                    className: 'shadowLogo',
                  }),
                  Object(g.jsxs)(d.a, {
                    mx: '5',
                    children: [
                      [
                        'Articles',
                        'Guides',
                        'Books',
                        'Workshops',
                        'Membership',
                      ].map(function (e) {
                        return Object(g.jsx)(b.a, {
                          textShadow: 'xl',
                          display: { base: 'none', md: 'inherit' },
                          px: '4',
                          py: '3',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          borderRadius: '20',
                          _hover: { bg: '#B43125' },
                          fontSize: '1.5em',
                          fontWeight: 'semibold',
                          color: 'white',
                          children: e,
                        });
                      }),
                      Object(g.jsxs)(d.a, {
                        color: 'white',
                        fontSize: '1.5em',
                        mx: '1',
                        w: 'max',
                        borderRadius: '20',
                        px: { lg: '3', base: '2' },
                        py: '3',
                        pos: 'relative',
                        bg: '#94291F',
                        cursor: 'pointer',
                        _hover: { bg: '#731e16' },
                        onClick: n,
                        justify: 'center',
                        alignItems: 'center',
                        children: [
                          'Menu',
                          Object(g.jsx)(x.a, {
                            in: i,
                            animateOpacity: !0,
                            children: Object(g.jsx)(
                              m.a,
                              ((e = {
                                pos: 'absolute',
                                p: '40px',
                                color: 'white',
                                mt: '4',
                                right: '0',
                                bg: 'white',
                              }),
                              Object(c.a)(e, 'color', 'black'),
                              Object(c.a)(e, 'rounded', 'md'),
                              Object(c.a)(e, 'shadow', 'md'),
                              Object(c.a)(e, 'children', 'Hello'),
                              e)
                            ),
                          }),
                          Object(g.jsx)(p.a, {
                            h: '30px',
                            px: '1',
                            src: 'https://img.icons8.com/ios-glyphs/64/000000/cat.png',
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(g.jsxs)(d.a, {
                    w: 'full',
                    mx: '2',
                    mt: '-2',
                    pos: 'relative',
                    alignItems: 'center',
                    display: { base: 'none', lg: 'inherit' },
                    children: [
                      Object(g.jsx)(m.a, {
                        zIndex: '999',
                        position: 'absolute',
                        ml: '2',
                        px: '2',
                        pt: '2',
                        bg: 'white',
                        children: Object(g.jsx)('svg', {
                          xmlns: 'http://www.w3.org/2000/svg',
                          width: '32',
                          height: '32',
                          fill: '#F57A4C',
                          class: 'bi bi-search',
                          viewBox: '0 0 16 16',
                          children: Object(g.jsx)('path', {
                            d: 'M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z',
                          }),
                        }),
                      }),
                      Object(g.jsx)(j.a, {
                        bg: 'white',
                        mt: '2',
                        py: '7',
                        rounded: 'xl',
                        boxShadow: 'xl',
                        _placeholder: {
                          fontSize: '1.7em',
                          color: 'black',
                          ml: '70px',
                        },
                        _focus: { border: '1px dashed black' },
                        placeholder: '       Seach Articles...',
                      }),
                    ],
                  }),
                ],
              }),
              Object(g.jsx)(m.a, { children: Object(g.jsx)(h, {}) }),
            ],
          });
        },
        y = i(114),
        O = i.p + '../../static/media/hero-img-2.b7b6d679.jpg',
        w = i.p + '../media/hero-img-1.085c2250.jpg',
        v = i.p + '../media/hero-img-3.2384a0cf.jpg';
      i(92);
      var S = function () {
          return Object(g.jsx)('div', {
            children: Object(g.jsxs)(m.a, {
              ml: { lg: '28', base: '5' },
              mr: { lg: '80px', base: '5' },
              mt: '16',
              children: [
                Object(g.jsxs)(d.a, {
                  flexDir: { base: 'column', lg: 'row' },
                  gridGap: '10',
                  alignItems: 'center',
                  children: [
                    Object(g.jsx)(m.a, {
                      children: Object(g.jsx)(m.a, {
                        w: '200px',
                        children: Object(g.jsx)(p.a, {
                          className: 'imageRotate',
                          border: '5px solid #D33A2C',
                          borderRadius: '3xl',
                          objectFit: 'fill',
                          ml: { base: '5', lg: 'none' },
                          src: w,
                        }),
                      }),
                    }),
                    Object(g.jsxs)(m.a, {
                      children: [
                        Object(g.jsx)(b.a, {
                          color: 'brand.main',
                          display: 'inline-block',
                          textDecor: 'underline',
                          fontSize: { lg: '1.3em', base: '1em' },
                          fontWeight: 'semibold',
                          children: 'Frederick O\u2019Brien',
                        }),
                        Object(g.jsxs)(b.a, {
                          display: 'inline',
                          color: 'grey',
                          fontStyle: 'oblique',
                          fontFamily: '',
                          children: [' ', 'wrote'],
                        }),
                        Object(g.jsxs)(b.a, {
                          fontWeight: '700',
                          fontSize: { lg: '3em', base: '2em' },
                          lineHeight: 'shorter',
                          my: '2',
                          color: 'gray.700',
                          children: [
                            'Web Design Done Well: Excellent Editorial',
                            ' ',
                          ],
                        }),
                        Object(g.jsxs)(b.a, {
                          display: 'inline-block',
                          fontFamily: 'cursive',
                          color: 'gray.600',
                          mt: '2',
                          children: ['Sep 10, 2021', ' '],
                        }),
                        Object(g.jsxs)(b.a, {
                          display: 'inline',
                          fontFamily: 'cursive',
                          color: 'gray.500',
                          children: [' ', 'in', ' '],
                        }),
                        ['Design', 'Inspiration', 'User Experience'].map(
                          function (e) {
                            return Object(g.jsxs)(b.a, {
                              cursor: 'pointer',
                              display: 'inline',
                              textColor: 'gray.600',
                              fontWeight: 'bold',
                              fontSize: { lg: '1.3em', base: '1em' },
                              children: [
                                Object(g.jsx)(b.a, {
                                  textDecor: 'underline',
                                  display: 'inline',
                                  children: e,
                                }),
                                ', ',
                              ],
                            });
                          }
                        ),
                      ],
                    }),
                  ],
                }),
                Object(g.jsxs)(b.a, {
                  mt: '10',
                  fontFamily: 'sans-serif',
                  fontSize: { lg: '1.3em', base: '1em' },
                  color: 'gray.700',
                  fontWeight: 'hairline',
                  children: [
                    'They say content is king, and they\u2019re right. The web has unlocked untold possibilities for storytellers \u2014 provided the story is right, of course. Here are some of our favorite examples of editorial content thriving in the digital realm.',
                    ' ',
                  ],
                }),
                Object(g.jsx)(b.a, {
                  color: 'brand.main',
                  fontWeight: 'bold',
                  textDecor: 'underline',
                  fontSize: '1.2em',
                  mt: '5',
                  children: 'Continue reading \u21ac',
                }),
                Object(g.jsx)(m.a, {
                  my: '5',
                  children: [
                    {
                      name: 'Sam Poder',
                      date: 'Sep 9, 2021 in',
                      title: ' Next.js, React, JavaScript ',
                      heading:
                        'Using SWR React Hooks With Next.js\u2019 Incremental Static Regeneration (ISR)',
                      img: v,
                    },
                    {
                      name: 'Michelle Barker',
                      date: 'Sep 8, 2021 in ',
                      title: 'CSS, Design, Content',
                      heading:
                        'Developer Decisions For Building Flexible Components',
                      img: O,
                    },
                  ].map(function (e) {
                    return Object(g.jsxs)(d.a, {
                      alignItems: { lg: 'center', base: 'center' },
                      flexDir: { base: 'column', lg: 'row' },
                      textAlign: { base: 'center', lg: 'left' },
                      my: '20',
                      children: [
                        Object(g.jsx)(p.a, {
                          src: e.img,
                          w: { lg: '32', base: '28' },
                          className: 'imageRotate',
                          border: '5px solid black',
                          borderRadius: 'xl',
                          mb: { base: '5', lg: '0' },
                          borderColor: 'brand.main',
                        }),
                        Object(g.jsxs)(m.a, {
                          ml: { lg: '7', base: '1' },
                          children: [
                            Object(g.jsx)(b.a, {
                              color: 'brand.main',
                              display: 'inline-block',
                              textDecor: 'underline',
                              fontSize: '1.1em',
                              fontWeight: 'semibold',
                              children: e.name,
                            }),
                            Object(g.jsxs)(b.a, {
                              display: 'inline-block',
                              fontFamily: 'cursive',
                              color: 'gray.600',
                              children: [' / ', e.date, ' '],
                            }),
                            Object(g.jsx)(b.a, {
                              className: 'underlineText',
                              ml: '2',
                              my: '2',
                              color: 'gray.600',
                              fontSize: '1.3em',
                              children: ' ' + e.title + ', ',
                            }),
                            Object(g.jsx)(y.a, {
                              py: '1',
                              fontSize: { lg: '2.2em', base: '1.6em' },
                              fontFamily: 'sans-serif',
                              color: 'gray.700',
                              children: e.heading,
                            }),
                          ],
                        }),
                      ],
                    });
                  }),
                }),
              ],
            }),
          });
        },
        F = i(115),
        T = i(121),
        A = i.p + '../media/cat-in-the-chair.5c83a889.png';
      var k = function () {
        return Object(g.jsxs)(F.a, {
          justifySelf: 'flex-end',
          maxW: { lg: '90%', base: '100%' },
          children: [
            Object(g.jsx)(m.a, {
              pos: 'relative',
              children: Object(g.jsx)(p.a, {
                w: { lg: '60', base: '44' },
                zIndex: '999',
                pos: 'absolute',
                ml: { lg: '20', base: '16' },
                mt: { lg: '14', base: '1' },
                src: A,
              }),
            }),
            Object(g.jsxs)(F.a, {
              rounded: '2xl',
              centerContent: !0,
              justifyContent: 'center',
              bg: '#E7F8FF',
              mt: { lg: '40', base: '20' },
              py: { lg: '5', base: '3' },
              h: 'max',
              children: [
                Object(g.jsx)(T.a, {
                  color: 'brand.main',
                  mt: { lg: '32', base: '24' },
                  p: '28px',
                  shadow: 'md',
                  bg: 'white',
                  fontSize: '1.3em',
                  rounded: 'md',
                  fontWeight: 'bold',
                  fontFamily: 'cursive',
                  children: 'Email Newsletter',
                }),
                Object(g.jsx)(y.a, {
                  color: 'gray.800',
                  textAlign: 'center',
                  mt: '5',
                  children:
                    'Useful front-end & UX tips, delivered once a week.',
                }),
                Object(g.jsxs)(b.a, {
                  mt: '10',
                  fontSize: '1.2em',
                  fontWeight: 'normal',
                  textAlign: 'center',
                  mx: '10',
                  children: [
                    'With tools to help you get your work done better. Subscribe and get Vitaly\u2019s',
                    ' ',
                    Object(g.jsxs)('span', {
                      style: { color: '#006FC6' },
                      children: [
                        ' ',
                        'Smart Interface Design Checklists PDF',
                        ' ',
                      ],
                    }),
                    ' ',
                    '\u2014 in your inbox. \ud83c\udf81',
                  ],
                }),
                Object(g.jsxs)(d.a, {
                  mt: '10',
                  alignItems: 'center',
                  shadow: 'xl',
                  transition: 'ease-out',
                  transitionDuration: '0.3s',
                  _hover: {
                    shadow: 'none',
                    transition: 'ease-out',
                    transitionDuration: '0.3s',
                    cursor: 'pointer',
                  },
                  children: [
                    Object(g.jsx)(j.a, {
                      borderRightRadius: '0',
                      borderLeftRadius: '0.7em',
                      bg: 'white',
                      fontSize: '1.3em',
                      placeholder: 'Your email',
                      p: '8',
                      _placeholder: { fontSize: '1.1em', color: 'grey' },
                    }),
                    Object(g.jsx)(T.a, {
                      bg: '#006FC6',
                      color: 'white',
                      _hover: { bg: '#006FC6' },
                      p: '8',
                      fontSize: '1.2em',
                      borderRightRadius: '0.7em',
                      borderLeftRadius: '0',
                      children: 'Meow!',
                    }),
                  ],
                }),
                Object(g.jsxs)(b.a, {
                  mt: '7',
                  color: 'gray.600',
                  fontStyle: 'italic',
                  children: [
                    'On',
                    ' ',
                    Object(g.jsx)('span', {
                      style: { textDecoration: 'underline' },
                      children: ' front-end & UX.',
                    }),
                    ' ',
                    'Trusted by 190.000 folks.',
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var E = function () {
        return Object(g.jsxs)(m.a, {
          display: 'grid',
          gridAutoFlow: { lg: 'column', base: 'row' },
          gridTemplateColumns: { lg: '2fr 1fr', base: '' },
          children: [Object(g.jsx)(S, {}), Object(g.jsx)(k, {})],
        });
      };
      var W = function () {
          var e, t;
          return Object(g.jsxs)(g.Fragment, {
            children: [
              Object(g.jsx)(
                F.a,
                ((e = {
                  overflow: 'hidden',
                  mt: { base: '20', lg: '0' },
                  display: 'relative',
                  maxW: { lg: '80%', base: '100%' },
                }),
                Object(c.a)(e, 'display', 'grid'),
                Object(c.a)(e, 'flexDir', { base: 'row', lg: 'row' }),
                Object(c.a)(e, 'gridTemplateColumns', {
                  lg: '1fr 1fr 1fr',
                  base: '1fr',
                }),
                Object(c.a)(e, 'mb', '10'),
                Object(c.a)(e, 'gridGap', '10'),
                Object(c.a)(
                  e,
                  'children',
                  [
                    {
                      title: 'Accessible Front-End Components',
                      subTitle:
                        'Reliable accessible UI components: :focus styles, modals, date pickers, navigation, tables, buttons, SVGs.',
                      btnTxt: 'Explore Accessible Components',
                      primary: '#18A46F',
                      secondary: '#F1FDF8',
                    },
                    {
                      title: 'CSS Generators & Tools',
                      subTitle:
                        'Useful CSS tools for animations, shadows, cubic-bezier curves, easing gradients, filters, overlays, type scales.',
                      btnTxt: 'Explore CSS Generators',
                      primary: '#F55700',
                      secondary: '#FEF1F0',
                    },
                    {
                      title: 'Front-End Boilerplates & Starter Kits',
                      subTitle:
                        'HTML boilerplates, CSS resets, forms, dev themes, gitignore, CSS snippets, static sites, style guides.',
                      btnTxt: 'Explore Front-End Boilerplates',
                      primary: '#AA1994',
                      secondary: '#FBECF9',
                    },
                  ].map(function (e) {
                    return Object(g.jsxs)(d.a, {
                      bgColor: e.secondary,
                      rounded: 'xl',
                      p: '6',
                      w: { lg: '400px', base: '350px' },
                      shadow: '2xl',
                      textAlign: { lg: 'left', base: 'center' },
                      flexWrap: 'wrap',
                      children: [
                        Object(g.jsx)(y.a, {
                          color: e.primary,
                          textDecoration: 'underline',
                          children: e.title,
                        }),
                        Object(g.jsx)(b.a, {
                          py: '8',
                          fontSize: { lg: '1.2em', base: '1.3em' },
                          color: 'gray.800',
                          lineHeight: '35px',
                          children: e.subTitle,
                        }),
                        Object(g.jsx)(T.a, {
                          bgColor: e.primary,
                          fontSize: '1.1em',
                          _hover: 'disabled',
                          rounded: 'xl',
                          overflowWrap: 'break-word',
                          textAlign: 'center',
                          py: '10',
                          w: 'full',
                          color: 'white',
                          children: e.btnTxt,
                        }),
                      ],
                    });
                  })
                ),
                e)
              ),
              Object(g.jsx)(d.a, {
                justify: 'center',
                w: { lg: '12%', base: 'max' },
                m: 'auto',
                mb: '20',
                cursor: 'pointer',
                borderBottom: '5px solid black',
                borderColor: 'brand.main',
                children: Object(g.jsxs)(
                  b.a,
                  ((t = {
                    gridGap: '2',
                    alignItems: 'center',
                    _hover: { color: 'brand.main' },
                    color: 'gray.700',
                    fontFamily: 'sans-serif',
                    display: 'flex',
                  }),
                  Object(c.a)(t, 'alignItems', 'center'),
                  Object(c.a)(t, 'children', [
                    'See All Guides',
                    ' ',
                    Object(g.jsx)('svg', {
                      xmlns: 'http://www.w3.org/2000/svg',
                      width: '20',
                      height: '20',
                      fill: 'currentColor',
                      class: 'bi bi-arrow-right',
                      viewBox: '0 0 16 16',
                      children: Object(g.jsx)('path', {
                        'fill-rule': 'evenodd',
                        d: 'M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z',
                      }),
                    }),
                  ]),
                  t)
                ),
              }),
            ],
          });
        },
        D = i.p + '../media/post-img-1.4c01ce8a.jpg',
        z = i.p + '../media/post-img-2.7befaba1.jpg',
        C = i.p + '../media/post-img-3.026c4dd5.jpg',
        M = (i.p, i.p, i.p + '../media/post-img-6.5f8a323b.jpg');
      var R = function () {
        var e = [
          {
            img: D,
            name: 'Iris Lje\u0161njanin',
            title: 'New Smashing Online Workshops on Front-End & UX ',
            body: 'What\u2019s the state of HTML Email, Vue.js and Next.js? What are new, smart interface design patterns we could use? Let\u2019s figure it out. With our brand new online workshops on front-end & design. Now with free workshops for you to test the waters. ',
            date: 'September 8, 2021 in Smashing, Workshops',
          },
          {
            img: z,
            name: 'Patrick Brosset',
            title: 'What\u2019s New With DevTools: Cross-Browser Edition ',
            body: 'Learn what\u2019s new with developer tools in Firefox, Edge, Chrome and Safari. Discover new and powerful features that will help you be more comfortable and productive when testing and debugging across browsers. ',
            date: 'September 7, 2021 in Tools, Browsers, Debugging',
          },
          {
            img: C,
            name: 'Martina Marx',
            title: 'HTTP/3: Practical Deployment Options (Part 3)',
            body: 'After almost five years in development, the new HTTP/3 protocol is nearing its final form. Let\u2019s take a close look at the challenges involved in deploying and testing HTTP/3, and how and if you should change your websites and resources as well. ',
            date: 'September 6, 2021 in Performance, Security, Browsers ',
          },
          {
            img: M,
            name: 'Alicia Powell',
            title: 'Reducing Carbon Emissions On The Web ',
            body: 'Websites, unfortunately, aren\u2019t as environmentally friendly as we might like them to be. This article contains some thoughts and experiences from trying to clean them up. ',
            date: 'September 3, 2021 in Performance, Optimization, Opinion Column',
          },
        ];
        return Object(g.jsx)(g.Fragment, {
          children: e.map(function (e) {
            return Object(g.jsxs)(d.a, {
              flexDir: { base: 'column', lg: 'row' },
              alignItems: { base: 'center', lg: 'flex-start' },
              textAlign: { base: 'center', lg: 'left' },
              children: [
                Object(g.jsx)(m.a, {
                  children: Object(g.jsx)(p.a, {
                    w: { lg: '80', base: '40' },
                    className: 'imageRotate',
                    border: '5px solid black',
                    borderRadius: '2xl',
                    my: { base: '5', lg: '0' },
                    borderColor: 'brand.main',
                    src: e.img,
                  }),
                }),
                Object(g.jsxs)(m.a, {
                  pl: { lg: '7', base: '0' },
                  children: [
                    Object(g.jsxs)(b.a, {
                      display: 'inline-block',
                      color: 'brand.main',
                      fontSize: '1.5em',
                      textDecor: 'underline',
                      fontWeight: 'bold',
                      children: [e.name, ' '],
                    }),
                    Object(g.jsx)(b.a, {
                      color: 'gray',
                      display: 'inline-block',
                      fontFamily: 'fantasy',
                      fontSize: '1em',
                      px: '1',
                      fontWeight: 'normal',
                      children: 'wrote',
                    }),
                    Object(g.jsx)(b.a, {
                      fontSize: '1.7em',
                      lineHeight: '40px',
                      my: '5',
                      color: 'gray.800',
                      _hover: { color: 'brand.main', cursor: 'pointer' },
                      fontWeight: 'bold',
                      children: e.title,
                    }),
                    Object(g.jsx)(b.a, {
                      fontSize: { lg: '1.3em', base: '1.2em' },
                      lineHeight: '35px',
                      mt: '5',
                      color: 'gray.900',
                      fontFamily: 'serif',
                      children: e.body,
                    }),
                    Object(g.jsxs)(m.a, {
                      gridGap: '3',
                      display: 'flex',
                      alignItems: 'center',
                      children: [
                        Object(g.jsx)(p.a, {
                          w: '5',
                          h: '5',
                          src: 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-leaf-oktoberfest-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png',
                        }),
                        Object(g.jsx)(b.a, {
                          my: '5',
                          color: 'gray.600',
                          children: e.date,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }),
        });
      };
      i(93);
      var G = function () {
          return Object(g.jsxs)(F.a, {
            maxW: { lg: '90%', base: '100%' },
            pos: 'relative',
            pt: '20',
            children: [
              Object(g.jsxs)(b.a, {
                className: 'latestPostText',
                display: 'flex',
                alignItems: 'center',
                fontWeight: 'normal',
                fontFamily: 'fantasy',
                children: [
                  'Latest Posts',
                  ' ',
                  Object(g.jsx)(m.a, {
                    border: '0.1em solid black',
                    borderColor: 'gray.800',
                    display: { base: 'none', lg: 'block' },
                    w: '24',
                    ml: '2',
                  }),
                ],
              }),
              Object(g.jsx)(m.a, {
                px: { lg: '14', base: '3' },
                display: 'grid',
                gridTemplateColumns: { lg: '1fr 1fr', base: '1fr' },
                gridGap: { lg: '20', base: '16' },
                children: Object(g.jsx)(R, {}),
              }),
              Object(g.jsxs)(b.a, {
                textAlign: 'center',
                w: { lg: '20%', base: 'max' },
                m: 'auto',
                borderBottom: '5px solid black',
                my: '10',
                display: 'flex',
                justifyContent: 'center',
                cursor: 'pointer',
                _hover: { color: 'brand.main' },
                fontFamily: 'sans-serif',
                color: 'gray.600',
                alignItems: 'center',
                gridGap: '1',
                borderColor: 'brand.main',
                children: [
                  'See More Latest Articles',
                  ' ',
                  Object(g.jsx)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    width: '20',
                    height: '20',
                    fill: 'currentColor',
                    class: 'bi bi-arrow-right',
                    viewBox: '0 0 16 16',
                    children: Object(g.jsx)('path', {
                      'fill-rule': 'evenodd',
                      d: 'M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z',
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        I = i.p + '../media/sliding-img-1.5e6590de.png',
        q = i.p + '../media/sliding-img-2.b05efb7e.png',
        X = i.p + '../media/sliding-img-3.99ae420a.png',
        P = i.p + '../media/sliding-img-4.cd28431f.png',
        N = i.p + '../media/sliding-img-5.7c2d756f.png';
      i(94);
      var H = function () {
          Object(n.useRef)();
          var e = [
            {
              img: I,
              heading: 'Smashing Books',
              body: 'b14 printed books and 67 eBooks. Written for web developers, designers and marketeers.ody',
              btn: 'Jump to books \u21ac',
              bottomTxt: 'Free airmail shipping wordlwide. No ifs or buts.',
              primary: '#18A46F',
              secondary: '#F1FDF8',
            },
            {
              img: q,
              heading: 'Smashing Workshops',
              body: 'Online workshops with experts. Broken into 2.5h-segments, with interactive, live sessions.',
              btn: 'Jump to workshops \u21ac',
              bottomTxt: '2.5h live sessions, with video recordings and Q&A.',
              primary: '#006FC6',
              secondary: '#E7F8FF',
            },
            {
              img: X,
              heading: 'Smashing Job Board',
              body: 'Helping designers and developers find great jobs, and connect with great companies.',
              btn: 'Jump to jobs \u21ac',
              bottomTxt: 'Freelancers and full-time, in front-end & UX.',
              primary: '#E62143',
              secondary: '#FFE5E2',
            },
            {
              img: P,
              heading: 'Smashing Membership',
              body: 'A friendly community for people who design and build the web. With discounts, goodies and fancy cats.',
              btn: 'Jump to Membership \u21ac',
              bottomTxt: 'For just 1 coffee a month.',
              primary: '#41B14F',
              secondary: '#E3F7E5',
            },
            {
              img: N,
              heading: 'Smashing Newsletter',
              body: 'Weekly tips on front-end & UX, delivered straight to your inbox. Just practical stuff that you can use.',
              btn: 'Jump to Newsletter \u21ac',
              bottomTxt: 'You can unsubscribe with 1 click any time.',
              primary: '#FF6411',
              secondary: '#FDFFE5',
            },
          ];
          return Object(g.jsx)(F.a, {
            display: 'grid',
            gridGap: '20',
            gridTemplateColumns: 'repeat(5, 1fr)',
            overflow: { lg: 'hidden', base: 'auto' },
            maxW: '90%',
            pos: 'relative',
            id: 'cardsComponent',
            pt: { lg: '48', base: '36' },
            mb: '20',
            children: e.map(function (e) {
              return Object(g.jsxs)(m.a, {
                pos: 'relative',
                bg: e.secondary,
                minH: '200px',
                w: { lg: '450px', base: '400px' },
                p: { lg: '10', base: '4' },
                pt: '32',
                textAlign: 'center',
                children: [
                  Object(g.jsx)(p.a, {
                    pos: 'absolute',
                    w: '60',
                    top: '-32',
                    left: '23%',
                    src: e.img,
                  }),
                  Object(g.jsx)(y.a, { size: 'xl', children: e.heading }),
                  Object(g.jsx)(b.a, {
                    color: 'gray.700',
                    my: '7',
                    fontSize: 'xl',
                    children: e.body,
                  }),
                  Object(g.jsx)(T.a, {
                    _hover: 'disabled',
                    color: 'white',
                    w: 'full',
                    fontSize: '1.3em',
                    bg: e.primary,
                    children: e.btn,
                  }),
                  Object(g.jsx)(b.a, {
                    color: 'gray.500',
                    mt: '7',
                    children: e.bottomTxt,
                  }),
                ],
              });
            }),
          });
        },
        V = i(116),
        U = i(117);
      var J = function () {
          return Object(g.jsxs)(m.a, {
            mt: '40',
            pos: 'relative',
            children: [
              Object(g.jsx)(y.a, {
                textAlign: 'center',
                fontFamily: 'sans-serif',
                fontSize: { lg: '2.2em', base: '2em' },
                w: '90%',
                m: 'auto',
                children: 'That\u2019s The Smashing Family.',
              }),
              Object(g.jsx)(y.a, {
                textAlign: 'center',
                fontSize: { lg: '1.6em', base: '1.4em' },
                my: '3',
                color: 'brand.main',
                fontFamily: 'sans-serif',
                children: 'Smashing Magazine is so much more than articles.',
              }),
              Object(g.jsx)(T.a, {
                onClick: function (e) {
                  document.querySelector('#cardsComponent').scrollLeft -= 600;
                },
                pos: 'absolute',
                bottom: { lg: '80', base: '72' },
                left: { lg: '10', base: '2' },
                color: 'white',
                w: { lg: '14', base: '1' },
                borderRadius: '96',
                _hover: { bg: 'brand.light', color: 'brand.main' },
                bg: 'brand.main',
                zIndex: '999',
                children: Object(g.jsx)(V.a, {}),
              }),
              Object(g.jsx)(H, {}),
              Object(g.jsx)(T.a, {
                onClick: function (e) {
                  document.querySelector('#cardsComponent').scrollLeft += 600;
                },
                pos: 'absolute',
                bottom: { lg: '80', base: '72' },
                _hover: { bg: 'brand.light', color: 'brand.main' },
                borderRadius: '96',
                right: { lg: '10', base: '2' },
                color: 'white',
                w: { lg: '14', base: '1' },
                bg: 'brand.main',
                zIndex: '999',
                children: Object(g.jsx)(U.a, {}),
              }),
            ],
          });
        },
        B = i.p + '../media/online-workshops-summer.bdd22a29.png';
      var Y = function () {
        return Object(g.jsxs)(m.a, {
          bg: '#1B71BB',
          mb: '20',
          minH: '100vh',
          display: 'flex',
          flexDir: 'column',
          px: { lg: '44', base: '5' },
          textColor: 'white',
          children: [
            Object(g.jsx)(b.a, {
              textAlign: 'center',
              textShadow: '2xl',
              fontSize: { lg: '24', base: '22' },
              fontFamily: 'serif',
              mt: '20',
              children: 'September\u2013December 2021 \u2022 New Workshops',
            }),
            Object(g.jsx)(y.a, {
              textAlign: 'center',
              fontSize: { lg: '6xl', base: '2xl' },
              textDecor: 'underline',
              mb: '5',
              mt: { lg: '20', base: '10' },
              children: 'Boost Your Skills Online, On Front-End & Design',
            }),
            Object(g.jsxs)(b.a, {
              textAlign: 'center',
              m: 'auto',
              w: { lg: '80%' },
              fontSize: '1.3em',
              my: '5',
              children: [
                'Meet ',
                Object(g.jsx)('span', {
                  style: { fontWeight: 'bold' },
                  children: ' Smashing Workshops',
                }),
                ', with practical, actionable insights from experts \u2014 live. With interactive exercises, slides, video recordings and a friendly Q&A.',
                ' ',
              ],
            }),
            Object(g.jsxs)(T.a, {
              textAlign: 'center',
              color: '#1B71BB',
              fontSize: { lg: '1.6em', base: '1em' },
              m: 'auto',
              fontFamily: 'serif',
              display: 'flex',
              gridGap: '1',
              alignItems: 'center',
              p: { lg: '9', base: '5' },
              my: '10',
              rounded: 'lg',
              w: 'min',
              children: [
                'Explore all speakers and topics ',
                Object(g.jsx)(U.a, {}),
              ],
            }),
            Object(g.jsx)(p.a, {
              src: B,
              w: { lg: '70%' },
              m: 'auto',
              mt: { lg: '10' },
            }),
          ],
        });
      };
      i(95);
      var Z = function () {
        var e = [
          {
            img: D,
            name: 'Iris Lje\u0161njanin',
            title: 'New Smashing Online Workshops on Front-End & UX ',
            body: 'What\u2019s the state of HTML Email, Vue.js and Next.js? What are new, smart interface design patterns we could use? Let\u2019s figure it out. With our brand new online workshops on front-end & design. Now with free workshops for you to test the waters. ',
            date: 'September 8, 2021 in Smashing, Workshops',
          },
          {
            img: z,
            name: 'Patrick Brosset',
            title: 'What\u2019s New With DevTools: Cross-Browser Edition ',
            body: 'Learn what\u2019s new with developer tools in Firefox, Edge, Chrome and Safari. Discover new and powerful features that will help you be more comfortable and productive when testing and debugging across browsers. ',
            date: 'September 7, 2021 in Tools, Browsers, Debugging',
          },
          {
            img: C,
            name: 'Martina Marx',
            title: 'HTTP/3: Practical Deployment Options (Part 3)',
            body: 'After almost five years in development, the new HTTP/3 protocol is nearing its final form. Let\u2019s take a close look at the challenges involved in deploying and testing HTTP/3, and how and if you should change your websites and resources as well. ',
            date: 'September 6, 2021 in Performance, Security, Browsers ',
          },
          {
            img: M,
            name: 'Alicia Powell',
            title: 'Reducing Carbon Emissions On The Web ',
            body: 'Websites, unfortunately, aren\u2019t as environmentally friendly as we might like them to be. This article contains some thoughts and experiences from trying to clean them up. ',
            date: 'September 3, 2021 in Performance, Optimization, Opinion Column',
          },
        ];
        return Object(g.jsx)(g.Fragment, {
          children: e.map(function (e) {
            return Object(g.jsxs)(d.a, {
              flexDir: { lg: 'row', base: 'column' },
              alignContent: 'center',
              children: [
                Object(g.jsx)(m.a, {
                  children: Object(g.jsx)(p.a, {
                    w: { lg: '80', base: '40' },
                    className: 'imageRotate',
                    border: '5px solid black',
                    borderRadius: '2xl',
                    ml: { base: '16', lg: '0' },
                    mb: { base: '5', lg: '0' },
                    borderColor: 'brand.main',
                    src: e.img,
                  }),
                }),
                Object(g.jsxs)(m.a, {
                  pl: { lg: '7' },
                  children: [
                    Object(g.jsxs)(b.a, {
                      display: 'inline-block',
                      color: 'brand.main',
                      fontSize: '1.5em',
                      textDecor: 'underline',
                      fontWeight: 'bold',
                      children: [e.name, ' '],
                    }),
                    Object(g.jsx)(b.a, {
                      color: 'gray',
                      display: 'inline-block',
                      fontFamily: 'fantasy',
                      fontSize: '1em',
                      px: '1',
                      fontWeight: 'normal',
                      children: 'wrote',
                    }),
                    Object(g.jsx)(b.a, {
                      fontSize: '1.7em',
                      lineHeight: '40px',
                      my: '5',
                      color: 'gray.800',
                      _hover: { color: 'brand.main', cursor: 'pointer' },
                      fontWeight: 'bold',
                      children: e.title,
                    }),
                    Object(g.jsx)(b.a, {
                      fontSize: '1.3em',
                      lineHeight: '35px',
                      mt: '5',
                      color: 'gray.700',
                      fontFamily: 'serif',
                      children: e.body,
                    }),
                    Object(g.jsxs)(m.a, {
                      gridGap: '3',
                      display: 'flex',
                      alignItems: 'center',
                      textAlign: { base: 'left' },
                      children: [
                        Object(g.jsx)(p.a, {
                          w: '5',
                          h: '5',
                          src: 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-leaf-oktoberfest-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png',
                        }),
                        Object(g.jsx)(b.a, {
                          my: '5',
                          color: 'gray.600',
                          children: e.date,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }),
        });
      };
      var K = function () {
          return Object(g.jsxs)(m.a, {
            w: '90%',
            m: 'auto',
            pos: 'relative',
            mt: { base: '40', lg: '0' },
            textAlign: { base: 'center', lg: 'left' },
            children: [
              Object(g.jsxs)(b.a, {
                pos: 'absolute',
                display: 'flex',
                fontFamily: 'sans-serif',
                color: 'gray.800',
                alignItems: 'center',
                className: 'PersonOfTheWeekText',
                children: [
                  'Community Links',
                  ' ',
                  Object(g.jsx)(m.a, {
                    border: '0.1em solid black',
                    borderColor: 'gray.800',
                    w: '24',
                    display: { lg: 'block', base: 'none' },
                    ml: '2',
                  }),
                ],
              }),
              Object(g.jsxs)(d.a, {
                w: { lg: '80%', base: '90%' },
                m: 'auto',
                alignItems: 'center',
                flexDir: { base: 'column', lg: 'row' },
                children: [
                  Object(g.jsx)(p.a, {
                    className: 'imageRotate',
                    w: '40',
                    mx: '10',
                    mb: { base: '5', lg: '0' },
                    h: 'max',
                    borderRadius: '20',
                    border: '8px solid black',
                    borderColor: 'brand.main',
                    src: M,
                  }),
                  Object(g.jsxs)(m.a, {
                    children: [
                      Object(g.jsx)(b.a, {
                        color: 'gray.600',
                        fontFamily: 'serif',
                        fontSize: '1.2em',
                        children: 'Person Of The Week',
                      }),
                      Object(g.jsx)(b.a, {
                        fontSize: '1.2em',
                        py: '10',
                        children:
                          'Ifeoma Imoh (@iphiee_omah) is a front-end developer who loves to make things with JavaScript. She started coding in 2019 and runs a YouTube channel where she shares JavaScript tutorials and interesting things she came across on her learning journey that might help other developers, too. Thank you for sharing and caring, dear Ifeoma!',
                      }),
                    ],
                  }),
                ],
              }),
              Object(g.jsx)(m.a, {
                px: { lg: '14', base: '1' },
                py: '24',
                display: 'grid',
                justify: 'center',
                gridTemplateColumns: { lg: '1fr 1fr' },
                gridGap: '20',
                children: Object(g.jsx)(Z, {}),
              }),
              Object(g.jsxs)(b.a, {
                borderBottom: '5px solid',
                borderColor: 'brand.main',
                w: { lg: '20%', base: 'max' },
                m: 'auto',
                display: 'flex',
                justifyContent: 'center',
                gridGap: '1',
                _hover: { color: 'brand.main', cursor: 'pointer' },
                alignItems: 'center',
                fontFamily: 'sans-serif',
                fontSize: '1.1em',
                mb: '28',
                color: 'gray.700',
                textAlign: 'center',
                children: ['More links on Twitter ', Object(g.jsx)(U.a, {})],
              }),
            ],
          });
        },
        L = i(125);
      i(96);
      var Q = function () {
        return Object(g.jsxs)(m.a, {
          minH: '100vh',
          bg: 'brand.main',
          color: 'white',
          textAlign: { lg: 'center' },
          px: { lg: '32', base: '5' },
          pos: 'relative',
          children: [
            Object(g.jsx)(y.a, {
              py: '10',
              children: 'Browse All Smashing Magazine Topics',
            }),
            Object(g.jsx)(L.b, {
              display: { lg: 'flex', base: 'grid' },
              gridTemplateColumns: '1fr 1fr',
              listStyleType: 'none',
              gridGap: '10',
              flexWrap: 'wrap',
              justifyContent: 'center',
              mt: '10',
              lineHeight: { lg: '10px' },
              children: [
                'Accessibility',
                'Android',
                'Animation',
                'Apps',
                'CSS',
                'Design',
                'Design Patterns',
                'Design Systems',
                'E-Commerce',
                'Freebies',
                'Graphics',
                'HTML',
                'Illustrator',
                'Inspiration',
                'iOS',
                'JavaScript',
                'Mobile Pattern',
                'Libraries',
                'Performance',
                'Photoshop Plugins',
                'React',
                'Responsive Design Service',
                'Workers',
                'Sketch',
                'Typography',
                'UI',
                'Usability',
                'User',
                'Experience',
                'Wallpapers',
                'Web',
                'Design',
                'WordPress',
                'Workflow',
              ].map(function (e) {
                return Object(g.jsx)(L.a, {
                  fontSize: { lg: '1.4em', base: '1em' },
                  color: 'white',
                  className: 'listDot',
                  cursor: 'pointer',
                  _hover: { color: 'gray.800' },
                  children: e,
                });
              }),
            }),
            Object(g.jsxs)(b.a, {
              m: 'auto',
              textAlign: 'center',
              w: { lg: '40%' },
              fontSize: 'medium',
              fontStyle: 'italic',
              pt: { lg: '20', base: '16' },
              children: [
                'With a commitment to quality content for the design community. Founded by Vitaly Friedman and Sven Lennartz. 2006\u20132021. Smashing is proudly running on ',
                Object(g.jsx)('span', {
                  style: { textDecoration: 'underline' },
                  children: ' Netlify',
                }),
                '. ',
                Object(g.jsx)('br', {}),
                ' Fonts by',
                ' ',
                Object(g.jsx)('span', {
                  style: { textDecoration: 'underline' },
                  children: ' Latinotype ',
                }),
                '.',
              ],
            }),
            Object(g.jsxs)(d.a, {
              gridGap: { lg: '5', base: '2' },
              pt: '7',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: { base: '14', lg: 'lg' },
              textAlign: { base: 'center', lg: 'left' },
              textDecor: { lg: 'underline', base: 'none' },
              children: [
                Object(g.jsx)(b.a, { children: '\u270e Write for us ' }),
                ' ',
                Object(g.jsx)(b.a, { children: ' Contact us ' }),
                ' ',
                Object(g.jsx)(b.a, { children: ' About us (Impressum)' }),
                ' ',
              ],
            }),
            Object(g.jsxs)(d.a, {
              gridGap: { lg: '5', base: '0' },
              py: '5',
              justify: 'center',
              cursor: 'pointer',
              textAlign: { base: 'center', lg: 'left' },
              fontSize: { base: '15px', lg: 'lg' },
              textDecor: { lg: 'underline', base: 'none' },
              children: [
                Object(g.jsx)(b.a, { children: ' Privacy policy ' }),
                ' ',
                Object(g.jsx)(b.a, { children: ' Membership login ' }),
                ' ',
                Object(g.jsx)(b.a, { children: ' Delivery times' }),
                ' ',
                Object(g.jsx)(b.a, { children: 'Advertise' }),
                ' ',
              ],
            }),
            Object(g.jsx)(p.a, {
              bottom: '10',
              w: { lg: '20' },
              py: { base: '5' },
              pos: { lg: 'absolute' },
              src: 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-bird-spring-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-1.png',
            }),
          ],
        });
      };
      var _ = function () {
        return Object(g.jsxs)('div', {
          style: { overflowX: 'hidden' },
          children: [
            Object(g.jsx)(f, {}),
            Object(g.jsx)(E, {}),
            Object(g.jsx)(W, {}),
            Object(g.jsx)(G, {}),
            Object(g.jsx)(J, {}),
            Object(g.jsx)(Y, {}),
            Object(g.jsx)(K, {}),
            Object(g.jsx)(Q, {}),
          ],
        });
      };
      var $ = function () {
        var e = Object(l.a)({
          colors: {
            brand: { main: '#D33A2C', dark: '#B43125', light: '#FFE3E3' },
          },
        });
        return Object(g.jsx)(s.a, { theme: e, children: Object(g.jsx)(_, {}) });
      };
      o.a.render(
        Object(g.jsx)(r.a.StrictMode, { children: Object(g.jsx)($, {}) }),
        document.getElementById('root')
      );
    },
  },
  [[97, 1, 2]],
]);
//# sourceMappingURL=main.5dc7e56d.chunk.js.map
