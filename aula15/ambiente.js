let num = [5, 8, 2, 9, 3]

num.sort()
num.push(1)
console.log(`Vetor: ${num}.`)
console.log(`Tamanho: ${num.length}.`)
console.log(`Primeiro valor do vetor: ${num[0]}.`)

for(var i=0; i< num.length; i++) {
    console.log(num[i])
}

pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}.`)