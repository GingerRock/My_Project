
$(document).ready(function () {
    const todo = new Todo(['qqq', 'www','eee']);
    $('.buttonADD').on('click', () => todo.buttonHandler());
    
});
class Todo {
    constructor(list) {
        this.input = $('#orig');
        this.list = list;
        this.isChaging = false;
        this.cangingLi = '';
    }
    addNewItem() {
        const container = $('.container');
        const value = this.input.val();
        const idd = Math.random()*1e17
        container.append(`
            <li id=${idd}> 
                <input type="checkbox" id="checkbox" checked> 
                <p class="text">${value}</p>
                <input type="button" class="del" value="X">
                <input type="button" class="change" value="Change"
            </li>
        `)

        document.getElementById("orig").value = ""

        $('.del').on('click', (event) => this.deleteItem(event));
        $('.change').on('click', (event) => this.changeButtonHandler(event));
    }

    buttonHandler() {
        if (this.isChaging) {
            this.changeItem()
        } else {
            this.addNewItem()
        }
    }

    changeButtonHandler(){
        this.isChaging = true;
        const currentLi = $(event.target).parent()
        const value = currentLi.find('.text').text()
        this.cangingLi = currentLi;
        this.input.val(value);
    }
    changeItem() {

        
        this.cangingLi
    }

    
     deleteItem(event){
        console.log('delete', event)
        const id = $(event.target).parent().attr('id')
        $(`#${id}`).remove();
    }
      
    
}
 