export const PROFILE = {
  name: 'Vũ Thế Anh',
  brand: 'anyu',
  brandSuffix: '205',
  handle: '@TiiAyyLuvBear',
  domain: 'anyu205.id.vn',
  avatar: 'https://avatars.githubusercontent.com/u/99866822?v=4',
  github: 'https://github.com/TiiAyyLuvBear',
  linkedin: 'https://www.linkedin.com/in/theanhvu2005',
  email: 'theanhvu2005@gmail.com',
  location: {
    en: 'Bình Thạnh, Ho Chi Minh City, Vietnam',
    vi: 'Bình Thạnh, TP. Hồ Chí Minh, Việt Nam',
  },
  role: {
    en: 'Computer Science Student @ HCMUS (K23) · Applied NLP & Speech AI',
    vi: 'Sinh viên Khoa học Máy tính @ ĐH KHTN - ĐHQG-HCM (K23) · AI Xử lý Ngôn ngữ & Giọng nói',
  },
  statusBadge: {
    en: 'Open to AI / NLP / Speech & Software Engineering Internships',
    vi: 'Sẵn sàng cho cơ hội Thực tập AI / NLP / Speech & Software Engineering',
  },
  heroHeadline: {
    en: 'Engineering intelligent systems for Vietnamese speech & text.',
    vi: 'Xây dựng hệ thống AI chuyên sâu cho giọng nói & văn bản tiếng Việt.',
  },
  heroLede: {
    en: 'I design and build end-to-end AI pipelines: multi-agent Vietnamese audiobook synthesis with zero-shot voice cloning, biometric speaker-verified voice assistants, and grounded RAG question answering over Vietnamese news.',
    vi: 'Mình thiết kế và phát triển các pipeline AI hoàn chỉnh: tổng hợp sách nói tiếng Việt đa tác tử có nhân bản giọng nói, trợ lý giọng nói xác thực sinh trắc học người nói, và hệ thống hỏi đáp RAG đối chiếu nguồn báo chí tiếng Việt.',
  },
  aboutBio: {
    en: [
      "I'm Vũ Thế Anh (anyu205), a Computer Science undergraduate at VNUHCM – University of Science (HCMUS), Class of 2023. My primary research and engineering passion lies at the intersection of Vietnamese Natural Language Processing (NLP), Speech Processing (ASR/TTS/Speaker Verification), and modern Full-Stack Software Engineering.",
      "Rather than keeping models isolated in notebooks, I care deeply about shipping complete, reproducible systems—from hybrid retrieval pipelines benchmarked with Recall@k, MRR, and nDCG, to FastAPI + React/Streamlit applications and containerized toolchains.",
    ],
    vi: [
      "Mình là Vũ Thế Anh (anyu205), sinh viên ngành Khoa học Máy tính tại Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM (HCMUS), khóa K23. Định hướng trọng tâm của mình là kết hợp giữa Xử lý Ngôn ngữ Tự nhiên tiếng Việt (NLP), Xử lý Tiếng nói (ASR/TTS/Xác thực người nói) và Kỹ thuật Phần mềm hiện đại.",
      "Thay vì chỉ dừng lại ở các mô hình thử nghiệm trên notebook, mình luôn hướng tới việc đóng gói thành hệ thống hoàn chỉnh, có khả năng tái lập cao — từ việc đo lường chất lượng truy hồi bằng Recall@k, MRR, nDCG cho đến xây dựng kiến trúc FastAPI, React, Docker và công cụ tự động hóa.",
    ],
  },
  quickStats: [
    {
      value: 'HCMUS',
      sub: 'K23 · CS',
      label: { en: 'University of Science', vi: 'ĐH Khoa học Tự nhiên' },
    },
    {
      value: '5+',
      sub: 'End-to-End',
      label: { en: 'Flagship AI & Web Systems', vi: 'Dự án AI & Web trọng điểm' },
    },
    {
      value: '16+',
      sub: 'Public Repos',
      label: { en: 'Open-Source Builds & Labs', vi: 'Kho mã nguồn & Thực nghiệm' },
    },
    {
      value: '3',
      sub: 'Core Pillars',
      label: { en: 'Speech · NLP/RAG · Full-Stack', vi: 'Speech · NLP/RAG · Full-Stack' },
    },
  ],
};

