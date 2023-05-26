   
    const plusSign=document.querySelector('#add-button');
    let inputText=document.getElementById('to-do-input');
    let taskCount=document.getElementById('count-tasks');
    let text=inputText.innerText;
    
    let count=1;
    plusSign.addEventListener('click', function() {
        let inputText=document.getElementById('to-do-input');
        let text=inputText.value;
        // console.log(inputText.value);
        let li=document.createElement('li');

        let checkBox=document.createElement("input");
        checkBox.type='checkbox';
        checkBox.classList.add('checkbox-round');
        let crossIcon=document.createElement("i");
        crossIcon.classList.add("fas");
        crossIcon.classList.add("fa-times");
        crossIcon.classList.add("cross-button");
        li.innerText=text;
        if(!li.innerText=='')
        {
            li.appendChild(checkBox);
            li.appendChild(crossIcon);
            document.getElementById("list-item").appendChild(li);
            // checkBox.addEventListener('click', isChecked(checkBox));
            checkBox.addEventListener('click',function(){
                const listItem=checkBox.parentNode;
                if(checkBox.checked){
                    listItem.classList.add('purple-bg');
                }
                else{
                    console.log('checkbox parentNode',listItem);
                    listItem.classList.remove('purple-bg');
                }
            });
            // crossIcon.addEventListener('click',deleteListItem(crossIcon));
            crossIcon.addEventListener('click',function(){
                let listItem=crossIcon.parentNode;
                listItem.remove();
                count--;
                let countString= taskCount.innerText;
                taskCount.innerText=count.toString()+countString.substring(1);
            });
        }
        inputText.value="";
        count++;
        let countString= taskCount.innerText;
        taskCount.innerText=count.toString()+countString.substring(1);
        
    })
    const checkboxs = document.querySelectorAll("input[type=checkbox]");
    console.log('checkboxs are', checkboxs)
    checkboxs.forEach(checkbox=>{
        checkbox.addEventListener('click',function(){
            const listItem=checkbox.parentNode;
            if(checkbox.checked){
                listItem.classList.add('purple-bg');
            }
            else{
                console.log('checkbox parentNode',listItem);
                listItem.classList.remove('purple-bg');
            }
        });
    });
    const crossButtons=document.querySelectorAll('.cross-button');
    crossButtons.forEach(button=>{
        button.addEventListener('click',function(){
            let listItem=button.parentNode;
            listItem.remove();
            count--;
            let countString= taskCount.innerText;
            taskCount.innerText=count.toString()+countString.substring(1);
        });
        
    });
    //required methods
    function isChecked(element){
        if (element.checked) {
            element.parentNode.classList.add('purple-bg');  
        } else {
            element.parentNode.classList.remove('purple-bg');
        }
    }
    function deleteListItem(crossButton){
        if(crossButton.clicked){
            list=crossButton.parentNode;
            console.log(list);
            list.remove();
            count--;
            let countString= taskCount.innerText;
            taskCount.innerText=count.toString()+countString.substring(1);
        
        }
    }
