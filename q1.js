const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
]

const createArrayOfArrays = (arr) =>
    arr.map(country => {
        let name = country[0] + country.slice(1).toLowerCase()
        return [name, country.slice(0, 3), country.length]
    })

console.log(createArrayOfArrays(countries))