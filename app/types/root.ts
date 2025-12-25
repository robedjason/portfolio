export type MultiLangString = {
    key: string
    EN?: string
    NL?: string
}

export type Language = "EN" | "NL"

export const getMLSString = (obj: MultiLangString, lang?: Language): string => (lang && obj[lang]) ?
    obj[lang] : obj.key


const langLocaleMap = {
    EN: 'en-US',
    NL: 'nl-NL'
}

export const getMonthString = (monthNumber: number, lang?: Language): string | null => {
    if (monthNumber > 12 || monthNumber < 1) {
        return null;
    }

    const locale = lang ? langLocaleMap[lang] : langLocaleMap.EN

    return new Date(new Date().setMonth(monthNumber))
        .toLocaleDateString(locale, { month: 'short' })
}