import {
  decompressFromEncodedURIComponent,
  compressToEncodedURIComponent,
} from 'lz-string';

interface replState {
  source: string | null;
}

export const updateHash = (state: replState): void => {
  const hash = compressToEncodedURIComponent(JSON.stringify(state));
  if (
    typeof URL === 'function' &&
    typeof 'object' &&
    typeof history.replaceState === 'function'
  ) {
    const url = new URL(location.href);
    url.hash = hash;
    history.replaceState(null, '', url);
  } else {
    location.hash = hash;
  }
};

export const readHash = (): replState => {
  const hash = document.location.hash.slice(1);
  if (!hash) {
    return { source: null };
  }
  const decoded = decompressFromEncodedURIComponent(hash);
  if (!decoded) {
    return { source: null };
  }
  try {
    return JSON.parse(decoded as string);
  } catch (error) {
    return { source: null };
  }
};
