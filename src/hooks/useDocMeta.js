import { useEffect } from 'react'

const useDocMeta = (title, faviconPath) => {
  useEffect(() => {
    if (title) document.title = title;
    
    if (faviconPath) {
      const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = faviconPath;
      document.getElementsByTagName('head')[0].appendChild(link);
    }
  }, [title, faviconPath]);
};

export default useDocMeta