export const generateSlug = (str: string) => {
    const ru =
        'А-а-Б-б-В-в-Ґ-ґ-Г-г-Д-д-Е-е-Ё-ё-Є-є-Ж-ж-З-з-И-и-І-і-Ї-ї- -Й-й-К-к-Л-л-М-м-Н-н-О-о-П-п-Р-р-С-с-Т-т-У-у-Ф-ф-Х-х-Ц-ц-Ч-ч-Ш-ш-Щ-щ-Ъ-ъ-Ы-ы-Ь-ь-Э-э-Ю-ю-Я-я'

    const en =
        'A-a-B-b-V-v-G-g-G-g-D-d-E-e-E-e-E-e-ZH-Zh-Z-z-I-i-I-i-I-i-Y-y-K-k-L-l-M-m-N-n-O-o-P-p-R-r-S-s-T-t-U-u-F-f-H-h-C-c-CH-ch-SH-sh-SHCH-shch--Y-y--E-e-YU-yu-YA-ya'

    let result = ''
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i)
        let index = ru.indexOf(char)

        if (index !== -1) {
            result += en.charAt(index)
        } else {
            result += char
        }
    }

    return result
}


