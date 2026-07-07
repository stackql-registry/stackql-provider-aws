--- 
title: event_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - event_sources
  - events
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

Creates, updates, deletes, gets or lists an <code>event_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.events.event_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_event_source"
    values={[
        { label: 'describe_event_source', value: 'describe_event_source' }
    ]}
>
<TabItem value="describe_event_source">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the partner event source.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedBy" /></td>
    <td><code>string</code></td>
    <td>The name of the SaaS partner that created the event source.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the event source was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ExpirationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the event source will expire if you do not create a matching event bus.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the partner event source.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the event source. If it is ACTIVE, you have already created a matching event bus for this event source, and that event bus is active. If it is PENDING, either you haven't yet created a matching event bus, or that event bus is deactivated. If it is DELETED, you have created a matching event bus, but the event source has since been deleted. (PENDING, ACTIVE, DELETED)</td>
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
    <td><a href="#describe_event_source"><CopyableCode code="describe_event_source" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation lists details about a partner event source that is shared with your account.</td>
</tr>
<tr>
    <td><a href="#list_event_sources"><CopyableCode code="list_event_sources" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>You can use this to see all the partner event sources that have been shared with your Amazon Web Services account. For more information about partner event sources, see CreateEventBus.</td>
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
    defaultValue="describe_event_source"
    values={[
        { label: 'describe_event_source', value: 'describe_event_source' }
    ]}
>
<TabItem value="describe_event_source">

This operation lists details about a partner event source that is shared with your account.

```sql
SELECT
Arn,
CreatedBy,
CreationTime,
ExpirationTime,
Name,
State
FROM aws.events.event_sources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_event_sources"
    values={[
        { label: 'list_event_sources', value: 'list_event_sources' }
    ]}
>
<TabItem value="list_event_sources">

You can use this to see all the partner event sources that have been shared with your Amazon Web Services account. For more information about partner event sources, see CreateEventBus.

```sql
EXEC aws.events.event_sources.list_event_sources 
@region='{{ region }}' --required 
@@json=
'{
"NamePrefix": "{{ NamePrefix }}", 
"NextToken": "{{ NextToken }}", 
"Limit": {{ Limit }}
}'
;
```
</TabItem>
</Tabs>
