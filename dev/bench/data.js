window.BENCHMARK_DATA = {
  "lastUpdate": 1680528791889,
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
      }
    ]
  }
}