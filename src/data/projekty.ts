// Realizacje — jedno źródło prawdy dla /portfolio i /portfolio/[slug].
//
// Kolejność tablicy = kolejność wyświetlania. Bez sortowania, bez pola `kolejnosc` —
// przestawienie to cut-paste.
//
// Świadomie BEZ pól na obrazy. Obecność screena wynika z plików w src/assets/realizacje/
// (patrz realizacje-assets.ts). Pole trzymane ręcznie w zgodzie z plikiem rozjechałoby się.
//
// UWAGA: treści poniżej są ROBOCZE — napisane z tego, co wiadomo z kodu i nazw klientów.
// Do korekty przez Kacpra. Pole `efekt` jest najważniejsze (grupa docelowa kupuje dowody,
// nie estetykę) i wymaga realnych danych.

export type Typ = "strona" | "seo" | "system";

/** Etykiety kategorii — używane przez filtr i meta-linię rzędu. */
export const etykietyTypow: Record<Typ, string> = {
	strona: "Strony WWW",
	seo: "SEO & GEO",
	system: "Systemy AI",
};

/** Proporcje płyty wg typu — to one dają poszarpaną prawą krawędź indeksu.
 *  Strona WWW jest pozioma, ekran aplikacji pionowy, wykres SEO kwadratowy. */
export const proporcjeTypu: Record<Typ, string> = {
	strona: "16 / 10",
	seo: "1 / 1",
	system: "4 / 5",
};

export interface Projekt {
	/** Musi zgadzać się z nazwą pliku w src/assets/realizacje/ ({slug}-hero.png). */
	slug: string;
	klient: string;
	branza: string;
	typ: Typ;
	rok: number;
	/** Fallback gdy brak screena — logo klienta na kaflu. Ścieżka z public/. */
	logo?: string;
	/** Brak = nie pokazujemy linku live. */
	link?: string;
	/** 1 zdanie — na rząd w indeksie. */
	zakres: string;
	/** 1 zdanie z liczbą lub konkretem — na rząd w indeksie. Puenta. */
	efekt: string;
	problem: string;
	/** 1–3 akapity. Długość zmienia rytm case study. */
	rozwiazanie: string[];
	rezultat: string;
}

