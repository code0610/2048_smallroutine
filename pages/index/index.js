Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultOption: {
      width: 4,
      height: 4,
      style: {
        background_color: "rgb(184,175,158)",
        block_background_color: "rgb(204,192,178)",
        padding: 18,
        block_size: 100,
        block_style: {
          "font-family": "微软雅黑",
          "font-weight": "bold",
          "text-align": "center"
        }
      },
      blocks: [{
          level: 0,
          value: 2,
          style: {
            "backgroundColor": "rgb(238,228,218)",
            "color": "rgb(124,115,106)",
            "fontSize": 58
          }
        },
        {
          level: 1,
          value: 4,
          style: {
            "backgroundColor": "rgb(236,224,200)",
            "color": "rgb(124,115,106)",
            "fontSize": 58
          }
        },
        {
          level: 2,
          value: 8,
          style: {
            "backgroundColor": "rgb(242,177,121)",
            "color": "rgb(255,247,235)",
            "fontSize": 58
          }
        },
        {
          level: 3,
          value: 16,
          style: {
            "backgroundColor": "rgb(245,149,99)",
            "color": "rgb(255,250,235)",
            "fontSize": 50
          }
        },
        {
          level: 4,
          value: 32,
          style: {
            "backgroundColor": "rgb(244,123,94)",
            "color": "rgb(255,247,235)",
            "fontSize": 50
          }
        },
        {
          level: 5,
          value: 64,
          style: {
            "backgroundColor": "rgb(247,93,59)",
            "color": "rgb(255,247,235)",
            "fontSize": 50
          }
        },
        {
          level: 6,
          value: 128,
          style: {
            "backgroundColor": "rgb(236,205,112)",
            "color": "rgb(255,247,235)",
            "fontSize": 42
          }
        },
        {
          level: 7,
          value: 256,
          style: {
            "backgroundColor": "rgb(237,204,97)",
            "color": "rgb(255,247,235)",
            "fontSize": 42
          }
        },
        {
          level: 8,
          value: 512,
          style: {
            "backgroundColor": "rgb(236,200,80)",
            "color": "rgb(255,247,235)",
            "fontSize": 42
          }
        },
        {
          level: 9,
          value: 1024,
          style: {
            "backgroundColor": "rgb(237,197,63)",
            "color": "rgb(255,247,235)",
            "fontSize": 34
          }
        },
        {
          level: 10,
          value: 2048,
          style: {
            "backgroundColor": "rgb(238,194,46)",
            "color": "rgb(255,247,235)",
            "fontSize": 34
          }
        },
        {
          level: 11,
          value: 4096,
          style: {
            "backgroundColor": "rgb(61,58,51)",
            "color": "rgb(255,247,235)",
            "fontSize": 34
          }
        }
      ],
      animateSpeed: 200
    },
    tds:[],
    lastX: 0,
    lastY: 0,
    text: "没有滑动",
    text2:"上下没有滑动"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    for(var i = 0;i<5;i++){
      for(var j =0;j<5;j++){
        this.data.tds.push({
          text:"",
          color:"",
          backgroundColor:"rgb(204,192,178)",
          fontSize:""
        });
      }
    }

    var randomData1 = parseInt(Math.random()*this.data.tds.length);
    var randomData2 = parseInt(Math.random()*this.data.tds.length);
    var randomInit = [2,4];
    var random1 = randomInit[parseInt(Math.random()*randomInit.length)];
    var random2 = randomInit[parseInt(Math.random()*randomInit.length)];
    console.log(this.getblocksobj(random1).style.backgroundColor)
    this.data.tds[randomData1] = {
      text:random1,
      color:this.getblocksobj(random1).style.color,
      backgroundColor: this.getblocksobj(random1).style.backgroundColor,
      fontSize:this.getblocksobj(random1).style.fontSize
    }
    this.data.tds[randomData2]={
      text:random2,
      color:this.getblocksobj(random2).style.color,
      backgroundColor:this.getblocksobj(random2).style.backgroundColor,
      fontSize:this.getblocksobj(random2).style.fontSize
    }

    // console.log(this.data.tds);
    this.setData({
      tds:this.data.tds
    })
  },

  /**
   * 根据值获取对象
   */
  getblocksobj:function(v){
    var datas = this.data.defaultOption.blocks;
    for(var i = 0;i<datas.length;i++){
      if(datas[i].value == v){
        return datas[i];
      }
    }
    return {
      level: 12,
      value: 12,
      style: {
        "backgroundColor": "rgb(204,192,178)",
        "color": "rgb(255,247,235)",
        "fontSize": 42
      }
    }
  },

  /**
   * 手指滑动方向判断
   */
  handletouchmove: function (event) {
    let currentX = event.touches[0].pageX
    let currentY = event.touches[0].pageY
    let text = "";//滑动的方向
    // if ((currentX - this.data.lastX) > (currentY - this.data.lastY)){
      if ((currentX - this.data.lastX) < 0)
        text = "向左滑动";
      else if (((currentX - this.data.lastX) > 0))
        text = "向右滑动";
    // }else{
      if ((currentY - this.data.lastY) < 0)
        text = "向上滑动";
      else if ((currentY - this.data.lastY) > 0) 
        text = "向下滑动";
    // }
    
    //将当前坐标进行保存以进行下一次计算
    this.data.lastX = currentX
    this.data.lastY = currentY
    this.setData({
      text: text
    });
  },

  handletouchtart: function (event) {
    this.data.lastX = event.touches[0].pageX
    this.data.lastY = event.touches[0].pageY
  },
  handletap: function (event) {
    console.log(event)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})