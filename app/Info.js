function numberVotes(){
    return Math.floor((Math.random()*50)+15);
}

const cars=[
    {
        id:1,
        mark:"Mark: Honda",
        model:"Model: Accord",
        img:'http://forum.maxabout.com/uploads/default/original/2X/a/a2b20b763cb774daa1894dcb1a194a654fc2284d.png',
        votes:numberVotes(),

    },
    {
        id:2,
        mark:"Mark: Hyundai",
        model:"Model: Elantra",
        img:"http://www.hyundai.com.au/images/UserUploadedImages/182/ad_2016_elantra_cat_830x460_2.png",
        votes:numberVotes(),

    },
    {
        id:3,
        mark:"Mark: Toyota",
        model:"Model: Camry",
        img:"http://www.toyota.co.th/media/files_usage/product/color/08a553de1ea39ac8bbc1e8dbbebab2e7afd1bbc8b607c852bed68fbbf5a3aeec.png",
        votes:numberVotes(),

    }
];
export{cars,numberVotes};
