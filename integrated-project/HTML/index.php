<?php
    $pageTitle = 'Home';
    include_once('SHARED/head.php');
?>
    <body id="home">
        <header class="container w-100">

            <h1 class="text-center display-2"><span class="text-center display-4">Hey, I am </span><br><del class="display-4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</del>Salmane<del class="display-4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</del></h1>
        </header>
        <main class="container">
            <section class="row mb-5 mt-5 justify-content-around">
                <div class="col-4" id="student">
                    <div class="content">
                        <h2 class="display-5 text-center">About Student</h2>
                        <p class="content-content text-justify text-sm-left">I will give you a quick intro about myself, and tell you about some of the reasons why I chose this internship. I will then tell you the process through which I went to get this internship. Finally you'll see a quick description of what I do at my internship.</p>
                        <a href="student.php" class="p-2 mt-5">Check it out</a>
                    </div>
                </div>
                <div class="col-4" id="leave_comment">
                    <div class="content">
                        <h2 class="display-5 text-center">Leave comment</h2>
                        <p class="content-content text-justify text-sm-left">Here is a section where you can leave comments which are just quick tips about internships. You can also see comments from other users to see what they learned from their internships.</p>
                        <a href="leave_comment.php" class="p-2 mt-5">Check it out</a>
                    </div>
                </div>
            </section>
            <section class="row mb-4 justify-content-around">
                <div class="col-4" id="project">
                    <div class="content">
                        <h2 class="display-5 text-center">About Project</h2>
                        <p class="content-content text-justify text-sm-left">This is where I am going tell you how my group and I tackled this project from our Integrated Project module. You'll also see reflections about the project, which are the outcomes, the successes and the failures.</p>
                        <a href="project.php" class="p-2 mt-5">Check it out</a>
                    </div>
                </div>
                <div class="col-4" id="organization">
                    <div class="content">
                        <h2 class="display-5 text-center">About Organization</h2>
                        <p class="content-content text-left text-sm-justify">Here, I give an overview of my internship organization. You'll see its location, the kind of services they offer and the kind of clients they take care of.</p>
                        <a href="organization.php" class="p-2 mt-5">Check it out</a>
                    </div>
                </div>
            </section>
        </main>
        <?php include_once('SHARED/footer.php');?>
