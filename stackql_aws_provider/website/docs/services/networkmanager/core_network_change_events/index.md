--- 
title: core_network_change_events
hide_title: false
hide_table_of_contents: false
keywords:
  - core_network_change_events
  - networkmanager
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

Creates, updates, deletes, gets or lists a <code>core_network_change_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="core_network_change_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.core_network_change_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_core_network_change_events"
    values={[
        { label: 'get_core_network_change_events', value: 'get_core_network_change_events' }
    ]}
>
<TabItem value="get_core_network_change_events">

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
    <td><CopyableCode code="Action" /></td>
    <td><code>string</code></td>
    <td>The action taken for the change event. (ADD, MODIFY, REMOVE)</td>
</tr>
<tr>
    <td><CopyableCode code="EventTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for an event change in status.</td>
</tr>
<tr>
    <td><CopyableCode code="IdentifierPath" /></td>
    <td><code>string</code></td>
    <td>Uniquely identifies the path for a change within the changeset. For example, the IdentifierPath for a core network segment change might be "CORE_NETWORK_SEGMENT/us-east-1/devsegment". (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the core network change event. (NOT_STARTED, IN_PROGRESS, COMPLETE, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>Describes the type of change event. (CORE_NETWORK_SEGMENT, NETWORK_FUNCTION_GROUP, CORE_NETWORK_EDGE, ATTACHMENT_MAPPING, ATTACHMENT_ROUTE_PROPAGATION, ATTACHMENT_ROUTE_STATIC, ROUTING_POLICY, ROUTING_POLICY_SEGMENT_ASSOCIATION, ROUTING_POLICY_EDGE_ASSOCIATION, ROUTING_POLICY_ATTACHMENT_ASSOCIATION, CORE_NETWORK_CONFIGURATION, SEGMENTS_CONFIGURATION, SEGMENT_ACTIONS_CONFIGURATION, ATTACHMENT_POLICIES_CONFIGURATION)</td>
</tr>
<tr>
    <td><CopyableCode code="Values" /></td>
    <td><code>object</code></td>
    <td>Details of the change event.</td>
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
    <td><a href="#get_core_network_change_events"><CopyableCode code="get_core_network_change_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-core_network_id"><code>core_network_id</code></a>, <a href="#parameter-policy_version_id"><code>policy_version_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns information about a core network change event.</td>
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
<tr id="parameter-core_network_id">
    <td><CopyableCode code="core_network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of a core network.</td>
</tr>
<tr id="parameter-policy_version_id">
    <td><CopyableCode code="policy_version_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the policy version.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_core_network_change_events"
    values={[
        { label: 'get_core_network_change_events', value: 'get_core_network_change_events' }
    ]}
>
<TabItem value="get_core_network_change_events">

Returns information about a core network change event.

```sql
SELECT
Action,
EventTime,
IdentifierPath,
Status,
Type,
Values
FROM aws.networkmanager.core_network_change_events
WHERE core_network_id = '{{ core_network_id }}' -- required
AND policy_version_id = '{{ policy_version_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
