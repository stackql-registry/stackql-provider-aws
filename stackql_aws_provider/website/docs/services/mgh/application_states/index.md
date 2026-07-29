--- 
title: application_states
hide_title: false
hide_table_of_contents: false
keywords:
  - application_states
  - mgh
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

Creates, updates, deletes, gets or lists an <code>application_states</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_states" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mgh.application_states" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_application_state"
    values={[
        { label: 'describe_application_state', value: 'describe_application_state' },
        { label: 'list_application_states', value: 'list_application_states' }
    ]}
>
<TabItem value="describe_application_state">

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
    <td><CopyableCode code="application_status" /></td>
    <td><code>string</code></td>
    <td>Status of the application - Not Started, In-Progress, Complete. (NOT_STARTED, IN_PROGRESS, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the application status was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_application_states">

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
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The configurationId from the Application Discovery Service that uniquely identifies an application. (pattern: &lt;code&gt;^.&#123;1,1600&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="application_status" /></td>
    <td><code>string</code></td>
    <td>The current status of an application. (NOT_STARTED, IN_PROGRESS, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the application status was last updated.</td>
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
    <td><a href="#describe_application_state"><CopyableCode code="describe_application_state" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the migration status of an application.</td>
</tr>
<tr>
    <td><a href="#list_application_states"><CopyableCode code="list_application_states" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the migration statuses for your applications. If you use the optional ApplicationIds parameter, only the migration statuses for those applications will be returned.</td>
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
    defaultValue="describe_application_state"
    values={[
        { label: 'describe_application_state', value: 'describe_application_state' },
        { label: 'list_application_states', value: 'list_application_states' }
    ]}
>
<TabItem value="describe_application_state">

Gets the migration status of an application.

```sql
SELECT
application_status,
last_updated_time
FROM aws.mgh.application_states
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_application_states">

Lists all the migration statuses for your applications. If you use the optional ApplicationIds parameter, only the migration statuses for those applications will be returned.

```sql
SELECT
application_id,
application_status,
last_updated_time
FROM aws.mgh.application_states
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
