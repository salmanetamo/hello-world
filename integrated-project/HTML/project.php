<?php
    $pageTitle = 'About Project';
    include_once('SHARED/head.php');
?>
<body id="project" onload="activateLink(3, 'onclick')">
    <?php include_once('SHARED/header.php');?>
    <main>
        <section class="container mt-5">
            <div class="row justify-content-center">
                <h2 class="display-4">Project Plan</h2>
            </div>
            <div class="row justify-content-center">
                <p>The plan for this project was to initially follow the proposed schedule step by step accomplishing the tasks required for each week as it was outlined. However, given the multiple difficulties (Internet connection, miscommunication, etc) we faced during this period, many of the tasks have been completed way after they should have been. The following GANTT chart explains this in details. The dark color shows the duration the task was supposed to take and the lighter color shows the duration it actually took to complete the task.</p>
                <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
                  <script type="text/javascript">
                    google.charts.load('current', {'packages':['gantt']});
                    google.charts.setOnLoadCallback(drawChart);

                    function drawChart() {

                      var data = new google.visualization.DataTable();
                      data.addColumn('string', 'Task ID');
                      data.addColumn('string', 'Task Name');
                      data.addColumn('string', 'Resource');
                      data.addColumn('date', 'Start Date');
                      data.addColumn('date', 'End Date');
                      data.addColumn('number', 'Duration');
                      data.addColumn('number', 'Percent Complete');
                      data.addColumn('string', 'Dependencies');

                      data.addRows([
                        ['week1', 'Complete weekly updates of Diary', 'project_plan',
                         new Date(2017, 9, 18), new Date(2018, 1, 28), null, 60, null],
                        ['week2', 'Coursework groups confirmed', 'project_plan',
                         new Date(2017, 9, 18), new Date(2017, 10, 1), null, 100, null],
                        ['week3', 'Introductory sections are written on Google document', 'project_plan',
                         new Date(2017, 9, 18), new Date(2017, 11, 12), null, 40, null],
                        ['week4', 'Wireframes, user journey, visual representations', 'project_plan',
                         new Date(2017, 9, 18), new Date(2017, 11, 12), null, 60, null],
                        ['week5', 'Technologies with 3 new website features not previously used', 'project_plan',
                         new Date(2017, 9, 18), new Date(2017, 12, 3), null, 40, null],
                        ['week6', 'Code and test the first increment of web site', 'project_plan',
                         new Date(2017, 10, 16), new Date(2017, 11, 12), null, 25, null],
                        ['week7', 'Code and test the second increment of web site', 'project_plan',
                         new Date(2017, 10, 23), new Date(2017, 11, 19), null, 25, null],
                        ['week8', 'Code and test the third increment of web site', 'project_plan',
                         new Date(2017, 10, 30), new Date(2017, 12, 17), null, 15, null],
                        ['week9', 'Writing the evaluation of the system and get feedback', 'project_plan',
                         new Date(2017, 11, 13), new Date(2018, 1, 22), null, 14, null],
                        ['week10', 'Finish writing group report and collate', 'project_plan',
                         new Date(2017, 11, 13), new Date(2018, 1, 27), null, 10, null],
                        ['week11', 'Prepare group project Presentation/demonstration', 'project_plan',
                         new Date(2017, 11, 13), new Date(2018, 1, 22), null, 15, null],
                         ['week12', 'Write Individual reflective report', 'project_plan',
                          new Date(2017, 11, 13), new Date(2018, 1, 26), null, 10, null]
                      ]);

                      var options = {
                        height: 650,
                        width:1000,

                        gantt: {
                          trackHeight: 50,
                          labelMaxWidth: 400,
                          barHeight:45,
                          labelStyle: {
                            fontSize: 14,
                              color: '#757575'
                            },
                        }
                      };

                      var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

                      chart.draw(data, options);
                    }
                  </script>
                <div id="chart_div"></div>
            </div>
        </section>
        <hr class="section_separator">
        <section class="container mt-5">
            <div class="row justify-content-center">
                <h2 class="display-4">Reflections</h2>
            </div>
            <div class="row justify-content-around">
                <div class="card bg-info">
                    <div class="card-block card-header">
                        <h3 class="card-title"> <del>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</del>&nbsp;Outcomes</h3>
                    </div>
                    <div class="card-block text-center">
                        <img src="../IMAGES/003-outcoming-object.svg" alt="Picture for Outcomes" class="card-img">
                    </div>
                    <div class="card-block">
                        <div class="card-text">
                            <p class="text-justify">Overall, this project was a great learning experience that came with its difficulties, and I believe the positive things that came out of it will definitely follow me through my career. This was also a good way to finish this first year in our Computing major by consolidating all of the learnings we acquired throughout the year. Here are things that came out the project: </p>
                            <ol class="list-group-flush">
                                <li class="list-item text-justify">Website: This is what the project was all about. And after this period 12+ weeks, I finally was able to put the website together and tried my best to meet both the content and technical requirements.</li>
                                <li class="list-item text-justify">Career Prospect: After going through this project, I have come to realize becoming a full stack web developer is a career option I would want to explore.</li>
                            </ol>
                        </div>c
                    </div>
                    <br><br><br><br><br>

                </div>
                <div class="card bg-success">
                    <div class="card-block card-header">
                        <h3 class="card-title"> <del>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</del>&nbsp;Successes</h3>
                    </div>
                    <div class="card-block text-center">
                        <img src="../IMAGES/002-tick.svg" alt="Picture for Successes" class="card-img">
                    </div>
                    <div class="card-block">
                        <div class="card-text">
                            <p><br><br><br><br><br><br><br><br><br><br>During this project, there are things that went really well and that I am proud. These are either new things that I have learned for and from this project or learned skills that I have consolidated during this time.</p>
                            <ol class="list-group-flush">
                                <li class="list-item">Bootstrap</li>
                                <li class="list-item">Treant.js</li>
                                <li class="list-item">PHP with MySQL</li>
                                <li class="list-item">Project management</li>
                                <br>
                            </ol>
                        </div>
                    </div>
                    <br><br><br><br><br>

                </div>
                <div class="card bg-danger">
                    <div class="card-block card-header">
                        <h3 class="card-title"> <del>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</del>&nbsp;Failures</h3>
                    </div>
                    <div class="card-block text-center">
                        <img src="../IMAGES/001-cancel-button.svg" alt="Picture for Failures" class="card-img">
                    </div>
                    <div class="card-block">
                        <div class="card-text">
                            <p><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>Going through the project with these conditions did not make it easy for us as a team:</p>
                            <ol class="list-group-flush">
                                <li class="list-item">Personal management</li>
                                <li class="list-item">Difficulties in the team</li>

                            </ol>
                        </div>
                    </div>
                    <br><br><br><br><br>

                </div>
            </div>
        </section>
        <br><br><br><br><br>
    </main>
<?php include_once('SHARED/footer.php');?>
