---
encoding: "bom|utf-8"
mode: 'r:bom|utf-8'
title: System Architecture snippets
description: MIscellaneous notes
layout: simple
theme: slate
lang: en
tags: [ bruno, system, software, architecture]
---

Functional requirements are understood to mean the users’ needs pertaining to the services to be rendered by a software system

 most of the proposed software methodologies, for instance, agile software development and model-driven software development, primarily target functional requirements. Considering the importance and even the criticality of non-functional requirements describing the quality of software systems and the constraints upon them, similar progress would be expected for their development.

----

Proved ability to analyse requirements

Here is the meta tag on my website that allows it to show as an image on LinkedIn: <meta name="image" property="og:image" content="https://res.cloudinary.com/cantimaginewhy/image/upload/icon/og-waterfall.jpg">

----

Modular Monolith, or in one word: The MODULITH.

business logic of the service, much less on the infrastructure. There is no HTTP or queue communication pattern to consider, neither is there a “what if the service is down” consideration. You are free to express your algorithm in one continuous stroke of a keyboard. The infrastructural demands and needs are much more sidelined and do not take up the main focus of the project.

On the other hand, what you MUST consider, is the separation of modules in a VERY STRUCT WAY. You have to define the boundaries of modules and stick to them like a flea to hair, like a mouse to cheese, like… hopefully you get the idea by now.

I suggest draconian rules to your build/testing process to ensure this behavior such as:

ArchUnit for JVM language (https://www.archunit.org/)
PyTestArch for Python (https://pypi.org/project/pytestarch/)
TS-Arch for TypeScript/Javascript (https://github.com/ts-arch/ts-arch)

If you adhere to the basic rule of separation of concern (SoC) you will be able to extract any “concern” or in our terminology: module, at any given point in time and make the system more scalable.

In a regular system, you have the more “managerial” API, user management, reporting, and other appended services, which receive a lot less traffic than the main API, the core of the system. In a monolithic architecture, this whole system would be one service, duplicated for the sake of the core functionality. In MSA, even the smaller, less used APIs would be self-managed/deployed creating many more services to monitor. Using the modulith as a strategy, the core functionality would be extracted as a separate service, while all other services would stay bundled together as one.

Some services do tend to be blasted by request and need to be more scalable, while others do not have a necessity to be a service of their own.

The reason for a service to be a micro-service of its own is by its own requirements and the necessity of the system, not because of a blind following of an architecture built for a subset of the whole system. 

https://medium.com/israeli-tech-radar/death-to-monolith-all-hail-the-modulith-6e1db04ed48a
Death to Monolith, All hail the Modulith
Yoav Nordmann
Israeli Tech Radar

Aug 20, 2024

----

A **zero-trust model** assumes that each API is a potential security risk. Therefore, every API request needs to be authenticated, authorized, and validated before granting access. It employs least privilege access policies, a key approach to zero-trust that controls who can access the APIs and what actions they can take. This ensures only devices and users have access to the specific API endpoints they require, reducing the risk of unauthorized access and over-exposure.

----

**ZooKeeper** is a centralized service for maintaining configuration information, naming, providing distributed synchronization, and providing group services. All of these kinds of services are used in some form or another by distributed applications

----

Email forensics is most successful when used in conjunction with other cyber security measures. Combining email forensics with network forensics, endpoint detection and response (EDR), and security information and event management (SIEM) technologies results in a holistic defense approach. This comprehensive method ensures that risks are discovered and managed across all vectors, including email.

Deep content inspection looks beyond surface-level analysis to the actual content of email messages. This involves scanning attachments, embedded links, and the email content for indications of malicious intent. Advanced tools can decrypt and analyze encrypted emails, ensuring that no potential threat is overlooked.

----

Cybersecurity 101: The Fundamentals of Cybersecurity > Endpoint Security: How Endpoint Protection Works > What is Endpoint Detection and Response (EDR)?

What is Endpoint Detection and Response (EDR)?

Forrester Wave for EDR Report

Anne Aarness - January 07, 2025

What is EDR?

Endpoint Detection and Response (EDR), also referred to as endpoint detection and threat response (EDTR), is an endpoint security solution that continuously monitors end-user devices to detect and respond to cyber threats like ransomware and malware.

Coined by Gartner's Anton Chuvakin, EDR is defined as a solution that "records and stores endpoint-system-level behaviors, uses various data analytics techniques to detect suspicious system behavior, provides contextual information, blocks malicious activity, and provides remediation suggestions to restore affected systems."

How does EDR work?

EDR security solutions record the activities and events taking place on endpoints and all workloads, providing security teams with the visibility they need to uncover incidents that would otherwise remain invisible. An EDR solution needs to provide continuous and comprehensive visibility into what is happening on endpoints in real time.

An EDR tool should offer advanced threat detection, investigation and response capabilities — including incident data search and investigation alert triage, suspicious activity validation, threat hunting, and malicious activity detection and containment.

----