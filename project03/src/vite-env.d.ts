/// <reference types="vite/client" />

declare global {
	interface Window {
		kakao: typeof kakao;
	}
}

export {}