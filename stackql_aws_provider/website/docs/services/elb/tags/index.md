--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - elb
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

Creates, updates, deletes, gets or lists a <code>tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elb.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_tags"
    values={[
        { label: 'describe_tags', value: 'describe_tags' }
    ]}
>
<TabItem value="describe_tags">

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
    <td><CopyableCode code="LoadBalancerName" /></td>
    <td><code>string</code></td>
    <td>The name of the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags.</td>
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
    <td><a href="#describe_tags"><CopyableCode code="describe_tags" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-LoadBalancerNames"><code>LoadBalancerNames</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the tags associated with the specified load balancers.</td>
</tr>
<tr>
    <td><a href="#add_tags"><CopyableCode code="add_tags" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-LoadBalancerNames"><code>LoadBalancerNames</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Adds the specified tags to the specified load balancer. Each load balancer can have a maximum of 10 tags. Each tag consists of a key and an optional value. If a tag with the same key is already associated with the load balancer, AddTags updates its value. For more information, see Tag Your Classic Load Balancer in the Classic Load Balancers Guide.</td>
</tr>
<tr>
    <td><a href="#remove_tags"><CopyableCode code="remove_tags" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-LoadBalancerNames"><code>LoadBalancerNames</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Removes one or more tags from the specified load balancer.</td>
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
<tr id="parameter-LoadBalancerNames">
    <td><CopyableCode code="LoadBalancerNames" /></td>
    <td><code>array</code></td>
    <td>The name of the load balancer. You can specify a maximum of one load balancer name.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The list of tag keys to remove.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_tags"
    values={[
        { label: 'describe_tags', value: 'describe_tags' }
    ]}
>
<TabItem value="describe_tags">

Describes the tags associated with the specified load balancers.

```sql
SELECT
LoadBalancerName,
Tags
FROM aws.elb.tags
WHERE LoadBalancerNames = '{{ LoadBalancerNames }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_tags"
    values={[
        { label: 'add_tags', value: 'add_tags' }
    ]}
>
<TabItem value="add_tags">

Adds the specified tags to the specified load balancer. Each load balancer can have a maximum of 10 tags. Each tag consists of a key and an optional value. If a tag with the same key is already associated with the load balancer, AddTags updates its value. For more information, see Tag Your Classic Load Balancer in the Classic Load Balancers Guide.

```sql
UPDATE aws.elb.tags
SET 
-- No updatable properties
WHERE 
LoadBalancerNames = '{{ LoadBalancerNames }}' --required
AND region = '{{ region }}' --required
AND Tags = '{{ Tags}}'
RETURNING
line_items;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="remove_tags"
    values={[
        { label: 'remove_tags', value: 'remove_tags' }
    ]}
>
<TabItem value="remove_tags">

Removes one or more tags from the specified load balancer.

```sql
EXEC aws.elb.tags.remove_tags 
@LoadBalancerNames='{{ LoadBalancerNames }}' --required, 
@region='{{ region }}' --required, 
@Tags='{{ Tags }}'
;
```
</TabItem>
</Tabs>
