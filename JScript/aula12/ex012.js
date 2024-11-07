var idade = 12
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Na sua idade você não vota.')
} else if (idade < 18 || idade > 65) {
    console.log('Para você o voto é opcional.')
} else {
    console.log('Para você o voto é obrigatório.')
}