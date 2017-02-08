import widgetScriptTemplate from './widget-embed-script';
import fullpageScriptTemplate from './fullpage-embed-script';
import popupButtonScriptTemplate from './popup-button-embed-script';
import popupLinkScriptTemplate from './popup-link-embed-script';
import {
  EMBED_TYPES,
  HIDE_HEADER_PARAM,
  HIDE_FOOTER_PARAM,
  HIDE_SCROLLBAR_PARAM,
  OPACITY_PARAM,
  POPUP_EMBED_MODES,
  TYPEFORM_URL
} from '../utils/constants';

function generateUrl(options) {
  const {
    uid,
    hideHeader,
    hideFooter,
    hideScrollbar,
    opacity
  } = options;

  const url = `${TYPEFORM_URL}${uid}?`
    .concat(hideHeader ? `${HIDE_HEADER_PARAM}=true&`: '')
    .concat(hideFooter ? `${HIDE_FOOTER_PARAM}=true&`: '')
    .concat(hideScrollbar ? `${HIDE_SCROLLBAR_PARAM}=true&`: '')
    .concat(`${OPACITY_PARAM}=${opacity}`)
  
  return url;
}

function generate(embedType, options) {
  const {    
    title,
    width,
    height,
    modalMode
  } = options;
  const url = generateUrl(options);
  let script = '';

  switch (embedType) {
    case EMBED_TYPES.FULLPAGE:
      script = fullpageScriptTemplate({
        typeformUrl: url,
        title
      });
      break;

    case EMBED_TYPES.POPUP_BUTTON:
      script = popupButtonScriptTemplate({
        typeformUrl: url,
        mode: modalMode || POPUP_EMBED_MODES.MODAL
      });
      break;

    case EMBED_TYPES.POPUP_LINK:
      script = popupLinkScriptTemplate({
        typeformUrl: url,
        mode: modalMode || POPUP_EMBED_MODES.MODAL
      });
      break;

    case EMBED_TYPES.WIDGET:
      script = widgetScriptTemplate({
        typeformUrl: url,
        title,
        width,
        height
      });
      break;
  }

  return script;
}

export default generate;
