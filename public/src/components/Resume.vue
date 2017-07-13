<template>
<div class="resume">
  <div id="timeline"></div>
  <section>
    <span class="vertal line"></span>
    <ul>
      <li v-for="item in items">
        <div class="dot middle">
        </div>
        <div class="left">
          <span class="top-span"></span>
          <div class="top-content"><a>ZJUCX</a></div>
          <span class="bottom-span"></span>
          <div class="bottom-content"><a>ZJUCX</a></div>
        </div>
        <div class="right">
        </div>
      </li>
    </ul>
  </section>
</div>
</template>

<script>
import * as d3 from 'd3'

export default {
  name: 'Resume',
  data () {
    return {
      data: [
        {label: "person a", times: [
          {"starting_time": 1355752800000, "ending_time": 1355759900000},
          {"starting_time": 1355767900000, "ending_time": 1355774400000}]},
        {label: "person b", times: [
          {"starting_time": 1355759910000, "ending_time": 1355761900000}]},
        {label: "person c", times: [
          {"starting_time": 1355761910000, "ending_time": 1355763910000}]}
        ],
      items: [{"a":"a"},{"a":"a"},{"a":"a"},{"a":"a"},{"a":"a"},{"a":"a"}],
    }
  },
  mounted() {
    var width = 300;  //画布的宽度
    var height = 100;   //画布的高度
    var dataset = [ 250 , 210 , 170 , 130 , 90 ];  //数据（表示矩形的宽度）
    var rectHeight = 25;   //每个矩形所占的像素高度(包括空白)

    var svg = d3.select("#timeline")     //选择文档中的body元素
        .append("svg")          //添加一个svg元素
        .attr("width", width)       //设定宽度
        .attr("height", height);    //设定高度
    svg.selectAll("rect")
  		  .data(dataset)
  		  .enter()
  		  .append("rect")
  		  .attr("x",20)
  		  .attr("y",function(d,i){
  				return i * rectHeight;
  		  })
  		  .attr("width",function(d){
  		   		return d;
  		  })
  		  .attr("height",rectHeight-2)
  		  .attr("fill","steelblue");
	},
  methods: {
  }
}
</script>

<style lang="sass" rel="stylesheet/scss">
.resume {
  section {
    position:relative;
    .vertal {
      position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        margin-left: -4px;
        width: 2px;
        height: 100%;
        display: block;
        background: #aebbc4;
        background-color: #16a085!important;
        border: 2px solid rgb(189, 255, 242);
    }
    ul {
      text-align: center;
      padding: 0;
      list-style: none;
      position: relative;
      max-width: 940px;
      margin: 0 auto;
      color: #7f8c8d;
      line-height: 1.5;
      display: block;
      li {
        width: 50%;
        margin: 10px 0 50px 50%;
        padding: 60px 0 0 40px;
        text-align: left;
        position: relative;
        min-height: 80px;
        list-style:none;
        .dot {
          top: 64px;
          width: 24px;
          height: 24px;
          border: 4px solid rgb(189, 255, 242);
          border-radius: 24px;
          position: absolute;
          left: -16px;
          background-color: #16a085!important;
          // border-color: rgb(189, 255, 242)!important;
        }
        .right {
          position: relative;
          padding: 5px 20px;
          min-height: 180px;
        }
        .left {
          position: absolute;
          min-width: 90%;
          top: 0;
          height: 100%;
          pointer-events: none;
          right: 100%;
          margin-right: 46px;
          text-align: right;
          padding: 5px 20px;
          min-height: 180px;
          span {
            display: block;
            height: 1px;
            position: absolute;
            width: 45px;

            left: 100%;
            background: #00bd9c;
            &:after {
              content: "";
              width: 12px;
              height: 12px;
              line-height: 12px;
              border-radius: 6px;
              background: inherit;
              display: inline-block;
              margin: -6px;
              vertical-align: top;
            }
          }
          .top-span {
            top: 40px;
          }
          .bottom-span {
            bottom: 10px;
          }
          .bottom-content{
            position: absolute;
            bottom: 10px;
            right: 20px;
          }
        }
      }
    }
  }
}
</style>
