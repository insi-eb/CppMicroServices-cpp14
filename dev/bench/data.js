window.BENCHMARK_DATA = {
  "lastUpdate": 1691154172515,
  "repoUrl": "https://github.com/insi-eb/CppMicroServices-cpp14",
  "entries": {
    "C++ Benchmark": [
      {
        "commit": {
          "author": {
            "email": "79453136+insi-eb@users.noreply.github.com",
            "name": "Ingmar Sittl",
            "username": "insi-eb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4e904c31a018e639f27e503929b5540e3401546",
          "message": "Fix undefined behavior in LDAPExpr::Trim (#835)\n\nif there is no space in the string on the second str.erase, calling\r\nstr.find_last_not_of() returns std::string::npos. Trying\r\nto add 1 to npos leads to undefined behavior reported by UBSAN.\r\n\r\nSigned-off-by: Ingmar Sittl <ingmar.sittl@elektrobit.com>",
          "timestamp": "2023-04-03T08:59:02-04:00",
          "tree_id": "0eb9150f3db1b12396bb731da83f1b462940c995",
          "url": "https://github.com/insi-eb/CppMicroServices-cpp14/commit/b4e904c31a018e639f27e503929b5540e3401546"
        },
        "date": 1680528778495,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1/manual_time",
            "value": 24342.90363406297,
            "unit": "ns/iter",
            "extra": "iterations: 33186\ncpu: 24954.04688724161 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1/manual_time",
            "value": 97958.33423472288,
            "unit": "ns/iter",
            "extra": "iterations: 9245\ncpu: 99716.06273661439 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1/manual_time",
            "value": 384459.8787266331,
            "unit": "ns/iter",
            "extra": "iterations: 1979\ncpu: 394770.0859019707 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1/manual_time",
            "value": 1579928.7769784473,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1601843.5251798562 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1/manual_time",
            "value": 6043726.000000056,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1/manual_time",
            "value": 24169990.90909136,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 24621212.12121212 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/4/manual_time",
            "value": 60493.970000000096,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/4/manual_time",
            "value": 249045.21819870098,
            "unit": "ns/iter",
            "extra": "iterations: 3231\ncpu: 251470.13308573197 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/4/manual_time",
            "value": 1008612.0575221197,
            "unit": "ns/iter",
            "extra": "iterations: 904\ncpu: 1019773.2300884955 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/4/manual_time",
            "value": 4016512.435233134,
            "unit": "ns/iter",
            "extra": "iterations: 193\ncpu: 4047927.4611398964 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/4/manual_time",
            "value": 16011666.66666659,
            "unit": "ns/iter",
            "extra": "iterations: 54\ncpu: 16203703.703703703 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/4/manual_time",
            "value": 61084099.99999992,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 60937500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/16/manual_time",
            "value": 195162.43042671596,
            "unit": "ns/iter",
            "extra": "iterations: 4312\ncpu: 199298.4693877551 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/16/manual_time",
            "value": 798679.1332263241,
            "unit": "ns/iter",
            "extra": "iterations: 1246\ncpu: 815108.3467094703 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/16/manual_time",
            "value": 3089142.857142853,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3137065.637065637 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/16/manual_time",
            "value": 12718212.162162147,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 12880067.567567568 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/16/manual_time",
            "value": 49285206.666666515,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 50000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/16/manual_time",
            "value": 194137325,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 199218750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/64/manual_time",
            "value": 616189.8000000002,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/64/manual_time",
            "value": 2573218.404907974,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2588190.1840490797 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/64/manual_time",
            "value": 10616489.898989895,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10732323.232323233 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/64/manual_time",
            "value": 40867294.73684209,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 41118421.05263158 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/64/manual_time",
            "value": 169699900.0000002,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 171875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/64/manual_time",
            "value": 624930100.0000008,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 640625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/256/manual_time",
            "value": 2171807.9908675817,
            "unit": "ns/iter",
            "extra": "iterations: 438\ncpu: 2211757.99086758 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/256/manual_time",
            "value": 9057842.75362319,
            "unit": "ns/iter",
            "extra": "iterations: 138\ncpu: 9171195.652173912 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/256/manual_time",
            "value": 34475039.99999999,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 35000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/256/manual_time",
            "value": 143368324.99999994,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 146484375 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/256/manual_time",
            "value": 509503399.9999998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 515625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/256/manual_time",
            "value": 2501496899.9999986,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2546875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1000/manual_time",
            "value": 6328861.999999999,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6562500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1000/manual_time",
            "value": 28206577.777777772,
            "unit": "ns/iter",
            "extra": "iterations: 36\ncpu: 29079861.111111112 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1000/manual_time",
            "value": 116850849.99999996,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 119791666.66666667 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1000/manual_time",
            "value": 423758050.0000001,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 437500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1000/manual_time",
            "value": 1976859500.0000007,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2031250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1000/manual_time",
            "value": 10042118800.000023,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10265625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1/manual_time",
            "value": 25856.32367504728,
            "unit": "ns/iter",
            "extra": "iterations: 31303\ncpu: 26455.132095965244 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1/manual_time",
            "value": 157987.95878198545,
            "unit": "ns/iter",
            "extra": "iterations: 8637\ncpu: 159198.79587819843 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1/manual_time",
            "value": 570422.3628691973,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 571378.3403656821 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1/manual_time",
            "value": 2665358.150851561,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2699209.2457420924 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1/manual_time",
            "value": 12985142.635658942,
            "unit": "ns/iter",
            "extra": "iterations: 129\ncpu: 13081395.34883721 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1/manual_time",
            "value": 42891966.66666645,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 43619791.666666664 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/4/manual_time",
            "value": 63238.65999999976,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 64062.5 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/4/manual_time",
            "value": 323190.8996539797,
            "unit": "ns/iter",
            "extra": "iterations: 2890\ncpu: 324394.4636678201 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/4/manual_time",
            "value": 1458605.6166056194,
            "unit": "ns/iter",
            "extra": "iterations: 819\ncpu: 1469017.094017094 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/4/manual_time",
            "value": 5411204.109589031,
            "unit": "ns/iter",
            "extra": "iterations: 146\ncpu: 5458047.94520548 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/4/manual_time",
            "value": 24744219.148936037,
            "unit": "ns/iter",
            "extra": "iterations: 47\ncpu: 24933510.63829787 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/4/manual_time",
            "value": 84494140.00000033,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 84375000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/16/manual_time",
            "value": 201314.63471928524,
            "unit": "ns/iter",
            "extra": "iterations: 4257\ncpu: 205543.810194973 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/16/manual_time",
            "value": 920728.4482758625,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 930642.6332288401 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/16/manual_time",
            "value": 3619257.0833333293,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3645833.3333333335 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/16/manual_time",
            "value": 15534245.833333347,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 15625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/16/manual_time",
            "value": 52016769.99999995,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 51562500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/16/manual_time",
            "value": 220812599.99999994,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 222656250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/64/manual_time",
            "value": 633713.6999999993,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 640625 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/64/manual_time",
            "value": 2642676.331360949,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2681213.0177514795 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/64/manual_time",
            "value": 11281840.816326538,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 11479591.836734693 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/64/manual_time",
            "value": 43430478.94736847,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 43585526.315789476 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/64/manual_time",
            "value": 174930360.00000015,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 175000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/64/manual_time",
            "value": 624460999.9999999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 640625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/256/manual_time",
            "value": 2248445.5421686745,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2296686.746987952 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/256/manual_time",
            "value": 8416771,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 8593750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/256/manual_time",
            "value": 35338095.99999999,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 35625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/256/manual_time",
            "value": 146826837.5,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 148437500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/256/manual_time",
            "value": 519890800.0000001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 531250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/256/manual_time",
            "value": 2560307400.0000005,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2593750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1000/manual_time",
            "value": 6484109,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6562500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1000/manual_time",
            "value": 26129420.51282052,
            "unit": "ns/iter",
            "extra": "iterations: 39\ncpu: 26842948.717948716 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1000/manual_time",
            "value": 114891383.3333333,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 118489583.33333333 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1000/manual_time",
            "value": 416832950.0000001,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 429687500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1000/manual_time",
            "value": 2015456700.0000005,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2046875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1000/manual_time",
            "value": 10291972199.999983,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10515625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1",
            "value": 1479.1555673412981,
            "unit": "ns/iter",
            "extra": "iterations: 497778\ncpu: 1475.3062610239906 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1",
            "value": 2281.2781458942586,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1",
            "value": 5075.763392856711,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5022.321428571428 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1",
            "value": 15813.654017858678,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 15694.754464285714 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1",
            "value": 55027.51999999874,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54687.5 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1",
            "value": 207037.347649402,
            "unit": "ns/iter",
            "extra": "iterations: 3446\ncpu: 204040.91700522345 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/4",
            "value": 5849.6732142856445,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/4",
            "value": 9140.66187204447,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8998.28572193874 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/4",
            "value": 20303.145493588298,
            "unit": "ns/iter",
            "extra": "iterations: 34462\ncpu: 20402.90755034531 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/4",
            "value": 62878.446428576186,
            "unit": "ns/iter",
            "extra": "iterations: 11200\ncpu: 64174.107142857145 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/4",
            "value": 221630.31250002517,
            "unit": "ns/iter",
            "extra": "iterations: 3200\ncpu: 219726.5625 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/4",
            "value": 833395.3125000244,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 837053.5714285715 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/16",
            "value": 23679.07389426569,
            "unit": "ns/iter",
            "extra": "iterations: 29867\ncpu: 23541.868952355442 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/16",
            "value": 36835.21722825594,
            "unit": "ns/iter",
            "extra": "iterations: 18667\ncpu: 36829.699469652325 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/16",
            "value": 81982.83482143053,
            "unit": "ns/iter",
            "extra": "iterations: 8960\ncpu: 81961.49553571429 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/16",
            "value": 252632.17857148644,
            "unit": "ns/iter",
            "extra": "iterations: 2800\ncpu: 251116.07142857142 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/16",
            "value": 882858.2329319754,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 878514.0562248996 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/16",
            "value": 3297925.8215958215,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 3301056.3380281692 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/64",
            "value": 94102.81237446432,
            "unit": "ns/iter",
            "extra": "iterations: 7467\ncpu: 94164.32302129369 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/64",
            "value": 147156.96428570116,
            "unit": "ns/iter",
            "extra": "iterations: 4480\ncpu: 146484.375 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/64",
            "value": 330455.7430849168,
            "unit": "ns/iter",
            "extra": "iterations: 2133\ncpu: 329641.35021097044 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/64",
            "value": 1016611.4062499788,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1025390.625 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/64",
            "value": 3537913.725490487,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 3523284.31372549 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/64",
            "value": 13215818.00000331,
            "unit": "ns/iter",
            "extra": "iterations: 50\ncpu: 13125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/256",
            "value": 403165.58328504843,
            "unit": "ns/iter",
            "extra": "iterations: 1723\ncpu: 399013.3488102147 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/256",
            "value": 648700.1785714596,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 655691.9642857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/256",
            "value": 1521818.0803568007,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 1534598.2142857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/256",
            "value": 4788096.551723795,
            "unit": "ns/iter",
            "extra": "iterations: 145\ncpu: 4741379.310344827 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/256",
            "value": 17057763.414630067,
            "unit": "ns/iter",
            "extra": "iterations: 41\ncpu: 17149390.243902437 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/256",
            "value": 64742018.1818151,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 63920454.54545455 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1000",
            "value": 1617309.37499982,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 1639229.9107142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1000",
            "value": 2653343.9393936284,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 2663352.272727273 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1000",
            "value": 6259923.214285225,
            "unit": "ns/iter",
            "extra": "iterations: 112\ncpu: 6277901.785714285 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1000",
            "value": 20116713.51351037,
            "unit": "ns/iter",
            "extra": "iterations: 37\ncpu: 20270270.27027027 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1000",
            "value": 71854822.22222263,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 74652777.77777778 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1000",
            "value": 272000866.66668236,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 270833333.3333333 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1/manual_time",
            "value": 2498.194956162343,
            "unit": "ns/iter",
            "extra": "iterations: 280104\ncpu: 8423.210664610287 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1/manual_time",
            "value": 10233.558522266247,
            "unit": "ns/iter",
            "extra": "iterations: 68239\ncpu: 40986.45935608669 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1/manual_time",
            "value": 41260.930589189426,
            "unit": "ns/iter",
            "extra": "iterations: 16957\ncpu: 191661.26083623283 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1/manual_time",
            "value": 177270.5150977604,
            "unit": "ns/iter",
            "extra": "iterations: 3941\ncpu: 923782.0350164933 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1/manual_time",
            "value": 887629.8982185479,
            "unit": "ns/iter",
            "extra": "iterations: 786\ncpu: 4373409.669211196 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1/manual_time",
            "value": 6265819.469026272,
            "unit": "ns/iter",
            "extra": "iterations: 113\ncpu: 22123893.805309735 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/4/manual_time",
            "value": 3092.056561158797,
            "unit": "ns/iter",
            "extra": "iterations: 226728\ncpu: 10061.615680462934 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/4/manual_time",
            "value": 11912.79323097819,
            "unit": "ns/iter",
            "extra": "iterations: 59211\ncpu: 63596.71344851463 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/4/manual_time",
            "value": 48982.06578664081,
            "unit": "ns/iter",
            "extra": "iterations: 14319\ncpu: 362280.8855366995 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/4/manual_time",
            "value": 223116.91959947493,
            "unit": "ns/iter",
            "extra": "iterations: 3097\ncpu: 2023127.2198902164 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/4/manual_time",
            "value": 1317633.962263945,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 10613207.547169812 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/4/manual_time",
            "value": 11731096.610169513,
            "unit": "ns/iter",
            "extra": "iterations: 59\ncpu: 56673728.81355932 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/16/manual_time",
            "value": 5477.855975873743,
            "unit": "ns/iter",
            "extra": "iterations: 127312\ncpu: 16814.008106070127 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/16/manual_time",
            "value": 18505.650630501288,
            "unit": "ns/iter",
            "extra": "iterations: 37748\ncpu: 145289.15439228568 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/16/manual_time",
            "value": 79721.57685762121,
            "unit": "ns/iter",
            "extra": "iterations: 8815\ncpu: 1045802.6091888826 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/16/manual_time",
            "value": 409369.5398951475,
            "unit": "ns/iter",
            "extra": "iterations: 1717\ncpu: 6424723.35468841 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/16/manual_time",
            "value": 3175914.0909090773,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 35937500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/16/manual_time",
            "value": 33501090.476190597,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 194940476.19047618 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/64/manual_time",
            "value": 15074.861836869617,
            "unit": "ns/iter",
            "extra": "iterations: 46503\ncpu: 41999.97849601101 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/64/manual_time",
            "value": 46105.12686028258,
            "unit": "ns/iter",
            "extra": "iterations: 15253\ncpu: 478389.49714810203 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/64/manual_time",
            "value": 200218.0933295146,
            "unit": "ns/iter",
            "extra": "iterations: 3493\ncpu: 3748568.565702834 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/64/manual_time",
            "value": 1167413.9573070821,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 23501642.036124796 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/64/manual_time",
            "value": 10410618.461538428,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 136538461.53846154 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/64/manual_time",
            "value": 117059683.33333331,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 739583333.3333334 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/256/manual_time",
            "value": 87597.31276436853,
            "unit": "ns/iter",
            "extra": "iterations: 8038\ncpu: 221603.6327444638 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/256/manual_time",
            "value": 281841.37515078986,
            "unit": "ns/iter",
            "extra": "iterations: 2487\ncpu: 2117259.750703659 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/256/manual_time",
            "value": 1261708.348134989,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 16124555.95026643 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/256/manual_time",
            "value": 6990346.8750000065,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 99934895.83333333 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/256/manual_time",
            "value": 48254185.714285694,
            "unit": "ns/iter",
            "extra": "iterations: 14\ncpu: 556919642.8571428 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/256/manual_time",
            "value": 502264500,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3078125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1000/manual_time",
            "value": 401913.25301204773,
            "unit": "ns/iter",
            "extra": "iterations: 1743\ncpu: 1012980.4934021801 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1000/manual_time",
            "value": 1364371.6763005804,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 8941473.988439307 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1000/manual_time",
            "value": 6785295.049504942,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 66986386.138613865 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1000/manual_time",
            "value": 34059989.999999955,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 404687500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1000/manual_time",
            "value": 222201399.9999999,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2281250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1000/manual_time",
            "value": 2213332799.9999976,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 12796875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1/manual_time",
            "value": 6541.288106722294,
            "unit": "ns/iter",
            "extra": "iterations: 108019\ncpu: 7087.873429674409 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1/manual_time",
            "value": 25960.787085255164,
            "unit": "ns/iter",
            "extra": "iterations: 26884\ncpu: 26154.03213807469 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1/manual_time",
            "value": 104380.87882423552,
            "unit": "ns/iter",
            "extra": "iterations: 6668\ncpu: 105447.66046790642 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1/manual_time",
            "value": 441482.4413710168,
            "unit": "ns/iter",
            "extra": "iterations: 1663\ncpu: 441596.51232711965 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1/manual_time",
            "value": 1697459.4059405923,
            "unit": "ns/iter",
            "extra": "iterations: 404\ncpu: 1701732.6732673268 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1/manual_time",
            "value": 7264372.7272727275,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 7260101.01010101 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/4/manual_time",
            "value": 6629.253536419026,
            "unit": "ns/iter",
            "extra": "iterations: 104131\ncpu: 7052.414746809308 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/4/manual_time",
            "value": 29759.512879366794,
            "unit": "ns/iter",
            "extra": "iterations: 23526\ncpu: 30551.304939216185 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/4/manual_time",
            "value": 106998.94641782048,
            "unit": "ns/iter",
            "extra": "iterations: 6644\ncpu: 105828.567128236 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/4/manual_time",
            "value": 428249.310776942,
            "unit": "ns/iter",
            "extra": "iterations: 1596\ncpu: 420974.31077694235 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/4/manual_time",
            "value": 1747600.0000000007,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 1736111.111111111 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/4/manual_time",
            "value": 7281191.8367346935,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 7334183.673469388 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/16/manual_time",
            "value": 7418.0423179585705,
            "unit": "ns/iter",
            "extra": "iterations: 94428\ncpu: 7942.559410344389 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/16/manual_time",
            "value": 29508.456677551643,
            "unit": "ns/iter",
            "extra": "iterations: 23579\ncpu: 29819.9669197167 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/16/manual_time",
            "value": 119789.88840040364,
            "unit": "ns/iter",
            "extra": "iterations: 5914\ncpu: 118891.61312140683 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/16/manual_time",
            "value": 487060.0272851304,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 490279.67257844476 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/16/manual_time",
            "value": 2110779.4642857155,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2092633.9285714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/16/manual_time",
            "value": 8326727.272727275,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 8345170.454545454 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/64/manual_time",
            "value": 10192.308698117105,
            "unit": "ns/iter",
            "extra": "iterations: 68831\ncpu: 10669.24786796647 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/64/manual_time",
            "value": 40736.41323273501,
            "unit": "ns/iter",
            "extra": "iterations: 17230\ncpu: 40808.18340104469 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/64/manual_time",
            "value": 162826.26858626134,
            "unit": "ns/iter",
            "extra": "iterations: 4237\ncpu: 162261.03375029503 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/64/manual_time",
            "value": 661511.0795454531,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 665838.0681818182 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/64/manual_time",
            "value": 2782037.9591836715,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 2742346.93877551 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/64/manual_time",
            "value": 11974132.14285714,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 11997767.857142856 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/256/manual_time",
            "value": 43778.76819289249,
            "unit": "ns/iter",
            "extra": "iterations: 16009\ncpu: 44896.62065088388 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/256/manual_time",
            "value": 176619.79350289667,
            "unit": "ns/iter",
            "extra": "iterations: 3971\ncpu: 177064.97104004028 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/256/manual_time",
            "value": 712146.9346733667,
            "unit": "ns/iter",
            "extra": "iterations: 995\ncpu: 706658.2914572865 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/256/manual_time",
            "value": 2951065.9663865566,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 2954306.722689076 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/256/manual_time",
            "value": 12965446.296296295,
            "unit": "ns/iter",
            "extra": "iterations: 54\ncpu: 12731481.481481481 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/256/manual_time",
            "value": 51610849.999999985,
            "unit": "ns/iter",
            "extra": "iterations: 14\ncpu: 51339285.71428572 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1000/manual_time",
            "value": 193288.08864265846,
            "unit": "ns/iter",
            "extra": "iterations: 3610\ncpu: 194771.4681440443 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1000/manual_time",
            "value": 778320.4620462038,
            "unit": "ns/iter",
            "extra": "iterations: 909\ncpu: 790704.0704070407 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1000/manual_time",
            "value": 3183571.4285714277,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 3138950.8928571427 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1000/manual_time",
            "value": 13171973.584905656,
            "unit": "ns/iter",
            "extra": "iterations: 53\ncpu: 12971698.113207547 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1000/manual_time",
            "value": 54478599.99999999,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 55288461.538461536 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1000/manual_time",
            "value": 223565066.66666666,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 223958333.33333334 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithSvcRef/manual_time",
            "value": 5138.328231934022,
            "unit": "ns/iter",
            "extra": "iterations: 134277\ncpu: 9192.750806169337 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithBundleContext/manual_time",
            "value": 6291.1343617219145,
            "unit": "ns/iter",
            "extra": "iterations: 111825\ncpu: 10619.271182651464 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithInterfaceName/manual_time",
            "value": 6285.551347939988,
            "unit": "ns/iter",
            "extra": "iterations: 110910\ncpu: 10565.999459020828 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000",
            "value": 6610.613392857496,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1024",
            "value": 6559.29352678949,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6452.287946428572 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/2048",
            "value": 6710.718749997925,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/4096",
            "value": 6666.403571427639,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/8192",
            "value": 6805.908482146858,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6801.060267857143 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/16384",
            "value": 6912.821428573222,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6835.9375 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/32768",
            "value": 6946.766964286358,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6835.9375 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/65536",
            "value": 7247.532366067487,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7324.21875 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/131072",
            "value": 7361.671428571169,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 7393.973214285715 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/262144",
            "value": 7463.3236607114995,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7498.604910714285 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/524288",
            "value": 7506.775669645955,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7498.604910714285 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000000",
            "value": 8042.549107142147,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/1",
            "value": 28865.317041696766,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 28459.75790232611 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/4000",
            "value": 18071602.702695746,
            "unit": "ns/iter",
            "extra": "iterations: 37\ncpu: 18158783.783783782 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/10000",
            "value": 57034859.99997611,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 56250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/1",
            "value": 28071.00357142645,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 28459.821428571428 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/4000",
            "value": 114330614.28572598,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 113839285.71428572 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/10000",
            "value": 284926099.99996907,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 281250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/1",
            "value": 25012.471874987343,
            "unit": "ns/iter",
            "extra": "iterations: 32000\ncpu: 24902.34375 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/4000",
            "value": 3353177.9411768913,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 3370098.0392156863 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/10000",
            "value": 9995132.812498752,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 10009765.625 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/1",
            "value": 440.3308125000649,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 439.453125 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/3",
            "value": 1274.217020439372,
            "unit": "ns/iter",
            "extra": "iterations: 497778\ncpu: 1255.5797966161622 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/7",
            "value": 2914.42289534584,
            "unit": "ns/iter",
            "extra": "iterations: 248889\ncpu: 2887.8335322171733 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/11",
            "value": 4594.965789114838,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4652.615498145427 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/15",
            "value": 6290.102678572598,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/18",
            "value": 7584.162499999333,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 7672.991071428572 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/20",
            "value": 8358.23214285674,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8370.535714285714 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/1",
            "value": 5646.79999999953,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5625 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/3",
            "value": 8032.725446430586,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/7",
            "value": 12499.992857142062,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12555.80357142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/11",
            "value": 17072.197804892083,
            "unit": "ns/iter",
            "extra": "iterations: 40727\ncpu: 16880.69339750043 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/15",
            "value": 21705.459374999235,
            "unit": "ns/iter",
            "extra": "iterations: 32000\ncpu: 21484.375 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/18",
            "value": 25096.02499999021,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 25111.60714285714 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/20",
            "value": 27423.84168785237,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 27273.934656395857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/1",
            "value": 670.3799107140997,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 655.6919642857143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/3",
            "value": 1816.6068898274737,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1799.6667854167727 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/7",
            "value": 4046.723772323751,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 4098.074776785715 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/11",
            "value": 6269.63214285833,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/15",
            "value": 8553.335937503245,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8544.921875 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/18",
            "value": 10241.798437505167,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10253.90625 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/20",
            "value": 11327.207812499297,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11718.75 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/1",
            "value": 429.6059999998647,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 429.6875 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/3",
            "value": 1582.0270089282726,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1569.4754464285713 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/7",
            "value": 3809.621411388761,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3850.439552786513 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/11",
            "value": 6029.7140000011495,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5937.5 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/15",
            "value": 8375.792410712435,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8370.535714285714 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/18",
            "value": 10034.668595233545,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 10044.598015187432 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/20",
            "value": 12688.599999998067,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12834.82142857143 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/BundleInstallCppFramework/manual_time",
            "value": 240887.46166950636,
            "unit": "ns/iter",
            "extra": "iterations: 2935\ncpu: 260860.3066439523 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/LargeBundleInstallCppFramework/manual_time",
            "value": 238733.79802788116,
            "unit": "ns/iter",
            "extra": "iterations: 2941\ncpu: 265640.9384563074 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterFromString",
            "value": 631.8885714287197,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 641.7410714285714 ns\nthreads: 1"
          },
          {
            "name": "ConstructNonTrivialFilterFromString",
            "value": 986.9170312498454,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 976.5625 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Simple",
            "value": 414.39214733802015,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 414.3415825980151 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Complex",
            "value": 458.418283459285,
            "unit": "ns/iter",
            "extra": "iterations: 1544828\ncpu: 455.1477575497078 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Simple",
            "value": 212.65790625008663,
            "unit": "ns/iter",
            "extra": "iterations: 3200000\ncpu: 214.84375 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Complex",
            "value": 344.10100551772354,
            "unit": "ns/iter",
            "extra": "iterations: 2036364\ncpu: 337.6115468550809 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Simple",
            "value": 170.67259848258067,
            "unit": "ns/iter",
            "extra": "iterations: 4072727\ncpu: 172.64231066801187 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Complex",
            "value": 216.77739880463488,
            "unit": "ns/iter",
            "extra": "iterations: 3446154\ncpu: 217.63391885562862 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterIncremental",
            "value": 2209.718125000393,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2197.265625 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterNotOperator",
            "value": 988.80143357041,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 1004.4638372929297 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByInterface",
            "value": 1043.809489370805,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 1046.3164971801352 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByClassName",
            "value": 926.339184670275,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 920.7585175185189 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterface",
            "value": 894.7329934228858,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 899.8321875749162 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassName",
            "value": 679.759374999987,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 669.6428571428571 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassNameAndLDAPFilter",
            "value": 732.5753571430076,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 739.3973214285714 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterfaceAndLDAPFilter",
            "value": 691.2066964288905,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 680.1060267857143 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "113473781+tcormackMW@users.noreply.github.com",
            "name": "tcormackMW",
            "username": "tcormackMW"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f9fd6587f73ea270014e482d6560c3c70c02d4e7",
          "message": "Fix #872 (#875) Remove Statics in MultipleListenersTest.cpp and ServiceHooksTest.cpp\n\nSigned-off-by: tcormack <tcormack@mathworks.com>",
          "timestamp": "2023-07-14T15:19:44-04:00",
          "tree_id": "90b89acdd914f3b4eef8a149c55f58aa13124268",
          "url": "https://github.com/insi-eb/CppMicroServices-cpp14/commit/f9fd6587f73ea270014e482d6560c3c70c02d4e7"
        },
        "date": 1690446702490,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1/manual_time",
            "value": 28777.844046829254,
            "unit": "ns/iter",
            "extra": "iterations: 27162\ncpu: 29337.861718577424 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1/manual_time",
            "value": 117537.79703294885,
            "unit": "ns/iter",
            "extra": "iterations: 7617\ncpu: 118977.28764605487 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1/manual_time",
            "value": 459866.9533169426,
            "unit": "ns/iter",
            "extra": "iterations: 1628\ncpu: 460687.9606879607 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1/manual_time",
            "value": 1837633.913043423,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 1868206.5217391304 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1/manual_time",
            "value": 7414114.17322809,
            "unit": "ns/iter",
            "extra": "iterations: 127\ncpu: 7627952.755905512 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1/manual_time",
            "value": 28455559.259258673,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 28935185.185185187 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/4/manual_time",
            "value": 79845.63862928389,
            "unit": "ns/iter",
            "extra": "iterations: 12198\ncpu: 80699.70486965076 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/4/manual_time",
            "value": 314874.47232178424,
            "unit": "ns/iter",
            "extra": "iterations: 2511\ncpu: 317353.6439665472 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/4/manual_time",
            "value": 1291887.9765395883,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1305901.7595307918 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/4/manual_time",
            "value": 4977228.082191761,
            "unit": "ns/iter",
            "extra": "iterations: 146\ncpu: 5136986.301369863 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/4/manual_time",
            "value": 20576430.952380963,
            "unit": "ns/iter",
            "extra": "iterations: 42\ncpu: 20833333.333333332 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/4/manual_time",
            "value": 80319283.33333372,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 80729166.66666667 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/16/manual_time",
            "value": 258145.5525606465,
            "unit": "ns/iter",
            "extra": "iterations: 3339\ncpu: 262054.5073375262 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/16/manual_time",
            "value": 1019572.0881427042,
            "unit": "ns/iter",
            "extra": "iterations: 953\ncpu: 1032922.3504721931 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/16/manual_time",
            "value": 3942693.229166662,
            "unit": "ns/iter",
            "extra": "iterations: 192\ncpu: 3987630.2083333335 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/16/manual_time",
            "value": 16097433.928571409,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 16462053.57142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/16/manual_time",
            "value": 61958349.999999784,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 62500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/16/manual_time",
            "value": 246868666.66666648,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 250000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/64/manual_time",
            "value": 861336.0594795536,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 871282.5278810409 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/64/manual_time",
            "value": 3311566.5322580608,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3402217.7419354836 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/64/manual_time",
            "value": 13698135.99999998,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 13750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/64/manual_time",
            "value": 51483685.71428574,
            "unit": "ns/iter",
            "extra": "iterations: 14\ncpu: 51339285.71428572 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/64/manual_time",
            "value": 210982725.00000012,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 214843750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/64/manual_time",
            "value": 814902799.9999989,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 828125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/256/manual_time",
            "value": 2776051.051051052,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2815315.3153153155 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/256/manual_time",
            "value": 11376881.632653067,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 11479591.836734693 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/256/manual_time",
            "value": 43215610.52631578,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 43585526.315789476 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/256/manual_time",
            "value": 181097616.66666672,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 184895833.33333334 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/256/manual_time",
            "value": 661507200.0000001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 671875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/256/manual_time",
            "value": 3313782300,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3343750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1000/manual_time",
            "value": 8349943.000000003,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 8593750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1000/manual_time",
            "value": 33928462.96296298,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 34722222.222222224 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1000/manual_time",
            "value": 145808333.33333334,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 149305555.55555555 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1000/manual_time",
            "value": 560810050.0000002,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 570312500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1000/manual_time",
            "value": 2635763399.999997,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2687500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1000/manual_time",
            "value": 13261842299.999977,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 13468750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1/manual_time",
            "value": 27456.475350912657,
            "unit": "ns/iter",
            "extra": "iterations: 26431\ncpu: 27784.60898187734 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1/manual_time",
            "value": 188596.33659275464,
            "unit": "ns/iter",
            "extra": "iterations: 7261\ncpu: 189367.85566726347 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1/manual_time",
            "value": 625626.1000000014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1/manual_time",
            "value": 3198388.283378729,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 3235694.8228882835 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1/manual_time",
            "value": 15630988.235294122,
            "unit": "ns/iter",
            "extra": "iterations: 119\ncpu: 15756302.521008404 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1/manual_time",
            "value": 46701184.999999985,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 46875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/4/manual_time",
            "value": 79431.93399660302,
            "unit": "ns/iter",
            "extra": "iterations: 12363\ncpu: 79622.66440184422 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/4/manual_time",
            "value": 384661.47578089713,
            "unit": "ns/iter",
            "extra": "iterations: 2209\ncpu: 389033.49932095973 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/4/manual_time",
            "value": 1809698.9795918365,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1799380.4664723033 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/4/manual_time",
            "value": 6097990.999999997,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/4/manual_time",
            "value": 28977121.052631546,
            "unit": "ns/iter",
            "extra": "iterations: 38\ncpu: 29194078.94736842 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/4/manual_time",
            "value": 119643141.66666661,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 119791666.66666667 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/16/manual_time",
            "value": 250374.5215310994,
            "unit": "ns/iter",
            "extra": "iterations: 3344\ncpu: 247645.03588516745 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/16/manual_time",
            "value": 1138745.9143968886,
            "unit": "ns/iter",
            "extra": "iterations: 1028\ncpu: 1139956.2256809338 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/16/manual_time",
            "value": 4476825.54347826,
            "unit": "ns/iter",
            "extra": "iterations: 184\ncpu: 4500679.347826087 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/16/manual_time",
            "value": 18949232.72727275,
            "unit": "ns/iter",
            "extra": "iterations: 55\ncpu: 19318181.818181816 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/16/manual_time",
            "value": 68756700.00000001,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 68750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/16/manual_time",
            "value": 269615800.0000001,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 270833333.3333333 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/64/manual_time",
            "value": 860599.0483743054,
            "unit": "ns/iter",
            "extra": "iterations: 1261\ncpu: 879758.1284694687 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/64/manual_time",
            "value": 3210697.254901964,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3247549.0196078434 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/64/manual_time",
            "value": 13981594.7368421,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 14185855.263157895 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/64/manual_time",
            "value": 52670385.714285724,
            "unit": "ns/iter",
            "extra": "iterations: 14\ncpu: 53571428.571428575 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/64/manual_time",
            "value": 216714825.00000006,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 218750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/64/manual_time",
            "value": 816998299.9999989,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 828125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/256/manual_time",
            "value": 2773945.1219512173,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2810594.512195122 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/256/manual_time",
            "value": 11157809.01639343,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 11270491.803278688 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/256/manual_time",
            "value": 42091315.78947369,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 42763157.89473684 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/256/manual_time",
            "value": 179531783.33333325,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 182291666.66666666 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/256/manual_time",
            "value": 666591200.0000004,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 671875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/256/manual_time",
            "value": 3311591299.999999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3343750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1000/manual_time",
            "value": 8330323,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 8437500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1000/manual_time",
            "value": 31487429.032258075,
            "unit": "ns/iter",
            "extra": "iterations: 31\ncpu: 31754032.258064516 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1000/manual_time",
            "value": 142768010,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 145312500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1000/manual_time",
            "value": 541424899.9999999,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 546875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1000/manual_time",
            "value": 2608290400,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2640625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1000/manual_time",
            "value": 13176695599.999998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 13328125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1",
            "value": 2159.098123993828,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 2176.341714667092 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1",
            "value": 3958.2944494740177,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 3989.9482322352997 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1",
            "value": 11570.582142858095,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11439.732142857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1",
            "value": 42671.054058950314,
            "unit": "ns/iter",
            "extra": "iterations: 16593\ncpu: 42374.79660097632 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1",
            "value": 156505.60267853766,
            "unit": "ns/iter",
            "extra": "iterations: 4480\ncpu: 156947.54464285713 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1",
            "value": 590183.7999999771,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578125 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/4",
            "value": 8675.627787375543,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8579.760804639265 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/4",
            "value": 16024.071428566751,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 16043.526785714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/4",
            "value": 46059.01087519252,
            "unit": "ns/iter",
            "extra": "iterations: 15448\ncpu: 46527.05851890212 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/4",
            "value": 171801.3503560119,
            "unit": "ns/iter",
            "extra": "iterations: 4073\ncpu: 172630.73901301253 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/4",
            "value": 620593.3035713786,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 627790.1785714285 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/4",
            "value": 2316546.1538456935,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 2351588.628762542 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/16",
            "value": 34914.672952273504,
            "unit": "ns/iter",
            "extra": "iterations: 20364\ncpu: 35295.12865841681 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/16",
            "value": 64165.111607142724,
            "unit": "ns/iter",
            "extra": "iterations: 8960\ncpu: 62779.017857142855 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/16",
            "value": 184106.9649075865,
            "unit": "ns/iter",
            "extra": "iterations: 3733\ncpu: 184168.22930618806 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/16",
            "value": 678499.7767856587,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 680106.0267857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/16",
            "value": 2480219.9999994305,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 2511160.714285714 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/16",
            "value": 9305725.333333611,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 9166666.666666666 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/64",
            "value": 139597.44877460835,
            "unit": "ns/iter",
            "extra": "iterations: 4978\ncpu: 141246.48453194054 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/64",
            "value": 254879.71428568862,
            "unit": "ns/iter",
            "extra": "iterations: 2800\ncpu: 256696.42857142858 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/64",
            "value": 735662.2321428371,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 725446.4285714285 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/64",
            "value": 2730080.3212847863,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 2698293.172690763 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/64",
            "value": 9997089.062498078,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 10009765.625 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/64",
            "value": 37120215.78947219,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 37006578.94736842 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/256",
            "value": 564606.1607143744,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 558035.7142857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/256",
            "value": 1084306.8749998962,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1074218.75 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/256",
            "value": 3106192.3728813427,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3111758.474576271 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/256",
            "value": 11416512.499998532,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 11474609.375 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/256",
            "value": 42457076.47059509,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 42279411.76470588 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/256",
            "value": 157800050.0000485,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 160156250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1000",
            "value": 2298031.7725749193,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 2299331.1036789296 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1000",
            "value": 4328633.125000181,
            "unit": "ns/iter",
            "extra": "iterations: 160\ncpu: 4296875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1000",
            "value": 12564646.428570215,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 12555803.57142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1000",
            "value": 46011233.33333514,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 45833333.333333336 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1000",
            "value": 167780600.0000146,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 167968750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1000",
            "value": 633865100.0000937,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 625000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1/manual_time",
            "value": 2891.9082797223396,
            "unit": "ns/iter",
            "extra": "iterations: 240950\ncpu: 8754.409628553642 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1/manual_time",
            "value": 11214.074711995714,
            "unit": "ns/iter",
            "extra": "iterations: 61543\ncpu: 45191.97959150513 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1/manual_time",
            "value": 45650.00000001636,
            "unit": "ns/iter",
            "extra": "iterations: 15264\ncpu: 224179.44182389937 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1/manual_time",
            "value": 195265.64971736696,
            "unit": "ns/iter",
            "extra": "iterations: 3540\ncpu: 1094632.768361582 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1/manual_time",
            "value": 1006907.2150070238,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 5275974.025974026 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1/manual_time",
            "value": 7221155.208333288,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 26692708.333333332 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/4/manual_time",
            "value": 3470.3258366729674,
            "unit": "ns/iter",
            "extra": "iterations: 201512\ncpu: 10390.200087339712 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/4/manual_time",
            "value": 12936.838273713714,
            "unit": "ns/iter",
            "extra": "iterations: 53572\ncpu: 73499.21600836258 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/4/manual_time",
            "value": 53664.39353302482,
            "unit": "ns/iter",
            "extra": "iterations: 13051\ncpu: 448959.8498199372 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/4/manual_time",
            "value": 251592.8981348209,
            "unit": "ns/iter",
            "extra": "iterations: 2788\ncpu: 2566804.1606886657 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/4/manual_time",
            "value": 1535370.3703703273,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 13582516.339869281 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/4/manual_time",
            "value": 14130946.938775588,
            "unit": "ns/iter",
            "extra": "iterations: 49\ncpu: 72385204.08163266 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/16/manual_time",
            "value": 5586.952055613608,
            "unit": "ns/iter",
            "extra": "iterations: 125583\ncpu: 15676.883017605885 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/16/manual_time",
            "value": 19611.309589658424,
            "unit": "ns/iter",
            "extra": "iterations: 36164\ncpu: 175848.21922353722 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/16/manual_time",
            "value": 84236.27475247797,
            "unit": "ns/iter",
            "extra": "iterations: 8080\ncpu: 1347849.6287128713 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/16/manual_time",
            "value": 474767.36770691164,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 8384921.9810040705 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/16/manual_time",
            "value": 3719976.0638298253,
            "unit": "ns/iter",
            "extra": "iterations: 188\ncpu: 46625664.89361702 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/16/manual_time",
            "value": 41463600.00000025,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 253676470.5882353 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/64/manual_time",
            "value": 14354.660022241771,
            "unit": "ns/iter",
            "extra": "iterations: 48562\ncpu: 37001.6679708414 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/64/manual_time",
            "value": 45222.9882825201,
            "unit": "ns/iter",
            "extra": "iterations: 15447\ncpu: 586683.4984139315 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/64/manual_time",
            "value": 202827.35685367387,
            "unit": "ns/iter",
            "extra": "iterations: 3458\ncpu: 4889025.448235975 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/64/manual_time",
            "value": 1306968.4014869859,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 31162871.747211896 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/64/manual_time",
            "value": 12303082.456140377,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 177083333.33333334 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/64/manual_time",
            "value": 148812500.00000077,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 978125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/256/manual_time",
            "value": 81991.45409662617,
            "unit": "ns/iter",
            "extra": "iterations: 8507\ncpu: 205712.9422828259 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/256/manual_time",
            "value": 274275.68519968766,
            "unit": "ns/iter",
            "extra": "iterations: 2554\ncpu: 2563380.971025842 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/256/manual_time",
            "value": 1159540.5940594121,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 20317656.76567657 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/256/manual_time",
            "value": 6756567.96116507,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 127578883.49514563 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/256/manual_time",
            "value": 55365607.692307666,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 725961538.4615384 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/256/manual_time",
            "value": 623303000.0000012,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4015625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1000/manual_time",
            "value": 371106.0541688794,
            "unit": "ns/iter",
            "extra": "iterations: 1883\ncpu: 937665.9585767393 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1000/manual_time",
            "value": 1269586.1261261262,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 10501126.126126125 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1000/manual_time",
            "value": 5876234.166666674,
            "unit": "ns/iter",
            "extra": "iterations: 120\ncpu: 82682291.66666667 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1000/manual_time",
            "value": 32945390.47619046,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 514136904.7619048 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1000/manual_time",
            "value": 247353699.99999988,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2927083333.3333335 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1000/manual_time",
            "value": 2638858799.9999986,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 16171875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1/manual_time",
            "value": 6285.947223739782,
            "unit": "ns/iter",
            "extra": "iterations: 111679\ncpu: 6855.5860994457325 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1/manual_time",
            "value": 24364.376065950604,
            "unit": "ns/iter",
            "extra": "iterations: 28144\ncpu: 24427.942012507105 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1/manual_time",
            "value": 102282.92575779693,
            "unit": "ns/iter",
            "extra": "iterations: 6829\ncpu: 102961.63420705813 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1/manual_time",
            "value": 414820.0714711144,
            "unit": "ns/iter",
            "extra": "iterations: 1679\ncpu: 418776.057176891 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1/manual_time",
            "value": 1826638.084112149,
            "unit": "ns/iter",
            "extra": "iterations: 428\ncpu: 1825350.4672897197 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1/manual_time",
            "value": 6328786.725663716,
            "unit": "ns/iter",
            "extra": "iterations: 113\ncpu: 6360619.469026549 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/4/manual_time",
            "value": 6503.634771186745,
            "unit": "ns/iter",
            "extra": "iterations: 109608\ncpu: 7127.67316254288 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/4/manual_time",
            "value": 25144.721716989236,
            "unit": "ns/iter",
            "extra": "iterations: 27490\ncpu: 25577.48272098945 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/4/manual_time",
            "value": 103031.74741743079,
            "unit": "ns/iter",
            "extra": "iterations: 6873\ncpu: 104575.87661865269 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/4/manual_time",
            "value": 404411.69521559356,
            "unit": "ns/iter",
            "extra": "iterations: 1693\ncpu: 406083.8747784997 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/4/manual_time",
            "value": 1671944.4700460813,
            "unit": "ns/iter",
            "extra": "iterations: 434\ncpu: 1692108.2949308755 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/4/manual_time",
            "value": 6390925.225225222,
            "unit": "ns/iter",
            "extra": "iterations: 111\ncpu: 6475225.225225225 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/16/manual_time",
            "value": 7126.043353298816,
            "unit": "ns/iter",
            "extra": "iterations: 98816\ncpu: 7589.863989637306 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/16/manual_time",
            "value": 27433.448641847986,
            "unit": "ns/iter",
            "extra": "iterations: 25439\ncpu: 27639.647784897206 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/16/manual_time",
            "value": 111160.82919801713,
            "unit": "ns/iter",
            "extra": "iterations: 6247\ncpu: 112554.02593244758 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/16/manual_time",
            "value": 459580.38314176264,
            "unit": "ns/iter",
            "extra": "iterations: 1305\ncpu: 454980.8429118774 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/16/manual_time",
            "value": 1896340.9921671005,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 1876631.8537859009 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/16/manual_time",
            "value": 7165735.353535353,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 7260101.01010101 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/64/manual_time",
            "value": 9697.00382343245,
            "unit": "ns/iter",
            "extra": "iterations: 71925\ncpu: 10210.288494960028 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/64/manual_time",
            "value": 38315.574884477486,
            "unit": "ns/iter",
            "extra": "iterations: 18395\ncpu: 38223.70209296004 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/64/manual_time",
            "value": 153825.44936431394,
            "unit": "ns/iter",
            "extra": "iterations: 4562\ncpu: 154126.4796142043 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/64/manual_time",
            "value": 622268.1376875555,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 620586.9373345101 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/64/manual_time",
            "value": 2481112.867647059,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 2470128.6764705884 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/64/manual_time",
            "value": 9847681.690140843,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 9903169.014084507 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/256/manual_time",
            "value": 42060.96714345489,
            "unit": "ns/iter",
            "extra": "iterations: 16709\ncpu: 42080.615237297265 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/256/manual_time",
            "value": 170083.42528184195,
            "unit": "ns/iter",
            "extra": "iterations: 4169\ncpu: 172403.4540657232 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/256/manual_time",
            "value": 684010.8388312906,
            "unit": "ns/iter",
            "extra": "iterations: 1061\ncpu: 677426.9557021678 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/256/manual_time",
            "value": 2891245.0199203193,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 2925796.812749004 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/256/manual_time",
            "value": 11476474.603174603,
            "unit": "ns/iter",
            "extra": "iterations: 63\ncpu: 11656746.031746032 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/256/manual_time",
            "value": 45858606.25,
            "unit": "ns/iter",
            "extra": "iterations: 16\ncpu: 45898437.5 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1000/manual_time",
            "value": 181745.9523809517,
            "unit": "ns/iter",
            "extra": "iterations: 3780\ncpu: 181878.30687830687 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1000/manual_time",
            "value": 731702.872340426,
            "unit": "ns/iter",
            "extra": "iterations: 940\ncpu: 714760.6382978724 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1000/manual_time",
            "value": 2998343.7500000005,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 2994791.6666666665 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1000/manual_time",
            "value": 12098787.931034481,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 12122844.827586208 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1000/manual_time",
            "value": 49381914.28571428,
            "unit": "ns/iter",
            "extra": "iterations: 14\ncpu: 49107142.85714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1000/manual_time",
            "value": 198531875.00000003,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 199218750 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithSvcRef/manual_time",
            "value": 6561.587755292745,
            "unit": "ns/iter",
            "extra": "iterations: 108455\ncpu: 11093.310589645474 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithBundleContext/manual_time",
            "value": 7994.417088481007,
            "unit": "ns/iter",
            "extra": "iterations: 87123\ncpu: 12554.09019432297 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithInterfaceName/manual_time",
            "value": 7982.605291818735,
            "unit": "ns/iter",
            "extra": "iterations: 88136\ncpu: 12587.081328855405 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000",
            "value": 7262.616964285128,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 7254.464285714285 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1024",
            "value": 7151.425223216483,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7149.832589285715 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/2048",
            "value": 7285.431919642958,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7324.21875 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/4096",
            "value": 7386.679464285554,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 7393.973214285715 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/8192",
            "value": 7357.0524553571,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7324.21875 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/16384",
            "value": 7427.493749998705,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 7393.973214285715 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/32768",
            "value": 7448.613839287077,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7498.604910714285 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/65536",
            "value": 7732.780133926959,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7672.991071428572 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/131072",
            "value": 7695.045758929605,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7672.991071428572 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/262144",
            "value": 7845.463169644518,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7847.377232142857 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/524288",
            "value": 7833.929687500581,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7847.377232142857 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000000",
            "value": 8005.503348214354,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/1",
            "value": 34254.42554816029,
            "unit": "ns/iter",
            "extra": "iterations: 23579\ncpu: 33795.96250901226 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/4000",
            "value": 20984668.74999616,
            "unit": "ns/iter",
            "extra": "iterations: 32\ncpu: 20996093.75 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/10000",
            "value": 63279909.09089336,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 63920454.54545455 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/1",
            "value": 33282.04758471477,
            "unit": "ns/iter",
            "extra": "iterations: 23579\ncpu: 33133.296577463 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/4000",
            "value": 131138849.99999452,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 130208333.33333333 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/10000",
            "value": 322719349.999943,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 320312500 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/1",
            "value": 28731.067857141363,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 29017.85714285714 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/4000",
            "value": 3319966.5178571534,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 3348214.285714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/10000",
            "value": 8947715.999999369,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 8958333.333333334 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/1",
            "value": 420.06956250006056,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 419.921875 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/3",
            "value": 1214.8433928570869,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1199.7767857142858 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/7",
            "value": 2744.6755385555803,
            "unit": "ns/iter",
            "extra": "iterations: 263529\ncpu: 2727.4038151398895 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/11",
            "value": 4333.786250001026,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4296.875 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/15",
            "value": 5948.150000000803,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/18",
            "value": 7114.24553571557,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 7114.955357142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/20",
            "value": 7849.697544643724,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7847.377232142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/1",
            "value": 5655.291964284207,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/3",
            "value": 8019.40178571365,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/7",
            "value": 12287.925000001516,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12276.785714285714 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/11",
            "value": 16937.1406249955,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 17089.84375 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/15",
            "value": 21199.83750217197,
            "unit": "ns/iter",
            "extra": "iterations: 34462\ncpu: 21309.703441471767 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/18",
            "value": 24152.178571430988,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 23995.535714285714 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/20",
            "value": 26697.685273023722,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 26681.02303343073 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/1",
            "value": 638.6874999998936,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 627.7901785714286 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/3",
            "value": 1700.5566290916947,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1688.0569053190366 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/7",
            "value": 3754.4486607136005,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3749.3024553571427 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/11",
            "value": 5862.79821428499,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/15",
            "value": 7999.8069196436045,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/18",
            "value": 9734.494488864977,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9835.335556537693 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/20",
            "value": 10735.5437499983,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10742.1875 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/1",
            "value": 404.3400846277529,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 408.0635978543037 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/3",
            "value": 1477.642410714099,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1464.84375 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/7",
            "value": 3534.8901084799736,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3529.5688022055315 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/11",
            "value": 5635.498000001461,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5625 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/15",
            "value": 7740.235491073833,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7847.377232142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/18",
            "value": 9343.95114307741,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/20",
            "value": 10480.058124739628,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 10463.12293248691 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/BundleInstallCppFramework/manual_time",
            "value": 212493.20359281366,
            "unit": "ns/iter",
            "extra": "iterations: 3340\ncpu: 229229.04191616765 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/LargeBundleInstallCppFramework/manual_time",
            "value": 206852.74212368682,
            "unit": "ns/iter",
            "extra": "iterations: 3428\ncpu: 227902.56709451575 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterFromString",
            "value": 601.2740000001031,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 609.375 ns\nthreads: 1"
          },
          {
            "name": "ConstructNonTrivialFilterFromString",
            "value": 964.1509535040944,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 962.6111774057243 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Simple",
            "value": 407.68897733530264,
            "unit": "ns/iter",
            "extra": "iterations: 1723077\ncpu: 398.9955179019858 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Complex",
            "value": 450.5381828914951,
            "unit": "ns/iter",
            "extra": "iterations: 1544828\ncpu: 445.0333629374921 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Simple",
            "value": 205.34224529727757,
            "unit": "ns/iter",
            "extra": "iterations: 3446154\ncpu: 204.03179892715184 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Complex",
            "value": 341.13539705239555,
            "unit": "ns/iter",
            "extra": "iterations: 2133333\ncpu: 344.23833503723984 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Simple",
            "value": 204.05246464750005,
            "unit": "ns/iter",
            "extra": "iterations: 3733333\ncpu: 209.26341154137603 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Complex",
            "value": 246.1072857143368,
            "unit": "ns/iter",
            "extra": "iterations: 2800000\ncpu: 245.53571428571428 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterIncremental",
            "value": 2240.8993749998276,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2246.09375 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterNotOperator",
            "value": 986.5010937499363,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 976.5625 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByInterface",
            "value": 1418.8306835577803,
            "unit": "ns/iter",
            "extra": "iterations: 497778\ncpu: 1412.5272711931825 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByClassName",
            "value": 1239.6041071428142,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1227.6785714285713 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterface",
            "value": 1250.3369642859395,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1255.580357142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassName",
            "value": 940.3747587610133,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 941.6848474621216 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassNameAndLDAPFilter",
            "value": 753.9790178570729,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterfaceAndLDAPFilter",
            "value": 692.7447321426631,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 697.5446428571429 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "113473781+tcormackMW@users.noreply.github.com",
            "name": "tcormackMW",
            "username": "tcormackMW"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f9fd6587f73ea270014e482d6560c3c70c02d4e7",
          "message": "Fix #872 (#875) Remove Statics in MultipleListenersTest.cpp and ServiceHooksTest.cpp\n\nSigned-off-by: tcormack <tcormack@mathworks.com>",
          "timestamp": "2023-07-14T15:19:44-04:00",
          "tree_id": "90b89acdd914f3b4eef8a149c55f58aa13124268",
          "url": "https://github.com/insi-eb/CppMicroServices-cpp14/commit/f9fd6587f73ea270014e482d6560c3c70c02d4e7"
        },
        "date": 1690446817271,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1/manual_time",
            "value": 27797.299729972787,
            "unit": "ns/iter",
            "extra": "iterations: 27775\ncpu: 28127.812781278128 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1/manual_time",
            "value": 111460.78254132059,
            "unit": "ns/iter",
            "extra": "iterations: 7744\ncpu: 112990.70247933884 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1/manual_time",
            "value": 439338.4705882319,
            "unit": "ns/iter",
            "extra": "iterations: 1700\ncpu: 450367.64705882355 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1/manual_time",
            "value": 1776302.6143790763,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 1804193.8997821352 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1/manual_time",
            "value": 7204506.10687018,
            "unit": "ns/iter",
            "extra": "iterations: 131\ncpu: 7275763.358778626 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1/manual_time",
            "value": 27587414.285714366,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 27901785.714285713 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/4/manual_time",
            "value": 76864.25663572749,
            "unit": "ns/iter",
            "extra": "iterations: 12282\ncpu: 77603.40335450253 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/4/manual_time",
            "value": 305074.79923518247,
            "unit": "ns/iter",
            "extra": "iterations: 2615\ncpu: 310707.4569789675 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/4/manual_time",
            "value": 1234871.0027100341,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 1249153.1165311653 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/4/manual_time",
            "value": 4837363.3986928,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 4799836.601307189 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/4/manual_time",
            "value": 19627976.74418614,
            "unit": "ns/iter",
            "extra": "iterations: 43\ncpu: 19985465.11627907 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/4/manual_time",
            "value": 77951661.53846212,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 78125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/16/manual_time",
            "value": 243266.48093841734,
            "unit": "ns/iter",
            "extra": "iterations: 3410\ncpu: 242851.90615835777 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/16/manual_time",
            "value": 985517.4924165847,
            "unit": "ns/iter",
            "extra": "iterations: 989\ncpu: 995323.5591506573 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/16/manual_time",
            "value": 3867495.477386953,
            "unit": "ns/iter",
            "extra": "iterations: 199\ncpu: 3925879.3969849246 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/16/manual_time",
            "value": 15655103.508771913,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 15899122.807017544 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/16/manual_time",
            "value": 59996410.00000008,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 60937500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/16/manual_time",
            "value": 242144200.00000033,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 244791666.66666666 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/64/manual_time",
            "value": 841594.0276766194,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 842134.0131099782 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/64/manual_time",
            "value": 3172268.5039370093,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3260334.6456692913 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/64/manual_time",
            "value": 13247039.743589746,
            "unit": "ns/iter",
            "extra": "iterations: 78\ncpu: 13221153.846153846 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/64/manual_time",
            "value": 50647499.999999985,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 52083333.333333336 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/64/manual_time",
            "value": 205507925.00000012,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 207031250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/64/manual_time",
            "value": 795814400.0000001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 812500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/256/manual_time",
            "value": 2704507.988165679,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2773668.6390532544 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/256/manual_time",
            "value": 11217138.888888882,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 11429398.148148147 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/256/manual_time",
            "value": 41694489.473684214,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 42763157.89473684 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/256/manual_time",
            "value": 175408700.00000003,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 177083333.33333334 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/256/manual_time",
            "value": 643305700.0000004,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 656250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/256/manual_time",
            "value": 3204164900.000003,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3234375000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1000/manual_time",
            "value": 8101391,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 8281250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1000/manual_time",
            "value": 33176078.571428563,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 34040178.571428575 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1000/manual_time",
            "value": 141530222.22222224,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 144097222.2222222 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1000/manual_time",
            "value": 547408850.0000001,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 554687500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1000/manual_time",
            "value": 2529007500.0000024,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2562500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1000/manual_time",
            "value": 12733287600,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 12937500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1/manual_time",
            "value": 28052.064368145075,
            "unit": "ns/iter",
            "extra": "iterations: 27902\ncpu: 28559.780660884524 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1/manual_time",
            "value": 184610.63321385867,
            "unit": "ns/iter",
            "extra": "iterations: 7533\ncpu: 184604.40727465818 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1/manual_time",
            "value": 606450.1999999987,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1/manual_time",
            "value": 3129320.8556149937,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 3133355.614973262 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1/manual_time",
            "value": 14736496.694214778,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 14850206.611570248 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1/manual_time",
            "value": 47578168.18181839,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 48295454.54545455 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/4/manual_time",
            "value": 78271.30548945686,
            "unit": "ns/iter",
            "extra": "iterations: 12187\ncpu: 79490.44063346188 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/4/manual_time",
            "value": 386731.0593220353,
            "unit": "ns/iter",
            "extra": "iterations: 2360\ncpu: 390625 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/4/manual_time",
            "value": 1788442.735042728,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1780626.7806267806 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/4/manual_time",
            "value": 6029190.999999997,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6093750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/4/manual_time",
            "value": 28413433.3333335,
            "unit": "ns/iter",
            "extra": "iterations: 39\ncpu: 28445512.82051282 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/4/manual_time",
            "value": 116580466.6666667,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 117187500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/16/manual_time",
            "value": 247628.83872883805,
            "unit": "ns/iter",
            "extra": "iterations: 3367\ncpu: 255234.63023463023 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/16/manual_time",
            "value": 1122378.6127167619,
            "unit": "ns/iter",
            "extra": "iterations: 1038\ncpu: 1128973.9884393064 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/16/manual_time",
            "value": 4380567.021276594,
            "unit": "ns/iter",
            "extra": "iterations: 188\ncpu: 4404920.212765957 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/16/manual_time",
            "value": 18729870.175438613,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18914473.684210528 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/16/manual_time",
            "value": 67342200.00000003,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 67187500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/16/manual_time",
            "value": 265106999.99999985,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 265625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/64/manual_time",
            "value": 859194.8342328462,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 855339.2444101773 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/64/manual_time",
            "value": 3215340.8396946588,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3220419.8473282442 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/64/manual_time",
            "value": 13858607.692307696,
            "unit": "ns/iter",
            "extra": "iterations: 78\ncpu: 14022435.897435898 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/64/manual_time",
            "value": 52401942.85714287,
            "unit": "ns/iter",
            "extra": "iterations: 14\ncpu: 53571428.571428575 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/64/manual_time",
            "value": 212916299.99999988,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 214843750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/64/manual_time",
            "value": 811490599.9999998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 828125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/256/manual_time",
            "value": 2737327.160493827,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2797067.901234568 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/256/manual_time",
            "value": 11121345.528455278,
            "unit": "ns/iter",
            "extra": "iterations: 123\ncpu: 11178861.788617887 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/256/manual_time",
            "value": 41492042.10526314,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 41940789.473684214 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/256/manual_time",
            "value": 177199333.33333328,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 179687500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/256/manual_time",
            "value": 661015799.9999998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 671875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/256/manual_time",
            "value": 3275632600.000001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3312500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1000/manual_time",
            "value": 8315031.999999996,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 8593750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1000/manual_time",
            "value": 31135503.225806456,
            "unit": "ns/iter",
            "extra": "iterations: 31\ncpu: 31754032.258064516 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1000/manual_time",
            "value": 136151766.66666666,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 138888888.8888889 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1000/manual_time",
            "value": 535453449.9999999,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 546875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1000/manual_time",
            "value": 2601840900.0000014,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2640625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1000/manual_time",
            "value": 13083998299.999994,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 13250000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1",
            "value": 2148.789228559362,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 2176.341714667092 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1",
            "value": 3972.361120782723,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 3899.267590593588 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1",
            "value": 11287.710937498474,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11230.46875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1",
            "value": 41291.625558580316,
            "unit": "ns/iter",
            "extra": "iterations: 17231\ncpu: 41712.61099181708 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1",
            "value": 151073.21428575102,
            "unit": "ns/iter",
            "extra": "iterations: 4480\ncpu: 153459.82142857142 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1",
            "value": 571522.5892856779,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 571986.6071428572 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/4",
            "value": 8565.85640242625,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8579.760804639265 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/4",
            "value": 16039.002232141846,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 16043.526785714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/4",
            "value": 45274.896426734995,
            "unit": "ns/iter",
            "extra": "iterations: 15448\ncpu: 44504.14293112377 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/4",
            "value": 166473.28750306513,
            "unit": "ns/iter",
            "extra": "iterations: 4073\ncpu: 168794.5003682789 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/4",
            "value": 604268.7500001063,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 599888.3928571428 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/4",
            "value": 2268911.7056856914,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 2299331.1036789296 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/16",
            "value": 34593.17422902746,
            "unit": "ns/iter",
            "extra": "iterations: 20364\ncpu: 34527.84325279906 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/16",
            "value": 64245.10714284436,
            "unit": "ns/iter",
            "extra": "iterations: 11200\ncpu: 64174.107142857145 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/16",
            "value": 181823.42253864396,
            "unit": "ns/iter",
            "extra": "iterations: 4073\ncpu: 184139.45494721335 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/16",
            "value": 666170.3571428542,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 655691.9642857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/16",
            "value": 2429647.1571907024,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 2403846.153846154 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/16",
            "value": 9139939.99999851,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 8750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/64",
            "value": 139292.80835677392,
            "unit": "ns/iter",
            "extra": "iterations: 4978\ncpu: 138107.67376456407 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/64",
            "value": 256651.15749525043,
            "unit": "ns/iter",
            "extra": "iterations: 2635\ncpu: 254981.0246679317 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/64",
            "value": 728742.142857186,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 725446.4285714285 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/64",
            "value": 2659529.92424273,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 2663352.272727273 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/64",
            "value": 9677149.33333203,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 9583333.333333334 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/64",
            "value": 36414931.57893867,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 36184210.526315786 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/256",
            "value": 577251.7000000335,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578125 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/256",
            "value": 1091892.2356089037,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 1087684.0696117803 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/256",
            "value": 3109473.6607144573,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 3138950.8928571427 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/256",
            "value": 11391379.687498925,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 10986328.125 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/256",
            "value": 41424241.17648101,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 41360294.11764706 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/256",
            "value": 157421375.00001264,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 160156250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1000",
            "value": 2309339.1304349136,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 2351588.628762542 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1000",
            "value": 4326216.249999959,
            "unit": "ns/iter",
            "extra": "iterations: 160\ncpu: 4394531.25 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1000",
            "value": 12437524.00000176,
            "unit": "ns/iter",
            "extra": "iterations: 50\ncpu: 12187500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1000",
            "value": 45578360.00000559,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 45833333.333333336 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1000",
            "value": 166565224.99999937,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 167968750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1000",
            "value": 642010400.0001174,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 640625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1/manual_time",
            "value": 2776.4118711922993,
            "unit": "ns/iter",
            "extra": "iterations: 250253\ncpu: 8553.843510367507 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1/manual_time",
            "value": 11160.082710372428,
            "unit": "ns/iter",
            "extra": "iterations: 62870\ncpu: 46226.340066804514 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1/manual_time",
            "value": 45755.63288671896,
            "unit": "ns/iter",
            "extra": "iterations: 15374\ncpu: 222575.45206192273 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1/manual_time",
            "value": 201224.60248608768,
            "unit": "ns/iter",
            "extra": "iterations: 3459\ncpu: 1088645.5623012432 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1/manual_time",
            "value": 1067144.1896022193,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 5208333.333333333 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1/manual_time",
            "value": 8108726.74418601,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 27071220.93023256 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/4/manual_time",
            "value": 3401.9344495705996,
            "unit": "ns/iter",
            "extra": "iterations: 206467\ncpu: 10216.52370596754 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/4/manual_time",
            "value": 12965.489215363019,
            "unit": "ns/iter",
            "extra": "iterations: 51184\ncpu: 70212.3710534542 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/4/manual_time",
            "value": 53943.14116830821,
            "unit": "ns/iter",
            "extra": "iterations: 13027\ncpu: 440191.52529362094 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/4/manual_time",
            "value": 258153.868828299,
            "unit": "ns/iter",
            "extra": "iterations: 2714\ncpu: 2510132.645541636 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/4/manual_time",
            "value": 1699469.999999949,
            "unit": "ns/iter",
            "extra": "iterations: 410\ncpu: 13376524.390243903 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/4/manual_time",
            "value": 16793535.71428574,
            "unit": "ns/iter",
            "extra": "iterations: 42\ncpu: 73288690.47619048 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/16/manual_time",
            "value": 5703.136988658658,
            "unit": "ns/iter",
            "extra": "iterations: 122251\ncpu: 16104.162747134993 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/16/manual_time",
            "value": 19821.109123445338,
            "unit": "ns/iter",
            "extra": "iterations: 35217\ncpu: 172146.97447255586 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/16/manual_time",
            "value": 87601.98378039879,
            "unit": "ns/iter",
            "extra": "iterations: 8015\ncpu: 1311993.1378665003 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/16/manual_time",
            "value": 495737.88951841055,
            "unit": "ns/iter",
            "extra": "iterations: 1412\ncpu: 8188739.376770538 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/16/manual_time",
            "value": 4287581.595092065,
            "unit": "ns/iter",
            "extra": "iterations: 163\ncpu: 46108128.83435583 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/16/manual_time",
            "value": 50453984.61538468,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 258413461.53846154 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/64/manual_time",
            "value": 15168.03058527841,
            "unit": "ns/iter",
            "extra": "iterations: 46166\ncpu: 39937.39981804792 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/64/manual_time",
            "value": 48041.371045072585,
            "unit": "ns/iter",
            "extra": "iterations: 14602\ncpu: 578901.8627585262 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/64/manual_time",
            "value": 221042.04402516413,
            "unit": "ns/iter",
            "extra": "iterations: 3180\ncpu: 4800511.006289308 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/64/manual_time",
            "value": 1448175.1565762092,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 30369258.872651357 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/64/manual_time",
            "value": 14498618.367346996,
            "unit": "ns/iter",
            "extra": "iterations: 49\ncpu: 179209183.6734694 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/64/manual_time",
            "value": 184083025.00000036,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 988281250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/256/manual_time",
            "value": 93897.37773698565,
            "unit": "ns/iter",
            "extra": "iterations: 7627\ncpu: 241739.87150911236 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/256/manual_time",
            "value": 298547.4112109542,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 2554022.2507488234 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/256/manual_time",
            "value": 1357721.0424710426,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 20240106.177606177 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/256/manual_time",
            "value": 7978343.6781609515,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 126975574.71264368 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/256/manual_time",
            "value": 66091749.999999985,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 721875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/256/manual_time",
            "value": 766492899.9999992,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4046875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1000/manual_time",
            "value": 413242.148760331,
            "unit": "ns/iter",
            "extra": "iterations: 1694\ncpu: 1051505.3128689493 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1000/manual_time",
            "value": 1426803.4274193542,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 10616179.435483871 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1000/manual_time",
            "value": 6971943.877551024,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 82908163.26530612 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1000/manual_time",
            "value": 37948694.44444445,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 510416666.6666667 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1000/manual_time",
            "value": 292584000,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 2898437500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1000/manual_time",
            "value": 3308268800.000006,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 16843750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1/manual_time",
            "value": 6100.848450632607,
            "unit": "ns/iter",
            "extra": "iterations: 116919\ncpu: 6548.336882799203 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1/manual_time",
            "value": 24294.504447272095,
            "unit": "ns/iter",
            "extra": "iterations: 28332\ncpu: 24817.344345616264 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1/manual_time",
            "value": 94748.9402964408,
            "unit": "ns/iter",
            "extra": "iterations: 7219\ncpu: 95234.79706330517 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1/manual_time",
            "value": 402811.13716295426,
            "unit": "ns/iter",
            "extra": "iterations: 1706\ncpu: 402989.449003517 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1/manual_time",
            "value": 1581634.5070422527,
            "unit": "ns/iter",
            "extra": "iterations: 426\ncpu: 1577171.3615023475 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1/manual_time",
            "value": 6253811.304347827,
            "unit": "ns/iter",
            "extra": "iterations: 115\ncpu: 6250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/4/manual_time",
            "value": 6385.150481680379,
            "unit": "ns/iter",
            "extra": "iterations: 113768\ncpu: 6867.045214823149 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/4/manual_time",
            "value": 23935.457905829775,
            "unit": "ns/iter",
            "extra": "iterations: 28947\ncpu: 24290.0818737693 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/4/manual_time",
            "value": 97667.02513966475,
            "unit": "ns/iter",
            "extra": "iterations: 7160\ncpu: 98201.8156424581 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/4/manual_time",
            "value": 416785.17441860575,
            "unit": "ns/iter",
            "extra": "iterations: 1720\ncpu: 417877.9069767442 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/4/manual_time",
            "value": 1621842.4311926588,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 1612672.0183486238 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/4/manual_time",
            "value": 6300819.090909092,
            "unit": "ns/iter",
            "extra": "iterations: 110\ncpu: 6250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/16/manual_time",
            "value": 6972.536264681714,
            "unit": "ns/iter",
            "extra": "iterations: 101614\ncpu: 7380.8727143897495 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/16/manual_time",
            "value": 26942.59560934049,
            "unit": "ns/iter",
            "extra": "iterations: 25782\ncpu: 27877.976883096733 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/16/manual_time",
            "value": 109569.295120065,
            "unit": "ns/iter",
            "extra": "iterations: 6455\ncpu: 111347.79240898529 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/16/manual_time",
            "value": 451874.77477477415,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 452461.38996138994 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/16/manual_time",
            "value": 2045704.9608355078,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2039817.2323759792 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/16/manual_time",
            "value": 7113813.541666668,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 7161458.333333333 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/64/manual_time",
            "value": 9877.020433932763,
            "unit": "ns/iter",
            "extra": "iterations: 69688\ncpu: 10313.82734473654 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/64/manual_time",
            "value": 38734.37880970935,
            "unit": "ns/iter",
            "extra": "iterations: 18046\ncpu: 39828.77091876316 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/64/manual_time",
            "value": 157656.3080407699,
            "unit": "ns/iter",
            "extra": "iterations: 4415\ncpu: 155719.13929784825 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/64/manual_time",
            "value": 666057.737556561,
            "unit": "ns/iter",
            "extra": "iterations: 1105\ncpu: 664592.7601809955 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/64/manual_time",
            "value": 2695413.3587786257,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 2683683.2061068704 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/64/manual_time",
            "value": 10030269.117647061,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 10110294.11764706 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/256/manual_time",
            "value": 45375.44240510533,
            "unit": "ns/iter",
            "extra": "iterations: 15201\ncpu: 46255.18058022499 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/256/manual_time",
            "value": 184740.810457516,
            "unit": "ns/iter",
            "extra": "iterations: 3825\ncpu: 183823.5294117647 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/256/manual_time",
            "value": 736510.8193277301,
            "unit": "ns/iter",
            "extra": "iterations: 952\ncpu: 738576.680672269 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/256/manual_time",
            "value": 3008902.5531914895,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 2992021.276595745 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/256/manual_time",
            "value": 12892203.508771932,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 12609649.122807018 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/256/manual_time",
            "value": 51327807.14285715,
            "unit": "ns/iter",
            "extra": "iterations: 14\ncpu: 49107142.85714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1000/manual_time",
            "value": 212578.35227272802,
            "unit": "ns/iter",
            "extra": "iterations: 3520\ncpu: 199751.42045454544 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1000/manual_time",
            "value": 831218.3881952328,
            "unit": "ns/iter",
            "extra": "iterations: 881\ncpu: 815834.2792281498 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1000/manual_time",
            "value": 3223238.31775701,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 3285630.8411214952 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1000/manual_time",
            "value": 13473641.509433964,
            "unit": "ns/iter",
            "extra": "iterations: 53\ncpu: 13561320.754716981 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1000/manual_time",
            "value": 54742046.15384615,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 55288461.538461536 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1000/manual_time",
            "value": 224138000,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 223958333.33333334 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithSvcRef/manual_time",
            "value": 7925.243425553806,
            "unit": "ns/iter",
            "extra": "iterations: 89247\ncpu: 12255.313904108822 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithBundleContext/manual_time",
            "value": 7826.1762266671385,
            "unit": "ns/iter",
            "extra": "iterations: 89226\ncpu: 12258.198283011678 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithInterfaceName/manual_time",
            "value": 7807.749224284617,
            "unit": "ns/iter",
            "extra": "iterations: 75414\ncpu: 12431.378789084254 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000",
            "value": 7044.63928571337,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 7114.955357142857 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1024",
            "value": 8499.87589285815,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 8510.044642857143 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/2048",
            "value": 7036.505357141161,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 7114.955357142857 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/4096",
            "value": 7101.042857142049,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 7114.955357142857 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/8192",
            "value": 7247.52455357144,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7324.21875 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/16384",
            "value": 7290.78348214277,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7324.21875 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/32768",
            "value": 7336.527901785469,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7324.21875 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/65536",
            "value": 7565.727678571221,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7672.991071428572 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/131072",
            "value": 7684.0747767852645,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7672.991071428572 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/262144",
            "value": 7764.978794642425,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7672.991071428572 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/524288",
            "value": 7760.2935267862,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7847.377232142857 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000000",
            "value": 8137.8962053564,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/1",
            "value": 33780.06696427706,
            "unit": "ns/iter",
            "extra": "iterations: 22400\ncpu: 33482.142857142855 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/4000",
            "value": 23192496.6666611,
            "unit": "ns/iter",
            "extra": "iterations: 30\ncpu: 22916666.666666668 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/10000",
            "value": 67161872.72726612,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 66761363.63636363 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/1",
            "value": 33952.33928570869,
            "unit": "ns/iter",
            "extra": "iterations: 22400\ncpu: 34179.6875 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/4000",
            "value": 138660133.33332226,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 138020833.33333334 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/10000",
            "value": 341115500.0000008,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 343750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/1",
            "value": 29315.903312719885,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 29645.581148256366 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/4000",
            "value": 3398693.1372550423,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 3446691.1764705884 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/10000",
            "value": 9197881.33333289,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 9166666.666666666 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/1",
            "value": 446.46799999995324,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 439.453125 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/3",
            "value": 1316.8489285711921,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1311.3839285714287 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/7",
            "value": 2967.4089970261607,
            "unit": "ns/iter",
            "extra": "iterations: 235789\ncpu: 2982.0093388580467 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/11",
            "value": 4674.735714287083,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 4743.303571428572 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/15",
            "value": 6374.554464285,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/18",
            "value": 7660.0464285710195,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 7672.991071428572 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/20",
            "value": 8581.232673069733,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8579.760804639265 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/1",
            "value": 5777.7491071431905,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/3",
            "value": 8257.040178570716,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/7",
            "value": 12798.06428571614,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12834.82142857143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/11",
            "value": 17639.352272445794,
            "unit": "ns/iter",
            "extra": "iterations: 40727\ncpu: 17264.345520170893 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/15",
            "value": 22267.459068536034,
            "unit": "ns/iter",
            "extra": "iterations: 29867\ncpu: 21972.411022198412 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/18",
            "value": 25830.577163895094,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 25495.199787500474 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/20",
            "value": 28091.265217563603,
            "unit": "ns/iter",
            "extra": "iterations: 24889\ncpu: 28250.431917714654 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/1",
            "value": 689.3769642855675,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 697.5446428571429 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/3",
            "value": 1862.7664846127018,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1841.5195013566977 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/7",
            "value": 4142.335817257516,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 4171.309515518722 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/11",
            "value": 6414.8919642852725,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/15",
            "value": 8726.184258106296,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8579.760804639265 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/18",
            "value": 10459.706429881957,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 10463.12293248691 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/20",
            "value": 11617.559375000752,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11718.75 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/1",
            "value": 435.12806250006975,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 439.453125 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/3",
            "value": 1603.2896852973356,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1572.9621163200113 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/7",
            "value": 3868.1780133931197,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3836.495535714286 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/11",
            "value": 6185.763392857828,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/15",
            "value": 8509.553082350816,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8370.498345989527 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/18",
            "value": 10201.345312498945,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10253.90625 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/20",
            "value": 11350.862500002278,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11230.46875 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/BundleInstallCppFramework/manual_time",
            "value": 234617.54385964855,
            "unit": "ns/iter",
            "extra": "iterations: 2907\ncpu: 257997.93601651187 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/LargeBundleInstallCppFramework/manual_time",
            "value": 232755.3589315528,
            "unit": "ns/iter",
            "extra": "iterations: 2995\ncpu: 260851.41903171953 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterFromString",
            "value": 655.8279464284412,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 655.6919642857143 ns\nthreads: 1"
          },
          {
            "name": "ConstructNonTrivialFilterFromString",
            "value": 1034.6635937501958,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1025.390625 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Simple",
            "value": 427.938546170995,
            "unit": "ns/iter",
            "extra": "iterations: 1618581\ncpu: 434.40828725902503 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Complex",
            "value": 475.52328079711845,
            "unit": "ns/iter",
            "extra": "iterations: 1445161\ncpu: 475.7255419984348 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Simple",
            "value": 210.86762228269342,
            "unit": "ns/iter",
            "extra": "iterations: 3446154\ncpu: 213.09987887946968 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Complex",
            "value": 352.5829370387244,
            "unit": "ns/iter",
            "extra": "iterations: 2036364\ncpu: 352.9575262575846 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Simple",
            "value": 204.93080111915728,
            "unit": "ns/iter",
            "extra": "iterations: 3446154\ncpu: 204.03179892715184 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Complex",
            "value": 251.38385714285505,
            "unit": "ns/iter",
            "extra": "iterations: 2800000\ncpu: 251.11607142857142 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterIncremental",
            "value": 2312.836369601781,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterNotOperator",
            "value": 997.0604030982572,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 1004.4638372929297 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByInterface",
            "value": 1448.0792410712493,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1429.966517857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByClassName",
            "value": 1267.7323214286876,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1283.482142857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterface",
            "value": 1310.9630357141505,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1311.3839285714287 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassName",
            "value": 957.6417187503239,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 952.1484375 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassNameAndLDAPFilter",
            "value": 755.2756696428884,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 749.8604910714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterfaceAndLDAPFilter",
            "value": 686.4400892855623,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 683.59375 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "79453136+insi-eb@users.noreply.github.com",
            "name": "Ingmar Sittl",
            "username": "insi-eb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "70fa9fa3cd95f9e2fcc4ad895d94a95769987dd0",
          "message": "Automate Performance Testing and Deploy Results (#829) (#890)\n\n* Create performance_windows.yml\r\n\r\nAdding new workflow for running performance tests\r\n\r\n\r\n\r\n* Using personal token\r\n\r\n\r\n\r\n* Revert \"Using personal token\"\r\n\r\nThis reverts commit d672a801b6d11f9b8d72a54ae1de849179523a06.\r\n\r\n* Uploading results to fork\r\n\r\n\r\n\r\n* removing https\r\n\r\n\r\n\r\n* Changing ph branch\r\n\r\n\r\n\r\n* Trying to deploy on another branch\r\n\r\n\r\n\r\n* Commit results to gh-pages branch\r\n\r\n\r\n\r\n* Added Performance Badge\r\n\r\n\r\n\r\n* Added target for performance badge\r\n\r\n\r\n\r\n* Update performance_windows.yml\r\n\r\n\r\n\r\n* Removing hardcoded paths\r\n\r\n- Using ENV instead of hard coded build paths\r\n- Increased threshold to 20%\r\n\r\n\r\n\r\n* Removed Cache operation\r\n\r\n\r\n\r\n* Removing performance branch from workflow\r\n\r\n\r\n\r\n* Name changed to CppMicroServices Benchmarks\r\n\r\n\r\n\r\n---------\r\n\r\nSigned-off-by: The MathWorks, Inc. <aadityap@mathworks.com>\r\nCo-authored-by: Aaditya Sakharam Patil <36245341+aadityap-mathworks@users.noreply.github.com>\r\nCo-authored-by: Aaditya <aadityap@mathworks.com>",
          "timestamp": "2023-08-04T07:00:12-04:00",
          "tree_id": "c932054c90688f73895d943eeda73f53f87ef0cf",
          "url": "https://github.com/insi-eb/CppMicroServices-cpp14/commit/70fa9fa3cd95f9e2fcc4ad895d94a95769987dd0"
        },
        "date": 1691151234041,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1/manual_time",
            "value": 33972.22342592153,
            "unit": "ns/iter",
            "extra": "iterations: 23077\ncpu: 34531.134896217016 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1/manual_time",
            "value": 136975.2632406086,
            "unit": "ns/iter",
            "extra": "iterations: 6363\ncpu: 139969.35407826497 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1/manual_time",
            "value": 530448.6999999962,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 546875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1/manual_time",
            "value": 2210317.1270718114,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2287638.1215469614 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1/manual_time",
            "value": 8951655.140186843,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 9199766.355140187 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1/manual_time",
            "value": 32568459.09090873,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 33380681.818181816 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/4/manual_time",
            "value": 88091.35768561756,
            "unit": "ns/iter",
            "extra": "iterations: 10923\ncpu: 88689.00485214684 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/4/manual_time",
            "value": 352962.56781193375,
            "unit": "ns/iter",
            "extra": "iterations: 2212\ncpu: 360250.904159132 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/4/manual_time",
            "value": 1412364.3548387066,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1436491.935483871 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/4/manual_time",
            "value": 5285100.000000018,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5312500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/4/manual_time",
            "value": 22525452.777777836,
            "unit": "ns/iter",
            "extra": "iterations: 36\ncpu: 22569444.444444444 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/4/manual_time",
            "value": 89323745.45454572,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 90909090.9090909 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/16/manual_time",
            "value": 270811.2382934447,
            "unit": "ns/iter",
            "extra": "iterations: 2883\ncpu: 276404.7866805411 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/16/manual_time",
            "value": 1110324.797219003,
            "unit": "ns/iter",
            "extra": "iterations: 863\ncpu: 1122537.6593279259 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/16/manual_time",
            "value": 4337953.714285714,
            "unit": "ns/iter",
            "extra": "iterations: 175\ncpu: 4375000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/16/manual_time",
            "value": 17604947.05882358,
            "unit": "ns/iter",
            "extra": "iterations: 51\ncpu: 18075980.39215686 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/16/manual_time",
            "value": 71140539.99999985,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 73437500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/16/manual_time",
            "value": 275034899.9999997,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 281250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/64/manual_time",
            "value": 936614.0983606563,
            "unit": "ns/iter",
            "extra": "iterations: 1220\ncpu: 947745.9016393443 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/64/manual_time",
            "value": 3539492.5764192133,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 3616266.3755458514 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/64/manual_time",
            "value": 14912535.211267615,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15184859.154929578 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/64/manual_time",
            "value": 55291049.99999996,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 56250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/64/manual_time",
            "value": 230462125.00000015,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 234375000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/64/manual_time",
            "value": 879091500.0000004,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 906250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/256/manual_time",
            "value": 2982980.4713804713,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3051346.801346801 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/256/manual_time",
            "value": 12721105.825242717,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 13046116.504854368 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/256/manual_time",
            "value": 47515494.11764706,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 48713235.294117644 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/256/manual_time",
            "value": 196016940.00000003,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 196875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/256/manual_time",
            "value": 720576600.0000002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 750000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/256/manual_time",
            "value": 3654516800,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3718750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1000/manual_time",
            "value": 9355352.000000002,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 9687500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1000/manual_time",
            "value": 36710729.166666664,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 37760416.666666664 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1000/manual_time",
            "value": 162995166.66666663,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 166666666.66666666 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1000/manual_time",
            "value": 539063200.0000001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 546875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1000/manual_time",
            "value": 3013109700.000001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3093750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1000/manual_time",
            "value": 15047561600,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 15390625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1/manual_time",
            "value": 36302.736914129375,
            "unit": "ns/iter",
            "extra": "iterations: 20461\ncpu: 36655.099946239185 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1/manual_time",
            "value": 191632.30666220307,
            "unit": "ns/iter",
            "extra": "iterations: 5974\ncpu: 193547.03716103113 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1/manual_time",
            "value": 720567.7000000032,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 718750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1/manual_time",
            "value": 3354702.3026315775,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3340871.710526316 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1/manual_time",
            "value": 15059705.747126436,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 15086206.896551725 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1/manual_time",
            "value": 48941952.94117651,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 49632352.941176474 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/4/manual_time",
            "value": 94761.57167530233,
            "unit": "ns/iter",
            "extra": "iterations: 10422\ncpu: 95950.87315294569 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/4/manual_time",
            "value": 396160.7491021049,
            "unit": "ns/iter",
            "extra": "iterations: 1949\ncpu: 400846.587993843 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/4/manual_time",
            "value": 1862886.0655737757,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1895491.8032786886 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/4/manual_time",
            "value": 6761907.000000004,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/4/manual_time",
            "value": 30751039.393939376,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 30776515.151515152 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/4/manual_time",
            "value": 119516579.99999991,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 120312500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/16/manual_time",
            "value": 284800.0340715497,
            "unit": "ns/iter",
            "extra": "iterations: 2935\ncpu: 287478.7052810903 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/16/manual_time",
            "value": 1225203.771551726,
            "unit": "ns/iter",
            "extra": "iterations: 928\ncpu: 1245959.051724138 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/16/manual_time",
            "value": 4642500.000000001,
            "unit": "ns/iter",
            "extra": "iterations: 161\ncpu: 4755434.782608695 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/16/manual_time",
            "value": 20910873.469387744,
            "unit": "ns/iter",
            "extra": "iterations: 49\ncpu: 21045918.36734694 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/16/manual_time",
            "value": 76638780,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 76562500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/16/manual_time",
            "value": 302925766.6666674,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 302083333.3333333 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/64/manual_time",
            "value": 958943.2612312832,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 961938.4359400999 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/64/manual_time",
            "value": 3558100.434782613,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 3600543.4782608696 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/64/manual_time",
            "value": 15324897.101449277,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 15398550.724637682 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/64/manual_time",
            "value": 57342529.999999955,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 57812500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/64/manual_time",
            "value": 229318633.3333335,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 229166666.66666666 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/64/manual_time",
            "value": 923534999.9999993,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 937500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/256/manual_time",
            "value": 3075244.599303135,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3157665.505226481 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/256/manual_time",
            "value": 12284281.308411215,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 12558411.214953272 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/256/manual_time",
            "value": 47001123.529411756,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 47794117.64705882 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/256/manual_time",
            "value": 190589200.00000006,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 193750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/256/manual_time",
            "value": 748047900.0000002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 765625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/256/manual_time",
            "value": 3765658099.999997,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3796875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1000/manual_time",
            "value": 9561866.000000002,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 9843750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1000/manual_time",
            "value": 34817170.370370395,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 35879629.62962963 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1000/manual_time",
            "value": 149477800,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 154296875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1000/manual_time",
            "value": 540308699.9999999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 562500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1000/manual_time",
            "value": 3065457799.9999995,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3125000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1000/manual_time",
            "value": 15314586999.999998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 15625000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1",
            "value": 2131.8065625010263,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2099.609375 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1",
            "value": 3369.3483896076264,
            "unit": "ns/iter",
            "extra": "iterations: 213333\ncpu: 3369.145889290452 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1",
            "value": 7117.383035713537,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 7114.955357142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1",
            "value": 21678.622830942757,
            "unit": "ns/iter",
            "extra": "iterations: 34462\ncpu: 21309.703441471767 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1",
            "value": 75215.2410714351,
            "unit": "ns/iter",
            "extra": "iterations: 11200\ncpu: 75334.82142857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1",
            "value": 315817.9017857167,
            "unit": "ns/iter",
            "extra": "iterations: 2240\ncpu: 313895.08928571426 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/4",
            "value": 8937.678124993909,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 8789.0625 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/4",
            "value": 13645.908928570603,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 13671.875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/4",
            "value": 28959.056787814894,
            "unit": "ns/iter",
            "extra": "iterations: 23579\ncpu: 29157.300988167437 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/4",
            "value": 87016.31177182536,
            "unit": "ns/iter",
            "extra": "iterations: 7467\ncpu: 85794.16097495648 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/4",
            "value": 311381.043256977,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 311439.7794741306 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/4",
            "value": 1296927.5000005253,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1283482.142857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/16",
            "value": 33921.98978591227,
            "unit": "ns/iter",
            "extra": "iterations: 20364\ncpu: 33760.5578471813 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/16",
            "value": 53693.55357142273,
            "unit": "ns/iter",
            "extra": "iterations: 11200\ncpu: 53013.392857142855 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/16",
            "value": 144198.19204492684,
            "unit": "ns/iter",
            "extra": "iterations: 4978\ncpu: 144385.295299317 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/16",
            "value": 337432.6129666246,
            "unit": "ns/iter",
            "extra": "iterations: 2036\ncpu: 337671.90569744597 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/16",
            "value": 1191668.9285718414,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1199776.7857142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/16",
            "value": 5023823.000001357,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/64",
            "value": 137949.07593413367,
            "unit": "ns/iter",
            "extra": "iterations: 4978\ncpu: 138107.67376456407 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/64",
            "value": 217699.7098084772,
            "unit": "ns/iter",
            "extra": "iterations: 3446\ncpu: 217643.64480557168 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/64",
            "value": 618231.0113864623,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 617464.8359008707 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/64",
            "value": 1397537.6785716824,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1395089.2857142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/64",
            "value": 4928052.000000207,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/64",
            "value": 22003439.999995556,
            "unit": "ns/iter",
            "extra": "iterations: 30\ncpu: 22395833.333333332 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/256",
            "value": 637076.8973213664,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 627790.1785714285 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/256",
            "value": 1021077.3437499653,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1025390.625 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/256",
            "value": 2143591.5624991255,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2148437.5 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/256",
            "value": 6537538.888884834,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 6597222.222222222 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/256",
            "value": 24888316.666662525,
            "unit": "ns/iter",
            "extra": "iterations: 30\ncpu: 25000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/256",
            "value": 99803416.66664572,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 101562500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1000",
            "value": 2317297.6588631417,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 2299331.1036789296 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1000",
            "value": 3948079.32960949,
            "unit": "ns/iter",
            "extra": "iterations: 179\ncpu: 3928072.625698324 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1000",
            "value": 9005894.444443483,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 9027777.777777778 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1000",
            "value": 26661438.46153528,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 26442307.692307692 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1000",
            "value": 100623128.57144205,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 100446428.57142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1000",
            "value": 419848549.99986964,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 414062500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1/manual_time",
            "value": 3659.8304994653495,
            "unit": "ns/iter",
            "extra": "iterations: 188200\ncpu: 11872.343251859724 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1/manual_time",
            "value": 15177.859307039842,
            "unit": "ns/iter",
            "extra": "iterations: 48517\ncpu: 59257.5798173836 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1/manual_time",
            "value": 61416.79518682854,
            "unit": "ns/iter",
            "extra": "iterations: 11801\ncpu: 291288.87382425216 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1/manual_time",
            "value": 261872.81954879966,
            "unit": "ns/iter",
            "extra": "iterations: 2660\ncpu: 1351033.8345864662 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1/manual_time",
            "value": 1289484.4277672716,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 6420028.142589118 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1/manual_time",
            "value": 9596892.857143063,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 34151785.71428572 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/4/manual_time",
            "value": 4475.985605290944,
            "unit": "ns/iter",
            "extra": "iterations: 155057\ncpu: 15216.178566591641 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/4/manual_time",
            "value": 16941.846280948997,
            "unit": "ns/iter",
            "extra": "iterations: 41153\ncpu: 88085.92326197361 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/4/manual_time",
            "value": 69867.89146972522,
            "unit": "ns/iter",
            "extra": "iterations: 9988\ncpu: 525630.75690829 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/4/manual_time",
            "value": 318631.38151873514,
            "unit": "ns/iter",
            "extra": "iterations: 2186\ncpu: 2959172.0036596525 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/4/manual_time",
            "value": 1952098.378378372,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 15625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/4/manual_time",
            "value": 16509873.17073171,
            "unit": "ns/iter",
            "extra": "iterations: 41\ncpu: 82698170.73170732 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/16/manual_time",
            "value": 7587.088599437861,
            "unit": "ns/iter",
            "extra": "iterations: 93127\ncpu: 23153.865151889357 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/16/manual_time",
            "value": 32618.333255786576,
            "unit": "ns/iter",
            "extra": "iterations: 21491\ncpu: 213752.26839141967 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/16/manual_time",
            "value": 109553.63338021426,
            "unit": "ns/iter",
            "extra": "iterations: 6399\ncpu: 1506583.059853102 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/16/manual_time",
            "value": 591203.1250000081,
            "unit": "ns/iter",
            "extra": "iterations: 1184\ncpu: 9382918.074324325 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/16/manual_time",
            "value": 4556454.966887426,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 51945364.2384106 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/16/manual_time",
            "value": 45946546.666666836,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 282291666.6666667 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/64/manual_time",
            "value": 20740.006385693316,
            "unit": "ns/iter",
            "extra": "iterations: 34452\ncpu: 58051.78218971322 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/64/manual_time",
            "value": 64570.70561797773,
            "unit": "ns/iter",
            "extra": "iterations: 11125\ncpu: 688202.2471910112 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/64/manual_time",
            "value": 278008.7058823521,
            "unit": "ns/iter",
            "extra": "iterations: 2550\ncpu: 5441176.470588235 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/64/manual_time",
            "value": 1745532.929782079,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 34919794.18886199 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/64/manual_time",
            "value": 14904340.42553208,
            "unit": "ns/iter",
            "extra": "iterations: 47\ncpu: 201795212.76595744 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/64/manual_time",
            "value": 168602599.99999967,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1097656250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/256/manual_time",
            "value": 125081.34874759255,
            "unit": "ns/iter",
            "extra": "iterations: 5190\ncpu: 328155.105973025 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/256/manual_time",
            "value": 407854.0917005235,
            "unit": "ns/iter",
            "extra": "iterations: 1723\ncpu: 3074216.4828787 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/256/manual_time",
            "value": 1947141.7989418006,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 23602843.915343914 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/256/manual_time",
            "value": 10096508.571428573,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 143973214.2857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/256/manual_time",
            "value": 68618010.00000007,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 804687500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/256/manual_time",
            "value": 666132699.9999989,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4390625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1000/manual_time",
            "value": 568705.838815789,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 1439144.7368421052 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1000/manual_time",
            "value": 2012267.1686746995,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 12895331.325301206 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1000/manual_time",
            "value": 9308628.947368432,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 96217105.26315789 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1000/manual_time",
            "value": 45327713.33333337,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 584375000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1000/manual_time",
            "value": 288100400.0000001,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 3242187500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1000/manual_time",
            "value": 2915234999.999992,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 17921875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1/manual_time",
            "value": 9843.837833463562,
            "unit": "ns/iter",
            "extra": "iterations: 74146\ncpu: 10536.64391875489 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1/manual_time",
            "value": 35627.72952226878,
            "unit": "ns/iter",
            "extra": "iterations: 19802\ncpu: 36296.838703161295 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1/manual_time",
            "value": 137632.44498283786,
            "unit": "ns/iter",
            "extra": "iterations: 4953\ncpu: 135650.11104381183 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1/manual_time",
            "value": 569451.0204081641,
            "unit": "ns/iter",
            "extra": "iterations: 1176\ncpu: 571322.2789115646 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1/manual_time",
            "value": 2425657.8073089696,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 2439784.0531561463 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1/manual_time",
            "value": 9414128.767123286,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 9417808.219178082 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/4/manual_time",
            "value": 9270.296423487252,
            "unit": "ns/iter",
            "extra": "iterations: 75129\ncpu: 9982.82953320289 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/4/manual_time",
            "value": 35540.37371404564,
            "unit": "ns/iter",
            "extra": "iterations: 19052\ncpu: 36085.45034642032 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/4/manual_time",
            "value": 146489.80632008184,
            "unit": "ns/iter",
            "extra": "iterations: 4905\ncpu: 146534.1488277268 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/4/manual_time",
            "value": 649827.9962546825,
            "unit": "ns/iter",
            "extra": "iterations: 1068\ncpu: 658356.7415730337 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/4/manual_time",
            "value": 2495440.468227424,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 2456103.6789297657 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/4/manual_time",
            "value": 10039136.486486489,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 10135135.135135135 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/16/manual_time",
            "value": 10342.124531647101,
            "unit": "ns/iter",
            "extra": "iterations: 69926\ncpu: 10949.074736149643 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/16/manual_time",
            "value": 40230.981448234365,
            "unit": "ns/iter",
            "extra": "iterations: 16710\ncpu: 41143.02812687014 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/16/manual_time",
            "value": 162398.30973047024,
            "unit": "ns/iter",
            "extra": "iterations: 4378\ncpu: 164173.13841936958 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/16/manual_time",
            "value": 685198.236514524,
            "unit": "ns/iter",
            "extra": "iterations: 964\ncpu: 680757.2614107884 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/16/manual_time",
            "value": 2835451.2396694203,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 2840909.090909091 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/16/manual_time",
            "value": 12157711.666666664,
            "unit": "ns/iter",
            "extra": "iterations: 60\ncpu: 11979166.666666666 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/64/manual_time",
            "value": 14828.024858803406,
            "unit": "ns/iter",
            "extra": "iterations: 49399\ncpu: 15498.795522176562 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/64/manual_time",
            "value": 55652.94805802451,
            "unit": "ns/iter",
            "extra": "iterations: 12822\ncpu: 56055.9975042895 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/64/manual_time",
            "value": 233500.6595822645,
            "unit": "ns/iter",
            "extra": "iterations: 2729\ncpu: 234747.16013191646 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/64/manual_time",
            "value": 899002.7568922311,
            "unit": "ns/iter",
            "extra": "iterations: 798\ncpu: 900689.2230576441 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/64/manual_time",
            "value": 3802727.2251308905,
            "unit": "ns/iter",
            "extra": "iterations: 191\ncpu: 3763089.005235602 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/64/manual_time",
            "value": 16320516.666666666,
            "unit": "ns/iter",
            "extra": "iterations: 42\ncpu: 16369047.61904762 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/256/manual_time",
            "value": 57692.81990919693,
            "unit": "ns/iter",
            "extra": "iterations: 11894\ncpu: 59115.940810492684 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/256/manual_time",
            "value": 237373.3244414813,
            "unit": "ns/iter",
            "extra": "iterations: 2999\ncpu: 234453.1510503501 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/256/manual_time",
            "value": 956415.6167979004,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 963746.719160105 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/256/manual_time",
            "value": 4148037.209302325,
            "unit": "ns/iter",
            "extra": "iterations: 172\ncpu: 4178779.069767442 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/256/manual_time",
            "value": 18740785,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 18750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/256/manual_time",
            "value": 67852527.27272727,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 66761363.63636363 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1000/manual_time",
            "value": 265493.26386304473,
            "unit": "ns/iter",
            "extra": "iterations: 2687\ncpu: 261676.59099367325 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1000/manual_time",
            "value": 1074039.3468118194,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1069206.8429237946 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1000/manual_time",
            "value": 4396603.797468354,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 4351265.82278481 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1000/manual_time",
            "value": 19466764.864864863,
            "unit": "ns/iter",
            "extra": "iterations: 37\ncpu: 19425675.675675675 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1000/manual_time",
            "value": 73602700,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 75000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1000/manual_time",
            "value": 304640800,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 304687500 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithSvcRef/manual_time",
            "value": 7404.897260631868,
            "unit": "ns/iter",
            "extra": "iterations: 96993\ncpu: 12565.339766787294 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithBundleContext/manual_time",
            "value": 9029.57050795115,
            "unit": "ns/iter",
            "extra": "iterations: 77743\ncpu: 14269.773484429466 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithInterfaceName/manual_time",
            "value": 8882.238358536104,
            "unit": "ns/iter",
            "extra": "iterations: 75055\ncpu: 14156.285390713478 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000",
            "value": 9539.435091802545,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1024",
            "value": 9813.920473567046,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9835.335556537693 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/2048",
            "value": 9618.553042173873,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9626.073097887956 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/4096",
            "value": 9980.915263765966,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9835.335556537693 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/8192",
            "value": 10124.629687496166,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10253.90625 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/16384",
            "value": 10021.998437494516,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10009.765625 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/32768",
            "value": 10051.177896530582,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 10044.598015187432 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/65536",
            "value": 10459.987499999103,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10498.046875 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/131072",
            "value": 10793.473437495039,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10742.1875 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/262144",
            "value": 10454.343953821723,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 10463.12293248691 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/524288",
            "value": 10273.574999999368,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10253.90625 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000000",
            "value": 11100.26250000118,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10986.328125 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/1",
            "value": 39242.96351852301,
            "unit": "ns/iter",
            "extra": "iterations: 18667\ncpu: 39340.81534258317 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/4000",
            "value": 25728739.285714902,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 25669642.85714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/10000",
            "value": 72831927.27275242,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 72443181.81818181 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/1",
            "value": 40278.35217229687,
            "unit": "ns/iter",
            "extra": "iterations: 18667\ncpu: 40177.853966893446 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/4000",
            "value": 158995300.00001505,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 158854166.66666666 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/10000",
            "value": 416731100.0001064,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 421875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/1",
            "value": 35804.35475553939,
            "unit": "ns/iter",
            "extra": "iterations: 21333\ncpu: 35889.23264426007 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/4000",
            "value": 11758407.142857712,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 11718750 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/10000",
            "value": 35785089.47368008,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 36184210.526315786 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/1",
            "value": 604.855357142599,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 599.8883928571429 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/3",
            "value": 1801.8650909511794,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1799.6667854167727 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/7",
            "value": 4193.75926617916,
            "unit": "ns/iter",
            "extra": "iterations: 165926\ncpu: 4237.581813579547 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/11",
            "value": 6448.0000000019445,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/15",
            "value": 8494.874576448761,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8370.498345989527 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/18",
            "value": 10682.398437502627,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10742.1875 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/20",
            "value": 11843.332142859708,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11997.767857142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/1",
            "value": 7186.350446427728,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7149.832589285715 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/3",
            "value": 10826.960937500018,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10986.328125 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/7",
            "value": 15966.031249996198,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 16043.526785714286 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/11",
            "value": 21874.903124995628,
            "unit": "ns/iter",
            "extra": "iterations: 32000\ncpu: 21484.375 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/15",
            "value": 30583.565438469777,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 30238.492771221492 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/18",
            "value": 33704.642857129234,
            "unit": "ns/iter",
            "extra": "iterations: 22400\ncpu: 34179.6875 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/20",
            "value": 37375.89809065198,
            "unit": "ns/iter",
            "extra": "iterations: 17231\ncpu: 37178.63153618478 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/1",
            "value": 993.805270622638,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 1004.4638372929297 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/3",
            "value": 2547.327239128284,
            "unit": "ns/iter",
            "extra": "iterations: 263529\ncpu: 2549.52965328294 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/7",
            "value": 6126.519999997981,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 6250 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/11",
            "value": 8880.465401784728,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8893.69419642857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/15",
            "value": 11603.679687503643,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11718.75 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/18",
            "value": 14130.939370810887,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 14125.215958857327 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/20",
            "value": 15517.15401786526,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 15694.754464285714 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/1",
            "value": 604.5274107143379,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 599.8883928571429 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/3",
            "value": 2166.197187499108,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2197.265625 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/7",
            "value": 5197.311000001719,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/11",
            "value": 8225.554687497955,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/15",
            "value": 11863.35178571036,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11718.75 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/18",
            "value": 13779.982142856234,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 13671.875 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/20",
            "value": 15329.944955610204,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 15066.897022781148 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/BundleInstallCppFramework/manual_time",
            "value": 436639.5794681517,
            "unit": "ns/iter",
            "extra": "iterations: 1617\ncpu: 483147.804576376 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/LargeBundleInstallCppFramework/manual_time",
            "value": 412233.58512492815,
            "unit": "ns/iter",
            "extra": "iterations: 1721\ncpu: 463030.2149912841 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterFromString",
            "value": 891.3784859919726,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 878.9058576313136 ns\nthreads: 1"
          },
          {
            "name": "ConstructNonTrivialFilterFromString",
            "value": 1351.7256688720674,
            "unit": "ns/iter",
            "extra": "iterations: 497778\ncpu: 1349.7482813623744 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Simple",
            "value": 591.3774000000558,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 609.375 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Complex",
            "value": 658.3921428573701,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 655.6919642857143 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Simple",
            "value": 275.30040291522465,
            "unit": "ns/iter",
            "extra": "iterations: 2635294\ncpu: 272.73996753303425 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Complex",
            "value": 474.7189331110929,
            "unit": "ns/iter",
            "extra": "iterations: 1544828\ncpu: 475.37654677413923 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Simple",
            "value": 254.99090424052545,
            "unit": "ns/iter",
            "extra": "iterations: 2635294\ncpu: 254.95257834609725 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Complex",
            "value": 306.1739814538047,
            "unit": "ns/iter",
            "extra": "iterations: 2357895\ncpu: 304.8269749077037 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterIncremental",
            "value": 3061.5834821442636,
            "unit": "ns/iter",
            "extra": "iterations: 224000\ncpu: 3069.1964285714284 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterNotOperator",
            "value": 1327.885892857239,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1311.3839285714287 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByInterface",
            "value": 1477.9944071460352,
            "unit": "ns/iter",
            "extra": "iterations: 497778\ncpu: 1475.3062610239906 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByClassName",
            "value": 1349.0146209755496,
            "unit": "ns/iter",
            "extra": "iterations: 497778\ncpu: 1349.7482813623744 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterface",
            "value": 1293.4629493466725,
            "unit": "ns/iter",
            "extra": "iterations: 497778\ncpu: 1286.9692915315663 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassName",
            "value": 957.7860937504568,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 952.1484375 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassNameAndLDAPFilter",
            "value": 1149.691964285791,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1143.9732142857142 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterfaceAndLDAPFilter",
            "value": 1038.6678398807073,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 1046.3164971801352 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "79453136+insi-eb@users.noreply.github.com",
            "name": "Ingmar Sittl",
            "username": "insi-eb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b2a07dcdfea1dd82370a83116ddc26370b4f922e",
          "message": "Brian decl services (#833) (#891)\n\n* Performance micro-optimizations\r\n\r\n\r\n\r\n* Fix formatting\r\n\r\n* More performance improvements\r\n\r\n* fixed up compilation errors.\r\n\r\n* deal with unused variable.\r\n\r\n* restore API\r\n\r\nServiceRegistrationBase::SetProperties(ServiceProperties const&)\r\n\r\n---------\r\n\r\n\r\n\r\n\r\nResolved conflict with previous C++14 changes (absl::string_view).\r\n\r\nSigned-off-by: Ingmar Sittl <ingmar.sittl@elektrobit.com>\r\nCo-authored-by: Brian Weed <brian_weed@yahoo.com>",
          "timestamp": "2023-08-04T08:26:30-04:00",
          "tree_id": "bd40fdd1c653c1c32d9f991657035c63f5432b75",
          "url": "https://github.com/insi-eb/CppMicroServices-cpp14/commit/b2a07dcdfea1dd82370a83116ddc26370b4f922e"
        },
        "date": 1691154163275,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1/manual_time",
            "value": 30746.498874564728,
            "unit": "ns/iter",
            "extra": "iterations: 24435\ncpu: 31972.58031512175 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1/manual_time",
            "value": 125407.47419132669,
            "unit": "ns/iter",
            "extra": "iterations: 7265\ncpu: 129043.35856847902 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1/manual_time",
            "value": 487770.2419882206,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 500735.77501635056 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1/manual_time",
            "value": 1957265.8476658252,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 1996314.4963144963 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1/manual_time",
            "value": 7831646.21848733,
            "unit": "ns/iter",
            "extra": "iterations: 119\ncpu: 8009453.781512605 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1/manual_time",
            "value": 30064588.46153795,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 31250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/4/manual_time",
            "value": 79331.78668018928,
            "unit": "ns/iter",
            "extra": "iterations: 11832\ncpu: 80554.85125084517 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/4/manual_time",
            "value": 308968.2001614197,
            "unit": "ns/iter",
            "extra": "iterations: 2478\ncpu: 315274.41485068604 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/4/manual_time",
            "value": 1277942.0612813383,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 1305710.3064066852 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/4/manual_time",
            "value": 5020221.333333356,
            "unit": "ns/iter",
            "extra": "iterations: 150\ncpu: 5208333.333333333 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/4/manual_time",
            "value": 20600509.523809593,
            "unit": "ns/iter",
            "extra": "iterations: 42\ncpu: 20833333.333333332 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/4/manual_time",
            "value": 81549858.33333331,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 80729166.66666667 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/16/manual_time",
            "value": 246130.1096997694,
            "unit": "ns/iter",
            "extra": "iterations: 3464\ncpu: 252598.15242494227 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/16/manual_time",
            "value": 975824.6464646481,
            "unit": "ns/iter",
            "extra": "iterations: 990\ncpu: 994318.1818181818 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/16/manual_time",
            "value": 3932988.832487308,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 3965736.040609137 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/16/manual_time",
            "value": 15822590.74074075,
            "unit": "ns/iter",
            "extra": "iterations: 54\ncpu: 16203703.703703703 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/16/manual_time",
            "value": 59767130.000000075,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 60937500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/16/manual_time",
            "value": 246264333.33333358,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 250000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/64/manual_time",
            "value": 803025.3999999999,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 812500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/64/manual_time",
            "value": 3129550.972762642,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3161478.5992217897 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/64/manual_time",
            "value": 12920006.410256425,
            "unit": "ns/iter",
            "extra": "iterations: 78\ncpu: 13020833.333333334 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/64/manual_time",
            "value": 49925640.00000003,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 51041666.666666664 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/64/manual_time",
            "value": 198543825.00000018,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 203125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/64/manual_time",
            "value": 804252300.0000004,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 812500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/256/manual_time",
            "value": 2683264.220183486,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2723623.853211009 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/256/manual_time",
            "value": 11423803.669724766,
            "unit": "ns/iter",
            "extra": "iterations: 109\ncpu: 11611238.532110091 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/256/manual_time",
            "value": 41652142.10526315,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 42763157.89473684 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/256/manual_time",
            "value": 180742850.00000003,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 184895833.33333334 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/256/manual_time",
            "value": 648094199.9999999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 656250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/256/manual_time",
            "value": 3246260800.0000043,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3312500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1000/manual_time",
            "value": 8223288.999999999,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 8437500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1000/manual_time",
            "value": 33651559.259259254,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 34722222.222222224 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1000/manual_time",
            "value": 143566744.44444454,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 147569444.44444445 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1000/manual_time",
            "value": 556092099.9999999,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 578125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1000/manual_time",
            "value": 2637489299.999999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2718750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1000/manual_time",
            "value": 13134921299.999983,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 13437500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1/manual_time",
            "value": 30639.184009890327,
            "unit": "ns/iter",
            "extra": "iterations: 24265\ncpu: 31552.647846692766 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1/manual_time",
            "value": 185301.9455822114,
            "unit": "ns/iter",
            "extra": "iterations: 6836\ncpu: 189712.55119953188 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1/manual_time",
            "value": 652182.5000000014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 671875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1/manual_time",
            "value": 3138063.772455091,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 3181137.724550898 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1/manual_time",
            "value": 15543491.891891802,
            "unit": "ns/iter",
            "extra": "iterations: 111\ncpu: 15625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1/manual_time",
            "value": 49955463.157894574,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 50986842.10526316 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/4/manual_time",
            "value": 82555.64353099708,
            "unit": "ns/iter",
            "extra": "iterations: 11872\ncpu: 84231.80592991914 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/4/manual_time",
            "value": 393702.41587575525,
            "unit": "ns/iter",
            "extra": "iterations: 2318\ncpu: 397702.7610008628 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/4/manual_time",
            "value": 1814098.8112927238,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1834138.1872213967 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/4/manual_time",
            "value": 6165421.000000007,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/4/manual_time",
            "value": 28426952.777777713,
            "unit": "ns/iter",
            "extra": "iterations: 36\ncpu: 29079861.111111112 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/4/manual_time",
            "value": 119323733.33333348,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 119791666.66666667 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/16/manual_time",
            "value": 249267.60341016768,
            "unit": "ns/iter",
            "extra": "iterations: 3167\ncpu: 251618.25071045154 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/16/manual_time",
            "value": 1140098.3168316872,
            "unit": "ns/iter",
            "extra": "iterations: 1010\ncpu: 1160272.2772277228 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/16/manual_time",
            "value": 4294306.077348071,
            "unit": "ns/iter",
            "extra": "iterations: 181\ncpu: 4402624.309392265 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/16/manual_time",
            "value": 19002464.91228067,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 19462719.298245613 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/16/manual_time",
            "value": 69254879.99999997,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 70312500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/16/manual_time",
            "value": 263718466.66666684,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 265625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/64/manual_time",
            "value": 850852.0661157023,
            "unit": "ns/iter",
            "extra": "iterations: 1210\ncpu: 852272.7272727273 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/64/manual_time",
            "value": 3199106.296296297,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 3240740.7407407407 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/64/manual_time",
            "value": 13894570.512820516,
            "unit": "ns/iter",
            "extra": "iterations: 78\ncpu: 14022435.897435898 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/64/manual_time",
            "value": 52917135.714285746,
            "unit": "ns/iter",
            "extra": "iterations: 14\ncpu: 53571428.571428575 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/64/manual_time",
            "value": 217936549.99999988,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 222656250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/64/manual_time",
            "value": 789878400.0000001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 796875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/256/manual_time",
            "value": 2758553.9156626505,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2823795.1807228914 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/256/manual_time",
            "value": 11053718.48739495,
            "unit": "ns/iter",
            "extra": "iterations: 119\ncpu: 11292016.80672269 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/256/manual_time",
            "value": 43854468.421052605,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 44407894.7368421 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/256/manual_time",
            "value": 187656366.66666663,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 190104166.66666666 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/256/manual_time",
            "value": 674470999.9999999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 687500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/256/manual_time",
            "value": 3272514100.000001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3312500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1000/manual_time",
            "value": 8494451,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 8750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1000/manual_time",
            "value": 32104064.516129028,
            "unit": "ns/iter",
            "extra": "iterations: 31\ncpu: 32762096.774193548 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1000/manual_time",
            "value": 135202711.1111111,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 138888888.8888889 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1000/manual_time",
            "value": 532764249.99999994,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 546875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1000/manual_time",
            "value": 2615333699.9999995,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2671875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1000/manual_time",
            "value": 13452762400.000004,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 13765625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1",
            "value": 1877.2664082736162,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1883.3722172966227 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1",
            "value": 2931.351727075058,
            "unit": "ns/iter",
            "extra": "iterations: 248889\ncpu: 2950.612522047981 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1",
            "value": 6576.541964284794,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1",
            "value": 19892.50188613357,
            "unit": "ns/iter",
            "extra": "iterations: 34462\ncpu: 19949.509604782077 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1",
            "value": 71503.83035713455,
            "unit": "ns/iter",
            "extra": "iterations: 11200\ncpu: 71149.55357142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1",
            "value": 316736.68363016227,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 311439.7794741306 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/4",
            "value": 7670.786830356998,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7672.991071428572 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/4",
            "value": 11665.915624998746,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11718.75 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/4",
            "value": 25376.837551705652,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 25495.199787500474 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/4",
            "value": 78117.82366071084,
            "unit": "ns/iter",
            "extra": "iterations: 8960\ncpu: 78473.77232142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/4",
            "value": 282554.4395339312,
            "unit": "ns/iter",
            "extra": "iterations: 2489\ncpu: 282492.9690638811 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/4",
            "value": 1239999.7991966542,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1223644.5783132531 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/16",
            "value": 30449.281250000127,
            "unit": "ns/iter",
            "extra": "iterations: 22400\ncpu: 30691.964285714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/16",
            "value": 47415.208967619204,
            "unit": "ns/iter",
            "extra": "iterations: 14452\ncpu: 47571.27041239967 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/16",
            "value": 105205.84375001364,
            "unit": "ns/iter",
            "extra": "iterations: 6400\ncpu: 104980.46875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/16",
            "value": 333552.72321427625,
            "unit": "ns/iter",
            "extra": "iterations: 2240\ncpu: 334821.4285714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/16",
            "value": 1158581.4062499367,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1171875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/16",
            "value": 4775611.03448195,
            "unit": "ns/iter",
            "extra": "iterations: 145\ncpu: 4849137.931034483 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/64",
            "value": 124043.60714287219,
            "unit": "ns/iter",
            "extra": "iterations: 5600\ncpu: 125558.03571428571 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/64",
            "value": 191825.10045536511,
            "unit": "ns/iter",
            "extra": "iterations: 3733\ncpu: 192539.51245646933 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/64",
            "value": 430359.7794544299,
            "unit": "ns/iter",
            "extra": "iterations: 1723\ncpu: 426218.8044109112 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/64",
            "value": 1301113.253012283,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1317771.0843373493 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/64",
            "value": 4635715.584414924,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 4565746.7532467535 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/64",
            "value": 19981429.411767323,
            "unit": "ns/iter",
            "extra": "iterations: 34\ncpu: 19761029.411764707 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/256",
            "value": 546672.2321431559,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 544084.8214285715 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/256",
            "value": 848556.026786034,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 854492.1875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/256",
            "value": 1971767.8284183817,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2010723.8605898123 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/256",
            "value": 6236252.999997305,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/256",
            "value": 22916103.571430672,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 22879464.285714287 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/256",
            "value": 94325242.85713433,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 93750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1000",
            "value": 2132217.8125004144,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2148437.5 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1000",
            "value": 3476755.8823530492,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 3446691.1764705884 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1000",
            "value": 8012176.666665658,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 7986111.111111111 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1000",
            "value": 26003117.85714179,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 26227678.57142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1000",
            "value": 102481683.33335645,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 101562500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1000",
            "value": 393090699.9999024,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 390625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1/manual_time",
            "value": 3265.2931250796446,
            "unit": "ns/iter",
            "extra": "iterations: 212759\ncpu: 9694.066995990768 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1/manual_time",
            "value": 13205.935291097443,
            "unit": "ns/iter",
            "extra": "iterations: 54892\ncpu: 48390.47584347446 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1/manual_time",
            "value": 53871.962044626765,
            "unit": "ns/iter",
            "extra": "iterations: 13068\ncpu: 235546.75543311908 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1/manual_time",
            "value": 232361.491085748,
            "unit": "ns/iter",
            "extra": "iterations: 3085\ncpu: 1159846.0291734198 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1/manual_time",
            "value": 1169408.4999998368,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 5546875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1/manual_time",
            "value": 8908117.500000054,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 29882812.5 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/4/manual_time",
            "value": 4063.296120006813,
            "unit": "ns/iter",
            "extra": "iterations: 173325\ncpu: 11809.461993365067 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/4/manual_time",
            "value": 15423.63100614781,
            "unit": "ns/iter",
            "extra": "iterations: 46494\ncpu: 77294.91977459457 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/4/manual_time",
            "value": 65343.15476189975,
            "unit": "ns/iter",
            "extra": "iterations: 10752\ncpu: 467936.1979166667 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/4/manual_time",
            "value": 299092.13333334227,
            "unit": "ns/iter",
            "extra": "iterations: 2250\ncpu: 2618055.5555555555 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/4/manual_time",
            "value": 1912786.7724867756,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 14095568.783068784 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/4/manual_time",
            "value": 17219320.000000034,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 76562500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/16/manual_time",
            "value": 7295.706087725802,
            "unit": "ns/iter",
            "extra": "iterations: 99676\ncpu: 21319.073799109112 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/16/manual_time",
            "value": 24839.467563602746,
            "unit": "ns/iter",
            "extra": "iterations: 27947\ncpu: 189532.86578165813 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/16/manual_time",
            "value": 107361.88679243543,
            "unit": "ns/iter",
            "extra": "iterations: 6625\ncpu: 1365566.0377358492 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/16/manual_time",
            "value": 563674.9999999974,
            "unit": "ns/iter",
            "extra": "iterations: 1256\ncpu: 8496715.76433121 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/16/manual_time",
            "value": 4640539.869281091,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 46977124.18300653 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/16/manual_time",
            "value": 49196000.00000001,
            "unit": "ns/iter",
            "extra": "iterations: 14\ncpu: 263392857.14285713 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/64/manual_time",
            "value": 20319.254872649002,
            "unit": "ns/iter",
            "extra": "iterations: 34786\ncpu: 54799.34456390502 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/64/manual_time",
            "value": 62797.58694109277,
            "unit": "ns/iter",
            "extra": "iterations: 11272\ncpu: 633483.4102200142 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/64/manual_time",
            "value": 271964.0330188658,
            "unit": "ns/iter",
            "extra": "iterations: 2544\ncpu: 4931947.720125786 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/64/manual_time",
            "value": 1714866.8341708656,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 31328517.5879397 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/64/manual_time",
            "value": 15002285.106383093,
            "unit": "ns/iter",
            "extra": "iterations: 47\ncpu: 177194148.93617022 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/64/manual_time",
            "value": 167436124.99999973,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 972656250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/256/manual_time",
            "value": 119661.31722260058,
            "unit": "ns/iter",
            "extra": "iterations: 5876\ncpu: 305799.0129339687 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/256/manual_time",
            "value": 399290.3483723592,
            "unit": "ns/iter",
            "extra": "iterations: 1751\ncpu: 2810893.7749857223 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/256/manual_time",
            "value": 1805592.6630434773,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 20889945.652173914 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/256/manual_time",
            "value": 9717967.123287704,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 128424657.53424658 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/256/manual_time",
            "value": 69612710,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 715625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/256/manual_time",
            "value": 743751400.0000006,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3953125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1000/manual_time",
            "value": 554479.7836938436,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 1403910.149750416 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1000/manual_time",
            "value": 1933627.8378378379,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 11655405.405405406 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1000/manual_time",
            "value": 9012172.972972982,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 86359797.2972973 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1000/manual_time",
            "value": 43532793.33333333,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 519791666.6666667 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1000/manual_time",
            "value": 293445700.00000024,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 2820312500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1000/manual_time",
            "value": 3003025299.999998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 16453125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1/manual_time",
            "value": 7860.4850260047915,
            "unit": "ns/iter",
            "extra": "iterations: 92861\ncpu: 8581.374312143957 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1/manual_time",
            "value": 27687.990780801447,
            "unit": "ns/iter",
            "extra": "iterations: 24731\ncpu: 28430.916663297077 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1/manual_time",
            "value": 112776.62296635538,
            "unit": "ns/iter",
            "extra": "iterations: 6331\ncpu: 113528.66845679987 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1/manual_time",
            "value": 460765.7894736852,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 461328.6264441592 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1/manual_time",
            "value": 1848779.1443850275,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 1838235.294117647 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1/manual_time",
            "value": 7617170.707070709,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 7575757.575757576 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/4/manual_time",
            "value": 7738.024415311698,
            "unit": "ns/iter",
            "extra": "iterations: 88551\ncpu: 8293.243441632505 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/4/manual_time",
            "value": 28885.589905363548,
            "unit": "ns/iter",
            "extra": "iterations: 23775\ncpu: 29574.132492113564 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/4/manual_time",
            "value": 115965.43369407202,
            "unit": "ns/iter",
            "extra": "iterations: 6191\ncpu: 116095.9457276692 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/4/manual_time",
            "value": 478908.9768976903,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 474422.4422442244 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/4/manual_time",
            "value": 1845950.938337802,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 1843163.5388739947 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/4/manual_time",
            "value": 7789995.604395606,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 7726648.351648352 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/16/manual_time",
            "value": 8113.706229052954,
            "unit": "ns/iter",
            "extra": "iterations: 86530\ncpu: 8667.51415693979 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/16/manual_time",
            "value": 32812.39117416622,
            "unit": "ns/iter",
            "extra": "iterations: 21709\ncpu: 33828.13579621355 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/16/manual_time",
            "value": 128548.29598945587,
            "unit": "ns/iter",
            "extra": "iterations: 5311\ncpu: 129448.31481830163 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/16/manual_time",
            "value": 529514.3928035988,
            "unit": "ns/iter",
            "extra": "iterations: 1334\ncpu: 527080.2098950525 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/16/manual_time",
            "value": 2131620.7317073164,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2143673.7804878047 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/16/manual_time",
            "value": 8892673.417721521,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 8900316.455696203 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/64/manual_time",
            "value": 11611.218151015883,
            "unit": "ns/iter",
            "extra": "iterations: 60206\ncpu: 12197.704547719497 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/64/manual_time",
            "value": 45483.85775582093,
            "unit": "ns/iter",
            "extra": "iterations: 15382\ncpu: 46726.69353790145 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/64/manual_time",
            "value": 180303.62451108187,
            "unit": "ns/iter",
            "extra": "iterations: 3835\ncpu: 179269.88265971316 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/64/manual_time",
            "value": 755066.8399168394,
            "unit": "ns/iter",
            "extra": "iterations: 962\ncpu: 763383.5758835758 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/64/manual_time",
            "value": 3067125.3333333316,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 3055555.5555555555 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/64/manual_time",
            "value": 12560957.894736845,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 12335526.315789474 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/256/manual_time",
            "value": 53786.77450760236,
            "unit": "ns/iter",
            "extra": "iterations: 13353\ncpu: 54997.004418482735 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/256/manual_time",
            "value": 226573.50508905912,
            "unit": "ns/iter",
            "extra": "iterations: 3144\ncpu: 228610.05089058523 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/256/manual_time",
            "value": 914627.1918678529,
            "unit": "ns/iter",
            "extra": "iterations: 787\ncpu: 913278.2719186785 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/256/manual_time",
            "value": 3782712.426035504,
            "unit": "ns/iter",
            "extra": "iterations: 169\ncpu: 3790680.473372781 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/256/manual_time",
            "value": 16300877.272727273,
            "unit": "ns/iter",
            "extra": "iterations: 44\ncpu: 16335227.272727273 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/256/manual_time",
            "value": 66443745.45454545,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 66761363.63636363 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1000/manual_time",
            "value": 256599.12184412725,
            "unit": "ns/iter",
            "extra": "iterations: 2733\ncpu: 257272.2283205269 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1000/manual_time",
            "value": 1078897.4320241683,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1085725.0755287008 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1000/manual_time",
            "value": 4374700,
            "unit": "ns/iter",
            "extra": "iterations: 162\ncpu: 4340277.777777778 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1000/manual_time",
            "value": 18636316.216216218,
            "unit": "ns/iter",
            "extra": "iterations: 37\ncpu: 18581081.08108108 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1000/manual_time",
            "value": 73276080.00000001,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 73437500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1000/manual_time",
            "value": 292325550,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 289062500 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithSvcRef/manual_time",
            "value": 6790.264638505777,
            "unit": "ns/iter",
            "extra": "iterations: 104331\ncpu: 11232.279955142767 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithBundleContext/manual_time",
            "value": 8369.368109970907,
            "unit": "ns/iter",
            "extra": "iterations: 81549\ncpu: 13220.57903836957 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithInterfaceName/manual_time",
            "value": 8574.236749379399,
            "unit": "ns/iter",
            "extra": "iterations: 81166\ncpu: 13282.963309760244 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000",
            "value": 8789.200892854256,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8719.308035714286 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1024",
            "value": 8790.888879963411,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8789.023263289004 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/2048",
            "value": 8753.56473214493,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8719.308035714286 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/4096",
            "value": 9036.23325892714,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 9068.080357142857 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/8192",
            "value": 9068.315320021162,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9207.54818058848 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/16384",
            "value": 9082.073740739888,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9207.54818058848 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/32768",
            "value": 9121.612723218066,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 9242.466517857143 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/65536",
            "value": 9436.184659886978,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/131072",
            "value": 9620.050356918182,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9626.073097887956 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/262144",
            "value": 9963.721590526346,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 10044.598015187432 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/524288",
            "value": 9471.62187499373,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 9521.484375 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000000",
            "value": 15168.289062501117,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 15136.71875 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/1",
            "value": 36264.84320066621,
            "unit": "ns/iter",
            "extra": "iterations: 21333\ncpu: 36621.66596353068 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/4000",
            "value": 24918664.285710942,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 24553571.42857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/10000",
            "value": 67487063.6363597,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 66761363.63636363 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/1",
            "value": 37206.40345708133,
            "unit": "ns/iter",
            "extra": "iterations: 20364\ncpu: 36829.699469652325 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/4000",
            "value": 152558216.66664815,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 153645833.33333334 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/10000",
            "value": 368493650.00011855,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 375000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/1",
            "value": 33243.77678570808,
            "unit": "ns/iter",
            "extra": "iterations: 22400\ncpu: 33482.142857142855 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/4000",
            "value": 11779696.874995694,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 11718750 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/10000",
            "value": 34460138.09523374,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 34970238.0952381 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/1",
            "value": 578.6418000002413,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 578.125 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/3",
            "value": 1727.7882403206931,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1726.4218349853784 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/7",
            "value": 3928.531020481521,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3934.1447604557848 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/11",
            "value": 6268.252678572545,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/15",
            "value": 8326.338275272703,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8161.235887339789 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/18",
            "value": 10166.059972945013,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 10253.86047383717 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/20",
            "value": 11558.80937500342,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11474.609375 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/1",
            "value": 6823.732142854462,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6835.9375 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/3",
            "value": 9758.307812504085,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 9765.625 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/7",
            "value": 15439.120535713104,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 15694.754464285714 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/11",
            "value": 21500.510707443143,
            "unit": "ns/iter",
            "extra": "iterations: 34462\ncpu: 21763.101387034996 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/15",
            "value": 27162.147936836976,
            "unit": "ns/iter",
            "extra": "iterations: 24889\ncpu: 26994.857165816225 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/18",
            "value": 31350.705357157593,
            "unit": "ns/iter",
            "extra": "iterations: 22400\ncpu: 31389.508928571428 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/20",
            "value": 33945.89962680511,
            "unit": "ns/iter",
            "extra": "iterations: 20364\ncpu: 34527.84325279906 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/1",
            "value": 881.5873742911886,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 878.9058576313136 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/3",
            "value": 2413.6039285719694,
            "unit": "ns/iter",
            "extra": "iterations: 280000\ncpu: 2455.3571428571427 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/7",
            "value": 5354.255357141418,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5301.339285714285 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/11",
            "value": 8355.924107143712,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8370.535714285714 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/15",
            "value": 11482.4203124968,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11474.609375 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/18",
            "value": 14169.671340760151,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 14439.109646831934 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/20",
            "value": 15590.852678570855,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 16043.526785714286 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/1",
            "value": 592.2233928572496,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 585.9375 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/3",
            "value": 2147.9513973758535,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2144.9473828712244 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/7",
            "value": 5207.721000001584,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/11",
            "value": 8177.186708985699,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8161.235887339789 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/15",
            "value": 11277.56718750561,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11230.46875 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/18",
            "value": 13527.948089518968,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 13497.428582908113 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/20",
            "value": 14942.394230385491,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 15066.897022781148 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/BundleInstallCppFramework/manual_time",
            "value": 426788.83374689805,
            "unit": "ns/iter",
            "extra": "iterations: 1612\ncpu: 465260.5459057072 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/LargeBundleInstallCppFramework/manual_time",
            "value": 419939.18128654896,
            "unit": "ns/iter",
            "extra": "iterations: 1710\ncpu: 466008.77192982455 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterFromString",
            "value": 874.2045758930926,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 871.9308035714286 ns\nthreads: 1"
          },
          {
            "name": "ConstructNonTrivialFilterFromString",
            "value": 1328.5189381612302,
            "unit": "ns/iter",
            "extra": "iterations: 497778\ncpu: 1318.3587864469703 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Simple",
            "value": 590.5202678572356,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 599.8883928571429 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Complex",
            "value": 654.8824107142082,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 655.6919642857143 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Simple",
            "value": 278.5974164552373,
            "unit": "ns/iter",
            "extra": "iterations: 2635294\ncpu: 278.6690972620133 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Complex",
            "value": 457.1216868576979,
            "unit": "ns/iter",
            "extra": "iterations: 1493333\ncpu: 460.3795670490105 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Simple",
            "value": 241.41821428559393,
            "unit": "ns/iter",
            "extra": "iterations: 2800000\ncpu: 239.95535714285714 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Complex",
            "value": 299.03834821425335,
            "unit": "ns/iter",
            "extra": "iterations: 2240000\ncpu: 299.94419642857144 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterIncremental",
            "value": 3056.424599960342,
            "unit": "ns/iter",
            "extra": "iterations: 235789\ncpu: 3048.276213054892 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterNotOperator",
            "value": 1258.7523214278917,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1255.580357142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByInterface",
            "value": 1443.246607142815,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1450.892857142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByClassName",
            "value": 1255.833571428866,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1255.580357142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterface",
            "value": 1197.9807142852549,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1199.7767857142858 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassName",
            "value": 886.6339285716102,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 871.9308035714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassNameAndLDAPFilter",
            "value": 1003.0609361336269,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 1004.4638372929297 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterfaceAndLDAPFilter",
            "value": 924.3703016200524,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 920.7585175185189 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}