--- 
title: event_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - event_configurations
  - iot
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

Creates, updates, deletes, gets or lists an <code>event_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.event_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_event_configurations"
    values={[
        { label: 'describe_event_configurations', value: 'describe_event_configurations' }
    ]}
>
<TabItem value="describe_event_configurations">

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
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date of the event configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="event_configurations" /></td>
    <td><code>object</code></td>
    <td>The event configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the event configurations were last modified.</td>
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
    <td><a href="#describe_event_configurations"><CopyableCode code="describe_event_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes event configurations. Requires permission to access the DescribeEventConfigurations action.</td>
</tr>
<tr>
    <td><a href="#update_event_configurations"><CopyableCode code="update_event_configurations" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the event configurations. Requires permission to access the UpdateEventConfigurations action.</td>
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
    defaultValue="describe_event_configurations"
    values={[
        { label: 'describe_event_configurations', value: 'describe_event_configurations' }
    ]}
>
<TabItem value="describe_event_configurations">

Describes event configurations. Requires permission to access the DescribeEventConfigurations action.

```sql
SELECT
creation_date,
event_configurations,
last_modified_date
FROM aws.iot.event_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_event_configurations"
    values={[
        { label: 'update_event_configurations', value: 'update_event_configurations' }
    ]}
>
<TabItem value="update_event_configurations">

Updates the event configurations. Requires permission to access the UpdateEventConfigurations action.

```sql
UPDATE aws.iot.event_configurations
SET 
eventConfigurations = '{{ eventConfigurations }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