export const CURRENT_WORK = [
  {
    id: 'rag-news-study',
    when: { en: 'Since Jun 2026 · Ongoing', vi: 'Từ 06/2026 · Đang thực hiện' },
    status: 'active',
    progress: 85,
    category: 'NLP & IR Research',
    title: {
      en: 'RAG on Vietnamese News — Retrieval & Grounding Study',
      vi: 'RAG trên Báo chí Tiếng Việt — Nghiên cứu Truy hồi & Đối chiếu nguồn',
    },
    description: {
      en: 'A Text Mining project systematically comparing sparse (BM25), dense (BAAI/bge-m3), and hybrid RRF retrieval with cross-encoder reranking, measuring how retrieval quality directly impacts LLM answer faithfulness.',
      vi: 'Đồ án Khai phá Văn bản so sánh có hệ thống giữa truy hồi thưa (BM25), truy hồi dày (BAAI/bge-m3) và kết hợp Hybrid kèm Reranking, đo lường mức độ ảnh hưởng của chất lượng truy hồi lên độ chính xác của câu trả lời từ LLM.',
    },
    tags: ['rank_bm25', 'BAAI/bge-m3', 'Qdrant', 'bge-reranker', 'Qwen2.5'],
    repoUrl: 'https://github.com/TiiAyyLuvBear/Text-Mining---RAG-on-News',
  },
  {
    id: 'genai-coursework',
    when: { en: 'Sep 2026 – Present', vi: '09/2026 – Hiện tại' },
    status: 'active',
    progress: 70,
    category: 'Generative AI',
    title: {
      en: 'Generative AI Architectures & Fine-Tuning Experiments',
      vi: 'Thực nghiệm Kiến trúc Generative AI & Tinh chỉnh Mô hình',
    },
    description: {
      en: 'Curated notebook experiments exploring modern generative modeling, LoRA/QLoRA fine-tuning with Unsloth, prompt engineering, and evaluation workflows maintained in an open repository.',
      vi: 'Chuỗi thực nghiệm chuyên sâu với các mô hình sinh hiện đại, tinh chỉnh nhẹ LoRA/QLoRA bằng Unsloth, tối ưu hóa prompt và quy trình đánh giá mô hình.',
    },
    tags: ['PyTorch', 'Unsloth', 'Gemma-2', 'Transformers', 'Jupyter'],
    repoUrl: 'https://github.com/TiiAyyLuvBear/Generative-AI',
  },
  {
    id: 'latex-docker',
    when: { en: 'Oct 2026 · Active Tooling', vi: '10/2026 · Công cụ đang phát triển' },
    status: 'shipping',
    progress: 95,
    category: 'DevOps & Academic Tooling',
    title: {
      en: 'Reproducible Local LaTeX Environment in Docker',
      vi: 'Môi trường biên dịch LaTeX cục bộ chuẩn hóa với Docker',
    },
    description: {
      en: 'An MIT-licensed containerized TeX Live environment designed so research teams and students compile identical academic reports and papers across Windows, macOS, and Linux without dependency drift.',
      vi: 'Môi trường biên dịch báo cáo khoa học LaTeX đóng gói trong Docker (giấy phép MIT), giúp nhóm nghiên cứu biên dịch ra file PDF đồng nhất trên mọi máy tính mà không lo xung đột gói.',
    },
    tags: ['Docker', 'LaTeX', 'TeX Live', 'Reproducibility', 'MIT License'],
    repoUrl: 'https://github.com/TiiAyyLuvBear/latex-local-docker',
  },
];

