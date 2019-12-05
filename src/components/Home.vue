<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <div class="form-group">
          <h4 style="margin-bottom:5px">輸入組數</h4>
          <input type="text" class="form-control" v-model="pairCount" />
        </div>
        <button type="submit" class="btn btn-primary" @click="submit">送出</button>
      </div>
      <div class="col-sm-12" v-if="lottoFrequencyList.length > 0">
        <h4 style="margin-bottom:5px">出現頻率</h4>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">號碼</th>
              <th scope="col">出現次數</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(lottoItem, index) in lottoFrequencyList" :key="index">
              <td>{{ lottoItem.lottoNumber }}</td>
              <td>{{ lottoItem.frequency }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-sm-12" v-if="lottoPairList.length > 0">
        <h4 style="margin-bottom:5px">各組號碼清單</h4>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">各組號碼</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(lottoPair, index) in lottoPairList" :key="index">
              <td>{{ lottoPair }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      pairCount: null,
      lottoFrequencyList: [],
      lottoPairList: [],
    }
  },
  methods: {
    submit() {
      let params = {}
      params.pairCount = this.pairCount
      this.$http
        .get("/getLottoList", { params })
        .then(response => {
          let data = JSON.parse(response.data)
          if (data.errorMsg) {
            return Promise.reject(data.errorMsg)
          }
          this.lottoFrequencyList = data.lottoFrequencyList
          this.lottoPairList = data.lottoPairList
        })
        .catch(error => {
          console.log(String(error))
        })
    },
  },
}
</script>

<style scoped></style>
