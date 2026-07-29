--- 
title: daemon_task_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - daemon_task_definitions
  - ecs
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

Creates, updates, deletes, gets or lists a <code>daemon_task_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="daemon_task_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecs.daemon_task_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_daemon_task_definition"
    values={[
        { label: 'describe_daemon_task_definition', value: 'describe_daemon_task_definition' },
        { label: 'list_daemon_task_definitions', value: 'list_daemon_task_definitions' }
    ]}
>
<TabItem value="describe_daemon_task_definition">

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
    <td><CopyableCode code="container_definitions" /></td>
    <td><code>array</code></td>
    <td>A list of container definitions in JSON format that describe the containers that make up the daemon task.</td>
</tr>
<tr>
    <td><CopyableCode code="cpu" /></td>
    <td><code>string</code></td>
    <td>The number of CPU units used by the daemon task.</td>
</tr>
<tr>
    <td><CopyableCode code="daemon_task_definition_arn" /></td>
    <td><code>string</code></td>
    <td>The full Amazon Resource Name (ARN) of the daemon task definition.</td>
</tr>
<tr>
    <td><CopyableCode code="delete_requested_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp for the time when the daemon task definition delete was requested.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the task execution role that grants the Amazon ECS container agent permission to make Amazon Web Services API calls on your behalf.</td>
</tr>
<tr>
    <td><CopyableCode code="family" /></td>
    <td><code>string</code></td>
    <td>The name of a family that this daemon task definition is registered to.</td>
</tr>
<tr>
    <td><CopyableCode code="memory" /></td>
    <td><code>string</code></td>
    <td>The amount of memory (in MiB) used by the daemon task.</td>
</tr>
<tr>
    <td><CopyableCode code="registered_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp for the time when the daemon task definition was registered.</td>
