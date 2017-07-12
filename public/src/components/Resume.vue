<template>
<div >
  <div id="timeline"></div>
  <section>
    <span class="vertal line"></span>
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
    }
  },
  mounted() {
    var width = 300;  //画布的宽度
    var height = 300;   //画布的高度
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
.vertal {
  position: absolute;
    top: 125px;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
    width: 2px;
    height: 100%;
    display: block;
    background: #aebbc4;
    background-color: #16a085!important;
}
</style>
