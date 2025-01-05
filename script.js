$(document).ready(function () {
	var magic8Ball = {};
	magic8Ball.listOfAnswers = [
		"Já si myslím, že určitě",
		"No tak to v žádném případě",
		"Mám hlad, nejsem si jistý",
		"Hele nemaluj mi tady zajíce na zeď",
	];

	$("#answer").hide();

	// Funkce pro zobrazení tlačítka po stisknutí F
	$(document).keydown(function (e) {
		console.log("Key pressed:", e.key); // Log pro kontrolu stisknuté klávesy
		if (e.key === "f" || e.key === "F") {
			console.log("F pressed, showing secret button");
			// Zobrazíme tajné tlačítko po stisknutí klávesy "f"
			$("#secretButton").addClass("show");
		}
	});

	// Funkce pro otevření nové záložky s obrázkem
	$("#secretButton").click(function () {
		console.log("Secret button clicked, opening new tab");

		// Otevře novou záložku s obrázkem
		window.open("/images/debilek.png", "_blank");
	});

	// Dotaz na Mlátiče
	magic8Ball.askQuestion = function (question) {
		$("#8ball").css({
			width: "50%", // Nastavení obrázku na pevnou šířku
			height: "auto", // Udržuje poměr stran
			transform: "none", // Zajišťuje, že obrázek nebude ovlivněn transformací
		});

		$("#8ball").attr("src", "/images/mlatic_naked_dance.png");

		$(".ball").effect("shake", {}, 500, function () {
			var newSrc = "./images/mlatic_head_1.jpg?" + new Date().getTime(); // Přidání timestampu pro zamezení cache
			$("#8ball").attr("src", newSrc);
			$("#8ball").attr("alt", "Chleba");
		});

		$("#answer").fadeIn(3000);

		var randomNumber = Math.random();
		var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
		var randomIndex = Math.floor(randomNumberForListOfAnswers);
		var answer = this.listOfAnswers[randomIndex];

		$("#answer").text(answer);
	};

	var onClick = function () {
		$("#answer").hide();

		$("#8ball").attr("src", "/images/Mlatic_hail.png");
		$("#8ball").css({
			width: "50%",
			height: "auto",
			transform: "none",
		});

		setTimeout(function () {
			var question = prompt(
				"Zeptej se mistra Mlátiče na cokoliv včetně dotazů na financování své budoucnosti. Zkus se ptát tak, ať Mlátič zvládne odpovědět, tedy ANO/NE"
			);
			magic8Ball.askQuestion(question);
		}, 500);
	};

	// Spuštění akce při kliknutí na tlačítko
	$("#questionButton").click(onClick);
});
