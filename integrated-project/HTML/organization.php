<?php
    $pageTitle = 'About Organization';
    include_once('SHARED/head.php');
?>
<body id="organization" onload="activateLink(2, 'onclick')">
    <?php include_once('SHARED/header.php');?>
    <main>
        <section class="container mt-5">
            <div class="row justify-content-center">
                <h2 class="display-4">Introduction of the organization</h2>
            </div>
            <div class="row justify-content-center mt-5">
                <div class="col-5">
                    <img src="../IMAGES/logoANSI.png" alt="" class="img-fluid">
                </div>
                <div class="col-6">
                    <ul class="list-group">
                        <li class="list-group-item"><strong>Name:&nbsp;</strong> Agence Nationale pour la Societe de l'Information (ANSI)</li>
                        <li class="list-group-item"><strong>Chief Executive Officer:&nbsp; </strong>Ibrahima Guimba Saidou</li>
                        <li class="list-group-item"><strong>Creation Date:&nbsp; </strong>July 20th, 2017</li>
                        <li class="list-group-item"><strong>Location:&nbsp; </strong>Rue de la Sirba, Niamey-Niger</li>
                        <!-- <li class="list-group-item"><strong>Internship Role:&nbsp;</strong> Head of Department Assistant</li>
                        <li class="list-group-item"><strong>Project Group:&nbsp;</strong> Group 5</li> -->
                    </ul>
                </div>
            </div>
            <!-- <div class="row justify-content-center">
                <p class="col-10
                ">Name,logo, CEO, CREATION DATE</p>
            </div> -->
        </section>
        <hr class="section_separator">
        <section class="container mt-5">
            <div class="row justify-content-center">
                <h2 class="display-4">Everything about the organization</h2>
            </div>
            <div class="container">
                <div class="justify-content-center" id="tabs">
                    <ul class="nav nav-tabs nav-justified">
                        <li class="nav-item mt-2">
                            <a class="nav-link active" href="#overview" data-toggle="tab">Overview</a>
                        </li>
                        <li class="nav-item mt-2">
                            <a class="nav-link" href="#clients_services" data-toggle="tab">Clients &amp; Services</a>
                        </li>
                        <li class="nav-item mt-2">
                            <a class="nav-link" href="#location" data-toggle="tab">Location</a>
                        </li>
                    </ul>
                </div>
                <div class="tab-content">
                    <div class="tab-pane fade in active show" id="overview">
                        <p class="pt-4 pl-5 pr-5 text-justify">The Office of the High Commissioner for Information and New Technologies of Information and Communication (HC / I / NTIC) has been transformed into the National Agency for the Information Society (ANSI) to better meet the growing needs of Niger in the ICT field. ANSI was created by the Presidential Decree N0 2017-621 / PRN of 20 July 2017. "ANSI's mission is the operational implementation of strategies, programs and projects for the promotion and development of information and communication (ICT), in accordance with the guidelines defined by the Government, in relation with the Ministry in charge of the sector and the other structures concerned.” (Extract Article 3 of the decree)<br></p>

                        <div class="chart text-center" id="organizational_tree"></div>
                        <script src="../JAVASCRIPT/Treant_raphael.js"></script>
                        <script src="../JAVASCRIPT/Treant_treant.js"></script>
                        <script src="../JAVASCRIPT/Treant_organizational_tree.js"></script>
                        <script>
                            new Treant( chart_config );
                        </script>
                        <!-- <strong class="display-4">ORGANIGRAMME HIERARCHIE </strong>
                        <br><br><br><br><br><br><br><br><br><br> -->
                    </div>
                    <div class="tab-pane fade pt-4 pl-5 pr-5 text-justify" id="clients_services">
                        As a public institution, here is a list of all the missions assigned to ANSI as per the decree that created it:

                        <ol class="list-group">
                            <li class="list-group-item"><img src="../IMAGES/target.svg" alt="Target image"><span>&nbsp;implement the national strategy for universal access to ICT services</li>
                            <li class="list-group-item"><img src="../IMAGES/target.svg" alt="Target image"><span>&nbsp;implement the national e-governance strategy</li>
                            <li class="list-group-item"><img src="../IMAGES/target.svg" alt="Target image"><span>&nbsp;ensure the deployment, administration and security of the Government Intranet Network</span></li>
                            <li class="list-group-item"><img src="../IMAGES/target.svg" alt="Target image"><span>&nbsp;ensure the management and attribution of Internet domain names in the sub-domain "gouv.ne"</span></li>
                            <li class="list-group-item"><img src="../IMAGES/target.svg" alt="Target image"><span>&nbsp;manage the universal access fund for telecommunication / ICT services</span></li>
                            <li class="list-group-item"><img src="../IMAGES/target.svg" alt="Target image"><span>&nbsp;ensure the implementation of the internet exchange point (Niger-IXP)</span></li>
                            <li class="list-group-item"><img src="../IMAGES/target.svg" alt="Target image"><span>&nbsp;ensure the rationalization of acquisitions and management of IT assets and information systems of the State</span></li>
                            <li class="list-group-item"><img src="../IMAGES/target.svg" alt="Target image"><span>&nbsp;provide technical assistance and expertise to state structures in design projects and / or ICT equipment, services and sliutions</span></li>
                            <li class="list-group-item"><img src="../IMAGES/target.svg" alt="Target image"><span>&nbsp;contribute to building the capacity of state staff in the field of ICTs</span></li>
                            <li class="list-group-item"><img src="../IMAGES/target.svg" alt="Target image"><span>&nbsp;contribute to the establishment of a legislative and regulatory framework conducive to the development of ICTs</span></li>
                            <li class="list-group-item"><img src="../IMAGES/target.svg" alt="Target image"><span>&nbsp;contribute to the design and implementation of ICT technical cooperation with state partners</span></li>
                            <li class="list-group-item"><img src="../IMAGES/target.svg" alt="Target image"><span>&nbsp;participate with other state structures in international forums and meetings related to ICT</span></li>
                        </ol>
                        <br><br><br><br><br><br><br><br><br><br>
                    </div>
                    <div class="tab-pane fade pt-4 pl-5 pr-5 text-justify" id="location">
                        <div id="map" style="height:500px;">

                        </div>
                        <script>
                          var map;
                          function initMap() {
                            map = new google.maps.Map(document.getElementById('map'), {
                              center: {lat: 13.54, lng: 2.05},
                              zoom: 14
                            });
                            var marker = new google.maps.Marker({
                                  position: {lat: 13.519162, lng: 2.094477},
                                  map: map,
                                  title:"Agence Nationale pour la Societe de l'Information"
                                });
                                var infoWindow = new google.maps.InfoWindow({
                                    content:'<a href="http://mgndemo.com/site/ansi/" target="_blank">Agence Nationale pour la Societe de l Information</a>'
                                });
                                marker.addListener('click', function(){
                                    infoWindow.open(map, marker);
                                });
                          }
                        </script>
                        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAF7ZJGd-dV7mNr0DyXiD-3LtHTEzDDexg&callback=initMap" async defer></script>







                        <!-- <a href="https://www.google.com" class="bg-danger" style="width: 800px;height: 600px;"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.2690100266595!2d2.09229491396876!3d13.519075790498338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11d07590c1e01179%3A0x3d24096c8698d4d9!2sAgence+Nationale+pour+la+Societe+de+l&#39;Information!5e0!3m2!1sen!2smu!4v1517064959472" width="800" height="600" frameborder="0" style="border:0" allowfullscreen></iframe></a> -->

                    </div>
                </div>
            </div>
        </section>
    </main>
<?php include_once('SHARED/footer.php');?>
