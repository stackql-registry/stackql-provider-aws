--- 
title: routing_profile_queues
hide_title: false
hide_table_of_contents: false
keywords:
  - routing_profile_queues
  - connect
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

Creates, updates, deletes, gets or lists a <code>routing_profile_queues</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="routing_profile_queues" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.routing_profile_queues" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_routing_profile_queues"
    values={[
        { label: 'list_routing_profile_queues', value: 'list_routing_profile_queues' }
    ]}
>
<TabItem value="list_routing_profile_queues">

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
    <td><CopyableCode code="channel" /></td>
    <td><code>string</code></td>
    <td>The channels this queue supports. (VOICE, CHAT, TASK, EMAIL)</td>
</tr>
<tr>
    <td><CopyableCode code="delay" /></td>
    <td><code>integer</code></td>
    <td>The delay, in seconds, that a contact should be in the queue before they are routed to an available agent. For more information, see Queues: priority and delay in the Connect Customer Administrator Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>The order in which contacts are to be handled for the queue. For more information, see Queues: priority and delay.</td>
</tr>
<tr>
    <td><CopyableCode code="queue_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="queue_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="queue_name" /></td>
    <td><code>string</code></td>
    <td>The name of the queue.</td>
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
    <td><a href="#list_routing_profile_queues"><CopyableCode code="list_routing_profile_queues" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-routing_profile_id"><code>routing_profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the queues associated with a routing profile.</td>
</tr>
<tr>
    <td><a href="#update_routing_profile_queues"><CopyableCode code="update_routing_profile_queues" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-routing_profile_id"><code>routing_profile_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-QueueConfigs"><code>QueueConfigs</code></a></td>
    <td></td>
    <td>Updates the properties associated with a set of queues for a routing profile.</td>
</tr>
<tr>
    <td><a href="#associate_routing_profile_queues"><CopyableCode code="associate_routing_profile_queues" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-routing_profile_id"><code>routing_profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associates a set of queues with a routing profile.</td>
</tr>
<tr>
    <td><a href="#disassociate_routing_profile_queues"><CopyableCode code="disassociate_routing_profile_queues" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-routing_profile_id"><code>routing_profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates a set of queues from a routing profile. Up to 10 queue references can be disassociated in a single API call. More than 10 queue references results in a single call results in an InvalidParameterException.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-routing_profile_id">
    <td><CopyableCode code="routing_profile_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the routing profile.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page. The default MaxResult size is 100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_routing_profile_queues"
    values={[
        { label: 'list_routing_profile_queues', value: 'list_routing_profile_queues' }
    ]}
>
<TabItem value="list_routing_profile_queues">

Lists the queues associated with a routing profile.

```sql
SELECT
channel,
delay,
priority,
queue_arn,
queue_id,
queue_name
FROM aws.connect.routing_profile_queues
WHERE instance_id = '{{ instance_id }}' -- required
AND routing_profile_id = '{{ routing_profile_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_routing_profile_queues"
    values={[
        { label: 'update_routing_profile_queues', value: 'update_routing_profile_queues' },
        { label: 'associate_routing_profile_queues', value: 'associate_routing_profile_queues' }
    ]}
>
<TabItem value="update_routing_profile_queues">

Updates the properties associated with a set of queues for a routing profile.

```sql
UPDATE aws.connect.routing_profile_queues
SET 
QueueConfigs = '{{ QueueConfigs }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND routing_profile_id = '{{ routing_profile_id }}' --required
AND region = '{{ region }}' --required
AND QueueConfigs = '{{ QueueConfigs }}' --required;
```
</TabItem>
<TabItem value="associate_routing_profile_queues">

Associates a set of queues with a routing profile.

```sql
UPDATE aws.connect.routing_profile_queues
SET 
QueueConfigs = '{{ QueueConfigs }}',
ManualAssignmentQueueConfigs = '{{ ManualAssignmentQueueConfigs }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND routing_profile_id = '{{ routing_profile_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_routing_profile_queues"
    values={[
        { label: 'disassociate_routing_profile_queues', value: 'disassociate_routing_profile_queues' }
    ]}
>
<TabItem value="disassociate_routing_profile_queues">

Disassociates a set of queues from a routing profile. Up to 10 queue references can be disassociated in a single API call. More than 10 queue references results in a single call results in an InvalidParameterException.

```sql
EXEC aws.connect.routing_profile_queues.disassociate_routing_profile_queues 
@instance_id='{{ instance_id }}' --required, 
@routing_profile_id='{{ routing_profile_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"QueueReferences": "{{ QueueReferences }}", 
"ManualAssignmentQueueReferences": "{{ ManualAssignmentQueueReferences }}"
}'
;
```
</TabItem>
</Tabs>
