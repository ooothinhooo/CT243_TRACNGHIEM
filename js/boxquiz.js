const boxquiz =[
    {
        image:"./images/color/black.png",
        title:"Black - Màu đen",
        audio:"./media/black1664475212.mp3"
    },
    {
        image:"./images/color/blue.png",
        title:"Blue - Màu xanh dương",
        audio:"./media/blue1664474762.mp3"
    },
    {
        image:"./images/color/brown.png",
        title:"Bronw - Màu nâu",
        audio:"./media/brown1664475008.mp3"
    },
    {
        image:"./images/color/green.png",
        title:"Green - Màu xanh lá",
        audio:"./media/green1664474790.mp3"
    },
    {
        image:"./images/color/grey.png",
        title:"Grey - Màu xám",
        audio:"./media/grey1664475034.mp3"
    },
    {
        image:"./images/color/orange.png",
        title:"Orange - Màu cam",
        audio:"./media/orange1664474959.mp3"
    },
    {
        image:"./images/color/pink.png",
        title:"Pink - Màu hồng",
        audio:"./media/pink1664474879.mp3"
    },
    {
        image:"./images/color/purple.png",
        title:"Purple - Màu tím",
        audio:"./media/purple1664474936.mp3"
    },
    {
        image:"./images/color/red.png",
        title:"Red - Màu đỏ",
        audio:"./media/red1664475081.mp3"
    },
    {
        image:"./images/color/white.png",
        title:"White - Màu trắng",
        audio:"./media/white1664474859.mp3"
    },
    {
        image:"./images/color/yellow.png",
        title:"Yellow - Màu vàng",
        audio:"./media/yellow1664474834.mp3"
    },
    // {
    //     image:"./images/color/",
    //     title:"",
    //     audio:""
    // },
    // {
    //     image:"./images/color/",
    //     title:"",
    //     audio:""
    // },

];

const html = boxquiz.map((item,index)=>{
    return `
    <div class="box">
    <img src="${item.image}" alt="">
    <div class="content">
        <a href="#" class="title">${item.title}</a>
        
    </div>
    <audio src="${item.audio}" controls>
    </audio>
</div>
    `;
    
})
document.querySelector("#box-quiz-container").innerHTML=html;
console.log(html)
console.log("a")