let a=13;
fact=0;
for(let i=1;i<=a;i++)
{
    if(a%i==0)
      fact++;
}
if(fact==2)
{
    console.log("prime");
}
else  
{
   console.log("not prime");
}