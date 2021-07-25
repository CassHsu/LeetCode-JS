var canBeTypedWords = function(text, brokenLetters) {
		return text.split(" ").filter(w => !w.split('').some(c => new Set(brokenLetters).has(c))).length;
};
