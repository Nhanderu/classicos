const champsNames = {
  'world-cup': 'Mundial',
  'south-american-cup-a': 'Libertadores',
  'south-american-cup-b': 'SulAmericana',
  'south-american-supercup': 'Recopa',
  'national-league-1-div': 'Brasileirão',
  'national-league-2-div': 'Série B',
  'national-cup': 'Copa do Brasil',
  'national-supercup': 'Supercopa',
  'sp-state-cup': 'Paulista',
  'rj-state-cup': 'Carioca',
  'mg-state-cup': 'Mineiro',
  'rs-state-cup': 'Gaúcho'
}

const fetchData = async (team1, team2) => {
  const query = `
    {
      ${team1}: team(abbr: "${team1}") {
        trophies {
          champ {
            slug
          }
        }
      }
      ${team2}: team(abbr: "${team2}") {
        trophies {
          champ {
            slug
          }
        }
      }
    }
  `

  let res
  try {
    res = await axios.post('https://gorduchinha.herokuapp.com/api/v1/graphql', { query })
  } catch (e) {
    console.error(e)
    return null
  }

  const result = {}
  const prepareResult = slug => {
    const name = champsNames[slug]
    result[name] = result[name] || {}
    result[name][team1] = result[name][team1] || 0
    result[name][team2] = result[name][team2] || 0
    return result[name]
  }

  for (const { champ: { slug } } of res.data.data[team1].trophies) {
    prepareResult(slug)[team1]++
  }

  for (const { champ: { slug } } of res.data.data[team2].trophies) {
    prepareResult(slug)[team2]++
  }

  return result
}

const updateData = async () => {
  const hHeadTR = document.querySelector('#table-h > thead > tr')
  const hBody = document.querySelector('#table-h > tbody')
  const vBody = document.querySelector('#table-v > tbody')

  const teamsSpan = document.querySelector('#teams')
  const team1 = teamsSpan.getAttribute('data-team-1')
  const team2 = teamsSpan.getAttribute('data-team-2')

  const champs = await fetchData(team1, team2)

  for (const champ in champs) {
    const hTH = document.createElement('th')
    hTH.innerText = champ
    hHeadTR.appendChild(hTH)

    const vTR = document.createElement('tr')
    vBody.appendChild(vTR)

    const vTH = document.createElement('th')
    vTH.innerText = champ
    vTR.appendChild(vTH)

    for (const teamAbbr in champs[champ]) {
      const cssClass = `team-${teamAbbr}`
      const titles = champs[champ][teamAbbr] || 0

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
}

updateData()
