# Cash Register

```

  function checkCashRegister(price, cash, cid) { 
    price *= 100; cash *= 100; 

    let viPs = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000]; // Value in Pennies
    let cidReal = cid.map(x => Math.round(x[1] * 100)); // Convert into Pennies
    let cidAmt = cidReal.map((x, i) => Math.floor(x / viPs[i])); 
    let best = [[0,0,0,0,0,0,0,0,0]], bestScoreList = [0]; 
    for (let i = 1; i <= cash - price; i++) { 
      best[i] = [...Array(cid.length)].map(x => 0); 
      let bestScore = i + 1;     
      for (let c = 0; c < cid.length; c++) { 
        if (viPs[c] > i || best[i - viPs[c]][c] >= cidAmt[c]) continue;       
          let bestIndex = i - viPs[c], score = 0;      
            if (bestScoreList[bestIndex] != 0 || bestIndex == 0) { 
              score = bestScoreList[bestIndex] + 1; 
            }     
              if (score < bestScore) { 
                bestScore = score;
                best[i] = best[bestIndex].slice(0);
                best[i][c] += 1;
              }      
      }
      bestScoreList[i] = bestScore; 
    }  
    let exactChange = best[cash - price].map((x, i) => { return [cid[i][0], x * viPs[i] / 100]; }).filter(x => x[1] != 0).reverse();  
      if (!exactChange.length) return "Insufficient Funds";  
        else if (exactChange.reduce((a, b) => a + b[1], 0) == cidReal.reduce((a, b) => a+b / 100, 0)) return "Closed"; 
          else return exactChange;
  }
  checkCashRegister(19.70, 20.00, [["PENNY", 0], ["NICKEL", 0], ["DIME", 0.50], ["QUARTER", 0.50], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

```
