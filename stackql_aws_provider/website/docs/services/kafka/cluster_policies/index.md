--- 
title: cluster_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_policies
  - kafka
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

Creates, updates, deletes, gets or lists a <code>cluster_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kafka.cluster_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cluster_policy"
    values={[
        { label: 'get_cluster_policy', value: 'get_cluster_policy' }
    ]}
>
<TabItem value="get_cluster_policy">

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
    <td><CopyableCode code="current_version" /></td>
    <td><code>string</code></td>
    <td>The version of cluster policy.</td>
</tr>
<tr>
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td>The cluster policy.</td>
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
    <td><a href="#get_cluster_policy"><CopyableCode code="get_cluster_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the MSK cluster policy specified by the Amazon Resource Name (ARN) in the request.</td>
</tr>
<tr>
    <td><a href="#put_cluster_policy"><CopyableCode code="put_cluster_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates or updates the MSK cluster policy specified by the cluster Amazon Resource Name (ARN) in the request.</td>
</tr>
<tr>
    <td><a href="#delete_cluster_policy"><CopyableCode code="delete_cluster_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the MSK cluster policy specified by the Amazon Resource Name (ARN) in the request.</td>
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
<tr id="parameter-cluster_arn">
    <td><CopyableCode code="cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the cluster.</td>
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
    defaultValue="get_cluster_policy"
    values={[
        { label: 'get_cluster_policy', value: 'get_cluster_policy' }
    ]}
>
<TabItem value="get_cluster_policy">

Get the MSK cluster policy specified by the Amazon Resource Name (ARN) in the request.

```sql
SELECT
current_version,
policy
FROM aws.kafka.cluster_policies
WHERE cluster_arn = '{{ cluster_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_cluster_policy"
    values={[
        { label: 'put_cluster_policy', value: 'put_cluster_policy' }
    ]}
>
<TabItem value="put_cluster_policy">

Creates or updates the MSK cluster policy specified by the cluster Amazon Resource Name (ARN) in the request.

```sql
REPLACE aws.kafka.cluster_policies
SET 
CurrentVersion = '{{ CurrentVersion }}',
Policy = '{{ Policy }}'
WHERE 
cluster_arn = '{{ cluster_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
current_version;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cluster_policy"
    values={[
        { label: 'delete_cluster_policy', value: 'delete_cluster_policy' }
    ]}
>
<TabItem value="delete_cluster_policy">

Deletes the MSK cluster policy specified by the Amazon Resource Name (ARN) in the request.

```sql
DELETE FROM aws.kafka.cluster_policies
WHERE cluster_arn = '{{ cluster_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
