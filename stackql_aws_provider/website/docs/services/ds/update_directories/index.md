--- 
title: update_directories
hide_title: false
hide_table_of_contents: false
keywords:
  - update_directories
  - ds
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

Creates, updates, deletes, gets or lists a <code>update_directories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="update_directories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ds.update_directories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_update_directory"
    values={[
        { label: 'describe_update_directory', value: 'describe_update_directory' }
    ]}
>
<TabItem value="describe_update_directory">

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
    <td><CopyableCode code="initiated_by" /></td>
    <td><code>string</code></td>
    <td>This specifies if the update was initiated by the customer or by the service team.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last updated date and time of a particular directory setting.</td>
</tr>
<tr>
    <td><CopyableCode code="new_value" /></td>
    <td><code>object</code></td>
    <td>The new value of the target setting.</td>
</tr>
<tr>
    <td><CopyableCode code="previous_value" /></td>
    <td><code>object</code></td>
    <td>The old value of the target setting.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The name of the Region.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the UpdateDirectorySetup for the particular type.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the update performed on the directory. (Updated, Updating, UpdateFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current status of the update type activity.</td>
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
    <td><a href="#describe_update_directory"><CopyableCode code="describe_update_directory" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the updates of a directory for a particular update type.</td>
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
    defaultValue="describe_update_directory"
    values={[
        { label: 'describe_update_directory', value: 'describe_update_directory' }
    ]}
>
<TabItem value="describe_update_directory">

Describes the updates of a directory for a particular update type.

```sql
SELECT
initiated_by,
last_updated_date_time,
new_value,
previous_value,
region,
start_time,
status,
status_reason
FROM aws.ds.update_directories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
