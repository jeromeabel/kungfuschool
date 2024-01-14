export default function hoursToTailwindColumns(inputText: string): [number, number] {
	const hours = extractHours(inputText, ':');
	if (hours === null) {
		return [1, 2];
	}
	const [startHour, endHour] = hours;

	// Convertir les heures en unités Tailwind (chacune représentant 15 minutes)
	const startUnit = Math.floor((startHour - 17 + 12) * 4);
	const endUnit = Math.ceil((endHour - 17 + 12) * 4);

	// Limiter les valeurs entre 0 et 24 * 4 (pour couvrir les 24 heures en unités Tailwind)
	const colStart = Math.max(1, startUnit + 1);
	//const colSpan = Math.min(24 * 4, unitFin - unitDebut);
	const colEnd = Math.min(22 * 4, endUnit + 1);

	// return [`col-start-${colStart}`, `col-end-${colEnd}`];
	return [colStart, colEnd];
}

function extractHours(inputText: string, separator: string = ':'): [number, number] | null {
	// French: 17h15 - 19h
	// const regexNumbersFromHours = new RegExp(`(\\d+)(?:${separator}(\\d*))?\\s*-\\s*(\\d+)(?:${separator}(\\d*))?`);

	// English: 8:00 PM - 9:30 PM
	const regexNumbersFromHours = /(\d+:\d+) [APMapm]{2} - (\d+:\d+) [APMapm]{2}/;

	const matchNumbers = inputText.match(regexNumbersFromHours);

	if (!matchNumbers) {
		return null;
	}

	const [startHour, startMin, endHour, endMin] = matchNumbers
		.slice(1)
		.map((n) => n.split(separator))
		.flat()
		.map(Number);

	//v1 French
	// matchNumbers.slice(1).map((match, index) => (index % 2 === 0 ? Number(match) : Number(match || 0)));

	const tempsDebut = startHour + startMin / 60;
	const tempsFin = endHour + endMin / 60;

	return [tempsDebut, tempsFin];
}

/*
const h = '17h15 - 19h';
const h = '8:00 PM - 9:30 PM';
console.log(extractHours(h, ':'));
*/
