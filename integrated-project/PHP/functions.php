<?php
    function insert_comment($comment){
        global $db;

        $sql = "INSERT INTO comments(";
        $sql .= "author_name, content,time) ";
        $sql .= "values('".$comment['author_name']."', ";
        $sql .= "'".$comment['content']."', ";
        $sql .= "now())";

        return mysqli_query($db, $sql);
    }
    function get_all_comments($pagination_number){
		global $db;

        $sql = "SELECT * FROM comments ";
        $sql .= "ORDER BY time desc ";
        $sql .= "LIMIT ".(6*($pagination_number -1) + 1).", 6";
        return mysqli_query($db, $sql);

	}
    function get_num_comments(){
        global $db;

        $sql = "SELECT count(*) FROM comments ";
        $result = mysqli_query($db, $sql);
        $number_of_comments = mysqli_fetch_row($result)[0];
        mysqli_free_result($result);
        return $number_of_comments;
    }
    function get_random_bg_color(){
        $numbers = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

        $color = "#";
        for ($i = 0; $i < 6; $i++) {
            $color .= $numbers[array_rand($numbers, 1)];
        }
        return $color;
    }

    function get_created_date($time_difference){
        if ($time_difference <= 60) {
            return 'now';
        } elseif($time_difference > 60 && $time_difference <= 120) {
            return " a minute ago";
        } elseif($time_difference > 60 && $time_difference <= 3600) {
            return (int)($time_difference/60)." minutes ago";
        } elseif($time_difference > 3600 && $time_difference <= 86400) {
            return (int)($time_difference/3600)." hours ago";
        } elseif($time_difference > 86400 && $time_difference <= 172800) {
            return " yesterday";
        } elseif($time_difference > 172800 && $time_difference <= 604800) {
            return (int)($time_difference/86400)." days ago";
        } elseif($time_difference > 604800 && $time_difference <= 1209600) {
            return " a week ago";
        } elseif($time_difference > 1814400 && $time_difference <= 2419200) {
            return (int)($time_difference/(86400 * 7))." weeks ago";
        } elseif($time_difference > 2419200 && $time_difference <= 4838400) {
            return (int)($time_difference/(86400 * 7 * 4))." months ago";
        } elseif($time_difference > 4838400) {
            return (int)($time_difference/(86400 * 7 * 4 * 12))." years ago";
        }
    }
?>