</tr>
<tr>
    <td><CopyableCode code="registered_by" /></td>
    <td><code>string</code></td>
    <td>The principal that registered the daemon task definition.</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>integer</code></td>
    <td>The revision of the daemon task in a particular family. The revision is a version number of a daemon task definition in a family. When you register a daemon task definition for the first time, the revision is 1. Each time that you register a new revision of a daemon task definition in the same family, the revision value always increases by one.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the daemon task definition. The valid values are ACTIVE, DELETE_IN_PROGRESS, and DELETED. (ACTIVE, DELETE_IN_PROGRESS, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="task_role_arn" /></td>
    <td><code>string</code></td>
    <td>The short name or full Amazon Resource Name (ARN) of the IAM role that grants containers in the daemon task permission to call Amazon Web Services APIs on your behalf.</td>
</tr>
<tr>
    <td><CopyableCode code="volumes" /></td>
    <td><code>array</code></td>
    <td>The list of data volume definitions for the daemon task.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_daemon_task_definitions">

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
    <td><CopyableCode code="daemon_task_definitions" /></td>
    <td><code>array</code></td>
    <td>The list of daemon task definition summaries.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The nextToken value to include in a future ListDaemonTaskDefinitions request. When the results of a ListDaemonTaskDefinitions request exceed maxResults, this value can be used to retrieve the next page of results.</td>
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
    <td><a href="#describe_daemon_task_definition"><CopyableCode code="describe_daemon_task_definition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a daemon task definition. You can specify a family and revision to find information about a specific daemon task definition, or you can simply specify the family to find the latest ACTIVE revision in that family.</td>
</tr>
<tr>
    <td><a href="#list_daemon_task_definitions"><CopyableCode code="list_daemon_task_definitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of daemon task definitions that are registered to your account. You can filter the results by family name, status, or both to find daemon task definitions that match your criteria.</td>
</tr>
<tr>
    <td><a href="#register_daemon_task_definition"><CopyableCode code="register_daemon_task_definition" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-family"><code>family</code></a>, <a href="#parameter-containerDefinitions"><code>containerDefinitions</code></a></td>
    <td></td>
    <td>Registers a new daemon task definition from the supplied family and containerDefinitions. Optionally, you can add data volumes to your containers with the volumes parameter. For more information, see Daemon task definitions in the Amazon Elastic Container Service Developer Guide. A daemon task definition is a template that describes the containers that form a daemon. Daemons deploy cross-cutting software agents such as security monitoring, telemetry, and logging across your Amazon ECS infrastructure. Each time you call RegisterDaemonTaskDefinition, a new revision of the daemon task definition is created. You can't modify a revision after you register it.</td>
</tr>
<tr>
    <td><a href="#delete_daemon_task_definition"><CopyableCode code="delete_daemon_task_definition" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified daemon task definition. After a daemon task definition is deleted, no new daemons can be created using this definition. Existing daemons that reference the deleted daemon task definition continue to run. A daemon task definition must be in an ACTIVE state to be deleted.</td>
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
    defaultValue="describe_daemon_task_definition"
    values={[
        { label: 'describe_daemon_task_definition', value: 'describe_daemon_task_definition' },
        { label: 'list_daemon_task_definitions', value: 'list_daemon_task_definitions' }
    ]}
>
<TabItem value="describe_daemon_task_definition">

Describes a daemon task definition. You can specify a family and revision to find information about a specific daemon task definition, or you can simply specify the family to find the latest ACTIVE revision in that family.

```sql
SELECT
container_definitions,
cpu,
daemon_task_definition_arn,
delete_requested_at,
execution_role_arn,
family,
memory,
registered_at,
registered_by,
revision,
status,
task_role_arn,
volumes
FROM aws.ecs.daemon_task_definitions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_daemon_task_definitions">

Returns a list of daemon task definitions that are registered to your account. You can filter the results by family name, status, or both to find daemon task definitions that match your criteria.

```sql
SELECT
daemon_task_definitions,
next_token
FROM aws.ecs.daemon_task_definitions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_daemon_task_definition"
    values={[
        { label: 'register_daemon_task_definition', value: 'register_daemon_task_definition' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_daemon_task_definition">

Registers a new daemon task definition from the supplied family and containerDefinitions. Optionally, you can add data volumes to your containers with the volumes parameter. For more information, see Daemon task definitions in the Amazon Elastic Container Service Developer Guide. A daemon task definition is a template that describes the containers that form a daemon. Daemons deploy cross-cutting software agents such as security monitoring, telemetry, and logging across your Amazon ECS infrastructure. Each time you call RegisterDaemonTaskDefinition, a new revision of the daemon task definition is created. You can't modify a revision after you register it.

```sql
INSERT INTO aws.ecs.daemon_task_definitions (
family,
taskRoleArn,
executionRoleArn,
containerDefinitions,
cpu,
memory,
volumes,
tags,
region
)
SELECT 
'{{ family }}' /* required */,
'{{ taskRoleArn }}',
'{{ executionRoleArn }}',
'{{ containerDefinitions }}' /* required */,
'{{ cpu }}',
'{{ memory }}',
'{{ volumes }}',
'{{ tags }}',
'{{ region }}'
RETURNING
daemon_task_definition_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: daemon_task_definitions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the daemon_task_definitions resource.
    - name: family
      value: "{{ family }}"
      description: |
        You must specify a family for a daemon task definition. This family is used as a name for your daemon task definition. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.
    - name: taskRoleArn
      value: "{{ taskRoleArn }}"
      description: |
        The short name or full Amazon Resource Name (ARN) of the IAM role that containers in this daemon task can assume. All containers in this daemon task are granted the permissions that are specified in this role.
    - name: executionRoleArn
      value: "{{ executionRoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the task execution role that grants the Amazon ECS container agent permission to make Amazon Web Services API calls on your behalf. The task execution role is required for daemon tasks that pull container images from Amazon ECR or send container logs to CloudWatch.
    - name: containerDefinitions
      description: |
        A list of container definitions in JSON format that describe the containers that make up your daemon task.
      value:
        - name: "{{ name }}"
          image: "{{ image }}"
          memory: {{ memory }}
          memoryReservation: {{ memoryReservation }}
          repositoryCredentials:
            credentialsParameter: "{{ credentialsParameter }}"
          healthCheck:
            command:
              - "{{ command }}"
            interval: {{ interval }}
            timeout: {{ timeout }}
            retries: {{ retries }}
            startPeriod: {{ startPeriod }}
          cpu: {{ cpu }}
          essential: {{ essential }}
          entryPoint: "{{ entryPoint }}"
          command: "{{ command }}"
          workingDirectory: "{{ workingDirectory }}"
          environmentFiles: "{{ environmentFiles }}"
          environment: "{{ environment }}"
          secrets: "{{ secrets }}"
          readonlyRootFilesystem: {{ readonlyRootFilesystem }}
          mountPoints: "{{ mountPoints }}"
          logConfiguration:
            logDriver: "{{ logDriver }}"
            options: "{{ options }}"
            secretOptions:
              - name: "{{ name }}"
                valueFrom: "{{ valueFrom }}"
          firelensConfiguration:
            type_: "{{ type_ }}"
            options: "{{ options }}"
          privileged: {{ privileged }}
          user: "{{ user }}"
          ulimits: "{{ ulimits }}"
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
            tmpfs:
              - containerPath: "{{ containerPath }}"
                size: {{ size }}
                mountOptions: "{{ mountOptions }}"
          dependsOn: "{{ dependsOn }}"
          startTimeout: {{ startTimeout }}
          stopTimeout: {{ stopTimeout }}
          systemControls: "{{ systemControls }}"
          interactive: {{ interactive }}
          pseudoTerminal: {{ pseudoTerminal }}
          restartPolicy:
            enabled: {{ enabled }}
            ignoredExitCodes:
              - {{ ignoredExitCodes }}
            restartAttemptPeriod: {{ restartAttemptPeriod }}
    - name: cpu
      value: "{{ cpu }}"
      description: |
        The number of CPU units used by the daemon task. It can be expressed as an integer using CPU units (for example, 1024).
    - name: memory
      value: "{{ memory }}"
      description: |
        The amount of memory (in MiB) used by the daemon task. It can be expressed as an integer using MiB (for example, 1024).
    - name: volumes
      description: |
        A list of volume definitions in JSON format that containers in your daemon task can use.
      value:
        - name: "{{ name }}"
          host:
            sourcePath: "{{ sourcePath }}"
    - name: tags
      description: |
        The metadata that you apply to the daemon task definition to help you categorize and organize them. Each tag consists of a key and an optional value. You define both of them. The following basic restrictions apply to tags: Maximum number of tags per resource - 50 For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length - 128 Unicode characters in UTF-8 Maximum value length - 256 Unicode characters in UTF-8 If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_daemon_task_definition"
    values={[
        { label: 'delete_daemon_task_definition', value: 'delete_daemon_task_definition' }
    ]}
>
<TabItem value="delete_daemon_task_definition">

Deletes the specified daemon task definition. After a daemon task definition is deleted, no new daemons can be created using this definition. Existing daemons that reference the deleted daemon task definition continue to run. A daemon task definition must be in an ACTIVE state to be deleted.

```sql
DELETE FROM aws.ecs.daemon_task_definitions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
