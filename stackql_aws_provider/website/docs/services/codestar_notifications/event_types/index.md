--- 
title: event_types
hide_title: false
hide_table_of_contents: false
keywords:
  - event_types
  - codestar_notifications
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

Creates, updates, deletes, gets or lists an <code>event_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codestar_notifications.event_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_event_types"
    values={[
        { label: 'list_event_types', value: 'list_event_types' }
    ]}
>
<TabItem value="list_event_types">

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
    <td><CopyableCode code="event_type_id" /></td>
    <td><code>string</code></td>
    <td>The system-generated ID of the event. For a complete list of event types and IDs, see Notification concepts in the Developer Tools Console User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="event_type_name" /></td>
    <td><code>string</code></td>
    <td>The name of the event.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The resource type of the event. (pattern: &lt;code&gt;^(&#91;a-zA-Z0-9-&#93;)+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The name of the service for which the event applies.</td>
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
    <td><a href="#list_event_types"><CopyableCode code="list_event_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the event types available for configuring notifications.</td>
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
    defaultValue="list_event_types"
    values={[
        { label: 'list_event_types', value: 'list_event_types' }
    ]}
>
<TabItem value="list_event_types">

Returns information about the event types available for configuring notifications.

```sql
SELECT
event_type_id,
event_type_name,
resource_type,
service_name
FROM aws.codestar_notifications.event_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
