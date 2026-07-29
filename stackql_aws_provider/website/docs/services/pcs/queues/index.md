--- 
title: queues
hide_title: false
hide_table_of_contents: false
keywords:
  - queues
  - pcs
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

Creates, updates, deletes, gets or lists a <code>queues</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="queues" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pcs.queues" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_queue"
    values={[
        { label: 'get_queue', value: 'get_queue' },
        { label: 'list_queues', value: 'list_queues' }
    ]}
>
<TabItem value="get_queue">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The generated unique ID of the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name that identifies the queue. (pattern: &lt;code&gt;(?!pcs_)^&#91;A-Za-z&#93;&#91;A-Za-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The unique Amazon Resource Name (ARN) of the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the cluster of the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="compute_node_group_configurations" /></td>
    <td><code>array</code></td>
    <td>The list of compute node group configurations associated with the queue. Queues assign jobs to associated compute node groups.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="error_info" /></td>
    <td><code>array</code></td>
    <td>The list of errors that occurred during queue provisioning.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="slurm_configuration" /></td>
    <td><code>object</code></td>
    <td>Additional options related to the Slurm scheduler.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The provisioning status of the queue. The provisioning status doesn't indicate the overall health of the queue. The resource enters the SUSPENDING and SUSPENDED states when the scheduler is beyond end of life and we have suspended the cluster. When in these states, you can't use the cluster. The cluster controller is down and all compute instances are terminated. The resources still count toward your service quotas. You can delete a resource if its status is SUSPENDED. For more information, see Frequently asked questions about Slurm versions in PCS in the PCS User Guide. (CREATING, ACTIVE, UPDATING, DELETING, CREATE_FAILED, DELETE_FAILED, UPDATE_FAILED, SUSPENDING, SUSPENDED, RESUMING)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_queues">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The generated unique ID of the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name that identifies the queue. (pattern: &lt;code&gt;(?!pcs_)^&#91;A-Za-z&#93;&#91;A-Za-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The unique Amazon Resource Name (ARN) of the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the cluster of the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The provisioning status of the queue. The provisioning status doesn't indicate the overall health of the queue. The resource enters the SUSPENDING and SUSPENDED states when the scheduler is beyond end of life and we have suspended the cluster. When in these states, you can't use the cluster. The cluster controller is down and all compute instances are terminated. The resources still count toward your service quotas. You can delete a resource if its status is SUSPENDED. For more information, see Frequently asked questions about Slurm versions in PCS in the PCS User Guide. (CREATING, ACTIVE, UPDATING, DELETING, CREATE_FAILED, DELETE_FAILED, UPDATE_FAILED, SUSPENDING, SUSPENDED, RESUMING)</td>
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
    <td><a href="#get_queue"><CopyableCode code="get_queue" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed information about a queue. The information includes the compute node groups that the queue uses to schedule jobs.</td>
</tr>
<tr>
    <td><a href="#list_queues"><CopyableCode code="list_queues" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of all queues associated with a cluster.</td>
</tr>
<tr>
    <td><a href="#create_queue"><CopyableCode code="create_queue" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clusterIdentifier"><code>clusterIdentifier</code></a>, <a href="#parameter-queueName"><code>queueName</code></a></td>
    <td></td>
    <td>Creates a job queue. You must associate 1 or more compute node groups with the queue. You can associate 1 compute node group with multiple queues.</td>
</tr>
<tr>
    <td><a href="#update_queue"><CopyableCode code="update_queue" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clusterIdentifier"><code>clusterIdentifier</code></a>, <a href="#parameter-queueIdentifier"><code>queueIdentifier</code></a></td>
    <td></td>
    <td>Updates the compute node group configuration of a queue. Use this API to change the compute node groups that the queue can send jobs to.</td>
</tr>
<tr>
    <td><a href="#delete_queue"><CopyableCode code="delete_queue" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a job queue. If the compute node group associated with this queue isn't associated with any other queues, PCS terminates all the compute nodes for this queue.</td>
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
    defaultValue="get_queue"
    values={[
        { label: 'get_queue', value: 'get_queue' },
        { label: 'list_queues', value: 'list_queues' }
    ]}
>
<TabItem value="get_queue">

Returns detailed information about a queue. The information includes the compute node groups that the queue uses to schedule jobs.

```sql
SELECT
id,
name,
arn,
cluster_id,
compute_node_group_configurations,
created_at,
error_info,
modified_at,
slurm_configuration,
status
FROM aws.pcs.queues
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_queues">

Returns a list of all queues associated with a cluster.

```sql
SELECT
id,
name,
arn,
cluster_id,
created_at,
modified_at,
status
FROM aws.pcs.queues
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_queue"
    values={[
        { label: 'create_queue', value: 'create_queue' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_queue">

Creates a job queue. You must associate 1 or more compute node groups with the queue. You can associate 1 compute node group with multiple queues.

```sql
INSERT INTO aws.pcs.queues (
clusterIdentifier,
queueName,
computeNodeGroupConfigurations,
slurmConfiguration,
clientToken,
tags,
region
)
SELECT 
'{{ clusterIdentifier }}' /* required */,
'{{ queueName }}' /* required */,
'{{ computeNodeGroupConfigurations }}',
'{{ slurmConfiguration }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
queue
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: queues
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the queues resource.
    - name: clusterIdentifier
      value: "{{ clusterIdentifier }}"
      description: |
        The name or ID of the cluster for which to create a queue.
    - name: queueName
      value: "{{ queueName }}"
      description: |
        A name to identify the queue.
    - name: computeNodeGroupConfigurations
      description: |
        The list of compute node group configurations to associate with the queue. Queues assign jobs to associated compute node groups.
      value:
        - computeNodeGroupId: "{{ computeNodeGroupId }}"
    - name: slurmConfiguration
      description: |
        Additional options related to the Slurm scheduler.
      value:
        slurmCustomSettings:
          - parameterName: "{{ parameterName }}"
            parameterValue: "{{ parameterValue }}"
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate 1 for you.
    - name: tags
      value: "{{ tags }}"
      description: |
        1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_queue"
    values={[
        { label: 'update_queue', value: 'update_queue' }
    ]}
>
<TabItem value="update_queue">

Updates the compute node group configuration of a queue. Use this API to change the compute node groups that the queue can send jobs to.

```sql
UPDATE aws.pcs.queues
SET 
clusterIdentifier = '{{ clusterIdentifier }}',
queueIdentifier = '{{ queueIdentifier }}',
computeNodeGroupConfigurations = '{{ computeNodeGroupConfigurations }}',
slurmConfiguration = '{{ slurmConfiguration }}',
clientToken = '{{ clientToken }}'
WHERE 
region = '{{ region }}' --required
AND clusterIdentifier = '{{ clusterIdentifier }}' --required
AND queueIdentifier = '{{ queueIdentifier }}' --required
RETURNING
queue;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_queue"
    values={[
        { label: 'delete_queue', value: 'delete_queue' }
    ]}
>
<TabItem value="delete_queue">

Deletes a job queue. If the compute node group associated with this queue isn't associated with any other queues, PCS terminates all the compute nodes for this queue.

```sql
DELETE FROM aws.pcs.queues
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
