import { memo } from 'react';

export const Comments: React.FC = () => (
  <section
    ref={(elem) => {
      if (!elem) {
        return;
      }
      const scriptElem = document.createElement('script');
      scriptElem.src = 'https://utteranc.es/client.js';
      scriptElem.async = true;
      scriptElem.crossOrigin = 'anonymous';
      scriptElem.setAttribute('repo', 'seongsoo96/comments');
      scriptElem.setAttribute('issue-term', 'title');
      scriptElem.setAttribute('label', 'comment');
      scriptElem.setAttribute('theme', 'github-dark');
      elem.appendChild(scriptElem);
    }}
  />
);

export default memo(Comments);
