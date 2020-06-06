const query = `query Seila {
    team(abbr: "sccp") {
        name
        full_name
        trophies(champ_slug: "national-league-1-div") {
            year
            champ {
                slug
                name
            }
        }
    }
}`;

axios.post('https://gorduchinha.herokuapp.com/api/v1/graphql', { query })
    .then(res => console.log('ok', res))
    .catch(err => console.log('error', err));

console.log('demora');
