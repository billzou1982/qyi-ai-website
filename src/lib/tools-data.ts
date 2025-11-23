export type Tool = {
  name: string;
  name_cn?: string;
  description: string;
  description_cn?: string;
  url: string;
  icon?: string;
  tags?: string[];
  tags_cn?: string[];
  isNew?: boolean;
  isHot?: boolean;
};

export type Category = {
  id: string;
  name: string;
  name_cn?: string;
  description: string;
  description_cn?: string;
  tools: Tool[];
};

export const toolsData: Category[] = [
  {
    id: "general",
    name: "General LLMs",
    name_cn: "通用大模型",
    description: "Chat, write, summarize, search - all-in-one intelligent assistants.",
    description_cn: "聊天、写作、总结、搜索，一站式智能问答助手集合。",
    tools: [
      {
        name: "ChatGPT",
        description: "The flagship for general conversation and writing, suitable for almost any scenario.",
        description_cn: "通用对话与写作旗舰，几乎所有场景都能帮你快速起步。",
        url: "https://chat.openai.com",
        isHot: true,
        tags: ["Chat", "Writing"],
        tags_cn: ["对话", "写作"]
      },
      {
        name: "Claude",
        description: "Excels at long-context understanding and deep reasoning, great for writing and knowledge work.",
        description_cn: "长文理解与深度思考表现出色，适合写作与知识工作者。",
        url: "https://claude.ai",
        isNew: true,
        tags: ["Long Context", "Analysis"],
        tags_cn: ["长文", "分析"]
      },
      {
        name: "Gemini",
        description: "Google's multimodal model, supporting text, images, and code seamlessly.",
        description_cn: "谷歌多模态大模型，文本、图片、代码一体支持。",
        url: "https://gemini.google.com",
        tags: ["Multimodal", "Google"],
        tags_cn: ["多模态", "谷歌"]
      },
      {
        name: "DeepSeek",
        description: "Powerful open-source model with strong reasoning and coding capabilities.",
        description_cn: "国产开源强力大模型，推理和代码能力都很能打。",
        url: "https://www.deepseek.com",
        tags: ["Open Source", "Reasoning"],
        tags_cn: ["开源", "推理"]
      },
      {
        name: "LLaMA",
        description: "Meta's open-source model family, perfect for local and private deployment.",
        description_cn: "Meta 开源大模型家族，适合开发者本地和私有化部署。",
        url: "https://llama.meta.com",
        tags: ["Open Source", "Meta"],
        tags_cn: ["开源", "Meta"]
      },
      {
        name: "Qwen",
        description: "Tongyi Qianwen series, outstanding in Chinese understanding and application ecosystem.",
        description_cn: "通义千问系列模型，中文理解与应用生态表现突出。",
        url: "https://tongyi.aliyun.com",
        tags: ["Chinese", "Alibaba"],
        tags_cn: ["中文", "阿里"]
      },
      {
        name: "Perplexity",
        description: "Answer engine combining search and LLMs for powerful real-time information retrieval.",
        description_cn: "结合搜索和大模型的回答引擎，实时信息检索强大。",
        url: "https://www.perplexity.ai",
        tags: ["Search", "Q&A"],
        tags_cn: ["搜索", "问答"]
      },
      {
        name: "Grok",
        description: "Chat model with a bit of 'wit', great for real-time trends and social topics.",
        description_cn: "带一点“毒舌”的聊天模型，擅长实时热点和社交话题。",
        url: "https://grok.x.ai",
        tags: ["Social", "Real-time"],
        tags_cn: ["社交", "实时"]
      },
      {
        name: "Pi.ai",
        description: "Gentle AI companion, better suited for daily chat and light decision making.",
        description_cn: "温柔陪伴型 AI 伙伴，更适合日常陪聊与轻量决策。",
        url: "https://pi.ai",
        tags: ["Companion", "Chat"],
        tags_cn: ["陪伴", "聊天"]
      },
      {
        name: "Kimi",
        description: "Chinese assistant supporting ultra-long document reading, making papers and reports easy.",
        description_cn: "支持超长文档阅读的中文助手，看论文和报告不再痛苦。",
        url: "https://kimi.moonshot.cn",
        tags: ["Long Doc", "Chinese"],
        tags_cn: ["长文档", "中文"]
      },
    ],
  },
  {
    id: "writing",
    name: "Writing & Copywriting",
    name_cn: "写作 & 文案助手",
    description: "From viral headlines to long-form polishing, make every word more persuasive.",
    description_cn: "从爆款标题到长文润色，让每一段文字都更有说服力。",
    tools: [
      { name: "Jasper", description: "Copywriting assistant for marketing teams, great for ads, landing pages, and emails.", description_cn: "营销团队常用的文案助手，适合广告、落地页与邮件。", url: "https://www.jasper.ai", tags: ["Marketing", "Copy"], tags_cn: ["营销", "文案"] },
      { name: "WriteSonic", description: "Writing platform covering many templates, easy to use and comprehensive.", description_cn: "多场景模板覆盖的写作平台，上手简单功能全面。", url: "https://writesonic.com", tags: ["Templates", "Writing"], tags_cn: ["模板", "写作"] },
      { name: "Copy.ai", description: "Focuses on marketing copy and social media content, quickly generating creative variations.", description_cn: "专注营销文案与社媒内容，快速生成多版本创意。", url: "https://www.copy.ai", tags: ["Social Media", "Creative"], tags_cn: ["社媒", "创意"] },
      { name: "Rytr", description: "Lightweight writing assistant for daily short texts and utility apps.", description_cn: "轻量级写作助手，适合日常短文与工具型应用。", url: "https://rytr.me", tags: ["Lightweight", "Short Text"], tags_cn: ["轻量", "短文"] },
      { name: "HyperWrite", description: "Browser writing assistant that follows your input, auto-completing your thoughts.", description_cn: "浏览器中跟随输入的写作助手，自动补全你的想法。", url: "https://www.hyperwriteai.com", tags: ["Browser", "Autocomplete"], tags_cn: ["浏览器", "补全"] },
      { name: "Notion AI", description: "Writing and organization assistant integrated into Notion.", description_cn: "集成在 Notion 里的写作与整理助手，文档一体化。", url: "https://www.notion.so/product/ai", tags: ["Docs", "Notes"], tags_cn: ["文档", "笔记"] },
      { name: "WordTune", description: "Sentence-level polishing and rewriting tool for more natural English expression.", description_cn: "句子级润色与改写工具，让英语表达更自然。", url: "https://www.wordtune.com", tags: ["Polishing", "English"], tags_cn: ["润色", "英语"] },
      { name: "Anyword", description: "Copywriting platform optimized for conversion rates, supporting A/B testing ideas.", description_cn: "面向转化率优化的文案平台，支持 A/B 测试思路。", url: "https://anyword.com", tags: ["Conversion", "Marketing"], tags_cn: ["转化率", "营销"] },
      { name: "ShortlyAI", description: "Inspiration assistant for long-form creators to expand paragraphs and continue stories.", description_cn: "帮助长文创作者扩写段落、续写故事的灵感助手。", url: "https://www.shortlyai.com", tags: ["Long Form", "Story"], tags_cn: ["长文", "故事"] },
      { name: "DeepL Write", description: "Writing and polishing tool from DeepL, combining translation and rewriting.", description_cn: "DeepL 家的写作与润色工具，翻译和改写一体。", url: "https://www.deepl.com/write", tags: ["Polishing", "Translation"], tags_cn: ["润色", "翻译"] },
    ],
  },
  {
    id: "translation",
    name: "Translation & Language",
    name_cn: "翻译 & 语言",
    description: "Professional translation and grammar checking for natural expression in both English and Chinese.",
    description_cn: "专业级翻译与语法检查，让中英文表达都更自然流畅。",
    tools: [
      { name: "DeepL", description: "Recognized for high-quality machine translation, especially for European languages.", description_cn: "公认高质量的机器翻译，尤其擅长英德等多语互译。", url: "https://www.deepl.com", tags: ["Translation", "High Quality"], tags_cn: ["翻译", "高质量"] },
      { name: "Gemini Translate", description: "Translation experience based on Gemini, supporting context understanding and polishing.", description_cn: "基于 Gemini 的翻译体验，支持上下文理解与润色。", url: "https://translate.google.com", tags: ["Google", "Translation"], tags_cn: ["谷歌", "翻译"] },
      { name: "TranSmart", description: "Domestic translation platform for professional scenarios, better terminology support.", description_cn: "面向专业场景的国产翻译平台，术语支持更友好。", url: "https://transmart.qq.com", tags: ["Professional", "Domestic"], tags_cn: ["专业", "国产"] },
      { name: "LingvaNex", description: "Multi-platform translation tool covering web, desktop, and mobile.", description_cn: "支持多平台的翻译工具，涵盖网页、桌面与移动端。", url: "https://lingvanex.com", tags: ["Multi-platform", "Translation"], tags_cn: ["多平台", "翻译"] },
      { name: "GlotAI", description: "Lightweight multilingual translation assistant for quick paragraph processing.", description_cn: "轻量化多语言翻译助手，适合日常段落快速处理。", url: "https://glot.ai", tags: ["Lightweight", "Multilingual"], tags_cn: ["轻量", "多语言"] },
      { name: "Papago", description: "From Naver, especially friendly for Korean scenarios, great for JP/KR content.", description_cn: "Naver 出品，韩文场景尤其友好，适合日韩内容党。", url: "https://papago.naver.com", tags: ["Korean", "JP/KR"], tags_cn: ["韩文", "日韩"] },
      { name: "Youdao Translate", description: "NetEase Youdao translation tool, supporting dictionaries, examples, and multi-device sync.", description_cn: "网易有道系翻译工具，支持词典、例句和多端同步。", url: "https://fanyi.youdao.com", tags: ["Dictionary", "Multi-device"], tags_cn: ["词典", "多端"] },
      { name: "Grammarly", description: "Focuses on English grammar correction and writing suggestions, great for work emails.", description_cn: "主打英文语法纠错与写作建议，适合职场邮件与论文。", url: "https://www.grammarly.com", tags: ["Grammar", "Correction"], tags_cn: ["语法", "纠错"] },
      { name: "LanguageTool", description: "Multilingual spelling and grammar checker, supports browser extensions.", description_cn: "多语言拼写和语法检查工具，支持浏览器扩展。", url: "https://languagetool.org", tags: ["Spelling", "Checking"], tags_cn: ["拼写", "检查"] },
      { name: "YouGlish", description: "Shows English word pronunciation and context through real video examples.", description_cn: "通过真实视频示例展示英文单词发音与语境。", url: "https://youglish.com", tags: ["Pronunciation", "Context"], tags_cn: ["发音", "语境"] },
    ],
  },
  {
    id: "video",
    name: "Video Generation",
    name_cn: "视频生成神器",
    description: "From copy to final cut, streamline editing, face swapping, and vertical video creation.",
    description_cn: "从文案到成片，剪辑、换脸、竖屏剪刀手全流程提效。",
    tools: [
      { name: "Runway", description: "All-in-one platform from text to video, great for creative shorts.", description_cn: "从文本到视频的一站式创作平台，适合创意短片。", url: "https://runwayml.com", tags: ["Video", "Creative"], tags_cn: ["视频", "创意"] },
      { name: "Kling", description: "High-quality domestic video generation model, suitable for creative expression.", description_cn: "国产高质量视频生成模型，适合创意表达与剧本实验。", url: "https://kling.kuaishou.com", tags: ["Domestic", "Video"], tags_cn: ["国产", "视频"] },
      { name: "Dream Machine", description: "LLM-driven text-to-video tool supporting creative shot generation.", description_cn: "大模型驱动的文本转视频工具，支持创意镜头生成。", url: "https://lumalabs.ai/dream-machine", tags: ["Shots", "Generation"], tags_cn: ["镜头", "生成"] },
      { name: "Stable Video Diffusion", description: "Open-source video generation model for developers and researchers.", description_cn: "开源视频生成模型，适合开发者与研究人员调试。", url: "https://stability.ai/stable-video", tags: ["Open Source", "Video"], tags_cn: ["开源", "视频"] },
      { name: "Pika", description: "Lightweight video generation tool, excels at short video creativity and style transfer.", description_cn: "轻量化视频生成工具，擅长短视频创意和风格转换。", url: "https://pika.art", tags: ["Short Video", "Style"], tags_cn: ["短视频", "风格"] },
      { name: "HeyGen", description: "Digital human and talking head video generation platform.", description_cn: "数字人和口播视频生成平台，一键生成真人口播。", url: "https://www.heygen.com", tags: ["Digital Human", "Talking Head"], tags_cn: ["数字人", "口播"] },
      { name: "OpusClip", description: "Intelligently slices long videos into multiple vertical shorts.", description_cn: "长视频智能切分为多条竖屏短视频，适合剪辑创作者。", url: "https://www.opus.pro", tags: ["Slicing", "Short Video"], tags_cn: ["切片", "短视频"] },
      { name: "Descript", description: "Edit video by editing text, combining editing, dubbing, and subtitles.", description_cn: "通过文字编辑视频，集剪辑、配音和字幕于一身。", url: "https://www.descript.com", tags: ["Editing", "Dubbing"], tags_cn: ["剪辑", "配音"] },
      { name: "CapCut AI", description: "CapCut's AI capabilities, smart editing and one-click templates.", description_cn: "剪映的 AI 能力集合，智能剪辑和模板一键成片。", url: "https://www.capcut.com", tags: ["Editing", "Templates"], tags_cn: ["剪辑", "模板"] },
      { name: "2short.ai", description: "Automatically mines highlights from long videos and generates shorts.", description_cn: "自动从长视频中挖掘精彩片段并生成短视频。", url: "https://2short.ai", tags: ["Mining", "Short Video"], tags_cn: ["挖掘", "短视频"] },
    ],
  },
  {
    id: "image",
    name: "Image Generation / Design",
    name_cn: "图片生成 / 设计",
    description: "Illustrations, posters, logos, social media images - generate high-quality visuals in one click.",
    description_cn: "插画、海报、LOGO、社交配图，一键生成高质视觉。",
    tools: [
      { name: "Midjourney", description: "High-quality artistic style image generation, a tool for illustration and concept design.", description_cn: "高质量艺术风格图像生成，插画与概念设计利器。", url: "https://www.midjourney.com", isHot: true, tags: ["Art", "Illustration"], tags_cn: ["艺术", "插画"] },
      { name: "Ideogram", description: "Text-to-image tool excelling at Chinese/English typography and poster layout.", description_cn: "擅长中英文字体与海报排版的文生图工具。", url: "https://ideogram.ai", tags: ["Typography", "Poster"], tags_cn: ["字体", "海报"] },
      { name: "DALL·E", description: "OpenAI's image model, suitable for multi-style creative exploration.", description_cn: "OpenAI 推出的图像模型，适合多风格创意探索。", url: "https://openai.com/dall-e-3", tags: ["Creative", "Multi-style"], tags_cn: ["创意", "多风格"] },
      { name: "Krea", description: "Visual creation platform focusing on real-time AI painting and style exploration.", description_cn: "主打实时 AI 绘画与风格探索的视觉创作平台。", url: "https://www.krea.ai", tags: ["Real-time", "Painting"], tags_cn: ["实时", "绘画"] },
      { name: "Leonardo", description: "Multi-style image generation platform suitable for game and illustration scenarios.", description_cn: "适合游戏与插画场景的多风格图像生成平台。", url: "https://leonardo.ai", tags: ["Game", "Illustration"], tags_cn: ["游戏", "插画"] },
      { name: "Pollinations", description: "Free community platform supporting multi-style image generation.", description_cn: "支持多风格图像生成的免费社区型平台。", url: "https://pollinations.ai", tags: ["Free", "Community"], tags_cn: ["免费", "社区"] },
      { name: "Recraft", description: "AI design tool focusing on vector and brand visuals.", description_cn: "专注矢量与品牌视觉的 AI 设计工具。", url: "https://www.recraft.ai", tags: ["Vector", "Brand"], tags_cn: ["矢量", "品牌"] },
      { name: "Canva", description: "Online design platform integrating AI generation, suitable for beginners.", description_cn: "整合 AI 生成功能的在线设计平台，适合小白做图。", url: "https://www.canva.com", tags: ["Design", "Beginner"], tags_cn: ["设计", "小白"] },
      { name: "Clipdrop", description: "Visual toolbox integrating background removal, generation, upscaling, etc.", description_cn: "集抠图、生成、放大等功能于一体的视觉工具箱。", url: "https://clipdrop.co", tags: ["Toolbox", "Visual"], tags_cn: ["工具箱", "视觉"] },
      { name: "Magic Eraser", description: "Quickly remove unwanted elements from images, a one-click 'eraser'.", description_cn: "快速去除图片中多余元素，一键“橡皮擦”。", url: "https://magicstudio.com/magiceraser", tags: ["Remove", "Retouch"], tags_cn: ["去除", "修图"] },
    ],
  },
  {
    id: "edit",
    name: "Image Editing / ID Photos",
    name_cn: "图片编辑 / 证件照",
    description: "Remove backgrounds, watermarks, e-commerce images, and ID photos in bulk.",
    description_cn: "去背景、去水印、电商图、证件照批量搞定。",
    tools: [
      { name: "Remove.bg", description: "One-click background removal, essential for e-commerce and ID photos.", description_cn: "一键去除复杂背景，电商和证件照常备工具。", url: "https://www.remove.bg", tags: ["Remove BG", "E-commerce"], tags_cn: ["去背景", "电商"] },
      { name: "Cleanup.pictures", description: "Remove watermarks, people, and unwanted objects by painting over them.", description_cn: "用画笔涂抹即可去除水印、路人和多余物体。", url: "https://cleanup.pictures", tags: ["Remove Watermark", "Retouch"], tags_cn: ["去水印", "修图"] },
      { name: "Fotor", description: "Image editing platform supporting ID photo generation and beautification.", description_cn: "支持证件照生成与美化的图片编辑平台。", url: "https://www.fotor.com", tags: ["ID Photo", "Beauty"], tags_cn: ["证件照", "美化"] },
      { name: "SnapEdit", description: "Smartly erase watermarks, text, and clutter by uploading images.", description_cn: "上传图片即可智能擦除水印、文字和杂物。", url: "https://snapedit.app", tags: ["Erase", "Smart"], tags_cn: ["擦除", "智能"] },
      { name: "PhotoRoom", description: "Bulk background removal and product image generation for e-commerce sellers.", description_cn: "面向电商卖家的批量抠图与商品图生成工具。", url: "https://www.photoroom.com", tags: ["E-commerce", "Cutout"], tags_cn: ["电商", "抠图"] },
      { name: "Pixelcut", description: "Mobile-friendly e-commerce image and poster generation app.", description_cn: "手机端友好的电商图和海报生成应用。", url: "https://www.pixelcut.ai", tags: ["Mobile", "Poster"], tags_cn: ["手机", "海报"] },
      { name: "MyEdit Headshot", description: "AI beautification tool focusing on ID photos and professional headshots.", description_cn: "专注证件照和职业头像的 AI 美化工具。", url: "https://myedit.online", tags: ["Headshot", "Professional"], tags_cn: ["头像", "职业"] },
      { name: "BackgroundCut", description: "Bulk background removal and smart cutout, suitable for e-commerce workflows.", description_cn: "批量去背景和智能抠图，适合电商工作流。", url: "https://backgroundcut.co", tags: ["Bulk", "Cutout"], tags_cn: ["批量", "抠图"] },
      { name: "FaceSwap", description: "Face swapping and outfit changing, suitable for creativity and material production.", description_cn: "人脸替换与换装玩法，适合创意和素材制作。", url: "https://faceswap.akool.com", tags: ["Face Swap", "Creative"], tags_cn: ["换脸", "创意"] },
      { name: "Remini", description: "AI tool for restoring old photo quality and enhancing portraits.", description_cn: "老照片画质修复和人像增强的 AI 工具。", url: "https://remini.ai", tags: ["Restore", "Enhance"], tags_cn: ["修复", "增强"] },
    ],
  },
  {
    id: "docs",
    name: "Docs / PPT / PDF",
    name_cn: "文档 / PPT / PDF",
    description: "From mind maps to presentations, AI helps you quickly build frameworks and fill details.",
    description_cn: "从思维导图到演示文稿，AI 帮你快速搭框架、补细节。",
    tools: [
      { name: "GitMind", description: "Online mind map and flowchart tool supporting collaboration and export.", description_cn: "在线思维导图与流程图工具，支持协作与导出。", url: "https://gitmind.com", tags: ["Mind Map", "Collab"], tags_cn: ["思维导图", "协作"] },
      { name: "Gamma", description: "Generate immersive web-style presentations from outlines automatically.", description_cn: "输入大纲自动生成沉浸式网页式演示文稿。", url: "https://gamma.app", isHot: true, tags: ["PPT", "Presentation"], tags_cn: ["PPT", "演示"] },
      { name: "Tome", description: "AI slide generation tool focusing on visual storytelling.", description_cn: "主打视觉感的 AI 幻灯片生成工具，适合讲故事。", url: "https://tome.app", tags: ["Slides", "Story"], tags_cn: ["幻灯片", "故事"] },
      { name: "MindShow", description: "One-click PPT generation platform based on mind map structures.", description_cn: "基于思维导图结构的一键 PPT 生成平台。", url: "https://www.mindshow.fun", tags: ["PPT", "Mind Map"], tags_cn: ["PPT", "思维导图"] },
      { name: "ChatPDF", description: "Upload PDF to chat and ask questions, suitable for reports and papers.", description_cn: "上传 PDF 即可对话问答，适合同事报告与论文。", url: "https://www.chatpdf.com", tags: ["PDF", "Q&A"], tags_cn: ["PDF", "问答"] },
      { name: "PDF.ai", description: "Extract key information from PDFs and perform structured Q&A.", description_cn: "从 PDF 中抽取关键信息并做结构化问答。", url: "https://pdf.ai", tags: ["Extract", "Structured"], tags_cn: ["抽取", "结构化"] },
      { name: "ElevenLabs", description: "High-quality multilingual TTS voice synthesis, suitable for dubbing and narration.", description_cn: "高品质多语种 TTS 语音合成，适合配音与旁白。", url: "https://elevenlabs.io", tags: ["Voice", "Dubbing"], tags_cn: ["语音", "配音"] },
      { name: "Voiceflow", description: "Visual multimodal conversation and workflow orchestration platform.", description_cn: "可视化多模态对话与工作流编排平台。", url: "https://www.voiceflow.com", tags: ["Conversation", "Workflow"], tags_cn: ["对话", "工作流"] },
      { name: "Readwise", description: "Centralize reading highlights and notes, and use AI for review and summary.", description_cn: "集中管理阅读高亮和笔记，并用 AI 做回顾与总结。", url: "https://readwise.io", tags: ["Notes", "Summary"], tags_cn: ["笔记", "总结"] },
      { name: "Sider AI", description: "Browser sidebar assistant providing summaries and Q&A for web content.", description_cn: "浏览器侧边栏助手，为网页内容提供总结与问答。", url: "https://sider.ai", tags: ["Browser", "Assistant"], tags_cn: ["浏览器", "助手"] },
    ],
  },
  {
    id: "career",
    name: "Career / Resume / Interview",
    name_cn: "职场 / 简历 / 面试",
    description: "From resume optimization to interview simulation, accelerate every step of your career upgrade.",
    description_cn: "从简历优化到面试模拟，为每一步职业升级加速。",
    tools: [
      { name: "Resume.io", description: "Online resume generator with rich templates and multi-language support.", description_cn: "模板丰富的在线简历生成器，多语言支持。", url: "https://resume.io", tags: ["Resume", "Templates"], tags_cn: ["简历", "模板"] },
      { name: "KickResume", description: "All-in-one career document assistant from resume to cover letter.", description_cn: "从简历到求职信的一体化职场文书助手。", url: "https://www.kickresume.com", tags: ["Cover Letter", "Docs"], tags_cn: ["求职信", "文书"] },
      { name: "Rezi", description: "Resume generation and scoring platform optimized for ATS.", description_cn: "针对 ATS 优化的简历生成与评分平台。", url: "https://www.rezi.ai", tags: ["ATS", "Scoring"], tags_cn: ["ATS", "评分"] },
      { name: "Teal", description: "Job search dashboard for centralized management of applications and resume versions.", description_cn: "集中管理职位投递与简历版本的求职仪表盘。", url: "https://www.tealhq.com", tags: ["Job Search", "Management"], tags_cn: ["求职", "管理"] },
      { name: "Vmock", description: "Resume scoring and career advice platform for university students.", description_cn: "面向大学生的简历评分和职业发展建议平台。", url: "https://www.vmock.com", tags: ["Students", "Advice"], tags_cn: ["大学生", "建议"] },
      { name: "Yoodli", description: "AI analyzes your speech and interview performance to give improvement suggestions.", description_cn: "通过 AI 分析你的演讲与面试表现，给出改进建议。", url: "https://yoodli.ai", tags: ["Speech", "Interview"], tags_cn: ["演讲", "面试"] },
      { name: "HireEZ", description: "Tool helping HR find candidates and automate recruitment processes.", description_cn: "帮助 HR 寻找候选人并自动化招聘流程的工具。", url: "https://hireez.com", tags: ["Recruitment", "HR"], tags_cn: ["招聘", "HR"] },
      { name: "Indeed AI", description: "Smart matching and resume optimization capabilities within the Indeed platform.", description_cn: "Indeed 平台内的智能匹配和简历优化能力集合。", url: "https://www.indeed.com", tags: ["Matching", "Optimization"], tags_cn: ["匹配", "优化"] },
      { name: "Jobscan", description: "Compares resume with JD and gives ATS match score suggestions.", description_cn: "对比简历与 JD，给出 ATS 匹配度建议。", url: "https://www.jobscan.co", tags: ["Comparison", "Match Score"], tags_cn: ["对比", "匹配度"] },
      { name: "LoopCV", description: "Job search bot for automated bulk resume submission.", description_cn: "自动化批量投递简历的求职机器人。", url: "https://loopcv.pro", tags: ["Submission", "Automation"], tags_cn: ["投递", "自动化"] },
    ],
  },
  {
    id: "learning",
    name: "Learning / English",
    name_cn: "学习 / 英语",
    description: "Speaking, vocabulary, papers, academic search - all learning power in one page.",
    description_cn: "口语、单词、论文、学术搜索，一页打包学习力。",
    tools: [
      { name: "ELSA Speak", description: "Train English pronunciation and intonation via speech recognition.", description_cn: "通过语音识别训练英语口语发音与语调。", url: "https://elsaspeak.com", tags: ["Speaking", "Pronunciation"], tags_cn: ["口语", "发音"] },
      { name: "TalkPal", description: "Practice conversation with AI tutor to improve fluency.", description_cn: "与 AI 外教对话练习，提升口语流利度。", url: "https://talkpal.ai", tags: ["Tutor", "Practice"], tags_cn: ["外教", "练习"] },
      { name: "LingQ", description: "Acquire language through massive reading and listening content.", description_cn: "通过输入海量阅读和听力内容来习得语言。", url: "https://www.lingq.com", tags: ["Reading", "Listening"], tags_cn: ["阅读", "听力"] },
      { name: "Duolingo Max", description: "Premium AI version of Duolingo, providing explanations and roleplay.", description_cn: "多邻国的高级 AI 版，提供解释与对话练习。", url: "https://www.duolingo.com", tags: ["Explanation", "Practice"], tags_cn: ["解释", "练习"] },
      { name: "Cognito", description: "Efficiently memorize knowledge points using spaced repetition and flashcards.", description_cn: "用间隔重复和卡片系统帮你高效记忆知识点。", url: "https://www.cognito.com", tags: ["Memory", "Flashcards"], tags_cn: ["记忆", "卡片"] },
      { name: "Quizlet AI", description: "Automatically generate flashcards from textbooks and consolidate memory with quizzes.", description_cn: "自动从教材生成学习卡片，并用测验巩固记忆。", url: "https://quizlet.com", tags: ["Quiz", "Consolidation"], tags_cn: ["测验", "巩固"] },
      { name: "ExplainPaper", description: "Upload a paper and get paragraph-by-paragraph explanations of key points.", description_cn: "上传论文后为你逐段解释重点和难点。", url: "https://www.explainpaper.com", tags: ["Paper", "Explanation"], tags_cn: ["论文", "解释"] },
      { name: "ScholarAI", description: "AI learning assistant for finding and organizing academic papers.", description_cn: "辅助查找与整理学术论文的 AI 学习助手。", url: "https://scholarai.io", tags: ["Academic", "Search"], tags_cn: ["学术", "查找"] },
      { name: "SciSpace", description: "Provide explanations, visualizations, and citation management for scientific papers.", description_cn: "为科学论文提供解释、可视化和引用管理。", url: "https://typeset.io", tags: ["Science", "Citation"], tags_cn: ["科学", "引用"] },
      { name: "Khanmigo", description: "AI learning companion from Khan Academy, covering multi-subject knowledge.", description_cn: "可汗学院推出的 AI 学习伴侣，覆盖多学科知识。", url: "https://www.khanacademy.org/khan-labs", tags: ["Learning", "Multi-subject"], tags_cn: ["学习", "多学科"] },
    ],
  },
  {
    id: "coding",
    name: "Coding / Web / Automation",
    name_cn: "代码 / 网站 / 自动化",
    description: "From coding to website building to automation workflows, full-stack efficiency.",
    description_cn: "从写代码到搭网站，再到自动化工作流，全栈提效。",
    tools: [
      { name: "Cursor", description: "AI editor for programmers, excellent for coding and refactoring.", description_cn: "面向程序员的 AI 编辑器，写代码和重构体验极佳。", url: "https://cursor.sh", isHot: true, tags: ["Editor", "Refactoring"], tags_cn: ["编辑器", "重构"] },
      { name: "Replit AI", description: "AI assistant in online IDE, suitable for learning and quick prototyping.", description_cn: "在线 IDE 中的 AI 助手，适合学习和快速原型。", url: "https://replit.com", tags: ["IDE", "Prototype"], tags_cn: ["IDE", "原型"] },
      { name: "GitHub Copilot", description: "Real-time code completion and function suggestions in major editors.", description_cn: "在主流编辑器中实时补全代码片段和函数。", url: "https://github.com/features/copilot", tags: ["Completion", "Function"], tags_cn: ["补全", "函数"] },
      { name: "Windsurf", description: "Modern IDE integrating multiple models, suitable for deep AI programming workflows.", description_cn: "整合多模型的现代 IDE，适合深度 AI 编程工作流。", url: "https://codeium.com/windsurf", tags: ["IDE", "Deep"], tags_cn: ["IDE", "深度"] },
      { name: "Webflow AI", description: "Visual website builder using AI to generate structure and copy.", description_cn: "可视化搭建网站的同时使用 AI 生成结构和文案。", url: "https://webflow.com", tags: ["Website", "Visual"], tags_cn: ["建站", "可视化"] },
      { name: "Framer AI", description: "Generate high-fidelity web pages from prompts, then fine-tune layout.", description_cn: "通过提示词生成高保真网页，再细调布局与组件。", url: "https://www.framer.com", tags: ["Web Page", "High-fidelity"], tags_cn: ["网页", "高保真"] },
      { name: "Dora", description: "Visual website builder focusing on 3D and animation, lightweight interface.", description_cn: "主打 3D 和动效的可视化建站工具，界面轻盈。", url: "https://www.dora.run", tags: ["3D", "Animation"], tags_cn: ["3D", "动效"] },
      { name: "Make.com", description: "Visual node-based automation platform integrating various online services.", description_cn: "可视化连线式自动化平台，整合各种在线服务。", url: "https://www.make.com", tags: ["Automation", "Integration"], tags_cn: ["自动化", "整合"] },
      { name: "Zapier AI", description: "Connect common SaaS into automated workflows via Trigger-Action.", description_cn: "通过 Trigger-Action 把常见 SaaS 串成自动化流程。", url: "https://zapier.com", tags: ["SaaS", "Workflow"], tags_cn: ["SaaS", "流程"] },
      { name: "Langflow", description: "Open-source tool for visually building LLM workflows and agent systems.", description_cn: "可视化搭建 LLM 工作流与代理系统的开源工具。", url: "https://github.com/logspace-ai/langflow", tags: ["LLM", "Open Source"], tags_cn: ["LLM", "开源"] },
    ],
  },
];
