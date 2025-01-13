
tong_chan = 0
tong_le = 0
function soChan(a,b) {
    for (let i = a; i <= b; i++) {
        if(i % 2 == 0) {
            tong_chan += 1  
        } else {
            tong_le += 1
        }
        
    }
    console.log("Có " + tong_chan + " số chẵn trong khoảng " + a + " đến " + b);
    console.log("Có " + tong_le + " số lẻ trong khoảng " + a + " đến " + b);
    
}

soChan(2,10)