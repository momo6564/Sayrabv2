export interface AuthUser {
  email: string;
  fullName: string;
  givenName?: string;
  familyName?: string;
  imageUrl?: string;
  googleSub: string;
}

const AUTH_STORAGE_KEY = 'sayrab.auth.user';
const AUTH_EVENT = 'sayrab-auth-changed';

function emitAuthChange() {
  window.dispatchEvent(new Event(AUTH_EVENT));
}

export function getStoredUser(): AuthUser | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const raw = window.localStorage.getItem(AUTH_STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as AuthUser;
  } catch {
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
    return null;
  }
}

export function storeUser(user: AuthUser) {
  window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
  emitAuthChange();
}

export function clearStoredUser() {
  window.localStorage.removeItem(AUTH_STORAGE_KEY);
  emitAuthChange();
}

export function subscribeToAuthChanges(listener: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === AUTH_STORAGE_KEY) {
      listener();
    }
  };

  window.addEventListener(AUTH_EVENT, listener);
  window.addEventListener('storage', handleStorage);

  return () => {
    window.removeEventListener(AUTH_EVENT, listener);
    window.removeEventListener('storage', handleStorage);
  };
}

export function decodeGoogleCredential(credential: string): AuthUser | null {
  const parts = credential.split('.');
  if (parts.length < 2) {
    return null;
  }

  try {
    const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));

    if (!payload.email || !payload.sub || !payload.name) {
      return null;
    }

    return {
      email: payload.email,
      fullName: payload.name,
      givenName: payload.given_name,
      familyName: payload.family_name,
      imageUrl: payload.picture,
      googleSub: payload.sub,
    };
  } catch {
    return null;
  }
}
