--- 
title: routing_profile_manual_assignment_queues
hide_title: false
hide_table_of_contents: false
keywords:
  - routing_profile_manual_assignment_queues
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

Creates, updates, deletes, gets or lists a <code>routing_profile_manual_assignment_queues</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="routing_profile_manual_assignment_queues" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.routing_profile_manual_assignment_queues" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_routing_profile_manual_assignment_queues"
    values={[
        { label: 'list_routing_profile_manual_assignment_queues', value: 'list_routing_profile_manual_assignment_queues' }
    ]}
>
<TabItem value="list_routing_profile_manual_assignment_queues">

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
    <td>The channels this queue supports. Valid Values: CHAT | TASK | EMAIL VOICE is not supported. The information shown below is incorrect. We're working to correct it. (VOICE, CHAT, TASK, EMAIL)</td>
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
    <td><a href="#list_routing_profile_manual_assignment_queues"><CopyableCode code="list_routing_profile_manual_assignment_queues" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-routing_profile_id"><code>routing_profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the manual assignment queues associated with a routing profile. Use cases Following are common uses cases for this API: This API returns list of queues where contacts can be manually assigned or picked by an agent who has access to the Worklist app. The user can additionally filter on queues, if they have access to those queues (otherwise a invalid request exception will be thrown). For information about how manual contact assignment works in the agent workspace, see the Access the Worklist app in the Amazon Connect agent workspace in the Amazon Connect Administrator Guide. Important things to know This API only returns the manual assignment queues associated with a routing profile. Use the ListRoutingProfileQueues API to list the auto assignment queues for the routing profile. Endpoints: See Amazon Connect endpoints and quotas.</td>
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
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
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
    <td>The maximum number of results to return per page.</td>
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
    defaultValue="list_routing_profile_manual_assignment_queues"
    values={[
        { label: 'list_routing_profile_manual_assignment_queues', value: 'list_routing_profile_manual_assignment_queues' }
    ]}
>
<TabItem value="list_routing_profile_manual_assignment_queues">

Lists the manual assignment queues associated with a routing profile. Use cases Following are common uses cases for this API: This API returns list of queues where contacts can be manually assigned or picked by an agent who has access to the Worklist app. The user can additionally filter on queues, if they have access to those queues (otherwise a invalid request exception will be thrown). For information about how manual contact assignment works in the agent workspace, see the Access the Worklist app in the Amazon Connect agent workspace in the Amazon Connect Administrator Guide. Important things to know This API only returns the manual assignment queues associated with a routing profile. Use the ListRoutingProfileQueues API to list the auto assignment queues for the routing profile. Endpoints: See Amazon Connect endpoints and quotas.

```sql
SELECT
channel,
queue_arn,
queue_id,
queue_name
FROM aws.connect.routing_profile_manual_assignment_queues
WHERE instance_id = '{{ instance_id }}' -- required
AND routing_profile_id = '{{ routing_profile_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
