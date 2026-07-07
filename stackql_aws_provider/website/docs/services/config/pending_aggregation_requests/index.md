--- 
title: pending_aggregation_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - pending_aggregation_requests
  - config
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

Creates, updates, deletes, gets or lists a <code>pending_aggregation_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pending_aggregation_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.pending_aggregation_requests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_pending_aggregation_requests"
    values={[
        { label: 'describe_pending_aggregation_requests', value: 'describe_pending_aggregation_requests' }
    ]}
>
<TabItem value="describe_pending_aggregation_requests">

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
    <td><CopyableCode code="RequesterAccountId" /></td>
    <td><code>string</code></td>
    <td>The 12-digit account ID of the account requesting to aggregate data. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RequesterAwsRegion" /></td>
    <td><code>string</code></td>
    <td>The region requesting to aggregate data.</td>
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
    <td><a href="#describe_pending_aggregation_requests"><CopyableCode code="describe_pending_aggregation_requests" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of all pending aggregation requests.</td>
</tr>
<tr>
    <td><a href="#delete_pending_aggregation_request"><CopyableCode code="delete_pending_aggregation_request" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes pending authorization requests for a specified aggregator account in a specified region.</td>
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
    defaultValue="describe_pending_aggregation_requests"
    values={[
        { label: 'describe_pending_aggregation_requests', value: 'describe_pending_aggregation_requests' }
    ]}
>
<TabItem value="describe_pending_aggregation_requests">

Returns a list of all pending aggregation requests.

```sql
SELECT
RequesterAccountId,
RequesterAwsRegion
FROM aws.config.pending_aggregation_requests
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_pending_aggregation_request"
    values={[
        { label: 'delete_pending_aggregation_request', value: 'delete_pending_aggregation_request' }
    ]}
>
<TabItem value="delete_pending_aggregation_request">

Deletes pending authorization requests for a specified aggregator account in a specified region.

```sql
DELETE FROM aws.config.pending_aggregation_requests
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
