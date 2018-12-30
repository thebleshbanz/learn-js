$range = 30;
for($i=1;$i<=$range;$i++)
{
    $count = 0;
    for($j=2;$j<=$i;$j++)
    {
        if($i%$j == 0)
        {
            $count++;
        }
    }
    if($count == 1)
    {
        console.log($i+" is prime number");
    }
}