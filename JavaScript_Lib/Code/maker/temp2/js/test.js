let list_number=0;
let all_where_part=0;
//new
function test(){
    let a=TMREA_Lib_by_Venlen.Binary_Long_Multip([1,2],[3,4],5);
    
        console.log(a);
}
function stat01(){
    let Pr_K_T=document.getElementById('in01').value;
    let E_L=document.getElementById('in02').value;
    let Pr_L=document.getElementById('in03').value;
    let Mu_T=document.getElementById('in04').value;
    let Mu_L=document.getElementById('in05').value;
    let O_L=document.getElementById('in06').value;
    let Pu_K=document.getElementById('ou01');
    let Pr_K=document.getElementById('ou02');
    let E_M=document.getElementById('ou03');
    TMREA_Lib_by_Venlen.Create_Key(E_L,Pr_L,Mu_L,Pr_K_T,Mu_T,O_L);
    Pu_K.innerHTML=TMREA_Lib_by_Venlen.Key[list_number].Publick_Key;
    Pr_K.innerHTML=TMREA_Lib_by_Venlen.Key[list_number].Private_Key;
    E_M.innerHTML='Sueessful';
    list_number++;
    return 0;
}