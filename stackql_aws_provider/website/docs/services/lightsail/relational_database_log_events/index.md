--- 
title: relational_database_log_events
hide_title: false
hide_table_of_contents: false
keywords:
  - relational_database_log_events
  - lightsail
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

Creates, updates, deletes, gets or lists a <code>relational_database_log_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="relational_database_log_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.relational_database_log_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_relational_database_log_events"
    values={[
        { label: 'get_relational_database_log_events', value: 'get_relational_database_log_events' }
    ]}
>
<TabItem value="get_relational_database_log_events">

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
    <td><CopyableCode code="next_backward_token" /></td>
    <td><code>string</code></td>
    <td>A token used for advancing to the previous page of results from your get relational database log events request.</td>
</tr>
<tr>
    <td><CopyableCode code="next_forward_token" /></td>
    <td><code>string</code></td>
    <td>A token used for advancing to the next page of results from your get relational database log events request.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_log_events" /></td>
    <td><code>array</code></td>
    <td>An object describing the result of your get relational database log events request.</td>
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
    <td><a href="#get_relational_database_log_events"><CopyableCode code="get_relational_database_log_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of log events for a database in Amazon Lightsail.</td>
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
    defaultValue="get_relational_database_log_events"
    values={[
        { label: 'get_relational_database_log_events', value: 'get_relational_database_log_events' }
    ]}
>
<TabItem value="get_relational_database_log_events">

Returns a list of log events for a database in Amazon Lightsail.

```sql
SELECT
next_backward_token,
next_forward_token,
resource_log_events
FROM aws.lightsail.relational_database_log_events
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
