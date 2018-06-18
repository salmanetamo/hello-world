var config = {
        container: "#organizational_tree",

        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'nodes'
        }
    },
    ceo = {
        text: {
            name: "Chief executive officer",
        },
        // image: "../headshots/2.jpg"
    },

    secretariat = {
        parent: ceo,
        text:{
            name: "General Secretariat",
        },
        // image: "../headshots/1.jpg"
    },
    com_ICT = {
        parent: secretariat,
        stackChildren: true,
        text:{
            name: "Computing and ICT  Department",
        },
        // image: "../headshots/5.jpg"
    },
    soft_dev = {
        parent: com_ICT,
        stackChildren: true,
        text:{
            name: "Software Development Service",
        },
        // image: "../headshots/5.jpg"
    },
    IT_admin = {
        parent: com_ICT,
        stackChildren: true,
        text:{
            name: "IT Administration Service",
        },
        // image: "../headshots/5.jpg"
    },
    IT_sup = {
        parent: com_ICT,
        stackChildren: true,
        text:{
            name: "IT Support Service",
        },
        // image: "../headshots/5.jpg"
    },
    net_com = {
        parent: secretariat,
        stackChildren: true,
        text:{
            name: "Networks and Computing Department",
        },
        // image: "../headshots/5.jpg"
    },
    mnt_dev = {
        parent: net_com,
        stackChildren: true,
        text:{
            name: "Maintenance and Network Development Service",
        },
        // image: "../headshots/5.jpg"
    },
    net_admin = {
        parent: net_com,
        stackChildren: true,
        text:{
            name: "Network Administration Service",
        },
        // image: "../headshots/5.jpg"
    },
    net_sup = {
        parent: net_com,
        stackChildren: true,
        text:{
            name: "Network Support Service",
        },
        // image: "../headshots/5.jpg"
    },
    admin_fin = {
        parent: secretariat,
        stackChildren: true,
        text:{
            name: "Administrative and Financial Department",
        },
        // image: "../headshots/5.jpg"
    },
    admin_staff = {
        parent: admin_fin,
        stackChildren: true,
        text:{
            name: "Administrative and Staff Affairs Department",
        },
        // image: "../headshots/5.jpg"
    },
    fin_acc = {
        parent: admin_fin,
        stackChildren: true,
        text:{
            name: "Financial and Accounting Services",
        },
        // image: "../headshots/5.jpg"
    },
    mat_res = {
        parent: admin_fin,
        stackChildren: true,
        text:{
            name: "Material and Resources Service",
        },
        // image: "../headshots/5.jpg"
    },
    dig_for = {
        parent: secretariat,
        stackChildren: true,
        text:{
            name: "Digital Foresight Department",
        },
        // image: "../headshots/5.jpg"
    },
    sup_for = {
        parent: dig_for,
        stackChildren: true,
        text:{
            name: "Supervision and Foresight Service",
        },
        // image: "../headshots/5.jpg"
    },
    ext_rel = {
        parent: dig_for,
        stackChildren: true,
        text:{
            name: "External Relations Service",
        },
        // image: "../headshots/5.jpg"
    },
    stu_met = {
        parent: dig_for,
        stackChildren: true,
        text:{
            name: "Studies and Methods Service",
        },
        // image: "../headshots/5.jpg"
    },
    leg_reg = {
        parent: secretariat,
        stackChildren: true,
        text:{
            name: "Legislation and Regulations Department",
        },
        // image: "../headshots/5.jpg"
    },
    leg_sup = {
        parent: leg_reg,
        stackChildren: true,
        text:{
            name: "Legislation and Supervision Service",
        },
        // image: "../headshots/5.jpg"
    },
    reg_saf = {
        parent: leg_reg,
        stackChildren: true,
        text:{
            name: "Regulation and Safety Service",
        },
        // image: "../headshots/5.jpg"
    },
    doc_arc = {
        parent: leg_reg,
        stackChildren: true,
        text:{
            name: "Documentation and Archives Service",
        },
        // image: "../headshots/5.jpg"
    }

    chart_config = [
        config,
        ceo,
        secretariat,
        com_ICT,
        soft_dev,
        IT_admin,
        IT_sup,
        net_com,
        mnt_dev,
        net_admin,
        net_sup,
        admin_fin,
        admin_staff,
        fin_acc,
        mat_res,
        dig_for,
        sup_for,
        ext_rel,
        stu_met,
        leg_reg,
        leg_sup,
        reg_saf,
        doc_arc
    ];
