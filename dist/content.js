// 在对应列表中复制一个条目并修改。论文和动态自动按时间倒序显示。
const homepageContent = {
  "research": [
    {
      "title": "CMOS-compatible Ferroelectrics",
      "image": "assets/Ferroelectrics.png",
      "description": "HfO₂- and AlScN-based ferroelectric thin films."
    },
    {
      "title": "High-k Materials and Applications",
      "image": "assets/High_k.png",
      "description": "Polymorphic oxide films for high-k dielectrics."
    },
    {
      "title": "Emerging Non-volatile Memories",
      "image": "assets/Memory.png",
      "description": "Ferroelectric devices and memory integration."
    },
    {
      "title": "Neuromorphic Computing",
      "image": "assets/Neuromorphic.png",
      "description": "Materials and circuits for future computing technologies."
    }
  ],
  "publications": [
    {
      "year": 2026,
      "title": "Polymorphic Hf(Zr)O2‑Based Films for High‑k Dielectrics",
      "authors": "Beikai Ding, Haoyu Lu, Xuanyu Zhao, Yu Li, Li Zheng, Shiwei Xia, Qi Liu, Hao Jiang*, Yingfen Wei*",
      "venue": "Nano Letters",
      "url": "https://pubs.acs.org/nalefd/article-abstract/doi/10.1021/acs.nanolett.6c03703/5448921/Polymorphic-Hf-Zr-O2-Based-Films-for-High-k?redirectedFrom=fulltext",
      "citation": "(2026)",
      "titleZh": "用于高介电常数介质的多晶型 Hf(Zr)O₂ 基薄膜"
    },
    {
      "year": 2026,
      "title": "Thermosensitive Elastic Depinning Kinetics in Ultrathin Ferroelectric HfxZr1−xO2 Films for Self-Revoking Cryogenic Memory",
      "authors": "Xiaodong Wang, Yu Li, Hao Jiang*, Shucheng Zhang, Guan Feng, Haoyu Lu, Xianzhe Chen, Xumeng Zhang, Can Li, Yingfen Wei*, Wenwu Li*, Qi Liu*, Ming Liu",
      "venue": "Advanced Functional Materials",
      "url": "https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/adfm.78487",
      "citation": "(2026)",
      "selected": false
    },
    {
      "year": 2026,
      "title": "Grain tailoring enables robust high-temperature ferroelectricity in ultrathin Hf1–xZrxO2 films",
      "authors": "Haoyu Lu, Yu Li, Liyang Ma, Geng Huangfu, Xuanyu Zhao, Changsong Xu, Hongjun Xiang, Yingfen Wei*, Hao Jiang*, Qi Liu, Ming Liu",
      "venue": "Science Bulletin",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/S2095927326009990",
      "citation": "(2026)",
      "titleZh": "通过晶粒调控实现超薄 Hf₁₋ₓZrₓO₂ 薄膜稳定的高温铁电性"
    },
    {
      "year": 2026,
      "title": "Alternating atomic-dipole layers and switching dynamics in Al1-xScxN ferroelectrics",
      "authors": "Yonghui Zheng, Ruirong Bai, Tianjiao Xin, Xuanyu Zhao, Yan Cheng*, Yu-Ning Wu*, Yingfen Wei*, Binghui Ge, He Tian, Shiyou Chen, Qi Liu, Chungang Duan, Ming Liu",
      "venue": "Science",
      "url": "https://www.science.org/doi/abs/10.1126/science.aee9639",
      "citation": "393 6806, 85-89 (2026)",
      "titleZh": "Al₁₋ₓScₓN 铁电体中的交替原子偶极层与极化翻转动力学"
    },
    {
      "year": 2026,
      "title": "Comprehensive Strategies for Imprint Recovery in Hafnia-Based Ferroelectric Capacitors and Mechanism Clarification--Experiment and Modeling",
      "authors": "Guan Feng, Yu Li*, Hao Jiang*, Xiaodong Wang, Shucheng Zhang, Xianzhe Chen, Yingfen Wei*, Qi Liu*, Ming Liu",
      "venue": "IEEE International Reliability Physics Symposium (IRPS)",
      "url": "https://ieeexplore.ieee.org/abstract/document/11499287",
      "citation": "1-5 (2026)",
      "selected": false
    },
    {
      "year": 2026,
      "title": "2 Mb HZO-Based Embedded FeRAM with Scaled BEOL-Processed 3D Capacitors Demonstrating High Retention (≥ 1000 h) and Robust Endurance (≥ 10 12 Cycles)@ 125 °C",
      "authors": "Xiaodong Wang, Linhui Hu, Guan Feng, Hao Jiang*, Yu Li, Yuqi Gao, Feng Wang, Xiaofeng Qian, Yingfen Wei*, Xianzhe Chen, Qian Tao, Yushi Hu, Qi Liu*, Ming Liu",
      "venue": "IEEE International Reliability Physics Symposium (IRPS)",
      "url": "https://ieeexplore.ieee.org/abstract/document/11499345",
      "citation": "1-5 (2026)",
      "selected": false
    },
    {
      "year": 2025,
      "title": "High-density, nonvolatile SRAM using monolithic 3D integration of InGaZnO thin-film transistors and Hf0.5Zr0.5O2-based ferroelectric capacitors",
      "authors": "Qihan Liu, Yu Li, Liwei Liu, Hao Jiang*, Haozhe Zhu, Zexing Chen, Yang Yang, Mengwei Si, Can Li, Peng Lin, Yingfen Wei*, Qi Liu*",
      "venue": "Device",
      "url": "https://www.cell.com/device/fulltext/S2666-9986(25)00146-2",
      "citation": "3 9, 4830-4836 (2025)",
      "selected": false
    },
    {
      "year": 2025,
      "title": "Robust Ferroelectricity and Suppressed Leakage Current in Ultrathin (≤4 nm) HfO2/ZrO2 Nanolaminates With Ru-TiN Asymmetric Electrodes",
      "authors": "Guan Feng, Xiaodong Wang, Yize Sun, Yu Li*, Haoyu Lu, Yang Yang, Xumeng Zhang, Yingfen Wei*, Hao Jiang*, Qi Liu",
      "venue": "IEEE Transactions on Electron Devices",
      "url": "https://ieeexplore.ieee.org/abstract/document/11076170",
      "citation": "72 9, 4830-4836 (2025)",
      "selected": false
    },
    {
      "year": 2025,
      "title": "96-Kb Voltage-Controlled-Magnetic-Anisotropy MRAM for In-Situ Reservoir Computing with High Endurance (≥1012), Sub-Ns Operation (0.3 Ns) and Ultralow Power Consumption (40 fJ)",
      "authors": "Jie Yu, Zheng Zhu, Albert Lee, Xiaohan Huang, Yule Zhang, Yu Li, Kaiwen Shen, Yifan Gao, Yingfen Wei, Hao Jiang, Xumeng Zhang, Ming Wang, Di Wu, Xianzhe Chen*, Qi Liu, Ming Liu",
      "venue": "Symposium on VLSI Technology and Circuits",
      "url": "https://ieeexplore.ieee.org/abstract/document/11074941",
      "citation": "1-3 (2025)",
      "selected": false
    },
    {
      "year": 2025,
      "title": "Back-End-of-Line Compatible 2T1C Memory Cell With InGaZnO Thin-Film Transistors and Hf₀.₅Zr₀.₅O₂-Based Ferroelectric Capacitors",
      "authors": "Yize Sun, Shucheng Zhang, Qihan Liu, Yu Li*, Haoyu Lu, Xumeng Zhang, Yingfen Wei*, Mengwei Si, Hao Jiang*, Qi Liu",
      "venue": "IEEE Transactions on Electron Devices",
      "url": "https://ieeexplore.ieee.org/abstract/document/10850486",
      "citation": "72 3, 1097-1103 (2025)",
      "selected": false
    },
    {
      "year": 2025,
      "title": "First Demonstration of Annealing-Free RT-Prepared AlScN Film with Large Polarization (2Pr> 300 μC/cm2) and Ultra-Sharp Ec Distribution for 0T1C FeRAM",
      "authors": "Xuanyu Zhao, Jie Yu, Yu Li, Yiwei Wang, Fansen Cao, Yan Cheng, Yingfen Wei*, Hao Jiang*, Qi Liu*, Ming Liu",
      "venue": "Symposium on VLSI Technology and Circuits",
      "url": "https://ieeexplore.ieee.org/abstract/document/11074960",
      "citation": "1-3 (2025)",
      "titleZh": "面向 0T1C FeRAM 的免退火室温制备 AlScN 薄膜：首次展示大极化（2Pᵣ > 300 μC/cm²）和极窄的矫顽场分布"
    },
    {
      "year": 2025,
      "title": "Interface‐Modulated Antiferroelectric‐to‐Ferroelectric‐Like Transition in Ultrathin Hf0.5Zr0.5O2 Films",
      "authors": "Haoyu Lu, Yu Li, Jiyuan Han, Geng Huangfu, Guan Feng, Shuaishuai Yin, Yingfen Wei*, Hao Jiang*, Changlin Zheng*, Qi Liu*, Ming Liu",
      "venue": "Advanced Functional Materials",
      "url": "https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/adfm.202414187",
      "citation": "35 5, 2414187 (2025)",
      "titleZh": "界面调控超薄 Hf₀.₅Zr₀.₅O₂ 薄膜从反铁电态向类铁电态的转变"
    },
    {
      "year": 2024,
      "title": "Interface Engineering on Ferroelectricity of Transparent Hf₀.₅Zr₀.₅O₂ Ferroelectric Capacitors",
      "authors": "Shuning Zhang, Fansen Cao, Haoyu Lu, Yingfen Wei*, Xuanyu Zhao, Hao Jiang, Xiaobing Yan*, Qi Liu*",
      "venue": "IEEE Electron Device Letters",
      "url": "https://ieeexplore.ieee.org/abstract/document/10731895",
      "citation": "45 12, 2347-2350 (2024)",
      "selected": false
    },
    {
      "year": 2024,
      "title": "A general physics model of oxygen vacancy dynamics for ferroelectricity enhancement and degradation in hafnia-based thin films",
      "authors": "Shucheng Zhang, Yu Li*, Yingfen Wei*, Yize Sun, Xumeng Zhang, Hao Jiang*, Qi Liu",
      "venue": "IEEE Transactions on Electron Devices",
      "url": "https://ieeexplore.ieee.org/abstract/document/10704701",
      "citation": "71 11, 6706-6712 (2024)",
      "selected": false
    },
    {
      "year": 2024,
      "title": "Comprehensive Analysis of Duty-Cycle Induced Degradations in HfxZr1-xO2-Based Ferroelectric Capacitors--Behavior, Modeling, and Optimization",
      "authors": "Guan Feng, Yu Li, Hao Jiang*, Xiaodong Wang, Yize Sun, Yingfen Wei*, Qi Liu*, Ming Liu",
      "venue": "IEEE Symposium on VLSI Technology and Circuits",
      "url": "https://ieeexplore.ieee.org/abstract/document/10631494",
      "citation": "1-2 (2024)",
      "titleZh": "占空比引起的 HfₓZr₁₋ₓO₂ 基铁电电容器性能退化：行为、建模与优化"
    },
    {
      "year": 2024,
      "title": "Working principles and performance optimization of nonvolatile 6T2C-SRAM with Hafnia-based ferroelectric capacitors",
      "authors": "Yu Li, Keji Zhou, Hao Jiang*, Zhangcheng Huang, Xumeng Zhang, Yingfen Wei*, Qi Liu",
      "venue": "IEEE Transactions on Electron Devices",
      "url": "https://ieeexplore.ieee.org/abstract/document/10552780",
      "citation": "71 8, 4631-4636 (2024)",
      "selected": false
    },
    {
      "year": 2024,
      "title": "High-efficient and comprehensive modeling of MFIM ferroelectric tunnel junctions for non-volatile/volatile applications",
      "authors": "Yu Li, Hao Jiang*, Jie Yu, Xuanyu Zhao, Xiaodong Wang, Qihan Liu, Yingfen Wei*, Qi Liu*, Ming Liu",
      "venue": "IEEE International Memory Workshop",
      "url": "https://ieeexplore.ieee.org/abstract/document/10536918",
      "citation": "1-4 (2024)",
      "selected": false
    },
    {
      "year": 2024,
      "title": "Multi-state nonvolatile capacitances in HfO2-based ferroelectric capacitor for neuromorphic computing",
      "authors": "Shuyu Wu, Xumeng Zhang, Rongrong Cao, Keji Zhou, Jikai Lu, Chao Li, Yang Yang, Dashan Shang, Yingfen Wei*, Hao Jiang*, Qi Liu*",
      "venue": "Applied Physics Letters",
      "url": "https://pubs.aip.org/aip/apl/article-abstract/124/10/102902/3268683/Multi-state-nonvolatile-capacitances-in-HfO2-based?redirectedFrom=fulltext",
      "citation": "124 10 (2024)",
      "selected": false
    },
    {
      "year": 2024,
      "title": "Reliable ferroelectricity down to cryogenic temperature in wake-up free Hf0.5Zr0.5O2 thin films by thermal atomic layer deposition",
      "authors": "Shuyu Wu, Rongrong Cao, Hao Jiang*, Yu Li, Xumeng Zhang, Yang Yang, Yan Wang, Yingfen Wei*, Qi Liu",
      "venue": "Journal of Semiconductors",
      "url": "https://iopscience.iop.org/article/10.1088/1674-4926/45/3/032301/meta",
      "citation": "45 3, 032301 (2024)",
      "selected": false
    },
    {
      "year": 2023,
      "title": "A stable rhombohedral phase in ferroelectric Hf(Zr)1+xO2 capacitor with ultralow coercive field",
      "authors": "Yuan Wang, Lei Tao, Roger Guzman, Qing Luo*, Wu Zhou, Yang Yang, Yingfen Wei, Yu Liu, Pengfei Jiang, Yuting Chen, Shuxian Lv, Yaxin Ding, Wei Wei, Tiancheng Gong, Yan Wang, Qi Liu, Shixuan Du*, Ming Liu*",
      "venue": "Science",
      "url": "https://www.science.org/doi/abs/10.1126/science.adf6137",
      "citation": "381 6657, 558-563 (2023)",
      "selected": false
    },
    {
      "year": 2023,
      "title": "Investigating the Electromechanical Behavior of Unconventionally Ferroelectric Hf0.5Zr0.5O2‐Based Capacitors Through Operando Nanobeam X‐Ray Diffraction",
      "authors": "Evgenios Stylianidis, Pranav Surabhi, Ruben Hamming‐Green, Mart Salverda, Yingfen Wei, Arjan Burema, Sylvia Matzen, Tamalika Banerjee, Alexander Björling, Binayak Mukherjee, Sangita Dutta, Hugo Aramberri, Jorge Íñiguez, Beatriz Noheda, Dina Carbone, Pavan Nukala",
      "venue": "Advanced Electronic Materials",
      "url": "https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/aelm.202201298",
      "citation": "9 6, 2201298 (2023)",
      "selected": false
    },
    {
      "year": 2022,
      "title": "Synaptic behaviour in ferroelectric epitaxial rhombohedral Hf0.5Zr0.5O2 thin films",
      "authors": "Yingfen Wei*, Gaurav Vats, Beatriz Noheda*",
      "venue": "Neuromorphic Computing and Engineering",
      "url": "https://iopscience.iop.org/article/10.1088/2634-4386/ac970c/meta",
      "citation": "2 4, 044007 (2022)",
      "selected": false
    },
    {
      "year": 2022,
      "title": "Operando Observation of Reversible Oxygen Migration and Phase Transitions in Hafnia-based Ferroelectric Devices",
      "authors": "Pavan Nukala, Majid Ahmadi, Yingfen Wei, Sytze de Graaf, Evgenios Stylianidis, Tuhin Chakrabortty, Sylvia Matzen, Henny W Zandbergen, Alexander Björling, Dan Mannix, Dina Carbone, Bart Kooi, Beatriz Noheda*",
      "venue": "Microscopy and Microanalysis",
      "url": "https://www.proquest.com/openview/ba824e4074eeda92fb267dca1e86b4e5/1?pq-origsite=gscholar&cbl=33692",
      "citation": "28 S1, 2268-2269 (2022)",
      "selected": false
    },
    {
      "year": 2021,
      "title": "Reversible oxygen migration and phase transitions in hafnia-based ferroelectric devices",
      "authors": "Pavan Nukala, Majid Ahmadi, Yingfen Wei, Sytze De Graaf, Evgenios Stylianidis, Tuhin Chakrabortty, Sylvia Matzen, Henny W Zandbergen, Alexander Björling, Dan Mannix, Dina Carbone, Bart Kooi, Beatriz Noheda*",
      "venue": "Science",
      "url": "https://www.science.org/doi/abs/10.1126/science.abf3789",
      "citation": "372 6542, 630-635 (2021)",
      "selected": false
    },
    {
      "year": 2021,
      "title": "In situ heating studies on temperature-induced phase transitions in epitaxial Hf0.5Zr0.5O2/La0.67Sr0.33MnO3 heterostructures",
      "authors": "Pavan Nukala, Majid Ahmadi, Jordi Antoja-Lleonart, Sytze de Graaf, Yingfen Wei, Henny W Zandbergen, Bart J Kooi, Beatriz Noheda*",
      "venue": "Applied Physics Letters",
      "url": "https://pubs.aip.org/aip/apl/article-abstract/118/6/062901/1022558/In-situ-heating-studies-on-temperature-induced?redirectedFrom=fulltext",
      "citation": "118 6 (2021)",
      "selected": false
    },
    {
      "year": 2021,
      "title": "Strain Relaxation in“2D/2D and 2D/3D Systems\"",
      "authors": "Heng Zhang, Daniel T Yimam, Sytze de Graaf, Jamo Momand, Paul A Vermeulen, Yingfen Wei, Beatriz Noheda, Bart J Kooi",
      "venue": "ACS nano",
      "url": "https://pubs.acs.org/doi/full/10.1021/acsnano.0c08842",
      "citation": "15 2, 2869-2879 (2021)",
      "selected": false
    },
    {
      "year": 2020,
      "title": "Guidelines for the stabilization of a polar rhombohedral phase in epitaxial Hf0.5Zr0.5O2 thin films",
      "authors": "Pavan Nukala#, Yingfen Wei#, Vincent de Haas, Qikai Guo, Jordi Antoja-Lleonart, Beatriz Noheda*",
      "venue": "Ferroelectrics",
      "url": "https://www.tandfonline.com/doi/full/10.1080/00150193.2020.1791658",
      "citation": "569 1, 148-163 (2020)",
      "selected": false
    },
    {
      "year": 2019,
      "title": "Magneto-ionic control of spin polarization in multiferroic tunnel junctions",
      "authors": "Yingfen Wei, Sylvia Matzen, Cynthia P Quinteros, Thomas Maroutian, Guillaume Agnus, Philippe Lecoeur, Beatriz Noheda*",
      "venue": "npj Quantum Materials",
      "url": "https://www.nature.com/articles/s41535-019-0201-0",
      "citation": "4 1, 62 (2019)",
      "selected": false
    },
    {
      "year": 2019,
      "title": "Direct Epitaxial Growth of Polar (1 – x)HfO2–(x)ZrO2 Ultrathin Films on Silicon",
      "authors": "Pavan Nukala, Jordi Antoja-Lleonart, Yingfen Wei, Lluis Yedra, Brahim Dkhil, Beatriz Noheda*",
      "venue": "ACS applied electronic materials",
      "url": "https://pubs.acs.org/doi/full/10.1021/acsaelm.9b00585",
      "citation": "1 12, 2585-2593 (2019)",
      "selected": false
    },
    {
      "year": 2019,
      "title": "Magnetic Tunnel Junctions Based on Ferroelectric Tunnel Barriers",
      "authors": "Yingfen Wei, Sylvia Matzen, Thomas Maroutian, Guillaume Agnus, Mart Salverda, Pavan Nukala, Qihong Chen, Jianting Ye, Philippe Lecoeur, Beatriz Noheda*",
      "venue": "Physical Review Applied",
      "url": "https://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.12.031001",
      "citation": "12 3, 031001 (2019) [Editor's Suggestions]",
      "selected": false
    },
    {
      "year": 2018,
      "title": "A rhombohedral ferroelectric phase in epitaxially-strained Hf₀.₅Zr₀.₅O₂ thin films",
      "authors": "Yingfen Wei, Pavan Nukala, Mart Salverda, Sylvia Matzen, Hong Jian Zhao, Jamo Momand, Arnoud Everhardt, Graeme R Blake, Philippe Lecoeur, Bart J Kooi, Jorge Íñiguez, Brahim Dkhil, Beatriz Noheda*",
      "venue": "Nature Materials",
      "url": "https://www.nature.com/articles/s41563-018-0196-0",
      "citation": "17 (1), 1095-1100 (2018)",
      "selected": false
    }
  ],
  "news": [
    {
      "date": "2026-10",
      "text": "Congratulations to Haoyu Lu and colleagues! By tailoring grain growth in a 5.5 nm hafnium zirconium oxide film, we made devices that withstood more than 100 million polarization reversals at 225 °C and retained their memory state for at least 1,000 hours at that temperature. Our work was published in Science Bulletin.",
      "textZh": "祝贺 Haoyu Lu 和各位合作者！我们通过调控 5.5 纳米厚铪锆氧化物薄膜中的晶粒生长，使器件在 225 ℃ 下经受了超过 1 亿次极化翻转，并在同一温度下保持存储状态至少 1000 小时。这项工作发表于 Science Bulletin。",
      "image": "assets/hzo-science-bulletin.jpg",
      "imageCredit": "© Science Bulletin",
      "url": "https://www.eurekalert.org/news-releases/1143111",
      "paperUrl": "https://doi.org/10.1016/j.scib.2026.08.078"
    },
    {
      "date": "2026-07",
      "text": "Welcome to the new academic homepage.",
      "textZh": "欢迎访问新版学术主页。"
    },
    {
      "date": "2026-06",
      "text": "PhD and postdoctoral positions are available.",
      "textZh": "课题组招收博士研究生和博士后。"
    }
  ]
};
