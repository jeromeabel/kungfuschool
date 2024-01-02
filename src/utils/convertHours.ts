export default function hoursToTailwindColumns(texte: string): [number, number] {
	const heuresExtraits = extractHours(texte, 'h');

	if (heuresExtraits === null) {
		return [1, 2];
	}

	const [heureDebut, heureFin] = heuresExtraits;

	// Convertir les heures en unités Tailwind (chacune représentant 15 minutes)
	const unitDebut = Math.floor((heureDebut - 17) * 4);
	const unitFin = Math.ceil((heureFin - 17) * 4);

	// Limiter les valeurs entre 0 et 24 * 4 (pour couvrir les 24 heures en unités Tailwind)
	const colStart = Math.max(1, unitDebut + 1);
	//const colSpan = Math.min(24 * 4, unitFin - unitDebut);
	const colEnd = Math.min(22 * 4, unitFin + 1);

	// return [`col-start-${colStart}`, `col-end-${colEnd}`];
	return [colStart, colEnd];
}

function extractHours(texte: string, separateur: string = 'h'): [number, number] | null {
	const regex = new RegExp(`(\\d+)(?:${separateur}(\\d*))?\\s*-\\s*(\\d+)(?:${separateur}(\\d*))?`);

	const correspondance = texte.match(regex);

	if (!correspondance) {
		return null;
	}

	const [heureDebut, minutesDebut, heureFin, minutesFin] = correspondance
		.slice(1)
		.map((match, index) => (index % 2 === 0 ? Number(match) : Number(match || 0)));

	const tempsDebut = heureDebut + minutesDebut / 60;
	const tempsFin = heureFin + minutesFin / 60;

	return [tempsDebut, tempsFin];
}

/*
const texteHoraire = '17h15 - 19h';
const heuresExtraits = extraireHeures(texteHoraire, 'h');
console.log(heuresExtraits);
*/
