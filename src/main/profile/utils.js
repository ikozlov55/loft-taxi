function isDigit(char) {
    return char >= '0' && char <= '9';
}

export function maskCardNumber(event) {
    const input = event.target;
    const oldValue = input.defaultValue;
    let newValue = input.value;

    if (newValue.length > oldValue.length) {
        const chars = newValue.replaceAll(' ', '');
        if (chars.length > 16) {
            return oldValue;
        }

        newValue = Array.from(chars)
            .filter(isDigit)
            .map((char, i) => {
                return (i + 1) % 4 === 0 && i !== 15 ? char + ' ' : char;
            })
            .join('');
    }

    return newValue;
}

export function maskCVC(event) {
    const input = event.target;
    const oldValue = input.defaultValue;
    let newValue = input.value;

    if (newValue.length > oldValue.length) {
        if (newValue.length > 3) {
            return oldValue;
        }

        newValue = Array.from(newValue).filter(isDigit).join('');
    }

    return newValue;
}

export function maskExpiryDate(event) {
    const input = event.target;
    const oldValue = input.defaultValue;
    let newValue = input.value;

    if (newValue.length > oldValue.length) {
        if (newValue.length > 5) {
            return oldValue;
        }

        newValue = Array.from(newValue)
            .filter(isDigit)
            .map((char, i) => (i === 1 ? char + '/' : char))
            .join('');
    }

    return newValue;
}
