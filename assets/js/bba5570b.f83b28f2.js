"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["920948"],{65122(e,i,t){t.r(i),t.d(i,{metadata:()=>s,default:()=>j,frontMatter:()=>l,contentTitle:()=>m,toc:()=>u,assets:()=>h});var s=JSON.parse('{"id":"services/batch/job_definitions/index","title":"job_definitions","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/batch/job_definitions/index.md","sourceDirName":"services/batch/job_definitions","slug":"/services/batch/job_definitions/","permalink":"/services/batch/job_definitions/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"job_definitions","hide_title":false,"hide_table_of_contents":false,"keywords":["job_definitions","batch","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"consumable_resources","permalink":"/services/batch/consumable_resources/"},"next":{"title":"job_queue_snapshots","permalink":"/services/batch/job_queue_snapshots/"}}'),r=t(474848),n=t(28453),o=t(97362),a=t(897272),d=t(413554),c=t(541647);let l={title:"job_definitions",hide_title:!1,hide_table_of_contents:!1,keywords:["job_definitions","batch","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},m,h={},u=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function p(e){let i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.p,{children:["Creates, updates, deletes, gets or lists a ",(0,r.jsx)("code",{children:"job_definitions"})," resource."]}),"\n",(0,r.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Name"})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"job_definitions"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Type"})}),(0,r.jsx)("td",{children:"Resource"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Id"})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"aws.batch.job_definitions"})})]})]})}),"\n",(0,r.jsx)(i.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(i.p,{children:["The following fields are returned by ",(0,r.jsx)(i.code,{children:"SELECT"})," queries:"]}),"\n",(0,r.jsx)(d.A,{defaultValue:"describe_job_definitions",values:[{label:"describe_job_definitions",value:"describe_job_definitions"}],children:(0,r.jsx)(c.A,{value:"describe_job_definitions",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"consumableResourceProperties"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"Contains a list of consumable resources required by the job."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"containerOrchestrationType"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The orchestration type of the compute environment. The valid values are ECS (default) or EKS. (ECS, EKS)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"containerProperties"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"An object with properties specific to Amazon ECS-based jobs. When containerProperties is used in the job definition, it can't be used in addition to eksProperties, ecsProperties, or nodeProperties."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"ecsProperties"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"An object that contains the properties for the Amazon ECS resources of a job.When ecsProperties is used in the job definition, it can't be used in addition to containerProperties, eksProperties, or nodeProperties."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"eksProperties"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"An object with properties that are specific to Amazon EKS-based jobs. When eksProperties is used in the job definition, it can't be used in addition to containerProperties, ecsProperties, or nodeProperties."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"jobDefinitionArn"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The Amazon Resource Name (ARN) for the job definition."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"jobDefinitionName"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The name of the job definition."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"nodeProperties"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"An object with properties that are specific to multi-node parallel jobs. When nodeProperties is used in the job definition, it can't be used in addition to containerProperties, ecsProperties, or eksProperties. If the job runs on Fargate resources, don't specify nodeProperties. Use containerProperties instead."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"parameters"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"Default parameters or parameter substitution placeholders that are set in the job definition. Parameters are specified as a key-value pair mapping. Parameters in a SubmitJob request override any corresponding parameter defaults from the job definition. For more information about specifying parameters, see Job definition parameters in the Batch User Guide."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"platformCapabilities"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"array"})}),(0,r.jsx)("td",{children:"The platform capabilities required by the job definition. If no value is specified, it defaults to EC2. Jobs run on Fargate resources specify FARGATE."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"propagateTags"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"boolean"})}),(0,r.jsx)("td",{children:"Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the tasks when the tasks are created. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the FAILED state."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"retryStrategy"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"The retry strategy to use for failed jobs that are submitted with this job definition."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"revision"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"integer"})}),(0,r.jsx)("td",{children:"The revision of the job definition."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"schedulingPriority"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"integer"})}),(0,r.jsx)("td",{children:"The scheduling priority of the job definition. This only affects jobs in job queues with a fair-share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"status"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The status of the job definition."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"tags"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"The tags that are applied to the job definition."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"timeout"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"The timeout time for jobs that are submitted with this job definition. After the amount of time you specify passes, Batch terminates your jobs if they aren't finished."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"type_"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The type of job definition. It's either container or multinode. If the job is run on Fargate resources, then multinode isn't supported. For more information about multi-node parallel jobs, see Creating a multi-node parallel job definition in the Batch User Guide."})]})]})]})})}),"\n",(0,r.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(i.p,{children:"The following methods are available for this resource:"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Accessible by"}),(0,r.jsx)("th",{children:"Required Params"}),(0,r.jsx)("th",{children:"Optional Params"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#describe_job_definitions",children:(0,r.jsx)(o.A,{code:"describe_job_definitions"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"select"})}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Describes a list of job definitions. You can specify a status (such as ACTIVE) to only return job definitions that match that status."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#register_job_definition",children:(0,r.jsx)(o.A,{code:"register_job_definition"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"insert"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})}),", ",(0,r.jsx)("a",{href:"#parameter-jobDefinitionName",children:(0,r.jsx)("code",{children:"jobDefinitionName"})}),", ",(0,r.jsx)("a",{href:"#parameter-type",children:(0,r.jsx)("code",{children:"type"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Registers an Batch job definition."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#deregister_job_definition",children:(0,r.jsx)(o.A,{code:"deregister_job_definition"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"delete"})}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Deregisters an Batch job definition. Job definitions are permanently deleted after 180 days."})]})]})]}),"\n",(0,r.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(i.p,{children:["Parameters can be passed in the ",(0,r.jsx)(i.code,{children:"WHERE"})," clause of a query. Check the ",(0,r.jsx)(i.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{id:"parameter-region",children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"region"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,r.jsxs)(i.h2,{id:"select-examples",children:[(0,r.jsx)(i.code,{children:"SELECT"})," examples"]}),"\n",(0,r.jsx)(d.A,{defaultValue:"describe_job_definitions",values:[{label:"describe_job_definitions",value:"describe_job_definitions"}],children:(0,r.jsxs)(c.A,{value:"describe_job_definitions",children:[(0,r.jsx)(i.p,{children:"Describes a list of job definitions. You can specify a status (such as ACTIVE) to only return job definitions that match that status."}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"SELECT\nconsumableResourceProperties,\ncontainerOrchestrationType,\ncontainerProperties,\necsProperties,\neksProperties,\njobDefinitionArn,\njobDefinitionName,\nnodeProperties,\nparameters,\nplatformCapabilities,\npropagateTags,\nretryStrategy,\nrevision,\nschedulingPriority,\nstatus,\ntags,\ntimeout,\ntype_\nFROM aws.batch.job_definitions\nWHERE region = '{{ region }}' -- required\n;\n"})})]})}),"\n",(0,r.jsxs)(i.h2,{id:"insert-examples",children:[(0,r.jsx)(i.code,{children:"INSERT"})," examples"]}),"\n",(0,r.jsxs)(d.A,{defaultValue:"register_job_definition",values:[{label:"register_job_definition",value:"register_job_definition"},{label:"Manifest",value:"manifest"}],children:[(0,r.jsxs)(c.A,{value:"register_job_definition",children:[(0,r.jsx)(i.p,{children:"Registers an Batch job definition."}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"INSERT INTO aws.batch.job_definitions (\njobDefinitionName,\ntype,\nparameters,\nschedulingPriority,\ncontainerProperties,\nnodeProperties,\nretryStrategy,\npropagateTags,\ntimeout,\ntags,\nplatformCapabilities,\neksProperties,\necsProperties,\nconsumableResourceProperties,\nregion\n)\nSELECT \n'{{ jobDefinitionName }}' /* required */,\n'{{ type }}' /* required */,\n'{{ parameters }}',\n{{ schedulingPriority }},\n'{{ containerProperties }}',\n'{{ nodeProperties }}',\n'{{ retryStrategy }}',\n{{ propagateTags }},\n'{{ timeout }}',\n'{{ tags }}',\n'{{ platformCapabilities }}',\n'{{ eksProperties }}',\n'{{ ecsProperties }}',\n'{{ consumableResourceProperties }}',\n'{{ region }}'\nRETURNING\njobDefinitionArn,\njobDefinitionName,\nrevision\n;\n"})})]}),(0,r.jsx)(c.A,{value:"manifest",children:(0,r.jsx)(a.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: job_definitions
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the job_definitions resource.
  - name: jobDefinitionName
    value: "{{ jobDefinitionName }}"
  - name: type
    value: "{{ type }}"
    valid_values: ['container', 'multinode']
  - name: parameters
    value: "{{ parameters }}"
  - name: schedulingPriority
    value: {{ schedulingPriority }}
  - name: containerProperties
    description: |
      Container properties are used for Amazon ECS based job definitions. These properties to describe the container that's launched as part of a job.
    value:
      image: "{{ image }}"
      vcpus: {{ vcpus }}
      memory: {{ memory }}
      command:
        - "{{ command }}"
      jobRoleArn: "{{ jobRoleArn }}"
      executionRoleArn: "{{ executionRoleArn }}"
      volumes:
        - host:
            sourcePath: "{{ sourcePath }}"
          name: "{{ name }}"
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
      environment:
        - name: "{{ name }}"
          value: "{{ value }}"
      mountPoints:
        - containerPath: "{{ containerPath }}"
          readOnly_: {{ readOnly_ }}
          sourceVolume: "{{ sourceVolume }}"
      readonlyRootFilesystem: {{ readonlyRootFilesystem }}
      privileged: {{ privileged }}
      ulimits:
        - hardLimit: {{ hardLimit }}
          name: "{{ name }}"
          softLimit: {{ softLimit }}
      user: "{{ user }}"
      instanceType: "{{ instanceType }}"
      resourceRequirements:
        - value: "{{ value }}"
          type_: "{{ type_ }}"
      linuxParameters:
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
      logConfiguration:
        logDriver: "{{ logDriver }}"
        options: "{{ options }}"
        secretOptions:
          - name: "{{ name }}"
            valueFrom: "{{ valueFrom }}"
      secrets:
        - name: "{{ name }}"
          valueFrom: "{{ valueFrom }}"
      networkConfiguration:
        assignPublicIp: "{{ assignPublicIp }}"
      fargatePlatformConfiguration:
        platformVersion: "{{ platformVersion }}"
      enableExecuteCommand: {{ enableExecuteCommand }}
      ephemeralStorage:
        sizeInGiB: {{ sizeInGiB }}
      runtimePlatform:
        operatingSystemFamily: "{{ operatingSystemFamily }}"
        cpuArchitecture: "{{ cpuArchitecture }}"
      repositoryCredentials:
        credentialsParameter: "{{ credentialsParameter }}"
  - name: nodeProperties
    description: |
      An object that represents the node properties of a multi-node parallel job. Node properties can't be specified for Amazon EKS based job definitions.
    value:
      numNodes: {{ numNodes }}
      mainNode: {{ mainNode }}
      nodeRangeProperties:
        - targetNodes: "{{ targetNodes }}"
          container:
            image: "{{ image }}"
            vcpus: {{ vcpus }}
            memory: {{ memory }}
            command:
              - "{{ command }}"
            jobRoleArn: "{{ jobRoleArn }}"
            executionRoleArn: "{{ executionRoleArn }}"
            volumes:
              - host:
                  sourcePath: "{{ sourcePath }}"
                name: "{{ name }}"
                efsVolumeConfiguration:
                  fileSystemId: "{{ fileSystemId }}"
                  rootDirectory: "{{ rootDirectory }}"
                  transitEncryption: "{{ transitEncryption }}"
                  transitEncryptionPort: {{ transitEncryptionPort }}
                  authorizationConfig: "{{ authorizationConfig }}"
                s3filesVolumeConfiguration:
                  fileSystemArn: "{{ fileSystemArn }}"
                  rootDirectory: "{{ rootDirectory }}"
                  transitEncryptionPort: {{ transitEncryptionPort }}
                  accessPointArn: "{{ accessPointArn }}"
            environment:
              - name: "{{ name }}"
                value: "{{ value }}"
            mountPoints:
              - containerPath: "{{ containerPath }}"
                readOnly_: {{ readOnly_ }}
                sourceVolume: "{{ sourceVolume }}"
            readonlyRootFilesystem: {{ readonlyRootFilesystem }}
            privileged: {{ privileged }}
            ulimits:
              - hardLimit: {{ hardLimit }}
                name: "{{ name }}"
                softLimit: {{ softLimit }}
            user: "{{ user }}"
            instanceType: "{{ instanceType }}"
            resourceRequirements:
              - value: "{{ value }}"
                type_: "{{ type_ }}"
            linuxParameters:
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
            logConfiguration:
              logDriver: "{{ logDriver }}"
              options: "{{ options }}"
              secretOptions:
                - name: "{{ name }}"
                  valueFrom: "{{ valueFrom }}"
            secrets:
              - name: "{{ name }}"
                valueFrom: "{{ valueFrom }}"
            networkConfiguration:
              assignPublicIp: "{{ assignPublicIp }}"
            fargatePlatformConfiguration:
              platformVersion: "{{ platformVersion }}"
            enableExecuteCommand: {{ enableExecuteCommand }}
            ephemeralStorage:
              sizeInGiB: {{ sizeInGiB }}
            runtimePlatform:
              operatingSystemFamily: "{{ operatingSystemFamily }}"
              cpuArchitecture: "{{ cpuArchitecture }}"
            repositoryCredentials:
              credentialsParameter: "{{ credentialsParameter }}"
          instanceTypes: "{{ instanceTypes }}"
          ecsProperties:
            taskProperties:
              - containers: "{{ containers }}"
                ephemeralStorage:
                  sizeInGiB: {{ sizeInGiB }}
                executionRoleArn: "{{ executionRoleArn }}"
                platformVersion: "{{ platformVersion }}"
                ipcMode: "{{ ipcMode }}"
                taskRoleArn: "{{ taskRoleArn }}"
                pidMode: "{{ pidMode }}"
                networkConfiguration:
                  assignPublicIp: "{{ assignPublicIp }}"
                runtimePlatform:
                  operatingSystemFamily: "{{ operatingSystemFamily }}"
                  cpuArchitecture: "{{ cpuArchitecture }}"
                volumes: "{{ volumes }}"
                enableExecuteCommand: {{ enableExecuteCommand }}
          eksProperties:
            podProperties:
              serviceAccountName: "{{ serviceAccountName }}"
              hostNetwork: {{ hostNetwork }}
              dnsPolicy: "{{ dnsPolicy }}"
              imagePullSecrets:
                - name: "{{ name }}"
              containers:
                - name: "{{ name }}"
                  image: "{{ image }}"
                  imagePullPolicy: "{{ imagePullPolicy }}"
                  command: "{{ command }}"
                  args: "{{ args }}"
                  env: "{{ env }}"
                  resources:
                    limits: "{{ limits }}"
                    requests: "{{ requests }}"
                  volumeMounts: "{{ volumeMounts }}"
                  securityContext:
                    runAsUser: {{ runAsUser }}
                    runAsGroup: {{ runAsGroup }}
                    privileged: {{ privileged }}
                    allowPrivilegeEscalation: {{ allowPrivilegeEscalation }}
                    readOnlyRootFilesystem: {{ readOnlyRootFilesystem }}
                    runAsNonRoot: {{ runAsNonRoot }}
              initContainers:
                - name: "{{ name }}"
                  image: "{{ image }}"
                  imagePullPolicy: "{{ imagePullPolicy }}"
                  command: "{{ command }}"
                  args: "{{ args }}"
                  env: "{{ env }}"
                  resources:
                    limits: "{{ limits }}"
                    requests: "{{ requests }}"
                  volumeMounts: "{{ volumeMounts }}"
                  securityContext:
                    runAsUser: {{ runAsUser }}
                    runAsGroup: {{ runAsGroup }}
                    privileged: {{ privileged }}
                    allowPrivilegeEscalation: {{ allowPrivilegeEscalation }}
                    readOnlyRootFilesystem: {{ readOnlyRootFilesystem }}
                    runAsNonRoot: {{ runAsNonRoot }}
              volumes:
                - name: "{{ name }}"
                  hostPath:
                    path: "{{ path }}"
                  emptyDir:
                    medium: "{{ medium }}"
                    sizeLimit: "{{ sizeLimit }}"
                  secret:
                    secretName: "{{ secretName }}"
                    optional: {{ optional }}
                  persistentVolumeClaim:
                    claimName: "{{ claimName }}"
                    readOnly_: {{ readOnly_ }}
              metadata:
                labels: "{{ labels }}"
                annotations: "{{ annotations }}"
                namespace: "{{ namespace }}"
              shareProcessNamespace: {{ shareProcessNamespace }}
          consumableResourceProperties:
            consumableResourceList:
              - consumableResource: "{{ consumableResource }}"
                quantity: {{ quantity }}
  - name: retryStrategy
    description: |
      The retry strategy that's associated with a job. For more information, see Automated job retries in the Batch User Guide.
    value:
      attempts: {{ attempts }}
      evaluateOnExit:
        - onStatusReason: "{{ onStatusReason }}"
          onReason: "{{ onReason }}"
          onExitCode: "{{ onExitCode }}"
          action: "{{ action }}"
  - name: propagateTags
    value: {{ propagateTags }}
  - name: timeout
    description: |
      An object that represents a job timeout configuration.
    value:
      attemptDurationSeconds: {{ attemptDurationSeconds }}
  - name: tags
    value: "{{ tags }}"
  - name: platformCapabilities
    value:
      - "{{ platformCapabilities }}"
  - name: eksProperties
    description: |
      An object that contains the properties for the Kubernetes resources of a job.
    value:
      podProperties:
        serviceAccountName: "{{ serviceAccountName }}"
        hostNetwork: {{ hostNetwork }}
        dnsPolicy: "{{ dnsPolicy }}"
        imagePullSecrets:
          - name: "{{ name }}"
        containers:
          - name: "{{ name }}"
            image: "{{ image }}"
            imagePullPolicy: "{{ imagePullPolicy }}"
            command: "{{ command }}"
            args: "{{ args }}"
            env: "{{ env }}"
            resources:
              limits: "{{ limits }}"
              requests: "{{ requests }}"
            volumeMounts: "{{ volumeMounts }}"
            securityContext:
              runAsUser: {{ runAsUser }}
              runAsGroup: {{ runAsGroup }}
              privileged: {{ privileged }}
              allowPrivilegeEscalation: {{ allowPrivilegeEscalation }}
              readOnlyRootFilesystem: {{ readOnlyRootFilesystem }}
              runAsNonRoot: {{ runAsNonRoot }}
        initContainers:
          - name: "{{ name }}"
            image: "{{ image }}"
            imagePullPolicy: "{{ imagePullPolicy }}"
            command: "{{ command }}"
            args: "{{ args }}"
            env: "{{ env }}"
            resources:
              limits: "{{ limits }}"
              requests: "{{ requests }}"
            volumeMounts: "{{ volumeMounts }}"
            securityContext:
              runAsUser: {{ runAsUser }}
              runAsGroup: {{ runAsGroup }}
              privileged: {{ privileged }}
              allowPrivilegeEscalation: {{ allowPrivilegeEscalation }}
              readOnlyRootFilesystem: {{ readOnlyRootFilesystem }}
              runAsNonRoot: {{ runAsNonRoot }}
        volumes:
          - name: "{{ name }}"
            hostPath:
              path: "{{ path }}"
            emptyDir:
              medium: "{{ medium }}"
              sizeLimit: "{{ sizeLimit }}"
            secret:
              secretName: "{{ secretName }}"
              optional: {{ optional }}
            persistentVolumeClaim:
              claimName: "{{ claimName }}"
              readOnly_: {{ readOnly_ }}
        metadata:
          labels: "{{ labels }}"
          annotations: "{{ annotations }}"
          namespace: "{{ namespace }}"
        shareProcessNamespace: {{ shareProcessNamespace }}
  - name: ecsProperties
    description: |
      An object that contains the properties for the Amazon ECS resources of a job.
    value:
      taskProperties:
        - containers: "{{ containers }}"
          ephemeralStorage:
            sizeInGiB: {{ sizeInGiB }}
          executionRoleArn: "{{ executionRoleArn }}"
          platformVersion: "{{ platformVersion }}"
          ipcMode: "{{ ipcMode }}"
          taskRoleArn: "{{ taskRoleArn }}"
          pidMode: "{{ pidMode }}"
          networkConfiguration:
            assignPublicIp: "{{ assignPublicIp }}"
          runtimePlatform:
            operatingSystemFamily: "{{ operatingSystemFamily }}"
            cpuArchitecture: "{{ cpuArchitecture }}"
          volumes: "{{ volumes }}"
          enableExecuteCommand: {{ enableExecuteCommand }}
  - name: consumableResourceProperties
    description: |
      Contains a list of consumable resources required by a job.
    value:
      consumableResourceList:
        - consumableResource: "{{ consumableResource }}"
          quantity: {{ quantity }}
`})})]}),"\n",(0,r.jsxs)(i.h2,{id:"delete-examples",children:[(0,r.jsx)(i.code,{children:"DELETE"})," examples"]}),"\n",(0,r.jsx)(d.A,{defaultValue:"deregister_job_definition",values:[{label:"deregister_job_definition",value:"deregister_job_definition"}],children:(0,r.jsxs)(c.A,{value:"deregister_job_definition",children:[(0,r.jsx)(i.p,{children:"Deregisters an Batch job definition. Job definitions are permanently deleted after 180 days."}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"DELETE FROM aws.batch.job_definitions\nWHERE region = '{{ region }}' --required\n;\n"})})]})})]})}function j(e={}){let{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}}}]);