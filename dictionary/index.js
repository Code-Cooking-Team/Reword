/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const cheerioLoad = require('cheerio').load

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

const OUTPUT = path.resolve(__dirname, '../public/dictionary')
const OUTPUT_EN_PL = `${OUTPUT}/en-pl`

const getDataFilePath = letter => path.resolve(__dirname, `./data/en-pl/${letter}.xml`)
const getSaveFilePath = letter => `${OUTPUT_EN_PL}/${letter}.json`

if (!fs.existsSync(OUTPUT_EN_PL)) {
    fs.mkdirSync(OUTPUT)
    fs.mkdirSync(OUTPUT_EN_PL)
}

let total = 0

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

        if (word.length <= 3) return

        entry.find('>sense').each((i, el) => {
            const sense = $(el)
            const gramGrp = sense.find('>gramGrp>pos').text() || mainGramGrp
            const texts = sense
                .find('cit[type="trans"]>quote')
                .map((i, el) => $(el).text())
                .get()

            if (!gramGrp.trim()) return

            trans.push({ gramGrp, texts })
        })

        if (!trans.length) return

        data.push({ id, word, trans })
    })

    console.log(`${letter}: ${data.length} words`)
    total += data.length

    fs.writeFileSync(getSaveFilePath(letter), JSON.stringify(data, null, 2))
})

console.log(`--------------\nTotal: ${total} words`)
