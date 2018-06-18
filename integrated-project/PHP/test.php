<?php
function get_random_bg_color(){
    $numbers = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

    $color = "#";
    for ($i = 0; $i < 6; $i++) {
        $color .= $numbers[array_rand($numbers, 1)];
    }
    return $color;
}

echo "<div style=\"background-color:". get_random_bg_color().";\">Some text</div>";

 ?>


</span>
<span class=\"col-2 likes\"><img src=\"../IMAGES/like.svg\" alt=\"Like button\" onclick=\"incrementLikes(event,".$comment['id'].")\" id=\"".$comment['id']."\">&nbsp;&nbsp;".$comment['likes']
</span>
