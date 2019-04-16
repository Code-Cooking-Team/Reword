/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const cheerioLoad = require('cheerio').load

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

const OUTPUT = path.resolve(__dirname, '../build/dictionary')

const getDataFilePath = letter => path.resolve(__dirname, `./data/en-pl/${letter}.xml`)
const getSaveFilePath = letter => `${OUTPUT}/en-pl/${letter}.json`

try {
    fs.mkdirSync(OUTPUT)
    fs.mkdirSync(`${OUTPUT}/en-pl`)
} catch (_) {
    console.log(`Cannot create ${OUTPUT} dir`)
}

alphabet.forEach(letter => {
    const xmlFile = fs.readFileSync(getDataFilePath(letter), 'utf-8')
    const $ = cheerioLoad(xmlFile, { xmlMode: true, normalizeWhitespace: true })
    const data = []

    $('entry').each((i, el) => {
        const entry = $(el)
        const id = entry.attr('xml:id')
        const word = entry.find('>form>orth').text()
        const mainGramGrp = entry.find('>gramGrp>pos').text()
        const trans = []

        entry.find('>sense').each((i, el) => {
            const sense = $(el)
            const gramGrp = sense.find('>gramGrp>pos').text() || mainGramGrp
            const texts = sense
                .find('cit[type="trans"]>quote')
                .map((i, el) => $(el).text())
                .get()
            trans.push({ gramGrp, texts })
        })

        data.push({ id, word, trans })
    })

    console.log(`${letter}: ${data.length} words`)

    fs.writeFileSync(getSaveFilePath(letter), JSON.stringify(data, null, 2))
})
