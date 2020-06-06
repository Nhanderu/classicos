const hHeadTR = document.querySelector('#table-h > thead > tr')
const hBody = document.querySelector('#table-h > tbody')
const vBody = document.querySelector('#table-v > tbody')

const teamsSpan = document.querySelector('#teams')
const team1 = teamsSpan.getAttribute('data-team-1')
const team2 = teamsSpan.getAttribute('data-team-2')

const champs = fetch(team1, team2)

for (const champAbbr in champs) {

    const champ = champs[champAbbr]

    const hTH = document.createElement('th')
    hTH.innerText = champ.name
    hHeadTR.appendChild(hTH)

    const vTR = document.createElement('tr')
    vBody.appendChild(vTR)

    const vTH = document.createElement('th')
    vTH.innerText = champ.name
    vTR.appendChild(vTH)

    for (const teamAbbr in champ.teamsTitles) {

        const cssClass = `team-${teamAbbr}`
        const titles = champ.teamsTitles[teamAbbr]

        const hTD = document.createElement('td')
        hTD.innerText = titles

        let hTR = hBody.querySelector(`tr.${cssClass}`)
        if (hTR == null) {
            hTR = document.createElement('tr')
            hTR.classList.add(cssClass)
            hBody.appendChild(hTR)
        }
        hTR.appendChild(hTD)

        const vTD = document.createElement('td')
        vTD.innerText = titles
        vTD.classList.add(cssClass)
        vTR.appendChild(vTD)

    }

}
