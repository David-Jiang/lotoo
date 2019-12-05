import express from "express"
import bodyParser from "body-parser"

const app = express()

app.use(express.static(__dirname + "/dist"))
app.use(bodyParser.json())

app.all("/*", (req, res, next) => {
  if (req.path.indexOf("api") > -1) {
    next()
  } else {
    res.sendFile(__dirname + "/dist/index.html")
  }
})

const server = app.listen(3000, () => {
  console.log(`server is running port : ${server.address().port}`)
})

app.get("/api/getLottoList", (req, res) => {
  let pairCount = req.query.pairCount
  if (!pairCount) {
    res.json({ errorMsg: "Please key pairCount" })
  }
  let lottoFrequencyMap = initLottoFrequencyMap()
  let lottoPairList = []
  let lottoFrequencyList = []
  for (let i = 0; i < pairCount; i++) {
    let lottoPair = generateLottoPair()
    lottoPair.forEach(lottoNumber => {
      let frequency = lottoFrequencyMap.get(lottoNumber)
      lottoFrequencyMap.set(lottoNumber, ++frequency)
    })
    lottoPairList.push(lottoPair.join(", "))
  }
  for (let [lottoNumber, frequency] of lottoFrequencyMap) {
    lottoFrequencyList.push({ lottoNumber, frequency })
  }
  lottoPairList.sort((a, b) => {
    return a - b
  })
  let response = { lottoPairList, lottoFrequencyList }
  res.json(response)
})

function initLottoFrequencyMap() {
  let lottoFrequencyMap = new Map()
  for (let i = 1; i <= 49; i++) {
    let lottoNumber = i < 10 ? `0${i}` : `${i}`
    lottoFrequencyMap.set(lottoNumber, 0)
  }
  return lottoFrequencyMap
}

function generateLottoPair() {
  let appearedArr = new Array(49)
  let resultArr = new Array(6)
  let index = 0
  while (index < 6) {
    let random = 0
    while (random == 0) {
      random = Math.floor(Math.random() * 50)
    }
    if (!appearedArr[random]) {
      resultArr[index] = random < 10 ? `0${random}` : `${random}`
      appearedArr[random] = true
      index++
    }
  }
  resultArr.sort((a, b) => {
    return a - b
  })
  return resultArr
}
