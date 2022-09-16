import { memo } from 'react';

export const Comments: React.FC = () => (
  <section
    ref={(elem) => {
      if (!elem) {
        return;
      }
      const scriptElem = document.createElement('script');
      scriptElem.src = 'https://giscus.app/client.js';
      scriptElem.async = true;
      scriptElem.crossOrigin = 'anonymous';
      scriptElem.setAttribute('data-repo', 'seongsoo96/comments');
      scriptElem.setAttribute('data-repo-id', 'R_kgDOHQlpBQ');
      scriptElem.setAttribute('data-category', 'Announcements');
      scriptElem.setAttribute('data-category-id', 'DIC_kwDOHQlpBc4CRHHs');
      scriptElem.setAttribute('data-mapping', 'pathname');
      scriptElem.setAttribute('data-strict', '0');
      scriptElem.setAttribute('data-reactions-enabled', '1');
      scriptElem.setAttribute('data-emit-metadata', '0');
      scriptElem.setAttribute('data-input-position', 'top');
      scriptElem.setAttribute('data-theme', 'dark_dimmed');
      scriptElem.setAttribute('data-lang', 'ko');
      elem.appendChild(scriptElem);
    }}
  />
);

export default memo(Comments);
