window.BENCHMARK_DATA = {
  "lastUpdate": 1691744397404,
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
          "id": "f00ad95aaf686c8c0a6cc1804c7d7855d0e8482d",
          "message": "ComponentManagermemory reallocation bug fix (#834) (#892)\n\n* ComponentManagermemory reallocation bug fix\r\n\r\nThe ComponentManagerImpl object contained a shared_ptr to the vector of all ComponentManagerImpl objects. When adding an item to this vector, the resizing of the vector caused a memory allocation error. Fixed by removing the vector from the ComponentManagerImpl object.\r\n\r\n* Fix for ConfigurationNotifier::CreateFactoryComponent memory allocation error\r\n\r\nWhen a ComponentManager is created, it must be added to the managers map in SCRBundleExtension. This is necessary so that when the bundle is stopped, the ComponentManager can be destroyed.\r\nThe old code was holding a shared_ptr to the managers map in the ComponentManagerImpl object. This caused a memory reallocation error when a ComponentManager was added to the map and the map needed to be resized.\r\nThis fix adds an AddComponentManager method to the SCRBundleExtension object so that CreateFactoryComponent can add a manager to the managers map when it is created. In order to find the SCRBundleExtension, the map of SCRBundleExtensions was moved out of SCRActivator and into a new class called SCRExtensionRegistry.\r\n\r\n* Rest of the ConfigurationNotifier fix\r\n\r\n\r\n\r\n* Fix errors in minimum gcc build\r\n\r\nSigned-off by: The MathWorks Inc. < pelliott@mathworks.com>\r\n\r\n* Responded to code review comments\r\n\r\nResponded to code review comments. Added tests for SCRBundleExtension and SCRExtensionRegistry. Signed off by - The MathWorks, Inc. <pelliott@mathworks.com>\r\n\r\n* Update ConfigurationNotifier.cpp\r\n\r\nUpdate error message. Signed off by The MathWorks, Inc. <pelliott@mathworks.com>\r\n\r\n* Update SCRExtensionRegistry.hpp\r\n\r\nFormatting issue. signed-off by The MathWorks, Inc. <pelliott@mathworks.com>\r\n\r\n* CreateFactoryComponent changes\r\n\r\nConfigurationNotifier::CreateFactoryComponent will log an exception if it can't find the SCRBundleExtension in the ExtensionRegistry instead of throwing a std::runtime_error exception. Signed-off-by: The MathWorks, Inc. <pelliott@mathworks.com>\r\n\r\n* Update ConfigurationNotifier.cpp\r\n\r\nFixed call to std::exception. Signed-off-by The MathWorks, Inc. <pelliott@mathworks.com>\r\n\r\n* Update ConfigurationNotifier.cpp\r\n\r\nRemoved throw in CreateFactoryComponent. Error message is already logged, no throw needed. Signed-off-by - The MathWorks, Inc. <pelliott@mathworks.com>\r\n\r\n---------\r\n\r\n\r\n\r\nAdapt implementation and test code to C++14:\r\n* move initialization statements out of if clause\r\n* adapt assignment construction in test code calling deleted move constructor\r\n\r\nSigned-off-by: Ingmar Sittl <ingmar.sittl@elektrobit.com>\r\nCo-authored-by: pelliott-mathworks <67922241+pelliott-mathworks@users.noreply.github.com>",
          "timestamp": "2023-08-07T08:36:20-04:00",
          "tree_id": "8f49cd116eb36c39f380ddf8baf8ea541f7d54d0",
          "url": "https://github.com/insi-eb/CppMicroServices-cpp14/commit/f00ad95aaf686c8c0a6cc1804c7d7855d0e8482d"
        },
        "date": 1691414668922,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1/manual_time",
            "value": 26853.813885198473,
            "unit": "ns/iter",
            "extra": "iterations: 28606\ncpu: 27310.704048101798 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1/manual_time",
            "value": 110203.44993968564,
            "unit": "ns/iter",
            "extra": "iterations: 8290\ncpu: 111203.25693606756 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1/manual_time",
            "value": 453619.30246542156,
            "unit": "ns/iter",
            "extra": "iterations: 1663\ncpu: 469783.52375225496 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1/manual_time",
            "value": 1763435.6521739163,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 1800271.7391304348 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1/manual_time",
            "value": 7133192.913385742,
            "unit": "ns/iter",
            "extra": "iterations: 127\ncpu: 7258858.267716535 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1/manual_time",
            "value": 30266170.370369464,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 31250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/4/manual_time",
            "value": 79103.80284130301,
            "unit": "ns/iter",
            "extra": "iterations: 11544\ncpu: 79857.50173250174 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/4/manual_time",
            "value": 310939.0809272062,
            "unit": "ns/iter",
            "extra": "iterations: 2459\ncpu: 317710.45140300936 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/4/manual_time",
            "value": 1192411.8131868136,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1223385.989010989 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/4/manual_time",
            "value": 4786735.94771247,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 4901960.784313725 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/4/manual_time",
            "value": 19260575.000000052,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 19531250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/4/manual_time",
            "value": 80072258.33333339,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 80729166.66666667 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/16/manual_time",
            "value": 242290.21045918379,
            "unit": "ns/iter",
            "extra": "iterations: 3136\ncpu: 244140.625 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/16/manual_time",
            "value": 1000284.0128755356,
            "unit": "ns/iter",
            "extra": "iterations: 932\ncpu: 1005901.2875536481 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/16/manual_time",
            "value": 4000287.9781420804,
            "unit": "ns/iter",
            "extra": "iterations: 183\ncpu: 4012978.1420765026 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/16/manual_time",
            "value": 16655116.666666655,
            "unit": "ns/iter",
            "extra": "iterations: 54\ncpu: 17071759.259259257 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/16/manual_time",
            "value": 63110290.00000004,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 64062500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/16/manual_time",
            "value": 250746466.6666666,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 255208333.33333334 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/64/manual_time",
            "value": 835769.2535107167,
            "unit": "ns/iter",
            "extra": "iterations: 1353\ncpu: 843033.9985218034 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/64/manual_time",
            "value": 3368471.0424710424,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3378378.378378378 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/64/manual_time",
            "value": 13407862.337662341,
            "unit": "ns/iter",
            "extra": "iterations: 77\ncpu: 13595779.220779222 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/64/manual_time",
            "value": 50704299.999999985,
            "unit": "ns/iter",
            "extra": "iterations: 14\ncpu: 50223214.28571428 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/64/manual_time",
            "value": 201790525.0000001,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 203125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/64/manual_time",
            "value": 800614799.9999995,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 812500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/256/manual_time",
            "value": 2776249.122807016,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2832602.3391812867 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/256/manual_time",
            "value": 11333164.70588235,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 11488970.588235294 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/256/manual_time",
            "value": 44198052.63157897,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 44407894.7368421 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/256/manual_time",
            "value": 179608383.3333334,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 182291666.66666666 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/256/manual_time",
            "value": 656367300.0000006,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 656250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/256/manual_time",
            "value": 3319792899.9999967,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3359375000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1000/manual_time",
            "value": 8071067,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 8281250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1000/manual_time",
            "value": 33548607.407407396,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 34722222.222222224 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1000/manual_time",
            "value": 140861133.3333333,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 144097222.2222222 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1000/manual_time",
            "value": 540434000,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 546875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1000/manual_time",
            "value": 2601464599.9999986,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2656250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1000/manual_time",
            "value": 13203122599.999994,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 13421875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1/manual_time",
            "value": 26473.1124161076,
            "unit": "ns/iter",
            "extra": "iterations: 28608\ncpu: 27308.794742729307 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1/manual_time",
            "value": 182226.62681854243,
            "unit": "ns/iter",
            "extra": "iterations: 8867\ncpu: 183263.78707567384 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1/manual_time",
            "value": 565726.5000000023,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1/manual_time",
            "value": 3081300.7042253646,
            "unit": "ns/iter",
            "extra": "iterations: 426\ncpu: 3117664.3192488262 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1/manual_time",
            "value": 14092973.770491913,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 14344262.295081967 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1/manual_time",
            "value": 44356927.27272708,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 44744318.18181818 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/4/manual_time",
            "value": 69934.03574087864,
            "unit": "ns/iter",
            "extra": "iterations: 13430\ncpu: 70969.843633656 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/4/manual_time",
            "value": 355921.554364471,
            "unit": "ns/iter",
            "extra": "iterations: 2612\ncpu: 358920.36753445637 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/4/manual_time",
            "value": 1657544.3456162554,
            "unit": "ns/iter",
            "extra": "iterations: 787\ncpu: 1667725.540025413 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/4/manual_time",
            "value": 5193692.000000002,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5312500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/4/manual_time",
            "value": 25359478.04878046,
            "unit": "ns/iter",
            "extra": "iterations: 41\ncpu: 25533536.585365854 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/4/manual_time",
            "value": 98664899.99999996,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 98437500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/16/manual_time",
            "value": 225733.5687126563,
            "unit": "ns/iter",
            "extra": "iterations: 3682\ncpu: 229155.350353069 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/16/manual_time",
            "value": 1035128.4403669757,
            "unit": "ns/iter",
            "extra": "iterations: 1090\ncpu: 1046444.9541284404 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/16/manual_time",
            "value": 4074756.1576354615,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4156403.9408866996 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/16/manual_time",
            "value": 17499090.476190474,
            "unit": "ns/iter",
            "extra": "iterations: 63\ncpu: 17609126.984126985 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/16/manual_time",
            "value": 66241530.00000026,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 67187500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/16/manual_time",
            "value": 256864299.99999988,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 257812500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/64/manual_time",
            "value": 758583.1000000007,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 734375 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/64/manual_time",
            "value": 2914637.2413793085,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 2963362.0689655175 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/64/manual_time",
            "value": 12972585.714285705,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 13206845.238095239 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/64/manual_time",
            "value": 48405962.50000002,
            "unit": "ns/iter",
            "extra": "iterations: 16\ncpu: 48828125 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/64/manual_time",
            "value": 189257275.0000001,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 187500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/64/manual_time",
            "value": 747672799.9999999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 750000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/256/manual_time",
            "value": 2601632.707774799,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2680965.147453083 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/256/manual_time",
            "value": 9779780.000000006,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 9843750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/256/manual_time",
            "value": 38897652.380952395,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 39434523.809523806 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/256/manual_time",
            "value": 167236342.85714296,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 169642857.14285713 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/256/manual_time",
            "value": 623310900.0000002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 625000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/256/manual_time",
            "value": 2968547400.000001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3015625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1000/manual_time",
            "value": 7408451.000000003,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1000/manual_time",
            "value": 29180512.121212132,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 29829545.454545453 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1000/manual_time",
            "value": 127777218.18181816,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 130681818.18181819 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1000/manual_time",
            "value": 479554450.0000001,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 492187500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1000/manual_time",
            "value": 2261441600.0000014,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2312500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1000/manual_time",
            "value": 11929258900.000011,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 12156250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1",
            "value": 1693.6249149831872,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1688.0569053190366 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1",
            "value": 2572.712499999495,
            "unit": "ns/iter",
            "extra": "iterations: 280000\ncpu: 2566.964285714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1",
            "value": 5892.725892857292,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1",
            "value": 19852.434374996617,
            "unit": "ns/iter",
            "extra": "iterations: 32000\ncpu: 19531.25 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1",
            "value": 62947.790178569114,
            "unit": "ns/iter",
            "extra": "iterations: 8960\ncpu: 62779.017857142855 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1",
            "value": 233240.8436558686,
            "unit": "ns/iter",
            "extra": "iterations: 2987\ncpu: 235395.04519584868 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/4",
            "value": 6607.157366071346,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6626.674107142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/4",
            "value": 9969.149999999872,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10009.765625 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/4",
            "value": 22691.930893621007,
            "unit": "ns/iter",
            "extra": "iterations: 29867\ncpu: 22495.56366558409 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/4",
            "value": 80319.30803569866,
            "unit": "ns/iter",
            "extra": "iterations: 8960\ncpu: 80217.63392857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/4",
            "value": 261044.89285712264,
            "unit": "ns/iter",
            "extra": "iterations: 2800\ncpu: 262276.78571428574 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/4",
            "value": 944401.3386880204,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 941265.0602409638 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/16",
            "value": 25859.099999999155,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 25669.64285714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/16",
            "value": 40625.528837457474,
            "unit": "ns/iter",
            "extra": "iterations: 16593\ncpu: 40491.47230759959 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/16",
            "value": 93242.5338154525,
            "unit": "ns/iter",
            "extra": "iterations: 7467\ncpu: 94164.32302129369 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/16",
            "value": 315462.8683694071,
            "unit": "ns/iter",
            "extra": "iterations: 2036\ncpu: 314648.82121807465 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/16",
            "value": 1001318.2061579128,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 1004016.0642570282 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/16",
            "value": 3782924.5989306075,
            "unit": "ns/iter",
            "extra": "iterations: 187\ncpu: 3760026.7379679144 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/64",
            "value": 113810.21428572272,
            "unit": "ns/iter",
            "extra": "iterations: 5600\ncpu: 111607.14285714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/64",
            "value": 172923.8644733831,
            "unit": "ns/iter",
            "extra": "iterations: 4073\ncpu: 172630.73901301253 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/64",
            "value": 382931.5479378173,
            "unit": "ns/iter",
            "extra": "iterations: 1867\ncpu: 384975.8971612212 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/64",
            "value": 1165468.1250000466,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1147460.9375 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/64",
            "value": 4024268.072289104,
            "unit": "ns/iter",
            "extra": "iterations: 166\ncpu: 4047439.7590361447 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/64",
            "value": 16242555.555557678,
            "unit": "ns/iter",
            "extra": "iterations: 45\ncpu: 16319444.444444444 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/256",
            "value": 468293.9048895294,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 470947.75619557936 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/256",
            "value": 776053.9491298298,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 773929.0495314592 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/256",
            "value": 1695393.2975871214,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 1717493.2975871314 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/256",
            "value": 5643511.999999192,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/256",
            "value": 18960386.4864878,
            "unit": "ns/iter",
            "extra": "iterations: 37\ncpu: 19003378.37837838 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/256",
            "value": 73082999.9999969,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 72916666.66666667 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1000",
            "value": 1860234.0482572797,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 1843163.5388739947 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1000",
            "value": 2900398.7288132966,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 2913135.593220339 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1000",
            "value": 6838878.666667369,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 7083333.333333333 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1000",
            "value": 22459253.333333135,
            "unit": "ns/iter",
            "extra": "iterations: 30\ncpu: 22395833.333333332 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1000",
            "value": 83044422.22222658,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 83333333.33333333 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1000",
            "value": 298983700.0000079,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 296875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1/manual_time",
            "value": 2875.33632659789,
            "unit": "ns/iter",
            "extra": "iterations: 240317\ncpu: 8517.395773083053 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1/manual_time",
            "value": 11487.265271219563,
            "unit": "ns/iter",
            "extra": "iterations: 63158\ncpu: 44283.780360366065 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1/manual_time",
            "value": 47111.052183562264,
            "unit": "ns/iter",
            "extra": "iterations: 15273\ncpu: 222001.2440254043 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1/manual_time",
            "value": 200807.4547073405,
            "unit": "ns/iter",
            "extra": "iterations: 3367\ncpu: 1071985.446985447 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1/manual_time",
            "value": 1069742.5036388417,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 5481259.097525473 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1/manual_time",
            "value": 7526849.462365199,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 27553763.440860216 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/4/manual_time",
            "value": 3644.195572965102,
            "unit": "ns/iter",
            "extra": "iterations: 189924\ncpu: 10695.067500684485 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/4/manual_time",
            "value": 13509.700917291339,
            "unit": "ns/iter",
            "extra": "iterations: 51892\ncpu: 72566.5805904571 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/4/manual_time",
            "value": 58103.90763765905,
            "unit": "ns/iter",
            "extra": "iterations: 12949\ncpu: 459736.27307127963 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/4/manual_time",
            "value": 259268.81206322773,
            "unit": "ns/iter",
            "extra": "iterations: 2719\ncpu: 2557236.1162191983 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/4/manual_time",
            "value": 1577238.194444413,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 13671875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/4/manual_time",
            "value": 13657845.098039187,
            "unit": "ns/iter",
            "extra": "iterations: 51\ncpu: 71078431.37254901 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/16/manual_time",
            "value": 6021.191359171047,
            "unit": "ns/iter",
            "extra": "iterations: 107860\ncpu: 17528.509178564807 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/16/manual_time",
            "value": 21519.160073037525,
            "unit": "ns/iter",
            "extra": "iterations: 32860\ncpu: 183068.32014607426 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/16/manual_time",
            "value": 96347.95337129524,
            "unit": "ns/iter",
            "extra": "iterations: 7549\ncpu: 1386773.082527487 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/16/manual_time",
            "value": 490141.2952646216,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 8400069.637883008 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/16/manual_time",
            "value": 3765245.4054054525,
            "unit": "ns/iter",
            "extra": "iterations: 185\ncpu: 47297297.2972973 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/16/manual_time",
            "value": 41154994.117647216,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 256433823.52941176 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/64/manual_time",
            "value": 17273.737373736352,
            "unit": "ns/iter",
            "extra": "iterations: 38610\ncpu: 47348.48484848485 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/64/manual_time",
            "value": 54138.452144715644,
            "unit": "ns/iter",
            "extra": "iterations: 13102\ncpu: 620134.330636544 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/64/manual_time",
            "value": 234371.6137836887,
            "unit": "ns/iter",
            "extra": "iterations: 2931\ncpu: 4872483.793926988 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/64/manual_time",
            "value": 1360827.9693486637,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 30441810.344827585 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/64/manual_time",
            "value": 11917125.45454546,
            "unit": "ns/iter",
            "extra": "iterations: 55\ncpu: 175284090.9090909 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/64/manual_time",
            "value": 143116859.99999994,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 978125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/256/manual_time",
            "value": 103334.3944436404,
            "unit": "ns/iter",
            "extra": "iterations: 6911\ncpu: 266784.8357690638 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/256/manual_time",
            "value": 350288.7992406265,
            "unit": "ns/iter",
            "extra": "iterations: 2107\ncpu: 2825403.417180826 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/256/manual_time",
            "value": 1440691.789473678,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 20888157.89473684 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/256/manual_time",
            "value": 7855372.727272746,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 129971590.9090909 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/256/manual_time",
            "value": 60723225.00000005,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 735677083.3333334 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/256/manual_time",
            "value": 595407999.9999985,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4078125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1000/manual_time",
            "value": 485580.7245386193,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 1238892.6862611072 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1000/manual_time",
            "value": 1656880.8035714289,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 11753627.232142856 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1000/manual_time",
            "value": 7011044.565217379,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 86277173.91304348 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1000/manual_time",
            "value": 38898899.999999985,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 525173611.1111111 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1000/manual_time",
            "value": 266109666.6666666,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2932291666.6666665 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1000/manual_time",
            "value": 2682840999.9999967,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 16296875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1/manual_time",
            "value": 8006.559515849948,
            "unit": "ns/iter",
            "extra": "iterations: 91211\ncpu: 8565.304623345868 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1/manual_time",
            "value": 29009.97504258476,
            "unit": "ns/iter",
            "extra": "iterations: 25243\ncpu: 29092.223586736916 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1/manual_time",
            "value": 112816.98219043633,
            "unit": "ns/iter",
            "extra": "iterations: 7131\ncpu: 113939.13897069135 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1/manual_time",
            "value": 427311.6677235259,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 426046.29042485735 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1/manual_time",
            "value": 2025647.1938775498,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2032844.387755102 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1/manual_time",
            "value": 7390263.809523807,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 7291666.666666667 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/4/manual_time",
            "value": 7201.752463225814,
            "unit": "ns/iter",
            "extra": "iterations: 93069\ncpu: 7722.7648303946535 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/4/manual_time",
            "value": 28573.60960560224,
            "unit": "ns/iter",
            "extra": "iterations: 23986\ncpu: 29313.97481864421 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/4/manual_time",
            "value": 117253.60440628583,
            "unit": "ns/iter",
            "extra": "iterations: 6173\ncpu: 118965.65689292079 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/4/manual_time",
            "value": 459523.81974249054,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 458243.9198855508 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/4/manual_time",
            "value": 1936219.3370165753,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 1942334.2541436465 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/4/manual_time",
            "value": 7464312.244897958,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 7493622.448979592 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/16/manual_time",
            "value": 7857.07683910817,
            "unit": "ns/iter",
            "extra": "iterations: 82445\ncpu: 8528.412881314816 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/16/manual_time",
            "value": 31904.532028797963,
            "unit": "ns/iter",
            "extra": "iterations: 21668\ncpu: 32449.92615839025 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/16/manual_time",
            "value": 129124.17116422635,
            "unit": "ns/iter",
            "extra": "iterations: 5188\ncpu: 129505.5898226677 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/16/manual_time",
            "value": 501918.3939601915,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 504032.2580645161 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/16/manual_time",
            "value": 2023651.7027863776,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 1934984.520123839 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/16/manual_time",
            "value": 8283103.44827586,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 8261494.252873563 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/64/manual_time",
            "value": 11537.26227861498,
            "unit": "ns/iter",
            "extra": "iterations: 62731\ncpu: 11955.811321356266 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/64/manual_time",
            "value": 44875.73753142077,
            "unit": "ns/iter",
            "extra": "iterations: 15118\ncpu: 45475.59200952507 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/64/manual_time",
            "value": 177389.68757937482,
            "unit": "ns/iter",
            "extra": "iterations: 3937\ncpu: 174625.3492506985 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/64/manual_time",
            "value": 721312.0073327237,
            "unit": "ns/iter",
            "extra": "iterations: 1091\ncpu: 716086.1594867094 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/64/manual_time",
            "value": 3070022.362869199,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3098628.6919831224 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/64/manual_time",
            "value": 11382909.090909094,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 11363636.363636363 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/256/manual_time",
            "value": 51622.11999999896,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51562.5 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/256/manual_time",
            "value": 209662.58763543653,
            "unit": "ns/iter",
            "extra": "iterations: 3138\ncpu: 209130.0191204589 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/256/manual_time",
            "value": 875682.013574661,
            "unit": "ns/iter",
            "extra": "iterations: 884\ncpu: 866091.628959276 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/256/manual_time",
            "value": 3482454.716981133,
            "unit": "ns/iter",
            "extra": "iterations: 212\ncpu: 3464033.0188679243 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/256/manual_time",
            "value": 14452394.117647057,
            "unit": "ns/iter",
            "extra": "iterations: 51\ncpu: 14399509.80392157 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/256/manual_time",
            "value": 58596841.666666664,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 58593750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1000/manual_time",
            "value": 240708.0760095007,
            "unit": "ns/iter",
            "extra": "iterations: 2947\ncpu: 243892.09365456397 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1000/manual_time",
            "value": 968518.450704225,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 968309.8591549295 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1000/manual_time",
            "value": 3863302.94117647,
            "unit": "ns/iter",
            "extra": "iterations: 170\ncpu: 3860294.117647059 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1000/manual_time",
            "value": 15242549.999999994,
            "unit": "ns/iter",
            "extra": "iterations: 46\ncpu: 15625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1000/manual_time",
            "value": 64079519.999999985,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 64062500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1000/manual_time",
            "value": 263305133.33333334,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 260416666.66666666 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithSvcRef/manual_time",
            "value": 5825.7537950484775,
            "unit": "ns/iter",
            "extra": "iterations: 129445\ncpu: 10501.564370968365 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithBundleContext/manual_time",
            "value": 7299.447102819247,
            "unit": "ns/iter",
            "extra": "iterations: 99476\ncpu: 12251.69890224778 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithInterfaceName/manual_time",
            "value": 7238.301952989606,
            "unit": "ns/iter",
            "extra": "iterations: 85510\ncpu: 12059.99298327681 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000",
            "value": 7669.45758928423,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7672.991071428572 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1024",
            "value": 7577.627232144834,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7672.991071428572 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/2048",
            "value": 7566.829241072119,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7672.991071428572 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/4096",
            "value": 7575.856026785946,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7498.604910714285 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/8192",
            "value": 7974.460937500031,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/16384",
            "value": 7777.377232141955,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7847.377232142857 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/32768",
            "value": 7874.159598212519,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7847.377232142857 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/65536",
            "value": 8810.320312499747,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8719.308035714286 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/131072",
            "value": 8705.52901785869,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8719.308035714286 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/262144",
            "value": 9047.205357143794,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 9068.080357142857 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/524288",
            "value": 8325.951223435797,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8370.498345989527 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000000",
            "value": 9244.766764432998,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9207.54818058848 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/1",
            "value": 30674.281811254037,
            "unit": "ns/iter",
            "extra": "iterations: 24889\ncpu: 30133.794045562296 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/4000",
            "value": 17712038.23529825,
            "unit": "ns/iter",
            "extra": "iterations: 34\ncpu: 17463235.29411765 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/10000",
            "value": 52082429.9999731,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 51562500 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/1",
            "value": 32417.38519025327,
            "unit": "ns/iter",
            "extra": "iterations: 24889\ncpu: 32017.15617340994 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/4000",
            "value": 124558166.66662638,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 125000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/10000",
            "value": 323156949.99988407,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 320312500 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/1",
            "value": 32039.736429755023,
            "unit": "ns/iter",
            "extra": "iterations: 24889\ncpu: 32017.15617340994 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/4000",
            "value": 10043307.999997826,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 10000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/10000",
            "value": 25301529.99999397,
            "unit": "ns/iter",
            "extra": "iterations: 30\ncpu: 25520833.333333332 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/1",
            "value": 692.1628571429242,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 697.5446428571429 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/3",
            "value": 1912.4334039582607,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1925.2249332365475 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/7",
            "value": 4458.30593371855,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4394.5410592434355 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/11",
            "value": 6975.915732515098,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 6905.66113544136 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/15",
            "value": 9569.244780156978,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9626.073097887956 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/18",
            "value": 11844.203571432185,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11718.75 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/20",
            "value": 13235.148057373244,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 13183.534894933504 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/1",
            "value": 6876.841517861213,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6801.060267857143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/3",
            "value": 10012.290624999308,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10009.765625 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/7",
            "value": 15852.165178569878,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 16043.526785714286 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/11",
            "value": 22521.681249997982,
            "unit": "ns/iter",
            "extra": "iterations: 32000\ncpu: 22460.9375 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/15",
            "value": 26916.10822297624,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 26681.02303343073 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/18",
            "value": 31834.181784092158,
            "unit": "ns/iter",
            "extra": "iterations: 21333\ncpu: 31494.632728636385 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/20",
            "value": 36017.58495383996,
            "unit": "ns/iter",
            "extra": "iterations: 20364\ncpu: 36062.41406403457 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/1",
            "value": 1029.0512370304682,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 1025.3901672365325 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/3",
            "value": 2849.323192266094,
            "unit": "ns/iter",
            "extra": "iterations: 248889\ncpu: 2825.054542386365 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/7",
            "value": 5983.761607142566,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5998.883928571428 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/11",
            "value": 9109.889241566858,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9207.54818058848 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/15",
            "value": 12549.430357150219,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12555.80357142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/18",
            "value": 14995.515625000979,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 14997.20982142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/20",
            "value": 16181.683035715163,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 16392.29910714286 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/1",
            "value": 692.2613392853399,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 697.5446428571429 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/3",
            "value": 2374.328749999677,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2392.578125 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/7",
            "value": 5653.153571427895,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/11",
            "value": 8794.129936917841,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8789.023263289004 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/15",
            "value": 12220.33035714633,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11997.767857142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/18",
            "value": 14604.285714290605,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 14299.66517857143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/20",
            "value": 16591.151785710117,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 16741.071428571428 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/BundleInstallCppFramework/manual_time",
            "value": 269461.79337231896,
            "unit": "ns/iter",
            "extra": "iterations: 2565\ncpu: 298489.2787524366 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/LargeBundleInstallCppFramework/manual_time",
            "value": 278469.7790746149,
            "unit": "ns/iter",
            "extra": "iterations: 2399\ncpu: 306117.13213839097 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterFromString",
            "value": 783.3207589286977,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 784.7377232142857 ns\nthreads: 1"
          },
          {
            "name": "ConstructNonTrivialFilterFromString",
            "value": 1178.1850000001473,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1171.875 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Simple",
            "value": 496.43991071418117,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 488.28125 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Complex",
            "value": 570.7243000001654,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 578.125 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Simple",
            "value": 261.46992857141936,
            "unit": "ns/iter",
            "extra": "iterations: 2800000\ncpu: 262.2767857142857 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Complex",
            "value": 456.2913749998643,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 458.984375 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Simple",
            "value": 207.5690755549284,
            "unit": "ns/iter",
            "extra": "iterations: 3446154\ncpu: 208.56583890331078 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Complex",
            "value": 267.7622307036158,
            "unit": "ns/iter",
            "extra": "iterations: 2635294\ncpu: 266.81083780405527 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterIncremental",
            "value": 2492.392857142737,
            "unit": "ns/iter",
            "extra": "iterations: 280000\ncpu: 2511.160714285714 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterNotOperator",
            "value": 1085.535000000196,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1088.169642857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByInterface",
            "value": 1237.1464285714799,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1227.6785714285713 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByClassName",
            "value": 1065.8137500001885,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1049.8046875 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterface",
            "value": 1024.12468749975,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1025.390625 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassName",
            "value": 760.0280357142504,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 767.2991071428571 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassNameAndLDAPFilter",
            "value": 867.2641741068584,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 871.9308035714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterfaceAndLDAPFilter",
            "value": 787.7565848214577,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 784.7377232142857 ns\nthreads: 1"
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
          "id": "31346d2f27fedcfc8943a11330340b26321979a4",
          "message": "Default any map type (#844) (#893)\n\n* Fixed undefined behavior in Any::operator==(value)\r\n\r\n* Revert \"Fixed undefined behavior in Any::operator==(value)\"\r\n\r\nThis reverts commit 3066fe1128da0aad1215e811be7ddf211b56be77.\r\n\r\n* Default AnyMap(map_type) constructor\r\n\r\nto UNORDERED_MAP_CASINSENSITIVE_KEYS\r\n\r\nCo-authored-by: carneyweb <mike@carneyweb.com>",
          "timestamp": "2023-08-07T09:51:41-04:00",
          "tree_id": "677b7d4a7ffabcdf648a22372765277d21f0d621",
          "url": "https://github.com/insi-eb/CppMicroServices-cpp14/commit/31346d2f27fedcfc8943a11330340b26321979a4"
        },
        "date": 1691419203610,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1/manual_time",
            "value": 22778.06074163377,
            "unit": "ns/iter",
            "extra": "iterations: 34869\ncpu: 23301.49989962431 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1/manual_time",
            "value": 92026.90665039881,
            "unit": "ns/iter",
            "extra": "iterations: 9834\ncpu: 92154.76916819198 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1/manual_time",
            "value": 363750.65789474803,
            "unit": "ns/iter",
            "extra": "iterations: 2128\ncpu: 367128.75939849624 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1/manual_time",
            "value": 1459434.974533149,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1485568.7606112054 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1/manual_time",
            "value": 5518234.000000031,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1/manual_time",
            "value": 22638327.777778752,
            "unit": "ns/iter",
            "extra": "iterations: 36\ncpu: 23003472.222222224 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/4/manual_time",
            "value": 59214.03999999963,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60937.5 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/4/manual_time",
            "value": 247413.66666666706,
            "unit": "ns/iter",
            "extra": "iterations: 3300\ncpu: 246212.12121212122 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/4/manual_time",
            "value": 987224.6471226879,
            "unit": "ns/iter",
            "extra": "iterations: 921\ncpu: 1000950.0542888165 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/4/manual_time",
            "value": 3881792.7835051497,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 3946520.618556701 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/4/manual_time",
            "value": 15655509.259259166,
            "unit": "ns/iter",
            "extra": "iterations: 54\ncpu: 15914351.851851853 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/4/manual_time",
            "value": 59470040.00000008,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 60937500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/16/manual_time",
            "value": 195345.36909674492,
            "unit": "ns/iter",
            "extra": "iterations: 4362\ncpu: 197013.98441082073 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/16/manual_time",
            "value": 796736.8670886044,
            "unit": "ns/iter",
            "extra": "iterations: 1264\ncpu: 803500.7911392405 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/16/manual_time",
            "value": 3076982.745098032,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/16/manual_time",
            "value": 12614632.876712302,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 12842465.753424658 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/16/manual_time",
            "value": 49013186.666666515,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 50000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/16/manual_time",
            "value": 191765149.99999997,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 191406250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/64/manual_time",
            "value": 617124.3000000004,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/64/manual_time",
            "value": 2598314.0672782855,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2628058.1039755354 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/64/manual_time",
            "value": 10641179.797979828,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10732323.232323233 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/64/manual_time",
            "value": 40753063.157894745,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 41118421.05263158 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/64/manual_time",
            "value": 170281616.6666669,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 174479166.66666666 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/64/manual_time",
            "value": 613554299.9999998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 625000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/256/manual_time",
            "value": 2193244.954128442,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 2257740.8256880734 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/256/manual_time",
            "value": 9082077.536231885,
            "unit": "ns/iter",
            "extra": "iterations: 138\ncpu: 9171195.652173912 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/256/manual_time",
            "value": 34433962.5,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 35156250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/256/manual_time",
            "value": 143123987.49999994,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 144531250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/256/manual_time",
            "value": 512683999.9999998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 515625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/256/manual_time",
            "value": 2492210999.9999995,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2531250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1000/manual_time",
            "value": 6451537.999999999,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6718750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1000/manual_time",
            "value": 26977885.294117652,
            "unit": "ns/iter",
            "extra": "iterations: 34\ncpu: 28033088.23529412 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1000/manual_time",
            "value": 118035566.66666664,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 119791666.66666667 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1000/manual_time",
            "value": 430370350,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 437500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1000/manual_time",
            "value": 1973104000.0000005,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2015625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1000/manual_time",
            "value": 10050346899.999989,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10234375000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1/manual_time",
            "value": 23494.75985011986,
            "unit": "ns/iter",
            "extra": "iterations: 35228\ncpu: 23951.118428522765 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1/manual_time",
            "value": 146722.15868477573,
            "unit": "ns/iter",
            "extra": "iterations: 9793\ncpu: 148384.0498315123 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1/manual_time",
            "value": 529036.4764267991,
            "unit": "ns/iter",
            "extra": "iterations: 1612\ncpu: 533111.0421836228 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1/manual_time",
            "value": 2497714.5418326706,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 2521165.338645418 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1/manual_time",
            "value": 9700517.000000058,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 9843750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1/manual_time",
            "value": 38406553.57142817,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 39062500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/4/manual_time",
            "value": 59519.93000000011,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60937.5 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/4/manual_time",
            "value": 308075.1671442224,
            "unit": "ns/iter",
            "extra": "iterations: 3141\ncpu: 313395.41547277936 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/4/manual_time",
            "value": 1399313.4279476027,
            "unit": "ns/iter",
            "extra": "iterations: 916\ncpu: 1415802.401746725 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/4/manual_time",
            "value": 5110102.469135817,
            "unit": "ns/iter",
            "extra": "iterations: 162\ncpu: 5304783.950617284 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/4/manual_time",
            "value": 22763101.92307695,
            "unit": "ns/iter",
            "extra": "iterations: 52\ncpu: 22836538.46153846 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/4/manual_time",
            "value": 76939129.99999988,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 76562500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/16/manual_time",
            "value": 199022.8604382929,
            "unit": "ns/iter",
            "extra": "iterations: 4335\ncpu: 201845.44405997693 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/16/manual_time",
            "value": 888298.670605613,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 888570.9010339734 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/16/manual_time",
            "value": 3456233.7349397563,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3514056.2248995984 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/16/manual_time",
            "value": 14800886.486486452,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14991554.054054054 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/16/manual_time",
            "value": 50197169.999999985,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 50000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/16/manual_time",
            "value": 212235074.99999958,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 214843750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/64/manual_time",
            "value": 633843.4000000005,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 640625 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/64/manual_time",
            "value": 2559652.8571428573,
            "unit": "ns/iter",
            "extra": "iterations: 350\ncpu: 2589285.714285714 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/64/manual_time",
            "value": 10964198.019801982,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 10983910.89108911 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/64/manual_time",
            "value": 42166973.68421057,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 42763157.89473684 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/64/manual_time",
            "value": 175001583.33333328,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 177083333.33333334 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/64/manual_time",
            "value": 607582599.9999992,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 609375000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/256/manual_time",
            "value": 2181811.5740740737,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2242476.8518518517 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/256/manual_time",
            "value": 8143521.000000003,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 8281250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/256/manual_time",
            "value": 33966184.000000015,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 34375000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/256/manual_time",
            "value": 142273274.9999997,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 142578125 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/256/manual_time",
            "value": 500586000.0000002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 500000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/256/manual_time",
            "value": 2481044699.999999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2515625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1000/manual_time",
            "value": 6249412.999999999,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6406250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1000/manual_time",
            "value": 25730139.02439024,
            "unit": "ns/iter",
            "extra": "iterations: 41\ncpu: 26295731.707317073 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1000/manual_time",
            "value": 111484508.33333331,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 113281250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1000/manual_time",
            "value": 406142900.00000006,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 421875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1000/manual_time",
            "value": 1966429400.0000014,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2000000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1000/manual_time",
            "value": 9896584800.00001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10078125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1",
            "value": 1533.955133928495,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1534.5982142857142 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1",
            "value": 2285.698125000124,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2294.921875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1",
            "value": 5001.461000001655,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1",
            "value": 15774.310267855995,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 15694.754464285714 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1",
            "value": 55597.25000000526,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1",
            "value": 202184.5327915886,
            "unit": "ns/iter",
            "extra": "iterations: 3446\ncpu: 199506.67440510736 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/4",
            "value": 6100.219642856278,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/4",
            "value": 9124.314623596067,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9207.54818058848 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/4",
            "value": 19895.22138590263,
            "unit": "ns/iter",
            "extra": "iterations: 37333\ncpu: 19670.934561915732 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/4",
            "value": 62956.598214287034,
            "unit": "ns/iter",
            "extra": "iterations: 11200\ncpu: 64174.107142857145 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/4",
            "value": 221670.8125000366,
            "unit": "ns/iter",
            "extra": "iterations: 3200\ncpu: 219726.5625 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/4",
            "value": 880589.285714249,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 871930.8035714285 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/16",
            "value": 24878.223457327156,
            "unit": "ns/iter",
            "extra": "iterations: 29867\ncpu: 25111.326882512472 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/16",
            "value": 37253.69904108751,
            "unit": "ns/iter",
            "extra": "iterations: 18667\ncpu: 37666.73809396261 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/16",
            "value": 81575.0669642869,
            "unit": "ns/iter",
            "extra": "iterations: 8960\ncpu: 81961.49553571429 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/16",
            "value": 252486.92857141056,
            "unit": "ns/iter",
            "extra": "iterations: 2800\ncpu: 251116.07142857142 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/16",
            "value": 897578.8487281743,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 899431.0575635877 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/16",
            "value": 3253669.607842954,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 3216911.7647058824 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/64",
            "value": 98561.12227131486,
            "unit": "ns/iter",
            "extra": "iterations: 7467\ncpu: 98349.4040444623 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/64",
            "value": 148258.11570907797,
            "unit": "ns/iter",
            "extra": "iterations: 4978\ncpu: 153801.72760144636 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/64",
            "value": 422450.81374314445,
            "unit": "ns/iter",
            "extra": "iterations: 1659\ncpu: 423824.5931283906 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/64",
            "value": 1013443.9062500888,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1025390.625 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/64",
            "value": 3586618.9743582928,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 3525641.0256410255 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/64",
            "value": 13154400.00000308,
            "unit": "ns/iter",
            "extra": "iterations: 50\ncpu: 13125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/256",
            "value": 418904.1787579928,
            "unit": "ns/iter",
            "extra": "iterations: 1723\ncpu: 426218.8044109112 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/256",
            "value": 646849.7321429417,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 641741.0714285715 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/256",
            "value": 1474858.705356955,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 1464843.75 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/256",
            "value": 4733700.671140957,
            "unit": "ns/iter",
            "extra": "iterations: 149\ncpu: 4718959.731543624 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/256",
            "value": 16756392.682925541,
            "unit": "ns/iter",
            "extra": "iterations: 41\ncpu: 16768292.68292683 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/256",
            "value": 63888872.72727185,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 63920454.54545455 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1000",
            "value": 1677498.771498678,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 1689189.189189189 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1000",
            "value": 2648403.030302792,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 2604166.6666666665 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1000",
            "value": 6075303.5714274775,
            "unit": "ns/iter",
            "extra": "iterations: 112\ncpu: 5998883.928571428 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1000",
            "value": 19603438.235295095,
            "unit": "ns/iter",
            "extra": "iterations: 34\ncpu: 19761029.411764707 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1000",
            "value": 70471755.55554633,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 69444444.44444445 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1000",
            "value": 264308033.33331215,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 265625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1/manual_time",
            "value": 2616.806574548359,
            "unit": "ns/iter",
            "extra": "iterations: 266604\ncpu: 7618.977959820558 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1/manual_time",
            "value": 10244.932531979903,
            "unit": "ns/iter",
            "extra": "iterations: 67884\ncpu: 37978.389605798126 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1/manual_time",
            "value": 41806.29616396444,
            "unit": "ns/iter",
            "extra": "iterations: 16788\ncpu: 183352.69239933285 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1/manual_time",
            "value": 179175.98364851723,
            "unit": "ns/iter",
            "extra": "iterations: 3914\ncpu: 886241.6964741952 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1/manual_time",
            "value": 877624.623115257,
            "unit": "ns/iter",
            "extra": "iterations: 796\ncpu: 4239949.7487437185 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1/manual_time",
            "value": 6072809.482758225,
            "unit": "ns/iter",
            "extra": "iterations: 116\ncpu: 21821120.689655174 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/4/manual_time",
            "value": 3230.0194425809627,
            "unit": "ns/iter",
            "extra": "iterations: 219621\ncpu: 9177.74256560165 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/4/manual_time",
            "value": 11987.935643041104,
            "unit": "ns/iter",
            "extra": "iterations: 58362\ncpu: 60505.97991844008 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/4/manual_time",
            "value": 48629.28803702871,
            "unit": "ns/iter",
            "extra": "iterations: 14453\ncpu: 361084.2039714938 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/4/manual_time",
            "value": 226138.77749018816,
            "unit": "ns/iter",
            "extra": "iterations: 3092\ncpu: 2026398.7710219922 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/4/manual_time",
            "value": 1303551.6666664837,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 10792824.074074075 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/4/manual_time",
            "value": 11529373.770491825,
            "unit": "ns/iter",
            "extra": "iterations: 61\ncpu: 56352459.016393445 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/16/manual_time",
            "value": 5469.186997597494,
            "unit": "ns/iter",
            "extra": "iterations: 127761\ncpu: 15531.930714380758 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/16/manual_time",
            "value": 18236.76512761622,
            "unit": "ns/iter",
            "extra": "iterations: 38357\ncpu: 144204.4476888182 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/16/manual_time",
            "value": 76088.25514315281,
            "unit": "ns/iter",
            "extra": "iterations: 9187\ncpu: 1059581.4738217045 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/16/manual_time",
            "value": 403934.48275862803,
            "unit": "ns/iter",
            "extra": "iterations: 1740\ncpu: 6474497.126436782 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/16/manual_time",
            "value": 3027340.3508771844,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 35841557.01754386 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/16/manual_time",
            "value": 32362666.666666746,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 193452380.95238096 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/64/manual_time",
            "value": 14205.630330222926,
            "unit": "ns/iter",
            "extra": "iterations: 49482\ncpu: 38208.3383856756 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/64/manual_time",
            "value": 43360.007415193686,
            "unit": "ns/iter",
            "extra": "iterations: 16183\ncpu: 485656.24420688377 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/64/manual_time",
            "value": 183957.7075098947,
            "unit": "ns/iter",
            "extra": "iterations: 3795\ncpu: 3812582.345191041 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/64/manual_time",
            "value": 1109898.0891719959,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 23860469.74522293 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/64/manual_time",
            "value": 9921901.408450717,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 135783450.70422536 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/64/manual_time",
            "value": 115622683.33333336,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 739583333.3333334 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/256/manual_time",
            "value": 80321.16021468534,
            "unit": "ns/iter",
            "extra": "iterations: 8757\ncpu: 203408.70161014047 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/256/manual_time",
            "value": 258683.14855875963,
            "unit": "ns/iter",
            "extra": "iterations: 2706\ncpu: 2101810.7908351813 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/256/manual_time",
            "value": 1096034.6875000012,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 15991210.9375 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/256/manual_time",
            "value": 6037992.173913027,
            "unit": "ns/iter",
            "extra": "iterations: 115\ncpu: 99048913.04347827 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/256/manual_time",
            "value": 45133950.00000004,
            "unit": "ns/iter",
            "extra": "iterations: 16\ncpu: 552734375 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/256/manual_time",
            "value": 488968450.0000001,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 3031250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1000/manual_time",
            "value": 371386.50793650805,
            "unit": "ns/iter",
            "extra": "iterations: 1890\ncpu: 942460.3174603175 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1000/manual_time",
            "value": 1227406.8541300518,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 8622583.479789104 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1000/manual_time",
            "value": 5380182.307692309,
            "unit": "ns/iter",
            "extra": "iterations: 130\ncpu: 64302884.615384616 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1000/manual_time",
            "value": 28953370.833333313,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 399088541.6666667 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1000/manual_time",
            "value": 210928933.33333328,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2250000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1000/manual_time",
            "value": 2139892299.9999962,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 12562500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1/manual_time",
            "value": 5719.578298233451,
            "unit": "ns/iter",
            "extra": "iterations: 120322\ncpu: 6233.2740479712775 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1/manual_time",
            "value": 22311.972724388754,
            "unit": "ns/iter",
            "extra": "iterations: 31530\ncpu: 22795.750079289566 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1/manual_time",
            "value": 91261.10752549351,
            "unit": "ns/iter",
            "extra": "iterations: 7747\ncpu: 90760.93971860076 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1/manual_time",
            "value": 370370.31938325963,
            "unit": "ns/iter",
            "extra": "iterations: 1816\ncpu: 369975.2202643172 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1/manual_time",
            "value": 1513459.0809627995,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 1504376.3676148797 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1/manual_time",
            "value": 5815204.800000001,
            "unit": "ns/iter",
            "extra": "iterations: 125\ncpu: 5750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/4/manual_time",
            "value": 6032.685148575378,
            "unit": "ns/iter",
            "extra": "iterations: 121416\ncpu: 6563.179482111089 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/4/manual_time",
            "value": 22830.31865354262,
            "unit": "ns/iter",
            "extra": "iterations: 30064\ncpu: 23387.60643959553 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/4/manual_time",
            "value": 101774.44540478216,
            "unit": "ns/iter",
            "extra": "iterations: 6942\ncpu: 101285.6525496975 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/4/manual_time",
            "value": 386978.67324561405,
            "unit": "ns/iter",
            "extra": "iterations: 1824\ncpu: 385485.19736842107 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/4/manual_time",
            "value": 1532473.1707317063,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 1524390.243902439 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/4/manual_time",
            "value": 5841279.67479675,
            "unit": "ns/iter",
            "extra": "iterations: 123\ncpu: 5843495.934959349 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/16/manual_time",
            "value": 6451.008198540127,
            "unit": "ns/iter",
            "extra": "iterations: 108312\ncpu: 6924.440505207179 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/16/manual_time",
            "value": 27917.720040281336,
            "unit": "ns/iter",
            "extra": "iterations: 24825\ncpu: 28323.262839879153 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/16/manual_time",
            "value": 101052.09034792407,
            "unit": "ns/iter",
            "extra": "iterations: 7128\ncpu: 100834.73625140292 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/16/manual_time",
            "value": 417801.3674197387,
            "unit": "ns/iter",
            "extra": "iterations: 1682\ncpu: 408739.5957193817 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/16/manual_time",
            "value": 1643476.650943397,
            "unit": "ns/iter",
            "extra": "iterations: 424\ncpu: 1621462.2641509434 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/16/manual_time",
            "value": 6325612.612612612,
            "unit": "ns/iter",
            "extra": "iterations: 111\ncpu: 6334459.459459459 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/64/manual_time",
            "value": 8878.316942386939,
            "unit": "ns/iter",
            "extra": "iterations: 78702\ncpu: 9331.084343472847 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/64/manual_time",
            "value": 34894.25877892911,
            "unit": "ns/iter",
            "extra": "iterations: 20048\ncpu: 35851.45650438946 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/64/manual_time",
            "value": 140873.42126298966,
            "unit": "ns/iter",
            "extra": "iterations: 5004\ncpu: 140512.58992805754 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/64/manual_time",
            "value": 598651.8578352188,
            "unit": "ns/iter",
            "extra": "iterations: 1238\ncpu: 605815.831987076 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/64/manual_time",
            "value": 2235076.6990291253,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 2224919.093851133 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/64/manual_time",
            "value": 8966242.500000006,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 8789062.5 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/256/manual_time",
            "value": 39237.8677296209,
            "unit": "ns/iter",
            "extra": "iterations: 17812\ncpu: 40352.009880979116 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/256/manual_time",
            "value": 159032.86586745025,
            "unit": "ns/iter",
            "extra": "iterations: 4421\ncpu: 159042.07192942774 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/256/manual_time",
            "value": 649107.8682525166,
            "unit": "ns/iter",
            "extra": "iterations: 1093\ncpu: 643298.2616651418 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/256/manual_time",
            "value": 2656311.610486892,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 2633426.966292135 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/256/manual_time",
            "value": 10872627.272727272,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 10890151.515151516 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/256/manual_time",
            "value": 43264187.50000001,
            "unit": "ns/iter",
            "extra": "iterations: 16\ncpu: 43945312.5 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1000/manual_time",
            "value": 178602.88680678696,
            "unit": "ns/iter",
            "extra": "iterations: 3949\ncpu: 178051.40541909344 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1000/manual_time",
            "value": 710491.2244897964,
            "unit": "ns/iter",
            "extra": "iterations: 980\ncpu: 701530.612244898 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1000/manual_time",
            "value": 2877366.5289256177,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 2905475.2066115704 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1000/manual_time",
            "value": 11754191.666666662,
            "unit": "ns/iter",
            "extra": "iterations: 60\ncpu: 11979166.666666666 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1000/manual_time",
            "value": 47704533.33333333,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 47916666.666666664 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1000/manual_time",
            "value": 192294675,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 191406250 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithSvcRef/manual_time",
            "value": 5241.058024278467,
            "unit": "ns/iter",
            "extra": "iterations: 134685\ncpu: 8700.85755652077 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithBundleContext/manual_time",
            "value": 6468.893960450671,
            "unit": "ns/iter",
            "extra": "iterations: 108667\ncpu: 10065.153174376766 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithInterfaceName/manual_time",
            "value": 6444.524253560788,
            "unit": "ns/iter",
            "extra": "iterations: 108314\ncpu: 10097.955942906734 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000",
            "value": 6974.096428568341,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6975.446428571428 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1024",
            "value": 6933.087053566973,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7149.832589285715 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/2048",
            "value": 6956.547321428681,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6835.9375 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/4096",
            "value": 6989.804687498641,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6975.446428571428 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/8192",
            "value": 7046.340401787786,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7149.832589285715 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/16384",
            "value": 7137.067857144075,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 7114.955357142857 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/32768",
            "value": 7100.959821428887,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6975.446428571428 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/65536",
            "value": 7365.989955359405,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7498.604910714285 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/131072",
            "value": 7413.453125002839,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7324.21875 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/262144",
            "value": 7485.058928572081,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 7393.973214285715 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/524288",
            "value": 7469.7633928571295,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7498.604910714285 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000000",
            "value": 7852.319196430812,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7847.377232142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/1",
            "value": 27007.875000013624,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 26785.714285714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/4000",
            "value": 18351189.189185813,
            "unit": "ns/iter",
            "extra": "iterations: 37\ncpu: 18581081.08108108 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/10000",
            "value": 49673369.999982245,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 50000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/1",
            "value": 26706.878571417292,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 26785.714285714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/4000",
            "value": 107191671.42860897,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 107142857.14285715 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/10000",
            "value": 272230199.99989146,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 270833333.3333333 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/1",
            "value": 25341.3064586373,
            "unit": "ns/iter",
            "extra": "iterations: 29867\ncpu: 25634.479525898147 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/4000",
            "value": 8835985.555555858,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 8854166.666666666 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/10000",
            "value": 24984800.00000265,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 25111607.14285714 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/1",
            "value": 436.6506875001619,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 439.453125 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/3",
            "value": 1281.199048571782,
            "unit": "ns/iter",
            "extra": "iterations: 497778\ncpu: 1255.5797966161622 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/7",
            "value": 2877.9739512869414,
            "unit": "ns/iter",
            "extra": "iterations: 235789\ncpu: 2849.4755904643557 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/11",
            "value": 4598.859421426207,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4551.471682968352 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/15",
            "value": 6249.535714285262,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/18",
            "value": 7498.379464282477,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 7393.973214285715 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/20",
            "value": 8314.915178568226,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/1",
            "value": 5675.815178575152,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5580.357142857143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/3",
            "value": 7943.856026787646,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/7",
            "value": 12297.142857140183,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12276.785714285714 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/11",
            "value": 16486.41741071393,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 16392.29910714286 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/15",
            "value": 20757.890624992113,
            "unit": "ns/iter",
            "extra": "iterations: 32000\ncpu: 20507.8125 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/18",
            "value": 23925.796428573318,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 23995.535714285714 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/20",
            "value": 26126.575000002307,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 25669.64285714286 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/1",
            "value": 667.8402901789988,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 662.6674107142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/3",
            "value": 1791.8430634980557,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1841.5166239844036 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/7",
            "value": 3932.858258927244,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 3923.6886160714284 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/11",
            "value": 6119.5026785705,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/15",
            "value": 8293.102678571528,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8370.535714285714 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/18",
            "value": 9911.772268871291,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 10044.598015187432 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/20",
            "value": 11024.731250003584,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10986.328125 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/1",
            "value": 423.25236747238233,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/3",
            "value": 1548.2589285714507,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1569.4754464285713 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/7",
            "value": 3691.1753079069417,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3690.003747760328 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/11",
            "value": 5872.789285713712,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/15",
            "value": 8047.854910715152,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/18",
            "value": 9679.597412512687,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9626.073097887956 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/20",
            "value": 10769.967187499675,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10742.1875 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/BundleInstallCppFramework/manual_time",
            "value": 208759.02468034532,
            "unit": "ns/iter",
            "extra": "iterations: 3363\ncpu: 223015.16503122213 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/LargeBundleInstallCppFramework/manual_time",
            "value": 204702.75902553563,
            "unit": "ns/iter",
            "extra": "iterations: 3407\ncpu: 229307.30848253597 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterFromString",
            "value": 637.7584821426094,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 641.7410714285714 ns\nthreads: 1"
          },
          {
            "name": "ConstructNonTrivialFilterFromString",
            "value": 976.8244746320095,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 962.6111774057243 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Simple",
            "value": 433.7143266964992,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 433.1752908979249 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Complex",
            "value": 489.16660496667225,
            "unit": "ns/iter",
            "extra": "iterations: 1445161\ncpu: 486.53748613476284 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Simple",
            "value": 210.81878125002618,
            "unit": "ns/iter",
            "extra": "iterations: 3200000\ncpu: 209.9609375 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Complex",
            "value": 372.1883782226679,
            "unit": "ns/iter",
            "extra": "iterations: 1947826\ncpu: 369.0011325446934 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Simple",
            "value": 193.15566010313194,
            "unit": "ns/iter",
            "extra": "iterations: 3733333\ncpu: 196.70760684889348 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Complex",
            "value": 243.38709337190178,
            "unit": "ns/iter",
            "extra": "iterations: 2986667\ncpu: 245.8844591646809 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterIncremental",
            "value": 2333.3939285716306,
            "unit": "ns/iter",
            "extra": "iterations: 280000\ncpu: 2343.75 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterNotOperator",
            "value": 1003.1239062499253,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1000.9765625 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByInterface",
            "value": 1102.8835937501924,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1098.6328125 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByClassName",
            "value": 925.1985155364952,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 920.7585175185189 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterface",
            "value": 923.3429360074724,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 920.7585175185189 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassName",
            "value": 644.4168750001771,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 641.7410714285714 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassNameAndLDAPFilter",
            "value": 797.0714285713752,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 802.1763392857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterfaceAndLDAPFilter",
            "value": 742.5855357143162,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 753.3482142857143 ns\nthreads: 1"
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
          "id": "1090c1ff0db5050fc08e749e19c55575bf9729fa",
          "message": "Remove CoreBundleContext.dataStorage clear (#845) (#894)\n\nFixes #733\r\n\r\nCo-authored-by: Shivam Negi <shivamnegi2019@gmail.com>",
          "timestamp": "2023-08-07T10:15:00-04:00",
          "tree_id": "17635f4867c3db657b4ce15992fcb87c0d796e45",
          "url": "https://github.com/insi-eb/CppMicroServices-cpp14/commit/1090c1ff0db5050fc08e749e19c55575bf9729fa"
        },
        "date": 1691419381068,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1/manual_time",
            "value": 23358.397859257573,
            "unit": "ns/iter",
            "extra": "iterations: 35128\ncpu: 23574.4989751765 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1/manual_time",
            "value": 93138.20306793436,
            "unit": "ns/iter",
            "extra": "iterations: 9583\ncpu: 94568.50673066889 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1/manual_time",
            "value": 370654.3322163772,
            "unit": "ns/iter",
            "extra": "iterations: 2089\ncpu: 381462.4222115845 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1/manual_time",
            "value": 1477321.4411247945,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1510325.1318101934 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1/manual_time",
            "value": 5659775.000000098,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5781250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1/manual_time",
            "value": 23211502.85714372,
            "unit": "ns/iter",
            "extra": "iterations: 35\ncpu: 23660714.285714287 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/4/manual_time",
            "value": 59879.48000000001,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60937.5 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/4/manual_time",
            "value": 245735.19926985135,
            "unit": "ns/iter",
            "extra": "iterations: 3287\ncpu: 247185.88378460603 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/4/manual_time",
            "value": 1000604.2826552399,
            "unit": "ns/iter",
            "extra": "iterations: 934\ncpu: 1020476.4453961456 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/4/manual_time",
            "value": 3900846.0732984114,
            "unit": "ns/iter",
            "extra": "iterations: 191\ncpu: 4008507.8534031413 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/4/manual_time",
            "value": 15816838.888888774,
            "unit": "ns/iter",
            "extra": "iterations: 54\ncpu: 15914351.851851853 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/4/manual_time",
            "value": 59181249.999999724,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 59375000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/16/manual_time",
            "value": 195013.24137931006,
            "unit": "ns/iter",
            "extra": "iterations: 4350\ncpu: 197557.4712643678 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/16/manual_time",
            "value": 796994.488817891,
            "unit": "ns/iter",
            "extra": "iterations: 1252\ncpu: 811202.0766773163 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/16/manual_time",
            "value": 3087337.647058826,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/16/manual_time",
            "value": 12568412.328767104,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 12842465.753424658 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/16/manual_time",
            "value": 49294859.9999999,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 50000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/16/manual_time",
            "value": 192568850.0000004,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 195312500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/64/manual_time",
            "value": 616396.8999999994,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/64/manual_time",
            "value": 2590336.336336336,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2627627.6276276275 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/64/manual_time",
            "value": 10662446.000000004,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/64/manual_time",
            "value": 40885389.47368422,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 41118421.05263158 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/64/manual_time",
            "value": 168562733.33333346,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 171875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/64/manual_time",
            "value": 616593400.0000002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 625000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/256/manual_time",
            "value": 2195300.677200906,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2222065.46275395 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/256/manual_time",
            "value": 8706769.000000002,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 8906250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/256/manual_time",
            "value": 34494124,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 35000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/256/manual_time",
            "value": 141917487.50000012,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 144531250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/256/manual_time",
            "value": 507937700.00000006,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 515625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/256/manual_time",
            "value": 2493151599.9999986,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2531250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1000/manual_time",
            "value": 6368967.999999996,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6562500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1000/manual_time",
            "value": 27396608.571428563,
            "unit": "ns/iter",
            "extra": "iterations: 35\ncpu: 28125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1000/manual_time",
            "value": 117420133.33333333,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 119791666.66666667 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1000/manual_time",
            "value": 427169799.99999994,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 437500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1000/manual_time",
            "value": 1978480099.9999995,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2031250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1000/manual_time",
            "value": 9897700999.99999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10093750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1/manual_time",
            "value": 23249.143250768007,
            "unit": "ns/iter",
            "extra": "iterations: 34841\ncpu: 23320.226170316582 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1/manual_time",
            "value": 158315.318614631,
            "unit": "ns/iter",
            "extra": "iterations: 9557\ncpu: 158587.94600816155 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1/manual_time",
            "value": 554654.61741425,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 556563.3245382586 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1/manual_time",
            "value": 2676329.278350532,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 2673969.0721649486 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1/manual_time",
            "value": 10029198.000000032,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10156250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1/manual_time",
            "value": 40372100.00000008,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 40509259.25925926 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/4/manual_time",
            "value": 60290.64000000011,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60937.5 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/4/manual_time",
            "value": 319412.03580901853,
            "unit": "ns/iter",
            "extra": "iterations: 3016\ncpu: 321203.58090185677 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/4/manual_time",
            "value": 1478188.1087202742,
            "unit": "ns/iter",
            "extra": "iterations: 883\ncpu: 1486409.966024915 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/4/manual_time",
            "value": 5327560.130718941,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 5412581.699346405 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/4/manual_time",
            "value": 23783799.999999985,
            "unit": "ns/iter",
            "extra": "iterations: 50\ncpu: 24062500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/4/manual_time",
            "value": 80843049.99999991,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 81250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/16/manual_time",
            "value": 199277.89027548805,
            "unit": "ns/iter",
            "extra": "iterations: 4247\ncpu: 202348.71674122912 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/16/manual_time",
            "value": 922595.1478392738,
            "unit": "ns/iter",
            "extra": "iterations: 1319\ncpu: 923995.4510993176 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/16/manual_time",
            "value": 3583039.2561983475,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3615702.479338843 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/16/manual_time",
            "value": 15271483.09859155,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15404929.57746479 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/16/manual_time",
            "value": 51848560.00000005,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 53125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/16/manual_time",
            "value": 220854725.0000004,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 226562500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/64/manual_time",
            "value": 640566.3999999999,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 640625 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/64/manual_time",
            "value": 2634232.9376854603,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2689169.1394658755 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/64/manual_time",
            "value": 11331044.999999993,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 11406250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/64/manual_time",
            "value": 42650422.22222222,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 42534722.222222224 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/64/manual_time",
            "value": 173282920.00000027,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 178125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/64/manual_time",
            "value": 634327900,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 640625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/256/manual_time",
            "value": 2260323.9709443073,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 2307808.716707022 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/256/manual_time",
            "value": 8391594.000000004,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 8593750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/256/manual_time",
            "value": 35179848,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 35625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/256/manual_time",
            "value": 147743187.4999999,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 150390625 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/256/manual_time",
            "value": 521843199.9999997,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 531250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/256/manual_time",
            "value": 2559345599.999996,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2593750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1000/manual_time",
            "value": 6470228,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6562500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1000/manual_time",
            "value": 26256697.43589745,
            "unit": "ns/iter",
            "extra": "iterations: 39\ncpu: 26842948.717948716 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1000/manual_time",
            "value": 114982491.66666667,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 117187500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1000/manual_time",
            "value": 416556699.99999976,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 429687500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1000/manual_time",
            "value": 2023414299.9999983,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2062500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1000/manual_time",
            "value": 10202776199.999998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10406250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1",
            "value": 1462.7261160714713,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1464.84375 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1",
            "value": 2264.322812499842,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2294.921875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1",
            "value": 5139.636607142149,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5022.321428571428 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1",
            "value": 15952.691964282092,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 16043.526785714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1",
            "value": 55721.10000000521,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54687.5 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1",
            "value": 210650.37500001438,
            "unit": "ns/iter",
            "extra": "iterations: 3200\ncpu: 209960.9375 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/4",
            "value": 5924.371000000974,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5937.5 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/4",
            "value": 9131.822625792107,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9207.54818058848 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/4",
            "value": 20465.074574898117,
            "unit": "ns/iter",
            "extra": "iterations: 34462\ncpu: 20856.30549590854 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/4",
            "value": 63879.12500000782,
            "unit": "ns/iter",
            "extra": "iterations: 11200\ncpu: 64174.107142857145 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/4",
            "value": 223519.95313020961,
            "unit": "ns/iter",
            "extra": "iterations: 2987\ncpu: 224933.0431871443 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/4",
            "value": 848360.3748324555,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 836680.0535475235 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/16",
            "value": 23606.291224428183,
            "unit": "ns/iter",
            "extra": "iterations: 29867\ncpu: 23541.868952355442 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/16",
            "value": 36569.20233566704,
            "unit": "ns/iter",
            "extra": "iterations: 18667\ncpu: 36829.699469652325 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/16",
            "value": 82870.31249997664,
            "unit": "ns/iter",
            "extra": "iterations: 8960\ncpu: 83705.35714285714 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/16",
            "value": 255786.7142857211,
            "unit": "ns/iter",
            "extra": "iterations: 2800\ncpu: 256696.42857142858 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/16",
            "value": 892470.9504687028,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 899431.0575635877 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/16",
            "value": 3396437.2549014436,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 3446691.1764705884 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/64",
            "value": 95432.99852685176,
            "unit": "ns/iter",
            "extra": "iterations: 7467\ncpu: 94164.32302129369 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/64",
            "value": 148268.07955002587,
            "unit": "ns/iter",
            "extra": "iterations: 4978\ncpu: 150662.9168340699 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/64",
            "value": 331551.00796992285,
            "unit": "ns/iter",
            "extra": "iterations: 2133\ncpu: 329641.35021097044 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/64",
            "value": 1033377.1428569044,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1032366.0714285715 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/64",
            "value": 3607782.5641022613,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 3605769.230769231 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/64",
            "value": 13515454.000003047,
            "unit": "ns/iter",
            "extra": "iterations: 50\ncpu: 13437500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/256",
            "value": 399069.0655832763,
            "unit": "ns/iter",
            "extra": "iterations: 1723\ncpu: 399013.3488102147 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/256",
            "value": 643266.3392857307,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 641741.0714285715 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/256",
            "value": 1526639.75903619,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1537399.5983935744 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/256",
            "value": 4822332.214766201,
            "unit": "ns/iter",
            "extra": "iterations: 149\ncpu: 4823825.503355704 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/256",
            "value": 17658117.073169038,
            "unit": "ns/iter",
            "extra": "iterations: 41\ncpu: 17530487.80487805 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/256",
            "value": 66680211.11110849,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 65972222.222222224 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1000",
            "value": 1620206.1425063699,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 1612407.8624078624 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1000",
            "value": 2639408.333333325,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 2604166.6666666665 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1000",
            "value": 6238460.714286021,
            "unit": "ns/iter",
            "extra": "iterations: 112\ncpu: 6277901.785714285 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1000",
            "value": 20260920.588237453,
            "unit": "ns/iter",
            "extra": "iterations: 34\ncpu: 20220588.23529412 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1000",
            "value": 72126563.63638169,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 72443181.81818181 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1000",
            "value": 275500149.99997073,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 281250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1/manual_time",
            "value": 2595.480868668122,
            "unit": "ns/iter",
            "extra": "iterations: 270760\ncpu: 7617.447185699512 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1/manual_time",
            "value": 10495.779101412547,
            "unit": "ns/iter",
            "extra": "iterations: 67995\ncpu: 40444.150305169496 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1/manual_time",
            "value": 42106.36260253825,
            "unit": "ns/iter",
            "extra": "iterations: 16707\ncpu: 183306.39851559227 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1/manual_time",
            "value": 181708.81057267947,
            "unit": "ns/iter",
            "extra": "iterations: 3859\ncpu: 894823.7885462556 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1/manual_time",
            "value": 913233.7224381334,
            "unit": "ns/iter",
            "extra": "iterations: 771\ncpu: 4296368.352788586 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1/manual_time",
            "value": 6399867.272727066,
            "unit": "ns/iter",
            "extra": "iterations: 110\ncpu: 21732954.545454547 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/4/manual_time",
            "value": 3195.165311058657,
            "unit": "ns/iter",
            "extra": "iterations: 219828\ncpu: 9169.100387575741 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/4/manual_time",
            "value": 12051.725616643242,
            "unit": "ns/iter",
            "extra": "iterations: 58298\ncpu: 60840.42334213867 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/4/manual_time",
            "value": 49429.12760316456,
            "unit": "ns/iter",
            "extra": "iterations: 13973\ncpu: 354478.2795391111 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/4/manual_time",
            "value": 230849.91740984548,
            "unit": "ns/iter",
            "extra": "iterations: 3027\ncpu: 2007969.9372315824 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/4/manual_time",
            "value": 1415829.554655739,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 10690789.47368421 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/4/manual_time",
            "value": 13011509.259259328,
            "unit": "ns/iter",
            "extra": "iterations: 54\ncpu: 57291666.666666664 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/16/manual_time",
            "value": 5630.456877636968,
            "unit": "ns/iter",
            "extra": "iterations: 122593\ncpu: 16186.6909203625 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/16/manual_time",
            "value": 19341.142590721352,
            "unit": "ns/iter",
            "extra": "iterations: 36461\ncpu: 147846.32895422506 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/16/manual_time",
            "value": 81538.30949889288,
            "unit": "ns/iter",
            "extra": "iterations: 8601\ncpu: 1051839.9023369376 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/16/manual_time",
            "value": 436479.9004355922,
            "unit": "ns/iter",
            "extra": "iterations: 1607\ncpu: 6456129.433727442 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/16/manual_time",
            "value": 3488541.500000065,
            "unit": "ns/iter",
            "extra": "iterations: 200\ncpu: 36171875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/16/manual_time",
            "value": 40234364.70588249,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 200367647.05882353 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/64/manual_time",
            "value": 15385.471050593984,
            "unit": "ns/iter",
            "extra": "iterations: 45165\ncpu: 42552.30820325473 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/64/manual_time",
            "value": 47371.07220119515,
            "unit": "ns/iter",
            "extra": "iterations: 14792\ncpu: 485904.5429962142 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/64/manual_time",
            "value": 204495.70552147724,
            "unit": "ns/iter",
            "extra": "iterations: 3423\ncpu: 3802402.862985685 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/64/manual_time",
            "value": 1258087.5675675753,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 23676801.8018018 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/64/manual_time",
            "value": 11872465.51724144,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 137661637.93103448 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/64/manual_time",
            "value": 144259540.00000012,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 768750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/256/manual_time",
            "value": 89609.80492813145,
            "unit": "ns/iter",
            "extra": "iterations: 7792\ncpu: 228599.84599589324 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/256/manual_time",
            "value": 292443.95329440915,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 2150229.357798165 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/256/manual_time",
            "value": 1251932.8596802813,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 16152309.058614565 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/256/manual_time",
            "value": 7143656.565656588,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 99589646.46464646 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/256/manual_time",
            "value": 55778638.461538345,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 562500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/256/manual_time",
            "value": 615151200.0000001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3187500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1000/manual_time",
            "value": 417573.38902148005,
            "unit": "ns/iter",
            "extra": "iterations: 1676\ncpu: 1062798.3293556087 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1000/manual_time",
            "value": 1394662.3015873004,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 9021577.38095238 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1000/manual_time",
            "value": 6254622.123893811,
            "unit": "ns/iter",
            "extra": "iterations: 113\ncpu: 66371681.415929206 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1000/manual_time",
            "value": 35077519.999999955,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 403906250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1000/manual_time",
            "value": 246481499.9999999,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2260416666.6666665 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1000/manual_time",
            "value": 2598358799.999998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 12921875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1/manual_time",
            "value": 6352.009182785074,
            "unit": "ns/iter",
            "extra": "iterations: 111513\ncpu: 6725.673239891313 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1/manual_time",
            "value": 22135.62261753864,
            "unit": "ns/iter",
            "extra": "iterations: 31480\ncpu: 22831.956797966963 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1/manual_time",
            "value": 88996.02235798791,
            "unit": "ns/iter",
            "extra": "iterations: 7693\ncpu: 89366.95697387235 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1/manual_time",
            "value": 360343.3537832315,
            "unit": "ns/iter",
            "extra": "iterations: 1956\ncpu: 359470.85889570555 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1/manual_time",
            "value": 1555549.7630331768,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 1555094.7867298578 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1/manual_time",
            "value": 5691667.460317457,
            "unit": "ns/iter",
            "extra": "iterations: 126\ncpu: 5704365.079365079 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/4/manual_time",
            "value": 5715.39834732431,
            "unit": "ns/iter",
            "extra": "iterations: 123799\ncpu: 6184.41990646128 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/4/manual_time",
            "value": 22610.485658407997,
            "unit": "ns/iter",
            "extra": "iterations: 30680\ncpu: 23427.314211212517 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/4/manual_time",
            "value": 92102.23716539441,
            "unit": "ns/iter",
            "extra": "iterations: 7733\ncpu: 92945.81663002716 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/4/manual_time",
            "value": 367063.7787056379,
            "unit": "ns/iter",
            "extra": "iterations: 1916\ncpu: 366975.4697286013 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/4/manual_time",
            "value": 1578412.9955947138,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 1583149.7797356828 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/4/manual_time",
            "value": 5836899.999999999,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 5891393.442622951 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/16/manual_time",
            "value": 6471.257732716759,
            "unit": "ns/iter",
            "extra": "iterations: 108791\ncpu: 7037.576637773345 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/16/manual_time",
            "value": 25787.952615109607,
            "unit": "ns/iter",
            "extra": "iterations: 26844\ncpu: 26193.00402324542 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/16/manual_time",
            "value": 103721.67934464669,
            "unit": "ns/iter",
            "extra": "iterations: 6836\ncpu: 105141.8958455237 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/16/manual_time",
            "value": 417599.4671403199,
            "unit": "ns/iter",
            "extra": "iterations: 1689\ncpu: 416296.62522202486 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/16/manual_time",
            "value": 1819283.8479809992,
            "unit": "ns/iter",
            "extra": "iterations: 421\ncpu: 1818586.698337292 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/16/manual_time",
            "value": 6592273.076923074,
            "unit": "ns/iter",
            "extra": "iterations: 104\ncpu: 6460336.538461538 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/64/manual_time",
            "value": 9268.37517801391,
            "unit": "ns/iter",
            "extra": "iterations: 75836\ncpu: 9683.7254074582 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/64/manual_time",
            "value": 36675.03310907332,
            "unit": "ns/iter",
            "extra": "iterations: 18877\ncpu: 37247.70885204217 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/64/manual_time",
            "value": 147516.94456023152,
            "unit": "ns/iter",
            "extra": "iterations: 4798\ncpu: 149802.0008336807 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/64/manual_time",
            "value": 590311.9665271975,
            "unit": "ns/iter",
            "extra": "iterations: 1195\ncpu: 588389.1213389122 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/64/manual_time",
            "value": 2558001.0791366897,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 2585431.654676259 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/64/manual_time",
            "value": 9744887.671232872,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 9631849.315068493 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/256/manual_time",
            "value": 45423.7458841758,
            "unit": "ns/iter",
            "extra": "iterations: 15489\ncpu: 45395.119116792564 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/256/manual_time",
            "value": 184255.95582434782,
            "unit": "ns/iter",
            "extra": "iterations: 3803\ncpu: 184886.93136997108 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/256/manual_time",
            "value": 742174.6596858647,
            "unit": "ns/iter",
            "extra": "iterations: 955\ncpu: 719895.2879581152 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/256/manual_time",
            "value": 2995125.877192981,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 3083881.5789473685 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/256/manual_time",
            "value": 12573825.000000004,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 12555803.57142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/256/manual_time",
            "value": 50149270,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 50000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1000/manual_time",
            "value": 203579.17760279952,
            "unit": "ns/iter",
            "extra": "iterations: 3429\ncpu: 205052.4934383202 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1000/manual_time",
            "value": 820949.234393403,
            "unit": "ns/iter",
            "extra": "iterations: 849\ncpu: 809776.2073027091 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1000/manual_time",
            "value": 3308356.3981042653,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 3332345.971563981 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1000/manual_time",
            "value": 13433582.35294118,
            "unit": "ns/iter",
            "extra": "iterations: 51\ncpu: 13480392.156862745 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1000/manual_time",
            "value": 56063925,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 55989583.333333336 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1000/manual_time",
            "value": 226777300,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 223958333.33333334 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithSvcRef/manual_time",
            "value": 5057.16136503309,
            "unit": "ns/iter",
            "extra": "iterations: 138165\ncpu: 8481.70665508631 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithBundleContext/manual_time",
            "value": 6333.094484101617,
            "unit": "ns/iter",
            "extra": "iterations: 111786\ncpu: 9924.096040649098 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithInterfaceName/manual_time",
            "value": 6297.607998764796,
            "unit": "ns/iter",
            "extra": "iterations: 110117\ncpu: 9932.617125421142 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000",
            "value": 6755.452678571519,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1024",
            "value": 6669.521428571151,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/2048",
            "value": 6753.065848213526,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6801.060267857143 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/4096",
            "value": 6796.051339283643,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6801.060267857143 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/8192",
            "value": 6859.599999998522,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6835.9375 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/16384",
            "value": 6965.33147321432,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6975.446428571428 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/32768",
            "value": 7032.842633926911,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7149.832589285715 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/65536",
            "value": 7200.779017857429,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7149.832589285715 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/131072",
            "value": 7310.770089285411,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7324.21875 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/262144",
            "value": 7476.388392857152,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7498.604910714285 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/524288",
            "value": 7424.44196428644,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7324.21875 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000000",
            "value": 7832.551339284066,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7847.377232142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/1",
            "value": 26747.96428571621,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 26785.714285714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/4000",
            "value": 15809373.170735098,
            "unit": "ns/iter",
            "extra": "iterations: 41\ncpu: 16006097.56097561 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/10000",
            "value": 48449228.57143631,
            "unit": "ns/iter",
            "extra": "iterations: 14\ncpu: 49107142.85714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/1",
            "value": 26902.821428572162,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 27343.75 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/4000",
            "value": 107437085.71427694,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 107142857.14285715 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/10000",
            "value": 270163366.66664153,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 270833333.3333333 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/1",
            "value": 25321.656008302685,
            "unit": "ns/iter",
            "extra": "iterations: 29867\ncpu: 25634.479525898147 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/4000",
            "value": 8414822.666663894,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 8541666.666666666 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/10000",
            "value": 22009312.49999627,
            "unit": "ns/iter",
            "extra": "iterations: 32\ncpu: 22460937.5 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/1",
            "value": 458.3371093739578,
            "unit": "ns/iter",
            "extra": "iterations: 1544828\ncpu: 455.1477575497078 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/3",
            "value": 1352.2459811400702,
            "unit": "ns/iter",
            "extra": "iterations: 497778\ncpu: 1349.7482813623744 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/7",
            "value": 3060.8080357146555,
            "unit": "ns/iter",
            "extra": "iterations: 224000\ncpu: 3069.1964285714284 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/11",
            "value": 4883.268000000953,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/15",
            "value": 6632.358258928304,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6626.674107142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/18",
            "value": 7954.434151787077,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7847.377232142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/20",
            "value": 8863.353288599481,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8789.023263289004 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/1",
            "value": 5745.191964286229,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5719.866071428572 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/3",
            "value": 8149.803571428598,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8196.14955357143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/7",
            "value": 12758.966071426617,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12834.82142857143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/11",
            "value": 17422.857072705097,
            "unit": "ns/iter",
            "extra": "iterations: 40727\ncpu: 17264.345520170893 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/15",
            "value": 22132.425000002342,
            "unit": "ns/iter",
            "extra": "iterations: 32000\ncpu: 21972.65625 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/18",
            "value": 25449.660380222158,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 24902.28816453535 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/20",
            "value": 27673.506368271428,
            "unit": "ns/iter",
            "extra": "iterations: 24889\ncpu: 27622.64454176544 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/1",
            "value": 712.1407142857297,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 711.4955357142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/3",
            "value": 1934.9151952176169,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1904.2990003337056 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/7",
            "value": 4281.7581331445235,
            "unit": "ns/iter",
            "extra": "iterations: 165926\ncpu: 4331.75029832576 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/11",
            "value": 6664.854464286155,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/15",
            "value": 9024.849330356537,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8893.69419642857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/18",
            "value": 10795.46093750139,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10986.328125 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/20",
            "value": 12019.430357140338,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11997.767857142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/1",
            "value": 453.19498351920777,
            "unit": "ns/iter",
            "extra": "iterations: 1544828\ncpu: 445.0333629374921 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/3",
            "value": 1679.6804600352004,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1688.0569053190366 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/7",
            "value": 4016.5563990062856,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 3989.9482322352997 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/11",
            "value": 6395.774107143584,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/15",
            "value": 8775.339842234049,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8789.023263289004 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/18",
            "value": 10652.973870652953,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 10672.385391136646 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/20",
            "value": 11793.382812498976,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11718.75 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/BundleInstallCppFramework/manual_time",
            "value": 247600.96531998506,
            "unit": "ns/iter",
            "extra": "iterations: 2797\ncpu: 268144.4404719342 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/LargeBundleInstallCppFramework/manual_time",
            "value": 244933.07584269595,
            "unit": "ns/iter",
            "extra": "iterations: 2848\ncpu: 268829.0028089888 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterFromString",
            "value": 667.1357142855478,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 669.6428571428571 ns\nthreads: 1"
          },
          {
            "name": "ConstructNonTrivialFilterFromString",
            "value": 1039.4268127559092,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 1046.3164971801352 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Simple",
            "value": 442.2910625000043,
            "unit": "ns/iter",
            "extra": "iterations: 1600000\ncpu: 449.21875 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Complex",
            "value": 502.27110000014363,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 500 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Simple",
            "value": 223.64700000004237,
            "unit": "ns/iter",
            "extra": "iterations: 3200000\ncpu: 219.7265625 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Complex",
            "value": 368.7426841529943,
            "unit": "ns/iter",
            "extra": "iterations: 1866667\ncpu: 368.30350566008826 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Simple",
            "value": 185.78519515940997,
            "unit": "ns/iter",
            "extra": "iterations: 3733333\ncpu: 184.1518021564109 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Complex",
            "value": 238.57774999994163,
            "unit": "ns/iter",
            "extra": "iterations: 2800000\ncpu: 234.375 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterIncremental",
            "value": 2304.1712007018614,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterNotOperator",
            "value": 985.5406760980165,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 983.537507349327 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByInterface",
            "value": 1068.2265625000298,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1049.8046875 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByClassName",
            "value": 939.8306072186688,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 941.6848474621216 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterface",
            "value": 911.9505750220424,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 920.7585175185189 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassName",
            "value": 672.6496651785802,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 662.6674107142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassNameAndLDAPFilter",
            "value": 769.6965401786977,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 767.2991071428571 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterfaceAndLDAPFilter",
            "value": 701.9890178570774,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 711.4955357142857 ns\nthreads: 1"
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
          "id": "d179b77e2c8f4f21bb184963bff564241797043c",
          "message": "Fix warning \"Use of BITWISE AND to check if a flag is set\" (#849) (#896)\n\nSigned-off-by: Tahar Touati <touati.thr@gmail.com>\r\nCo-authored-by: Tahar Touati <124062546+thrtouati@users.noreply.github.com>",
          "timestamp": "2023-08-07T11:03:26-04:00",
          "tree_id": "93587bd43b3ccdcce84d0a9a4af366c2c008bca7",
          "url": "https://github.com/insi-eb/CppMicroServices-cpp14/commit/d179b77e2c8f4f21bb184963bff564241797043c"
        },
        "date": 1691422705376,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1/manual_time",
            "value": 32774.03482210418,
            "unit": "ns/iter",
            "extra": "iterations: 25099\ncpu: 33616.87716642097 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1/manual_time",
            "value": 129971.5996578253,
            "unit": "ns/iter",
            "extra": "iterations: 7014\ncpu: 133661.24893071002 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1/manual_time",
            "value": 512796.9304229108,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 522254.43383356073 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1/manual_time",
            "value": 2053846.0620524802,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2088305.4892601431 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1/manual_time",
            "value": 8381336.440677757,
            "unit": "ns/iter",
            "extra": "iterations: 118\ncpu: 8606991.525423728 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1/manual_time",
            "value": 32132796.153845694,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 33052884.615384616 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/4/manual_time",
            "value": 83818.254115036,
            "unit": "ns/iter",
            "extra": "iterations: 10814\ncpu: 85248.28925466987 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/4/manual_time",
            "value": 337221.4255409431,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 344717.8616885872 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/4/manual_time",
            "value": 1369260.2102102176,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1384196.6966966968 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/4/manual_time",
            "value": 5095337.000000026,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5312500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/4/manual_time",
            "value": 21374447.50000004,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 21484375 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/4/manual_time",
            "value": 86876163.63636386,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 89488636.36363636 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/16/manual_time",
            "value": 259256.5868263473,
            "unit": "ns/iter",
            "extra": "iterations: 3340\ncpu: 266654.19161676645 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/16/manual_time",
            "value": 1055976.8409818558,
            "unit": "ns/iter",
            "extra": "iterations: 937\ncpu: 1067235.8591248665 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/16/manual_time",
            "value": 4041867.5392670124,
            "unit": "ns/iter",
            "extra": "iterations: 191\ncpu: 4090314.1361256544 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/16/manual_time",
            "value": 17342263.46153848,
            "unit": "ns/iter",
            "extra": "iterations: 52\ncpu: 17728365.384615384 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/16/manual_time",
            "value": 66038100.0000001,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 67187500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/16/manual_time",
            "value": 254843566.66666663,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 265625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/64/manual_time",
            "value": 899692.1167883208,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 912408.7591240876 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/64/manual_time",
            "value": 3358163.291139244,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3428270.0421940926 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/64/manual_time",
            "value": 13817765.714285702,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 14062500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/64/manual_time",
            "value": 50526689.99999999,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 51562500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/64/manual_time",
            "value": 214740599.99999997,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 218750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/64/manual_time",
            "value": 853301499.9999999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 859375000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/256/manual_time",
            "value": 2851047.0059880256,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2900449.1017964073 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/256/manual_time",
            "value": 11762915.957446808,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 12134308.510638298 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/256/manual_time",
            "value": 44216499.999999955,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 45138888.88888889 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/256/manual_time",
            "value": 189991516.66666678,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 192708333.33333334 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/256/manual_time",
            "value": 677739200.0000002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 703125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/256/manual_time",
            "value": 3423207099.999999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3453125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1000/manual_time",
            "value": 8731180.999999996,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 9062500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1000/manual_time",
            "value": 34436071.99999999,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 35625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1000/manual_time",
            "value": 142130475,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 146484375 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1000/manual_time",
            "value": 589551299.9999995,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 609375000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1000/manual_time",
            "value": 2679138100,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2750000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1000/manual_time",
            "value": 13745977000.000002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 14000000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1/manual_time",
            "value": 33300.93515191069,
            "unit": "ns/iter",
            "extra": "iterations: 24488\ncpu: 33817.58412283567 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1/manual_time",
            "value": 189344.1986584843,
            "unit": "ns/iter",
            "extra": "iterations: 7007\ncpu: 194002.4261452833 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1/manual_time",
            "value": 659099.0999999982,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 671875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1/manual_time",
            "value": 3109181.714285715,
            "unit": "ns/iter",
            "extra": "iterations: 350\ncpu: 3169642.8571428573 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1/manual_time",
            "value": 13514262.886597894,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 13692010.30927835 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1/manual_time",
            "value": 49521385.000000104,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 50000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/4/manual_time",
            "value": 82677.42293807276,
            "unit": "ns/iter",
            "extra": "iterations: 10803\ncpu: 85335.09210404518 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/4/manual_time",
            "value": 386844.06392694236,
            "unit": "ns/iter",
            "extra": "iterations: 2190\ncpu: 392408.67579908675 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/4/manual_time",
            "value": 1790462.748091609,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1812977.0992366413 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/4/manual_time",
            "value": 6274029.000000003,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/4/manual_time",
            "value": 27910697.14285715,
            "unit": "ns/iter",
            "extra": "iterations: 35\ncpu: 28571428.57142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/4/manual_time",
            "value": 115628709.090909,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 116477272.72727273 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/16/manual_time",
            "value": 264198.7760097914,
            "unit": "ns/iter",
            "extra": "iterations: 3268\ncpu: 267747.8580171359 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/16/manual_time",
            "value": 1201788.0928355218,
            "unit": "ns/iter",
            "extra": "iterations: 991\ncpu: 1214051.4631685168 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/16/manual_time",
            "value": 4556002.857142857,
            "unit": "ns/iter",
            "extra": "iterations: 175\ncpu: 4642857.142857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/16/manual_time",
            "value": 18990251.020408183,
            "unit": "ns/iter",
            "extra": "iterations: 49\ncpu: 19451530.612244897 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/16/manual_time",
            "value": 71703380.00000016,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 71875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/16/manual_time",
            "value": 288777100.0000001,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 291666666.6666667 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/64/manual_time",
            "value": 909248.484848485,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 919913.4199134199 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/64/manual_time",
            "value": 3342713.8339921013,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3396739.1304347827 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/64/manual_time",
            "value": 14498701.492537295,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 14692164.179104477 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/64/manual_time",
            "value": 51753730,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 51562500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/64/manual_time",
            "value": 233089975.00000012,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 238281250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/64/manual_time",
            "value": 878091600.0000006,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 890625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/256/manual_time",
            "value": 2884494.0199335557,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 2958887.0431893687 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/256/manual_time",
            "value": 11376787.499999993,
            "unit": "ns/iter",
            "extra": "iterations: 104\ncpu: 11568509.615384616 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/256/manual_time",
            "value": 44955783.33333333,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 46006944.44444445 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/256/manual_time",
            "value": 180507420.0000001,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 184375000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/256/manual_time",
            "value": 714098200.0000005,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 718750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/256/manual_time",
            "value": 3529443900.0000014,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3578125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1000/manual_time",
            "value": 8867672.999999998,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 9062500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1000/manual_time",
            "value": 31852385.7142857,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 32924107.14285714 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1000/manual_time",
            "value": 143699011.1111112,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 147569444.44444445 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1000/manual_time",
            "value": 510334399.99999994,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 515625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1000/manual_time",
            "value": 2822447900.0000024,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2875000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1000/manual_time",
            "value": 14026849599.999996,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 14312500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1",
            "value": 2014.270127533053,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1994.9799051115012 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1",
            "value": 3090.8852678572475,
            "unit": "ns/iter",
            "extra": "iterations: 224000\ncpu: 3069.1964285714284 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1",
            "value": 6822.505580356923,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6801.060267857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1",
            "value": 21645.67500000203,
            "unit": "ns/iter",
            "extra": "iterations: 32000\ncpu: 21972.65625 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1",
            "value": 75020.91964285893,
            "unit": "ns/iter",
            "extra": "iterations: 11200\ncpu: 75334.82142857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1",
            "value": 326787.901785711,
            "unit": "ns/iter",
            "extra": "iterations: 2240\ncpu: 327845.98214285716 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/4",
            "value": 8105.693278154553,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 7951.97342869005 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/4",
            "value": 12402.100000002747,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 12451.171875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/4",
            "value": 27440.27624938272,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 27273.934656395857 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/4",
            "value": 84307.08705358114,
            "unit": "ns/iter",
            "extra": "iterations: 8960\ncpu: 83705.35714285714 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/4",
            "value": 308501.5267176087,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 304813.401187447 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/4",
            "value": 1289910.642570424,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1286395.5823293172 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/16",
            "value": 33015.033047394514,
            "unit": "ns/iter",
            "extra": "iterations: 21333\ncpu: 32959.49936717761 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/16",
            "value": 50298.75999998694,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/16",
            "value": 115122.4107143126,
            "unit": "ns/iter",
            "extra": "iterations: 5600\ncpu: 114397.32142857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/16",
            "value": 346108.0058940134,
            "unit": "ns/iter",
            "extra": "iterations: 2036\ncpu: 345346.2671905697 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/16",
            "value": 1210497.499999974,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1199776.7857142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/16",
            "value": 5283762.499999511,
            "unit": "ns/iter",
            "extra": "iterations: 112\ncpu: 5301339.285714285 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/64",
            "value": 133676.4107142585,
            "unit": "ns/iter",
            "extra": "iterations: 5600\ncpu: 131138.39285714287 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/64",
            "value": 206445.12478236656,
            "unit": "ns/iter",
            "extra": "iterations: 3446\ncpu: 208575.15960533952 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/64",
            "value": 448364.4966847344,
            "unit": "ns/iter",
            "extra": "iterations: 1659\ncpu: 442661.2417118746 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/64",
            "value": 1366664.0562249369,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1380522.0883534136 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/64",
            "value": 5104290.34482764,
            "unit": "ns/iter",
            "extra": "iterations: 145\ncpu: 4956896.551724138 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/64",
            "value": 21119697.058820214,
            "unit": "ns/iter",
            "extra": "iterations: 34\ncpu: 21139705.88235294 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/256",
            "value": 561476.607142757,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 558035.7142857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/256",
            "value": 891356.473214192,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 889369.4196428572 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/256",
            "value": 2079091.5942024698,
            "unit": "ns/iter",
            "extra": "iterations: 345\ncpu: 2083333.3333333333 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/256",
            "value": 6356783.333333422,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 6250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/256",
            "value": 23308675.00000165,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 23437500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/256",
            "value": 103759016.66664807,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 104166666.66666667 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1000",
            "value": 2243356.874999591,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2246093.75 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1000",
            "value": 3621015.8974357075,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 3605769.230769231 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1000",
            "value": 9493773.333333593,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 9375000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1000",
            "value": 28042067.999995198,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 28125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1000",
            "value": 100302714.28571983,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 100446428.57142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1000",
            "value": 436184949.9999835,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 437500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1/manual_time",
            "value": 3467.5889899121335,
            "unit": "ns/iter",
            "extra": "iterations: 193786\ncpu: 10240.032819708338 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1/manual_time",
            "value": 14134.191868595024,
            "unit": "ns/iter",
            "extra": "iterations: 49930\ncpu: 52886.54115762067 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1/manual_time",
            "value": 57600.89293300022,
            "unit": "ns/iter",
            "extra": "iterations: 11759\ncpu: 252466.19610511098 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1/manual_time",
            "value": 256470.430305174,
            "unit": "ns/iter",
            "extra": "iterations: 2719\ncpu: 1247011.7690327326 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1/manual_time",
            "value": 1306709.0579709145,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 6057518.115942029 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1/manual_time",
            "value": 9582916.666666888,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 31684027.777777776 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/4/manual_time",
            "value": 4405.243147768544,
            "unit": "ns/iter",
            "extra": "iterations: 159656\ncpu: 12722.666232399659 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/4/manual_time",
            "value": 16579.08306653988,
            "unit": "ns/iter",
            "extra": "iterations: 40919\ncpu: 84389.28126298297 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/4/manual_time",
            "value": 68959.04260412138,
            "unit": "ns/iter",
            "extra": "iterations: 10445\ncpu: 484681.66586883675 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/4/manual_time",
            "value": 323862.52927400736,
            "unit": "ns/iter",
            "extra": "iterations: 2135\ncpu: 2751756.4402810303 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/4/manual_time",
            "value": 2032365.3295128858,
            "unit": "ns/iter",
            "extra": "iterations: 349\ncpu: 14819126.074498568 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/4/manual_time",
            "value": 18487834.210526526,
            "unit": "ns/iter",
            "extra": "iterations: 38\ncpu: 78947368.42105263 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/16/manual_time",
            "value": 7529.445240663137,
            "unit": "ns/iter",
            "extra": "iterations: 95591\ncpu: 21739.755834754316 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/16/manual_time",
            "value": 25216.156180019145,
            "unit": "ns/iter",
            "extra": "iterations: 27686\ncpu: 195270.17265043705 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/16/manual_time",
            "value": 115886.40527075683,
            "unit": "ns/iter",
            "extra": "iterations: 6223\ncpu: 1441226.0967379077 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/16/manual_time",
            "value": 605010.5488850838,
            "unit": "ns/iter",
            "extra": "iterations: 1166\ncpu: 8911342.195540309 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/16/manual_time",
            "value": 4929144.6043165745,
            "unit": "ns/iter",
            "extra": "iterations: 139\ncpu: 50359712.230215825 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/16/manual_time",
            "value": 53630621.42857175,
            "unit": "ns/iter",
            "extra": "iterations: 14\ncpu: 276785714.28571427 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/64/manual_time",
            "value": 20965.063375381185,
            "unit": "ns/iter",
            "extra": "iterations: 33057\ncpu: 57192.87896663339 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/64/manual_time",
            "value": 69431.63255501202,
            "unit": "ns/iter",
            "extra": "iterations: 10407\ncpu: 671122.801960219 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/64/manual_time",
            "value": 280502.07654722943,
            "unit": "ns/iter",
            "extra": "iterations: 2456\ncpu: 5280435.667752443 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/64/manual_time",
            "value": 1732998.280098288,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 32440110.565110564 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/64/manual_time",
            "value": 15961590.909090923,
            "unit": "ns/iter",
            "extra": "iterations: 44\ncpu: 187855113.63636363 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/64/manual_time",
            "value": 190849733.3333336,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1046875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/256/manual_time",
            "value": 129287.8571428572,
            "unit": "ns/iter",
            "extra": "iterations: 5320\ncpu: 331884.3984962406 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/256/manual_time",
            "value": 411275.0000000012,
            "unit": "ns/iter",
            "extra": "iterations: 1720\ncpu: 2997819.7674418604 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/256/manual_time",
            "value": 1784454.4041450818,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 21939766.839378238 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/256/manual_time",
            "value": 10362916.176470593,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 134880514.70588234 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/256/manual_time",
            "value": 76824469.99999988,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 771875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/256/manual_time",
            "value": 801025900.0000004,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 4265625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1000/manual_time",
            "value": 604325.5340793494,
            "unit": "ns/iter",
            "extra": "iterations: 983\ncpu: 1525940.996948118 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1000/manual_time",
            "value": 2075496.4912280694,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 12609649.122807018 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1000/manual_time",
            "value": 9451716.88311689,
            "unit": "ns/iter",
            "extra": "iterations: 77\ncpu: 91517857.14285715 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1000/manual_time",
            "value": 46344780.00000002,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 546875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1000/manual_time",
            "value": 332404049.9999995,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 3085937500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1000/manual_time",
            "value": 3297407300.000001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 17328125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1/manual_time",
            "value": 8509.13654980391,
            "unit": "ns/iter",
            "extra": "iterations: 83259\ncpu: 9008.035167369293 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1/manual_time",
            "value": 30040.733736762166,
            "unit": "ns/iter",
            "extra": "iterations: 23796\ncpu: 30861.279206589345 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1/manual_time",
            "value": 122889.93561504569,
            "unit": "ns/iter",
            "extra": "iterations: 5902\ncpu: 124428.1599457811 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1/manual_time",
            "value": 524283.2737669748,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 524928.5203716941 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1/manual_time",
            "value": 2156827.0029673567,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2179154.302670623 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1/manual_time",
            "value": 8165416.483516481,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 8070054.945054945 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/4/manual_time",
            "value": 7570.24630870346,
            "unit": "ns/iter",
            "extra": "iterations: 90009\ncpu: 8158.9063315890635 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/4/manual_time",
            "value": 30143.235382181767,
            "unit": "ns/iter",
            "extra": "iterations: 23379\ncpu: 30743.402198554257 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/4/manual_time",
            "value": 125153.27978581119,
            "unit": "ns/iter",
            "extra": "iterations: 5976\ncpu: 125502.00803212852 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/4/manual_time",
            "value": 533811.9743406988,
            "unit": "ns/iter",
            "extra": "iterations: 1403\ncpu: 534568.7811831789 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/4/manual_time",
            "value": 2145872.3723723716,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2158408.4084084085 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/4/manual_time",
            "value": 8347287.356321841,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 8261494.252873563 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/16/manual_time",
            "value": 8953.866902236163,
            "unit": "ns/iter",
            "extra": "iterations: 84900\ncpu: 9570.082449941106 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/16/manual_time",
            "value": 37109.711749546965,
            "unit": "ns/iter",
            "extra": "iterations: 20954\ncpu: 38029.73179345232 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/16/manual_time",
            "value": 147704.5979151157,
            "unit": "ns/iter",
            "extra": "iterations: 5372\ncpu: 148338.6075949367 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/16/manual_time",
            "value": 564238.5626643293,
            "unit": "ns/iter",
            "extra": "iterations: 1141\ncpu: 561459.2462751972 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/16/manual_time",
            "value": 2278129.062499999,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2294921.875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/16/manual_time",
            "value": 9450763.513513515,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 9501689.18918919 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/64/manual_time",
            "value": 12306.166632652868,
            "unit": "ns/iter",
            "extra": "iterations: 53903\ncpu: 12754.39214885999 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/64/manual_time",
            "value": 48829.48255114383,
            "unit": "ns/iter",
            "extra": "iterations: 14127\ncpu: 48665.675656544205 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/64/manual_time",
            "value": 210910.625345878,
            "unit": "ns/iter",
            "extra": "iterations: 3614\ncpu: 211849.750968456 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/64/manual_time",
            "value": 803651.1432009628,
            "unit": "ns/iter",
            "extra": "iterations: 831\ncpu: 808513.8387484958 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/64/manual_time",
            "value": 3328154.054054053,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 3378378.378378378 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/64/manual_time",
            "value": 13519647.169811323,
            "unit": "ns/iter",
            "extra": "iterations: 53\ncpu: 13561320.754716981 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/256/manual_time",
            "value": 58236.275522362484,
            "unit": "ns/iter",
            "extra": "iterations: 12587\ncpu: 58343.92627313895 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/256/manual_time",
            "value": 238477.49395926838,
            "unit": "ns/iter",
            "extra": "iterations: 2897\ncpu: 237314.46323783224 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/256/manual_time",
            "value": 952572.8395061722,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 943072.7023319616 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/256/manual_time",
            "value": 3901867.4418604644,
            "unit": "ns/iter",
            "extra": "iterations: 172\ncpu: 3906250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/256/manual_time",
            "value": 16938769.047619045,
            "unit": "ns/iter",
            "extra": "iterations: 42\ncpu: 16741071.42857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/256/manual_time",
            "value": 67494190.90909089,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 68181818.18181819 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1000/manual_time",
            "value": 269651.2093726382,
            "unit": "ns/iter",
            "extra": "iterations: 2646\ncpu: 271636.43235071807 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1000/manual_time",
            "value": 1114079.3798449608,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1114341.0852713177 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1000/manual_time",
            "value": 4584868.152866242,
            "unit": "ns/iter",
            "extra": "iterations: 157\ncpu: 4578025.477707006 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1000/manual_time",
            "value": 18356724.32432433,
            "unit": "ns/iter",
            "extra": "iterations: 37\ncpu: 18581081.08108108 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1000/manual_time",
            "value": 77090255.55555555,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 76388888.8888889 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1000/manual_time",
            "value": 309293200,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 304687500 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithSvcRef/manual_time",
            "value": 6998.946053463451,
            "unit": "ns/iter",
            "extra": "iterations: 82452\ncpu: 11938.764371998253 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithBundleContext/manual_time",
            "value": 9257.432747527475,
            "unit": "ns/iter",
            "extra": "iterations: 75053\ncpu: 14573.03505522764 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithInterfaceName/manual_time",
            "value": 9171.291388921105,
            "unit": "ns/iter",
            "extra": "iterations: 73208\ncpu: 14513.441153972244 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000",
            "value": 9207.438616069145,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 9242.466517857143 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1024",
            "value": 9486.509435228516,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9626.073097887956 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/2048",
            "value": 9378.48714960949,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/4096",
            "value": 9913.923152127241,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9835.335556537693 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/8192",
            "value": 9634.641809635374,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9626.073097887956 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/16384",
            "value": 9789.106298629638,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9626.073097887956 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/32768",
            "value": 9626.445417651314,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9626.073097887956 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/65536",
            "value": 9784.315695019373,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9835.335556537693 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/131072",
            "value": 10488.134374995183,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10498.046875 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/262144",
            "value": 10969.17245904736,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 11090.910308436123 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/524288",
            "value": 10674.22824005272,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 10672.385391136646 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000000",
            "value": 11164.604687500912,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11230.46875 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/1",
            "value": 40113.29619114592,
            "unit": "ns/iter",
            "extra": "iterations: 18667\ncpu: 40177.853966893446 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/4000",
            "value": 26047265.384617135,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 25841346.153846152 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/10000",
            "value": 76215554.54542513,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 76704545.45454545 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/1",
            "value": 37740.61088195214,
            "unit": "ns/iter",
            "extra": "iterations: 20364\ncpu: 38364.27028088784 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/4000",
            "value": 153967740.00000733,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 153125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/10000",
            "value": 389707999.99992776,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 382812500 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/1",
            "value": 35596.8080357018,
            "unit": "ns/iter",
            "extra": "iterations: 22400\ncpu: 35574.77678571428 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/4000",
            "value": 12302918.749995228,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 12207031.25 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/10000",
            "value": 36414935.00001616,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 36718750 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/1",
            "value": 615.516696428488,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 613.8392857142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/3",
            "value": 1747.9646330598864,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1764.7867646517202 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/7",
            "value": 4152.9418251025545,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 4171.309515518722 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/11",
            "value": 6327.7241071416165,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/15",
            "value": 8966.99746875899,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8998.28572193874 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/18",
            "value": 10651.335937495787,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10742.1875 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/20",
            "value": 11895.64821428998,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11718.75 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/1",
            "value": 7186.150669643406,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7149.832589285715 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/3",
            "value": 9959.43187753858,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 10044.598015187432 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/7",
            "value": 15861.022321429022,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 15694.754464285714 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/11",
            "value": 22441.851894828258,
            "unit": "ns/iter",
            "extra": "iterations: 34462\ncpu: 22216.499332598225 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/15",
            "value": 27679.987142908627,
            "unit": "ns/iter",
            "extra": "iterations: 24889\ncpu: 27622.64454176544 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/18",
            "value": 32784.28256691357,
            "unit": "ns/iter",
            "extra": "iterations: 21333\ncpu: 32959.49936717761 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/20",
            "value": 35139.97250049647,
            "unit": "ns/iter",
            "extra": "iterations: 20364\ncpu: 34527.84325279906 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/1",
            "value": 944.23390882397,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 941.6848474621216 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/3",
            "value": 2566.9341894062463,
            "unit": "ns/iter",
            "extra": "iterations: 263529\ncpu: 2549.52965328294 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/7",
            "value": 5589.30700000019,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5625 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/11",
            "value": 8828.920406609655,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8789.023263289004 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/15",
            "value": 11984.520312495306,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 12207.03125 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/18",
            "value": 14204.198641965522,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 14125.215958857327 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/20",
            "value": 15907.98660714654,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 16043.526785714286 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/1",
            "value": 630.92383928571,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 627.7901785714286 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/3",
            "value": 2212.9036686332934,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2197.263172697352 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/7",
            "value": 5432.637999997497,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/11",
            "value": 8413.142352043053,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8370.498345989527 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/15",
            "value": 11740.146874998914,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 11718.75 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/18",
            "value": 13954.239285713551,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 13950.892857142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/20",
            "value": 15556.859374998208,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 15345.982142857143 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/BundleInstallCppFramework/manual_time",
            "value": 458787.8730158733,
            "unit": "ns/iter",
            "extra": "iterations: 1575\ncpu: 505952.38095238095 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/LargeBundleInstallCppFramework/manual_time",
            "value": 439482.3261858355,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 497482.13125406107 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterFromString",
            "value": 914.764279123013,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 920.7585175185189 ns\nthreads: 1"
          },
          {
            "name": "ConstructNonTrivialFilterFromString",
            "value": 1445.2848458549513,
            "unit": "ns/iter",
            "extra": "iterations: 497778\ncpu: 1443.9167661085867 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Simple",
            "value": 643.6115178571201,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 641.7410714285714 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Complex",
            "value": 710.7547321429106,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 711.4955357142857 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Simple",
            "value": 302.124734137879,
            "unit": "ns/iter",
            "extra": "iterations: 2357895\ncpu: 304.8269749077037 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Complex",
            "value": 483.6847244011581,
            "unit": "ns/iter",
            "extra": "iterations: 1445161\ncpu: 486.53748613476284 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Simple",
            "value": 268.9950817413855,
            "unit": "ns/iter",
            "extra": "iterations: 2488889\ncpu: 269.9497647343855 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Complex",
            "value": 343.01344422086834,
            "unit": "ns/iter",
            "extra": "iterations: 2133333\ncpu: 344.23833503723984 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterIncremental",
            "value": 3226.233482142301,
            "unit": "ns/iter",
            "extra": "iterations: 224000\ncpu: 3208.7053571428573 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterNotOperator",
            "value": 1305.3728770649614,
            "unit": "ns/iter",
            "extra": "iterations: 497778\ncpu: 1286.9692915315663 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByInterface",
            "value": 1483.7064732142428,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1464.84375 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByClassName",
            "value": 1325.7905357144346,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1311.3839285714287 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterface",
            "value": 1398.934731191408,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1422.9923419574482 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassName",
            "value": 939.2584646168078,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 941.6848474621216 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassNameAndLDAPFilter",
            "value": 1033.2989137054244,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 1046.3164971801352 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterfaceAndLDAPFilter",
            "value": 967.577916259728,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 962.6111774057243 ns\nthreads: 1"
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
          "id": "3c5de4f90412e63688d0b7aeca0bf0ba64f610b3",
          "message": "include cstdint in FileSystem.cpp (#850) (#897)\n\nvcpkg installation is failing, with this error: \r\n\r\nPATH/v3.6.0-e25b133cd3.clean/util/src/FileSystem.cpp:122:3: error: ‘uint32_t’ was not declared in this scope\r\n\r\nPATH/v3.6.0-e25b133cd3.clean/util/src/FileSystem.cpp:71:1: note: ‘uint32_t’ is defined in header ‘<cstdint>’; did you forget to ‘#include <cstdint>’?\r\n\r\nSure enough, when patched with this it will build and install correctly with vcpkg. Other errors are reported but this is the culprit.\r\n\r\nCo-authored-by: Tristan Ayala <ayalat1@unlv.nevada.edu>",
          "timestamp": "2023-08-07T11:14:21-04:00",
          "tree_id": "83fbd0454909933d0246232ed16c8cb662fe46e7",
          "url": "https://github.com/insi-eb/CppMicroServices-cpp14/commit/3c5de4f90412e63688d0b7aeca0bf0ba64f610b3"
        },
        "date": 1691424027402,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1/manual_time",
            "value": 24864.246163105705,
            "unit": "ns/iter",
            "extra": "iterations: 33230\ncpu: 25391.21275955462 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1/manual_time",
            "value": 96831.25540190292,
            "unit": "ns/iter",
            "extra": "iterations: 9256\ncpu: 99597.55834053586 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1/manual_time",
            "value": 377346.4374688638,
            "unit": "ns/iter",
            "extra": "iterations: 2007\ncpu: 381477.3293472845 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1/manual_time",
            "value": 1551169.3404634607,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1587566.844919786 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1/manual_time",
            "value": 5914369.000000111,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6093750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1/manual_time",
            "value": 23715323.529412165,
            "unit": "ns/iter",
            "extra": "iterations: 34\ncpu: 24356617.647058822 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/4/manual_time",
            "value": 60120.240000000056,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60937.5 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/4/manual_time",
            "value": 248626.00487210602,
            "unit": "ns/iter",
            "extra": "iterations: 3284\ncpu: 252169.6102314251 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/4/manual_time",
            "value": 1006862.0985010696,
            "unit": "ns/iter",
            "extra": "iterations: 934\ncpu: 1020476.4453961456 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/4/manual_time",
            "value": 3966600,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4027061.855670103 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/4/manual_time",
            "value": 16047100.00000004,
            "unit": "ns/iter",
            "extra": "iterations: 54\ncpu: 16203703.703703703 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/4/manual_time",
            "value": 59725930.000000164,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 60937500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/16/manual_time",
            "value": 198956.79765130926,
            "unit": "ns/iter",
            "extra": "iterations: 4428\ncpu: 201134.82384823848 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/16/manual_time",
            "value": 800089.3449092328,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 801598.2636148382 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/16/manual_time",
            "value": 3081169.2913385765,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3137303.149606299 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/16/manual_time",
            "value": 12741973.611111082,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 13237847.222222222 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/16/manual_time",
            "value": 49300579.99999997,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 50000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/16/manual_time",
            "value": 194158075.00000003,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 191406250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/64/manual_time",
            "value": 619520.4000000006,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 640625 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/64/manual_time",
            "value": 2600548.640483385,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2643504.5317220544 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/64/manual_time",
            "value": 10576712.371134033,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 10792525.773195876 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/64/manual_time",
            "value": 40826642.105263226,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 41118421.05263158 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/64/manual_time",
            "value": 168357850.0000001,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 171875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/64/manual_time",
            "value": 619437700.0000002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 625000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/256/manual_time",
            "value": 2248127.0022883313,
            "unit": "ns/iter",
            "extra": "iterations: 437\ncpu: 2324084.6681922195 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/256/manual_time",
            "value": 9133656.83453237,
            "unit": "ns/iter",
            "extra": "iterations: 139\ncpu: 9330035.97122302 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/256/manual_time",
            "value": 34373235.99999997,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 35000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/256/manual_time",
            "value": 143307662.50000018,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 144531250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/256/manual_time",
            "value": 502119799.9999999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 515625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/256/manual_time",
            "value": 2487762300.000001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2531250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1000/manual_time",
            "value": 6357548.000000001,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6562500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1000/manual_time",
            "value": 27519297.142857134,
            "unit": "ns/iter",
            "extra": "iterations: 35\ncpu: 28571428.57142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1000/manual_time",
            "value": 118633816.66666664,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 121093750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1000/manual_time",
            "value": 428929900.0000001,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 445312500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1000/manual_time",
            "value": 1983634200.0000002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2046875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1000/manual_time",
            "value": 9994565299.999996,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10171875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1/manual_time",
            "value": 24339.876239876532,
            "unit": "ns/iter",
            "extra": "iterations: 32967\ncpu: 24645.85797919131 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1/manual_time",
            "value": 154508.0208564457,
            "unit": "ns/iter",
            "extra": "iterations: 9014\ncpu: 156007.3219436432 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1/manual_time",
            "value": 560288.6817576545,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 572153.7949400799 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1/manual_time",
            "value": 2658051.5021459223,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 2682403.433476395 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1/manual_time",
            "value": 10414888,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10468750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1/manual_time",
            "value": 41885607.69230784,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 42067307.692307696 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/4/manual_time",
            "value": 61249.08999999993,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/4/manual_time",
            "value": 321231.7008603583,
            "unit": "ns/iter",
            "extra": "iterations: 3022\ncpu: 325736.2673726009 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/4/manual_time",
            "value": 1472873.2018561529,
            "unit": "ns/iter",
            "extra": "iterations: 862\ncpu: 1504495.3596287703 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/4/manual_time",
            "value": 5343158.389261751,
            "unit": "ns/iter",
            "extra": "iterations: 149\ncpu: 5453020.134228188 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/4/manual_time",
            "value": 24305446.938775614,
            "unit": "ns/iter",
            "extra": "iterations: 49\ncpu: 24553571.42857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/4/manual_time",
            "value": 82624199.99999978,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 82812500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/16/manual_time",
            "value": 200868.77657061905,
            "unit": "ns/iter",
            "extra": "iterations: 4234\ncpu: 202970.00472366557 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/16/manual_time",
            "value": 915679.6193497214,
            "unit": "ns/iter",
            "extra": "iterations: 1261\ncpu: 929321.9666931008 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/16/manual_time",
            "value": 3581484.23236514,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3630705.394190871 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/16/manual_time",
            "value": 15457995.774647875,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/16/manual_time",
            "value": 52842799.999999955,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 53125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/16/manual_time",
            "value": 223485774.99999976,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 226562500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/64/manual_time",
            "value": 644910.3999999998,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 656250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/64/manual_time",
            "value": 2660018.475073313,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2703445.7478005863 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/64/manual_time",
            "value": 11463115.841584155,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 11448019.801980197 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/64/manual_time",
            "value": 42952355.55555556,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 43402777.777777776 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/64/manual_time",
            "value": 173991699.99999985,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 178125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/64/manual_time",
            "value": 639470799.9999993,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 656250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/256/manual_time",
            "value": 2269588.0952380956,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2306547.619047619 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/256/manual_time",
            "value": 8411636.000000007,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 8593750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/256/manual_time",
            "value": 35091556.00000001,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 35625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/256/manual_time",
            "value": 147913550.00000006,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 150390625 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/256/manual_time",
            "value": 520153400.0000001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 531250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/256/manual_time",
            "value": 2578008500.0000043,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2609375000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1000/manual_time",
            "value": 6484113.999999999,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6718750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1000/manual_time",
            "value": 26225548.7179487,
            "unit": "ns/iter",
            "extra": "iterations: 39\ncpu: 26842948.717948716 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1000/manual_time",
            "value": 115291083.33333333,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 117187500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1000/manual_time",
            "value": 421632849.9999999,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 429687500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1000/manual_time",
            "value": 2035187499.9999993,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2078125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1000/manual_time",
            "value": 10320021400.000002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10500000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1",
            "value": 1476.9565951087213,
            "unit": "ns/iter",
            "extra": "iterations: 497778\ncpu: 1475.3062610239906 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1",
            "value": 2273.5966812536262,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2249.5789625234793 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1",
            "value": 5121.447000001353,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1",
            "value": 16049.19196428816,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 16043.526785714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1",
            "value": 55350.04999999274,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57812.5 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1",
            "value": 212747.06250004272,
            "unit": "ns/iter",
            "extra": "iterations: 3200\ncpu: 214843.75 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/4",
            "value": 5872.6709999996265,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5937.5 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/4",
            "value": 9098.036615906887,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8998.28572193874 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/4",
            "value": 20568.460913471215,
            "unit": "ns/iter",
            "extra": "iterations: 34462\ncpu: 20856.30549590854 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/4",
            "value": 63659.767857140134,
            "unit": "ns/iter",
            "extra": "iterations: 11200\ncpu: 64174.107142857145 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/4",
            "value": 224590.62499997628,
            "unit": "ns/iter",
            "extra": "iterations: 3200\ncpu: 224609.375 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/4",
            "value": 848533.1994644433,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 836680.0535475235 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/16",
            "value": 23844.83571428778,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 23437.5 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/16",
            "value": 36523.42101033831,
            "unit": "ns/iter",
            "extra": "iterations: 18667\ncpu: 35992.66084534205 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/16",
            "value": 82366.85267856305,
            "unit": "ns/iter",
            "extra": "iterations: 8960\ncpu: 81961.49553571429 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/16",
            "value": 255286.28571432168,
            "unit": "ns/iter",
            "extra": "iterations: 2800\ncpu: 251116.07142857142 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/16",
            "value": 896943.638392703,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 889369.4196428572 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/16",
            "value": 3382508.4507041224,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 3374413.145539906 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/64",
            "value": 95599.71876256548,
            "unit": "ns/iter",
            "extra": "iterations: 7467\ncpu: 96256.863532878 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/64",
            "value": 148029.59821429744,
            "unit": "ns/iter",
            "extra": "iterations: 4480\ncpu: 146484.375 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/64",
            "value": 378250.1874665582,
            "unit": "ns/iter",
            "extra": "iterations: 1867\ncpu: 376606.85591858596 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/64",
            "value": 1020164.218749997,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1025390.625 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/64",
            "value": 3561478.4615389886,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 3605769.230769231 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/64",
            "value": 13607253.571430128,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 13392857.142857144 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/256",
            "value": 405976.03017995023,
            "unit": "ns/iter",
            "extra": "iterations: 1723\ncpu: 408081.8340104469 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/256",
            "value": 642697.3214286948,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 655691.9642857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/256",
            "value": 1506557.14285719,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 1499720.982142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/256",
            "value": 4802601.342281445,
            "unit": "ns/iter",
            "extra": "iterations: 149\ncpu: 4718959.731543624 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/256",
            "value": 17009285.36585219,
            "unit": "ns/iter",
            "extra": "iterations: 41\ncpu: 17149390.243902437 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/256",
            "value": 66376909.09091857,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 66761363.63636363 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1000",
            "value": 1612349.5535715905,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 1604352.6785714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1000",
            "value": 2617688.257576026,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 2604166.6666666665 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1000",
            "value": 6229224.999999587,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6093750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1000",
            "value": 20117855.882357188,
            "unit": "ns/iter",
            "extra": "iterations: 34\ncpu: 20220588.23529412 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1000",
            "value": 71898118.18183112,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 71022727.27272727 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1000",
            "value": 274239033.3333636,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 270833333.3333333 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1/manual_time",
            "value": 2600.039329272676,
            "unit": "ns/iter",
            "extra": "iterations: 272062\ncpu: 7695.856091626173 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1/manual_time",
            "value": 10297.5565862543,
            "unit": "ns/iter",
            "extra": "iterations: 68347\ncpu: 38406.952755790306 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1/manual_time",
            "value": 41752.72023813201,
            "unit": "ns/iter",
            "extra": "iterations: 16800\ncpu: 183221.72619047618 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1/manual_time",
            "value": 181023.01362817053,
            "unit": "ns/iter",
            "extra": "iterations: 3889\ncpu: 891938.8017485215 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1/manual_time",
            "value": 906527.3670555206,
            "unit": "ns/iter",
            "extra": "iterations: 771\ncpu: 4276102.464332037 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1/manual_time",
            "value": 6363853.636363484,
            "unit": "ns/iter",
            "extra": "iterations: 110\ncpu: 21732954.545454547 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/4/manual_time",
            "value": 3208.4613168813485,
            "unit": "ns/iter",
            "extra": "iterations: 218713\ncpu: 9287.285163661967 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/4/manual_time",
            "value": 12143.263667264804,
            "unit": "ns/iter",
            "extra": "iterations: 57034\ncpu: 62188.782129957566 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/4/manual_time",
            "value": 49848.71267459446,
            "unit": "ns/iter",
            "extra": "iterations: 14099\ncpu: 357959.78438187105 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/4/manual_time",
            "value": 231052.36037220983,
            "unit": "ns/iter",
            "extra": "iterations: 3008\ncpu: 1999875.3324468085 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/4/manual_time",
            "value": 1421232.727272627,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 10700757.575757576 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/4/manual_time",
            "value": 13142058.49056618,
            "unit": "ns/iter",
            "extra": "iterations: 53\ncpu: 57783018.86792453 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/16/manual_time",
            "value": 5594.651119748872,
            "unit": "ns/iter",
            "extra": "iterations: 124269\ncpu: 16219.853704463703 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/16/manual_time",
            "value": 18887.572207535795,
            "unit": "ns/iter",
            "extra": "iterations: 37046\ncpu: 145933.43410894563 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/16/manual_time",
            "value": 81365.79192908244,
            "unit": "ns/iter",
            "extra": "iterations: 8574\ncpu: 1051507.4644273384 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/16/manual_time",
            "value": 435550.81148564245,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 6447019.350811485 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/16/manual_time",
            "value": 3568535.204081719,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 36591198.97959184 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/16/manual_time",
            "value": 40783270.588235304,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 203125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/64/manual_time",
            "value": 15230.061376303463,
            "unit": "ns/iter",
            "extra": "iterations: 46109\ncpu: 42358.86703246654 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/64/manual_time",
            "value": 46787.81763325554,
            "unit": "ns/iter",
            "extra": "iterations: 14915\ncpu: 482945.02179014415 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/64/manual_time",
            "value": 204708.3625731119,
            "unit": "ns/iter",
            "extra": "iterations: 3420\ncpu: 3801169.590643275 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/64/manual_time",
            "value": 1268974.3542435428,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 24302352.398523986 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/64/manual_time",
            "value": 12099237.931034474,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 138469827.58620688 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/64/manual_time",
            "value": 145710480.00000045,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 775000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/256/manual_time",
            "value": 89804.91845383077,
            "unit": "ns/iter",
            "extra": "iterations: 7787\ncpu: 230753.17837421343 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/256/manual_time",
            "value": 289946.9539991708,
            "unit": "ns/iter",
            "extra": "iterations: 2413\ncpu: 2156288.8520513885 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/256/manual_time",
            "value": 1252080.6797853364,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 16184033.989266548 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/256/manual_time",
            "value": 7431255.319148926,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 100565159.57446809 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/256/manual_time",
            "value": 56072208.333333224,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 582031250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/256/manual_time",
            "value": 615680299.9999996,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 3187500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1000/manual_time",
            "value": 413433.88724035607,
            "unit": "ns/iter",
            "extra": "iterations: 1685\ncpu: 1066394.6587537092 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1000/manual_time",
            "value": 1378536.3636363654,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 9047677.865612648 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1000/manual_time",
            "value": 6762331.067961168,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 67506067.96116506 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1000/manual_time",
            "value": 36215015.789473705,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 410361842.1052632 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1000/manual_time",
            "value": 251474133.33333358,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 2270833333.3333335 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1000/manual_time",
            "value": 2628221699.999999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 13171875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1/manual_time",
            "value": 5577.645802854862,
            "unit": "ns/iter",
            "extra": "iterations: 126455\ncpu: 6054.525325214503 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1/manual_time",
            "value": 21981.074185115478,
            "unit": "ns/iter",
            "extra": "iterations: 31354\ncpu: 22425.36837405116 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1/manual_time",
            "value": 88728.64844050657,
            "unit": "ns/iter",
            "extra": "iterations: 7791\ncpu: 90248.36349634193 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1/manual_time",
            "value": 384919.21487603313,
            "unit": "ns/iter",
            "extra": "iterations: 1936\ncpu: 395467.45867768594 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1/manual_time",
            "value": 1771104.9217002233,
            "unit": "ns/iter",
            "extra": "iterations: 447\ncpu: 1782718.1208053692 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1/manual_time",
            "value": 5774517.355371899,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 5810950.413223141 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/4/manual_time",
            "value": 5704.7168500985845,
            "unit": "ns/iter",
            "extra": "iterations: 122391\ncpu: 6127.901561389318 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/4/manual_time",
            "value": 22638.745933152877,
            "unit": "ns/iter",
            "extra": "iterations: 30429\ncpu: 23107.06891452233 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/4/manual_time",
            "value": 91766.03920550722,
            "unit": "ns/iter",
            "extra": "iterations: 7703\ncpu: 93307.80215500454 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/4/manual_time",
            "value": 369534.85411140585,
            "unit": "ns/iter",
            "extra": "iterations: 1885\ncpu: 373010.6100795756 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/4/manual_time",
            "value": 1574505.7649667405,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 1559035.4767184036 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/4/manual_time",
            "value": 5865630.172413796,
            "unit": "ns/iter",
            "extra": "iterations: 116\ncpu: 5926724.137931035 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/16/manual_time",
            "value": 6488.7199414864235,
            "unit": "ns/iter",
            "extra": "iterations: 109370\ncpu: 7000.32001462924 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/16/manual_time",
            "value": 25729.677775730517,
            "unit": "ns/iter",
            "extra": "iterations: 27155\ncpu: 26468.42202172712 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/16/manual_time",
            "value": 103663.16258351927,
            "unit": "ns/iter",
            "extra": "iterations: 6735\ncpu: 104398.66369710468 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/16/manual_time",
            "value": 412632.24440411205,
            "unit": "ns/iter",
            "extra": "iterations: 1653\ncpu: 415910.4658197217 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/16/manual_time",
            "value": 1792082.8358208947,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 1787935.3233830845 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/16/manual_time",
            "value": 6673965.420560746,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 6571261.6822429905 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/64/manual_time",
            "value": 9163.678311593196,
            "unit": "ns/iter",
            "extra": "iterations: 76285\ncpu: 9626.72871468834 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/64/manual_time",
            "value": 36662.454319156415,
            "unit": "ns/iter",
            "extra": "iterations: 18881\ncpu: 37239.81780626026 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/64/manual_time",
            "value": 147390.57167235247,
            "unit": "ns/iter",
            "extra": "iterations: 4688\ncpu: 149984.00170648465 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/64/manual_time",
            "value": 600556.8791946309,
            "unit": "ns/iter",
            "extra": "iterations: 1192\ncpu: 602978.187919463 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/64/manual_time",
            "value": 2433024.2753623193,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 2434329.7101449277 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/64/manual_time",
            "value": 10193812.328767119,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 10273972.602739725 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/256/manual_time",
            "value": 44269.71977987124,
            "unit": "ns/iter",
            "extra": "iterations: 15809\ncpu: 44476.24770700234 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/256/manual_time",
            "value": 177921.19357306897,
            "unit": "ns/iter",
            "extra": "iterations: 3921\ncpu: 179322.8768171385 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/256/manual_time",
            "value": 716859.175257733,
            "unit": "ns/iter",
            "extra": "iterations: 970\ncpu: 724871.1340206185 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/256/manual_time",
            "value": 2969757.9831932765,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 2954306.722689076 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/256/manual_time",
            "value": 12671773.684210528,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 12609649.122807018 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/256/manual_time",
            "value": 50376357.14285714,
            "unit": "ns/iter",
            "extra": "iterations: 14\ncpu: 50223214.28571428 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1000/manual_time",
            "value": 199895.97523219849,
            "unit": "ns/iter",
            "extra": "iterations: 3553\ncpu: 202293.836194765 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1000/manual_time",
            "value": 803708.4937712349,
            "unit": "ns/iter",
            "extra": "iterations: 883\ncpu: 796291.0532276331 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1000/manual_time",
            "value": 3233000.0000000023,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 3270348.8372093025 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1000/manual_time",
            "value": 13760741.509433962,
            "unit": "ns/iter",
            "extra": "iterations: 53\ncpu: 13856132.075471697 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1000/manual_time",
            "value": 55496669.23076923,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 55288461.538461536 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1000/manual_time",
            "value": 227055266.66666663,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 229166666.66666666 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithSvcRef/manual_time",
            "value": 5169.3686418870375,
            "unit": "ns/iter",
            "extra": "iterations: 132508\ncpu: 9315.475292057838 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithBundleContext/manual_time",
            "value": 6440.882070950917,
            "unit": "ns/iter",
            "extra": "iterations: 109515\ncpu: 10843.2634798886 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithInterfaceName/manual_time",
            "value": 6390.400141218574,
            "unit": "ns/iter",
            "extra": "iterations: 107637\ncpu: 10742.123990821001 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000",
            "value": 6868.08482142912,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6801.060267857143 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1024",
            "value": 6771.005357141543,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/2048",
            "value": 6839.8526785732165,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6801.060267857143 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/4096",
            "value": 6879.492857141908,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6835.9375 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/8192",
            "value": 6942.541071428617,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6835.9375 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/16384",
            "value": 7017.64464285962,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6975.446428571428 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/32768",
            "value": 7081.6339285733375,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7149.832589285715 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/65536",
            "value": 7379.5714285702325,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7324.21875 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/131072",
            "value": 7500.082589285536,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7498.604910714285 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/262144",
            "value": 7527.84598214516,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7498.604910714285 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/524288",
            "value": 7708.8359374956535,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7672.991071428572 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000000",
            "value": 8044.010044641376,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/1",
            "value": 27984.655305186556,
            "unit": "ns/iter",
            "extra": "iterations: 29867\ncpu: 27727.090099440855 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/4000",
            "value": 16761321.951213263,
            "unit": "ns/iter",
            "extra": "iterations: 41\ncpu: 16768292.68292683 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/10000",
            "value": 53434689.99999459,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 53125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/1",
            "value": 27649.65357143215,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 27901.785714285714 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/4000",
            "value": 113332114.28570524,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 113839285.71428572 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/10000",
            "value": 280803599.999975,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 286458333.3333333 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/1",
            "value": 26667.415542236366,
            "unit": "ns/iter",
            "extra": "iterations: 29867\ncpu: 26157.632169283825 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/4000",
            "value": 10229650.000006529,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 10253906.25 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/10000",
            "value": 29755432.000001743,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 30000000 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/1",
            "value": 456.8853028761215,
            "unit": "ns/iter",
            "extra": "iterations: 1493333\ncpu: 449.9163950706239 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/3",
            "value": 1352.372857142622,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1367.1875 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/7",
            "value": 3079.2660714281187,
            "unit": "ns/iter",
            "extra": "iterations: 224000\ncpu: 3069.1964285714284 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/11",
            "value": 4832.6628193415645,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4865.378228016275 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/15",
            "value": 6596.181250001467,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/18",
            "value": 7912.7031249979855,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/20",
            "value": 8834.168526783109,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8893.69419642857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/1",
            "value": 5753.514000002724,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5781.25 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/3",
            "value": 8143.523912836432,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 7951.97342869005 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/7",
            "value": 12645.516071423961,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12555.80357142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/11",
            "value": 17490.659758885125,
            "unit": "ns/iter",
            "extra": "iterations: 40727\ncpu: 17647.997642841357 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/15",
            "value": 22049.278125010118,
            "unit": "ns/iter",
            "extra": "iterations: 32000\ncpu: 21972.65625 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/18",
            "value": 25438.29642856313,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 25669.64285714286 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/20",
            "value": 27768.672907704684,
            "unit": "ns/iter",
            "extra": "iterations: 24889\ncpu: 27622.64454176544 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/1",
            "value": 713.6012276787491,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 714.9832589285714 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/3",
            "value": 1920.4945718705249,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1925.2249332365475 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/7",
            "value": 4340.692499999932,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4296.875 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/11",
            "value": 6656.535714284928,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6556.919642857143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/15",
            "value": 9109.902634362656,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9207.54818058848 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/18",
            "value": 10815.009375001238,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10742.1875 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/20",
            "value": 12069.328125001277,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 12207.03125 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/1",
            "value": 452.8168867894538,
            "unit": "ns/iter",
            "extra": "iterations: 1493333\ncpu: 449.9163950706239 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/3",
            "value": 1677.4303722572326,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1649.691975652695 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/7",
            "value": 4023.3169642840085,
            "unit": "ns/iter",
            "extra": "iterations: 179200\ncpu: 4010.8816964285716 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/11",
            "value": 6431.918526784232,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/15",
            "value": 8843.760965354255,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8998.28572193874 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/18",
            "value": 10612.214231183692,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 10672.385391136646 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/20",
            "value": 11739.587500000784,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11718.75 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/BundleInstallCppFramework/manual_time",
            "value": 237280.46687263978,
            "unit": "ns/iter",
            "extra": "iterations: 2913\ncpu: 257466.52935118435 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/LargeBundleInstallCppFramework/manual_time",
            "value": 236508.47514180804,
            "unit": "ns/iter",
            "extra": "iterations: 2997\ncpu: 260677.34401067733 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterFromString",
            "value": 684.3577678572339,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 683.59375 ns\nthreads: 1"
          },
          {
            "name": "ConstructNonTrivialFilterFromString",
            "value": 1053.223124999647,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1049.8046875 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Simple",
            "value": 458.1909442345682,
            "unit": "ns/iter",
            "extra": "iterations: 1544828\ncpu: 465.26215216192355 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Complex",
            "value": 513.5730000001786,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 515.625 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Simple",
            "value": 222.51096874995824,
            "unit": "ns/iter",
            "extra": "iterations: 3200000\ncpu: 224.609375 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Complex",
            "value": 370.85473734738895,
            "unit": "ns/iter",
            "extra": "iterations: 1866667\ncpu: 368.30350566008826 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Simple",
            "value": 184.66263255908282,
            "unit": "ns/iter",
            "extra": "iterations: 3733333\ncpu: 184.1518021564109 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Complex",
            "value": 238.85012959270216,
            "unit": "ns/iter",
            "extra": "iterations: 2986667\ncpu: 240.6528749271345 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterIncremental",
            "value": 2300.426896843815,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2301.8947523496067 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterNotOperator",
            "value": 985.990943754137,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 983.537507349327 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByInterface",
            "value": 1087.980781250053,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1098.6328125 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByClassName",
            "value": 942.0503383707256,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 941.6848474621216 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterface",
            "value": 899.2359374998061,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 889.3694196428571 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassName",
            "value": 677.879017857208,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 662.6674107142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassNameAndLDAPFilter",
            "value": 802.5877232142874,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 802.1763392857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterfaceAndLDAPFilter",
            "value": 738.7670758929638,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 732.421875 ns\nthreads: 1"
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
          "id": "46a083e9b54c1f0198f75a83279f76a16cab212a",
          "message": "Fixes #840: removes manual reference counting (#841) (#898)\n\n* converted registration\r\n\r\n* compiled, not passeD\r\n\r\n* fixed weak_ptr error, now leaking mock objects\r\n\r\n* fixed bug, need to decrement ref count\r\n\r\n* updats from last week, test cases failing because of out of date expectations\r\n\r\n* all tests are passing with shared and weak pointers to serviceRegistrationBasePrivate\r\n\r\n* still passing tests, updated comments and cleaned up\r\n\r\n* updating to share dependents\r\n\r\n* new issue with dying service\r\n\r\n* added coreInfo, maybe passing\r\n\r\n* passing tests, removed manual ref counting from referenceBasePrivate, repeated all fast tests to ensure no sporadic failures\r\n\r\n* updated comments\r\n\r\n* updates before PR\r\n\r\n* Removed manual reference counting\r\n\r\nThe manual reference counting in ServiceRegistrationBasePrivate and ServiceReferenceBasePrivate were removed. Additionally, some properties of ServiceRegistrationBasePrivate were offloaded to a new class ServiceRegistrationCoreInfo which both ServiceRegistrationBasePrivate and ServiceReferenceBasePrivate can access allowing ServiceReferenceBasePrivate to give up ownership of ServiceRegistrationBasePrivate.\r\n\r\n\r\n\r\n* Removed manual reference counting and merged with upstream (#840)\r\n\r\nThe manual reference counting in ServiceRegistrationBasePrivate and ServiceReferenceBasePrivate were removed. Additionally, some properties of ServiceRegistrationBasePrivate were offloaded to a new class ServiceRegistrationCoreInfo which both ServiceRegistrationBasePrivate and ServiceReferenceBasePrivate can access allowing ServiceReferenceBasePrivate to give up ownership of ServiceRegistrationBasePrivate.\r\n\r\n\r\n\r\n* ServiceRegistrationCoreInfo now default destructor\r\n\r\n* Updated based on Patty's comments #840\r\n\r\n* updated ServiceReferenceBase Constructors for clarity with shared_ptrs\r\n\r\n* removed 'move' from serviceRegistry\r\n\r\n* attempt at solving mac issue\r\n\r\n* updates for lock type and removing unneccessary functions from reference\r\n\r\n* lost lock\r\n\r\n* changed to custom atomic load\r\n\r\n* LockSet addition\r\n\r\n* threading support in LockSet\r\n\r\n* LockSet not threaded\r\n\r\n* no names in func dec\r\n\r\n* Incoorporated Jeff's Comments\r\n\r\n* Assignment operator didn't fail on my computer, did in github\r\n\r\n* updated for Jeff's 5/16 comments\r\n\r\n* clang update\r\n\r\n* mikes comments and fixes for multithreaded support\r\n\r\n* remove ifdefs from BundleRegistry, abide by rule of (0,3,5), and add comments\r\n\r\n---------\r\n\r\n\r\n\r\nadaptations for C++14:\r\n* move initialization statements out of if clauses\r\n\r\nSigned-off-by: Ingmar Sittl <ingmar.sittl@elektrobit.com>\r\nCo-authored-by: tcormackMW <113473781+tcormackMW@users.noreply.github.com>",
          "timestamp": "2023-08-08T07:01:50-04:00",
          "tree_id": "822f0e89603700d87ff8a3fe9e58a4821dc95387",
          "url": "https://github.com/insi-eb/CppMicroServices-cpp14/commit/46a083e9b54c1f0198f75a83279f76a16cab212a"
        },
        "date": 1691507864882,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1/manual_time",
            "value": 50390.88678119001,
            "unit": "ns/iter",
            "extra": "iterations: 15077\ncpu: 50780.99091331167 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1/manual_time",
            "value": 194778.17199248355,
            "unit": "ns/iter",
            "extra": "iterations: 4256\ncpu: 194578.242481203 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1/manual_time",
            "value": 820577.502001607,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 838170.5364291433 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1/manual_time",
            "value": 3157657.9591836995,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3188775.5102040814 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1/manual_time",
            "value": 12918270.588235397,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 13097426.470588235 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1/manual_time",
            "value": 48627780.00000015,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 50000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/4/manual_time",
            "value": 144763.6786786792,
            "unit": "ns/iter",
            "extra": "iterations: 6660\ncpu: 145457.95795795796 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/4/manual_time",
            "value": 547337.8999999999,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 546875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/4/manual_time",
            "value": 2399820.725388601,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2388277.202072539 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/4/manual_time",
            "value": 9106186.363636399,
            "unit": "ns/iter",
            "extra": "iterations: 110\ncpu: 9090909.090909092 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/4/manual_time",
            "value": 35864990.47619057,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 36458333.333333336 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/4/manual_time",
            "value": 141631833.3333331,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 143229166.66666666 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/16/manual_time",
            "value": 451024.81971153856,
            "unit": "ns/iter",
            "extra": "iterations: 1664\ncpu: 450721.1538461539 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/16/manual_time",
            "value": 1834778.2881002096,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1859342.3799582464 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/16/manual_time",
            "value": 7663241.999999994,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7812500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/16/manual_time",
            "value": 29215153.571428604,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 29575892.85714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/16/manual_time",
            "value": 118392224.99999999,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 119140625 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/16/manual_time",
            "value": 457925800.0000003,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 460937500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/64/manual_time",
            "value": 1486264.8449039876,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1500184.6381093059 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/64/manual_time",
            "value": 5536316.000000003,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/64/manual_time",
            "value": 25307505.55555557,
            "unit": "ns/iter",
            "extra": "iterations: 36\ncpu: 25173611.111111112 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/64/manual_time",
            "value": 101765690.90909094,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 102272727.27272727 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/64/manual_time",
            "value": 362099000.0000004,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 367187500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/64/manual_time",
            "value": 1628458899.999999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1625000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/256/manual_time",
            "value": 4681096.969696968,
            "unit": "ns/iter",
            "extra": "iterations: 165\ncpu: 4734848.484848484 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/256/manual_time",
            "value": 20587635.18518519,
            "unit": "ns/iter",
            "extra": "iterations: 54\ncpu: 20833333.333333332 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/256/manual_time",
            "value": 75312529.99999997,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 76562500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/256/manual_time",
            "value": 317687733.33333355,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 322916666.6666667 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/256/manual_time",
            "value": 1313704899.999999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1328125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/256/manual_time",
            "value": 6644420200.000005,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6718750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1000/manual_time",
            "value": 16668482.10526316,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 16940789.47368421 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1000/manual_time",
            "value": 50025380,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 51562500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1000/manual_time",
            "value": 245950219.99999994,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 250000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1000/manual_time",
            "value": 902420099.9999999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 906250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1000/manual_time",
            "value": 5221228500.000001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5281250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1000/manual_time",
            "value": 26760987100.000023,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 27046875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1/manual_time",
            "value": 51029.484149054726,
            "unit": "ns/iter",
            "extra": "iterations: 14384\ncpu: 53227.544493882095 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1/manual_time",
            "value": 241227.3488793293,
            "unit": "ns/iter",
            "extra": "iterations: 4417\ncpu: 244085.35204890196 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1/manual_time",
            "value": 1103365.982636149,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 1109905.2880820837 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1/manual_time",
            "value": 3930947.1428571492,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 3943452.380952381 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1/manual_time",
            "value": 19523656.338028233,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 19806338.028169014 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1/manual_time",
            "value": 59054969.999999784,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 60937500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/4/manual_time",
            "value": 149374.4610542882,
            "unit": "ns/iter",
            "extra": "iterations: 6355\ncpu: 149980.33044846577 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/4/manual_time",
            "value": 565072.6999999989,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/4/manual_time",
            "value": 2594812.3989218306,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2611185.983827493 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/4/manual_time",
            "value": 10976532.432432443,
            "unit": "ns/iter",
            "extra": "iterations: 111\ncpu: 11120495.495495496 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/4/manual_time",
            "value": 41275285.00000003,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 41406250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/4/manual_time",
            "value": 161489000.00000012,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 161458333.33333334 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/16/manual_time",
            "value": 438232.13859020325,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 438694.743130227 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/16/manual_time",
            "value": 1802298.5294117657,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1809512.8676470588 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/16/manual_time",
            "value": 7724553.000000011,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7656250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/16/manual_time",
            "value": 31280472.413793094,
            "unit": "ns/iter",
            "extra": "iterations: 29\ncpu: 31250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/16/manual_time",
            "value": 128030599.9999999,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 128472222.22222222 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/16/manual_time",
            "value": 470755149.99999994,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 476562500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/64/manual_time",
            "value": 1513357.1675302258,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1511226.2521588947 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/64/manual_time",
            "value": 5301819.000000001,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5312500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/64/manual_time",
            "value": 23952735.89743592,
            "unit": "ns/iter",
            "extra": "iterations: 39\ncpu: 24439102.564102564 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/64/manual_time",
            "value": 99127008.3333333,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 100260416.66666667 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/64/manual_time",
            "value": 356068350.0000001,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 359375000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/64/manual_time",
            "value": 1608607299.9999998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1593750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/256/manual_time",
            "value": 5031081.875000001,
            "unit": "ns/iter",
            "extra": "iterations: 160\ncpu: 5078125 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/256/manual_time",
            "value": 18558856.451612893,
            "unit": "ns/iter",
            "extra": "iterations: 62\ncpu: 18649193.548387095 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/256/manual_time",
            "value": 73991709.99999997,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 73437500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/256/manual_time",
            "value": 318760166.6666667,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 322916666.6666667 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/256/manual_time",
            "value": 1387682799.9999998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1390625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/256/manual_time",
            "value": 6816041500.000005,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6875000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1000/manual_time",
            "value": 16579620.833333338,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 16927083.333333332 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1000/manual_time",
            "value": 50108106.66666666,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 51041666.666666664 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1000/manual_time",
            "value": 224915140.00000006,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 231250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1000/manual_time",
            "value": 948214599.9999998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 953125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1000/manual_time",
            "value": 5202900900.000002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5265625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1000/manual_time",
            "value": 26429957900.00002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 26687500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1",
            "value": 3143.5968749998924,
            "unit": "ns/iter",
            "extra": "iterations: 224000\ncpu: 3138.9508928571427 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1",
            "value": 6281.147321429005,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6277.901785714285 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1",
            "value": 16129.895802643056,
            "unit": "ns/iter",
            "extra": "iterations: 37333\ncpu: 15904.159858570165 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1",
            "value": 61633.54000000254,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60937.5 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1",
            "value": 218640.37499994994,
            "unit": "ns/iter",
            "extra": "iterations: 3200\ncpu: 219726.5625 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1",
            "value": 861167.5223212854,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 854492.1875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/4",
            "value": 12957.510714284937,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 13113.839285714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/4",
            "value": 23878.11785714738,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 23995.535714285714 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/4",
            "value": 65110.83035714396,
            "unit": "ns/iter",
            "extra": "iterations: 11200\ncpu: 64174.107142857145 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/4",
            "value": 244290.53571428283,
            "unit": "ns/iter",
            "extra": "iterations: 2800\ncpu: 245535.7142857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/4",
            "value": 876390.896920899,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 878514.0562248996 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/4",
            "value": 3411563.725490833,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 3370098.0392156863 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/16",
            "value": 50992.68750001329,
            "unit": "ns/iter",
            "extra": "iterations: 11200\ncpu: 51618.30357142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/16",
            "value": 95223.63733761333,
            "unit": "ns/iter",
            "extra": "iterations: 7467\ncpu: 94164.32302129369 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/16",
            "value": 269471.99240986357,
            "unit": "ns/iter",
            "extra": "iterations: 2635\ncpu: 272770.39848197345 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/16",
            "value": 1005949.7991970034,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 1004016.0642570282 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/16",
            "value": 3550855.0802132767,
            "unit": "ns/iter",
            "extra": "iterations: 187\ncpu: 3509358.2887700535 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/16",
            "value": 13915257.142855352,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 13950892.857142856 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/64",
            "value": 209727.24898428124,
            "unit": "ns/iter",
            "extra": "iterations: 3446\ncpu: 208575.15960533952 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/64",
            "value": 383714.2857142492,
            "unit": "ns/iter",
            "extra": "iterations: 1792\ncpu: 383649.5535714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/64",
            "value": 1075354.531250028,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1074218.75 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/64",
            "value": 4160069.767441507,
            "unit": "ns/iter",
            "extra": "iterations: 172\ncpu: 4178779.069767442 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/64",
            "value": 16046379.999998964,
            "unit": "ns/iter",
            "extra": "iterations: 45\ncpu: 15972222.222222222 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/64",
            "value": 52294419.99999835,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 51562500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/256",
            "value": 849210.7142856753,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 837053.5714285715 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/256",
            "value": 1526329.2410711164,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 1534598.2142857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/256",
            "value": 4581890.259739882,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 4565746.7532467535 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/256",
            "value": 16382804.878048774,
            "unit": "ns/iter",
            "extra": "iterations: 41\ncpu: 16387195.121951219 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/256",
            "value": 63561363.63636076,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 63920454.54545455 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/256",
            "value": 240050833.33334672,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 239583333.33333334 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1000",
            "value": 3352941.784037434,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 3374413.145539906 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1000",
            "value": 6300795.535714039,
            "unit": "ns/iter",
            "extra": "iterations: 112\ncpu: 6277901.785714285 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1000",
            "value": 18038738.235291287,
            "unit": "ns/iter",
            "extra": "iterations: 34\ncpu: 17922794.11764706 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1000",
            "value": 66971845.45454217,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 68181818.18181819 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1000",
            "value": 245229933.3333485,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 244791666.66666666 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1000",
            "value": 968464799.9999925,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 968750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1/manual_time",
            "value": 3741.785378592447,
            "unit": "ns/iter",
            "extra": "iterations: 191500\ncpu: 10933.420365535248 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1/manual_time",
            "value": 14826.63098385746,
            "unit": "ns/iter",
            "extra": "iterations: 46521\ncpu: 63815.26622385589 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1/manual_time",
            "value": 63381.50973174126,
            "unit": "ns/iter",
            "extra": "iterations: 11406\ncpu: 347952.8318428897 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1/manual_time",
            "value": 262455.0143265886,
            "unit": "ns/iter",
            "extra": "iterations: 2443\ncpu: 1701289.3982808022 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1/manual_time",
            "value": 1429304.6092183203,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 8767535.07014028 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1/manual_time",
            "value": 10552758.208954977,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 45475746.268656716 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/4/manual_time",
            "value": 4724.283669519802,
            "unit": "ns/iter",
            "extra": "iterations: 150908\ncpu: 13563.727569114957 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/4/manual_time",
            "value": 17219.37060882026,
            "unit": "ns/iter",
            "extra": "iterations: 37433\ncpu: 112701.35976277616 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/4/manual_time",
            "value": 74308.30632965286,
            "unit": "ns/iter",
            "extra": "iterations: 9258\ncpu: 793232.8796716353 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/4/manual_time",
            "value": 340609.98552820634,
            "unit": "ns/iter",
            "extra": "iterations: 2073\ncpu: 4680716.353111433 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/4/manual_time",
            "value": 2137556.097561016,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 24628429.87804878 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/4/manual_time",
            "value": 19333561.764705658,
            "unit": "ns/iter",
            "extra": "iterations: 34\ncpu: 128216911.76470588 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/16/manual_time",
            "value": 7273.36917457019,
            "unit": "ns/iter",
            "extra": "iterations: 101559\ncpu: 20308.392166130034 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/16/manual_time",
            "value": 26518.285190972656,
            "unit": "ns/iter",
            "extra": "iterations: 26207\ncpu: 303473.30865799217 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/16/manual_time",
            "value": 116414.0206518194,
            "unit": "ns/iter",
            "extra": "iterations: 6198\ncpu: 2548705.2274927394 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/16/manual_time",
            "value": 640550.9316770356,
            "unit": "ns/iter",
            "extra": "iterations: 1127\ncpu: 15943877.551020408 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/16/manual_time",
            "value": 5323477.272727278,
            "unit": "ns/iter",
            "extra": "iterations: 132\ncpu: 90553977.27272727 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/16/manual_time",
            "value": 56457653.84615432,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 480769230.7692308 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/64/manual_time",
            "value": 18346.861144845352,
            "unit": "ns/iter",
            "extra": "iterations: 35411\ncpu: 47654.68357290108 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/64/manual_time",
            "value": 63165.35045290348,
            "unit": "ns/iter",
            "extra": "iterations: 11371\ncpu: 1074553.6892093923 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/64/manual_time",
            "value": 283532.997987931,
            "unit": "ns/iter",
            "extra": "iterations: 2485\ncpu: 9381287.72635815 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/64/manual_time",
            "value": 1832112.4675324913,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 63555194.8051948 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/64/manual_time",
            "value": 16361746.511627868,
            "unit": "ns/iter",
            "extra": "iterations: 43\ncpu: 351017441.8604651 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/64/manual_time",
            "value": 201415933.3333335,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1901041666.6666667 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/256/manual_time",
            "value": 117118.79042690866,
            "unit": "ns/iter",
            "extra": "iterations: 6184\ncpu: 295621.76584734797 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/256/manual_time",
            "value": 388238.6403253934,
            "unit": "ns/iter",
            "extra": "iterations: 1721\ncpu: 4712013.364323068 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/256/manual_time",
            "value": 1786060.158311343,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 39330474.93403694 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/256/manual_time",
            "value": 9684691.780821932,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 274186643.8356164 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/256/manual_time",
            "value": 77908433.33333327,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 1444444444.4444444 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/256/manual_time",
            "value": 838173299.9999996,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 7640625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1000/manual_time",
            "value": 504215.17241379275,
            "unit": "ns/iter",
            "extra": "iterations: 1305\ncpu: 1281130.2681992338 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1000/manual_time",
            "value": 2023361.0526315784,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 20065789.47368421 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1000/manual_time",
            "value": 8927353.086419746,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 158371913.58024693 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1000/manual_time",
            "value": 44927626.66666668,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 1000000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1000/manual_time",
            "value": 347787149.99999976,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5609375000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1000/manual_time",
            "value": 3833807699.9999976,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 30562500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1/manual_time",
            "value": 7443.943400940724,
            "unit": "ns/iter",
            "extra": "iterations: 96044\ncpu: 7971.606763566699 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1/manual_time",
            "value": 30067.386765517804,
            "unit": "ns/iter",
            "extra": "iterations: 23469\ncpu: 30625.50598662065 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1/manual_time",
            "value": 125343.05406372999,
            "unit": "ns/iter",
            "extra": "iterations: 5586\ncpu: 125872.71750805585 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1/manual_time",
            "value": 513408.29999999935,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515625 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1/manual_time",
            "value": 1943246.951219512,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 1953125 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1/manual_time",
            "value": 8174493.023255813,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 8175872.0930232555 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/4/manual_time",
            "value": 7494.147623644242,
            "unit": "ns/iter",
            "extra": "iterations: 93210\ncpu: 8046.34695848085 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/4/manual_time",
            "value": 29499.928523565282,
            "unit": "ns/iter",
            "extra": "iterations: 22385\ncpu: 30014.518650882288 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/4/manual_time",
            "value": 123198.30018083208,
            "unit": "ns/iter",
            "extra": "iterations: 5530\ncpu: 124321.88065099457 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/4/manual_time",
            "value": 505032.9000000005,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/4/manual_time",
            "value": 2085497.9041916179,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2058383.2335329342 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/4/manual_time",
            "value": 8113129.885057473,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 8081896.551724138 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/16/manual_time",
            "value": 8262.933759812928,
            "unit": "ns/iter",
            "extra": "iterations: 80661\ncpu: 8910.749928714 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/16/manual_time",
            "value": 33840.20488420761,
            "unit": "ns/iter",
            "extra": "iterations: 20597\ncpu: 34137.25299800942 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/16/manual_time",
            "value": 141480.11708133062,
            "unit": "ns/iter",
            "extra": "iterations: 4783\ncpu: 140471.46142588335 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/16/manual_time",
            "value": 556793.1719965423,
            "unit": "ns/iter",
            "extra": "iterations: 1157\ncpu: 553694.900605013 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/16/manual_time",
            "value": 2352011.111111111,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2363040.12345679 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/16/manual_time",
            "value": 9795814.666666664,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 9583333.333333334 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/64/manual_time",
            "value": 12352.834185282205,
            "unit": "ns/iter",
            "extra": "iterations: 57124\ncpu: 13129.33267978433 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/64/manual_time",
            "value": 48338.468286100586,
            "unit": "ns/iter",
            "extra": "iterations: 14820\ncpu: 48498.65047233468 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/64/manual_time",
            "value": 200673.0915472359,
            "unit": "ns/iter",
            "extra": "iterations: 3419\ncpu: 201082.187774203 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/64/manual_time",
            "value": 780227.474972191,
            "unit": "ns/iter",
            "extra": "iterations: 899\ncpu: 782119.021134594 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/64/manual_time",
            "value": 3373337.9629629636,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 3399884.2592592593 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/64/manual_time",
            "value": 12366852,
            "unit": "ns/iter",
            "extra": "iterations: 50\ncpu: 12500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/256/manual_time",
            "value": 55592.52999999851,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/256/manual_time",
            "value": 226309.44678097765,
            "unit": "ns/iter",
            "extra": "iterations: 3091\ncpu: 227474.9272080233 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/256/manual_time",
            "value": 881676.3684913232,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 876168.2242990654 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/256/manual_time",
            "value": 3825816.129032259,
            "unit": "ns/iter",
            "extra": "iterations: 186\ncpu: 3864247.311827957 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/256/manual_time",
            "value": 16315092.68292683,
            "unit": "ns/iter",
            "extra": "iterations: 41\ncpu: 16006097.56097561 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/256/manual_time",
            "value": 61880530,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 62500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1000/manual_time",
            "value": 244178.0399868898,
            "unit": "ns/iter",
            "extra": "iterations: 3051\ncpu: 240699.7705670272 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1000/manual_time",
            "value": 1010090.0140646988,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1010900.1406469761 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1000/manual_time",
            "value": 4005207.0588235296,
            "unit": "ns/iter",
            "extra": "iterations: 170\ncpu: 3952205.882352941 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1000/manual_time",
            "value": 16776543.902439024,
            "unit": "ns/iter",
            "extra": "iterations: 41\ncpu: 16768292.68292683 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1000/manual_time",
            "value": 68734279.99999999,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 68750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1000/manual_time",
            "value": 282197800,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 281250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithSvcRef/manual_time",
            "value": 8398.082191780495,
            "unit": "ns/iter",
            "extra": "iterations: 81395\ncpu: 14781.313348485779 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithBundleContext/manual_time",
            "value": 10727.565687079736,
            "unit": "ns/iter",
            "extra": "iterations: 65538\ncpu: 17642.436449082976 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithInterfaceName/manual_time",
            "value": 10539.822044945571,
            "unit": "ns/iter",
            "extra": "iterations: 65185\ncpu: 17258.57175730613 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000",
            "value": 9310.063616071928,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 9242.466517857143 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1024",
            "value": 8829.462814903389,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8789.023263289004 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/2048",
            "value": 8871.658482141649,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8893.69419642857 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/4096",
            "value": 8862.968915311987,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8789.023263289004 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/8192",
            "value": 9192.637979291118,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9207.54818058848 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/16384",
            "value": 9040.865442568787,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8789.023263289004 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/32768",
            "value": 9115.173214281314,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 8928.57142857143 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/65536",
            "value": 9578.491167446036,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9626.073097887956 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/131072",
            "value": 9420.454687500524,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 9521.484375 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/262144",
            "value": 9495.767876035618,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/524288",
            "value": 9947.677019297673,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 10044.598015187432 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000000",
            "value": 10376.576785712847,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 10323.660714285714 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/1",
            "value": 56553.78000001292,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57812.5 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/4000",
            "value": 32953957.89475726,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 32894736.842105262 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/10000",
            "value": 88846642.8571389,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 89285714.28571428 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/1",
            "value": 52085.88000000418,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53125 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/4000",
            "value": 211705700.00003862,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 208333333.33333334 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/10000",
            "value": 554551200.0003327,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 562500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/1",
            "value": 51407.74287295549,
            "unit": "ns/iter",
            "extra": "iterations: 14452\ncpu: 51895.931358981456 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/4000",
            "value": 10610422.222220626,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 10590277.777777778 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/10000",
            "value": 29246162.49998735,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 29296875 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/1",
            "value": 572.937499999934,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/3",
            "value": 1704.9750413116578,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1688.0569053190366 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/7",
            "value": 3763.7209576417513,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3766.734345117241 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/11",
            "value": 5888.631250002163,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5859.375 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/15",
            "value": 7766.481026786819,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7847.377232142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/18",
            "value": 9582.452756909363,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9626.073097887956 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/20",
            "value": 10667.834374999074,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10742.1875 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/1",
            "value": 7266.697321430879,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 7254.464285714285 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/3",
            "value": 10250.861826509205,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 10253.86047383717 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/7",
            "value": 15821.528715599039,
            "unit": "ns/iter",
            "extra": "iterations: 40727\ncpu: 15729.737029489037 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/11",
            "value": 21238.04999999379,
            "unit": "ns/iter",
            "extra": "iterations: 32000\ncpu: 20996.09375 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/15",
            "value": 25573.978571433796,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 25669.64285714286 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/18",
            "value": 30128.808035710466,
            "unit": "ns/iter",
            "extra": "iterations: 22400\ncpu: 29994.41964285714 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/20",
            "value": 34565.34570810643,
            "unit": "ns/iter",
            "extra": "iterations: 20364\ncpu: 34527.84325279906 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/1",
            "value": 843.4865877289768,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 837.0531977441082 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/3",
            "value": 2419.114642857169,
            "unit": "ns/iter",
            "extra": "iterations: 280000\ncpu: 2399.5535714285716 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/7",
            "value": 5270.32799999688,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5312.5 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/11",
            "value": 8296.549107146437,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8544.921875 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/15",
            "value": 10848.980138481173,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 10881.647849786385 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/18",
            "value": 13366.746428565486,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 13392.857142857143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/20",
            "value": 14098.77499999571,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 13950.892857142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/1",
            "value": 577.1455357140505,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 571.9866071428571 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/3",
            "value": 2122.949958650635,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 2131.0012622781946 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/7",
            "value": 4941.429000000426,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/11",
            "value": 7876.909598211666,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7847.377232142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/15",
            "value": 10648.707812499935,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10742.1875 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/18",
            "value": 12869.78392857106,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12834.82142857143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/20",
            "value": 14333.442484630648,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 14439.109646831934 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/BundleInstallCppFramework/manual_time",
            "value": 296497.3262032091,
            "unit": "ns/iter",
            "extra": "iterations: 2244\ncpu: 320298.57397504454 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/LargeBundleInstallCppFramework/manual_time",
            "value": 315799.95487364597,
            "unit": "ns/iter",
            "extra": "iterations: 2216\ncpu: 352549.6389891697 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterFromString",
            "value": 838.1361607143439,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 837.0535714285714 ns\nthreads: 1"
          },
          {
            "name": "ConstructNonTrivialFilterFromString",
            "value": 1261.0335714279179,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1255.580357142857 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Simple",
            "value": 538.9357142856202,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Complex",
            "value": 635.4938392856216,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 641.7410714285714 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Simple",
            "value": 272.8827199606151,
            "unit": "ns/iter",
            "extra": "iterations: 2488889\ncpu: 269.9497647343855 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Complex",
            "value": 434.95015434263746,
            "unit": "ns/iter",
            "extra": "iterations: 1445161\ncpu: 432.4777654531225 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Simple",
            "value": 280.75848300187477,
            "unit": "ns/iter",
            "extra": "iterations: 2488889\ncpu: 282.5055677452872 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Complex",
            "value": 343.49939742179197,
            "unit": "ns/iter",
            "extra": "iterations: 2133333\ncpu: 344.23833503723984 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterIncremental",
            "value": 2857.3705547439536,
            "unit": "ns/iter",
            "extra": "iterations: 248889\ncpu: 2887.8335322171733 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterNotOperator",
            "value": 1225.3275000002109,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1227.6785714285713 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByInterface",
            "value": 2033.0211901973585,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 2050.7830810563223 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByClassName",
            "value": 1708.202455357569,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1708.984375 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterface",
            "value": 1721.769918457609,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1726.4218349853784 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassName",
            "value": 1410.3150400379413,
            "unit": "ns/iter",
            "extra": "iterations: 497778\ncpu: 1349.7482813623744 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassNameAndLDAPFilter",
            "value": 958.830509450725,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 941.6848474621216 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterfaceAndLDAPFilter",
            "value": 885.5463010955975,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 899.8321875749162 ns\nthreads: 1"
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
          "id": "8fda202bdad4e5b92d9ae25eeb6a59b2d0706f53",
          "message": "701 - Fixes #852: adds a [[nodiscard]] to BundleContext::RegisterService (#863) (#900)\n\n* Fixes #852: adds a [[nodiscard]] to BundleContext::RegisterService (#863)\r\n\r\n* noDiscard update first push\r\n\r\n* Jeff's comments, c++14 in cmakelists for makefile test, comments to reference nodiscard\r\n\r\n---\r\n\r\nAdaptation for C++14:\r\n* use [[nodiscard]] only when __has_cpp_attribute is available and\r\n__has_cpp_attribute(nodiscard) is valid. Alternatively use\r\n[[gnu::warn_unused_result]] if nodiscard is not available, but\r\ngnu::warn_unused_result is.\r\n* revert default C++ standard in doc/src/CMakeLists.txt back to C++14\r\n\r\nSigned-off-by: Ingmar Sittl <ingmar.sittl@elektrobit.com>\r\n\r\n* use nodiscard only if compiled in C++17 mode\r\n\r\n---------\r\n\r\nSigned-off-by: Ingmar Sittl <ingmar.sittl@elektrobit.com>\r\nCo-authored-by: tcormackMW <113473781+tcormackMW@users.noreply.github.com>",
          "timestamp": "2023-08-10T12:53:12-04:00",
          "tree_id": "558ec6338a5f121d7d1fa3f7f0a3ee98a752808c",
          "url": "https://github.com/insi-eb/CppMicroServices-cpp14/commit/8fda202bdad4e5b92d9ae25eeb6a59b2d0706f53"
        },
        "date": 1691744389238,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1/manual_time",
            "value": 44633.55749831911,
            "unit": "ns/iter",
            "extra": "iterations: 16357\ncpu: 44896.68032035214 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1/manual_time",
            "value": 183604.82616651556,
            "unit": "ns/iter",
            "extra": "iterations: 4372\ncpu: 185841.72003659653 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1/manual_time",
            "value": 782122.0893141992,
            "unit": "ns/iter",
            "extra": "iterations: 1254\ncpu: 797448.1658692185 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1/manual_time",
            "value": 2974882.1561338627,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 2962360.594795539 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1/manual_time",
            "value": 12062360.526315896,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 12129934.210526315 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1/manual_time",
            "value": 44829975.00000031,
            "unit": "ns/iter",
            "extra": "iterations: 16\ncpu: 44921875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/4/manual_time",
            "value": 138373.83093525172,
            "unit": "ns/iter",
            "extra": "iterations: 6672\ncpu: 138170.7134292566 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/4/manual_time",
            "value": 513657.19999999856,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/4/manual_time",
            "value": 2149087.016574581,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2158149.1712707183 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/4/manual_time",
            "value": 8915527.678571474,
            "unit": "ns/iter",
            "extra": "iterations: 112\ncpu: 8928571.42857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/4/manual_time",
            "value": 34297686.36363644,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 34090909.09090909 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/4/manual_time",
            "value": 138027185.71428612,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 138392857.14285713 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/16/manual_time",
            "value": 454115.581395349,
            "unit": "ns/iter",
            "extra": "iterations: 1720\ncpu: 454215.11627906974 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/16/manual_time",
            "value": 1803252.8827037755,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1801689.8608349902 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/16/manual_time",
            "value": 6850214.999999984,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7031250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/16/manual_time",
            "value": 28305982.758620698,
            "unit": "ns/iter",
            "extra": "iterations: 29\ncpu: 28556034.48275862 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/16/manual_time",
            "value": 114157777.77777784,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 114583333.33333333 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/16/manual_time",
            "value": 431552099.99999994,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 437500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/64/manual_time",
            "value": 1486699.7050147483,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1521017.6991150442 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/64/manual_time",
            "value": 5570664.999999997,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/64/manual_time",
            "value": 23891102.631578945,
            "unit": "ns/iter",
            "extra": "iterations: 38\ncpu: 23848684.210526317 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/64/manual_time",
            "value": 100605369.23076917,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 100961538.46153846 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/64/manual_time",
            "value": 375415350.0000002,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 375000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/64/manual_time",
            "value": 1616327300.0000012,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1625000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/256/manual_time",
            "value": 4514044.508670522,
            "unit": "ns/iter",
            "extra": "iterations: 173\ncpu: 4515895.953757226 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/256/manual_time",
            "value": 19460259.999999993,
            "unit": "ns/iter",
            "extra": "iterations: 55\ncpu: 19602272.727272727 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/256/manual_time",
            "value": 71917310,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 71875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/256/manual_time",
            "value": 309342966.6666666,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 312500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/256/manual_time",
            "value": 1286193300.0000005,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1296875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/256/manual_time",
            "value": 6422728499.999995,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6484375000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1000/manual_time",
            "value": 14942310.588235296,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 15073529.411764706 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1000/manual_time",
            "value": 53406280.000000015,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 54166666.666666664 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1000/manual_time",
            "value": 229237260,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 231250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1000/manual_time",
            "value": 923763900.0000001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 937500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1000/manual_time",
            "value": 4991576900.000003,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5062500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1000/manual_time",
            "value": 24859302999.999973,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 25078125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1/manual_time",
            "value": 46514.60263439877,
            "unit": "ns/iter",
            "extra": "iterations: 15867\ncpu: 46283.16632003529 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1/manual_time",
            "value": 224792.4687144487,
            "unit": "ns/iter",
            "extra": "iterations: 4395\ncpu: 227531.28555176337 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1/manual_time",
            "value": 1013777.9331779314,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 1019813.5198135198 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1/manual_time",
            "value": 3817424.7863247828,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3872863.247863248 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1/manual_time",
            "value": 17162617.948718015,
            "unit": "ns/iter",
            "extra": "iterations: 78\ncpu: 17227564.102564104 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1/manual_time",
            "value": 50200020.00000005,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 51562500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/4/manual_time",
            "value": 134346.89459540203,
            "unit": "ns/iter",
            "extra": "iterations: 6698\ncpu: 135301.58256195878 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/4/manual_time",
            "value": 524842.2999999999,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/4/manual_time",
            "value": 2462152.3560209507,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2454188.4816753925 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/4/manual_time",
            "value": 10247878.94736839,
            "unit": "ns/iter",
            "extra": "iterations: 114\ncpu: 10279605.263157895 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/4/manual_time",
            "value": 37649077.27272726,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 37642045.45454545 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/4/manual_time",
            "value": 156510642.85714293,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 158482142.85714287 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/16/manual_time",
            "value": 426367.84335355717,
            "unit": "ns/iter",
            "extra": "iterations: 1813\ncpu: 430915.60948703805 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/16/manual_time",
            "value": 1760605.0269299846,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1767280.0718132854 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/16/manual_time",
            "value": 6936250.000000007,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/16/manual_time",
            "value": 28572670.000000045,
            "unit": "ns/iter",
            "extra": "iterations: 30\ncpu: 28645833.333333332 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/16/manual_time",
            "value": 121587444.44444448,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 121527777.77777778 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/16/manual_time",
            "value": 454936000.0000013,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 453125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/64/manual_time",
            "value": 1492880.618892509,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1501425.0814332247 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/64/manual_time",
            "value": 5337273.943661965,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 5391725.352112676 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/64/manual_time",
            "value": 23302102.439024378,
            "unit": "ns/iter",
            "extra": "iterations: 41\ncpu: 23628048.780487806 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/64/manual_time",
            "value": 97053408.33333349,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 97656250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/64/manual_time",
            "value": 348921350.00000036,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 351562500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/64/manual_time",
            "value": 1567039500.0000005,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1578125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/256/manual_time",
            "value": 4801917.469879522,
            "unit": "ns/iter",
            "extra": "iterations: 166\ncpu: 4894578.3132530125 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/256/manual_time",
            "value": 18529638.70967743,
            "unit": "ns/iter",
            "extra": "iterations: 62\ncpu: 18649193.548387095 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/256/manual_time",
            "value": 75737619.99999997,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 76562500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/256/manual_time",
            "value": 314004599.9999998,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 317708333.3333333 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/256/manual_time",
            "value": 1357459299.999999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1359375000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/256/manual_time",
            "value": 6457547199.999996,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6500000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1000/manual_time",
            "value": 16082914.141414136,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 16256313.131313132 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1000/manual_time",
            "value": 49622912.500000015,
            "unit": "ns/iter",
            "extra": "iterations: 16\ncpu: 49804687.5 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1000/manual_time",
            "value": 237742980,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 240625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1000/manual_time",
            "value": 926185600,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 937500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1000/manual_time",
            "value": 5065153500.000004,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 5125000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1000/manual_time",
            "value": 25441020799.999958,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 25656250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1",
            "value": 3109.2770457459064,
            "unit": "ns/iter",
            "extra": "iterations: 213333\ncpu: 3149.4189834671615 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1",
            "value": 5775.315178571613,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 5719.866071428572 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1",
            "value": 16156.553571430468,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 16392.29910714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1",
            "value": 60356.78571428044,
            "unit": "ns/iter",
            "extra": "iterations: 11200\ncpu: 59988.83928571428 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1",
            "value": 221182.29831690865,
            "unit": "ns/iter",
            "extra": "iterations: 3446\ncpu: 222177.88740568774 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1",
            "value": 817918.3400268111,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 815763.0522088354 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/4",
            "value": 12171.039285712077,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 11997.767857142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/4",
            "value": 23287.740625001163,
            "unit": "ns/iter",
            "extra": "iterations: 32000\ncpu: 23437.5 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/4",
            "value": 62769.35714286732,
            "unit": "ns/iter",
            "extra": "iterations: 11200\ncpu: 62779.017857142855 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/4",
            "value": 233955.8085035332,
            "unit": "ns/iter",
            "extra": "iterations: 2987\ncpu: 235395.04519584868 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/4",
            "value": 862212.834821463,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 854492.1875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/4",
            "value": 3343297.652582152,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 3374413.145539906 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/16",
            "value": 48703.74338712368,
            "unit": "ns/iter",
            "extra": "iterations: 14933\ncpu: 49177.99504453225 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/16",
            "value": 90096.11624480317,
            "unit": "ns/iter",
            "extra": "iterations: 7467\ncpu: 89979.24199812509 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/16",
            "value": 260849.2220113638,
            "unit": "ns/iter",
            "extra": "iterations: 2635\ncpu: 260910.81593927892 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/16",
            "value": 953260.2409638261,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 941265.0602409638 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/16",
            "value": 3546889.2307691043,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 3525641.0256410255 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/16",
            "value": 13679658.928570656,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 13671875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/64",
            "value": 197067.55658735635,
            "unit": "ns/iter",
            "extra": "iterations: 3446\ncpu: 194972.4318049913 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/64",
            "value": 362652.5049115908,
            "unit": "ns/iter",
            "extra": "iterations: 2036\ncpu: 368369.35166994104 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/64",
            "value": 1005677.8125001385,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1025390.625 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/64",
            "value": 3678327.932961334,
            "unit": "ns/iter",
            "extra": "iterations: 179\ncpu: 3666201.1173184356 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/64",
            "value": 14116807.999998856,
            "unit": "ns/iter",
            "extra": "iterations: 50\ncpu: 14375000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/64",
            "value": 53758280.00001093,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 53125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/256",
            "value": 823308.2589284331,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 819614.9553571428 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/256",
            "value": 1529026.0442257256,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 1535626.5356265355 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/256",
            "value": 4208349.397590226,
            "unit": "ns/iter",
            "extra": "iterations: 166\ncpu: 4141566.265060241 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/256",
            "value": 15697477.77777795,
            "unit": "ns/iter",
            "extra": "iterations: 45\ncpu: 15625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/256",
            "value": 56726063.63635747,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 56818181.81818182 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/256",
            "value": 228482433.33335936,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 229166666.66666666 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1000",
            "value": 3176243.3035709136,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 3208705.3571428573 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1000",
            "value": 6149836.607144314,
            "unit": "ns/iter",
            "extra": "iterations: 112\ncpu: 6277901.785714285 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1000",
            "value": 17502582.926825687,
            "unit": "ns/iter",
            "extra": "iterations: 41\ncpu: 17149390.243902437 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1000",
            "value": 64460388.88889739,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 64236111.11111111 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1000",
            "value": 238244433.33334482,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 239583333.33333334 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1000",
            "value": 930164399.9999669,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 937500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1/manual_time",
            "value": 3705.6253198013187,
            "unit": "ns/iter",
            "extra": "iterations: 187616\ncpu: 10909.917064642674 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1/manual_time",
            "value": 15169.915873369444,
            "unit": "ns/iter",
            "extra": "iterations: 45170\ncpu: 63648.439229577154 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1/manual_time",
            "value": 61660.202950481456,
            "unit": "ns/iter",
            "extra": "iterations: 11727\ncpu: 335763.62240982347 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1/manual_time",
            "value": 265285.5066771163,
            "unit": "ns/iter",
            "extra": "iterations: 2546\ncpu: 1718381.775333857 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1/manual_time",
            "value": 1390782.8460037904,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 8558723.196881091 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1/manual_time",
            "value": 9678253.521126704,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 42033450.704225354 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/4/manual_time",
            "value": 4408.6211463239315,
            "unit": "ns/iter",
            "extra": "iterations: 162345\ncpu: 12896.917059348918 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/4/manual_time",
            "value": 17214.05358471199,
            "unit": "ns/iter",
            "extra": "iterations: 40310\ncpu: 112797.69288017861 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/4/manual_time",
            "value": 72129.94084027132,
            "unit": "ns/iter",
            "extra": "iterations: 9973\ncpu: 761430.8633309937 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/4/manual_time",
            "value": 330956.5884043926,
            "unit": "ns/iter",
            "extra": "iterations: 2087\ncpu: 4492093.91471011 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/4/manual_time",
            "value": 2048594.3113772667,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 23998877.245508984 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/4/manual_time",
            "value": 19271308.108108174,
            "unit": "ns/iter",
            "extra": "iterations: 37\ncpu: 128378378.37837838 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/16/manual_time",
            "value": 7260.564013028915,
            "unit": "ns/iter",
            "extra": "iterations: 97941\ncpu: 20260.92239205236 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/16/manual_time",
            "value": 25650.071123745875,
            "unit": "ns/iter",
            "extra": "iterations: 27417\ncpu: 297488.7843308896 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/16/manual_time",
            "value": 114948.68273989556,
            "unit": "ns/iter",
            "extra": "iterations: 6263\ncpu: 2447409.3884719783 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/16/manual_time",
            "value": 600552.9616724907,
            "unit": "ns/iter",
            "extra": "iterations: 1148\ncpu: 15488893.728222996 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/16/manual_time",
            "value": 4919891.034482799,
            "unit": "ns/iter",
            "extra": "iterations: 145\ncpu: 86099137.93103448 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/16/manual_time",
            "value": 54027053.84615375,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 460336538.46153843 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/64/manual_time",
            "value": 18554.749731245218,
            "unit": "ns/iter",
            "extra": "iterations: 38139\ncpu: 49162.274836781246 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/64/manual_time",
            "value": 59292.86668894449,
            "unit": "ns/iter",
            "extra": "iterations: 11972\ncpu: 1036272.1349816237 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/64/manual_time",
            "value": 269119.1770186404,
            "unit": "ns/iter",
            "extra": "iterations: 2576\ncpu: 9068080.357142856 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/64/manual_time",
            "value": 1636475.8865248286,
            "unit": "ns/iter",
            "extra": "iterations: 423\ncpu: 58880023.64066194 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/64/manual_time",
            "value": 15993418.181818157,
            "unit": "ns/iter",
            "extra": "iterations: 44\ncpu: 337002840.90909094 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/64/manual_time",
            "value": 191998824.99999985,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1828125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/256/manual_time",
            "value": 115225.12203626249,
            "unit": "ns/iter",
            "extra": "iterations: 5736\ncpu: 291470.5369595537 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/256/manual_time",
            "value": 368028.3924843415,
            "unit": "ns/iter",
            "extra": "iterations: 1916\ncpu: 4526030.793319415 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/256/manual_time",
            "value": 1657358.333333337,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 38122106.481481485 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/256/manual_time",
            "value": 9444624.324324321,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 256967905.4054054 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/256/manual_time",
            "value": 74255469.99999987,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 1393750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/256/manual_time",
            "value": 817192099.9999985,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 7375000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1000/manual_time",
            "value": 503760.05685856414,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 1277096.659559346 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1000/manual_time",
            "value": 1707404.8309178727,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 18229166.666666668 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1000/manual_time",
            "value": 8316998.780487799,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 152629573.1707317 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1000/manual_time",
            "value": 45044419.99999999,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 966666666.6666666 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1000/manual_time",
            "value": 327348149.99999964,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5523437500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1000/manual_time",
            "value": 3625659399.9999995,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 29968750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1/manual_time",
            "value": 7647.135951471757,
            "unit": "ns/iter",
            "extra": "iterations: 94953\ncpu: 8392.309879624656 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1/manual_time",
            "value": 29323.339224899966,
            "unit": "ns/iter",
            "extra": "iterations: 23197\ncpu: 30311.031598913654 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1/manual_time",
            "value": 121018.18505972491,
            "unit": "ns/iter",
            "extra": "iterations: 5609\ncpu: 122570.86824745944 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1/manual_time",
            "value": 498665.4676258999,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 494604.3165467626 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1/manual_time",
            "value": 2050505.1075268812,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2016129.0322580645 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1/manual_time",
            "value": 7680544.086021505,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 7728494.623655914 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/4/manual_time",
            "value": 7600.570528766518,
            "unit": "ns/iter",
            "extra": "iterations: 87638\ncpu: 8379.641251511901 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/4/manual_time",
            "value": 31117.39538207164,
            "unit": "ns/iter",
            "extra": "iterations: 22391\ncpu: 31402.125854137823 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/4/manual_time",
            "value": 120600.91036414585,
            "unit": "ns/iter",
            "extra": "iterations: 5712\ncpu: 120360.64425770308 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/4/manual_time",
            "value": 534207.445255474,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 536040.1459854015 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/4/manual_time",
            "value": 1964196.839080459,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 1930675.287356322 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/4/manual_time",
            "value": 8008392.473118282,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 8064516.129032258 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/16/manual_time",
            "value": 8431.685871687123,
            "unit": "ns/iter",
            "extra": "iterations: 83138\ncpu: 9209.086097813275 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/16/manual_time",
            "value": 32992.632187230316,
            "unit": "ns/iter",
            "extra": "iterations: 20766\ncpu: 33859.433689685065 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/16/manual_time",
            "value": 137550.11914217577,
            "unit": "ns/iter",
            "extra": "iterations: 5036\ncpu: 139619.73788721208 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/16/manual_time",
            "value": 563788.7871853533,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 560163.996948894 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/16/manual_time",
            "value": 2351446.1538461517,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 2351588.628762542 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/16/manual_time",
            "value": 8741018.75,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 8593750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/64/manual_time",
            "value": 11753.545393207192,
            "unit": "ns/iter",
            "extra": "iterations: 60769\ncpu: 12341.819019565897 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/64/manual_time",
            "value": 48474.93878122247,
            "unit": "ns/iter",
            "extra": "iterations: 14293\ncpu: 49193.66123277129 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/64/manual_time",
            "value": 191758.0514208397,
            "unit": "ns/iter",
            "extra": "iterations: 3695\ncpu: 190290.93369418132 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/64/manual_time",
            "value": 780145.7700650765,
            "unit": "ns/iter",
            "extra": "iterations: 922\ncpu: 779555.3145336226 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/64/manual_time",
            "value": 3271101.3953488367,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 3270348.8372093025 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/64/manual_time",
            "value": 12843842.592592593,
            "unit": "ns/iter",
            "extra": "iterations: 54\ncpu: 12731481.481481481 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/256/manual_time",
            "value": 55479.43554780237,
            "unit": "ns/iter",
            "extra": "iterations: 12614\ncpu: 55741.63627715237 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/256/manual_time",
            "value": 217430.53247153078,
            "unit": "ns/iter",
            "extra": "iterations: 3249\ncpu: 216412.74238227148 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/256/manual_time",
            "value": 874467.9455445547,
            "unit": "ns/iter",
            "extra": "iterations: 808\ncpu: 870204.207920792 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/256/manual_time",
            "value": 3618885.5000000005,
            "unit": "ns/iter",
            "extra": "iterations: 200\ncpu: 3593750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/256/manual_time",
            "value": 15369573.999999994,
            "unit": "ns/iter",
            "extra": "iterations: 50\ncpu: 15312500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/256/manual_time",
            "value": 60649474.99999999,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 61197916.666666664 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1000/manual_time",
            "value": 244910.8006814316,
            "unit": "ns/iter",
            "extra": "iterations: 2935\ncpu: 244889.26746166951 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1000/manual_time",
            "value": 956269.623655914,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 966061.8279569893 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1000/manual_time",
            "value": 3950638.2022471903,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 3950140.449438202 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1000/manual_time",
            "value": 17366071.428571425,
            "unit": "ns/iter",
            "extra": "iterations: 42\ncpu: 17113095.23809524 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1000/manual_time",
            "value": 67656450,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 67187500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1000/manual_time",
            "value": 264517200,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 265625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithSvcRef/manual_time",
            "value": 7732.562620428649,
            "unit": "ns/iter",
            "extra": "iterations: 87711\ncpu: 12826.213359783835 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithBundleContext/manual_time",
            "value": 13156.51752965225,
            "unit": "ns/iter",
            "extra": "iterations: 53709\ncpu: 22691.72764341172 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithInterfaceName/manual_time",
            "value": 9698.970608152655,
            "unit": "ns/iter",
            "extra": "iterations: 73830\ncpu: 15026.073411892185 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000",
            "value": 9321.652901783345,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 9242.466517857143 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1024",
            "value": 8926.66505952925,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8789.023263289004 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/2048",
            "value": 9210.991468788072,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9207.54818058848 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/4096",
            "value": 9141.062499999463,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 9277.34375 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/8192",
            "value": 9156.856442606777,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8998.28572193874 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/16384",
            "value": 9469.21665528294,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9416.810639238218 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/32768",
            "value": 9733.842259634135,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9835.335556537693 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/65536",
            "value": 9905.781250004964,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 9765.625 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/131072",
            "value": 9767.67812499446,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 9765.625 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/262144",
            "value": 9894.025473097643,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 10044.598015187432 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/524288",
            "value": 9747.082812502584,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 9765.625 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000000",
            "value": 10799.899554023283,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 10881.647849786385 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/1",
            "value": 49843.53999998348,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50000 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/4000",
            "value": 26508824.000011373,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 26250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/10000",
            "value": 84898411.11112481,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 85069444.44444445 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/1",
            "value": 50367.845280938935,
            "unit": "ns/iter",
            "extra": "iterations: 14452\ncpu: 50814.76612233601 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/4000",
            "value": 210087950.0000019,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 207031250 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/10000",
            "value": 513768499.9999692,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 515625000 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/1",
            "value": 48566.97247706296,
            "unit": "ns/iter",
            "extra": "iterations: 14933\ncpu: 48131.654724435815 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/4000",
            "value": 10194257.812500495,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 10009765.625 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/10000",
            "value": 27161111.999994315,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 27500000 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/1",
            "value": 535.5509999999413,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 546.875 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/3",
            "value": 1620.6438924257504,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1611.3270459863531 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/7",
            "value": 3647.2710657498874,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3690.003747760328 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/11",
            "value": 5607.29899999842,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/15",
            "value": 7639.504464285503,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7672.991071428572 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/18",
            "value": 9092.716996795642,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9207.54818058848 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/20",
            "value": 10138.273437505062,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10009.765625 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/1",
            "value": 6687.710714284582,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/3",
            "value": 9590.87414788474,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9626.073097887956 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/7",
            "value": 15221.750000001017,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 14997.20982142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/11",
            "value": 20375.857466205543,
            "unit": "ns/iter",
            "extra": "iterations: 34462\ncpu: 20402.90755034531 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/15",
            "value": 26448.78381967258,
            "unit": "ns/iter",
            "extra": "iterations: 26353\ncpu: 26681.02303343073 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/18",
            "value": 30681.66071429346,
            "unit": "ns/iter",
            "extra": "iterations: 22400\ncpu: 30691.964285714286 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/20",
            "value": 33557.29228048844,
            "unit": "ns/iter",
            "extra": "iterations: 20364\ncpu: 33760.5578471813 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/1",
            "value": 872.2427802491832,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 878.9058576313136 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/3",
            "value": 2305.821533682677,
            "unit": "ns/iter",
            "extra": "iterations: 298667\ncpu: 2249.5789625234793 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/7",
            "value": 5139.920000001439,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/11",
            "value": 8079.084821425957,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 8021.763392857143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/15",
            "value": 10940.182409901689,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 11090.910308436123 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/18",
            "value": 12602.58928571797,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 12555.80357142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/20",
            "value": 14093.412752620401,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 14125.215958857327 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/1",
            "value": 565.3675999997176,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 578.125 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/3",
            "value": 2029.2015727700066,
            "unit": "ns/iter",
            "extra": "iterations: 344615\ncpu: 1994.9799051115012 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/7",
            "value": 4704.331008329343,
            "unit": "ns/iter",
            "extra": "iterations: 144516\ncpu: 4757.258711838135 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/11",
            "value": 7554.191071428866,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 7672.991071428572 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/15",
            "value": 10366.474999997876,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 10498.046875 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/18",
            "value": 12310.871875001794,
            "unit": "ns/iter",
            "extra": "iterations: 64000\ncpu: 12207.03125 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/20",
            "value": 14270.374462617276,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 14439.109646831934 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/BundleInstallCppFramework/manual_time",
            "value": 279090.4143993306,
            "unit": "ns/iter",
            "extra": "iterations: 2389\ncpu: 300858.09962327336 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/LargeBundleInstallCppFramework/manual_time",
            "value": 278649.5420846054,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 306639.77322285215 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterFromString",
            "value": 789.4598214284495,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 784.7377232142857 ns\nthreads: 1"
          },
          {
            "name": "ConstructNonTrivialFilterFromString",
            "value": 1205.8264285721116,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1199.7767857142858 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Simple",
            "value": 513.1592857143883,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 516.1830357142857 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Complex",
            "value": 596.4613392856271,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 613.8392857142857 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Simple",
            "value": 259.25299999991176,
            "unit": "ns/iter",
            "extra": "iterations: 2800000\ncpu: 262.2767857142857 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Complex",
            "value": 419.3447195404792,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 423.75843674797005 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Simple",
            "value": 256.98982142866305,
            "unit": "ns/iter",
            "extra": "iterations: 2800000\ncpu: 256.69642857142856 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Complex",
            "value": 319.2447686321508,
            "unit": "ns/iter",
            "extra": "iterations: 2133333\ncpu: 314.9414554596024 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterIncremental",
            "value": 2625.724683051646,
            "unit": "ns/iter",
            "extra": "iterations: 263529\ncpu: 2608.82104056859 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterNotOperator",
            "value": 1183.740178571822,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1171.875 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByInterface",
            "value": 1815.2529138931516,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1841.5166239844036 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByClassName",
            "value": 1582.3614627037316,
            "unit": "ns/iter",
            "extra": "iterations: 407273\ncpu: 1572.9621163200113 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterface",
            "value": 1620.8734374996784,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1639.2299107142858 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassName",
            "value": 1248.8067857142532,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1255.580357142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassNameAndLDAPFilter",
            "value": 878.3322418161783,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 878.9058576313136 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterfaceAndLDAPFilter",
            "value": 819.1010044643779,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 819.6149553571429 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}