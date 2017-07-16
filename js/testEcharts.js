var bar = echarts.init(document.getElementById('echartsExample'));
var pie = echarts.init(document.getElementById('echartsExample2'));
var line = echarts.init(document.getElementById('echartsExample'));
// 指定图表的配置项和数据
var option = {

    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};

var option2 = {
    backgroundColor: '#2c343c',
    textStyle: {
        color: 'rgba(255, 255, 255, 0.3)'
    },
    series: [
        {

            name: '报名来源',
            type: 'pie',
            radius: '55%',
            data:[
                {value:44, name:'计算机与软件学院'},
                {value:32, name:'电子学院', label: "emphasis"},
                {value:22, name:'数院'},
                {value:88, name:'化院'},
                {value:51, name:'生科'}
            ],
            roseType: 'angle',
            itemStyle: {
                emphasis: {
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
}   
var line = {
    
}

// 使用刚指定的配置项和数据显示图表。
// bar.setOption(option);
bar.setOption(line);
pie.setOption(option2);