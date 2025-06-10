function isAnagram(str1, str2) {
    const normalizeString = (str) => {
        return str
            .toLowerCase()
            .replace(/[^a-z]/g, '')
            .split('')
            .sort()
            .join('');
    };
    const normalizedStr1 = normalizeString(str1);
    const normalizedStr2 = normalizeString(str2);
    if (normalizedStr1.length !== normalizedStr2.length) {
        return `"${normalizedStr1}" is not an anagram of ${normalizedStr2}"`;
    }
    if(normalizedStr1 === normalizedStr2){
        return `"${normalizedStr1}" is an anagram of ${normalizedStr2}"`
    }
    else  return `"${normalizedStr1}" is not an anagram of ${normalizedStr2}"`
}
console.log(isAnagram("Astronomer", "Moon starer")); 
console.log(isAnagram("School master", "The classroom")); 
console.log(isAnagram("The Morse Code", "Here come dots")); 
