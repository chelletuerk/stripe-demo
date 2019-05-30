const getData = () => {
  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: `https://gist.githubusercontent.com/chelletuerk/bffeafe31cb8c067b0ddadb99024adaf/raw/18e2fc3aa9647d1c76fa451fe0b797f82136be1d/stripe-mock-api.json`,
    success: function(data) {
      sortDate(data)
      renderSortedTitles(data)
    }
  })
}

const sortDate = (data) => {
  data.sort((a, b) => {
    let dateA = a.published_at.split('-').join('')
    let dateB = b.published_at.split('-').join('')
      if (dateA > dateB) {
        return -1
      }

      if (dateB < dateA) {
        return 1
      }
    })
  }

const renderSortedTitles = (data) => {
  data.forEach((e, i) => {
    $('.titles').append(`<p class="title">${e.title}<br>`)
  })
}

getData()
