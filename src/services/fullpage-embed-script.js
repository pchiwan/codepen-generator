import { template } from 'lodash';

const script = template(`
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <title><%= title %></title>
  <style type="text/css">
    html{
      margin: 0;
      height: 100%;
      overflow: hidden;
    }
    iframe{
      position: absolute;
      left:0;
      right:0;
      bottom:0;
      top:0;
      border:0;
    }
  </style>
</head>
<body>
  <iframe id="typeform-full"
    width="100%"
    height="100%"
    frameborder="0"
    src="<%= typeformUrl %>"></iframe>
  <script type="text/javascript" src="https://s3-eu-west-1.amazonaws.com/share.typeform.com/embed.js"></script>
</body>
</html>`);

export default script;