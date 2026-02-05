def bonAppetit(bill, k, b):
    sum_bill = sum(bill)
    
    if (sum_bill - bill[k])/2 == b:
        print("Bon Appetit")
        
    else:
        print(b-round((sum_bill-bill[k])/2))