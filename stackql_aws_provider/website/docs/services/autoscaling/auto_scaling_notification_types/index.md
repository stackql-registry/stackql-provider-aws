--- 
title: auto_scaling_notification_types
hide_title: false
hide_table_of_contents: false
keywords:
  - auto_scaling_notification_types
  - autoscaling
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

Creates, updates, deletes, gets or lists an <code>auto_scaling_notification_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="auto_scaling_notification_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.autoscaling.auto_scaling_notification_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_auto_scaling_notification_types"
    values={[
        { label: 'describe_auto_scaling_notification_types', value: 'describe_auto_scaling_notification_types' }
    ]}
>
<TabItem value="describe_auto_scaling_notification_types">

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
    <td><CopyableCode code="auto_scaling_notification_type" /></td>
    <td><code>string</code></td>
    <td>The notification types.</td>
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
    <td><a href="#describe_auto_scaling_notification_types"><CopyableCode code="describe_auto_scaling_notification_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the notification types that are supported by Amazon EC2 Auto Scaling.</td>
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
    defaultValue="describe_auto_scaling_notification_types"
    values={[
        { label: 'describe_auto_scaling_notification_types', value: 'describe_auto_scaling_notification_types' }
    ]}
>
<TabItem value="describe_auto_scaling_notification_types">

Describes the notification types that are supported by Amazon EC2 Auto Scaling.

```sql
SELECT
auto_scaling_notification_type
FROM aws.autoscaling.auto_scaling_notification_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
