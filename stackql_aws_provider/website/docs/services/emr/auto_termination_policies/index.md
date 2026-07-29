--- 
title: auto_termination_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - auto_termination_policies
  - emr
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

Creates, updates, deletes, gets or lists an <code>auto_termination_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="auto_termination_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr.auto_termination_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_auto_termination_policy"
    values={[
        { label: 'get_auto_termination_policy', value: 'get_auto_termination_policy' }
    ]}
>
<TabItem value="get_auto_termination_policy">

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
    <td><CopyableCode code="idle_timeout" /></td>
    <td><code>integer (int64)</code></td>
    <td>Specifies the amount of idle time in seconds after which the cluster automatically terminates. You can specify a minimum of 60 seconds and a maximum of 604800 seconds (seven days).</td>
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
    <td><a href="#get_auto_termination_policy"><CopyableCode code="get_auto_termination_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the auto-termination policy for an Amazon EMR cluster.</td>
</tr>
<tr>
    <td><a href="#remove_auto_termination_policy"><CopyableCode code="remove_auto_termination_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterId"><code>ClusterId</code></a></td>
    <td></td>
    <td>Removes an auto-termination policy from an Amazon EMR cluster.</td>
</tr>
<tr>
    <td><a href="#put_auto_termination_policy"><CopyableCode code="put_auto_termination_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterId"><code>ClusterId</code></a></td>
    <td></td>
    <td>Auto-termination is supported in Amazon EMR releases 5.30.0 and 6.1.0 and later. For more information, see Using an auto-termination policy. Creates or updates an auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see Control cluster termination.</td>
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
    defaultValue="get_auto_termination_policy"
    values={[
        { label: 'get_auto_termination_policy', value: 'get_auto_termination_policy' }
    ]}
>
<TabItem value="get_auto_termination_policy">

Returns the auto-termination policy for an Amazon EMR cluster.

```sql
SELECT
idle_timeout
FROM aws.emr.auto_termination_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="remove_auto_termination_policy"
    values={[
        { label: 'remove_auto_termination_policy', value: 'remove_auto_termination_policy' }
    ]}
>
<TabItem value="remove_auto_termination_policy">

Removes an auto-termination policy from an Amazon EMR cluster.

```sql
UPDATE aws.emr.auto_termination_policies
SET 
ClusterId = '{{ ClusterId }}'
WHERE 
region = '{{ region }}' --required
AND ClusterId = '{{ ClusterId }}' --required;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_auto_termination_policy"
    values={[
        { label: 'put_auto_termination_policy', value: 'put_auto_termination_policy' }
    ]}
>
<TabItem value="put_auto_termination_policy">

Auto-termination is supported in Amazon EMR releases 5.30.0 and 6.1.0 and later. For more information, see Using an auto-termination policy. Creates or updates an auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see Control cluster termination.

```sql
REPLACE aws.emr.auto_termination_policies
SET 
ClusterId = '{{ ClusterId }}',
AutoTerminationPolicy = '{{ AutoTerminationPolicy }}'
WHERE 
region = '{{ region }}' --required
AND ClusterId = '{{ ClusterId }}' --required;
```
</TabItem>
</Tabs>
