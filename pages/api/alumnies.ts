// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Student } from '../../types'

type Data = Student[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): void {
  const data: Student[] = [
    {
      nim: 1,
      name: 'TRIANA RADITA INDRAWATI',
      gender: 'Perempuan',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/da4d/108932855_3_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/triana.r.indrawati?_rdc=1&_rdr'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/trianaradita/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCagRza7VOcsiRkg2KF57Xow'
        }
      ]
    },
    {
      nim: 2,
      name: 'WIDYA CAHYA NINGTIAS',
      gender: 'Perempuan',
      city: 'Pamekasan, Jawa Timur',
      avatar: '',
      socials: null
    },
    {
      nim: 3,
      name: 'NISAA KAMILA RAHMATILLAH',
      gender: 'Perempuan',
      city: 'Surabaya, Jawa Timur',
      avatar: 'https://u.ph.edim.co/b0e0/108670621_4_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/kamila.nisaa'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/nisaa.kamila/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UC3TvCIF0CI0idkhfr7gD3vg'
        },
        {
          name: 'Github',
          url: 'https://github.com/kamilarahmatillah'
        }
      ]
    },
    {
      nim: 4,
      name: 'M. SONI SETIAWAN',
      gender: 'Laki - Laki',
      city: 'Lamongan, Jawa Timur',
      avatar:
        'https://scontent.fsub5-1.fna.fbcdn.net/v/t1.0-9/13939590_826034770831328_8625784647743405732_n.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeHrE63oNHpJEyALoAbnzd9fV6KM8nYQTtdXoozydhBO19Uz4i6BYWCKpmWRCFexkm5HMZ3FdAm1kzKDQLV8D2Wk&_nc_ohc=s36n01mCMDcAX8gf5NU&_nc_ht=scontent.fsub5-1.fna&oh=0f2bd23a7adbf883b5df7805542e403e&oe=5F42BE22',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/sony.setiawan.5'
        }
      ]
    },
    {
      nim: 5,
      name: 'IFUL ROSIDI',
      gender: 'Laki - Laki',
      city: 'Mojokerto, Jawa Timur',
      avatar: 'https://u.ph.edim.co/cfbd/108932955_3_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/ifulrozidi'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/ifulrosidi/'
        }
      ]
    },
    {
      nim: 6,
      name: 'IQBAL ADIYATMA',
      gender: 'Laki - Laki',
      city: 'Jombang, Jawa Timur',
      avatar: 'https://u.ph.edim.co/8245/112631085_5_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/iqbal.adiyatma'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCuiQYOz5cbU9RwP0n-_L-uA'
        }
      ]
    },
    {
      nim: 7,
      name: 'AGUS RIYANTO SUTOMO',
      gender: 'Laki - Laki',
      city: 'Pamekasan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/4d0d/108668245_4_140.jpg',
      socials: null
    },
    {
      nim: 8,
      name: 'TIYA JAYANTI',
      gender: 'Perempuan',
      city: 'Sumenep, Jawa Timur',
      avatar: 'https://u.ph.edim.co/2df4/109526677_3_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/tiya.jayanti'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/tyajyt/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UC12NV-yyP22-Q5BjtrfEt_w'
        },
        {
          name: 'Github',
          url: 'https://github.com/tiyajayanti'
        }
      ]
    },
    {
      nim: 9,
      name: 'ROSALIA SUKMAWATI',
      gender: 'Perempuan',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/315e/108939665_3_140.png',
      socials: null
    },
    {
      nim: 10,
      name: 'SAFIRA ROHMATUL LAILY',
      gender: 'Perempuan',
      city: 'Surabaya, Jawa Timur',
      avatar: 'https://u.ph.edim.co/9c7b/108932427_3_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/fiierach.brcmchdyieryiemuch'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/safira_laily98/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCFiGIO-sPVgaUWNDcPZi7nw'
        }
      ]
    },
    {
      nim: 11,
      name: 'Moh. Zulham Effendy',
      gender: 'Laki - Laki',
      city: 'Sidoarjo, Jawa Timur',
      avatar:
        'https://avatars2.githubusercontent.com/u/38505192?s=460&u=dc6b2da1b70ed3a9f8213a82acfff9d3715f64b2&v=4',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/zulham.fendhy'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/zulhamfendhy/'
        },
        {
          name: 'Github',
          url: 'https://github.com/zulhamfendhy'
        }
      ]
    },
    {
      nim: 12,
      name: 'MOHAMMAD FARIS AZHAR',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/be3d/113177265_6_140.png',
      socials: null
    },
    {
      nim: 13,
      name: 'WENI PRATIWI S.',
      gender: 'Perempuan',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/4c88/108939891_4_140.jpg',
      socials: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/wenipratiwi.s/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCkdeOtZ2J4WLcdfuUVR2cnw'
        }
      ]
    },
    {
      nim: 14,
      name: 'YUNI INDAH SUSILANA SARI',
      gender: 'Perempuan',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/4b8d/112198977_3_140.jpg',
      socials: [
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UC7Ws48h4NgisyNxVLv0dEdA'
        }
      ]
    },
    {
      nim: 15,
      name: 'AISY QONITAH SUWARDI',
      gender: 'Perempuan',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/fba5/87745541_3_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/aisy.qonitah'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/aisyqonitah/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UC9yL_rTFBYw25tt6Rtb4JmA'
        }
      ]
    },
    {
      nim: 16,
      name: 'MIFTAHUL JANNAH',
      gender: 'Perempuan',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/868c/109484269_5_140.png',
      socials: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/saya_miftah/'
        }
      ]
    },
    {
      nim: 17,
      name: 'DICKY DWI RYANTIARNO',
      gender: 'Laki - Laki',
      city: 'Lamongan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/60ee/108930619_1_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/dicky.dwi.r'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/dicky.dwi.r/'
        }
      ]
    },
    {
      nim: 18,
      name: 'Husna',
      gender: 'Perempuan',
      city: 'Sumenep, Jawa Timur',
      avatar: 'https://u.ph.edim.co/6c03/122958312_1_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/huzsnasie.putribunksu'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/_na_hus_/'
        }
      ]
    },
    {
      nim: 19,
      name: 'PANDU PRASETIYA',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/4611/108666387_5_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/kamal.selalu'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/pandutok/'
        }
      ]
    },
    {
      nim: 20,
      name: 'RACHMADANI EKA PRAMASTA',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar:
        'https://instagram.fsub5-1.fna.fbcdn.net/v/t51.2885-15/e35/66674180_2418558341713171_775233525449200738_n.jpg?_nc_ht=instagram.fsub5-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=hfGdt1zBNUwAX8oc_n4&oh=9b09fba1e2d2132d11115e272953f3ae&oe=5F46E757',
      socials: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/ekapramasta/'
        }
      ]
    },
    {
      nim: 21,
      name: 'NUR HASANAH',
      gender: 'Perempuan',
      city: 'Bangkalan, Jawa Timur',
      avatar: null,
      socials: null
    },
    {
      nim: 22,
      name: 'GALIH KARUNIA PRATAMA',
      gender: 'Laki - Laki',
      city: 'Mojokerto, Jawa Timur',
      avatar: 'https://u.ph.edim.co/b295/113825403_5_140.png',
      socials: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/galihkaruniap/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCA6hKLz6pa23bgRLHq0JNPA'
        }
      ]
    },
    {
      nim: 23,
      name: 'IBNU ASRO PUTRA',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/1c15/108931677_5_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/putra.ranger1'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/ibnuputra10/'
        },
        {
          name: 'Github',
          url: 'https://github.com/Ibara99'
        }
      ]
    },
    {
      nim: 24,
      name: 'Ardian Kurniawan',
      gender: 'Laki - Laki',
      city: 'Mojokerto, Jawa Timur',
      avatar: 'https://u.ph.edim.co/ca5e/109478123_4_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/kadal.destroy'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/ardiankurrr/'
        }
      ]
    },
    {
      nim: 25,
      name: 'INTAN PERTIWI RAHMATIKA',
      gender: 'Perempuan',
      city: 'Lamongan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/cbac/108939641_4_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/intan.pertiwi.96592836'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/intanpertiwirahmatika/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCCCsfwNaPOoa8O93KwIIQjw'
        }
      ]
    },
    {
      nim: 26,
      name: 'MEILANI RIZKIANA DEWI',
      gender: 'Perempuan',
      city: 'Tuban, Jawa Timur',
      avatar: 'https://u.ph.edim.co/cfff/112105781_4_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/meilani.rizkianadewi.5'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/meilaniird/'
        }
      ]
    },
    {
      nim: 27,
      name: 'HENDRIK WAHYU SEPTIYONO',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/3d29/108670465_3_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/kconkalmasyr.duaduasembilan'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/bobhendrik4/'
        }
      ]
    },
    {
      nim: 28,
      name: 'RIZKY IHLAS RAHMADHANI',
      gender: 'Laki - Laki',
      city: 'Lamongan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/6469/109994173_1_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/jaya.frez'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/ihlaspgs27/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCsEhu60Ds7E17OMPbCl7h1w'
        }
      ]
    },
    {
      nim: 29,
      name: 'RIZKYTA AYU NAFIAH',
      gender: 'Perempuan',
      city: 'Kediri, Jawa Timur',
      avatar: 'https://u.ph.edim.co/a115/108940885_3_140.png',
      socials: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/rizkytaayuna/'
        }
      ]
    },
    {
      nim: 30,
      name: 'REISKI MUHAMMAD RAYTANDIA AZIZ',
      gender: 'Laki - Laki',
      city: 'Sumenep, Jawa Timur',
      avatar: 'https://u.ph.edim.co/84e7/112191963_1_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/reiski1'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/raytandia_/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCXH0Zeruoe9e_ob7gsj6Pnw'
        },
        {
          name: 'Github',
          url: 'https://github.com/raytandia'
        }
      ]
    },
    {
      nim: 31,
      name: 'AKHMAD ZAINUDDIN',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: null,
      socials: null
    },
    {
      nim: 32,
      name: 'Rachmad Agung Pambudi',
      gender: 'Laki - Laki',
      city: 'Gresik, Jawa Timur',
      avatar: 'https://u.ph.edim.co/fd0a/109952183_4_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/pambudi171'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/rachmad_agung17/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UC-r43M6PE31n10erH9MpK2w'
        },
        {
          name: 'Github',
          url: 'https://github.com/RachmadAgungP'
        }
      ]
    },
    {
      nim: 33,
      name: 'RIZKI DANANG PRAKOSO WIBOWO',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar:
        'https://instagram.fsub5-1.fna.fbcdn.net/v/t51.2885-15/e35/14561958_155293931618630_5640000673417265152_n.jpg?_nc_ht=instagram.fsub5-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=C9_E-k3ihgwAX8sYcAG&oh=82a9cf63c74f3aa2eeb08479bedc4153&oe=5F46FC92',
      socials: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/masukk_angin/'
        }
      ]
    },
    {
      nim: 34,
      name: 'FIZA ASMAWATI',
      gender: 'Perempuan',
      city: 'Lamongan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/62f5/112297729_3_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/fizza.fiya'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/fizza_aa/'
        }
      ]
    },
    {
      nim: 35,
      name: 'AHMAD IMRON RIZALDY',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/4391/90251177_5_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/ahmadrizaldy013'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/ahmadrizaldy00/'
        }
      ]
    },
    {
      nim: 36,
      name: 'M. EKO ARIYANTO',
      gender: 'Laki - Laki',
      city: 'Palembang, Sumatra Selatan',
      avatar: 'https://u.ph.edim.co/46e3/92383943_10_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/M.EKO1D'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/m.ekoariyanto/'
        }
      ]
    },
    {
      nim: 37,
      name: 'M. ROZIN ANJAD',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/17f6/108932299_3_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/rhozin.anjahdt'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/anjadcodemaster/'
        }
      ]
    },
    {
      nim: 38,
      name: 'A. BAIDOWI',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/9400/112956653_4_140.png',
      socials: null
    },
    {
      nim: 39,
      name: 'WINONA NORASIA',
      gender: 'Perempuan',
      city: 'Sidoarjo, Jawa Timur',
      avatar: 'https://u.ph.edim.co/f325/108670475_5_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/winonanorasia'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/winonanorasia/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCKwUXzpPyRCJZDsEM5UP2ZQ'
        }
      ]
    },
    {
      nim: 40,
      name: 'ADE SETYA PRIAMBUDI',
      gender: 'Laki - Laki',
      city: 'Sidoarjo, Jawa Timur',
      avatar: 'https://u.ph.edim.co/46db/109481689_3_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/ade.setya.735'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/adesetya123/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCmAnwcyhzcoYi-HU_Kzf2LA'
        }
      ]
    },
    {
      nim: 41,
      name: 'SELLY LINGGAR WATI',
      gender: 'Perempuan',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/568c/108939233_5_140.png',
      socials: null
    },
    {
      nim: 42,
      name: 'FAHRUR ROSI',
      gender: 'Laki - Laki',
      city: 'Sumenep, Jawa Timur',
      avatar: 'https://u.ph.edim.co/4aa9/54684337_6_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/fahrurrosii13'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/fahrur_rosii/'
        }
      ]
    },
    {
      nim: 43,
      name: 'NAFA AL ILMA',
      gender: 'Laki - Laki',
      city: 'Ngawi, Jawa Timur',
      avatar: 'https://u.ph.edim.co/f2d1/108664671_3_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/nafa002'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/nafa_alucard/'
        }
      ]
    },
    {
      nim: 44,
      name: 'Dian Wibowo',
      gender: 'Laki - Laki',
      city: 'Gresik, Jawa Timur',
      avatar: 'https://u.ph.edim.co/8a8e/109506077_2_140.jpg',
      socials: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/dian_wib/'
        },
        {
          name: 'Github',
          url: 'https://github.com/dianwib'
        }
      ]
    },
    {
      nim: 45,
      name: 'MOH. MIFTAKHUS SOBARI',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/1bfa/96204307_4_140.png',
      socials: [
        {
          name: 'Github',
          url: 'https://github.com/mms1927'
        }
      ]
    },
    {
      nim: 46,
      name: 'ERIN RISKAWATI',
      gender: 'Perempuan',
      city: 'Madiun, Jawa Timur',
      avatar: 'https://u.ph.edim.co/ea1b/113161819_4_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/Erin-Riskawati-106480677703658'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/erinriskawati/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCMbty1GsJQPF2Yij39UGXcA/videos'
        }
      ]
    },
    {
      nim: 47,
      name: 'ROFIK',
      gender: 'Laki - Laki',
      city: 'Probolinggo, Jawa Timur',
      avatar: 'https://u.ph.edim.co/2972/108668239_4_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/rofik.udahterkenal'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/rofiksukses_/'
        }
      ]
    },
    {
      nim: 48,
      name: 'Siti Rohmawati',
      gender: 'Perempuan',
      city: 'Magetan, Jawa Tengah',
      avatar: 'https://u.ph.edim.co/1e90/109487129_4_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/sitirohmawa'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/sitirohmawati839/'
        }
      ]
    },
    {
      nim: 49,
      name: 'RACHMAD MASBADI HATULLAH N',
      gender: 'Laki - Laki',
      city: 'Surabaya, Jawa Timur',
      avatar: 'https://u.ph.edim.co/b14e/108932565_3_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/oo.wyvern'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/rachmadmasbadi/'
        }
      ]
    },
    {
      nim: 50,
      name: 'WAHYU RAMADHAN WIDI HARTONO',
      gender: 'Laki - Laki',
      city: 'Sidoarjo, Jawa Timur',
      avatar: 'https://u.ph.edim.co/fa0b/111932177_1_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/ramadhannthu.wahyu'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/wahyu_rama/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCOIqS7JggQoY1YsyBrhr1SA'
        }
      ]
    },
    {
      nim: 51,
      name: 'SELVIE AKMALIA',
      gender: 'Perempuan',
      city: 'Pamekasan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/0eb4/108671193_8_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/selvie.akmalia.1'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/selvie_20/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCFIcwQq_aaMZVLI4r9Yd6kQ'
        },
        {
          name: 'Github',
          url: 'https://github.com/Selvie051'
        }
      ]
    },
    {
      nim: 52,
      name: 'ACHMAD MUHAIMIN',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/c5e3/110489999_1_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/achmad.muhaimin.98'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/muhaimnnn/'
        }
      ]
    },
    {
      nim: 53,
      name: 'IRFAN EFENDI',
      gender: 'Laki - Laki',
      city: 'Mojokerto, Jawa Timur',
      avatar:
        'https://instagram.fsub3-2.fna.fbcdn.net/v/t51.2885-19/s320x320/104411001_883016298869061_3249943209929596768_n.jpg?_nc_ht=instagram.fsub3-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=q5jc1O7E3gsAX93VYiX&oh=24c1e254547459b1cf0d574d8704f965&oe=5F46394D',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/profile.php?id=100011149596968'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/irfanefend17/'
        }
      ]
    },
    {
      nim: 54,
      name: 'KRISNA DWI CAHYO',
      gender: 'Laki - Laki',
      city: 'Jombang, Jawa Timur',
      avatar: 'https://u.ph.edim.co/ccdd/23048236_4_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/search/top/?q=KRISNA%20DWI%20CAHYO'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/krishnacahyo/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCpIvZAS9Vmq0x_p0FtsCsqg'
        }
      ]
    },
    {
      nim: 55,
      name: 'MIFTAHUL CHOIR',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/a5cb/108671307_4_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/khoir.kethibik'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/miftahulchoir24/'
        },
        {
          name: 'Github',
          url: 'https://github.com/MChoir24'
        }
      ]
    },
    {
      nim: 56,
      name: 'MOHAMMAD FARIDUDDIN',
      gender: 'Laki - Laki',
      city: 'Gresik, Jawa Timur',
      avatar: 'https://u.ph.edim.co/ebeb/109509287_4_140.png',
      socials: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/frdcbin/'
        }
      ]
    },
    {
      nim: 57,
      name: 'FAHREZA ABDUL LATIEF',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/3c59/108935501_2_140.jpg',
      socials: null
    },
    {
      nim: 58,
      name: 'FAKHRUR RAZI',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/d21b/112673589_7_140.png',
      socials: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/razi_abang/'
        }
      ]
    },
    {
      nim: 59,
      name: '	GLORIA THERESIA FEBRYANTI',
      gender: 'Perempuan',
      city: 'Jombang, Jawa Timur',
      avatar: 'https://u.ph.edim.co/852b/108667911_2_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/gloria.t.febryanti'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/gloriafebby/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCVNMNRoDZZmaLE4HuEtNq4g'
        }
      ]
    },
    {
      nim: 60,
      name: 'TRI NOVIANTO',
      gender: 'Laki - Laki',
      city: 'Jombang, Jawa Timur',
      avatar: 'https://u.ph.edim.co/5404/110446687_5_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/tito.new.79'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/titoti11/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCdEiqwm9Z_yhbyZB1NZarlA'
        }
      ]
    },
    {
      nim: 61,
      name: 'KADARISMAN',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: null,
      socials: null
    },
    {
      nim: 62,
      name: 'Getar Rahmatulloh',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/9731/87746899_4_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/getar.rachmatulloh'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/getarrachmatulloh/'
        }
      ]
    },
    {
      nim: 63,
      name: 'MUHAMMAD INAYATULLOH',
      gender: 'Laki - Laki',
      city: 'Jombang, Jawa Timur',
      avatar: 'https://u.ph.edim.co/f164/108667283_5_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/Muhammad.inayatulloh.1'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/ainmtsn1999/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCM5MPzRiexpmzj6N8SvmfZQ'
        },
        {
          name: 'Github',
          url: 'https://github.com/ainmtsn1999'
        }
      ]
    },
    {
      nim: 64,
      name: 'FAHMI PRADHANA PUTRA',
      gender: 'Laki - Laki',
      city: 'Sumenep, Jawa Timur',
      avatar: 'https://u.ph.edim.co/9eae/111089769_4_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/Punk.MohawK'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/fahmipradhana/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UC_VytQFgrDSO3_T6eEVI1QA'
        }
      ]
    },
    {
      nim: 65,
      name: 'ULVIA AYU CAHYANI',
      gender: 'Perempuan',
      city: 'Lamongan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/c080/108941463_2_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/UlviaAyuCahyani'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/ulviaayu_/'
        }
      ]
    },
    {
      nim: 66,
      name: 'Banin Akbar Rismala',
      gender: 'Laki - Laki',
      city: 'Lamongan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/e182/112071109_2_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/BaninAkbar'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/baninakbar/'
        }
      ]
    },
    {
      nim: 67,
      name: 'BIMO DWI MAULANA',
      gender: 'Laki - Laki',
      city: 'Lumajang, Jawa Tengah',
      avatar: 'https://u.ph.edim.co/54bc/108667879_4_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/abimmaulana.dwi'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/bimodwm/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCGd2F0G9zEYeR4hBwTzhuow'
        }
      ]
    },
    {
      nim: 68,
      name: 'TAUFIQURRAHMAN MAKSUM',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: null,
      socials: null
    },
    {
      nim: 69,
      name: 'ALI MUSTOFA',
      gender: 'Laki - Laki',
      city: 'Sampang, Jawa Timur',
      avatar: 'https://u.ph.edim.co/9c40/108931871_3_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/profile.php?id=100006488682157'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/re_ryuuku/'
        }
      ]
    },
    {
      nim: 70,
      name: 'ASYROFUL BAROKAH',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/7e73/112127927_1_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/asyrof.pascal'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/asyroful_barokah/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCAYSEo2cgqESTAcYL3kZ6uQ'
        },
        {
          name: 'Github',
          url: 'https://github.com/asyrofulBarokah'
        }
      ]
    },
    {
      nim: 71,
      name: 'JAWI ALWANDANY NATA PANUNTUN',
      gender: 'Laki - Laki',
      city: 'Sidoarjo, Jawa Timur',
      avatar: 'https://u.ph.edim.co/c7a2/16258198_6_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/nata.naghjatikalang'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/nataalwandany/'
        }
      ]
    },
    {
      nim: 72,
      name: 'ASNGAT BAIHAQI',
      gender: 'Laki - Laki',
      city: 'Blitar, Jawa Timur',
      avatar: 'https://u.ph.edim.co/c02b/109883685_3_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/profile.php?id=100008051175041'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/asngat_baihq/'
        }
      ]
    },
    {
      nim: 73,
      name: 'KHOLIF AL ZUHAD',
      gender: 'Laki - Laki',
      city: 'Lamongan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/b3fb/108930935_3_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/kholifal.zuhad.1'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/zuhad_alz/'
        }
      ]
    },
    {
      nim: 74,
      name: 'BAHAR RUDIN',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/df0b/112221483_5_140.jpg',
      socials: null
    },
    {
      nim: 75,
      name: 'ACH. CHOIRUL UMAM',
      gender: 'Laki - Laki',
      city: 'Sampang, Jawa Timur',
      avatar: 'https://u.ph.edim.co/8ee6/108667141_5_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/choirulumam09'
        }
      ]
    },
    {
      nim: 76,
      name: 'FERNANDA YUSUF RAMADHAN',
      gender: 'Laki - Laki',
      city: 'Madiun, Jawa Timur',
      avatar: 'https://u.ph.edim.co/8b3a/113215165_6_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/yusuf.Ramadhannn'
        }
      ]
    },
    {
      nim: 77,
      name: 'Afni Sakinah',
      gender: 'Perempuan',
      city: 'Gresik, Jawa Timur',
      avatar: 'https://u.ph.edim.co/7da0/108932169_3_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/afni151621'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/afnsknh/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCHxoWUpZN57tOUjdEny579g'
        },
        {
          name: 'Github',
          url: 'https://github.com/afnsknh'
        }
      ]
    },
    {
      nim: 78,
      name: 'MOH. SABHAN',
      gender: 'Laki - Laki',
      city: 'Pamekasan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/c302/113132745_4_140.png',
      socials: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/sabhan_mohammad/'
        }
      ]
    },
    {
      nim: 79,
      name: 'DENNIS THANDY NUR CAHYONO',
      gender: 'Laki - Laki',
      city: 'Bojonegoro, Jawa Timur',
      avatar: 'https://u.ph.edim.co/b8ff/21129755_1_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/dennisthandy'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/dennisthandy/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCtOwXKcatbRlseFRZvb4gCw'
        },
        {
          name: 'Github',
          url: 'https://github.com/dennisthandy'
        }
      ]
    },
    {
      nim: 80,
      name: 'Suluh Hidayat',
      gender: 'Laki - Laki',
      city: 'Pekalongan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/d851/109481767_7_140.png',
      socials: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/suluhhidayat/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCIe2VVZnea5-HvkrgVj5ayg'
        }
      ]
    },
    {
      nim: 81,
      name: 'MUHAMMAD FAUZAN SAPUTRA',
      gender: 'Laki - Laki, Jawa Timur',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/0f11/88792039_3_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/mfauzansaputra'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/fauzans_/'
        }
      ]
    },
    {
      nim: 82,
      name: 'ABDUL MUKTI NURROHMAN',
      gender: 'Laki - Laki',
      city: 'Tuban, Jawa Timur',
      avatar: 'https://u.ph.edim.co/ae5e/112189337_1_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/rezpector.ronggolawe.1'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/atek98_/'
        },
        {
          name: 'Github',
          url: 'https://github.com/Abdulmuktinur'
        }
      ]
    },
    {
      nim: 83,
      name: 'RIZQI SYAHRI SYAFII PUTRA',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/4b8f/108665079_4_140.jpg',
      socials: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/rizisyhs/'
        }
      ]
    },
    {
      nim: 84,
      name: 'Friska Fatmawati',
      gender: 'Perempuan',
      city: 'Gresik, Jawa Timur',
      avatar: 'https://u.ph.edim.co/00f8/80089845_6_140.jpg',
      socials: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/friskafatmawati/'
        }
      ]
    },
    {
      nim: 85,
      name: 'ALVINNANDA DARY',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/4794/56473965_8_140.png',
      socials: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/alvinnandad/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCCbMx6PX1ozt5aXfcfasoAA'
        }
      ]
    },
    {
      nim: 86,
      name: 'Iis Yuni Harianti',
      gender: 'Perempuan',
      city: 'Sumenep, Jawa Timur',
      avatar:
        'https://yt3.ggpht.com/a/AATXAJxOI4Gdjz2uwBDj7mRK2m122bO-homQWITNc_dYNw=s176-c-k-c0x00ffffff-no-rj-mo',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/Iis.Yuni.H'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/iisyuni28_/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCGzFSehU1wEgTKEeyI-VoPA'
        },
        {
          name: 'Github',
          url: 'https://github.com/iisyuni'
        }
      ]
    },
    {
      nim: 87,
      name: 'UMMAMAH',
      gender: 'Perempuan',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/288c/108668127_2_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/uum.chayankdya'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/ummamah_98/'
        }
      ]
    },
    {
      nim: 88,
      name: 'BRIAN SAVERO HUSNI ADAM',
      gender: 'Laki - Laki',
      city: 'Lamongan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/906f/89585477_1_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/brian.savero.50'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/briansavero/'
        },
        {
          name: 'Github',
          url: 'https://github.com/saverobrian'
        }
      ]
    },
    {
      nim: 89,
      name: 'AHADI NURKHOLID',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/cf72/108931085_3_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/adit.tsukasa'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/adit_nurkholid/'
        }
      ]
    },
    {
      nim: 90,
      name: 'MAMLUATUL HASANAH',
      gender: 'Perempuan',
      city: 'Sumenep, Jawa Timur',
      avatar: 'https://u.ph.edim.co/4f87/112329645_10_140.jpg',
      socials: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/luk_mamluk1/'
        }
      ]
    },
    {
      nim: 91,
      name: 'MOHAMMAD MAMAN MARZUKI',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/917d/108691217_3_140.png',
      socials: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/maman.a/'
        }
      ]
    },
    {
      nim: 92,
      name: 'SHERLY YURISKA NURCAHYANI',
      gender: 'Perempuan',
      city: 'Madiun, Jawa Timur',
      avatar: 'https://u.ph.edim.co/6efe/109490513_6_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/sherlychiembeb.btuhdhyaa'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/sherlyuriska.aw/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCUtGk20bIcUflx87d5uXvIg'
        }
      ]
    },
    {
      nim: 93,
      name: 'AHMAD WAHYUDI',
      gender: 'Laki - Laki',
      city: 'Sumenep, Jawa Timur',
      avatar: 'https://u.ph.edim.co/ea6c/108920417_5_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/ahmadwahyudi2395'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/ahmadwahyudi2395/'
        }
      ]
    },
    {
      nim: 94,
      name: 'AGAM DWI MAULANA',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/c1be/112868087_3_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/agamsebastian'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/agam_d.m/'
        },
        {
          name: 'Github',
          url: 'https://github.com/Agamdm'
        }
      ]
    },
    {
      nim: 95,
      name: 'Alifian Zunaedi Rochmanto',
      gender: 'Laki - Laki',
      city: 'Surabaya, Jawa  Timur',
      avatar: 'https://u.ph.edim.co/2c02/108665145_3_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/alifian.rochmanto'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/alifianzr/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCfZMeL-iNRiciM4tgwsyn7A'
        }
      ]
    },

    {
      nim: 96,
      name: 'RONI HERMANTO',
      gender: 'Laki - Laki',
      city: 'Lamongan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/cb5b/109482619_4_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/Ronihermnato'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/roni_hermantoo/'
        },
        {
          name: 'Github',
          url: 'https://github.com/RoniHermanto'
        }
      ]
    },
    {
      nim: 97,
      name: 'SYAHRUL RAMADHAN',
      gender: 'Laki - Laki',
      city: 'Sampang, Jawa Timur',
      avatar: 'https://u.ph.edim.co/6c1f/108931339_2_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/syahrul.barisic'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/syahrulbarisic19/'
        }
      ]
    },
    {
      nim: 98,
      name: 'DHIMAS GANDA ERLANGGA',
      gender: 'Laki - Laki',
      city: 'Lamongan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/a8ed/122926695_3_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/dhimasganda'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/dhimas_erl/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UC-YbR-QErVkd-mxpi73TgXQ'
        }
      ]
    },
    {
      nim: 99,
      name: 'MAULIDA TULUSIAH',
      gender: 'Perempuan',
      city: 'Lamongan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/d007/108669651_1_140.jpg',
      socials: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/lussimaulida/'
        }
      ]
    },
    {
      nim: 100,
      name: 'MAUFIROH AYU INDAH SARI',
      gender: 'Perempuan',
      city: 'Pamekasan, Jawa Timur',
      avatar:
        'https://instagram.fsub3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/109770525_310925020279513_4518371652708476475_n.jpg?_nc_ht=instagram.fsub3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=O8bPP7BmOgsAX91TJrc&oh=e21b3d9f7b86a8b0332849ef8fdd7bfc&oe=5F4A0C11',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/profile.php?id=100011427737539'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/maufirohayuindahsari/'
        }
      ]
    },
    {
      nim: 101,
      name: 'ROHMATUL JANNAH',
      gender: 'Perempuan',
      city: 'Sumenep, Jawa Timur',
      avatar: 'https://u.ph.edim.co/7947/108932559_1_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/rohmatul.jannah.581'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/rohmajan/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCqmCzpp8F9XNYLpX87oKMIw'
        }
      ]
    },
    {
      nim: 102,
      name: 'FEBRIN HARDIPERMANA PUTRA',
      gender: 'Laki - Laki',
      city: 'Gresik, Jawa Timur',
      avatar: 'https://u.ph.edim.co/9bcc/112199481_2_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/nirbef.sllu'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/febrinhardi/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCqeo3ec6T5fOoosauvpVtgg'
        }
      ]
    },
    {
      nim: 103,
      name: 'ABDULLAH ILYASA',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/829b/112953579_3_140.png',
      socials: null
    },
    {
      nim: 104,
      name: 'RAHMA NUR LAYLA SARI',
      gender: 'Perempuan',
      city: 'Surabaya, Jawa Timur',
      avatar: 'https://u.ph.edim.co/f9c7/53923531_4_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/rahmanur.l.sari'
        }
      ]
    },
    {
      nim: 105,
      name: 'AHMAD YAZID MUNIF',
      gender: 'Laki - Laki',
      city: 'Surabaya, Jawa Timur',
      avatar: 'https://u.ph.edim.co/597b/108924945_1_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/Bianconeri.Turin'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/ahmadyazid29/'
        },
        {
          name: 'Github',
          url: 'https://github.com/yazid29'
        }
      ]
    },
    {
      nim: 106,
      name: 'MUJI ANDIK PRAYOSO AL ARIF',
      gender: 'Laki - Laki',
      city: 'Lamongan, Jawa Timur',
      avatar:
        'https://instagram.fsub4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/115790272_282750706389633_598998665236049012_n.jpg?_nc_ht=instagram.fsub4-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=raDhu0vZlLgAX-euOEr&oh=3eb185bcb44fcbf54936273a41945e34&oe=5F48F563',
      socials: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/an.pra_/'
        }
      ]
    },
    {
      nim: 107,
      name: 'YUSRIL AKBAR AROBI',
      gender: 'Laki - Laki',
      city: 'Sampang, Jawa Timur',
      avatar:
        'https://instagram.fsub3-1.fna.fbcdn.net/v/t51.2885-15/e35/31016788_2076962782558423_6588835717349113856_n.jpg?_nc_ht=instagram.fsub3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=I3_A2r1p-AcAX_gXG01&oh=f9838c8af9f9aa172fc16cd2e7f2b4ff&oe=5F493F3B',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/yusrilakbar.arobi'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/rilakbar/'
        }
      ]
    },
    {
      nim: 108,
      name: 'MOH. IQBAL OKTHAPIAN',
      gender: 'Laki - Laki',
      city: 'Lamongan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/50d0/109480441_2_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/okthapian'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/iqbal_okthapian/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCCFXanQuwQwNtCjeZcAYMMg'
        },
        {
          name: 'Github',
          url: 'https://github.com/okthapian'
        }
      ]
    },
    {
      nim: 109,
      name: 'HAIKAL ATH THARIQ',
      gender: 'Laki - Laki',
      city: 'Surabaya, Jawa Timur',
      avatar: 'https://u.ph.edim.co/b53c/108931163_4_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/uchiha.haikal'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/haikal.thariq/'
        },
        {
          name: 'Github',
          url: 'https://github.com/athariqq'
        }
      ]
    },
    {
      nim: 110,
      name: 'DWI LESTARI',
      gender: 'Perempuan',
      city: 'Jombang, Jawa Timur',
      avatar: 'https://u.ph.edim.co/5580/112331655_2_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/dhwie.leztharie'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/_dwilestari98/'
        }
      ]
    },
    {
      nim: 111,
      name: 'ALVIN NUR ARROFI',
      gender: 'Laki - Laki',
      city: 'Sumenep, Jawa Timur',
      avatar: 'https://u.ph.edim.co/6da2/108664687_4_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/alfin.general'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/alvin_saja/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UC08px_GbWfRTNVMkQUfLzBA'
        },
        {
          name: 'Github',
          url: 'https://github.com/Alvinnura'
        }
      ]
    },
    {
      nim: 112,
      name: 'Wahyu Akbar Wibowo',
      gender: 'Laki - Laki',
      city: 'Bojonegoro, Jawa Timur',
      avatar: 'https://u.ph.edim.co/c635/129241708_3_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/wahyuakbarw'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/wahyuakbarwibowo/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCnMyol6vd_BczZn2pivbl8A'
        },
        {
          name: 'Github',
          url: 'https://github.com/wahyuakbarwibowo'
        }
      ]
    },
    {
      nim: 113,
      name: 'Nurul Firdausy',
      gender: 'Laki - Laki',
      city: 'Sampang, Jawa Timur',
      avatar:
        'https://instagram.fsub4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/87568022_252739522552607_3686834333869408256_n.jpg?_nc_ht=instagram.fsub4-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=JyvAh6akK7cAX8iCU0p&oh=f1b14e74354d228cb1889878d9d0453b&oe=5F4AF57A',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/nurul.firdausy'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/rakyat.sampah/'
        }
      ]
    },
    {
      nim: 114,
      name: 'ANGGI SHOFIYUDDIN',
      gender: 'Laki - Laki',
      city: 'Tuban, Jawa Timur',
      avatar: 'https://u.ph.edim.co/3364/111929535_7_140.png',
      socials: null
    },
    {
      nim: 115,
      name: 'MOCHAMAD FARUL SA`ID',
      gender: 'Laki - Laki',
      city: 'Surabaya, Jawa Timur',
      avatar: 'https://u.ph.edim.co/8e55/108667735_1_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/fahrul.sasuke'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/farul_said/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCg74ZCL4K7JOFh4YZ8JA-lg'
        }
      ]
    },
    {
      nim: 116,
      name: 'ZAINUL ABAD',
      gender: 'Laki - Laki',
      city: 'Nganjuk, Jawa Timur',
      avatar: 'https://u.ph.edim.co/4688/37907513_1_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/zainul8'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/zainul_abad/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCbDfkOF_jNPC5n7YNtRtvLA'
        },
        {
          name: 'Github',
          url: 'https://github.com/zainul45'
        }
      ]
    },
    {
      nim: 117,
      name: 'LUTFIYAN RIZA AMADA',
      gender: 'Laki - Laki',
      city: 'Sumenep, Jawa Timur',
      avatar: 'https://u.ph.edim.co/df12/108956793_2_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/lutfiyanRA'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/lutfiyanra/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UC457uybnVR5Idcwd8GsMhxg'
        }
      ]
    },
    {
      nim: 118,
      name: 'ANJAS NIO PRATAMA',
      gender: 'Laki - Laki',
      city: 'Surabaya, Jawa Timur',
      avatar: 'https://u.ph.edim.co/dddc/112086795_2_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/anjasrz'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/anjasnio/'
        }
      ]
    },
    {
      nim: 119,
      name: 'MOH.FAIZ',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/1425/108667041_4_140.jpg',
      socials: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/faizmuhammad_id/'
        }
      ]
    },
    {
      nim: 120,
      name: 'ZAENAL ALIM',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar:
        'https://scontent.fsub3-1.fna.fbcdn.net/v/t1.0-9/36269285_2245990922294922_7399335156076511232_n.jpg?_nc_cat=101&_nc_sid=174925&_nc_eui2=AeHMQzq9t1etAWHFacdzM4EOQUSDcJXj7V9BRINwlePtX5WAW0hsGDcZUka0nToAsYlCVPyw4nLJSc7lhQpPxdkt&_nc_ohc=M8McWrfHe34AX-WNpeP&_nc_ht=scontent.fsub3-1.fna&oh=6e0881655ea1b63d5a97910ef837bda9&oe=5F47ED9F',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/zaenal.alim19'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/zaenal_aliem/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/c/zamusic'
        }
      ]
    },
    {
      nim: 121,
      name: 'HUSNI ALHAMDANI',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar:
        'https://instagram.fsub4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/104459337_2628289420719251_8237125226330926181_n.jpg?_nc_ht=instagram.fsub4-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=AGnK8Ek9pKsAX8jVN-d&oh=279e345f20710c614d5d6eab2b82f7dc&oe=5F4BCB0A',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/husni.alhamdhani'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/husni_alhamdani/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCzZ5p7F4Zyb_JUWYw4hVJWw'
        },
        {
          name: 'Github',
          url: 'https://github.com/husnialhamdani'
        }
      ]
    },
    {
      nim: 122,
      name: 'MOH. ALFAN NOURUSSALAM',
      gender: 'Laki - Laki',
      city: 'Pamekasan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/0ade/112672415_7_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/mohalfan.n'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/alfan.n/'
        }
      ]
    },
    {
      nim: 123,
      name: 'BIRU SULTHAN AWALDHIA',
      gender: 'Laki - Laki',
      city: 'Surabaya, Jawa Timur',
      avatar: 'https://u.ph.edim.co/430b/108666375_5_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/biru.sulthan1'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/biru.sulthan28/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCNBTCyEt9bxoJA_JuH7DygQ'
        }
      ]
    },
    {
      nim: 124,
      name: 'MUHAMMAD HOLILUR ROHMAN',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/fde8/109489375_2_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/holy.cacciatorecieli'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/awunk_/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCt5Sb6H3F2aYBDyEri41haA'
        }
      ]
    },
    {
      nim: 125,
      name: 'MUNAWAROH',
      gender: 'Perempuan',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/0f6d/108938429_2_140.jpg',
      socials: null
    },
    {
      nim: 126,
      name: 'DENY HERMAWAN',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/543d/111920375_3_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/sky.hunter.39'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/denyxno_/'
        }
      ]
    },
    {
      nim: 127,
      name: 'AHMAD IDRIS MASYHUD',
      gender: 'Laki - Laki',
      city: 'Gresik, Jawa Timur',
      avatar: 'https://u.ph.edim.co/4c68/108667455_4_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/ahmad.madyhud'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/amasyhud/'
        }
      ]
    },
    {
      nim: 128,
      name: 'NURUL VICKY WAHDANIAH',
      gender: 'Perempuan',
      city: 'Sumenep, Jawa Timur',
      avatar: 'https://u.ph.edim.co/b49a/109482253_3_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/nurul.qadry.1'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/syukijaaan/'
        },
        {
          name: 'Github',
          url: 'https://github.com/vicknvw'
        }
      ]
    },
    {
      nim: 129,
      name: 'Nisa Desiana',
      gender: 'Perempuan',
      city: 'Jombang, Jawa Timur',
      avatar: 'https://u.ph.edim.co/2e04/108932755_4_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/nisadesiana44'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/nisadesiana/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UC-DQJnInvIEs4SyeQIED5jQ'
        },
        {
          name: 'Github',
          url: 'https://github.com/nisadesiana'
        }
      ]
    },
    {
      nim: 130,
      name: 'MOHAMMAD ROFIQ',
      gender: 'Laki - Laki',
      city: 'Kediri',
      avatar: 'https://u.ph.edim.co/9bc4/112086417_1_140.jpg',
      socials: null
    },
    {
      nim: 131,
      name: 'JAKA PRAMUDEA RAHMAWAN',
      gender: 'Laki - Laki',
      city: 'Bojonegoro, Jawa Timur',
      avatar: 'https://u.ph.edim.co/2814/88016507_5_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/jaka.pramudea'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/jaka_pramudea_r/'
        }
      ]
    },
    {
      nim: 132,
      name: 'Ayu Dwi Febriani',
      gender: 'Perempuan',
      city: 'Sumenep, Jawa Timur',
      avatar: 'https://u.ph.edim.co/36e8/109492859_6_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/ayhuedwhie.febrianie'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/adfebriani/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCL5fOSKLUy9kFdB8wloFnFw'
        }
      ]
    },
    {
      nim: 133,
      name: 'REBECCA FRISKILA LUMBAN GAOL',
      gender: 'Perempuan',
      city: 'Medan, Sumatra Utara',
      avatar:
        'https://scontent.fsub3-1.fna.fbcdn.net/v/t1.0-9/12509039_805918676220216_817758715980657717_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_eui2=AeE3jrbTRqJmKG0WJT9a2dGITVD-HMjS5bhNUP4cyNLluFT9Oa_6fdQMEl9wNuepNLlaiA0-B0yuDUFPYCX-b4RM&_nc_ohc=xXEvUDhaJyIAX9W5zJU&_nc_ht=scontent.fsub3-1.fna&oh=d6654c150d7825bfb3852a15e9d60a8b&oe=5F472280',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/rebecca.friskila'
        }
      ]
    },
    {
      nim: 134,
      name: 'ANANDA DHARMA PRAYITNO',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/ae0a/112689711_3_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/chiyo.sakura.35'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/adrmp_/'
        }
      ]
    },
    {
      nim: 135,
      name: 'JUNDULLOH PUJADARA',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/166d/97480505_4_140.png',
      socials: null
    },
    {
      nim: 136,
      name: 'AINULLAH',
      gender: 'Laki - Laki',
      city: 'Pamekasan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/8dfd/109750495_4_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/setaainollah.gren'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/ainullah136/'
        }
      ]
    },
    {
      nim: 137,
      name: 'MUHAMMAD IRFAN',
      gender: 'Laki - Laki',
      city: 'Sampang, Jawa Timur',
      avatar: 'https://u.ph.edim.co/9976/108934557_1_140.jpg',
      socials: null
    },
    {
      nim: 138,
      name: 'GUNTUR MAULANA FIRDAUS',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/271e/112568623_3_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/gntrmlna'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/gunthor.exe/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCScs45oJQyH_NCfLy_oE3Lg'
        }
      ]
    },
    {
      nim: 139,
      name: 'TEGAR PRIBADI PUTRA',
      gender: 'Laki - Laki',
      city: 'Gresik, Jawa Timur',
      avatar: 'https://u.ph.edim.co/943d/108668197_3_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/tegar.jokam.354'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/tegarjokam/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UChevHZcbLcY4XvSYNJLyhhA'
        }
      ]
    },
    {
      nim: 140,
      name: 'MUHAMMAD NAJIB KAMAL',
      gender: 'Laki - Laki',
      city: 'Gresik, Jawa Timur',
      avatar: 'https://u.ph.edim.co/b0c0/109524011_4_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/kembul87'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/m.najibkamal/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UC1zId3wLJBwV8IjelDsVkCw'
        }
      ]
    },
    {
      nim: 141,
      name: 'ARIES BUDI PANGESTU',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/a19b/108935787_1_140.jpg',
      socials: [
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UC-GOsIxaiIF9OC36FJpNaJg'
        }
      ]
    },
    {
      nim: 142,
      name: 'MOHAMMAD FAISHOL',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/5563/112134813_3_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/faiszt.pendekar'
        },
        {
          name: 'Github',
          url: 'https://github.com/faishol12'
        }
      ]
    },
    {
      nim: 143,
      name: 'MOH. A. ULFAN YAFI',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/32d7/108670429_3_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/ulfan.yafi'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/ulfanyafi/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCUpvbct4B_lzHGdc8X2TIWw'
        }
      ]
    },
    {
      nim: 144,
      name: 'KHOIRUR ROSYIDI',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar:
        'https://yt3.ggpht.com/a/AATXAJyn0n1HXxwLT93JgCMGCTsLS8IOjP5MT1Z4MXG9=s176-c-k-c0x00ffffff-no-rj-mo',
      socials: [
        {
          name: 'Facebook',
          url: 'https://www.youtube.com/channel/UCDznw4nMX1PA5IWiZ0jvAkA'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/irul_rosyidi/'
        }
      ]
    },
    {
      nim: 145,
      name: 'ABDUR ROHMAN',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/521e/108931355_3_140.png',
      socials: null
    },
    {
      nim: 146,
      name: 'AKHMAD FAIZAL ANSHORI',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/f51b/111930453_4_140.jpg',
      socials: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/faizalansh_/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCygK3YPbrfr2wD28IltE3oQ'
        }
      ]
    },
    {
      nim: 147,
      name: 'MUHAMMAD YUSRIL ZULKARNAIN',
      gender: 'Laki - Laki',
      city: 'Jakarta',
      avatar:
        'https://instagram.fsub4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/70501555_675967702910723_8683395399643299840_n.jpg?_nc_ht=instagram.fsub4-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=uKL66t1j01wAX-R7sS-&oh=1a5ad8b33e2dd7eefa2a9c0fcfddffba&oe=5F4A5D73',
      socials: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/myusrilz/'
        }
      ]
    },
    {
      nim: 148,
      name: 'AL ABRAR HILMI UBAIDAH',
      gender: 'Laki - Laki',
      city: 'Surabaya, Jawa Timur',
      avatar: 'https://u.ph.edim.co/3ce3/109496895_3_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/alabrar.hilmi'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/al_hilmiu/'
        },
        {
          name: 'Github',
          url: 'https://github.com/alhilmiu'
        }
      ]
    },
    {
      nim: 149,
      name: 'MOHAMMAD FIRDAUS AL BAIHAQI',
      gender: 'Laki - Laki',
      city: 'Lamongan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/88c1/108931889_1_140.jpg',
      socials: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/mfirdaus_albaihaqi/'
        }
      ]
    },
    {
      nim: 150,
      name: 'ABDUL GHOFUR',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/7b78/112332195_6_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/profile.php?id=100008884147057'
        }
      ]
    },
    {
      nim: 151,
      name: 'IVAN AKBAR HAFIFI',
      gender: 'Laki - Laki',
      city: 'Trenggalek',
      avatar: 'https://u.ph.edim.co/58e0/108665531_6_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/ivan.akbar.319'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/ivanakbarhff/'
        }
      ]
    },
    {
      nim: 152,
      name: 'NATIQ HASBI ALIM',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/ae27/109979799_3_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/Natiq.Hasbi.Alim'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/natiq_h._alim/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCDbtfZUBbWiTnZPodIieCmw'
        }
      ]
    },
    {
      nim: 153,
      name: 'MOCH. AMIR',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/75de/108931233_4_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/amir.sayonara.1'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/amir_sayonara/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/user/TERMINATOR1234567ism'
        },
        {
          name: 'Github',
          url: 'https://github.com/amirsayonara'
        }
      ]
    },
    {
      nim: 154,
      name: 'Moh. Ilham Burhanuddin',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/b482/112562491_2_140.jpg',
      socials: [
        {
          name: 'Github',
          url: 'https://github.com/ilham76c'
        }
      ]
    },
    {
      nim: 155,
      name: 'Royhan Darul Muttaqin',
      gender: 'Laki - Laki',
      city: 'Pamekasan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/8b24/108664739_5_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/royz.alapola'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/ryhndrlm/'
        }
      ]
    },
    {
      nim: 156,
      name: 'NURUL HIDAYATI',
      gender: 'Perempuan',
      city: 'Sumenep, Jawa Timur',
      avatar: 'https://u.ph.edim.co/9d82/109952171_3_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/CayyaAgassi'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/cayya_agassi/'
        }
      ]
    },
    {
      nim: 157,
      name: 'FAHRIL MABAHIST',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/abd4/108932737_4_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/Mabahist'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/mabahist/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCvZwuOTY8S0RbNM7_5UeWxg'
        }
      ]
    },
    {
      nim: 158,
      name: 'DZAHABY RAZAN',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar:
        'https://instagram.fsub4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/95745207_226313628673005_6474528302387167232_n.jpg?_nc_ht=instagram.fsub4-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=tHVavHgTbjEAX9FDijh&oh=27710a392671e81f50a150e6273fe615&oe=5F4A9429',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/dzahaby.razan'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/dzahabyyy/'
        }
      ]
    },
    {
      nim: 159,
      name: 'ACH AZIZI',
      gender: 'Laki - Laki',
      city: 'Sumenep, Jawa Timur',
      avatar: 'https://u.ph.edim.co/44bf/108668145_4_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/ach.azizi.1829'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/achazizi_/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCTyfi4RMoCPk3xRipUINqXw'
        }
      ]
    },
    {
      nim: 160,
      name: 'SETIAJI ADHI RAKASIWI',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: null,
      socials: null
    },
    {
      nim: 161,
      name: "ACHMAT A'AN DWI KURNIAWAN",
      gender: 'Laki - Laki',
      city: 'Jombang, Jawa Timur',
      avatar: 'https://u.ph.edim.co/6796/108924457_3_140.png',
      socials: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/achaan2020/'
        }
      ]
    },
    {
      nim: 162,
      name: 'RINA LORENSA',
      gender: 'Perempuan',
      city: 'Sumenep, Jawa Timur',
      avatar: 'https://u.ph.edim.co/859d/112573763_1_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/profile.php?id=100016432204985'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/rinalorenza98/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCASde2waxKxN22-PcwvCBhg'
        }
      ]
    },
    {
      nim: 163,
      name: 'AMAD ARIF AMARUDIN',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: null,
      socials: null
    },
    {
      nim: 164,
      name: 'M.CATUR BUDI LAKSANA',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/2b35/91846375_4_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/catur.budilaksana'
        }
      ]
    },
    {
      nim: 165,
      name: 'M. CANDRA HIDAYATULLOH',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: null,
      socials: null
    },
    {
      nim: 166,
      name: 'RIZALDY ESA MAULANA',
      gender: 'Laki - Laki',
      city: 'Gresik, Jawa Timur',
      avatar: 'https://u.ph.edim.co/71f9/111923583_4_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://www.youtube.com/channel/UCRCVMrW2NgXGV4e6-1_kznA'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/rizaldyesa/'
        }
      ]
    },
    {
      nim: 167,
      name: 'AHMAD',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/cbf1/108896765_4_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/profile.php?id=100010735682573'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/ahmadjoe12/'
        }
      ]
    },
    {
      nim: 168,
      name: 'ANDIKA ADITIA HARUN',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/bf98/113156225_3_140.png',
      socials: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/andikaaditiaharun/'
        },
        {
          name: 'Github',
          url: 'https://github.com/andikaaditiaharun'
        }
      ]
    },
    {
      nim: 169,
      name: 'Arief Riandika',
      gender: 'Laki - Laki',
      city: 'Surabaya, Jawa Timur',
      avatar: 'https://u.ph.edim.co/6d2b/108930441_3_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/arfrdika'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/ariefrdika/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCOyMaPMFHg49gIgh6sfUv4A'
        },
        {
          name: 'Github',
          url: 'https://github.com/ariefrdika'
        }
      ]
    },
    {
      nim: 170,
      name: "FAJRIATUL QUR'ANI",
      gender: 'Perempuan',
      city: 'Sumenep, Jawa Timur',
      avatar: 'https://u.ph.edim.co/b9ec/112685881_9_140.png',
      socials: null
    },
    {
      nim: 171,
      name: "MAS'ADY FAWAIZUL IHSAN",
      gender: 'Laki - Laki',
      city: 'Sidoarjo, Jawa Timur',
      avatar: 'https://u.ph.edim.co/6149/108668029_4_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/fawaizulfais98'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/fawaizulfais/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCNBIJGvRKebVHxRt_jGfyJw'
        }
      ]
    },
    {
      nim: 172,
      name: 'ARAY FIRMANSYAH',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/cbc4/109565849_3_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/aray.firmansyah.92'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/firmansyah.aray/'
        }
      ]
    },
    {
      nim: 173,
      name: 'IKBAR MAULANA DWI SAPUTRA',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/f5c0/97322585_6_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/bocah.liar.12'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/ikbar_awenk96/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCWjNItLR8mKdBuDVWwudf8w'
        }
      ]
    },
    {
      nim: 174,
      name: 'DHIMAS WARDHANA PUTRA',
      gender: 'Laki - Laki',
      city: 'Jombang, Jawa Timur',
      avatar: 'https://u.ph.edim.co/94ef/112887883_1_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/dimas026'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/putra_dhi/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCvYUnFDWqQjBvggRh3-O36w'
        }
      ]
    },
    {
      nim: 175,
      name: 'M DZUL ROMAINI AL',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/f271/92137553_4_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/profile.php?id=100009247843473'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/eeejuljul/'
        },
        {
          name: 'Github',
          url: 'https://github.com/dzulromaini175'
        }
      ]
    },
    {
      nim: 176,
      name: 'ANAS MAHMUDI',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/2407/113383791_1_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://github.com/anasmahmudi'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/anasmahmudi_/'
        }
      ]
    },
    {
      nim: 177,
      name: 'MAULIDDIN IRWANSYAH',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/66b4/108932571_5_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/LIDIEN97'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/mauliddin_irwansyah/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCBP1X5naomEHUhWAEMDRm3Q'
        }
      ]
    },
    {
      nim: 178,
      name: 'AHMAD ZIDNI ALFIYAN BARIK',
      gender: 'Laki - Laki',
      city: 'Gresik, Jawa Timur',
      avatar: 'https://u.ph.edim.co/9561/111920477_1_140.jpg',
      socials: null
    },
    {
      nim: 179,
      name: 'NURRACHMAD WIDYANTO',
      gender: 'Laki - Laki',
      city: 'Mojokerto',
      avatar: 'https://u.ph.edim.co/a7b7/24931618_3_140.png',
      socials: [
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/drachmad_/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCbX2WNUlSEt7NzutsjOsF4w'
        },
        {
          name: 'Github',
          url: 'https://github.com/NurrachmadWidyanto'
        }
      ]
    },
    {
      nim: 180,
      name: 'ALIEFIAN PUTRA PRAYOGA',
      gender: 'Laki - Laki',
      city: 'Surabaya, Jawa Timur',
      avatar: 'https://u.ph.edim.co/6509/109947545_3_140.png',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/aliefian.putra.7'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/aliefianp/'
        }
      ]
    },
    {
      nim: 181,
      name: 'ACH. WARITS UBAIDILLAH',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar:
        'https://instagram.fsub4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/105972777_567304110629027_3525244076535530790_n.jpg?_nc_ht=instagram.fsub4-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=2tVbqJ3c_OMAX_pNKTU&oh=67369260dd0e378cd16e5280fdbb7de1&oe=5F4B6035',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/u.warits'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/_wrtsu/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCE24gt2_UfXyIefIFoZDCwQ'
        }
      ]
    },
    {
      nim: 182,
      name: 'Nadila Hidayanti',
      gender: 'Perempuan',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/d459/112480773_6_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/profile.php?id=100018651107279'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/nadilahidayanti/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCS2CJCr6eGU_oK3egRAgMig'
        },
        {
          name: 'Github',
          url: 'https://github.com/nadilahidayanti'
        }
      ]
    },
    {
      nim: 183,
      name: 'ANDREAN BAHTIAR SIREGAR',
      gender: 'Laki - Laki',
      city: 'Bangkalan, Jawa Timur',
      avatar: 'https://u.ph.edim.co/47e0/108667727_4_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/andrean.siregar'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/andrean.siregar/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/user/prikitiw75'
        }
      ]
    },
    {
      nim: 184,
      name: 'ALI',
      gender: 'Laki - Laki',
      city: 'Sampang, Jawa Timur',
      avatar: 'https://u.ph.edim.co/f65a/109994085_4_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/AliBalidram'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/ali.balidram/'
        }
      ]
    },
    {
      nim: 185,
      name: 'SHULTHON MUBASYIR',
      gender: 'Laki - Laki',
      city: 'Nganjuk, Jawa Timur',
      avatar:
        'https://scontent.fsub3-2.fna.fbcdn.net/v/t1.0-1/p200x200/51342242_608436966272999_6925918833936957440_o.jpg?_nc_cat=104&_nc_sid=7206a8&_nc_eui2=AeG8JIiqlim8wagfAmTLBgVI2tChYbXCZO7a0KFhtcJk7uPOgbF_C6D-gm85K3-NsePkEYoT7pxMU50ldatsKiKe&_nc_ohc=BRnMdWPiRHIAX8BEQdz&_nc_ht=scontent.fsub3-2.fna&_nc_tp=6&oh=c27224aeca15a0c59a1252bca19945b4&oe=5F46D393',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/sulton.m.7'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/yhowes_lah/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCcOHg72xK-7rpIUk9a_2VAA'
        }
      ]
    },
    {
      nim: 186,
      name: 'MAULANA SUBHAN WAHYUDI',
      gender: 'Laki - Laki',
      city: 'Tuban, Jawa Timur',
      avatar: 'https://u.ph.edim.co/3702/112069845_1_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/wahyu.sgi'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/maulanasw/'
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCDBkw-Suf8SXcqvrqZZtb_A'
        }
      ]
    },
    {
      nim: 187,
      name: 'MUHAMMAD YUSQI ALFAN THORIQ',
      gender: 'Laki - Laki',
      city: 'Gresik, Jawa Timur',
      avatar: 'https://u.ph.edim.co/b85f/108909389_5_140.jpg',
      socials: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/yusqi.alfan',
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/muhammadyusqi/',
        },
        {
          name: 'Youtube',      
          url: 'https://www.youtube.com/channel/UCbm7HZ1jh-iUemkA--Re2Yg'
        }
      ]
    }
  ]
  res.status(200).json(data)
}
