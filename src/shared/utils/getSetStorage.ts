// Define a generic type that allows any object shape but enforces type consistency
type StorableObject = Record<string, unknown>;

// === For sessionStorage ===
export const setSessionStorage = (key: string, value: string): void => {
	if (typeof window !== 'undefined') {
		window.sessionStorage.setItem(key, value);
	}
};

export const setObjectSessionStorage = <T extends StorableObject>(key: string, value: T): void => {
	if (typeof window !== 'undefined') {
		window.sessionStorage.setItem(key, JSON.stringify(value));
	}
};

export const getSessionStorage = (key: string): string | null => {
	return typeof window !== 'undefined' ? window.sessionStorage.getItem(key) : null;
};

export const getNumberSessionStorage = (key: string): number | null => {
	const value = getSessionStorage(key);
	return value !== null ? Number(value) : null;
};

export const getBooleanSessionStorage = (key: string): boolean => {
	const value = getSessionStorage(key);
	return Boolean(value);
};

export const getObjectSessionStorage = <T extends StorableObject>(key: string): T | null => {
	const value = getSessionStorage(key);
	if (value === null) {
		return null;
	}
	try {
		return JSON.parse(value) as T;
	} catch {
		return null;
	}
};

// === For localStorage ===
export const setLocalStorage = (key: string, value: string): void => {
	if (typeof window !== 'undefined') {
		window.localStorage.setItem(key, value);
	}
};

export const setObjectLocalStorage = <T extends StorableObject>(key: string, value: T): void => {
	if (typeof window !== 'undefined') {
		window.localStorage.setItem(key, JSON.stringify(value));
	}
};

export const getLocalStorage = (key: string): string | null => {
	return typeof window !== 'undefined' ? window.localStorage.getItem(key) : null;
};

export const getNumberLocalStorage = (key: string): number | null => {
	const value = getLocalStorage(key);
	return value !== null ? Number(value) : null;
};

export const getBooleanLocalStorage = (key: string): boolean => {
	const value = getLocalStorage(key);
	return Boolean(value);
};

export const getObjectLocalStorage = <T extends StorableObject>(key: string): T | null => {
	const value = getLocalStorage(key);
	if (value === null) {
		return null;
	}
	try {
		return JSON.parse(value) as T;
	} catch {
		return null;
	}
};
