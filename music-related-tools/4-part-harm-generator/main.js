const pitchClass = {
    'B#': 0, 'C':  0,
    'C#': 1, 'Db': 1,
    'D':  2,
    'D#': 3, 'Eb': 3,
    'E':  4, 'Fb': 4,
    'E#': 5, 'F':  5,
    'F#': 6, 'Gb': 6,
    'G':  7,
    'G#': 8, 'Ab': 8,
    'A':  9,
    'A#': 10, 'Bb': 10,
    'B':  11, 'Cb': 11
}

let chords = []

chord_struct = {
    pitchClasses = [0, 4, 7],
    bottomPitchClass = 0,
}

function addChord (rootPitchClass, thirdType, bassType) {

    let chord = {}
    let thirdInterval = 0

    if (thirdType == 'min') {
        thirdInterval = 3
    }
    else if (thirdType == 'maj') {
        thirdInterval = 4
    }
    chord.pitchClasses = [rootPitchClass, (rootPitchClass + thirdInterval) % 12, (rootPitchClass + 7) % 12]

    if (!bassType || bassType == '') {
        chord.bottomPitchClass = chord.pitchClasses[0]
    }
    else if (bassType == '4') {
        chord.bottomPitchClass = chord.pitchClasses[1]
    }
    else if (bassType == '64') {
        chord.bottomPitchClass = chord.pitchClasses[2]
    }

    chords.push(chord)
}

function generatePitches (chord, index) {
    
}
