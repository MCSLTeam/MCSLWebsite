# 配置服务器

当您进入此页面后，会有以下3种方式供您选择：  

- 简易模式
- 进阶模式
- 导入

## 简易模式  

简易模式提供了几个最为关键的服务器参数，**都是必需的**。  
`Java`, `内存`, `服务器核心`, `服务器名称`。  

### Java设置  

切换到MCSLAPI下载源后，你可以在MCSL2的`下载`页下载Java。  
不同版本的Minecraft服务器可能会要求不同的Java版本：  
| Minecraft 版本 | Java 版本 |
|:-------------:|:---------:|
| `最早` ~ `1.16.5` | `Java 8` (推荐) |
| `1.17` ~ `1.17.1` | `Java 17` 或 `Java 18` (推荐) |
| `1.18` ~ `最新` | `Java 18` 或 `Java 20` |  

:::warning 警告
Minecraft `1.8` 及以前版本也可使用 `Java 7`，但不推荐。  
部分可使用 `Open J9` 的 Minecraft 版本仍不推荐，原因是兼容性不好，故极不推荐用于对稳定性要求高的 Minecraft 服务器。
:::

请务必选择与 Minecraft 版本对应的 Java 版本，否则可能导致服务器无法启动！  
:::tip 提示
可以使用 MCSL2 的自动查找 Java 功能。详见 [补充](#补充)
:::

### 内存设置  

:::tip 提示
简易模式仅提供了以 `M` (即`MiB`) 为单位的内存设置。
:::

最小、最大内存可以相等，但请注意**必须达到以下要求**:  
`最小内存 ≤ 最大内存`

### 服务器核心选择  

Minecraft 的服务器核心为以 `jar` 为扩展名的Java可执行文件。你可以通过 `选择核心` 来导入你的服务器核心，或者，如果你已经通过 MCSL2 提前下载了核心，你可以点击 `从下载的核心中导入`。
::: tip 提示
你可以通过 MCSL2 的 `下载` 功能下载服务器核心。
:::

### 服务器名称设置  

::: warning 警告
请勿使用与操作系统冲突的名称，如在 Windows 操作系统中，以下名称无法使用:
`aux`
`com1`
`com2`
`prn`
`con`
`lpt1`
`lpt2`
`nul`  
也不能使用系统中文件/文件夹无法使用的字符，如在 Windows 操作系统中，不能包含以下字符:
`/`
`:`
`*`
`?`
`"`
`<`
`>`
`|`
:::

当名称不符合规范的时候，程序将会提示。

## 进阶模式  

进阶模式在简易模式的基础上，可再设置JVM的参数，以及服务器输入输出流的编码设置。~~MCSL2在进阶模式中提供了一些便捷的优化参数可供使用~~。

<!-- markdownlint-disable MD033 -->
:::tip 建议
进阶模式我认为还是不够完整。如果有任何功能建议，欢迎在 [GitHub Discussions](https://www.github.com/MCSLTeam/MCSL2/discussions) 中提出。
<p align="right"><i>——LxHTT</i></p>
:::

## 导入服务器  

MCSL2 提供了多种导入服务器的方式/类型。  

### 导入 不含开服脚本的 完整的 服务器 压缩包  

- MCSL2 会首先检测压缩包 **内** 的根目录。  

 > 若 **只有一个** 文件夹，则可以判定服务器的存档在 **此文件夹** 中，所以会在 **此文件夹** 中继续寻找服务器，同时将 **此文件夹** 的名字作为 `服务器名称`。  
 >
 > 但如果服务器位于 压缩包**内** 的 根目录，服务器名称将被设置为 `压缩包名称`。  

- MCSL2 随后会解压压缩包到 `Servers/服务器名称` 的文件夹。  
- MCSL2 自动查找该文件夹中以 `.jar` 为扩展名的 Java 可执行文件，供用户选择正确的核心。  
- 再设置其他参数：`内存`，`Java`，`JVM参数 (可选)`，`输入输出流编码 (可选)`。  
- 确认无误后，点击保存。  

### 导入 含开服脚本的 完整的 服务器 压缩包  

- MCSL2会首先检测压缩包**内**的根目录。  

 > 若 **只有一个** 文件夹，则可以判定服务器的存档在 **此文件夹** 中，所以会在 **此文件夹** 中继续寻找服务器，同时将 **此文件夹** 的名字作为 `服务器名称`。  
 >
 > 但如果服务器位于 压缩包**内** 的 根目录，服务器名称将被设置为 `压缩包名称`。  

- MCSL2 随后会解压压缩包到 `Servers/服务器名称` 的文件夹。  
- MCSL2 会列出该文件夹中的文件供用户选择开服脚本。  
- MCSL2 自动识别脚本。
- 确认无误后，点击保存。  

### 导入 服务器 存档  

:::tip 提示
此处的定义即为`没有开服脚本`、`没有服务器核心`。
:::

- MCSL2 会首先检测压缩包**内**的根目录。  

 > 若 **只有一个** 文件夹，则可以判定服务器的存档在 **此文件夹** 中，所以会在 **此文件夹** 中继续寻找服务器，同时将 **此文件夹** 的名字作为 `服务器名称`。  
 >
 > 但如果服务器位于 压缩包**内** 的 根目录，服务器名称将被设置为 `压缩包名称`。  

- MCSL2 随后会解压压缩包到 `Servers/服务器名称` 的文件夹。  
- 再设置其他参数: `服务器核心`、`内存`，`Java`，`JVM参数 (可选)`，`输入输出流编码 (可选)`。  
- MCSL2 自动识别脚本。  
- 确认无误后，点击保存。  

### 导入 MCSL 1 的服务器  

- 选择MCSL1的运行目录 **（即 MCSL1 主程序所在文件夹）**
- 设置服务器名称。
- 确认无误后，点击保存。  

### 导入 MSL 的服务器  

- 选择MSL的运行目录 **（即 MSL1 主程序所在文件夹）**  
- 设置服务器名称。
- 确认无误后，点击导入，等待程序提示导入完成。  

### 导入 灵工艺我的世界「轻」开服器 的服务器  

- 选择灵工艺的运行目录 **（即灵工艺主程序所在文件夹）**  
- 设置服务器名称。
- 确认无误后，点击导入，等待程序提示导入完成。  

### 导入 MCSManager 8 的服务器  

:::info 提示
尽管 MCSM8 已停止更新，MCSL2 经决定仍对其制作导入选项。导入选项基于其 `8.9.0 Final Version` 制作。
:::

- 选择 MCSM8 的运行目录。
- 在 MCSL2 读取完所有其管理的服务器后，勾选你需要导入的服务器。  
- 确认无误后，点击导入，等待程序提示导入完成。  

### 导入 MCSManager 9 的服务器  

:::warning 提示
  MCSM9 的服务器配置文件与 MCSM8 的互不兼容，请务必选择正确的方式，以顺利完成导入。
:::

- 选择 MCSM9 的 **守护进程 (daemon)** 运行目录，**不是面板 (web)**!
- 在 MCSL2 读取完所有其管理的服务器后，勾选你需要导入的服务器。  
- 确认无误后，点击导入，等待程序提示导入完成。  

## 补充

MCSL2 针对以下功能，已进行了特殊优化：  

- Java 搜索。  
相对 MCSL1 来说，MCSL2 在力求准确度与完整度的基础上，由开发者 [Ares Connor](https://www.github.com/AresConnor) 与 [灰太狼](https://github.com/wyx55520) 共同开发了新的搜索算法，抛弃了旧版缓慢的单线程全盘搜索。经过大众测试，可在 **1~2 秒** 内找到系统中 **95%** 的 Java。  
由于使用模糊搜索，可能有部分 Java 无法被搜索到，此时请使用手动导入 Java。  
也欢迎在 GitHub 提出建议。
