class ArrayBufferConverter {
    constructor(){
        this.newBuffer = new ArrayBuffer();
        this.newBufferView = new Uint16Array(this.newBuffer);
    }

    load(buffer){

        this.newBuffer = new ArrayBuffer(buffer.length);

        for(let i = 0;i < this.newBufferView.length;i++){
            this.newBufferView[i] = buffer.charCodeAt(i);
        }
        return this.newBufferView
    }
    toString(){
        for(let i = 0;i < this.newBufferView.length;i++){
            String.fromCharCode(this.newBufferView[i])
        }
        return this.newBufferView;
    }
}