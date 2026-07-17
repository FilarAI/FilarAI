// Obecność pliku JEST przełącznikiem — brak pola `hero` w danych jest celowy.
//
// Wrzuć screen do src/assets/realizacje/ jako {slug}-hero.png (albo .jpg/.webp) i ten
// wpis sam przestanie renderować kafel z logiem, a zacznie zdjęcie. Zero edycji kodu,
// zero pola do zapomnienia.
//
// src/assets/, a nie public/ — <Image> optymalizuje tylko to, co potrafi zaimportować.
// Surowe PNG-i 3300px z public/ to kilka MB każdy; osiem na stronie zabija telefon.

import type { ImageMetadata } from "astro";

const assets = import.meta.glob<{ default: ImageMetadata }>(
	"/src/assets/realizacje/*.{png,jpg,jpeg,webp}",
	{ eager: true },
);

export type RodzajAssetu = "hero" | "przed" | "po";

/** Zwraca ImageMetadata albo undefined. To `undefined` jest gałęzią degradacji. */
export function asset(slug: string, rodzaj: RodzajAssetu): ImageMetadata | undefined {
	const wpis = Object.entries(assets).find(([sciezka]) =>
		sciezka.includes(`/${slug}-${rodzaj}.`),
	);
	return wpis?.[1].default;
}

/** Slider przed/po ma sens tylko z obiema połówkami. */
export function maPrzedPo(slug: string): boolean {
	return Boolean(asset(slug, "przed") && asset(slug, "po"));
}
