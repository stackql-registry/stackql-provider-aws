--- 
title: job_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - job_definitions
  - batch
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>job_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.batch.job_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_job_definitions"
    values={[
        { label: 'describe_job_definitions', value: 'describe_job_definitions' }
    ]}
>
<TabItem value="describe_job_definitions">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="consumable_resource_properties" /></td>
    <td><code>object</code></td>
    <td>Contains a list of consumable resources required by the job.</td>
</tr>
<tr>
    <td><CopyableCode code="container_orchestration_type" /></td>
    <td><code>string</code></td>
    <td>The orchestration type of the compute environment. The valid values are ECS (default) or EKS. (ECS, EKS)</td>
</tr>
<tr>
    <td><CopyableCode code="container_properties" /></td>
    <td><code>object</code></td>
    <td>An object with properties specific to Amazon ECS-based jobs. When containerProperties is used in the job definition, it can't be used in addition to eksProperties, ecsProperties, or nodeProperties.</td>
</tr>
<tr>
    <td><CopyableCode code="ecs_properties" /></td>
    <td><code>object</code></td>
    <td>An object that contains the properties for the Amazon ECS resources of a job.When ecsProperties is used in the job definition, it can't be used in addition to containerProperties, eksProperties, or nodeProperties.</td>
</tr>
<tr>
    <td><CopyableCode code="eks_properties" /></td>
    <td><code>object</code></td>
    <td>An object with properties that are specific to Amazon EKS-based jobs. When eksProperties is used in the job definition, it can't be used in addition to containerProperties, ecsProperties, or nodeProperties.</td>
</tr>
<tr>
    <td><CopyableCode code="job_definition_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the job definition.</td>
</tr>
<tr>
    <td><CopyableCode code="job_definition_name" /></td>
    <td><code>string</code></td>
    <td>The name of the job definition.</td>
</tr>
<tr>
    <td><CopyableCode code="node_properties" /></td>
    <td><code>object</code></td>
    <td>An object with properties that are specific to multi-node parallel jobs. When nodeProperties is used in the job definition, it can't be used in addition to containerProperties, ecsProperties, or eksProperties. If the job runs on Fargate resources, don't specify nodeProperties. Use containerProperties instead.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>Default parameters or parameter substitution placeholders that are set in the job definition. Parameters are specified as a key-value pair mapping. Parameters in a SubmitJob request override any corresponding parameter defaults from the job definition. For more information about specifying parameters, see Job definition parameters in the Batch User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="platform_capabilities" /></td>
    <td><code>array</code></td>
    <td>The platform capabilities required by the job definition. If no value is specified, it defaults to EC2. Jobs run on Fargate resources specify FARGATE.</td>
</tr>
<tr>
    <td><CopyableCode code="propagate_tags" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the tasks when the tasks are created. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the FAILED state.</td>
</tr>
<tr>
    <td><CopyableCode code="retry_strategy" /></td>
    <td><code>object</code></td>
    <td>The retry strategy to use for failed jobs that are submitted with this job definition.</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>integer</code></td>
    <td>The revision of the job definition.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduling_priority" /></td>
    <td><code>integer</code></td>
    <td>The scheduling priority of the job definition. This only affects jobs in job queues with a fair-share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the job definition.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags that are applied to the job definition.</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>object</code></td>
    <td>The timeout time for jobs that are submitted with this job definition. After the amount of time you specify passes, Batch terminates your jobs if they aren't finished.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of job definition. It's either container or multinode. If the job is run on Fargate resources, then multinode isn't supported. For more information about multi-node parallel jobs, see Creating a multi-node parallel job definition in the Batch User Guide.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#describe_job_definitions"><CopyableCode code="describe_job_definitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a list of job definitions. You can specify a status (such as ACTIVE) to only return job definitions that match that status.</td>
</tr>
<tr>
    <td><a href="#register_job_definition"><CopyableCode code="register_job_definition" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-jobDefinitionName"><code>jobDefinitionName</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Registers an Batch job definition.</td>
</tr>
<tr>
    <td><a href="#deregister_job_definition"><CopyableCode code="deregister_job_definition" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deregisters an Batch job definition. Job definitions are permanently deleted after 180 days.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_job_definitions"
    values={[
        { label: 'describe_job_definitions', value: 'describe_job_definitions' }
    ]}
>
<TabItem value="describe_job_definitions">

Describes a list of job definitions. You can specify a status (such as ACTIVE) to only return job definitions that match that status.

```sql
SELECT
consumable_resource_properties,
container_orchestration_type,
container_properties,
ecs_properties,
eks_properties,
job_definition_arn,
job_definition_name,
node_properties,
parameters,
platform_capabilities,
propagate_tags,
retry_strategy,
revision,
scheduling_priority,
status,
tags,
timeout,
type_
FROM aws.batch.job_definitions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_job_definition"
    values={[
        { label: 'register_job_definition', value: 'register_job_definition' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_job_definition">

Registers an Batch job definition.

```sql
INSERT INTO aws.batch.job_definitions (
jobDefinitionName,
type,
parameters,
schedulingPriority,
containerProperties,
nodeProperties,
retryStrategy,
propagateTags,
timeout,
tags,
platformCapabilities,
eksProperties,
ecsProperties,
consumableResourceProperties,
region
)
SELECT 
'{{ jobDefinitionName }}' /* required */,
'{{ type }}' /* required */,
'{{ parameters }}',
{{ schedulingPriority }},
'{{ containerProperties }}',
'{{ nodeProperties }}',
'{{ retryStrategy }}',
{{ propagateTags }},
'{{ timeout }}',
'{{ tags }}',
'{{ platformCapabilities }}',
'{{ eksProperties }}',
'{{ ecsProperties }}',
'{{ consumableResourceProperties }}',
'{{ region }}'
RETURNING
job_definition_arn,
job_definition_name,
revision
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
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
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_job_definition"
    values={[
        { label: 'deregister_job_definition', value: 'deregister_job_definition' }
    ]}
>
<TabItem value="deregister_job_definition">

Deregisters an Batch job definition. Job definitions are permanently deleted after 180 days.

```sql
DELETE FROM aws.batch.job_definitions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
