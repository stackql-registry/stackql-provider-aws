--- 
title: feed_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - feed_policies
  - elementalinference
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

Creates, updates, deletes, gets or lists a <code>feed_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="feed_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elementalinference.feed_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_feed_policy"
    values={[
        { label: 'get_feed_policy', value: 'get_feed_policy' }
    ]}
>
<TabItem value="get_feed_policy">

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
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td>The resource-based policy document attached to the feed.</td>
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
    <td><a href="#get_feed_policy"><CopyableCode code="get_feed_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the resource-based policy attached to the specified feed.</td>
</tr>
<tr>
    <td><a href="#put_feed_policy"><CopyableCode code="put_feed_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policy"><code>policy</code></a></td>
    <td></td>
    <td>Attaches or replaces a resource-based policy on the specified feed. A resource-based policy grants cross-account access to the feed.</td>
</tr>
<tr>
    <td><a href="#delete_feed_policy"><CopyableCode code="delete_feed_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the resource-based policy attached to the specified feed. After you delete the policy, the operation revokes the cross-account access that the policy granted.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the feed whose policy you want to delete.</td>
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
    defaultValue="get_feed_policy"
    values={[
        { label: 'get_feed_policy', value: 'get_feed_policy' }
    ]}
>
<TabItem value="get_feed_policy">

Retrieves the resource-based policy attached to the specified feed.

```sql
SELECT
policy
FROM aws.elementalinference.feed_policies
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_feed_policy"
    values={[
        { label: 'put_feed_policy', value: 'put_feed_policy' }
    ]}
>
<TabItem value="put_feed_policy">

Attaches or replaces a resource-based policy on the specified feed. A resource-based policy grants cross-account access to the feed.

```sql
REPLACE aws.elementalinference.feed_policies
SET 
policy = '{{ policy }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND policy = '{{ policy }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_feed_policy"
    values={[
        { label: 'delete_feed_policy', value: 'delete_feed_policy' }
    ]}
>
<TabItem value="delete_feed_policy">

Deletes the resource-based policy attached to the specified feed. After you delete the policy, the operation revokes the cross-account access that the policy granted.

```sql
DELETE FROM aws.elementalinference.feed_policies
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
