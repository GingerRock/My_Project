
$(document).ready(function () {
    const todo = new Todo(['qqq', 'www','eee']);
    $('.buttonADD').on('click', () => todo.addNewItem());
    todo.asdasd()
});
class Todo {
    constructor(list) {
        this.list = list;
    }
    addNewItem() {
        console.log(this.list)
        const input = $('#orig');
        const container = $('.container');
        const value = input.val();
        container.append(`<div> ${value} </div>`)
    }
    asdasd() {
        let array = []
        return console.log (array, '<<empty array')
    }
}



