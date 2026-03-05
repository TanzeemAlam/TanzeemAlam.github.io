/* ─────────────────────────────────────────
   DATA — edit this file to update content
───────────────────────────────────────── */
import { awardImages, hldDiagrams, certificateImages } from "./imageMap";

export const personal = {
  name: 'Tanzeem Alam',
  role: 'Java Software Engineer',
  tagline: 'Full-Stack Java & Cloud · 6.8 Years',
  location: 'Delhi, India',
  email: 'tanzeemalam789@gmail.com',
  github: 'https://github.com/TanzeemAlam',
  linkedin: 'https://linkedin.com/in/tanzeem-alam/',
  leetcode: 'https://leetcode.com/u/TanzeemAlam',
  bio: 'Building scalable, cloud-native systems with Java microservices and Spring Boot. Engineering lead who ships production-ready solutions, mentors teams, and owns outcomes end-to-end.',
}

/* ── SKILLS ── */
export const skillCategories = [
  {
    id: 'backend',
    label: 'Backend',
    color: '#f5c800',
    bg: '#fffbeb',
    icon: '☕',
    skills: [
      { name: 'Java 17',         years: 6, level: 95, projects: ['Ecommerce Platform', 'Payment Gateway', 'RFP Automation'] },
      { name: 'Spring Boot',     years: 6, level: 92, projects: ['Ecommerce Platform', 'Payment Gateway'] },
      { name: 'Spring MVC',      years: 5, level: 88, projects: ['Legacy Monolith', 'Internal Tools'] },
      { name: 'Spring Security', years: 5, level: 85, projects: ['Ecommerce Platform', 'OAuth2 Integration'] },
      { name: 'Spring JPA',      years: 5, level: 88, projects: ['Ecommerce Platform', 'Payment Gateway'] },
      { name: 'Multithreading',  years: 4, level: 80, projects: ['Inventory Service', 'Batch Jobs'] },
      { name: 'REST APIs',       years: 6, level: 95, projects: ['All Projects'] },
      { name: 'OAuth2 / JWT',    years: 4, level: 88, projects: ['Ecommerce Platform', 'Payment Gateway'] },
      { name: 'OOPs',            years: 6, level: 95, projects: ['All Projects'] },
      { name: 'DSA',             years: 6, level: 78, projects: ['LeetCode', 'Interviews'] },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    color: '#06b6d4',
    bg: '#ecfeff',
    icon: '⚛️',
    skills: [
      { name: 'React.js',    years: 3, level: 80, projects: ['Internal Dashboard', 'Admin Portal'] },
      { name: 'Angular',     years: 4, level: 82, projects: ['Client Portal', 'E-Commerce UI'] },
      { name: 'TypeScript',  years: 4, level: 80, projects: ['Client Portal', 'E-Commerce UI'] },
      { name: 'JavaScript',  years: 5, level: 85, projects: ['All Frontend Projects'] },
      { name: 'Node.js',     years: 2, level: 72, projects: ['API Tooling', 'Scripts'] },
      { name: 'HTML / CSS',  years: 6, level: 88, projects: ['All Frontend Projects'] },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    color: '#16a34a',
    bg: '#f0fdf4',
    icon: '☁️',
    skills: [
      { name: 'AWS',         years: 4, level: 82, projects: ['Ecommerce Platform', 'Microservices Migration'] },
      { name: 'Azure',       years: 3, level: 75, projects: ['DB Migration', 'Azure DevOps'] },
      { name: 'Docker',      years: 4, level: 85, projects: ['Ecommerce Platform', 'All Microservices'] },
      { name: 'Kubernetes',  years: 3, level: 78, projects: ['Ecommerce Platform', 'Prod Deployment'] },
      { name: 'Jenkins',     years: 4, level: 82, projects: ['CI/CD Pipelines'] },
      { name: 'CloudWatch',  years: 3, level: 78, projects: ['Monitoring & Alerts'] },
      { name: 'Terraform',   years: 1, level: 65, projects: ['Infra as Code (learning)'] },
    ],
  },
  {
    id: 'arch',
    label: 'Architecture',
    color: '#9333ea',
    bg: '#faf5ff',
    icon: '🏗️',
    skills: [
      { name: 'Microservices', years: 5, level: 90, projects: ['Ecommerce Platform', 'Payment System'] },
      { name: 'Kafka',         years: 4, level: 85, projects: ['Ecommerce Platform', 'Event Pipeline'] },
      { name: 'Event-Driven',  years: 4, level: 85, projects: ['Ecommerce Platform', 'Inventory System'] },
      { name: 'System Design', years: 5, level: 82, projects: ['Tech Interviews', 'Arch Reviews'] },
      { name: 'HLD / LLD',     years: 4, level: 80, projects: ['Ecommerce Platform', 'Payment Gateway'] },
      { name: 'MySQL',         years: 6, level: 88, projects: ['All Projects'] },
      { name: 'PostgreSQL',    years: 3, level: 82, projects: ['Ecommerce Platform'] },
      { name: 'MongoDB',       years: 2, level: 75, projects: ['Internal Tools'] },
    ],
  },
]

/* ── WHO I AM ── */
export const values = [
  {
    emoji: '🏗️',
    title: 'Builder First',
    summary: 'I own problems end-to-end — design to production.',
    story: {
      problem: 'Our payment service was failing silently — 3% of transactions never completed, and no one knew until customers complained.',
      action: 'I traced it to a missing retry mechanism in our Kafka consumer. I redesigned the event flow end-to-end: dead-letter queue, retry policy, and CloudWatch alerts — then led the fix through review and deployment myself.',
      outcome: 'Transaction success rate rose from 97% to 99.8%. I owned it from diagnosis to production, not just the code review.',
    },
  },
  {
    emoji: '🧭',
    title: 'Engineering Lead',
    summary: 'Led 5–10 engineers. Velocity up 25% through structured ownership.',
    story: {
      problem: 'Sprint after sprint, 30% of tickets spilled over. No one knew who owned what. PRs sat unreviewed for days.',
      action: 'I introduced explicit ticket ownership, daily 10-min async standups, and a PR review SLA of 24 hours. I also started weekly 1:1s to catch blockers early.',
      outcome: 'Sprint completion went from 70% to 95% in 6 weeks. The team stopped firefighting and started shipping predictably.',
    },
  },
  {
    emoji: '☁️',
    title: 'Cloud-Native',
    summary: 'AWS, Kafka, Docker, K8s — I design systems that scale.',
    story: {
      problem: 'A monolithic service was causing 40-second cold starts and taking the entire platform down during deployments.',
      action: 'Led migration to containerised microservices on K8s with rolling deployments and circuit breakers. Set up CloudWatch dashboards to catch regressions before users did.',
      outcome: 'Cold start reduced to under 3 seconds. Zero-downtime deployments. Platform uptime improved from 98.5% to 99.9%.',
    },
  },
  {
    emoji: '🎯',
    title: 'Outcome Focused',
    summary: 'I measure success in shipped value, not lines of code.',
    story: {
      problem: 'RFP documents for business development took 3 days each to write manually. Sales team was bottlenecked.',
      action: 'Built an automation tool that pulled structured data from our internal CRM and generated 80% of the document automatically, with only custom sections left for humans.',
      outcome: 'RFP turnaround dropped from 3 days to 4 hours. Business development cycles improved by 40%.',
    },
  },
  {
    emoji: '📐',
    title: 'Clean Code',
    summary: 'Clarity over cleverness — always.',
    story: {
      problem: 'A critical service had 85% of logic in a single 2,000-line God class. Adding any feature took days and usually broke something else.',
      action: 'Refactored it over 4 sprints without stopping feature work. Introduced the Strategy pattern, separated concerns, and got test coverage from 12% to 84%.',
      outcome: 'Feature development in that service went from 3-day average to same-day. Production bugs dropped 40%.',
    },
  },
  {
    emoji: '🤝',
    title: 'Team Multiplier',
    summary: 'I make the whole team better, not just myself.',
    story: {
      problem: 'Junior engineers were shipping features with no tests and inconsistent patterns. Code review was becoming a gatekeeping exercise, not a learning one.',
      action: 'Created a lightweight internal playbook for our team conventions, ran fortnightly "code craft" sessions reviewing real PRs, and shifted reviews from "fixing mistakes" to "teaching decisions".',
      outcome: 'Code review errors dropped 30-40%. Two junior engineers I mentored were promoted within a year.',
    },
  },
]

/* ── EXPERIENCE ── */
export const experience = [
  {
    id: 'exp1',
    role: 'Staff Software Engineer',
    company: 'Nagarro',
    location: 'Gurugram',
    period: 'Jan 2024 – Present',
    tags: ['Java 17', 'Spring Boot', 'Microservices', 'AWS', 'Docker', 'K8s', 'Jenkins'],
    points: [
      'Led <strong>5–10 engineers</strong> — on-time delivery up <strong>25%</strong> via structured Agile planning',
      'Jenkins CI/CD pipelines boosting deployment efficiency by <strong>30%</strong>',
      'CloudWatch monitoring & health checks for containerised microservices',
      'Resolved <strong>100+ security issues</strong> via secure coding & API hardening',
      'Code review errors down <strong>30–40%</strong> with GitHub Copilot & design discussions',
      'Full end-to-end ownership including production support & incident response',
    ],
    allTags: ['Java 17', 'Spring Boot', 'Microservices', 'Jenkins', 'AWS', 'CloudWatch', 'Docker', 'Kubernetes', 'GitHub Copilot', 'Agile'],
  },
  {
    id: 'exp2',
    role: 'Senior Software Engineer',
    company: 'Nagarro',
    location: 'Gurugram',
    period: 'Jan 2021 – Dec 2023',
    tags: ['React.js', 'TypeScript', 'Kafka', 'OAuth2', 'AWS', 'Azure'],
    points: [
      'Full-stack with <strong>React (TypeScript) + Spring Boot</strong> microservices & OAuth2/JWT',
      'PayPal gateway — <strong>100K+ monthly transactions</strong>, success rate up <strong>20%</strong>',
      '<strong>Kafka event-driven</strong> distributed workflows with JWT-secured REST APIs',
      'Automated Azure-to-AWS DB migration — manual effort & downtime reduced',
      'RFP automation improved business development cycles by <strong>40%</strong>',
      'System-level design decisions and cloud-cost optimisations',
    ],
    allTags: ['React.js', 'TypeScript', 'Spring Boot', 'Kafka', 'OAuth2', 'JWT', 'AWS', 'Azure', 'PayPal API', 'PostgreSQL'],
  },
  {
    id: 'exp3',
    role: 'Software Engineer',
    company: 'Nagarro',
    location: 'Gurugram',
    period: 'Jul 2019 – Dec 2020',
    tags: ['Java 8', 'Angular', 'Spring MVC', 'MySQL', 'JUnit'],
    points: [
      'Spring MVC + Hibernate + MySQL — <strong>95% code quality</strong> per sprint',
      '<strong>Angular + TypeScript</strong> UI — UX +25%, load time down <strong>30%</strong>',
      '<strong>85% test coverage</strong> with JUnit/Mockito — production bugs down 40%',
      'MySQL query optimisation — response time <strong>200ms</strong>, 50% faster',
    ],
    allTags: ['Java 8', 'Spring MVC', 'Angular', 'TypeScript', 'Hibernate', 'MySQL', 'JUnit', 'Mockito'],
  },
]

/* ── PROJECTS ── */
export const projects = [
  {
    slug: 'ecommerce-microservices',
    title: 'Ecommerce Microservices Platform',
    subtitle: 'Event-driven · Distributed · Cloud-native',
    tags: ['Java 17', 'Spring Boot', 'Kafka', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis'],
    status: 'complete',
    summary: 'A production-grade ecommerce backend built as independent microservices, communicating via Kafka events. Supports 100K+ monthly transactions with zero-downtime deployments.',
    github: 'https://github.com/TanzeemAlam',
    hldImage: hldDiagrams.hldEcommerceApplication,
    // Interactive HLD nodes
    hldNodes: [
      { id: 'gateway', label: 'API Gateway', x: 20, y: 4, desc: 'Single entry point for all client requests. Handles routing, rate limiting, and auth token validation before forwarding to downstream services.', color: '#f5c800' },
      { id: 'user',    label: 'User Service', x: 8, y: 4, desc: 'Manages user registration, authentication, and profiles. Issues JWT tokens via OAuth2. Publishes user-events to Kafka on registration/update.', color: '#a5f3fc' },
      { id: 'product', label: 'Product Service', x: 33, y: 4, desc: 'CRUD for product catalogue. Listens for inventory-events to update stock counts in real time. Stores data in PostgreSQL with Redis cache for read-heavy endpoints.', color: '#a5f3fc' },
      { id: 'cart',    label: 'Cart Service', x: 66, y: 10, desc: 'Manages shopping cart state per user. Uses Redis for fast read/write. Publishes cart-events when items are added/removed for analytics.', color: '#a5f3fc' },
      { id: 'order',   label: 'Order Service', x: 79, y: 10, desc: 'Orchestrates the order lifecycle: created → payment-pending → confirmed → shipped. Publishes order-events to Kafka at each state transition.', color: '#a5f3fc' },
      { id: 'inventory', label: 'Inventory Service', x: 80, y: 4, desc: 'Consumes order-events to decrement stock. Publishes inventory-events back so Product Service can update availability. Prevents overselling via optimistic locking.', color: '#a5f3fc' },
      { id: 'kafka',   label: 'Kafka Cluster', x: 75, y: 16, desc: 'Central event bus. Topics: user-events, product-events, order-events, inventory-events, cart-events. Zookeeper manages broker coordination. Consumer groups ensure exactly-once processing.', color: '#bbf7d0' },
      { id: 'config',  label: 'Config Server', x: 66, y: 4, desc: 'Spring Cloud Config Server. Centralises all service configs. Services pull their config on startup — no environment-specific code in the codebase.', color: '#e9d5ff' },
      { id: 'eureka',  label: 'Eureka', x: 64, y: 16, desc: 'Service discovery registry. Each microservice registers itself on startup. API Gateway uses Eureka to resolve service instances dynamically — no hardcoded URLs.', color: '#e9d5ff' },
      { id: 'zipkin',  label: 'Zipkin', x: 86, y: 16, desc: 'Distributed tracing. Every request gets a trace ID that propagates across services via HTTP headers. Makes debugging cross-service failures dramatically faster.', color: '#e9d5ff' },
    ],
    caseStudy: {
      problem: 'A monolithic ecommerce backend was hitting scaling limits. During flash sales, the inventory and order modules would contend on the same database, causing deadlocks and failed transactions. Deploying any feature required a full system restart.',
      decisions: [
        { title: 'Why Kafka over REST for inter-service comms?', body: 'REST calls between services create tight coupling and cascading failures. If Order Service calls Inventory synchronously and Inventory is slow, orders back up. Kafka decouples them — Order publishes an event and moves on. Inventory processes at its own pace. This also gives us a full audit trail of every state change for free.' },
        { title: 'Why not go serverless?', body: 'Cold starts were unacceptable for checkout flows where users expect sub-200ms responses. Kubernetes with pre-warmed pods gave us the elasticity we needed without the latency penalty. We also had stateful Kafka consumers that don\'t map cleanly to FaaS.' },
        { title: 'Why Spring Cloud Config + Eureka?', body: 'With 8+ services, managing config per-service in environment variables becomes a maintenance nightmare. Config Server gives us one place to change a DB URL or feature flag and have it propagate. Eureka removes the need for hardcoded service URLs — services discover each other dynamically.' },
      ],
      outcomes: [
        { metric: '99.8%', label: 'Transaction success rate' },
        { metric: '100K+', label: 'Monthly transactions handled' },
        { metric: '0', label: 'Downtime deployments' },
        { metric: '3s', label: 'Cold start (was 40s)' },
      ],
    },
    snippets: [
      {
        title: 'Kafka Producer — Order Events',
        lang: 'java',
        description: 'When an order is placed, the Order Service publishes an event to Kafka. This decouples inventory deduction from the order creation flow.',
        code: `@Service
@RequiredArgsConstructor
public class OrderEventPublisher {

    private final KafkaTemplate<String, OrderEvent> kafkaTemplate;
    private static final String TOPIC = "order-events";

    public void publishOrderPlaced(Order order) {
        OrderEvent event = OrderEvent.builder()
            .orderId(order.getId())
            .userId(order.getUserId())
            .items(order.getItems())
            .status(OrderStatus.PLACED)
            .timestamp(Instant.now())
            .build();

        kafkaTemplate.send(TOPIC, order.getId().toString(), event)
            .addCallback(
                result -> log.info("Order event published: {}", order.getId()),
                failure -> log.error("Failed to publish order event", failure)
            );
    }
}`,
      },
      {
        title: 'Kafka Consumer — Inventory Deduction',
        lang: 'java',
        description: 'Inventory Service listens for order-events and decrements stock atomically, using optimistic locking to prevent overselling.',
        code: `@Service
@RequiredArgsConstructor
public class InventoryEventConsumer {

    private final InventoryRepository inventoryRepo;
    private final InventoryEventPublisher eventPublisher;

    @KafkaListener(
        topics = "order-events",
        groupId = "inventory-service",
        containerFactory = "orderEventListenerFactory"
    )
    public void handleOrderPlaced(OrderEvent event, Acknowledgment ack) {
        try {
            event.getItems().forEach(item -> {
                Inventory inv = inventoryRepo
                    .findByProductIdWithLock(item.getProductId())
                    .orElseThrow(() -> new ProductNotFoundException(item.getProductId()));

                if (inv.getQuantity() < item.getQty()) {
                    throw new InsufficientStockException(item.getProductId());
                }
                inv.deduct(item.getQty());
                inventoryRepo.save(inv);
            });

            eventPublisher.publishInventoryDeducted(event.getOrderId());
            ack.acknowledge(); // commit offset only on success

        } catch (InsufficientStockException ex) {
            eventPublisher.publishInventoryFailed(event.getOrderId(), ex.getMessage());
            ack.acknowledge();
        }
    }
}`,
      },
      {
        title: 'Spring Security — JWT Filter',
        lang: 'java',
        description: 'Every request passes through this filter. The JWT is validated and the user context is set in the SecurityContext before the request reaches any controller.',
        code: `@Component
@RequiredArgsConstructor
public class JwtAuthFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain chain) throws ServletException, IOException {

        final String authHeader = request.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            chain.doFilter(request, response);
            return;
        }

        final String jwt = authHeader.substring(7);
        final String userEmail = jwtService.extractUsername(jwt);

        if (userEmail != null && SecurityContextHolder.getContext()
                                    .getAuthentication() == null) {
            UserDetails userDetails = userDetailsService
                .loadUserByUsername(userEmail);

            if (jwtService.isTokenValid(jwt, userDetails)) {
                UsernamePasswordAuthenticationToken authToken =
                    new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities()
                    );
                authToken.setDetails(
                    new WebAuthenticationDetailsSource().buildDetails(request)
                );
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        chain.doFilter(request, response);
    }
}`,
      },
    ],
  },
  {
    slug: 'project-two',
    title: 'Interview Intelligence - AI Agent',
    subtitle: 'Details coming soon',
    tags: ['Java', 'Spring Boot'],
    status: 'wip',
    summary: 'A platform that stores real interview questions by company and topic, and organizes them into a structured question bank. It lets you run company-specific mock interviews and get feedback on your answers to identify strengths and weak areas.',
    github: 'https://github.com/TanzeemAlam',
  },
]

/* ── EDUCATION ── */
export const education = {
  degree: 'B.Tech — Computer Science & Engineering',
  university: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
  location: 'Uttar Pradesh, India',
  period: '2015 – 2019',
  grade: '72%',
  subjects: ['Data Structures & Algorithms', 'Operating Systems', 'DBMS', 'Computer Networks', 'OOP with Java', 'Software Engineering', 'Compiler Design', 'Distributed Systems'],
  milestones: [
    { year: '2015', label: 'Enrolled in B.Tech CSE' },
    { year: '2017', label: 'Built first Java web app' },
    { year: '2018', label: 'Final year project: Distributed file system' },
    { year: '2019', label: 'Graduated' },
  ],
}

/* ── AWARDS ── */
export const awards = [
  {
    id: 'award4',
    title: 'Excellence Award',
    year: '2025',
    org: 'Nagarro',
    description: 'Recognised for exceptional delivery leadership and technical contributions as Staff Engineer.',
    photo: awardImages.award4
  },
  {
    id: 'award3',
    title: 'Old is Gold — 5 Year Service',
    year: '2024',
    org: 'Nagarro',
    description: 'Awarded for 5 years of continued dedication and contribution to Nagarro.',
    photo: awardImages.award3
  },
  {
    id: 'award2',
    title: 'Excellence Award',
    year: '2024',
    org: 'Nagarro',
    description: 'Awarded for driving 25% improvement in team velocity and mentoring junior engineers.',
    photo: awardImages.award2
  },
  {
    id: 'award1',
    title: 'Excellence Award',
    year: '2024',
    org: 'Nagarro',
    description: 'Recognised for successful delivery of the payment gateway integration handling 100K+ transactions.',
    photo: awardImages.award1
  },
  
]

/* ── CERTIFICATIONS ── */
export const certifications = [
  {
    id: 'az900',
    title: 'Microsoft Azure Fundamentals',
    code: 'AZ-900',
    issuer: 'Microsoft',
    date: 'March 2021',
    photo: certificateImages.az900
  },
  {
    id: 'az204',
    title: 'Microsoft Azure Developer Associate',
    code: 'AZ-204',
    issuer: 'Microsoft',
    date: 'June 2021',
    photo: certificateImages.az204
  }
]
