export const EMBED_TYPES = {
  FULLPAGE: 'fullpage',
  POPUP_BUTTON: 'button',
  POPUP_LINK: 'link',
  WIDGET: 'widget'
};

export const POPUP_EMBED_MODES = {
  MODAL: 1,
  DRAWER: 2
};

export const TYPEFORM_URL = 'http://forms.typeform.com/to/';

export const HIDE_HEADER_PARAM = 'embed-hide-headers';

export const HIDE_FOOTER_PARAM = 'embed-hide-footer';

export const HIDE_SCROLLBAR_PARAM = 'embed-hide-scrollbars';

export const OPACITY_PARAM = 'embed-opacity';

export const DEFAULT_EXAMPLE_HTML_PRE = 
`<head>
  <style type="text/css">
    body{
      padding-top: 20px;
      margin: 0 40px;
      background: url(https://subtlepatterns.com/patterns/restaurant_icons.png);
      font-family: Arial, Helvetica, sans-serif;
      color: black;
      text-align: center;
    }
    h1{
      font-family: 'Arial';
    }
  </style>
</head>
<body>
  <h1>This is an embedded typeform</h1>  
  <p>Tiramisu danish powder gingerbread sugar plum wafer biscuit marzipan.</p>
  <br>`;

export const DEFAULT_EXAMPLE_HTML_POST = '</body>';
