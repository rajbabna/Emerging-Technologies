import type { Competency, CompetencyCode } from "./types";

export const competencies: Competency[] = [
  {
    code: "C25",
    slug: "c25",
    title: "Computer Architecture and Operating Systems",
    shortTitle: "Architecture & OS",
    credits: 2,
    theoryHours: 15,
    practicalHours: 5,
    description:
      "How computer technology has evolved, what a computer system is made of, and the operating systems that power emerging devices.",
    quizTitle: "C25 Quiz — Architecture & OS",
    lessons: [
      {
        slug: "trends-in-computer-technology",
        order: 1,
        minutes: 45,
        kind: "lesson",
        title: "Trends in computer technology",
        summary:
          "Progress from mainframes to edge devices, and how emerging technology reshapes architecture.",
        content: `## Why trends matter

Computer architecture is not static. Each generation changes the balance between compute, storage, and communication, and those changes ripple into how software is written and where it runs.

## The broad progression

- **Mainframes** centralised compute in a few large machines.
- **Personal computers** moved compute to the desktop.
- **Mobile and embedded systems** pushed compute into everyday objects.
- **Cloud and edge** split workloads between data centres and the devices themselves.

## Impact on architecture

Emerging technologies change architecture in three consistent ways:

1. **Heterogeneous compute** — CPUs now sit beside GPUs, NPUs, and dedicated accelerators.
2. **Power as a first-class constraint** — mobile and IoT devices trade performance for battery life.
3. **Distribution** — processing moves toward the edge to reduce latency and bandwidth.

## Check your understanding

- Name one architectural change driven by mobile computing.
- Explain why edge processing suits IoT better than always sending raw data to the cloud.
`,
      },
      {
        slug: "computer-system-components",
        order: 2,
        minutes: 45,
        kind: "lesson",
        title: "Computer system components",
        summary:
          "The parts of a computer system and how they work together, from CPU to input and output.",
        content: `## The core parts

A computer system combines hardware and software to process data.

| Component | Role |
| --- | --- |
| CPU | Executes instructions |
| Memory (RAM) | Holds active data and programs |
| Storage | Keeps data persistently (SSD, HDD, flash) |
| Input devices | Bring data in (sensors, keyboard, camera) |
| Output devices | Present results (display, actuator, speaker) |
| Bus / interconnect | Moves data between components |

## The stored-program model

Instructions and data share memory. The CPU repeatedly fetches an instruction, decodes it, executes it, and writes results back. This fetch–decode–execute cycle is the foundation of almost every general-purpose computer.

## Embedded variation

An IoT node carries the same ideas at a much smaller scale: a microcontroller, a few kilobytes of memory, flash storage, and sensors instead of keyboards. The trade-off is fixed function and low power rather than general-purpose performance.

## Check your understanding

- Explain the difference between memory and storage.
- Why do embedded systems use less RAM than desktop computers?
`,
      },
      {
        slug: "operating-system-fundamentals",
        order: 3,
        minutes: 60,
        kind: "lesson",
        title: "Operating system fundamentals",
        summary:
          "What an OS does, how it manages resources, and why device constraints change the design.",
        content: `## What an operating system does

An operating system (OS) manages hardware and provides services to programs. Its core jobs are:

- **Process management** — schedule work and share the CPU.
- **Memory management** — allocate RAM and isolate processes.
- **Storage and file systems** — organise persistent data.
- **Device drivers** — talk to hardware.
- **Security and access control** — decide who can do what.

## Types of OS

- **General-purpose** (Windows, Linux, macOS) — broad hardware, many applications.
- **Real-time** (RTOS) — guarantees response within a deadline.
- **Embedded / IoT** — small footprint, low power, often single-purpose.

## Why emerging devices need different OSes

An IoT sensor may have 64 KB of RAM and must run for years on a battery. A desktop OS assumes gigabytes of memory and a constant power supply. Emerging OSes therefore strip away features, reduce the kernel, and prioritise predictability.

## Check your understanding

- List three core responsibilities of an OS.
- When is a real-time OS required instead of a general-purpose OS?
`,
      },
      {
        slug: "emerging-os-landscape",
        order: 4,
        minutes: 90,
        kind: "lesson",
        title: "Emerging OS landscape",
        summary:
          "Compare ten operating systems used across sensors, gateways, wearables, and routers.",
        content: `## The ten OSes

| OS | Typical target | Key characteristic |
| --- | --- | --- |
| TinyOS | Wireless sensor networks | Component-based, event-driven, very small footprint |
| Contiki | IoT sensor nodes | Open source, protothreads, 6LoWPAN |
| RIOT | IoT devices | Real-time, multi-threading, low memory |
| Ubuntu Core | Edge devices and gateways | Snap-based, transactional updates |
| Fuchsia OS | Google devices | Microkernel (Zircon), capability-based |
| Windows 10 IoT | Industrial and edge Windows devices | Windows ecosystem and device management |
| Tizen | Wearables, TVs, appliances | Linux-based, web and native apps |
| Android Things | Embedded Android devices | Android APIs on IoT hardware (legacy) |
| OpenWrt | Routers and gateways | Linux router firmware with a package manager |
| Mbed OS | ARM Cortex-M devices | Arm IoT OS with connectivity stacks |

## How to choose

Start with the constraint that matters most:

1. **Power and memory** — TinyOS, Contiki, RIOT, Mbed OS.
2. **Gateway or edge compute** — Ubuntu Core, OpenWrt, Windows 10 IoT.
3. **Consumer device ecosystem** — Tizen, Fuchsia, Android Things.

## Check your understanding

- Which OS would you choose for a battery-powered sensor? Why?
- What makes OpenWrt a natural fit for a gateway?
`,
      },
      {
        slug: "lab-windows-configuration",
        order: 5,
        minutes: 120,
        kind: "lab",
        title: "Lab: Windows configuration and management",
        summary:
          "Practise user accounts, permissions, networking, and system management on Windows.",
        content: `## Objective

Configure and manage a Windows system, then record evidence of each change.

## Steps

1. Create a standard user account and a local administrator account.
2. Set a strong password policy and enable account lockout.
3. Configure a static IPv4 address, gateway, and DNS server.
4. Share a folder and set NTFS permissions for the standard user.
5. Use Task Manager and Event Viewer to inspect system activity.
6. Capture a screenshot of each completed step.

## Evidence

- Screenshots of account, network, and permission settings.
- A short note explaining why each permission level was chosen.

## Marking guide

| Criterion | Marks |
| --- | --- |
| Accounts configured correctly | 4 |
| Network settings correct | 3 |
| Permissions applied and justified | 3 |
`,
      },
    ],
  },
  {
    code: "C26",
    slug: "c26",
    title: "Fundamentals of Cloud Computing",
    shortTitle: "Cloud Computing",
    credits: 4,
    theoryHours: 30,
    practicalHours: 10,
    description:
      "Virtualization, cloud and fog models, platforms, the data pipeline, big data, and cloud security.",
    quizTitle: "C26 Quiz — Cloud Computing",
    lessons: [
      {
        slug: "virtualization",
        order: 1,
        minutes: 60,
        kind: "lesson",
        title: "Virtualization",
        summary:
          "Define virtualization and see how it underpins cloud computing.",
        content: `## Definition

Virtualization creates a software-based version of a physical resource — a server, storage, or network — so multiple isolated systems can share one physical machine.

## Why it matters

- **Utilisation** — one server runs many workloads instead of sitting idle.
- **Isolation** — a failure or attack in one VM does not automatically affect others.
- **Flexibility** — VMs can be cloned, moved, snapshotted, and resized.

## A hypervisor

A hypervisor manages virtual machines:

- **Type 1 (bare metal)** — runs directly on hardware (e.g. ESXi, Hyper-V).
- **Type 2 (hosted)** — runs on top of a desktop OS (e.g. VirtualBox).

## Check your understanding

- Define virtualization in one sentence.
- Explain one security benefit of isolating workloads in VMs.
`,
      },
      {
        slug: "server-deployment",
        order: 2,
        minutes: 60,
        kind: "lesson",
        title: "Server deployment and client-side virtualization",
        summary:
          "How servers are deployed, and the difference between server and client-side virtualization.",
        content: `## How servers are deployed

1. **Physical deployment** — install an OS directly on dedicated hardware.
2. **Virtualized deployment** — run several VMs on one physical host.
3. **Cloud deployment** — rent virtual servers from a provider and scale on demand.

## Server vs client-side virtualization

| Aspect | Server virtualization | Client-side virtualization |
| --- | --- | --- |
| Host | Data-centre hardware | Desktop or laptop |
| Goal | Consolidate workloads | Run another OS or test software |
| Scale | Many VMs per host | Usually one or a few |
| Example | Hyper-V, ESXi | VirtualBox, Windows Sandbox |

## Check your understanding

- Compare physical and virtualized server deployment.
- Give one classroom use case for client-side virtualization.
`,
      },
      {
        slug: "cloud-vs-fog",
        order: 3,
        minutes: 60,
        kind: "lesson",
        title: "Cloud computing and the fog model",
        summary:
          "Cloud service models, deployment models, and where fog fits.",
        content: `## Cloud service models

- **IaaS** — infrastructure: virtual machines, storage, networking.
- **PaaS** — a managed platform for deploying applications.
- **SaaS** — finished software delivered over the internet.

## Deployment models

- **Public** — shared provider infrastructure.
- **Private** — dedicated to one organisation.
- **Hybrid** — a mix of both.

## Fog computing

Fog moves some processing closer to the devices, between the edge and the cloud. This reduces latency, limits bandwidth use, and keeps sensitive data local when needed. The cloud remains the place for long-term storage and heavy analytics.

## Check your understanding

- Which service model would you choose to avoid managing an OS?
- Give two reasons to process data at the fog layer.
`,
      },
      {
        slug: "cloud-platforms",
        order: 4,
        minutes: 60,
        kind: "lesson",
        title: "Cloud platforms and connections",
        summary:
          "Major platforms and how devices connect to them.",
        content: `## Major platforms

- **AWS** — broad infrastructure and IoT services.
- **Microsoft Azure** — strong enterprise and Windows integration.
- **Google Cloud** — data and machine-learning strengths.
- **IoT-specific platforms** — device registries, dashboards, and rule engines.

## Connecting a device

A typical connection sequence:

1. Device connects to the network (WiFi, Ethernet, cellular).
2. Device authenticates with the platform.
3. Device registers and receives credentials.
4. Telemetry is published to a topic or endpoint.
5. The platform stores, visualises, or triggers rules.

## Check your understanding

- Name two cloud platforms and one strength of each.
- List the steps a device follows to connect to a cloud platform.
`,
      },
      {
        slug: "data-pipeline",
        order: 5,
        minutes: 90,
        kind: "lesson",
        title: "Data pipeline: acquisition to mining",
        summary:
          "Acquire, cleanse, transform, and mine data so it becomes useful.",
        content: `## The four stages

| Stage | What happens |
| --- | --- |
| Acquisition | Collect raw data from sensors, logs, or APIs |
| Cleansing | Remove duplicates and fix missing or invalid values |
| Transformation | Normalise units, derive fields, aggregate |
| Mining | Find patterns, thresholds, and relationships |

## Why order matters

Dirty data produces misleading results. Cleansing before transformation prevents unit errors from spreading, and transformation before mining makes patterns comparable.

## Example

Raw temperature readings might arrive as strings with missing values. Cleansing converts them to numbers and drops gaps; transformation converts Fahrenheit to Celsius; mining finds periods above a threshold.

## Check your understanding

- Explain the difference between cleansing and transformation.
- What could go wrong if you mine before cleansing?
`,
      },
      {
        slug: "big-data-security",
        order: 6,
        minutes: 90,
        kind: "lesson",
        title: "Big data and cloud security",
        summary:
          "Data in motion vs at rest, data growth, and securing IoT cloud services.",
        content: `## Data in motion and at rest

- **Data in motion** — travelling across a network, e.g. sensor telemetry being published.
- **Data at rest** — stored on disk or in a database.

Both need protection, but for different reasons: motion needs encryption in transit, rest needs encryption and access control.

## Data growth

Data grows in volume, velocity, and variety. IoT adds a constant stream of small readings, which stresses storage and processing unless data is filtered or aggregated.

## Securing IoT cloud services

- Use strong, unique device credentials.
- Encrypt with TLS for all traffic.
- Apply least-privilege access rules.
- Rotate keys and revoke compromised devices.
- Restrict registration so unauthorised devices are rejected.

## Check your understanding

- Classify a live sensor feed as data in motion or at rest.
- List three controls that secure an IoT cloud service.
`,
      },
      {
        slug: "lab-secure-iot-cloud",
        order: 7,
        minutes: 150,
        kind: "lab",
        title: "Lab: Secure IoT cloud in Packet Tracer",
        summary:
          "Register devices securely with the Packet Tracer IoT server and prove unauthorised devices are rejected.",
        content: `## Objective

Connect simulated IoT devices to the IoT server using secure registration, then test that an unauthorised device is rejected.

## Steps

1. Build a small topology: gateway, switch, IoT server, and at least two devices.
2. Configure the IoT server with a strong administrative password.
3. Enable secure registration and create device credentials.
4. Register the authorised devices and confirm they appear in the dashboard.
5. Attempt to register an unconfigured device and record the failure.
6. Capture screenshots of successful and failed registration.

## Evidence

- Topology screenshot.
- Dashboard showing authorised devices online.
- Screenshot of the rejected device.

## Marking guide

| Criterion | Marks |
| --- | --- |
| Topology and addressing correct | 3 |
| Secure registration configured | 4 |
| Unauthorised device rejected | 3 |
`,
      },
    ],
  },
  {
    code: "C27",
    slug: "c27",
    title: "Internet of Things and Fundamentals of AI",
    shortTitle: "IoT & AI",
    credits: 7,
    theoryHours: 60,
    practicalHours: 10,
    description:
      "IoT building blocks, connectivity, privacy and security, then AI, machine learning, deep learning, and expert systems.",
    quizTitle: "C27 Quiz — IoT & AI",
    lessons: [
      {
        slug: "iot-fundamentals",
        order: 1,
        minutes: 60,
        kind: "lesson",
        title: "IoT fundamentals and building blocks",
        summary:
          "Why IoT matters, and the controlled system, sensors, and actuators that make it work.",
        content: `## What IoT is

The Internet of Things connects physical objects to networks so they can sense, communicate, and act. Its value is remote visibility and automation: knowing what is happening and responding without a person present.

## The three building blocks

1. **Controlled system** — the physical thing being monitored or operated, such as a room or a door.
2. **Sensors** — measure conditions (temperature, light, motion, contact).
3. **Actuators** — change the physical world (relay, motor, light, fan).

## A feedback loop

Sensors measure the controlled system, a controller compares readings with a threshold, and actuators respond. This sense–decide–act loop is the core of every IoT system.

## Check your understanding

- Give one real-world example of a controlled system.
- Explain the difference between a sensor and an actuator.
`,
      },
      {
        slug: "raspberry-pi",
        order: 2,
        minutes: 45,
        kind: "lesson",
        title: "Raspberry Pi in IoT",
        summary:
          "When to use a Raspberry Pi as a gateway or edge controller.",
        content: `## What a Raspberry Pi offers

A Raspberry Pi is a small, low-cost computer running a full Linux OS. It has USB, Ethernet, WiFi, and GPIO pins for connecting sensors and actuators.

## Where it fits

- **Gateway** — collects data from simpler devices and forwards it to the cloud.
- **Edge controller** — runs logic locally when latency or connectivity matters.
- **Prototyping** — quick to build and debug compared with a microcontroller.

## Raspberry Pi vs microcontroller

| Aspect | Raspberry Pi | Microcontroller (e.g. ESP32) |
| --- | --- | --- |
| OS | Full Linux | Bare metal or RTOS |
| Power use | Higher | Very low |
| Best for | Gateways, edge compute | Battery-powered sensors |

## Check your understanding

- Give one reason to use a Raspberry Pi instead of a microcontroller.
- Give one reason to choose a microcontroller instead.
`,
      },
      {
        slug: "osi-vs-tcpip",
        order: 3,
        minutes: 60,
        kind: "lesson",
        title: "OSI and TCP/IP models",
        summary:
          "The two communication models and how they map to each other.",
        content: `## OSI model (7 layers)

| Layer | Purpose |
| --- | --- |
| Application | User-facing protocols |
| Presentation | Encoding and encryption |
| Session | Connection management |
| Transport | End-to-end delivery |
| Network | Addressing and routing |
| Data link | Local frame delivery |
| Physical | Bits on the medium |

## TCP/IP model (4 layers)

- **Application** — combines OSI application, presentation, and session.
- **Transport** — TCP and UDP.
- **Internet** — IP addressing and routing.
- **Network access** — link and physical.

## Why it matters for IoT

IoT devices often use lightweight protocols at the application layer, but they still rely on IP for addressing and transport for reliability. Understanding the layers helps you isolate faults: a cable problem is physical, an unreachable host is network, a missing port is transport.

## Check your understanding

- Map the OSI transport layer to TCP/IP.
- Which layer would you investigate for a cable fault?
`,
      },
      {
        slug: "media-types",
        order: 4,
        minutes: 45,
        kind: "lesson",
        title: "Copper, fiber, and wireless media",
        summary:
          "Compare the three media IoT devices use to communicate.",
        content: `## The three media

| Medium | Strengths | Weaknesses |
| --- | --- | --- |
| Copper | Cheap, easy to terminate, familiar | Limited distance, interference |
| Fiber optic | High bandwidth, long distance, immune to EMI | Cost, fragile, specialist tools |
| Wireless | No cabling, mobile, flexible | Interference, security, range limits |

## Choosing a medium

- Use **copper** for short, low-cost links inside a room or building.
- Use **fiber** for backbones and long runs between buildings.
- Use **wireless** where mobility or installation cost matters.

## Check your understanding

- Which medium is immune to electromagnetic interference?
- Give one IoT scenario where wireless is the only practical choice.
`,
      },
      {
        slug: "m2m-m2g-m2c",
        order: 5,
        minutes: 45,
        kind: "lesson",
        title: "M2M, M2G, and M2C connections",
        summary:
          "The three connection types that describe how things communicate.",
        content: `## The three models

| Model | Path | Example |
| --- | --- | --- |
| M2M | Device to device | A motion sensor triggers a light directly |
| M2G | Device to gateway | Sensors report to a home gateway |
| M2C | Device to cloud | A gateway publishes telemetry to a cloud dashboard |

## How they combine

A realistic system often uses all three: devices talk to a gateway (M2G), the gateway aggregates and forwards to the cloud (M2C), and some devices act locally without the cloud (M2M) for speed and resilience.

## Check your understanding

- Classify a sensor sending data straight to a cloud platform.
- Why is M2M useful when the internet connection drops?
`,
      },
      {
        slug: "lan-wan",
        order: 6,
        minutes: 60,
        kind: "lesson",
        title: "LAN, WAN, and IoT network devices",
        summary:
          "How local and wide-area networks support IoT, and the devices that build them.",
        content: `## LAN and WAN

- **LAN** — a local network, usually one building or campus. Fast, low latency, privately managed.
- **WAN** — connects sites over larger distances, often through a provider.

An IoT deployment usually has a LAN at the edge (sensors to gateway) and a WAN link from the gateway to the internet or cloud.

## Network devices

| Device | Role |
| --- | --- |
| Switch | Connects devices within a LAN |
| Router | Connects networks and chooses paths |
| Gateway | Translates between IoT protocols and the wider network |
| Access point | Provides wireless connectivity |
| Firewall | Filters traffic between zones |

## Check your understanding

- Is a home sensor network a LAN or a WAN?
- What extra job does an IoT gateway perform compared with a router?
`,
      },
      {
        slug: "wireless-technologies",
        order: 7,
        minutes: 60,
        kind: "lesson",
        title: "WiFi, ZigBee, Bluetooth, and 5G",
        summary:
          "Compare the wireless technologies used to connect IoT devices.",
        content: `## Comparison

| Technology | Typical range | Good for |
| --- | --- | --- |
| WiFi | Medium | Cameras, home/office devices, higher bandwidth |
| ZigBee | Short, mesh | Sensors, lighting, low power |
| Bluetooth | Short | Wearables, proximity, setup |
| 5G | Wide | Mobile and industrial IoT, low latency |

## Trade-offs

- **Range vs power** — longer range usually costs more energy.
- **Bandwidth vs battery** — high-bandwidth links drain batteries faster.
- **Mesh vs star** — mesh extends coverage but adds complexity.

## Check your understanding

- Which technology suits a battery-powered door sensor?
- Why might an industrial site choose 5G over WiFi?
`,
      },
      {
        slug: "privacy-security",
        order: 8,
        minutes: 60,
        kind: "lesson",
        title: "Privacy, metadata, and IoT security",
        summary:
          "What metadata reveals, how IoT affects privacy, and the challenges of securing devices.",
        content: `## Metadata

Metadata is data about data: timestamps, device IDs, locations, and traffic patterns. Even when content is encrypted, metadata can reveal behaviour — for example, when a house is empty.

## Privacy impact

- Continuous sensing can reveal habits and presence.
- Devices may send data to third parties by default.
- Weak access control exposes personal data.

## Security challenges

1. **Weak default credentials** — devices shipped with known passwords.
2. **No updates** — firmware that is never patched.
3. **Limited compute** — strong encryption is expensive on small devices.
4. **Physical access** — devices may be reachable by attackers.
5. **Scale** — thousands of devices are hard to monitor.

## Mitigations

Change defaults, patch regularly, use unique credentials, segment networks, encrypt traffic, and collect only necessary data.

## Check your understanding

- Give an example of metadata that reveals behaviour.
- Name three challenges for securing IoT devices.
`,
      },
      {
        slug: "ai-evolution",
        order: 9,
        minutes: 60,
        kind: "lesson",
        title: "AI evolution and applications",
        summary:
          "How artificial intelligence developed and where it is used today.",
        content: `## A short history

- **Rule-based systems** encoded human knowledge as explicit rules.
- **Machine learning** let systems improve from data instead of hand-written rules.
- **Deep learning** used layered neural networks to handle images, speech, and language.
- **Generative AI** produces text, images, and code from learned patterns.

## Where AI is used

- Healthcare: imaging and diagnosis support.
- Transport: driver assistance and route planning.
- Manufacturing: quality inspection and predictive maintenance.
- Everyday software: search, recommendations, and assistants.

## Check your understanding

- Contrast rule-based systems with machine learning.
- Give one AI application relevant to IoT.
`,
      },
      {
        slug: "machine-learning",
        order: 10,
        minutes: 90,
        kind: "lesson",
        title: "Machine learning, deep learning, and expert systems",
        summary:
          "The basic concept of machine learning and how it differs from expert systems.",
        content: `## Machine learning

Machine learning builds models from data rather than explicit rules. Common forms:

- **Supervised** — learn from labelled examples.
- **Unsupervised** — find structure in unlabelled data.
- **Reinforcement** — learn by reward and penalty.

## Deep learning

Deep learning is machine learning with many-layered neural networks. It excels when data is large and unstructured, such as images or audio, but needs more data and compute than classical methods.

## Expert systems

An expert system captures human expertise as rules and an inference engine. It is explainable and predictable but brittle outside its rule set.

| Approach | Source of knowledge | Strength |
| --- | --- | --- |
| Expert system | Hand-written rules | Explainable |
| Machine learning | Data | Adapts to patterns |
| Deep learning | Large data + neural nets | Handles complex input |

## Check your understanding

- When would an expert system be preferable to machine learning?
- What makes deep learning different from classical machine learning?
`,
      },
      {
        slug: "lab-packet-tracer-iot",
        order: 11,
        minutes: 150,
        kind: "lab",
        title: "Lab: Packet Tracer IoT build and test log",
        summary:
          "Build a simulated IoT system with sensors, an actuator, and a remote dashboard.",
        content: `## Objective

Build an IoT topology in Cisco Packet Tracer that monitors sensors and controls an actuator, then record a test log.

## Steps

1. Add a gateway, router, switch, and at least four IoT devices.
2. Register the devices with the IoT server.
3. Open the remote dashboard and confirm live readings.
4. Set a threshold rule that turns on an actuator.
5. Disconnect one device and confirm it shows as offline.
6. Record at least six tests in a table with expected and actual results.

## Evidence

- Topology and dashboard screenshots.
- Completed test log.
- Short reflection on one problem and how you fixed it.

## Marking guide

| Criterion | Marks |
| --- | --- |
| Topology built and addressed | 3 |
| Devices registered and visible | 3 |
| Actuator rule works | 2 |
| Test log complete | 2 |
`,
      },
    ],
  },
];

export const competencyBySlug = (slug: string): Competency | undefined =>
  competencies.find((competency) => competency.slug === slug);

export const competencyByCode = (
  code: string,
): Competency | undefined =>
  competencies.find((competency) => competency.code === code);

export const allLessons = competencies.flatMap((competency) =>
  competency.lessons.map((lesson) => ({ competency, lesson })),
);

export const findLesson = (competencySlug: string, lessonSlug: string) => {
  const competency = competencyBySlug(competencySlug);
  if (!competency) return undefined;
  const lesson = competency.lessons.find((item) => item.slug === lessonSlug);
  if (!lesson) return undefined;
  return { competency, lesson };
};

export const totalLessonCount = allLessons.filter(
  ({ lesson }) => lesson.kind === "lesson",
).length;

export const totalMinutes = allLessons.reduce(
  (sum, { lesson }) => sum + lesson.minutes,
  0,
);

export const codeList: CompetencyCode[] = ["C25", "C26", "C27"];