export const FEATURED_PROJECTS = [
  {
    slug: 'lamaudiobook',
    category: 'speech',
    categoryLabel: { en: 'Speech Synthesis & Multi-Agent AI', vi: 'Tổng hợp Giọng nói & AI Đa tác tử' },
    title: 'LAMAudiobook',
    subtitle: {
      en: 'End-to-End Ebook to Expressive Vietnamese Audiobook Pipeline',
      vi: 'Hệ thống chuyển đổi Ebook sang Sách nói Tiếng Việt biểu cảm',
    },
    featured: true,
    status: { en: 'Completed · Open Source', vi: 'Hoàn thành · Mã nguồn mở' },
    language: 'Python',
    metrics: '★ 1 · 72 commits · Multi-Agent TTS',
    accentColor: '#a99dff',
    gradient: 'from-indigo-500/20 via-purple-500/15 to-violet-600/20',
    image: 'assets/lamaudiobook.svg',
    summary: {
      en: 'Turns an EPUB or TXT ebook into a fully narrated Vietnamese audiobook. A multi-agent pipeline parses chapters, normalizes Vietnamese text, detects emotional mood per passage, selects or clones an appropriate voice, and synthesizes studio-grade speech into MP3/WAV or embedded EPUB3 media overlays.',
      vi: 'Chuyển đổi sách điện tử (EPUB/TXT) thành sách nói tiếng Việt hoàn chỉnh. Pipeline đa tác tử tự động tách chương, chuẩn hóa văn bản tiếng Việt, nhận diện cảm xúc từng đoạn, chọn hoặc nhân bản giọng đọc phù hợp từ mẫu âm thanh ngắn, và xuất ra MP3/WAV hoặc sách EPUB3 tích hợp âm thanh.',
    },
    highlights: {
      en: [
        'Multi-agent orchestration for chapter segmentation, Vietnamese text normalization, and passage-level sentiment/mood classification.',
        'Dual TTS engine support integrating VieNeu-TTS 0.3B for natural Vietnamese prosody and XTTSv2 for zero-shot voice cloning.',
        'Asynchronous SQLite job queue with FastAPI backend and interactive Streamlit studio frontend.',
      ],
      vi: [
        'Điều phối đa tác tử (Multi-agent): tự động phân tách chương, làm sạch ký tự đặc biệt tiếng Việt và phân tích sắc thái cảm xúc từng phân đoạn.',
        'Tích hợp kép VieNeu-TTS 0.3B (tối ưu ngữ điệu tiếng Việt) và XTTSv2 hỗ trợ nhân bản giọng nói (voice cloning) từ mẫu ghi âm ngắn.',
        'Hàng đợi tác vụ bất đồng bộ với SQLite, kết hợp FastAPI ở backend và giao diện điều khiển trực quan bằng Streamlit.',
      ],
    },
    pipeline: [
      {
        step: 'Upload Book',
        stepVi: 'Tải sách lên',
        detail: {
          en: 'Ingests raw EPUB or UTF-8 TXT manuscripts through the Streamlit studio.',
          vi: 'Nhận file sách đầu vào định dạng EPUB hoặc TXT thông qua giao diện Streamlit.',
        },
      },
      {
        step: 'Chapter Parser',
        stepVi: 'Tách chương',
        detail: {
          en: 'Extracts structured table of contents, chapter boundaries, and paragraph blocks.',
          vi: 'Trích xuất cấu trúc mục lục, ranh giới từng chương và các khối đoạn văn.',
        },
      },
      {
        step: 'VN Text Cleaner',
        stepVi: 'Chuẩn hóa văn bản',
        detail: {
          en: 'Expands numbers, dates, abbreviations, and strips OCR artifacts for clean Vietnamese phonetics.',
          vi: 'Chuyển đổi chữ số, ngày tháng, từ viết tắt và loại bỏ nhiễu ký tự để đọc chuẩn âm tiếng Việt.',
        },
      },
      {
        step: 'Mood Detection',
        stepVi: 'Nhận diện cảm xúc',
        detail: {
          en: 'Analyzes narrative tone (calm, dramatic, joyful, tense) to control speaking style and pacing.',
          vi: 'Phân tích sắc thái đoạn văn (trầm lắng, kịch tính, vui tươi...) để điều chỉnh nhịp độ đọc.',
        },
      },
      {
        step: 'Voice Selection / Clone',
        stepVi: 'Chọn / Nhân bản giọng',
        detail: {
          en: 'Matches passage mood to preset speakers or clones a custom speaker from a short WAV reference.',
          vi: 'Ghép giọng đọc phù hợp với cảm xúc hoặc clone giọng người dùng từ file âm thanh mẫu.',
        },
      },
      {
        step: 'VieNeu-TTS / XTTSv2',
        stepVi: 'Tổng hợp tiếng nói',
        detail: {
          en: 'Synthesizes high-fidelity audio chunks with natural Vietnamese intonation.',
          vi: 'Sinh âm thanh chất lượng cao với ngữ điệu tiếng Việt tự nhiên bằng VieNeu-TTS 0.3B & XTTSv2.',
        },
      },
      {
        step: 'Quality Check & Export',
        stepVi: 'Kiểm định & Xuất file',
        detail: {
          en: 'Validates audio duration/silence and packages into MP3, WAV, or synchronized EPUB3.',
          vi: 'Kiểm tra chất lượng âm thanh, ghép nối và xuất ra MP3, WAV hoặc EPUB3 đồng bộ chữ-tiếng.',
        },
      },
    ],
    stack: ['Python', 'FastAPI', 'Streamlit', 'VieNeu-TTS 0.3B', 'XTTSv2', 'SQLite Job Queue'],
    cliCommand: 'uvicorn src.backend.app:app --port 8000\nstreamlit run src/frontend/streamlit_app.py',
    codeUrl: 'https://github.com/TiiAyyLuvBear/LAMAudiobook',
    liveUrl: null,
  },
  {
    slug: 'voicestudy',
    category: 'speech',
    categoryLabel: { en: 'Biometric Voice Assistant', vi: 'Trợ lý Giọng nói Sinh trắc học' },
    title: 'VoiceStudy Assistant',
    subtitle: {
      en: 'Speaker-Verified Vietnamese Voice Assistant for Schedules & Private Notes',
      vi: 'Trợ lý giọng nói tiếng Việt có xác thực danh tính người nói cho lịch trình & ghi chú mật',
    },
    featured: true,
    status: { en: 'Completed · Open Source', vi: 'Hoàn thành · Mã nguồn mở' },
    language: 'Python · React',
    metrics: '41 commits · ECAPA-TDNN + PhoWhisper',
    accentColor: '#81e7e0',
    gradient: 'from-teal-500/20 via-cyan-500/15 to-emerald-500/20',
    image: 'assets/voicestudy.svg',
    summary: {
      en: 'A security-first Vietnamese voice assistant designed for personal study schedules and confidential notes. Every spoken command first passes biometric speaker verification using ECAPA-TDNN voice embeddings before PhoWhisper ASR transcribes and executes the intent.',
      vi: 'Trợ lý giọng nói tiếng Việt ưu tiên bảo mật dành cho quản lý lịch học và ghi chú cá nhân. Mọi câu lệnh thoại đều phải qua bước xác thực sinh trắc học giọng nói (ECAPA-TDNN) trước khi được chuyển thành văn bản bằng PhoWhisper ASR và thực thi.',
    },
    highlights: {
      en: [
        'Two-factor voice security: biometric speaker verification (cosine similarity on ECAPA-TDNN embeddings) plus spoken passphrase verification against a salted cryptographic hash for private notes.',
        'Fine-tuned Vietnamese speech recognition powered by PhoWhisper-small coupled with custom intent & entity extraction (NLU).',
        'Interactive React + Vite dashboard connected to a FastAPI & SQLite backend.',
      ],
      vi: [
        'Bảo mật giọng nói 2 lớp: Xác thực đặc trưng giọng nói bằng ECAPA-TDNN kết hợp mật khẩu thoại được băm có muối (salted hash) khi truy cập ghi chú riêng tư.',
        'Nhận dạng tiếng nói tiếng Việt chính xác cao với PhoWhisper-small kết hợp mô-đun hiểu ngôn ngữ tự nhiên (Intent NLU).',
        'Giao diện web trực quan viết bằng React + Vite kết nối với FastAPI và cơ sở dữ liệu SQLite.',
      ],
    },
    pipeline: [
      {
        step: 'Voice Command',
        stepVi: 'Câu lệnh thoại',
        detail: {
          en: 'Captures live microphone audio stream from the React web interface.',
          vi: 'Thu âm trực tiếp câu lệnh từ người dùng qua giao diện React.',
        },
      },
      {
        step: 'ECAPA-TDNN Speaker ID',
        stepVi: 'Trích xuất đặc trưng giọng',
        detail: {
          en: 'Extracts 192-dimensional speaker embedding vector from the audio waveform.',
          vi: 'Trích xuất vector đặc trưng giọng nói (embedding) bằng mô hình ECAPA-TDNN.',
        },
      },
      {
        step: 'Biometric Verification',
        stepVi: 'Xác thực người nói',
        detail: {
          en: 'Compares cosine similarity against enrolled user profile; blocks unauthorized voices.',
          vi: 'Đối chiếu độ tương đồng cosine với hồ sơ giọng đã đăng ký; từ chối nếu không khớp.',
        },
      },
      {
        step: 'PhoWhisper ASR',
        stepVi: 'Nhận dạng tiếng Việt',
        detail: {
          en: 'Transcribes verified Vietnamese audio into accurate text and checks salted passphrase hash if needed.',
          vi: 'Chuyển giọng nói tiếng Việt thành văn bản bằng PhoWhisper-small và kiểm tra mật khẩu thoại.',
        },
      },
      {
        step: 'Intent NLU & Action',
        stepVi: 'Phân tích ý định & Thực thi',
        detail: {
          en: 'Parses study schedule CRUD or note queries, updates SQLite, and responds via TTS.',
          vi: 'Nhận diện ý định (thêm lịch học, tra cứu ghi chú), cập nhật SQLite và phản hồi bằng giọng nói.',
        },
      },
    ],
    stack: ['PhoWhisper-small', 'ECAPA-TDNN', 'FastAPI', 'React', 'Vite', 'SQLite'],
    cliCommand: null,
    codeUrl: 'https://github.com/TiiAyyLuvBear/VoiceStudy-Assistant',
    liveUrl: null,
  },
  {
    slug: 'news-rag',
    category: 'nlp',
    categoryLabel: { en: 'Information Retrieval & RAG', vi: 'Truy hồi Thông tin & Hệ thống RAG' },
    title: 'Vietnamese News QA with RAG',
    subtitle: {
      en: 'Grounded Question Answering over Vietnamese News with Hybrid Retrieval & Reranking',
      vi: 'Hệ thống Hỏi-Đáp tin tức Tiếng Việt đối chiếu nguồn với Truy hồi Lai & Reranking',
    },
    featured: true,
    status: { en: 'Active Research · Course Project', vi: 'Đang nghiên cứu · Đồ án môn học' },
    language: 'Python',
    metrics: '★ 1 · Recall@k, MRR & nDCG Benchmarks',
    accentColor: '#fdb97e',
    gradient: 'from-amber-500/20 via-orange-500/15 to-rose-500/20',
    image: 'assets/news-rag.svg',
    summary: {
      en: 'A retrieval-augmented question answering system over Vietnamese online news articles. Every generated answer cites its exact source articles, and the system explicitly abstains when the retrieved evidence is insufficient instead of hallucinating.',
      vi: 'Hệ thống hỏi đáp tự động trên kho dữ liệu báo chí trực tuyến tiếng Việt. Mỗi câu trả lời đều trích dẫn rõ bài báo nguồn, đồng thời được thiết kế để chủ động từ chối trả lời khi ngữ cảnh không đủ bằng chứng thay vì bịa đặt thông tin (hallucination).',
    },
    highlights: {
      en: [
        'Hybrid retrieval combining lexical BM25 (`rank_bm25`) and multilingual dense embeddings (`BAAI/bge-m3`) indexed in Qdrant.',
        'Cross-encoder reranking stage (`bge-reranker`) filtering top-5 passages for Qwen2.5 / LLM synthesis.',
        'Rigorous quantitative benchmark evaluating Sparse vs. Dense vs. Hybrid + Rerank across Recall@k, MRR, and nDCG.',
      ],
      vi: [
        'Kết hợp truy hồi từ khóa BM25 (`rank_bm25`) và vector ngữ nghĩa dày (`BAAI/bge-m3`) lưu trữ trên cơ sở dữ liệu vector Qdrant.',
        'Tầng xếp hạng lại (Cross-encoder `bge-reranker`) chọn lọc top-5 đoạn văn sát nhất trước khi đưa vào Qwen2.5 / API LLM.',
        'Đánh giá thực nghiệm bài bản giữa các phương pháp truy hồi qua các độ đo chuẩn: Recall@k, MRR và nDCG.',
      ],
    },
    pipeline: [
      {
        step: 'User Question',
        stepVi: 'Câu hỏi tiếng Việt',
        detail: {
          en: 'Receives natural language query about current events or Vietnamese news topics.',
          vi: 'Nhận câu hỏi ngôn ngữ tự nhiên về các sự kiện, tin tức thời sự tiếng Việt.',
        },
      },
      {
        step: 'BM25 + Dense (bge-m3)',
        stepVi: 'Truy hồi BM25 + bge-m3',
        detail: {
          en: 'Executes parallel lexical search and dense vector similarity search in Qdrant.',
          vi: 'Chạy song song tìm kiếm từ khóa BM25 và tìm kiếm vector ngữ nghĩa bge-m3 trên Qdrant.',
        },
      },
      {
        step: 'Hybrid RRF Fusion',
        stepVi: 'Hợp nhất kết quả (Fusion)',
        detail: {
          en: 'Merges candidate rankings from sparse and dense retrievers into a unified candidate pool.',
          vi: 'Kết hợp danh sách ứng viên từ cả hai nhánh truy hồi để không bỏ sót từ khóa lẫn ngữ nghĩa.',
        },
      },
      {
        step: 'Cross-Encoder Rerank',
        stepVi: 'Xếp hạng lại (Rerank)',
        detail: {
          en: 'Scores query-passage pairs deeply with bge-reranker to surface the top-5 most relevant chunks.',
          vi: 'Chấm điểm sâu từng cặp (câu hỏi - đoạn văn) bằng bge-reranker để lấy ra Top-5 ngữ cảnh tốt nhất.',
        },
      },
      {
        step: 'Grounded LLM Answer',
        stepVi: 'Sinh câu trả lời kèm nguồn',
        detail: {
          en: 'Generates citation-backed answer via Qwen2.5 or abstains if evidence confidence is low.',
          vi: 'Tổng hợp câu trả lời có gắn link nguồn bài báo bằng Qwen2.5, hoặc báo thiếu dữ kiện nếu không đủ căn cứ.',
        },
      },
    ],
    stack: ['Python', 'rank_bm25', 'BAAI/bge-m3', 'Qdrant', 'bge-reranker', 'Qwen2.5 / LLMs'],
    cliCommand: null,
    codeUrl: 'https://github.com/TiiAyyLuvBear/Text-Mining---RAG-on-News',
    liveUrl: null,
  },
  {
    slug: 'iot-tracking',
    category: 'fullstack',
    categoryLabel: { en: 'IoT & Real-Time Telemetry', vi: 'Internet Vạn Vật (IoT) & Giám sát Thời gian thực' },
    title: 'IoT Humidity & Temperature Tracking',
    subtitle: {
      en: 'ESP32 Sensor Telemetry Node with Live Web Dashboard & Automated Alerts',
      vi: 'Hệ thống cảm biến ESP32 đo nhiệt độ & độ ẩm thời gian thực kèm cảnh báo tự động',
    },
    featured: true,
    status: { en: 'Live Demo Available', vi: 'Có bản Live Demo trực tuyến' },
    language: 'JavaScript · C/C++ (ESP32)',
    metrics: '91 commits · Live GitHub Pages Dashboard',
    accentColor: '#83c9ff',
    gradient: 'from-sky-500/20 via-blue-500/15 to-indigo-500/20',
    image: 'assets/iot-tracking.svg',
    summary: {
      en: 'An end-to-end hardware-to-cloud IoT monitoring solution. An ESP32 microcontroller reads environmental temperature and humidity sensors, streams telemetry to a cloud backend, visualizes trends on a live web dashboard, and dispatches push/email alerts when thresholds are breached.',
      vi: 'Giải pháp giám sát môi trường IoT hoàn chỉnh từ phần cứng đến đám mây. Vi điều khiển ESP32 thu thập dữ liệu nhiệt độ và độ ẩm, truyền lên cloud, hiển thị biểu đồ trực tiếp trên web dashboard và tự động gửi cảnh báo qua email/push khi vượt ngưỡng an toàn.',
    },
    highlights: {
      en: [
        'Real-time hardware telemetry streaming from ESP32 sensor nodes with resilient reconnection handling.',
        'Interactive web dashboard displaying historical time-series charts and instant sensor health status.',
        'Automated threshold monitoring with Express + Nodemailer email & browser notifications.',
      ],
      vi: [
        'Truyền dữ liệu đo đạc thời gian thực từ mạch cảm biến ESP32 với cơ chế tự động kết nối lại khi mất mạng.',
        'Web dashboard trực quan hiển thị biểu đồ biến thiên theo thời gian thực và trạng thái thiết bị.',
        'Cảnh báo tức thời qua Email (Express + Nodemailer) và thông báo đẩy khi nhiệt độ/độ ẩm vượt ngưỡng.',
      ],
    },
    pipeline: [
      {
        step: 'ESP32 Sensor Node',
        stepVi: 'Cảm biến ESP32',
        detail: {
          en: 'Samples ambient humidity and temperature readings at configured intervals.',
          vi: 'Đọc dữ liệu nhiệt độ và độ ẩm môi trường định kỳ từ cảm biến gắn trên mạch ESP32.',
        },
      },
      {
        step: 'Cloud Data Ingestion',
        stepVi: 'Đồng bộ đám mây',
        detail: {
          en: 'Transmits JSON telemetry payloads over Wi-Fi to the backend API.',
          vi: 'Truyền gói dữ liệu JSON qua kết nối Wi-Fi lên máy chủ lưu trữ.',
        },
      },
      {
        step: 'Live Web Dashboard',
        stepVi: 'Bảng điều khiển trực tuyến',
        detail: {
          en: 'Renders live gauges and time-series charts hosted on GitHub Pages.',
          vi: 'Hiển thị đồng hồ đo và biểu đồ thời gian thực trực tiếp trên trình duyệt.',
        },
      },
      {
        step: 'Push & Email Alerts',
        stepVi: 'Cảnh báo Email / Push',
        detail: {
          en: 'Triggers Nodemailer alerts whenever environmental anomalies occur.',
          vi: 'Tự động kích hoạt Nodemailer gửi email cảnh báo ngay khi phát hiện thông số bất thường.',
        },
      },
    ],
    stack: ['ESP32', 'JavaScript', 'Express.js', 'Nodemailer', 'GitHub Pages'],
    cliCommand: null,
    codeUrl: 'https://github.com/TiiAyyLuvBear/IOT-Humidity-and-Temperature-Tracking',
    liveUrl: 'https://tiiayyluvbear.github.io/IOT-Humidity-and-Temperature-Tracking/',
  },
  {
    slug: '4money',
    category: 'fullstack',
    categoryLabel: { en: 'Full-Stack FinTech Web App', vi: 'Ứng dụng Web Quản lý Tài chính Cá nhân' },
    title: '4Money',
    subtitle: {
      en: 'Personal Finance Tracker for Spending, Budgets & Savings Goals',
      vi: 'Nền tảng theo dõi chi tiêu, hạn mức ngân sách và mục tiêu tiết kiệm',
    },
    featured: true,
    status: { en: 'Completed · Team Project', vi: 'Hoàn thành · Đồ án nhóm' },
    language: 'JavaScript (MERN)',
    metrics: '104 commits · Full REST API + Postman Suite',
    accentColor: '#f7a7c4',
    gradient: 'from-pink-500/20 via-rose-500/15 to-fuchsia-500/20',
    image: 'assets/4money.svg',
    summary: {
      en: 'A full-stack personal finance management application inspired by Money Lover, built as the capstone project for Introduction to Software Engineering. Users manage multi-wallet transactions, set category budgets, and track progress toward savings goals via a JWT-secured REST API.',
      vi: 'Ứng dụng quản lý tài chính cá nhân lấy cảm hứng từ Money Lover, được xây dựng trong khuôn khổ đồ án môn Nhập môn Công nghệ Phần mềm. Hỗ trợ ghi chép thu chi, thiết lập ngân sách theo danh mục và theo dõi mục tiêu tiết kiệm thông qua REST API bảo mật bằng JWT.',
    },
    highlights: {
      en: [
        'Clean separation of concerns with a responsive React + Vite + Tailwind frontend and Express + Mongoose REST API.',
        'Stateless JWT authentication, role-safe user data isolation, and comprehensive Postman automated API test collection.',
        'Visual analytics for monthly cashflow, category budget burn-down, and savings milestones.',
      ],
      vi: [
        'Kiến trúc tách biệt rõ ràng giữa Frontend (React + Vite + Tailwind CSS) và Backend RESTful API (Express + MongoDB).',
        'Xác thực người dùng bằng JWT, phân quyền dữ liệu an toàn và kèm bộ kiểm thử API đầy đủ trên Postman.',
        'Thống kê trực quan dòng tiền hàng tháng, cảnh báo vượt ngân sách và tiến độ đạt mục tiêu tiết kiệm.',
      ],
    },
    pipeline: [
      {
        step: 'React + Tailwind UI',
        stepVi: 'Giao diện React + Tailwind',
        detail: {
          en: 'Interactive client for logging transactions, viewing charts, and setting budgets.',
          vi: 'Giao diện người dùng phản hồi nhanh để nhập giao dịch, xem biểu đồ và đặt ngân sách.',
        },
      },
      {
        step: 'Express REST API',
        stepVi: 'Hệ thống Express API',
        detail: {
          en: 'Handles business logic for wallets, categories, budgets, and financial reports.',
          vi: 'Xử lý nghiệp vụ quản lý ví, danh mục thu chi, ngân sách và tổng hợp báo cáo.',
        },
      },
      {
        step: 'JWT Authentication',
        stepVi: 'Bảo mật JWT Auth',
        detail: {
          en: 'Secures private financial endpoints with signed JSON Web Tokens.',
          vi: 'Bảo vệ toàn bộ endpoint dữ liệu tài chính cá nhân bằng JSON Web Token.',
        },
      },
      {
        step: 'MongoDB + Mongoose',
        stepVi: 'Cơ sở dữ liệu MongoDB',
        detail: {
          en: 'Persists structured schemas for users, transactions, and savings goals.',
          vi: 'Lưu trữ dữ liệu có cấu trúc với Mongoose schema cho người dùng, giao dịch và mục tiêu tiết kiệm.',
        },
      },
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'Express.js', 'MongoDB', 'Mongoose', 'JWT'],
    cliCommand: null,
    codeUrl: 'https://github.com/TiiAyyLuvBear/Introduction-to-Software-Engineering',
    liveUrl: null,
  },
];

