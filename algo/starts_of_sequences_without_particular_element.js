// name startsOfSequencesWithoutParticularElement is long and ugly, but it's best i've got for this function
// s - a stream of numbers. each element of the stream is considered a (potential) sequence start.
// no assumptions are made about the elements. they don't even have to be numbers.
// within the stream, we are searching for a sequences of fixed size seqSize that won't contain a single "bad" element
// what element is "bad" is determined by isBad function
module.exports = (s, seqSize, isBad) => {
	var block = 0;
	
	// FIXME: bad usage of transaction()
	var start = s.find(x => !isBad(x) && !s.transaction().take(seqSize - 1).exists(isBad))
	return [start].stream().add(
		s.filter(x => isBad(x + seqSize - 1)? ((block = seqSize), false): block-- <= 0)
	);
}