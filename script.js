document.addEventListener('DOMContentLoaded', function () {
    var totalScore = 0;

    var allRadios = document.querySelectorAll('input[type="radio"]');
    allRadios.forEach(function (radio) {
        radio.addEventListener('change', function () {
            calculateAndAlert();
        });
    });

    function calculateAndAlert() {
        calculateTotalScore();
        updateBoneAge();

        var totalScoreElement = document.getElementById('tScore');
        totalScoreElement.textContent = 'Total Score: ' + totalScore;
    }

    function calculateTotalScore() {
        totalScore = 0;

        var selectedGender = document.querySelector('input[name="gender"]:checked');
        var selectedRadios = document.querySelectorAll('input[type="radio"]:checked');

        if (selectedGender) {
            selectedRadios.forEach(function (radio) {
                var dataScore = 0;

                if (selectedGender.value === 'female' && radio.dataset.scoreFemale) {
                    dataScore = parseInt(radio.dataset.scoreFemale) || 0;
                } else if (selectedGender.value === 'male' && radio.dataset.scoreMale) {
                    dataScore = parseInt(radio.dataset.scoreMale) || 0;
                }

                totalScore += dataScore;
            });
        }
    }

    function updateBoneAge() {
        var boneAgeElement = document.getElementById('boneAge');
        var selectedGender = document.querySelector('input[name="gender"]:checked');

        if (selectedGender) {
            var boneAgeMapping = {};

            // 남자의 경우 토탈 스코어에 따른 골 연령 매칭
            if (selectedGender.value === 'male') {
                boneAgeMapping = {
                    124: 3.2,
                    126: 3.3,
                    130: 3.4,
                    133: 3.5,
                    136: 3.6,
                    139: 3.7,
                    142: 3.8,
                    145: 3.9,

                    147: 4.0,
                    150: 4.1,
                    152: 4.2,
                    155: 4.3,
                    157: 4.4,
                    159: 4.5,
                    161: 4.6,
                    163: 4.7,
                    165: 4.8,
                    167: 4.9,
                    
                    169: 5.0,
                    171: 5.1,
                    173: 5.2,
                    175: 5.3,
                    177: 5.4,
                    178: 5.5,
                    180: 5.6,
                    182: 5.7,
                    184: 5.8,
                    186: 5.9,

                    188: 6.0,
                    191: 6.1,
                    193: 6.2,
                    195: 6.3,
                    197: 6.4,
                    200: 6.5,
                    202: 6.6,
                    205: 6.7,
                    207: 6.8,
                    210: 6.9,

                    212: 7.0,
                    215: 7.1,
                    217: 7.2,
                    220: 7.3,
                    222: 7.4,
                    225: 7.5,
                    228: 7.6,
                    230: 7.7,
                    233: 7.8,
                    235: 7.9,

                    238: 8.0,
                    240: 8.1,
                    243: 8.2,
                    245: 8.3,
                    248: 8.4,
                    250: 8.5,
                    252: 8.6,
                    255: 8.7,
                    257: 8.8,
                    259: 8.9,
                    
                    262: 9.0,
                    264: 9.1,
                    266: 9.2,
                    268: 9.3,
                    271: 9.4,
                    273: 9.5,
                    275: 9.6,
                    277: 9.7,
                    280: 9.8,
                    282: 9.9,

                    284: 10.0,
                    286: 10.1,
                    289: 10.2,
                    291: 10.3,
                    293: 10.4,
                    296: 10.5,
                    298: 10.6,
                    301: 10.7,
                    304: 10.8,
                    307: 10.9,

                    311: 11.0,
                    314: 11.1,
                    318: 11.2,
                    323: 11.3,
                    327: 11.4,
                    333: 11.5,
                    338: 11.6,
                    344: 11.7,
                    351: 11.8,
                    358: 11.9,

                    365: 12.0,
                    374: 12.1,
                    382: 12.2,
                    392: 12.3,
                    402: 12.4,
                    412: 12.5,
                    424: 12.6,
                    435: 12.7,
                    448: 12.8,
                    461: 12.9,

                    474: 13.0,
                    488: 13.1,
                    503: 13.2,
                    518: 13.3,
                    533: 13.4,
                    549: 13.5,
                    566: 13.6,
                    583: 13.7,
                    600: 13.8,
                    618: 13.9,

                    637: 14.0,
                    655: 14.1,
                    675: 14.2,
                    694: 14.3,
                    714: 14.4,
                    734: 14.5,
                    755: 14.6,
                    775: 14.7,
                    795: 14.8,
                    815: 14.9,

                    835: 15.0,
                    854: 15.1,
                    872: 15.2,
                    891: 15.3,
                    908: 15.4,
                    925: 15.5,
                    941: 15.6,
                    956: 15.7,
                    970: 15.8,
                    982: 15.9,

                    994: 16.0,
                    1000: 16.1
                };
            }

            // 여자의 경우 토탈 스코어에 따른 골 연령 매칭
            else if (selectedGender.value === 'female') {
                boneAgeMapping = {
                    218: 3.3,
                    220: 3.4,
                    221: 3.5,
                    222: 3.6,
                    223: 3.7,
                    224: 3.8,
                    225: 3.9,

                    225: 4.0,
                    226: 4.1,
                    227: 4.2,
                    228: 4.3,
                    229: 4.4,
                    230: 4.5,
                    232: 4.6,
                    233: 4.7,
                    235: 4.8,
                    237: 4.9,
                    
                    239: 5.0,
                    241: 5.1,
                    244: 5.2,
                    247: 5.3,
                    250: 5.4,
                    253: 5.5,
                    257: 5.6,
                    261: 5.7,
                    264: 5.8,
                    268: 5.9,

                    273: 6.0,
                    277: 6.1,
                    281: 6.2,
                    285: 6.3,
                    290: 6.4,
                    294: 6.5,
                    298: 6.6,
                    303: 6.7,
                    307: 6.8,
                    311: 6.9,

                    315: 7.0,
                    319: 7.1,
                    322: 7.2,
                    326: 7.3,
                    330: 7.4,
                    333: 7.5,
                    337: 7.6,
                    240: 7.7,
                    243: 7.8,
                    247: 7.9,

                    350: 8.0,
                    354: 8.1,
                    358: 8.2,
                    362: 8.3,
                    366: 8.4,
                    370: 8.5,
                    374: 8.6,
                    379: 8.7,
                    384: 8.8,
                    389: 8.9,
                    
                    394: 9.0,
                    400: 9.1,
                    406: 9.2,
                    412: 9.3,
                    419: 9.4,
                    426: 9.5,
                    433: 9.6,
                    441: 9.7,
                    448: 9.8,
                    456: 9.9,

                    465: 10.0,
                    473: 10.1,
                    482: 10.2,
                    491: 10.3,
                    500: 10.4,
                    510: 10.5,
                    520: 10.6,
                    530: 10.7,
                    540: 10.8,
                    551: 10.9,

                    562: 11.0,
                    573: 11.1,
                    584: 11.2,
                    596: 11.3,
                    607: 11.4,
                    619: 11.5,
                    631: 11.6,
                    644: 11.7,
                    656: 11.8,
                    669: 11.9,

                    682: 12.0,
                    695: 12.1,
                    708: 12.2,
                    721: 12.3,
                    734: 12.4,
                    748: 12.5,
                    761: 12.6,
                    774: 12.7,
                    788: 12.8,
                    801: 12.9,

                    815: 13.0,
                    828: 13.1,
                    842: 13.2,
                    855: 13.3,
                    868: 13.4,
                    881: 13.5,
                    894: 13.6,
                    907: 13.7,
                    919: 13.8,
                    930: 13.9,

                    942: 14.0,
                    952: 14.1,
                    963: 14.2,
                    972: 14.3,
                    981: 14.4,
                    989: 14.5,
                    997: 14.6,
                    1000: 14.7,
                };
            }

            // 현재 토탈 스코어에 대한 매칭이 있는지 확인하고 표시
            if (boneAgeMapping.hasOwnProperty(totalScore)) {
                boneAgeElement.textContent = '골연령: ' + boneAgeMapping[totalScore].toFixed(1);
            } else {
                boneAgeElement.textContent = '골연령: N/A';
            }
        }
    }

    calculateAndAlert();
});