export const MORE_REPOS = [
  {
    name: 'Fine-tuning Gemma 2 for Banking Intent Classification',
    category: 'nlp',
    meta: 'Python · Unsloth · May 2026',
    description: {
      en: 'Fine-tunes Google Gemma 2 using Unsloth (LoRA/QLoRA) to accurately classify customer banking intents with low VRAM overhead.',
      vi: 'Tinh chỉnh mô hình ngôn ngữ lớn Gemma 2 bằng Unsloth để phân loại ý định khách hàng trong lĩnh vực ngân hàng với hiệu suất cao.',
    },
    url: 'https://github.com/TiiAyyLuvBear/Lab2-Finetune-Unsloth-Gemma-2-to-Intent-Classification-Task',
    tags: ['Gemma-2', 'Unsloth', 'LoRA', 'Intent Classification'],
  },
  {
    name: 'semeval — SemEval Shared Task Experiments',
    category: 'nlp',
    meta: 'Python · NLP Benchmark · Apr 2026',
    description: {
      en: 'Experimental pipelines, feature engineering, and model evaluations prepared for an international SemEval NLP shared task.',
      vi: 'Các pipeline thực nghiệm, huấn luyện và đánh giá mô hình cho bài toán thi đấu học thuật quốc tế SemEval.',
    },
    url: 'https://github.com/TiiAyyLuvBear/semeval',
    tags: ['SemEval', 'NLP', 'PyTorch', 'Evaluation'],
  },
  {
    name: 'sentiment-dvc-code — DVC Sentiment Pipeline',
    category: 'nlp',
    meta: 'Python · MLOps / DVC · Mar 2026',
    description: {
      en: 'Reproducible sentiment analysis machine learning pipeline with dataset and model artifact versioning powered by Data Version Control (DVC).',
      vi: 'Pipeline phân tích cảm xúc văn bản áp dụng chuẩn MLOps, quản lý phiên bản dữ liệu và mô hình bằng DVC (Data Version Control).',
    },
    url: 'https://github.com/TiiAyyLuvBear/sentiment-dvc-code',
    tags: ['DVC', 'MLOps', 'Sentiment Analysis', 'Reproducibility'],
  },
  {
    name: 'Diffie-Hellman Cryptographic Key Exchange',
    category: 'systems',
    meta: 'C++ · Cryptography · Dec 2025',
    description: {
      en: 'From-scratch C++ implementation of the Diffie-Hellman key exchange protocol demonstrating modular arithmetic and secure shared secret derivation.',
      vi: 'Cài đặt thuật toán trao đổi khóa mật mã Diffie-Hellman từ đầu bằng C++, minh họa số học đồng dư và thiết lập khóa chung an toàn.',
    },
    url: 'https://github.com/TiiAyyLuvBear/Diffie-Hellman',
    tags: ['C++', 'Cryptography', 'Security', 'Algorithms'],
  },
  {
    name: 'latex-local-docker',
    category: 'systems',
    meta: 'TeX · Docker · Oct 2026',
    description: {
      en: 'Containerized local LaTeX build system ensuring deterministic PDF compilation across any developer machine.',
      vi: 'Hệ thống biên dịch tài liệu học thuật LaTeX đóng gói trong Docker, đảm bảo xuất PDF đồng nhất trên mọi thiết bị.',
    },
    url: 'https://github.com/TiiAyyLuvBear/latex-local-docker',
    tags: ['Docker', 'LaTeX', 'DevOps'],
  },
  {
    name: 'KTPM — Software Engineering Web Exercise',
    category: 'fullstack',
    meta: 'JavaScript · Oct 2025',
    description: {
      en: 'Interactive software engineering web exercise deployed on GitHub Pages.',
      vi: 'Bài tập thực hành Kỹ thuật Phần mềm triển khai trực tiếp trên GitHub Pages.',
    },
    url: 'https://github.com/TiiAyyLuvBear/KTPM',
    liveUrl: 'https://tiiayyluvbear.github.io/KTPM/',
    tags: ['JavaScript', 'HTML/CSS', 'GitHub Pages'],
  },
];

