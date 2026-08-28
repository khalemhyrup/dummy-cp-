import React, { useState } from 'react';

interface ProjectCategoryGroup {
  id: string;
  title: string;
  imagePosition?: string;
  images: {
    src: string;
    alt: string;
  }[];
}

const PROJECT_GROUPS: ProjectCategoryGroup[] = [
  {
    "id": "access-control-sliding-door",
    "title": "Access Control & Slidding Door Automatic",
    "imagePosition": "object-[center_25%]",
    "images": [
      {
        "src": "/IT/Our Project/Access Control & Slidding  Door Automatic/1737266516775.jpg",
        "alt": "Access Control & Slidding Door Automatic #1"
      },
      {
        "src": "/IT/Our Project/Access Control & Slidding  Door Automatic/IMG_20220628_203746.jpg",
        "alt": "Access Control & Slidding Door Automatic #2"
      },
      {
        "src": "/IT/Our Project/Access Control & Slidding  Door Automatic/IMG_20230109_131600.jpg",
        "alt": "Access Control & Slidding Door Automatic #3"
      },
      {
        "src": "/IT/Our Project/Access Control & Slidding  Door Automatic/IMG_20230109_135949.jpg",
        "alt": "Access Control & Slidding Door Automatic #4"
      },
      {
        "src": "/IT/Our Project/Access Control & Slidding  Door Automatic/IMG_20230109_150050.jpg",
        "alt": "Access Control & Slidding Door Automatic #5"
      },
      {
        "src": "/IT/Our Project/Access Control & Slidding  Door Automatic/IMG_20230109_152405.jpg",
        "alt": "Access Control & Slidding Door Automatic #6"
      },
      {
        "src": "/IT/Our Project/Access Control & Slidding  Door Automatic/IMG_20241123_124329.jpg",
        "alt": "Access Control & Slidding Door Automatic #7"
      },
      {
        "src": "/IT/Our Project/Access Control & Slidding  Door Automatic/IMG_20241123_125801.jpg",
        "alt": "Access Control & Slidding Door Automatic #8"
      },
      {
        "src": "/IT/Our Project/Access Control & Slidding  Door Automatic/IMG_20250306_103656.jpg",
        "alt": "Access Control & Slidding Door Automatic #9"
      },
      {
        "src": "/IT/Our Project/Access Control & Slidding  Door Automatic/videoframe_17026.png",
        "alt": "Access Control & Slidding Door Automatic #10"
      }
    ]
  },
  {
    "id": "cctv",
    "title": "CCTV",
    "images": [
      {
        "src": "/IT/Our Project/CCTV/1708909002900.jpg",
        "alt": "CCTV #1"
      },
      {
        "src": "/IT/Our Project/CCTV/1708909027188.jpg",
        "alt": "CCTV #2"
      },
      {
        "src": "/IT/Our Project/CCTV/1708909035732.jpg",
        "alt": "CCTV #3"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20190717_113751.jpg",
        "alt": "CCTV #4"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20190717_152035.jpg",
        "alt": "CCTV #5"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20190718_151145.jpg",
        "alt": "CCTV #6"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20191218_134549~2.jpg",
        "alt": "CCTV #7"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20220729_093229.jpg",
        "alt": "CCTV #8"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20220729_141320.jpg",
        "alt": "CCTV #9"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20220729_141322.jpg",
        "alt": "CCTV #10"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20220729_141354.jpg",
        "alt": "CCTV #11"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20220816_145417.jpg",
        "alt": "CCTV #12"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20221006_151133.jpg",
        "alt": "CCTV #13"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20221006_155608.jpg",
        "alt": "CCTV #14"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20230219_110024.jpg",
        "alt": "CCTV #15"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20230506_141442.jpg",
        "alt": "CCTV #16"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20240607_162640.jpg",
        "alt": "CCTV #17"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20240914_101329.jpg",
        "alt": "CCTV #18"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20240914_103801.jpg",
        "alt": "CCTV #19"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20240914_110554.jpg",
        "alt": "CCTV #20"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20240926_101926.jpg",
        "alt": "CCTV #21"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20240930_152003.jpg",
        "alt": "CCTV #22"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20241001_135641.jpg",
        "alt": "CCTV #23"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20241001_135726.jpg",
        "alt": "CCTV #24"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20241002_095043.jpg",
        "alt": "CCTV #25"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20241026_105724.jpg",
        "alt": "CCTV #26"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20250128_112212.jpg",
        "alt": "CCTV #27"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20250129_170709.jpg",
        "alt": "CCTV #28"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20250201_150403.jpg",
        "alt": "CCTV #29"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20250225_130932 (1).jpg",
        "alt": "CCTV #30"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20250324_101540.jpg",
        "alt": "CCTV #31"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20250422_153053.jpg",
        "alt": "CCTV #32"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20250525_173148.jpg",
        "alt": "CCTV #33"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20250525_182931.jpg",
        "alt": "CCTV #34"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20250701_1302161.jpg",
        "alt": "CCTV #35"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20250705_130819.jpg",
        "alt": "CCTV #36"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20250705_161549.jpg",
        "alt": "CCTV #37"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20250707_094527.jpg",
        "alt": "CCTV #38"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20250707_103855.jpg",
        "alt": "CCTV #39"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20250707_135433.jpg",
        "alt": "CCTV #40"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20250723_103929.jpg",
        "alt": "CCTV #41"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20250723_105008.jpg",
        "alt": "CCTV #42"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20250723_110812.jpg",
        "alt": "CCTV #43"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20250723_111356.jpg",
        "alt": "CCTV #44"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20250723_115925.jpg",
        "alt": "CCTV #45"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20250910_100730.jpg",
        "alt": "CCTV #46"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20250913_102920.jpg",
        "alt": "CCTV #47"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20250913_104644.jpg",
        "alt": "CCTV #48"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20250913_105542.jpg",
        "alt": "CCTV #49"
      },
      {
        "src": "/IT/Our Project/CCTV/IMG_20250913_120014.jpg",
        "alt": "CCTV #50"
      }
    ]
  },
  {
    "id": "elektrical",
    "title": "Elektrical",
    "images": [
      {
        "src": "/IT/Our Project/Elektrical/FB_IMG_1747901835768.jpg",
        "alt": "Elektrical #1"
      },
      {
        "src": "/IT/Our Project/Elektrical/IMG_20240929_154651.jpg",
        "alt": "Elektrical #2"
      },
      {
        "src": "/IT/Our Project/Elektrical/IMG_20240929_154657.jpg",
        "alt": "Elektrical #3"
      },
      {
        "src": "/IT/Our Project/Elektrical/IMG_20241003_151850.jpg",
        "alt": "Elektrical #4"
      },
      {
        "src": "/IT/Our Project/Elektrical/IMG_20241029_172651.jpg",
        "alt": "Elektrical #5"
      },
      {
        "src": "/IT/Our Project/Elektrical/IMG_20250705_094912.jpg",
        "alt": "Elektrical #6"
      },
      {
        "src": "/IT/Our Project/Elektrical/IMG_20250705_094925.jpg",
        "alt": "Elektrical #7"
      }
    ]
  },
  {
    "id": "hvac",
    "title": "HVAC",
    "images": [
      {
        "src": "/IT/Our Project/HVAC/IMG_20240605_102014.jpg",
        "alt": "HVAC #1"
      },
      {
        "src": "/IT/Our Project/HVAC/IMG_20240605_102351.jpg",
        "alt": "HVAC #2"
      },
      {
        "src": "/IT/Our Project/HVAC/IMG_20240605_102609.jpg",
        "alt": "HVAC #3"
      },
      {
        "src": "/IT/Our Project/HVAC/IMG_20240619_110658.jpg",
        "alt": "HVAC #4"
      },
      {
        "src": "/IT/Our Project/HVAC/IMG_20240619_130725.jpg",
        "alt": "HVAC #5"
      },
      {
        "src": "/IT/Our Project/HVAC/IMG_20240619_145240.jpg",
        "alt": "HVAC #6"
      },
      {
        "src": "/IT/Our Project/HVAC/IMG_20240619_145334.jpg",
        "alt": "HVAC #7"
      },
      {
        "src": "/IT/Our Project/HVAC/IMG_20240619_160042.jpg",
        "alt": "HVAC #8"
      }
    ]
  },
  {
    "id": "instalasi-jaringan",
    "title": "Instalasi Jaringan",
    "images": [
      {
        "src": "/IT/Our Project/Instlasi Jaringan/1708908937705.jpg",
        "alt": "Instalasi Jaringan #1"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/1708908937792.jpg",
        "alt": "Instalasi Jaringan #2"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/1708908943953.jpg",
        "alt": "Instalasi Jaringan #3"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/1708908945951.jpg",
        "alt": "Instalasi Jaringan #4"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/1708908950130.jpg",
        "alt": "Instalasi Jaringan #5"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/1708908952285.jpg",
        "alt": "Instalasi Jaringan #6"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/1708908952375.jpg",
        "alt": "Instalasi Jaringan #7"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/1708908957181.jpg",
        "alt": "Instalasi Jaringan #8"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/1708909077083.jpg",
        "alt": "Instalasi Jaringan #9"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/1708909077472.jpg",
        "alt": "Instalasi Jaringan #10"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/FB_IMG_1709386446179.jpg",
        "alt": "Instalasi Jaringan #11"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20220610_100038.jpg",
        "alt": "Instalasi Jaringan #12"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20220610_100053.jpg",
        "alt": "Instalasi Jaringan #13"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20220813_115742.jpg",
        "alt": "Instalasi Jaringan #14"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20220813_120231.jpg",
        "alt": "Instalasi Jaringan #15"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20220820_140327.jpg",
        "alt": "Instalasi Jaringan #16"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20221010_102651.jpg",
        "alt": "Instalasi Jaringan #17"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20221017_094446.jpg",
        "alt": "Instalasi Jaringan #18"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20230406_144802.jpg",
        "alt": "Instalasi Jaringan #19"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20230408_082719.jpg",
        "alt": "Instalasi Jaringan #20"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20230408_083833.jpg",
        "alt": "Instalasi Jaringan #21"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20230513_095600.jpg",
        "alt": "Instalasi Jaringan #22"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20230513_100159.jpg",
        "alt": "Instalasi Jaringan #23"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20240910_123743.jpg",
        "alt": "Instalasi Jaringan #24"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20240910_124047.jpg",
        "alt": "Instalasi Jaringan #25"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20240910_174236.jpg",
        "alt": "Instalasi Jaringan #26"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20240910_174245.jpg",
        "alt": "Instalasi Jaringan #27"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20240910_174259.jpg",
        "alt": "Instalasi Jaringan #28"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20241003_105545.jpg",
        "alt": "Instalasi Jaringan #29"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20241225_084356.jpg",
        "alt": "Instalasi Jaringan #30"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20241225_091138.jpg",
        "alt": "Instalasi Jaringan #31"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20250108_115213.jpg",
        "alt": "Instalasi Jaringan #32"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20250211_110201.jpg",
        "alt": "Instalasi Jaringan #33"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20250211_110636.jpg",
        "alt": "Instalasi Jaringan #34"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20250211_111943.jpg",
        "alt": "Instalasi Jaringan #35"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20250211_112420.jpg",
        "alt": "Instalasi Jaringan #36"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20250225_105037.jpg",
        "alt": "Instalasi Jaringan #37"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20250225_130932.jpg",
        "alt": "Instalasi Jaringan #38"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20250417_131811.jpg",
        "alt": "Instalasi Jaringan #39"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20250420_130738.jpg",
        "alt": "Instalasi Jaringan #40"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20250420_133818.jpg",
        "alt": "Instalasi Jaringan #41"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20250420_141113.jpg",
        "alt": "Instalasi Jaringan #42"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20250420_141114.jpg",
        "alt": "Instalasi Jaringan #43"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20250420_141117.jpg",
        "alt": "Instalasi Jaringan #44"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20250424_135354.jpg",
        "alt": "Instalasi Jaringan #45"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20250424_135403.jpg",
        "alt": "Instalasi Jaringan #46"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20250424_143910.jpg",
        "alt": "Instalasi Jaringan #47"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20250426_124236.jpg",
        "alt": "Instalasi Jaringan #48"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20250426_135843.jpg",
        "alt": "Instalasi Jaringan #49"
      },
      {
        "src": "/IT/Our Project/Instlasi Jaringan/IMG_20250701_125438.jpg",
        "alt": "Instalasi Jaringan #50"
      }
    ]
  },
  {
    "id": "pabx",
    "title": "PABX",
    "images": [
      {
        "src": "/IT/Our Project/PABX/20200123_110213.jpg",
        "alt": "PABX #1"
      },
      {
        "src": "/IT/Our Project/PABX/20200123_110227.jpg",
        "alt": "PABX #2"
      },
      {
        "src": "/IT/Our Project/PABX/20200123_110314.jpg",
        "alt": "PABX #3"
      },
      {
        "src": "/IT/Our Project/PABX/20200123_110412.jpg",
        "alt": "PABX #4"
      },
      {
        "src": "/IT/Our Project/PABX/810ebdee-c7ca-41c5-82c0-6d63d2ec7fe2.jpg",
        "alt": "PABX #5"
      },
      {
        "src": "/IT/Our Project/PABX/FB_IMG_1710379143863.jpg",
        "alt": "PABX #6"
      },
      {
        "src": "/IT/Our Project/PABX/IMG_20220616_151926.jpg",
        "alt": "PABX #7"
      }
    ]
  },
  {
    "id": "radio-trunk",
    "title": "Radio Trunk 2 meter Band",
    "images": [
      {
        "src": "/IT/Our Project/Radio Trunk 2 meter Band/IMG_20220723_101955.jpg",
        "alt": "Radio Trunk 2 meter Band #1"
      },
      {
        "src": "/IT/Our Project/Radio Trunk 2 meter Band/IMG_20220723_102000.jpg",
        "alt": "Radio Trunk 2 meter Band #2"
      },
      {
        "src": "/IT/Our Project/Radio Trunk 2 meter Band/IMG_20220723_102022.jpg",
        "alt": "Radio Trunk 2 meter Band #3"
      },
      {
        "src": "/IT/Our Project/Radio Trunk 2 meter Band/IMG_20220723_102047.jpg",
        "alt": "Radio Trunk 2 meter Band #4"
      },
      {
        "src": "/IT/Our Project/Radio Trunk 2 meter Band/IMG_20221113_135204_1.jpg",
        "alt": "Radio Trunk 2 meter Band #5"
      },
      {
        "src": "/IT/Our Project/Radio Trunk 2 meter Band/IMG_20221113_135207.jpg",
        "alt": "Radio Trunk 2 meter Band #6"
      },
      {
        "src": "/IT/Our Project/Radio Trunk 2 meter Band/IMG_20221119_093215 (1).jpg",
        "alt": "Radio Trunk 2 meter Band #7"
      },
      {
        "src": "/IT/Our Project/Radio Trunk 2 meter Band/IMG_20221119_093215.jpg",
        "alt": "Radio Trunk 2 meter Band #8"
      },
      {
        "src": "/IT/Our Project/Radio Trunk 2 meter Band/IMG_20221119_093230.jpg",
        "alt": "Radio Trunk 2 meter Band #9"
      },
      {
        "src": "/IT/Our Project/Radio Trunk 2 meter Band/IMG_20221119_093933.jpg",
        "alt": "Radio Trunk 2 meter Band #10"
      },
      {
        "src": "/IT/Our Project/Radio Trunk 2 meter Band/IMG_20221119_094413.jpg",
        "alt": "Radio Trunk 2 meter Band #11"
      },
      {
        "src": "/IT/Our Project/Radio Trunk 2 meter Band/IMG_20221119_094846.jpg",
        "alt": "Radio Trunk 2 meter Band #12"
      },
      {
        "src": "/IT/Our Project/Radio Trunk 2 meter Band/IMG_20221119_095722.jpg",
        "alt": "Radio Trunk 2 meter Band #13"
      },
      {
        "src": "/IT/Our Project/Radio Trunk 2 meter Band/IMG_20221119_102232.jpg",
        "alt": "Radio Trunk 2 meter Band #14"
      },
      {
        "src": "/IT/Our Project/Radio Trunk 2 meter Band/IMG_20221119_104228.jpg",
        "alt": "Radio Trunk 2 meter Band #15"
      }
    ]
  },
  {
    "id": "telecomunication",
    "title": "Telecomunication",
    "images": [
      {
        "src": "/IT/Our Project/Telecomunication/100_0589.JPG",
        "alt": "Telecomunication #1"
      },
      {
        "src": "/IT/Our Project/Telecomunication/100_7408.JPG",
        "alt": "Telecomunication #2"
      },
      {
        "src": "/IT/Our Project/Telecomunication/29052010222.jpg",
        "alt": "Telecomunication #3"
      },
      {
        "src": "/IT/Our Project/Telecomunication/IMG_0800.JPG",
        "alt": "Telecomunication #4"
      },
      {
        "src": "/IT/Our Project/Telecomunication/IMG_0810.JPG",
        "alt": "Telecomunication #5"
      },
      {
        "src": "/IT/Our Project/Telecomunication/IMG_8939.JPG",
        "alt": "Telecomunication #6"
      }
    ]
  },
  {
    "id": "videotron",
    "title": "Videotron",
    "images": [
      {
        "src": "/IT/Our Project/Videotron/IMG_20240318_133905.jpg",
        "alt": "Videotron #1"
      },
      {
        "src": "/IT/Our Project/Videotron/IMG_20240318_140017.jpg",
        "alt": "Videotron #2"
      },
      {
        "src": "/IT/Our Project/Videotron/IMG_20241203_102429.jpg",
        "alt": "Videotron #3"
      },
      {
        "src": "/IT/Our Project/Videotron/IMG_20241203_104628.jpg",
        "alt": "Videotron #4"
      },
      {
        "src": "/IT/Our Project/Videotron/IMG_20241203_110047.jpg",
        "alt": "Videotron #5"
      },
      {
        "src": "/IT/Our Project/Videotron/IMG_20241203_110108.jpg",
        "alt": "Videotron #6"
      },
      {
        "src": "/IT/Our Project/Videotron/IMG_20241203_110130.jpg",
        "alt": "Videotron #7"
      },
      {
        "src": "/IT/Our Project/Videotron/IMG_20241203_110245.jpg",
        "alt": "Videotron #8"
      },
      {
        "src": "/IT/Our Project/Videotron/IMG_20241203_111022.jpg",
        "alt": "Videotron #9"
      },
      {
        "src": "/IT/Our Project/Videotron/IMG_20241203_111045.jpg",
        "alt": "Videotron #10"
      },
      {
        "src": "/IT/Our Project/Videotron/IMG_20241203_112153.jpg",
        "alt": "Videotron #11"
      },
      {
        "src": "/IT/Our Project/Videotron/IMG_20241203_112203.jpg",
        "alt": "Videotron #12"
      },
      {
        "src": "/IT/Our Project/Videotron/IMG_20241203_112244.jpg",
        "alt": "Videotron #13"
      }
    ]
  }
];

