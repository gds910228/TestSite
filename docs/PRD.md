# 产品需求文档 (PRD) - 个人品牌网站

| 版本 | 日期       | 作者 | 变更描述     |
| :--- | :--------- | :--- | :----------- |
| V1.0 | 2024-06-14 | AI PM | 初稿创建     |

---

## 1. 引言 (Introduction)

### 1.1 项目背景与目标

本项目旨在创建一个现代、多功能的个人品牌网站。核心目标如下：

*   **专业展示:** 系统地展示个人专业技能与项目经验，以吸引潜在的工作机会和商业合作。
*   **知识分享:** 通过博客文章分享专业见解，在技术社区和相关领域建立影响力。
*   **品牌塑造:** 塑造一个专业、可靠、亲切的个人品牌形象。

### 1.2 目标用户画像

1.  **潜在客户/招聘经理:** 关注专业能力、项目经验和成功案例。他们希望快速了解当事人是否能满足其商业或职位需求。
2.  **技术同行:** 对技术实现、问题解决方法和思想深度感兴趣。他们是技术交流和社区影响力的主要互动对象。
3.  **普通读者:** 可能被特定的、通俗易懂的知识性文章吸引，是扩大品牌影响力的潜在受众。

### 1.3 核心价值主张

通过一个精心设计的在线门户，全面展示个人综合能力——从项目实战能力到深度技术思考，再到个人价值观与特色，从而有效地在数字世界中建立和传播个人品牌。

## 2. 功能需求 (Functional Requirements)

### 2.1 功能列表

| 模块         | 功能点                         | 优先级 | 备注                               |
| :----------- | :----------------------------- | :----- | :--------------------------------- |
| **首页**     | Hero区域（简介+CTA）           | Must-have |                                    |
|              | 精选项目展示 (2个)             | Must-have | 标题、缩略图、简短描述             |
|              | 最新文章预览 (3篇)             | Must-have | 标题、摘要                         |
| **关于我页面** | 详细个人故事与理念             | Must-have | 亲切随和的基调                     |
|              | 技能清单（标注熟练度）         | Must-have | e.g., 精通, 熟悉                  |
|              | 工作经历时间线                 | Must-have |                                    |
|              | 个性化视觉元素                 | Must-have | 工作/生活照、草图等，代替证件照   |
| **项目作品集** | 项目列表页 (列表布局)          | Must-have |                                    |
|              | 项目详情页                     | Must-have |                                    |
|              | - 项目描述、职责、技术栈       | Must-have |                                    |
| **博客文章**   | 文章列表页 (列表布局)          | Must-have | 标题+摘要                          |
|              | 文章详情页                     | Must-have |                                    |
|              | - 作者卡片、日期、目录         | Must-have |                                    |
|              | - 代码块高亮                   | Must-have |                                    |
|              | 文章分类/标签                  | Must-have | 用于筛选和归类                     |
| **联系页面**   | 展示电子邮件地址               | Must-have |                                    |
| **后台管理**   | 使用Notion作为CMS              | Must-have | 管理项目、文章、关于我页面等内容   |

### 2.2 页面详细描述

#### 2.2.1 首页 (Homepage)
*   **布局顺序:** 1. Hero区域 -> 2. 精选项目 -> 3. 最新文章 -> 4. 联系引导。
*   **Hero区域:** 包含简短有力的自我介绍和至少一个行动号召（CTA）按钮（如"查看作品"）。
*   **精选项目:** 展示2个项目，卡片形式，包含项目标题、缩略图、简短描述。
*   **最新文章:** 展示3篇最新文章，列表形式，包含文章标题和摘要。

#### 2.2.2 关于我页面 (About Me)
*   **内容:** 重点阐述技术理念，并融入个人兴趣、价值观，基调亲切随和。
*   **模块:**
    *   技能清单：需标注熟练度（如：精通、熟悉）。
    *   工作经历：以时间线的形式展示。
    *   视觉：使用生活照、工作照或作品草图，避免使用正式证件照。

#### 2.2.3 项目/作品集页面 (Projects/Portfolio)
*   **列表页:** 采用列表布局，每个项目占据一行，清晰展示核心信息。
*   **详情页:** 点击列表项后进入。包含：
    *   详细的项目描述（背景、解决的问题）。
    *   本人承担的职责与角色。
    *   所使用的技术栈。
*   **筛选:** 无需提供分类或筛选功能。

#### 2.2.4 博客/文章页面 (Blog/Articles)
*   **列表页:** 采用列表布局，展示文章标题和摘要。
*   **详情页:**
    *   包含作者信息卡片、发布/更新日期、文章目录 (TOC)、代码高亮。
    *   包含评论区功能，允许用户评论和回复。
*   **分类/标签:** 提供该功能，允许用户按分类/标签筛选文章。

#### 2.2.5 联系页面 (Contact)
*   **内容:** 仅需清晰地展示用户的电子邮件地址。

## 3. 非功能性需求 (Non-Functional Requirements)

### 3.1 技术栈
*   **前端框架:** Next.js
*   **内容管理:** Notion

### 3.2 数据获取
*   **策略:** 网站内容（项目、文章等）需在用户每次访问页面时，从Notion实时拉取。实现方式为服务器端渲染 (SSR) 或具有短时缓存的增量静态再生 (ISR)。

### 3.3 性能需求
*   页面加载速度应在主流网络环境下保持流畅。

### 3.4 可用性需求
*   网站应为响应式设计，在桌面和移动设备上均有良好的浏览体验。
*   导航清晰，用户可以轻松在不同板块间跳转。

## 4. 范围与限制 (Scope & Constraints)

### 4.1 本期范围 (In Scope)
*   实现以上所有功能需求和页面。
*   完成与Notion API的对接，实现内容的动态拉取。
*   网站文本内容为英文。

### 4.2 暂不考虑范围 (Out of Scope)
*   多语言支持。
*   复杂的后台数据分析面板。

--- 