export const CV_DATA = {
  education: [
    {
      school: {
        en: 'VNUHCM – University of Science (HCMUS)',
        vi: 'Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM (HCMUS)',
      },
      degree: {
        en: 'Bachelor of Science in Computer Science (Cohort K23)',
        vi: 'Cử nhân Khoa học Máy tính (Khóa K23)',
      },
      period: '2023 – 2027 (Expected)',
      location: 'Ho Chi Minh City, Vietnam',
      highlights: {
        en: [
          'Focus areas: Natural Language Processing (NLP), Speech Processing (TTS, ASR, Speaker Verification), Information Retrieval (RAG), and Software Engineering.',
          'Relevant Coursework: Text Mining & Information Retrieval, Generative AI, Machine Learning, Introduction to Software Engineering, Data Structures & Algorithms, Computer Networks.',
        ],
        vi: [
          'Hướng nghiên cứu & phát triển chính: Xử lý Ngôn ngữ Tự nhiên (NLP), Xử lý Tiếng nói (TTS, ASR, Speaker Verification), Truy hồi Thông tin (RAG) và Kỹ thuật Phần mềm.',
          'Các học phần tiêu biểu: Khai phá Văn bản (Text Mining), Generative AI, Học máy, Nhập môn Công nghệ Phần mềm, Cấu trúc Dữ liệu & Giải thuật, Mạng Máy tính.',
        ],
      },
    },
  ],
  skillGroups: [
    {
      title: { en: 'AI, NLP & Speech Processing', vi: 'AI, Xử lý Ngôn ngữ & Tiếng nói' },
      icon: 'Cpu',
      skills: [
        { name: 'RAG & Hybrid Retrieval (BM25, bge-m3, Rerankers)', level: 92 },
        { name: 'Speech Synthesis & Cloning (VieNeu-TTS, XTTSv2)', level: 90 },
        { name: 'ASR & Speaker Verification (PhoWhisper, ECAPA-TDNN)', level: 88 },
        { name: 'LLM Fine-Tuning (Unsloth, LoRA/QLoRA, Gemma-2, Qwen2.5)', level: 86 },
        { name: 'Evaluation Metrics (Recall@k, MRR, nDCG, F1)', level: 90 },
      ],
    },
    {
      title: { en: 'Programming Languages', vi: 'Ngôn ngữ Lập trình' },
      icon: 'Code2',
      skills: [
        { name: 'Python (PyTorch, Transformers, FastAPI)', level: 92 },
        { name: 'JavaScript / ES6+ (Node.js, React)', level: 85 },
        { name: 'C / C++ (Algorithms, Cryptography, ESP32)', level: 80 },
        { name: 'SQL & NoSQL Querying', level: 82 },
        { name: 'LaTeX (Academic Writing & Typesetting)', level: 88 },
      ],
    },
    {
      title: { en: 'Full-Stack, Databases & MLOps', vi: 'Full-Stack, Cơ sở dữ liệu & MLOps' },
      icon: 'Layers',
      skills: [
        { name: 'React, Vite & Tailwind CSS', level: 88 },
        { name: 'FastAPI, Express.js & RESTful APIs', level: 86 },
        { name: 'Qdrant (Vector DB), MongoDB & SQLite', level: 85 },
        { name: 'Docker, DVC (Data Version Control) & Git/GitHub', level: 84 },
        { name: 'Streamlit & Interactive AI Prototyping', level: 90 },
      ],
    },
  ],
  experience: [
    {
      role: {
        en: 'AI & NLP Student Researcher / Project Lead',
        vi: 'Nghiên cứu & Phát triển Dự án AI / NLP',
      },
      org: {
        en: 'Academic & Open-Source Projects @ HCMUS',
        vi: 'Các Dự án Học thuật & Mã nguồn mở tại ĐH KHTN (HCMUS)',
      },
      period: '2025 – Present',
      bullets: {
        en: [
          'Architected LAMAudiobook: a multi-agent ebook-to-Vietnamese-audiobook system combining chapter parsing, passage mood detection, and VieNeu-TTS 0.3B / XTTSv2 voice synthesis.',
          'Developed a grounded Vietnamese News RAG QA pipeline comparing BM25, dense BAAI/bge-m3 embeddings in Qdrant, and cross-encoder reranking with strict citation grounding.',
          'Engineered VoiceStudy Assistant: integrated ECAPA-TDNN speaker verification with PhoWhisper ASR and salted-hash voice passphrases to protect personal schedules and private notes.',
          'Fine-tuned Gemma-2 with Unsloth for Vietnamese/banking customer intent classification and built reproducible DVC sentiment pipelines.',
        ],
        vi: [
          'Thiết kế kiến trúc LAMAudiobook: hệ thống đa tác tử chuyển đổi ebook thành sách nói tiếng Việt, tích hợp phân tích cảm xúc đoạn văn và nhân bản giọng nói với VieNeu-TTS 0.3B & XTTSv2.',
          'Xây dựng hệ thống Hỏi-Đáp RAG trên tin tức tiếng Việt: kết hợp BM25, vector BAAI/bge-m3 trên Qdrant và bge-reranker, đánh giá định lượng qua Recall@k, MRR, nDCG.',
          'Phát triển VoiceStudy Assistant: trợ lý giọng nói tiếng Việt xác thực người nói bằng ECAPA-TDNN, nhận dạng tiếng nói PhoWhisper và bảo vệ ghi chú mật bằng mật khẩu thoại băm có muối.',
          'Tinh chỉnh mô hình Gemma-2 bằng Unsloth cho bài toán phân loại ý định ngân hàng và xây dựng pipeline phân tích cảm xúc quản lý phiên bản với DVC.',
        ],
      },
    },
    {
      role: {
        en: 'Full-Stack & IoT Developer',
        vi: 'Lập trình viên Full-Stack & Hệ thống IoT',
      },
      org: {
        en: 'Software Engineering & Embedded Systems Course Projects',
        vi: 'Đồ án Công nghệ Phần mềm & Hệ thống Nhúng',
      },
      period: '2025 – 2026',
      bullets: {
        en: [
          'Collaborated on 4Money (104 commits): a full-stack personal finance platform built with React, Tailwind CSS, Express, JWT authentication, and MongoDB.',
          'Built an ESP32 IoT Temperature & Humidity telemetry system (91 commits) streaming live sensor data to a web dashboard with automated Nodemailer alert notifications.',
        ],
        vi: [
          'Phát triển ứng dụng quản lý tài chính 4Money (104 commits) với React, Tailwind CSS, Express REST API, xác thực JWT và MongoDB.',
          'Xây dựng hệ thống IoT giám sát nhiệt độ & độ ẩm thời gian thực trên vi điều khiển ESP32 (91 commits), hiển thị biểu đồ trực tuyến và gửi cảnh báo tự động qua Nodemailer.',
        ],
      },
    },
  ],
};
