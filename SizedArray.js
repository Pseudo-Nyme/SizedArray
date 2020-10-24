function SizedArray(length) {
    //Int value, maximum length of the array
    this.length = length;
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

    //Add value(s) functions
    //Push a single value
    this.push = function(value) {
        if(!this.full)
        {
            this.lastId++; 
            this.array.push(value);
            this.full = this.isFull();
        }
    }

    //Add a value at index 0 of the array, swiping other values to the next index (deleting the last if needed)
    this.addFirst = function(value) {
        for(let index = this.lastId; index >= 0; index++)
        {
            if(index + 1 < this.length)
            {
                this.array[index + 1] = this.array[index];
            }
        }
        this.array[0] = value;
        
        if(this.isFull())
        {
            this.full = true;
            this.lastId = this.length - 1
        }
        else
        {
            this.lastId++;
        }
    }

    //Add a value at index length-1 of the array, swiping other values to the index before (deleting the first) or push
    this.addLast = function(value) {
        if(this.isFull())
        {
            for(let index = 0; index < this.lastId; index++) {
                this.array[index] = this.array[index + 1];
            }
            this.array[this.lastId] = value;
        }
        else
        {
            this.push(value);
        }
    }

    //Push an array of values
    this.pushArray = function(values) {
        if(!this.full && (values.length + this.lastId) < this.length)
        {
            values.forEach(this.array.push(item));
            this.lastId = values.length + this.lastId;
            this.full = this.isFull();
        }
    }

    //Add an array of values from index 0 of the array, swiping other values to the next index (deleting values if needed)
    this.addArrayFirst = function(values) {
        for(let index = this.lastId; index >= values.length - 1; index++)
        {
            if(index + 1 < this.length)
            {
                this.array[index + 1] = this.array[index];
            }
        }
        
        for(let index2 = 0; index2 < values.length; index2++)
        {
            this.array[index2] = values[index2];
        }
        
        if(this.isFull())
        {
            this.full = true;
            this.lastId = this.length - 1
        }
        else
        {
            this.lastId += values.length;
        }
    }

    //Add a value at index length-1 of the array, swiping other values to the index before (deleting values if needed) or push
    this.addArrayLast = function(values) {
        if(this.isFull())
        {
            for(let index = 0; index < this.lastId; index++)
            {
                this.array[index] = this.array[index + 1];
            }

            for(let index2 = 0; index2 < values.length; index2++)
            {
                this.array[this.length - values.length + index2];
            }
        }
        else
        {
            this.pushArray(values);
        }
        
        if(this.isFull())
        {
            for(let index = 0; index < this.lastId; index++) {
                this.array[index] = this.array[index + 1];
            }
            this.array[this.lastId] = value;
        }
        else
        {
            this.push(value);
        }
    }
}