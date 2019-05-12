let taskIndex = 0;

const addItem = () => {
    taskIndex++;
    $('ul').append(`<li><span>${taskIndex}.</span><input placeholder = "Task number ${taskIndex} "></li>`);
}

const removeItem = () => {
    $('ul li').last().remove();
    taskIndex--;
    if(taskIndex < 0){
        taskIndex = 0;
    }
}

const clearList = () => {
    $('ul li').remove()
    taskIndex = 0;
}


$('.add').click(addItem);
$('.remove').click(removeItem);
$('.clear').click(clearList);

