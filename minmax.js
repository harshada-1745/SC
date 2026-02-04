function minmax(a,b,c){
    let max,min,median;

    if(a>=b && a>=c) {
        max=a;
        if(b>=c) {
            median=b;
            min=c;
        } else {
            median=c;
            min=b;
        }
    }
    else if(b>=a && b>=c) {
        max=b;
        if(a>=c){
            median=a;
            min=c;
        }else{
            median=c;
            min=a;
        }
    }
    else{
        max=c;
        if(a>=b){
            median=a;
            min=b;
        }else{
            median=b;
            min=a;
        }
    }

    console.log("Max:", max);
    console.log("Median:", median);
    console.log("Min:", min);
}

minmax(5, 9, 7);