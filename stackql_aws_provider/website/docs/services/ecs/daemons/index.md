--- 
title: daemons
hide_title: false
hide_table_of_contents: false
keywords:
  - daemons
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

Creates, updates, deletes, gets or lists a <code>daemons</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="daemons" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecs.daemons" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_daemon"
    values={[
        { label: 'describe_daemon', value: 'describe_daemon' },
        { label: 'list_daemons', value: 'list_daemons' }
    ]}
>
<TabItem value="describe_daemon">

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
    <td><CopyableCode code="clusterArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the cluster that the daemon is running in.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp for the time when the daemon was created.</td>
</tr>
<tr>
    <td><CopyableCode code="currentRevisions" /></td>
    <td><code>array</code></td>
    <td>The current daemon revision details, including the running task counts per capacity provider.</td>
</tr>
<tr>
    <td><CopyableCode code="daemonArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the daemon.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the most recent daemon deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the daemon. (ACTIVE, DELETE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp for the time when the daemon was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_daemons">

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
    <td><CopyableCode code="daemonSummariesList" /></td>
    <td><code>array</code></td>
    <td>The list of daemon summaries.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken value to include in a future ListDaemons request. When the results of a ListDaemons request exceed maxResults, this value can be used to retrieve the next page of results.</td>
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
    <td><a href="#describe_daemon"><CopyableCode code="describe_daemon" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified daemon.</td>
</tr>
<tr>
    <td><a href="#list_daemons"><CopyableCode code="list_daemons" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of daemons. You can filter the results by cluster or capacity provider.</td>
</tr>
<tr>
    <td><a href="#create_daemon"><CopyableCode code="create_daemon" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-daemonName"><code>daemonName</code></a>, <a href="#parameter-daemonTaskDefinitionArn"><code>daemonTaskDefinitionArn</code></a>, <a href="#parameter-capacityProviderArns"><code>capacityProviderArns</code></a></td>
    <td></td>
    <td>Creates a new daemon in the specified cluster and capacity providers. A daemon deploys cross-cutting software agents such as security monitoring, telemetry, and logging independently across your Amazon ECS infrastructure. Amazon ECS deploys exactly one daemon task on each container instance of the specified capacity providers. When a container instance registers with the cluster, Amazon ECS automatically starts daemon tasks. Amazon ECS starts a daemon task before scheduling other tasks. Daemons are essential for instance health - if a daemon task stops, Amazon ECS automatically drains and replaces that container instance. ECS Managed Daemons is only supported for Amazon ECS Managed Instances Capacity Providers.</td>
</tr>
<tr>
    <td><a href="#update_daemon"><CopyableCode code="update_daemon" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-daemonArn"><code>daemonArn</code></a>, <a href="#parameter-daemonTaskDefinitionArn"><code>daemonTaskDefinitionArn</code></a>, <a href="#parameter-capacityProviderArns"><code>capacityProviderArns</code></a></td>
    <td></td>
    <td>Updates the specified daemon. When you update a daemon, a new deployment is triggered that progressively rolls out the changes to the container instances associated with the daemon's capacity providers. For more information, see Daemon deployments in the Amazon Elastic Container Service Developer Guide. Amazon ECS drains existing container instances and provisions new instances with the updated daemon. Amazon ECS automatically launches replacement tasks for your services. Updating a daemon triggers a rolling deployment that drains and replaces container instances. Plan updates during maintenance windows to minimize impact on running services. ECS Managed Daemons is only supported for Amazon ECS Managed Instances Capacity Providers.</td>
</tr>
<tr>
    <td><a href="#delete_daemon"><CopyableCode code="delete_daemon" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified daemon. The daemon must be in an ACTIVE state to be deleted. Deleting a daemon stops all running daemon tasks on the associated container instances. Amazon ECS drains existing container instances and provisions new instances without the deleted daemon. Amazon ECS automatically launches replacement tasks for your Amazon ECS services. ECS Managed Daemons is only supported for Amazon ECS Managed Instances Capacity Providers.</td>
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
    defaultValue="describe_daemon"
    values={[
        { label: 'describe_daemon', value: 'describe_daemon' },
        { label: 'list_daemons', value: 'list_daemons' }
    ]}
>
<TabItem value="describe_daemon">

Describes the specified daemon.