interface ITProjectProps {
  onNavigate?: (page: string) => void;
}

export const ITProject: React.FC<ITProjectProps> = () => {
  return (
    <div className="w-full min-h-screen bg-[#fafcff] relative overflow-hidden font-sans text-neutral-900 selection:bg-neutral-950 selection:text-white">
      
      {/* =========================================================================
          AMBIENT BACKGROUND VISUALS (Pattern & Subtle Gradient Glows)
      ========================================================================== */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle Tech Dot Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#004B87 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
        
        {/* Soft Ambient Radial Lights */}
        <div className="absolute -top-40 right-0 w-[550px] h-[550px] bg-gradient-to-br from-cyan-400/10 to-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute top-[35%] -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/10 to-teal-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-tl from-cyan-400/10 to-indigo-500/5 rounded-full blur-3xl" />
      </div>

      {/* =========================================================================
          MAIN GALLERY CONTENT CONTAINER
      ========================================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-3.5 sm:px-8 lg:px-12 py-10 sm:py-24 space-y-12 sm:space-y-24">
        
        {PROJECT_GROUPS.map((group) => (
          <section key={group.id} className="space-y-5 sm:space-y-8 group/section">
            
            {/* Category Header */}
            <div className="mb-4 sm:mb-8">
              <h2 className="text-xl sm:text-3xl lg:text-[40px] font-normal text-[#2f6596] tracking-tight">
                {group.title}
              </h2>
              <div className="w-10 sm:w-12 h-[2.5px] sm:h-[3px] bg-[#2f6596] mt-2 sm:mt-3" />
            </div>

            {/* Photos Grid (3 Kolom di HP / Mobile sampai Desktop) */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8 items-start">
              {group.images.map((img, idx) => (
                <div
                  key={idx}
                  className="group relative aspect-[4/3] w-full rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden bg-white p-1 sm:p-2 border border-neutral-200/90 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.06)] transition-all duration-300"
                >
                  
                  {/* Photo Inner Container */}
                  <div className="relative w-full h-full rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden bg-neutral-100">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className={`w-full h-full object-cover ${group.imagePosition || 'object-center'} transition-transform duration-500 ease-out group-hover:scale-105`}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/service_it_support.png';
                      }}
                    />

                    {/* Diagonal Shimmer Light Sweep on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                  </div>

                </div>
              ))}
            </div>

          </section>
        ))}

      </div>

    </div>
  );
};
