function bonAppetit(bill: number[], k: number, b: number): void {
    const sumBill: number = bill.reduce((acc,curr) => acc + curr)
    
    if ((sumBill - bill[k])/2 === b) {
        console.log("Bon Appetit")
    }
    
    else {
        console.log(b - ((sumBill - bill[k])/2))
    }

}