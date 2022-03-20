window.onload = function restoretask(){
    let previoushtml = localStorage.getItem("task");
    let w = document.getElementById("tasktable");
    let n = w.innerHTML;
    if(previoushtml == null){
        w.innerHTML=n;
    }
    else{
    w.innerHTML+= previoushtml;
    }
}

document.querySelector('#addbutton').onclick = function adding(){
    let x=document.getElementById("task").value;
    let y=document.getElementById("deadline").value;
    let z=document.getElementById("description").value;

    if(x.length == 0){
        alert("Please Enter a Task");
    }
    else if(y.length == 0){
        alert("Please Enter a Deadline");
    }
    else if(z.length == 0){
        alert("Please Enter a Task Description");
    }
    else {
        var k=document.getElementById("tasktable");
        var row = document.createElement('tr');
        row.className="rowoftask";
        var column1 = document.createElement('td');
        var d =document.createElement('div');
        var d1 =document.createElement('div');

        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "name";
        checkbox.value = "value";
        checkbox.className = "checkbox";

        let bu1 = document.createElement('button')
        bu1.className="labelbutton"
        let label = document.createElement('label');
        label.className="label";
        label.append(x);
        bu1.append(label);
        
        d1.append(z);

        d.append(checkbox);
        d.append(bu1);
        column1.append(d);
        column1.append(d1);
        row.append(column1);
        
        var column2 = document.createElement('td');

        column2.append(y);
        row.append(column2);

        var column3 = document.createElement('td');
        let bu = document.createElement('button');
        bu.className="deletebutton";
        let i = document.createElement("i");
        i.className="far fa-trash-alt";
        bu.append(i);
        column3.append(bu);
        row.append(column3);

        k.append(row);

        var ht = k.innerHTML;

        localStorage.setItem("task",ht);

    }
}

document.querySelector('#clear').onclick = function deleting(){
    localStorage.clear();
    location.reload(true);
}