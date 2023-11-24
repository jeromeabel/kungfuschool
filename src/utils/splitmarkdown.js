export default function splitMarkdown(content) {
	const marker = '<!-- split -->';
	const splitIndex = content.indexOf(marker);

	// Case 1: Content without the split marker
	if (splitIndex === -1) {
		return {
			introMarkdown: false,
			mainContentMarkdown: content.trim(),
		};
	}

	// Case 2: Content with the split marker
	const introContent = content.slice(0, splitIndex).trim();
	const mainContent = content.slice(splitIndex + marker.length).trim();

	return { introContent, mainContent };
}
