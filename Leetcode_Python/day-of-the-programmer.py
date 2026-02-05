def GregorianLeapYearCheck(year):
    if year % 400 == 0:
        return True
    elif year % 4 == 0 and year % 100 != 0:
        return True
    else:
        return False
            
def JulianLeapYearCheck(year):
    if year % 4 == 0:
        return True
    else:
        return False
            
def LeapYearDateFinder(year):
    leap_year_days_in_months = [31, 29, 31, 30, 31, 30, 31, 31, 30]
    num = 0
        
    for i in range(len(leap_year_days_in_months)):
        if num + leap_year_days_in_months[i] >= 256:
            print(num)
            day = str(256-num).zfill(2)
            month = str(i+1).zfill(2)
            return f'{day}.{month}.{year}'
        else:
            num += leap_year_days_in_months[i]
                
                
def NormalYearDateFinder(year):
    normal_year_days_in_months = [31, 28, 31, 30, 31, 30, 31, 31, 30]
    num = 0

    for i in range(len(normal_year_days_in_months)):
        if num + normal_year_days_in_months[i] >= 256:
            day = str(256-num).zfill(2)
            month = str(i+1).zfill(2)     
            return f'{day}.{month}.{year}'  
        else:
            num += normal_year_days_in_months[i]
                

def dayOfProgrammer(year):
    # Write your code here
    if year < 1918:
        if JulianLeapYearCheck(year) is True:
            return LeapYearDateFinder(year)
        else:
            return NormalYearDateFinder(year)
            
    if year == 1918:
        days = [31, 15, 31, 30, 31, 30, 31, 31, 30]
        num = 0
        
        for i in range(len(days)):
            if num + days[i] >= 256:
                day = str(256-num).zfill(2)
                month = str(i+1).zfill(2)   
                return f'{day}.{month}.{year}'  
            else:
                num += days[i]
                
            
    elif year > 1918:
        if GregorianLeapYearCheck(year) is True:
            return LeapYearDateFinder(year)
        else:
            return NormalYearDateFinder(year)
           