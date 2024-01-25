var names = [
    "LOVE EACH OTHER & BE IN LOVE WITH EVERYONE",
    "SELFLESSNESS.ONLINE",
    "BY LOVING YOU ARE OBTAINING FREEDOM, LIBERTY & HAPPINESS",
    "SELFLESSNESS.ONLINE",
    "DEAR PEOPLE TRY TO BE RESCUED",
    "SELFLESSNESS.ONLINE",
    "BECOME FREE BEINGS",
    "SELFLESSNESS.ONLINE",
    "BY RADIATING LOVE",
    "SELFLESSNESS.ONLINE",
    "& HARMONY",
    "SELFLESSNESS.ONLINE",
    "DO NOT LET ANYBODY OR ANYTHING CONTROL YOU,",
    "SELFLESSNESS.ONLINE",
    "BE WHO YOU ARE,",
    "SELFLESSNESS.ONLINE",
    "RADIATE LOVE",
    "SELFLESSNESS.ONLINE",
    "RECOGNIZE YOUR INTERNAL POWER & JOY,",
    "SELFLESSNESS.ONLINE",
    "SPRINGING FROM CREATING OF FREE WILL",
    "SELFLESSNESS.ONLINE",
    "-THE COSMIC PEOPLE",
    "SELFLESSNESS.ONLINE",
    "CONVERSATIONS  WITH  GOD",
    "SELFLESSNESS.ONLINE",
    "THE  NEW  REVELATION",
    "SELFLESSNESS.ONLINE",
    "UNIVERSAL  LIFE",
    "SELFLESSNESS.ONLINE",
    "THE SPIRITUAL PATH",
    "SELFLESSNESS.ONLINE",
    "ASCENTION OF HEART",
    "SELFLESSNESS.ONLINE",
    "HEAVEN - THE TRUE CREATION",
    "SELFLESSNESS.ONLINE",

];

document.title = "SELFLESSNESS.ONLINE"
var favicon = document.querySelector("link[rel='icon']");
favicon.href = "favicon.jpg"

function changeTitle() {
    var index = 0;

    setInterval(function () {
        document.title = names[index];
        index = (index + 1) % names.length;
    }, 900);
}


  changeTitle();

