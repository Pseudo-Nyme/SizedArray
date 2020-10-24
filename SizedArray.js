function SizedArray(lenght) {
    //Int value, maximum lenght of the array
    this.length = lenght;
    //Boolean value, true if the array is full.
    this.full = false;
    //Int value, ID of the last element of the array.
    this.lastId = 0;
    this.array = new Array();

    //General
    //Checks if the SizedArray is full, return true if so.
    this.isFull = function() {
        let check = true;
        this.array.forEach(function(item) {
            if(item == undefined)
            {
                check = false;
            }
        });
        return check;
    }

    this.empty = function() {
        this.array = new Array();
        this.full = false;
        this.lastId = 0;
    }

    this.toString = function() {
        return "Size : " + this.length + ", Full : " + this.full + ", Array : " + this.array.toString();
    }
}