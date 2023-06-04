   //fetching are required element like add button ,task input, and remaining count value 
    const plusSign=document.querySelector('#add-button');
    let inputText=document.getElementById('to-do-input');
    let taskCount=document.getElementById('count-tasks');
    let text=inputText.innerText;
    
    // adding event when some text entered in input filed and click add-button and create a list item later which is appended into ul
    // also updating count with every incresing count
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
            
            // event to check if checkbox is checked or not to change the color to checked list
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
            
            //event to click on cross button to remove our list item from ul and update count
            crossIcon.addEventListener('click',function(){
                let listItem=crossIcon.parentNode;
                listItem.remove();
                count--;
                let countString= taskCount.innerText.split(" ");
                countString[0]=count;
                taskCount.innerText=countString[0]+" "+countString[1]+" "+countString[2];
            });
        
        inputText.value="";
        count++;
        let countString= taskCount.innerText.split(" ");
        countString[0]=count;
        taskCount.innerText=countString[0]+" "+countString[1]+" "+countString[2];
        }
        
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
            let countString= taskCount.innerText.split(" ");
            countString[0]=count;
            console.log(countString[0]+" "+countString[1]+" "+countString[2]);
            taskCount.innerText=countString[0]+" "+countString[1]+" "+countString[2];
        });
        
    });

