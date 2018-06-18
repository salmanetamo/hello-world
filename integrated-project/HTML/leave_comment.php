<?php
    require_once('../PHP/database.php');
    require_once('../PHP/functions.php');
    $db = db_connect();

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $comment = [];

        $comment['author_name'] = $_POST['author_name'] ?? '';
        $comment['content'] = $_POST['content'] ?? '';

        if(insert_comment($comment)){
            //Render the rest of the page
        }

    } else {
        //header("Refresh:0; url=leave_comment.php");
    }

    $pagination_number = $_GET['page'] ?? '1';

    $result_set = get_all_comments($pagination_number);

    $pageTitle = 'Leave Comment';
    include_once('SHARED/head.php');
?>
<body id="leave_comment" onload="activateLink(4, 'onclick')">
    <?php include_once('SHARED/header.php');?>
    <main>
        <div class="container mt-5">
            <div class="row justify-content-center">
                <h2 class="display-4">Let's talk</h2>
            </div>
            <div class="row justify-content-between" id="content">
                <div class="col-4 mt-3">
                    <h3>Please say something...</h3>
                    <form class="form-group" action="leave_comment.php" method="POST">
                        <label>Your name</label>
                        <input type="text" name="author_name" class="form-control">

                        <label>Your comment</label>
                        <textarea name="content" rows="5" class="form-control"></textarea>

                        <button type="submit" class="btn">Submit</button>
                    </form>
                </div>
                <div class="col-7 mt-3">
                    <?php
                        while($comment = mysqli_fetch_assoc($result_set)){
                            echo "<div class=\"row justify-content-between\">
                                    <div class=\"col-2 ml-2\">
                                        <div class=\"display-4 text-center\" style=\"background-color:".get_random_bg_color().";\">".$comment['author_name'][0]."</div></div>";
                            echo "<div class=\"col-9 mt-2 mr-2\">
                                    <div class=\"pt-2 pb-2 comment_header row\">
                                        <span class=\"col-6 font-weight-bold\">".$comment['author_name']."</span>";
                            echo "<span class=\"col-6 text-muted\">Created ";
                            $time_difference = time() - strtotime($comment['time']);
                            echo get_created_date($time_difference);
                                        echo " </div>
                                    <div class=\"comment_text pb-2 pt-2\">".$comment['content']."<br>"."</div>
                                </div>
                            </div>
                            <br>";
                        }
                    ?>
                    <?php
                        echo "<br><br><br>";

                        echo "<ul class=\"pagination row justify-content-center\">";
                        if ($pagination_number == 1) {
                            echo "<li class=\"unclickable\"><a class=\"pl-3 pt-2 pb-1 pr-3 font-weight-bold\" href=\"leave_comment.php\">&laquo;</a></li>";
                        } else {
                            echo "<li><a class=\"pl-3 pt-2 pb-1 pr-3 font-weight-bold\" href=\"leave_comment.php?page=".($pagination_number - 1)."\">&laquo;</a></li>";
                        }
                        for ($i = 1; $i < (int)get_num_comments()/6; $i++) {
                            if ($pagination_number == $i) {
                                echo "<li class=\"active\"><a class=\"pl-3 pt-2 pb-1 pr-3\" href=\"leave_comment.php?page=".$i."\">".$i."</a></li>";
                            } else {
                                echo "<li><a class=\"pl-3 pt-2 pb-1 pr-3\" href=\"leave_comment.php?page=".$i."\">".$i."</a></li>";
                            }
                        }
                        if ((int)get_num_comments()%6 != 0) {
                            if ($pagination_number == $i) {
                                echo "<li class=\"active\"><a class=\"pl-3 pt-2 pb-1 pr-3\" href=\"leave_comment.php?page=".$i."\">".$i."</a></li>";
                            } else {
                                echo "<li><a class=\"pl-3 pt-2 pb-1 pr-3\" href=\"leave_comment.php?page=".$i."\">".$i."</a></li>";
                            }
                        }
                        if ($pagination_number == $i) {
                            echo "<li class=\"unclickable\"><a class=\"pl-3 pt-2 pb-1 pr-3 font-weight-bold\" href=\"leave_comment.php\">&raquo;</a></li>";
                        } else {
                            echo "<li><a class=\"pl-3 pt-2 pb-1 pr-3 font-weight-bold\" href=\"leave_comment.php?page=".($pagination_number + 1)."\">&raquo;</a></li>";
                        }
                        echo "</ul>";

                        echo "<br><br>";
                    ?>
                </div>
            </div>
        </div>
        <br><br>
    </main>

<?php
    include_once('SHARED/footer.php');
    db_disconnect($db);
?>
