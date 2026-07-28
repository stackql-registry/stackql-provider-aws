"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["267653"],{278648(e,i,t){t.r(i),t.d(i,{metadata:()=>n,default:()=>p,frontMatter:()=>l,contentTitle:()=>h,toc:()=>m,assets:()=>u});var n=JSON.parse('{"id":"services/ecs/task_definitions/index","title":"task_definitions","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/ecs/task_definitions/index.md","sourceDirName":"services/ecs/task_definitions","slug":"/services/ecs/task_definitions/","permalink":"/services/ecs/task_definitions/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"task_definitions","hide_title":false,"hide_table_of_contents":false,"keywords":["task_definitions","ecs","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"task_definition_families","permalink":"/services/ecs/task_definition_families/"},"next":{"title":"task_protections","permalink":"/services/ecs/task_protections/"}}'),s=t(474848),a=t(28453),r=t(97362),o=t(897272),d=t(413554),c=t(541647);let l={title:"task_definitions",hide_title:!1,hide_table_of_contents:!1,keywords:["task_definitions","ecs","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,u={},m=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function f(e){let i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["Creates, updates, deletes, gets or lists a ",(0,s.jsx)("code",{children:"task_definitions"})," resource."]}),"\n",(0,s.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Name"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"task_definitions"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Type"})}),(0,s.jsx)("td",{children:"Resource"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Id"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"aws.ecs.task_definitions"})})]})]})}),"\n",(0,s.jsx)(i.h2,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(i.p,{children:["The following fields are returned by ",(0,s.jsx)(i.code,{children:"SELECT"})," queries:"]}),"\n",(0,s.jsxs)(d.A,{defaultValue:"describe_task_definition",values:[{label:"describe_task_definition",value:"describe_task_definition"},{label:"list_task_definitions",value:"list_task_definitions"}],children:[(0,s.jsx)(c.A,{value:"describe_task_definition",children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Datatype"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"tags"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"array"})}),(0,s.jsx)("td",{children:"The metadata that's applied to the task definition to help you categorize and organize them. Each tag consists of a key and an optional value. You define both. The following basic restrictions apply to tags: Maximum number of tags per resource - 50 For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length - 128 Unicode characters in UTF-8 Maximum value length - 256 Unicode characters in UTF-8 If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"taskDefinition"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"object"})}),(0,s.jsx)("td",{children:"The details of a task definition which describes the container and volume definitions of an Amazon Elastic Container Service task. You can specify which Docker images to use, the required resources, and other configurations related to launching the task definition through an Amazon ECS service or task."})]})]})]})}),(0,s.jsx)(c.A,{value:"list_task_definitions",children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Datatype"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"task_definition_arn"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The list of task definition Amazon Resource Name (ARN) entries for the ListTaskDefinitions request."})]})})]})})]}),"\n",(0,s.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(i.p,{children:"The following methods are available for this resource:"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Accessible by"}),(0,s.jsx)("th",{children:"Required Params"}),(0,s.jsx)("th",{children:"Optional Params"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#describe_task_definition",children:(0,s.jsx)(r.A,{code:"describe_task_definition"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"select"})}),(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Describes a task definition. You can specify a family and revision to find information about a specific task definition, or you can simply specify the family to find the latest ACTIVE revision in that family. You can only describe INACTIVE task definitions while an active task or service references them."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#list_task_definitions",children:(0,s.jsx)(r.A,{code:"list_task_definitions"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"select"})}),(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Returns a list of task definitions that are registered to your account. You can filter the results by family name with the familyPrefix parameter or by status with the status parameter."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#register_task_definition",children:(0,s.jsx)(r.A,{code:"register_task_definition"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"insert"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})}),", ",(0,s.jsx)("a",{href:"#parameter-family",children:(0,s.jsx)("code",{children:"family"})}),", ",(0,s.jsx)("a",{href:"#parameter-containerDefinitions",children:(0,s.jsx)("code",{children:"containerDefinitions"})})]}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Registers a new task definition from the supplied family and containerDefinitions. Optionally, you can add data volumes to your containers with the volumes parameter. For more information about task definition parameters and defaults, see Amazon ECS Task Definitions in the Amazon Elastic Container Service Developer Guide. You can specify a role for your task with the taskRoleArn parameter. When you specify a role for a task, its containers can then use the latest versions of the CLI or SDKs to make API requests to the Amazon Web Services services that are specified in the policy that's associated with the role. For more information, see IAM Roles for Tasks in the Amazon Elastic Container Service Developer Guide. You can specify a Docker networking mode for the containers in your task definition with the networkMode parameter. If you specify the awsvpc network mode, the task is allocated an elastic network interface, and you must specify a NetworkConfiguration when you create a service or run a task with the task definition. For more information, see Task Networking in the Amazon Elastic Container Service Developer Guide."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#delete_task_definitions",children:(0,s.jsx)(r.A,{code:"delete_task_definitions"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"delete"})}),(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Deletes one or more task definitions. You must deregister a task definition revision before you delete it. For more information, see DeregisterTaskDefinition. When you delete a task definition revision, it is immediately transitions from the INACTIVE to DELETE_IN_PROGRESS. Existing tasks and services that reference a DELETE_IN_PROGRESS task definition revision continue to run without disruption. Existing services that reference a DELETE_IN_PROGRESS task definition revision can still scale up or down by modifying the service's desired count. You can't use a DELETE_IN_PROGRESS task definition revision to run new tasks or create new services. You also can't update an existing service to reference a DELETE_IN_PROGRESS task definition revision. A task definition revision will stay in DELETE_IN_PROGRESS status until all the associated tasks and services have been terminated. When you delete all INACTIVE task definition revisions, the task definition name is not displayed in the console and not returned in the API. If a task definition revisions are in the DELETE_IN_PROGRESS state, the task definition name is displayed in the console and returned in the API. The task definition name is retained by Amazon ECS and the revision is incremented the next time you create a task definition with that name."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#deregister_task_definition",children:(0,s.jsx)(r.A,{code:"deregister_task_definition"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"delete"})}),(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Deregisters the specified task definition by family and revision. Upon deregistration, the task definition is marked as INACTIVE. Existing tasks and services that reference an INACTIVE task definition continue to run without disruption. Existing services that reference an INACTIVE task definition can still scale up or down by modifying the service's desired count. If you want to delete a task definition revision, you must first deregister the task definition revision. You can't use an INACTIVE task definition to run new tasks or create new services, and you can't update an existing service to reference an INACTIVE task definition. However, there may be up to a 10-minute window following deregistration where these restrictions have not yet taken effect. At this time, INACTIVE task definitions remain discoverable in your account indefinitely. However, this behavior is subject to change in the future. We don't recommend that you rely on INACTIVE task definitions persisting beyond the lifecycle of any associated tasks and services. You must deregister a task definition revision before you delete it. For more information, see DeleteTaskDefinitions."})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(i.p,{children:["Parameters can be passed in the ",(0,s.jsx)(i.code,{children:"WHERE"})," clause of a query. Check the ",(0,s.jsx)(i.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Datatype"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{id:"parameter-region",children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.A,{code:"region"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,s.jsxs)(i.h2,{id:"select-examples",children:[(0,s.jsx)(i.code,{children:"SELECT"})," examples"]}),"\n",(0,s.jsxs)(d.A,{defaultValue:"describe_task_definition",values:[{label:"describe_task_definition",value:"describe_task_definition"},{label:"list_task_definitions",value:"list_task_definitions"}],children:[(0,s.jsxs)(c.A,{value:"describe_task_definition",children:[(0,s.jsx)(i.p,{children:"Describes a task definition. You can specify a family and revision to find information about a specific task definition, or you can simply specify the family to find the latest ACTIVE revision in that family. You can only describe INACTIVE task definitions while an active task or service references them."}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sql",children:"SELECT\ntags,\ntaskDefinition\nFROM aws.ecs.task_definitions\nWHERE region = '{{ region }}' -- required\n;\n"})})]}),(0,s.jsxs)(c.A,{value:"list_task_definitions",children:[(0,s.jsx)(i.p,{children:"Returns a list of task definitions that are registered to your account. You can filter the results by family name with the familyPrefix parameter or by status with the status parameter."}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sql",children:"SELECT\ntask_definition_arn\nFROM aws.ecs.task_definitions\nWHERE region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,s.jsxs)(i.h2,{id:"insert-examples",children:[(0,s.jsx)(i.code,{children:"INSERT"})," examples"]}),"\n",(0,s.jsxs)(d.A,{defaultValue:"register_task_definition",values:[{label:"register_task_definition",value:"register_task_definition"},{label:"Manifest",value:"manifest"}],children:[(0,s.jsxs)(c.A,{value:"register_task_definition",children:[(0,s.jsx)(i.p,{children:"Registers a new task definition from the supplied family and containerDefinitions. Optionally, you can add data volumes to your containers with the volumes parameter. For more information about task definition parameters and defaults, see Amazon ECS Task Definitions in the Amazon Elastic Container Service Developer Guide. You can specify a role for your task with the taskRoleArn parameter. When you specify a role for a task, its containers can then use the latest versions of the CLI or SDKs to make API requests to the Amazon Web Services services that are specified in the policy that's associated with the role. For more information, see IAM Roles for Tasks in the Amazon Elastic Container Service Developer Guide. You can specify a Docker networking mode for the containers in your task definition with the networkMode parameter. If you specify the awsvpc network mode, the task is allocated an elastic network interface, and you must specify a NetworkConfiguration when you create a service or run a task with the task definition. For more information, see Task Networking in the Amazon Elastic Container Service Developer Guide."}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sql",children:"INSERT INTO aws.ecs.task_definitions (\nfamily,\ntaskRoleArn,\nexecutionRoleArn,\nnetworkMode,\ncontainerDefinitions,\nvolumes,\nplacementConstraints,\nrequiresCompatibilities,\ncpu,\nmemory,\ntags,\npidMode,\nipcMode,\nproxyConfiguration,\ninferenceAccelerators,\nephemeralStorage,\nruntimePlatform,\nenableFaultInjection,\nregion\n)\nSELECT \n'{{ family }}' /* required */,\n'{{ taskRoleArn }}',\n'{{ executionRoleArn }}',\n'{{ networkMode }}',\n'{{ containerDefinitions }}' /* required */,\n'{{ volumes }}',\n'{{ placementConstraints }}',\n'{{ requiresCompatibilities }}',\n'{{ cpu }}',\n'{{ memory }}',\n'{{ tags }}',\n'{{ pidMode }}',\n'{{ ipcMode }}',\n'{{ proxyConfiguration }}',\n'{{ inferenceAccelerators }}',\n'{{ ephemeralStorage }}',\n'{{ runtimePlatform }}',\n{{ enableFaultInjection }},\n'{{ region }}'\nRETURNING\ntags,\ntaskDefinition\n;\n"})})]}),(0,s.jsx)(c.A,{value:"manifest",children:(0,s.jsx)(o.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: task_definitions
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the task_definitions resource.
  - name: family
    value: "{{ family }}"
    description: |
      You must specify a family for a task definition. You can use it track multiple versions of the same task definition. The family is used as a name for your task definition. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.
  - name: taskRoleArn
    value: "{{ taskRoleArn }}"
    description: |
      The short name or full Amazon Resource Name (ARN) of the IAM role that containers in this task can assume. All containers in this task are granted the permissions that are specified in this role. For more information, see IAM Roles for Tasks in the Amazon Elastic Container Service Developer Guide.
  - name: executionRoleArn
    value: "{{ executionRoleArn }}"
    description: |
      The Amazon Resource Name (ARN) of the task execution role that grants the Amazon ECS container agent permission to make Amazon Web Services API calls on your behalf. For informationabout the required IAM roles for Amazon ECS, see IAM roles for Amazon ECS in the Amazon Elastic Container Service Developer Guide.
  - name: networkMode
    value: "{{ networkMode }}"
    description: |
      The Docker networking mode to use for the containers in the task. The valid values are none, bridge, awsvpc, and host. If no network mode is specified, the default is bridge. For Amazon ECS tasks on Fargate, the awsvpc network mode is required. For Amazon ECS tasks on Amazon EC2 Linux instances, any network mode can be used. For Amazon ECS tasks on Amazon EC2 Windows instances, \`<default>\` or awsvpc can be used. If the network mode is set to none, you cannot specify port mappings in your container definitions, and the tasks containers do not have external connectivity. The host and awsvpc network modes offer the highest networking performance for containers because they use the EC2 network stack instead of the virtualized network stack provided by the bridge mode. With the host and awsvpc network modes, exposed container ports are mapped directly to the corresponding host port (for the host network mode) or the attached elastic network interface port (for the awsvpc network mode), so you cannot take advantage of dynamic host port mappings. When using the host network mode, you should not run containers using the root user (UID 0). It is considered best practice to use a non-root user. If the network mode is awsvpc, the task is allocated an elastic network interface, and you must specify a NetworkConfiguration value when you create a service or run a task with the task definition. For more information, see Task Networking in the Amazon Elastic Container Service Developer Guide. If the network mode is host, you cannot run multiple instantiations of the same task on a single container instance when port mappings are used.
    valid_values: ['bridge', 'host', 'awsvpc', 'none']
  - name: containerDefinitions
    description: |
      A list of container definitions in JSON format that describe the different containers that make up your task.
    value:
      - name: "{{ name }}"
        image: "{{ image }}"
        repositoryCredentials:
          credentialsParameter: "{{ credentialsParameter }}"
        cpu: {{ cpu }}
        memory: {{ memory }}
        memoryReservation: {{ memoryReservation }}
        links: "{{ links }}"
        portMappings: "{{ portMappings }}"
        essential: {{ essential }}
        restartPolicy:
          enabled: {{ enabled }}
          ignoredExitCodes:
            - {{ ignoredExitCodes }}
          restartAttemptPeriod: {{ restartAttemptPeriod }}
        entryPoint: "{{ entryPoint }}"
        command: "{{ command }}"
        environment: "{{ environment }}"
        environmentFiles: "{{ environmentFiles }}"
        mountPoints: "{{ mountPoints }}"
        volumesFrom: "{{ volumesFrom }}"
        linuxParameters:
          capabilities:
            add:
              - "{{ add }}"
            drop:
              - "{{ drop }}"
          devices:
            - hostPath: "{{ hostPath }}"
              containerPath: "{{ containerPath }}"
              permissions: "{{ permissions }}"
          initProcessEnabled: {{ initProcessEnabled }}
          sharedMemorySize: {{ sharedMemorySize }}
          tmpfs:
            - containerPath: "{{ containerPath }}"
              size: {{ size }}
              mountOptions: "{{ mountOptions }}"
          maxSwap: {{ maxSwap }}
          swappiness: {{ swappiness }}
        secrets: "{{ secrets }}"
        dependsOn: "{{ dependsOn }}"
        startTimeout: {{ startTimeout }}
        stopTimeout: {{ stopTimeout }}
        versionConsistency: "{{ versionConsistency }}"
        hostname: "{{ hostname }}"
        user: "{{ user }}"
        workingDirectory: "{{ workingDirectory }}"
        disableNetworking: {{ disableNetworking }}
        privileged: {{ privileged }}
        readonlyRootFilesystem: {{ readonlyRootFilesystem }}
        dnsServers: "{{ dnsServers }}"
        dnsSearchDomains: "{{ dnsSearchDomains }}"
        extraHosts: "{{ extraHosts }}"
        dockerSecurityOptions: "{{ dockerSecurityOptions }}"
        interactive: {{ interactive }}
        pseudoTerminal: {{ pseudoTerminal }}
        dockerLabels: "{{ dockerLabels }}"
        ulimits: "{{ ulimits }}"
        logConfiguration:
          logDriver: "{{ logDriver }}"
          options: "{{ options }}"
          secretOptions:
            - name: "{{ name }}"
              valueFrom: "{{ valueFrom }}"
        healthCheck:
          command:
            - "{{ command }}"
          interval: {{ interval }}
          timeout: {{ timeout }}
          retries: {{ retries }}
          startPeriod: {{ startPeriod }}
        systemControls: "{{ systemControls }}"
        resourceRequirements: "{{ resourceRequirements }}"
        firelensConfiguration:
          type_: "{{ type_ }}"
          options: "{{ options }}"
        credentialSpecs: "{{ credentialSpecs }}"
  - name: volumes
    description: |
      A list of volume definitions in JSON format that containers in your task might use.
    value:
      - name: "{{ name }}"
        host:
          sourcePath: "{{ sourcePath }}"
        dockerVolumeConfiguration:
          scope: "{{ scope }}"
          autoprovision: {{ autoprovision }}
          driver: "{{ driver }}"
          driverOpts: "{{ driverOpts }}"
          labels: "{{ labels }}"
        efsVolumeConfiguration:
          fileSystemId: "{{ fileSystemId }}"
          rootDirectory: "{{ rootDirectory }}"
          transitEncryption: "{{ transitEncryption }}"
          transitEncryptionPort: {{ transitEncryptionPort }}
          authorizationConfig:
            accessPointId: "{{ accessPointId }}"
            iam: "{{ iam }}"
        s3filesVolumeConfiguration:
          fileSystemArn: "{{ fileSystemArn }}"
          rootDirectory: "{{ rootDirectory }}"
          transitEncryptionPort: {{ transitEncryptionPort }}
          accessPointArn: "{{ accessPointArn }}"
        fsxWindowsFileServerVolumeConfiguration:
          fileSystemId: "{{ fileSystemId }}"
          rootDirectory: "{{ rootDirectory }}"
          authorizationConfig:
            credentialsParameter: "{{ credentialsParameter }}"
            domain: "{{ domain }}"
        configuredAtLaunch: {{ configuredAtLaunch }}
  - name: placementConstraints
    description: |
      An array of placement constraint objects to use for the task. You can specify a maximum of 10 constraints for each task. This limit includes constraints in the task definition and those specified at runtime.
    value:
      - type_: "{{ type_ }}"
        expression: "{{ expression }}"
  - name: requiresCompatibilities
    value:
      - "{{ requiresCompatibilities }}"
    description: |
      The task launch type that Amazon ECS validates the task definition against. A client exception is returned if the task definition doesn't validate against the compatibilities specified. If no value is specified, the parameter is omitted from the response.
  - name: cpu
    value: "{{ cpu }}"
    description: |
      The number of CPU units used by the task. It can be expressed as an integer using CPU units (for example, 1024) or as a string using vCPUs (for example, 1 vCPU or 1 vcpu) in a task definition. String values are converted to an integer indicating the CPU units when the task definition is registered. Task-level CPU and memory parameters are ignored for Windows containers. We recommend specifying container-level resources for Windows containers. If you're using the EC2 launch type or external launch type, this field is optional. Supported values are between 128 CPU units (0.125 vCPUs) and 196608 CPU units (192 vCPUs). If you do not specify a value, the parameter is ignored. This field is required for Fargate. For information about the valid values, see Task size in the Amazon Elastic Container Service Developer Guide.
  - name: memory
    value: "{{ memory }}"
    description: |
      The amount of memory (in MiB) used by the task. It can be expressed as an integer using MiB (for example ,1024) or as a string using GB (for example, 1GB or 1 GB) in a task definition. String values are converted to an integer indicating the MiB when the task definition is registered. Task-level CPU and memory parameters are ignored for Windows containers. We recommend specifying container-level resources for Windows containers. If using the EC2 launch type, this field is optional. If using the Fargate launch type, this field is required and you must use one of the following values. This determines your range of supported values for the cpu parameter. The CPU units cannot be less than 1 vCPU when you use Windows containers on Fargate. 512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available cpu values: 256 (.25 vCPU) 1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available cpu values: 512 (.5 vCPU) 2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available cpu values: 1024 (1 vCPU) Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available cpu values: 2048 (2 vCPU) Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available cpu values: 4096 (4 vCPU) Between 16 GB and 60 GB in 4 GB increments - Available cpu values: 8192 (8 vCPU) This option requires Linux platform 1.4.0 or later. Between 32GB and 120 GB in 8 GB increments - Available cpu values: 16384 (16 vCPU) This option requires Linux platform 1.4.0 or later.
  - name: tags
    description: |
      The metadata that you apply to the task definition to help you categorize and organize them. Each tag consists of a key and an optional value. You define both of them. The following basic restrictions apply to tags: Maximum number of tags per resource - 50 For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length - 128 Unicode characters in UTF-8 Maximum value length - 256 Unicode characters in UTF-8 If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
    value:
      - key: "{{ key }}"
        value: "{{ value }}"
  - name: pidMode
    value: "{{ pidMode }}"
    description: |
      The process namespace to use for the containers in the task. The valid values are host or task. On Fargate for Linux containers, the only valid value is task. For example, monitoring sidecars might need pidMode to access information about other containers running in the same task. If host is specified, all containers within the tasks that specified the host PID mode on the same container instance share the same process namespace with the host Amazon EC2 instance. If task is specified, all containers within the specified task share the same process namespace. If no value is specified, the The default is a private namespace for each container. If the host PID mode is used, there's a heightened risk of undesired process namespace exposure. This parameter is not supported for Windows containers. This parameter is only supported for tasks that are hosted on Fargate if the tasks are using platform version 1.4.0 or later (Linux). This isn't supported for Windows containers on Fargate.
    valid_values: ['host', 'task']
  - name: ipcMode
    value: "{{ ipcMode }}"
    description: |
      The IPC resource namespace to use for the containers in the task. The valid values are host, task, or none. If host is specified, then all containers within the tasks that specified the host IPC mode on the same container instance share the same IPC resources with the host Amazon EC2 instance. If task is specified, all containers within the specified task share the same IPC resources. If none is specified, then IPC resources within the containers of a task are private and not shared with other containers in a task or on the container instance. If no value is specified, then the IPC resource namespace sharing depends on the Docker daemon setting on the container instance. If the host IPC mode is used, be aware that there is a heightened risk of undesired IPC namespace expose. If you are setting namespaced kernel parameters using systemControls for the containers in the task, the following will apply to your IPC resource namespace. For more information, see System Controls in the Amazon Elastic Container Service Developer Guide. For tasks that use the host IPC mode, IPC namespace related systemControls are not supported. For tasks that use the task IPC mode, IPC namespace related systemControls will apply to all containers within a task. This parameter is not supported for Windows containers or tasks run on Fargate.
    valid_values: ['host', 'task', 'none']
  - name: proxyConfiguration
    description: |
      The configuration details for the App Mesh proxy. For tasks hosted on Amazon EC2 instances, the container instances require at least version 1.26.0 of the container agent and at least version 1.26.0-1 of the ecs-init package to use a proxy configuration. If your container instances are launched from the Amazon ECS-optimized AMI version 20190301 or later, then they contain the required versions of the container agent and ecs-init. For more information, see Amazon ECS-optimized AMI versions in the Amazon Elastic Container Service Developer Guide.
    value:
      type_: "{{ type_ }}"
      containerName: "{{ containerName }}"
      properties_:
        - name: "{{ name }}"
          value: "{{ value }}"
  - name: inferenceAccelerators
    description: |
      The Elastic Inference accelerators to use for the containers in the task.
    value:
      - deviceName: "{{ deviceName }}"
        deviceType: "{{ deviceType }}"
  - name: ephemeralStorage
    description: |
      The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate. For more information, see Using data volumes in tasks in the Amazon ECS Developer Guide. For tasks using the Fargate launch type, the task requires the following platforms: Linux platform version 1.4.0 or later. Windows platform version 1.0.0 or later.
    value:
      sizeInGiB: {{ sizeInGiB }}
  - name: runtimePlatform
    description: |
      The operating system that your tasks definitions run on.
    value:
      cpuArchitecture: "{{ cpuArchitecture }}"
      operatingSystemFamily: "{{ operatingSystemFamily }}"
  - name: enableFaultInjection
    value: {{ enableFaultInjection }}
    description: |
      Enables fault injection when you register your task definition and allows for fault injection requests to be accepted from the task's containers. The default value is false.
`})})]}),"\n",(0,s.jsxs)(i.h2,{id:"delete-examples",children:[(0,s.jsx)(i.code,{children:"DELETE"})," examples"]}),"\n",(0,s.jsxs)(d.A,{defaultValue:"delete_task_definitions",values:[{label:"delete_task_definitions",value:"delete_task_definitions"},{label:"deregister_task_definition",value:"deregister_task_definition"}],children:[(0,s.jsxs)(c.A,{value:"delete_task_definitions",children:[(0,s.jsx)(i.p,{children:"Deletes one or more task definitions. You must deregister a task definition revision before you delete it. For more information, see DeregisterTaskDefinition. When you delete a task definition revision, it is immediately transitions from the INACTIVE to DELETE_IN_PROGRESS. Existing tasks and services that reference a DELETE_IN_PROGRESS task definition revision continue to run without disruption. Existing services that reference a DELETE_IN_PROGRESS task definition revision can still scale up or down by modifying the service's desired count. You can't use a DELETE_IN_PROGRESS task definition revision to run new tasks or create new services. You also can't update an existing service to reference a DELETE_IN_PROGRESS task definition revision. A task definition revision will stay in DELETE_IN_PROGRESS status until all the associated tasks and services have been terminated. When you delete all INACTIVE task definition revisions, the task definition name is not displayed in the console and not returned in the API. If a task definition revisions are in the DELETE_IN_PROGRESS state, the task definition name is displayed in the console and returned in the API. The task definition name is retained by Amazon ECS and the revision is incremented the next time you create a task definition with that name."}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sql",children:"DELETE FROM aws.ecs.task_definitions\nWHERE region = '{{ region }}' --required\n;\n"})})]}),(0,s.jsxs)(c.A,{value:"deregister_task_definition",children:[(0,s.jsx)(i.p,{children:"Deregisters the specified task definition by family and revision. Upon deregistration, the task definition is marked as INACTIVE. Existing tasks and services that reference an INACTIVE task definition continue to run without disruption. Existing services that reference an INACTIVE task definition can still scale up or down by modifying the service's desired count. If you want to delete a task definition revision, you must first deregister the task definition revision. You can't use an INACTIVE task definition to run new tasks or create new services, and you can't update an existing service to reference an INACTIVE task definition. However, there may be up to a 10-minute window following deregistration where these restrictions have not yet taken effect. At this time, INACTIVE task definitions remain discoverable in your account indefinitely. However, this behavior is subject to change in the future. We don't recommend that you rely on INACTIVE task definitions persisting beyond the lifecycle of any associated tasks and services. You must deregister a task definition revision before you delete it. For more information, see DeleteTaskDefinitions."}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sql",children:"DELETE FROM aws.ecs.task_definitions\nWHERE region = '{{ region }}' --required\n;\n"})})]})]})]})}function p(e={}){let{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}}}]);