import { template } from "lodash";

const script = template(`
<a class="typeform-share link"
  href="<%= typeformUrl %>"
  data-mode="<%= mode %>"
  target="_blank">Launch me!
</a>
<script>(function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id="typef_orm_share",b="https://s3-eu-west-1.amazonaws.com/share.typeform.com/";if(!gi.call(d,id)){js=ce.call(d,"script");js.id=id;js.src=b+"share.js";q=gt.call(d,"script")[0];q.parentNode.insertBefore(js,q)}})()</script>`);

export default script;
