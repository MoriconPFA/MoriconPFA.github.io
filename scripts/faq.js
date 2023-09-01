const faqContainer = document.querySelector("#faq");

const faqContent = [
	{
		q: "Czy mogę sam pójść na Moricon nie mając 18 lat?",
		a: "To zależy! Osoby poniżej 18 roku życia muszą okazać na wejściu wypełnione oświadczenie rodzica o zgodzie na uczestnictwo dziecka w konwencie (do pobrania na naszej stronie). Dzieci do lat 12 mogą z kolei wziąć udział w konwencie wyłącznie znajdując się pod ciągłym nadzorem opiekuna prawnego lub osoby do tego upoważnionej, która ukończyła 18 rok życia."
	}, {
		q: "Nie mam ze sobą opaski na rękę. Czy wejdę na konwent okazując tylko identyfikator?",
		a: "Wyłącznie opaska uprawnia do przebywania na terenie konwentu. Osoby bez opaski będą kierowane do punktu akredytacyjnego w celu uzyskania nowej."
	}, {
		q: "Czy opaska ulegnie zniszczeniu podczas kąpieli?",
		a: "Nasze opaski są bardzo wytrzymałe i z pewnością kąpiel nie jest im straszna."
	}, {
		q: "Czy jeśli kupiłem bilet trzydniowy to na każdy dzień otrzymam inną opaskę?",
		a: "Nie, opaskę otrzymujesz jedną w zależności od zakupionego biletu. Wyjątkiem jest sytuacja, gdy kupujesz bilet oddzielnie na każdy dzień."
	}, {
		q: "Kupiłem bilet online, gdzie i kiedy mogę odebrać wejściówkę?",
		a: `Akredytacja będzie czynna:
		w piątek od 13:00 do 20:00;
		w sobotę, 09.09.2023 r.,  od 09:00 do 18:00;
		w niedzielę, 10.09.2023 r., od 09:00 do 13:00.`
	}, {
		q: "Czy na Moriconie będzie sleep?",
		a: "Niestety nie mamy sleepa, ale pobliskie akademiki oferują pokoje blisko konwentu w przystępnych cenach."
	}, {
		q: "Elementem mojego cosplayu jest broń lub replika. Czy mogę ją wnieść na konwent?",
		a: "Każdy taki element należy zgłosić nam przed imprezą, aby uzyskać na niego piemną zgodę organizatora. Kontaktować się w tej sprawie możecie na naszej stronie na Facebooku."
	}, {
		q: "Czy mogę kupić wejściówkę na miejscu?",
		a: "Tak."
	}, {
		q: "W jakich godzinach mogę przebywać na terenie Moriconu?",
		a: `
		Zapraszamy w godzinach:<br>
		Piątek: 14:00 - 20:00<br>
		Sobota: 9:00 - 20:00<br>
		Niedziela: 9:00 - 14:00`
	}, {
		q: "Czy na konwencie dostępna będzie szatnia?",
		a: "Tak."
	}, {
		q: "Kto może bezpłatnie wejść na Moricon?",
		a: "Zwolnione z opłaty są osoby niepełnosprawne posiadające ważne orzeczenie o stopniu niepełnosprawności lub posiadające legitymacje osoby niepełnosprawnej oraz dzieci do lat 6. Dokumenty potwierdzające wyżej wymienione należy okazać przy zakupie biletu na akredytacji."
	}, {
		q: "Co będzie mi potrzebne do odbioru wejściówki?",
		a: `
		- przede wszystkim kod QR potwierdzający zakup biletu<br>
		- dokument ze zdjęciem potwierdzający tożsamość<br>
		- zgoda rodzica w przypadku osób nieletnich<br><br>
		Jeśli z kolei chcesz zakupić wejściówkę na miejscu, należy podejść do odpowiednio oznaczonego punktu.`
	}, {
		q: "Czy mogę oddać mój bilet zakupiony online innej osobie?",
		a: "Wszystkie bilety nabyte w przedsprzedaży internetowej są imienne, a tożsamość osoby będzie weryfikowana na akredytacji. Jeśli z jakiegoś powodu nie chcesz lub nie możesz uczestniczyć w konwencie, a bilet chcesz przekazać innej osobie to będziemy musieli prosić o pojawienie się wraz z tą osobą w punkcie akredytacyjnym. Tam po potwierdzeniu danych właściciela, zostanie zaopaskowana wskazana przez ciebie osoba."
	}, {
		q: "Czy na Moriconie można pić piwo?",
		a: "Nie. Na terenie Moriconu obowiązuje całkowity zakaz spożywania alkoholu. Osoby będące widocznie pod wpływem alkoholu, nie będą mogły wejść na teren konwentu."
	}, {
		q: "Jestem świadkiem niepokojącej sytuacji na konwencie. Co powinienem zrobić?",
		a: "Przede wszystkim powiadomić helperów, którzy w zależności od zdarzenia uporają się z sytuacją bądź przekażą informację do odpowiedniego koordynatora. Helperów najprościej znajdziesz w tłumie dzięki specjalnym moriconowym koszulkom bądź możesz też zgłosić się do punktu akredytacji."
	}, {
		q: "Czy muszę gdzieś zgłosić, że przyjdę w cosplayu?",
		a: "Nie ma takiej potrzeby! Wyjątkiem jest sytuacja, kiedy chcesz wziąć udział w konkursie cosplay (wtedy musisz uzupełnić odpowiedni formularz na naszej stronie). Jeśli element twojego stroju zawiera broń bądź replikę to musisz wcześniej zapytać nas o zgodę na jej wniesienie. Możesz ją uzyskać pisząc do nas na Facebooku."
	}
]

faqContainer.querySelectorAll("details").forEach((details) => {
	faqContainer.removeChild(details)
});

faqContent.forEach((qa) => {
	const details = document.createElement("details");
	const summary = document.createElement("summary");
	const answerContainer = document.createElement("div");

	summary.innerHTML = qa.q;
	details.appendChild(summary);

	answerContainer.innerHTML = qa.a;

	details.appendChild(answerContainer);
	faqContainer.appendChild(details);
})

