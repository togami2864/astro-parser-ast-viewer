import {
  decompressFromEncodedURIComponent,
  compressToEncodedURIComponent,
} from 'lz-string';

interface State {
  source: string | null;
}

export const setHash = (state: State): void => {
  const hash = compressToEncodedURIComponent(JSON.stringify(state));
  location.hash = hash;
};

export const readHash = (): State => {
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
