window.BENCHMARK_DATA = {
  "lastUpdate": 1690446722117,
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
      }
    ]
  }
}