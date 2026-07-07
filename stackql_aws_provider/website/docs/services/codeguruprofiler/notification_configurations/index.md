--- 
title: notification_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - notification_configurations
  - codeguruprofiler
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

Creates, updates, deletes, gets or lists a <code>notification_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notification_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeguruprofiler.notification_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_notification_configuration"
    values={[
        { label: 'get_notification_configuration', value: 'get_notification_configuration' }
    ]}
>
<TabItem value="get_notification_configuration">

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
    <td><CopyableCode code="channels" /></td>
    <td><code>array</code></td>
    <td>List of up to two channels to be used for sending notifications for events detected from the application profile.</td>
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
    <td><a href="#get_notification_configuration"><CopyableCode code="get_notification_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-profiling_group_name"><code>profiling_group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the current configuration for anomaly notifications for a profiling group.</td>
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
<tr id="parameter-profiling_group_name">
    <td><CopyableCode code="profiling_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the profiling group we want to get the notification configuration for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_notification_configuration"
    values={[
        { label: 'get_notification_configuration', value: 'get_notification_configuration' }
    ]}
>
<TabItem value="get_notification_configuration">

Get the current configuration for anomaly notifications for a profiling group.

```sql
SELECT
channels
FROM aws.codeguruprofiler.notification_configurations
WHERE profiling_group_name = '{{ profiling_group_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
