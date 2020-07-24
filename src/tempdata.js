const tempdata = {
    teams: [
        'sccp',
        'sep',
        'spfc',
        'sfc',
        'crf',
        'crvg',
        'ffc',
        'bfr',
        'cam',
        'cec',
        'gfbpa',
        'sci',
    ],
    champs: {
        'world-cup': {
            name: 'Mundial',
            teamsTitles: {
                sccp: 2,
                sep: 0,
                spfc: 3,
                sfc: 2,
                crf: 1,
                crvg: 0,
                ffc: 0,
                bfr: 0,
                cam: 0,
                cec: 0,
                gfbpa: 1,
                sci: 1,
            },
        },
        'south-american-cup-a': {
            name: 'Libertadores',
            teamsTitles: {
                sccp: 1,
                sep: 1,
                spfc: 3,
                sfc: 3,
                crf: 2,
                crvg: 1,
                ffc: 0,
                bfr: 0,
                cam: 1,
                cec: 2,
                gfbpa: 3,
                sci: 2,
            },
        },
        'south-american-cup-b': {
            name: 'SulAmericana',
            teamsTitles: {
                sccp: 0,
                sep: 0,
                spfc: 1,
                sfc: 0,
                crf: 0,
                crvg: 0,
                ffc: 0,
                bfr: 0,
                cam: 0,
                cec: 0,
                gfbpa: 0,
                sci: 1,
            },
        },
        'south-american-supercup': {
            name: 'Recopa',
            teamsTitles: {
                sccp: 1,
                sep: 0,
                spfc: 2,
                sfc: 1,
                crf: 1,
                crvg: 0,
                ffc: 0,
                bfr: 0,
                cam: 1,
                cec: 1,
                gfbpa: 2,
                sci: 2,
            },
        },
        'national-league-1-div': {
            name: 'Brasileirão',
            teamsTitles: {
                sccp: 7,
                sep: 10,
                spfc: 6,
                sfc: 8,
                crf: 6,
                crvg: 4,
                ffc: 4,
                bfr: 2,
                cam: 1,
                cec: 4,
                gfbpa: 2,
                sci: 3,
            },
        },
        'national-league-2-div': {
            name: 'Série B',
            teamsTitles: {
                sccp: 1,
                sep: 2,
                spfc: 0,
                sfc: 0,
                crf: 0,
                crvg: 1,
                ffc: 0,
                bfr: 1,
                cam: 2,
                cec: 0,
                gfbpa: 1,
                sci: 0,
            },
        },
        'national-cup': {
            name: 'Copa do Brasil',
            teamsTitles: {
                sccp: 3,
                sep: 3,
                spfc: 0,
                sfc: 1,
                crf: 3,
                crvg: 1,
                ffc: 1,
                bfr: 0,
                cam: 1,
                cec: 6,
                gfbpa: 5,
                sci: 1,
            },
        },
        'national-supercup': {
            name: 'Supercopa',
            teamsTitles: {
                sccp: 1,
                sep: 0,
                spfc: 0,
                sfc: 0,
                crf: 1,
                crvg: 0,
                ffc: 0,
                bfr: 0,
                cam: 0,
                cec: 0,
                gfbpa: 1,
                sci: 0,
            },
        },
        'sp-state-cup': {
            name: 'Paulista',
            teamsTitles: {
                sccp: 30,
                sep: 22,
                spfc: 21,
                sfc: 22,
                crf: 0,
                crvg: 0,
                ffc: 0,
                bfr: 0,
                cam: 0,
                cec: 0,
                gfbpa: 0,
                sci: 0,
            },
        },
        'rj-state-cup': {
            name: 'Carioca',
            teamsTitles: {
                sccp: 0,
                sep: 0,
                spfc: 0,
                sfc: 0,
                crf: 35,
                crvg: 24,
                ffc: 31,
                bfr: 21,
                cam: 0,
                cec: 0,
                gfbpa: 0,
                sci: 0,
            },
        },
        'mg-state-cup': {
            name: 'Mineiro',
            teamsTitles: {
                sccp: 0,
                sep: 0,
                spfc: 0,
                sfc: 0,
                crf: 0,
                crvg: 0,
                ffc: 0,
                bfr: 0,
                cam: 44,
                cec: 38,
                gfbpa: 0,
                sci: 0,
            },
        },
        'rs-state-cup': {
            name: 'Gaúcho',
            teamsTitles: {
                sccp: 0,
                sep: 0,
                spfc: 0,
                sfc: 0,
                crf: 0,
                crvg: 0,
                ffc: 0,
                bfr: 0,
                cam: 0,
                cec: 0,
                gfbpa: 38,
                sci: 45,
            },
        },
    },
}


const fetch = (team1, team2) => {

    const otherTeams = []
    for (const team of tempdata.teams)
        if (team !== team1 && team !== team2)
            otherTeams.push(team)

    const result = {}
    for (const champ in tempdata.champs) {

        const { name, teamsTitles } = tempdata.champs[champ]
        if (!teamsTitles[team1] && !teamsTitles[team2])
            continue
        for (const team of otherTeams)
            delete teamsTitles[team]

        result[champ] = { name, teamsTitles }
    }

    return result
}
