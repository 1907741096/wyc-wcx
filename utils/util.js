const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function http(url, callBack, method, data) {
  var that = this;
  wx.request({
    url: url,
    data: data,
    method: method,
    header: {
      "Content-Type": "application/x-www-form-urlencoded"
    }, // 设置请求的 header
    success: function (res) {
      callBack(res.data);
      // success
    },
    fail: function (res) {
      // fail
    },
    complete: function (res) {
      // complete
    }
  })
}


module.exports = {
  formatTime: formatTime,
  http: http,
}