```sql
SELECT
clusterArn,
createdAt,
currentRevisions,
daemonArn,
deploymentArn,
status,
updatedAt
FROM aws.ecs.daemons
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_daemons">

Returns a list of daemons. You can filter the results by cluster or capacity provider.

```sql
SELECT
daemonSummariesList,
nextToken
FROM aws.ecs.daemons
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_daemon"
    values={[
        { label: 'create_daemon', value: 'create_daemon' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_daemon">

Creates a new daemon in the specified cluster and capacity providers. A daemon deploys cross-cutting software agents such as security monitoring, telemetry, and logging independently across your Amazon ECS infrastructure. Amazon ECS deploys exactly one daemon task on each container instance of the specified capacity providers. When a container instance registers with the cluster, Amazon ECS automatically starts daemon tasks. Amazon ECS starts a daemon task before scheduling other tasks. Daemons are essential for instance health - if a daemon task stops, Amazon ECS automatically drains and replaces that container instance. ECS Managed Daemons is only supported for Amazon ECS Managed Instances Capacity Providers.

```sql
INSERT INTO aws.ecs.daemons (
daemonName,
clusterArn,
daemonTaskDefinitionArn,
capacityProviderArns,
deploymentConfiguration,
tags,
propagateTags,
enableECSManagedTags,
enableExecuteCommand,
clientToken,
region
)
SELECT 
'{{ daemonName }}' /* required */,
'{{ clusterArn }}',
'{{ daemonTaskDefinitionArn }}' /* required */,
'{{ capacityProviderArns }}' /* required */,
'{{ deploymentConfiguration }}',
'{{ tags }}',
'{{ propagateTags }}',
{{ enableECSManagedTags }},
{{ enableExecuteCommand }},
'{{ clientToken }}',
'{{ region }}'
RETURNING
createdAt,
daemonArn,
deploymentArn,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: daemons
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the daemons resource.
    - name: daemonName
      value: "{{ daemonName }}"
      description: |
        The name of the daemon. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.
    - name: clusterArn
      value: "{{ clusterArn }}"
      description: |
        The Amazon Resource Name (ARN) of the cluster to create the daemon in.
    - name: daemonTaskDefinitionArn
      value: "{{ daemonTaskDefinitionArn }}"
      description: |
        The Amazon Resource Name (ARN) of the daemon task definition to use for the daemon.
    - name: capacityProviderArns
      value:
        - "{{ capacityProviderArns }}"
      description: |
        The Amazon Resource Names (ARNs) of the capacity providers to associate with the daemon. The daemon deploys tasks on container instances managed by these capacity providers.
    - name: deploymentConfiguration
      description: |
        Optional deployment parameters that control how the daemon rolls out updates, including the drain percentage, alarm-based rollback, and bake time.
      value:
        drainPercent: {{ drainPercent }}
        alarms:
          alarmNames:
            - "{{ alarmNames }}"
          enable: {{ enable }}
        bakeTimeInMinutes: {{ bakeTimeInMinutes }}
    - name: tags
      description: |
        The metadata that you apply to the daemon to help you categorize and organize them. Each tag consists of a key and an optional value. You define both of them. The following basic restrictions apply to tags: Maximum number of tags per resource - 50 For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length - 128 Unicode characters in UTF-8 Maximum value length - 256 Unicode characters in UTF-8 If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: propagateTags
      value: "{{ propagateTags }}"
      description: |
        Specifies whether to propagate the tags from the daemon to the daemon tasks. If you don't specify a value, the tags aren't propagated. You can only propagate tags to daemon tasks during task creation. To add tags to a task after task creation, use the TagResource API action.
      valid_values: ['DAEMON', 'NONE']
    - name: enableECSManagedTags
      value: {{ enableECSManagedTags }}
      description: |
        Specifies whether to turn on Amazon ECS managed tags for the tasks in the daemon. For more information, see Tagging your Amazon ECS resources in the Amazon Elastic Container Service Developer Guide.
    - name: enableExecuteCommand
      value: {{ enableExecuteCommand }}
      description: |
        Determines whether the execute command functionality is turned on for the daemon. If true, the execute command functionality is turned on for all tasks in the daemon.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        An identifier that you provide to ensure the idempotency of the request. It must be unique and is case sensitive. Up to 36 ASCII characters in the range of 33-126 (inclusive) are allowed.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_daemon"
    values={[
        { label: 'update_daemon', value: 'update_daemon' }
    ]}
>
<TabItem value="update_daemon">

Updates the specified daemon. When you update a daemon, a new deployment is triggered that progressively rolls out the changes to the container instances associated with the daemon's capacity providers. For more information, see Daemon deployments in the Amazon Elastic Container Service Developer Guide. Amazon ECS drains existing container instances and provisions new instances with the updated daemon. Amazon ECS automatically launches replacement tasks for your services. Updating a daemon triggers a rolling deployment that drains and replaces container instances. Plan updates during maintenance windows to minimize impact on running services. ECS Managed Daemons is only supported for Amazon ECS Managed Instances Capacity Providers.

```sql
UPDATE aws.ecs.daemons
SET 
daemonArn = '{{ daemonArn }}',
daemonTaskDefinitionArn = '{{ daemonTaskDefinitionArn }}',
capacityProviderArns = '{{ capacityProviderArns }}',
deploymentConfiguration = '{{ deploymentConfiguration }}',
propagateTags = '{{ propagateTags }}',
enableECSManagedTags = {{ enableECSManagedTags }},
enableExecuteCommand = {{ enableExecuteCommand }}
WHERE 
region = '{{ region }}' --required
AND daemonArn = '{{ daemonArn }}' --required
AND daemonTaskDefinitionArn = '{{ daemonTaskDefinitionArn }}' --required
AND capacityProviderArns = '{{ capacityProviderArns }}' --required
RETURNING
createdAt,
daemonArn,
deploymentArn,
status,
updatedAt;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_daemon"
    values={[
        { label: 'delete_daemon', value: 'delete_daemon' }
    ]}
>
<TabItem value="delete_daemon">

Deletes the specified daemon. The daemon must be in an ACTIVE state to be deleted. Deleting a daemon stops all running daemon tasks on the associated container instances. Amazon ECS drains existing container instances and provisions new instances without the deleted daemon. Amazon ECS automatically launches replacement tasks for your Amazon ECS services. ECS Managed Daemons is only supported for Amazon ECS Managed Instances Capacity Providers.

```sql
DELETE FROM aws.ecs.daemons
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
