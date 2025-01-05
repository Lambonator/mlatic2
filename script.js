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
		window.open("./images/debilek.png", "_blank");
	});

	// Dotaz na Mlátiče
	magic8Ball.askQuestion = function (question) {
		if (question) {
			var questionList = $("#questionList");
			var newQuestion = $("<li>").text(question);
			questionList.append(newQuestion);
		}

		$("#8ball").css({
			width: "50%",
			height: "auto",
			transform: "none",
		});

		$("#8ball").attr("src", "./images/mlatic_naked_dance.png");

		// Efekt shake s callbackem pro zobrazení odpovědi
		$(".ball").effect("shake", { distance: 5, times: 10 }, 3000, function () {
			var newSrc = "./images/mlatic_head_1.jpg?" + new Date().getTime();
			$("#8ball").attr("src", newSrc);
			$("#8ball").attr("alt", "Chleba");

			// Zobrazení odpovědi až po skončení třesení
			$("#answer").fadeIn(3000);

			var randomNumber = Math.random();
			var randomNumberForListOfAnswers =
				randomNumber * magic8Ball.listOfAnswers.length;
			var randomIndex = Math.floor(randomNumberForListOfAnswers);
			var answer = magic8Ball.listOfAnswers[randomIndex];

			$("#answer").text(answer);
		});
	};

	var onClick = function () {
		$("#answer").hide();

		$("#8ball").attr("src", "./images/mlatic_hail.png");
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
