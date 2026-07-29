--- 
title: workers_with_qualification_types
hide_title: false
hide_table_of_contents: false
keywords:
  - workers_with_qualification_types
  - mturk
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

Creates, updates, deletes, gets or lists a <code>workers_with_qualification_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workers_with_qualification_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mturk.workers_with_qualification_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_workers_with_qualification_type"
    values={[
        { label: 'list_workers_with_qualification_type', value: 'list_workers_with_qualification_type' }
    ]}
>
<TabItem value="list_workers_with_qualification_type">

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
    <td><CopyableCode code="grant_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Qualification was granted to the Worker. If the Worker's Qualification was revoked, and then re-granted based on a new Qualification request, GrantTime is the date and time of the last call to the AcceptQualificationRequest operation.</td>
</tr>
<tr>
    <td><CopyableCode code="integer_value" /></td>
    <td><code>integer</code></td>
    <td>The value (score) of the Qualification, if the Qualification has an integer value.</td>
</tr>
<tr>
    <td><CopyableCode code="locale_value" /></td>
    <td><code>object</code></td>
    <td>The Locale data structure represents a geographical region or location.</td>
</tr>
<tr>
    <td><CopyableCode code="qualification_type_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Qualification type for the Qualification. (pattern: &lt;code&gt;^&#91;A-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Qualification. Valid values are Granted | Revoked. (Granted, Revoked)</td>
</tr>
<tr>
    <td><CopyableCode code="worker_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Worker who possesses the Qualification. (pattern: &lt;code&gt;^A&#91;A-Z0-9&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#list_workers_with_qualification_type"><CopyableCode code="list_workers_with_qualification_type" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The ListWorkersWithQualificationType operation returns all of the Workers that have been associated with a given Qualification type.</td>
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
    defaultValue="list_workers_with_qualification_type"
    values={[
        { label: 'list_workers_with_qualification_type', value: 'list_workers_with_qualification_type' }
    ]}
>
<TabItem value="list_workers_with_qualification_type">

The ListWorkersWithQualificationType operation returns all of the Workers that have been associated with a given Qualification type.

```sql
SELECT
grant_time,
integer_value,
locale_value,
qualification_type_id,
status,
worker_id
FROM aws.mturk.workers_with_qualification_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