export const projekty: Projekt[] = [
	{
		slug: "planeta-mebli",
		klient: "Planeta Mebli",
		branza: "Producent mebli na wymiar",
		typ: "strona",
		rok: 2024,
		logo: "/klienci/loga/planeta-mebli.svg",
		zakres: "Strona sprzedażowa z katalogiem realizacji i formularzem wyceny.",
		efekt: "Zapytania z formularza zamiast telefonów w godzinach pracy.",
		problem:
			"Meble sprzedawały się w rozmowie i w salonie, ale w internecie firma praktycznie nie istniała. Klienci, którzy trafiali na starą stronę, nie mieli jak zobaczyć realizacji ani szybko zapytać o wycenę.",
		rozwiazanie: [
			"Zbudowałem stronę wokół jednego zadania: pokazać realizacje i zebrać zapytanie. Katalog projektów dostał czytelną siatkę ze zdjęciami, a każdy widok kończy się formularzem wyceny.",
			"Formularz leci prosto na maila właściciela, więc żadne zapytanie nie ginie w panelu, do którego nikt nie zagląda.",
		],
		rezultat:
			"Zapytania zaczęły przychodzić poza godzinami pracy salonu, a rozmowa z klientem startuje od konkretu, bo widział już realizacje.",
	},
	{
		slug: "elgraf",
		klient: "Elgraf",
		branza: "Usługi elektryczne",
		typ: "system",
		rok: 2025,
		zakres: "Automatyczne zbieranie opinii Google po zakończonym zleceniu.",
		efekt: "Opinie zbierają się same, bez przypominania klientom.",
		problem:
			"Firma robiła dobrą robotę, ale w Google miała kilka opinii. Proszenie klienta o opinię wymagało pamiętania o tym po każdym zleceniu, więc w praktyce nie działo się nigdy.",
		rozwiazanie: [
			"Zbudowałem system, który po zamknięciu zlecenia sam wysyła klientowi wiadomość z linkiem do wystawienia opinii. Bez ręcznej roboty, bez pamiętania.",
			"Wiadomość jest krótka i prowadzi jednym kliknięciem do formularza Google. Im mniej kroków, tym więcej opinii.",
		],
		rezultat:
			"Zbieranie opinii przestało zależeć od tego, czy ktoś sobie przypomni. System pilnuje tego po każdym zleceniu.",
	},
	{
		slug: "domki-na-luzie",
		klient: "Domki na Luzie",
		branza: "Wynajem domków letniskowych",
		typ: "system",
		rok: 2024,
		logo: "/klienci/loga/domki-na-luzie.svg",
		zakres: "System rezerwacji online z kalendarzem dostępności.",
		efekt: "Rezerwacje idą online, bez telefonów i ręcznego kalendarza.",
		problem:
			"Rezerwacje szły telefonicznie i lądowały w kalendarzu prowadzonym ręcznie. Przy sezonie to znaczyło ciągłe telefony i ryzyko podwójnej rezerwacji tego samego terminu.",
		rozwiazanie: [
			"Wdrożyłem rezerwacje online z kalendarzem dostępności. Gość widzi wolne terminy i rezerwuje sam, o dowolnej porze.",
			"Kalendarz jest jednym źródłem prawdy, więc podwójna rezerwacja przestała być możliwa.",
		],
		rezultat:
			"Rezerwacje przychodzą w nocy i w weekendy, kiedy nikt nie odebrałby telefonu. Właściciel przestał być centralą.",
	},
	{
		slug: "filar-drone",
		klient: "Filar Drone",
		branza: "Usługi dronowe",
		typ: "strona",
		rok: 2024,
		logo: "/klienci/loga/filar-drone-light.svg",
		zakres: "Strona wizytówkowa z portfolio nagrań i formularzem kontaktowym.",
		efekt: "Klient widzi nagrania zanim zadzwoni.",
		problem:
			"Usługi dronowe sprzedaje materiał wideo, a nie opis. Bez miejsca, gdzie klient może zobaczyć realizacje, każda rozmowa zaczynała się od tłumaczenia, co firma w ogóle robi.",
		rozwiazanie: [
			"Zbudowałem stronę, na której nagrania są bohaterem, a nie dodatkiem. Portfolio ładuje się szybko mimo materiału wideo.",
		],
		rezultat: "Rozmowa z klientem startuje od zakresu i terminu, a nie od tłumaczenia, czym jest usługa dronowa.",
	},
	{
		slug: "eden-capital",
		klient: "Eden Capital",
		branza: "Doradztwo finansowe",
		typ: "strona",
		rok: 2024,
		logo: "/klienci/loga/eden-capital-light.svg",
		zakres: "Strona firmowa budująca wiarygodność w branży finansowej.",
		efekt: "Strona, która wygląda na firmę, której można powierzyć pieniądze.",
		problem:
			"W doradztwie finansowym pierwsze wrażenie decyduje o zaufaniu. Strona musiała wyglądać poważnie, zanim klient przeczyta pierwsze zdanie.",
		rozwiazanie: [
			"Postawiłem na spokojną, uporządkowaną kompozycję i czytelną hierarchię. Zero efekciarstwa, które w tej branży czyta się jako brak powagi.",
		],
		rezultat: "Strona przestała być słabym punktem w rozmowie z klientem, który sprawdza firmę przed spotkaniem.",
	},
	{
		slug: "parafia-marii-magdaleny",
		klient: "Parafia św. Marii Magdaleny",
		branza: "Instytucja",
		typ: "strona",
		rok: 2023,
		logo: "/klienci/loga/parafia-jasne.svg",
		zakres: "Strona parafialna z aktualnościami i porządkiem nabożeństw.",
		efekt: "Godziny nabożeństw dostępne bez dzwonienia do kancelarii.",
		problem:
			"Informacje o porządku nabożeństw i intencjach krążyły w ogłoszeniach i przez telefon do kancelarii. Kto nie był w kościele, nie wiedział.",
		rozwiazanie: [
			"Zbudowałem stronę, na której porządek nabożeństw i aktualności są na wierzchu, czytelne również na telefonie, bo tak zagląda większość odwiedzających.",
		],
		rezultat: "Parafianie sprawdzają godziny sami, o dowolnej porze. Kancelaria odbiera mniej telefonów o to samo.",
	},
	{
		slug: "hc",
		klient: "HC",
		branza: "Usługi",
		typ: "strona",
		rok: 2024,
		logo: "/klienci/loga/hc.svg",
		zakres: "Strona firmowa z prezentacją oferty i kontaktem.",
		efekt: "Oferta czytelna w jednym miejscu, zamiast w rozmowie.",
		problem: "Firma nie miała miejsca w sieci, do którego mogłaby odesłać klienta po szczegóły oferty.",
		rozwiazanie: [
			"Zbudowałem zwięzłą stronę firmową: co robimy, dla kogo, jak się skontaktować. Bez rozdmuchiwania treści na siłę.",
		],
		rezultat: "Klient dostaje jeden link zamiast tłumaczenia oferty od zera przy każdej rozmowie.",
	},
	{
		slug: "filar-uslugi",
		klient: "Filar Usługi",
		branza: "Usługi ogólnobudowlane",
		typ: "strona",
		rok: 2023,
		logo: "/klienci/loga/filar-uslugi.svg",
		zakres: "Strona wizytówkowa z zakresem usług i formularzem kontaktowym.",
		efekt: "Zapytania z formularza zamiast wyłącznie z polecenia.",
		problem: "Firma żyła z poleceń. Klient, który usłyszał o niej od znajomego, nie miał gdzie sprawdzić szczegółów.",
		rozwiazanie: [
			"Zbudowałem prostą stronę, która domyka polecenie: klient trafia, widzi zakres usług i od razu może wysłać zapytanie.",
		],
		rezultat: "Polecenie przestało się kończyć na numerze telefonu przekazanym z pamięci.",
	},
];
