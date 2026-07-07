--- 
title: event_details
hide_title: false
hide_table_of_contents: false
keywords:
  - event_details
  - health
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

Creates, updates, deletes, gets or lists an <code>event_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.health.event_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_event_details"
    values={[
        { label: 'describe_event_details', value: 'describe_event_details' }
    ]}
>
<TabItem value="describe_event_details">

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
    <td><CopyableCode code="failedSet" /></td>
    <td><code>array</code></td>
    <td>Error messages for any events that could not be retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="successfulSet" /></td>
    <td><code>array</code></td>
    <td>Information about the events that could be retrieved.</td>
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
    <td><a href="#describe_event_details"><CopyableCode code="describe_event_details" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed information about one or more specified events. Information includes standard event data (Amazon Web Services Region, service, and so on, as returned by DescribeEvents), a detailed event description, and possible additional metadata that depends upon the nature of the event. Affected entities are not included. To retrieve the entities, use the DescribeAffectedEntities operation. If a specified event can't be retrieved, an error message is returned for that event. This operation supports resource-level permissions. You can use this operation to allow or deny access to specific Health events. For more information, see Resource- and action-based conditions in the Health User Guide.</td>
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
    defaultValue="describe_event_details"
    values={[
        { label: 'describe_event_details', value: 'describe_event_details' }
    ]}
>
<TabItem value="describe_event_details">

Returns detailed information about one or more specified events. Information includes standard event data (Amazon Web Services Region, service, and so on, as returned by DescribeEvents), a detailed event description, and possible additional metadata that depends upon the nature of the event. Affected entities are not included. To retrieve the entities, use the DescribeAffectedEntities operation. If a specified event can't be retrieved, an error message is returned for that event. This operation supports resource-level permissions. You can use this operation to allow or deny access to specific Health events. For more information, see Resource- and action-based conditions in the Health User Guide.

```sql
SELECT
failedSet,
successfulSet
FROM aws.health.event_details
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
