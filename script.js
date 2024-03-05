function calculate(){
    let valyuta = document.getElementsByName("valyuta")[0].value
    let valyuta2 = document.getElementsByName("valyuta2")[0].value
    let vvod = document.getElementsByName("vvod")[0].value
    vvod = Number(vvod)
       
    
    
    if(valyuta == "usd" && valyuta2 == "uzs2") {
            kurs = 12313.68
        }else{
            if(valyuta == "rub" && valyuta2 == "uzs2") {
                kurs = 139.64
            }else{
                if(valyuta == "euro" && valyuta2 == "uzs2") {
                    kurs = 13439.77
                }else{
                    if(valyuta == "uzs" && valyuta2 == "uzs2") {
                        kurs = 1
                    }
                }
            }
        }
        let price = kurs*vvod
        document.getElementsByName("result")[0].value=price

    if(valyuta == "usd" && valyuta2 == "usd2") {
            kurs = 1
        }else{
            if(valyuta == "rub" && valyuta2 == "usd2") {
                kurs = 0.011
            }else{
                if(valyuta == "euro" && valyuta2 == "usd2") {
                    kurs = 1.09
                }else{
                    if(valyuta == "uzs" && valyuta2 == "usd2") {
                        kurs = 0.000081
                    }
                }
            }
        }
            

        let price2 = kurs*vvod
            document.getElementsByName("result")[0].value=price2

    if(valyuta == "usd" && valyuta2 =="rub2"){
        kurs = 89.43
    }else{
        if(valyuta == "rub" && valyuta2 == "rub2"){
            kurs = 1
        }else{
            if(valyuta == "euro" && valyuta2 == "rub2"){
                kurs = 97.61
            }else{
                if(valyuta == "uzs" && valyuta2 == "rub2"){
                    kurs = 0.0073
                }
            }
        }
    }
        let price3 = kurs*vvod
            document.getElementsByName("result")[0].value=price3
        
    if(valyuta == "usd" && valyuta2 == "euro2"){
        kurs = 0.92
    }else{
        if(valyuta == "rub" && valyuta2 == "euro2"){
            kurs = 0.010
        }else{
            if(valyuta == "euro" && valyuta2 == "euro2"){
                kurs = 1
                }else{
                    if(valyuta == "uzs" && valyuta2 == "euro2"){
                    kurs = 0.000074
                }
            }
        }
    }

        let price4 = kurs*vvod 
            document.getElementsByName("result")[0].value=price4


    console.log(price)
    console.log(valyuta)
    console.log(vvod)
}