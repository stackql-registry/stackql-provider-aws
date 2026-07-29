--- 
title: channel_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - channel_policies
  - mediatailor
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

Creates, updates, deletes, gets or lists a <code>channel_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="channel_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediatailor.channel_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_channel_policy"
    values={[
        { label: 'get_channel_policy', value: 'get_channel_policy' }
    ]}
>
<TabItem value="get_channel_policy">

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
    <td>The IAM policy for the channel. IAM policies are used to control access to your channel.</td>
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
    <td><a href="#get_channel_policy"><CopyableCode code="get_channel_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the channel's IAM policy. IAM policies are used to control access to your channel.</td>
</tr>
<tr>
    <td><a href="#put_channel_policy"><CopyableCode code="put_channel_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an IAM policy for the channel. IAM policies are used to control access to your channel.</td>
</tr>
<tr>
    <td><a href="#delete_channel_policy"><CopyableCode code="delete_channel_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The channel policy to delete.</td>
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
<tr id="parameter-channel_name">
    <td><CopyableCode code="channel_name" /></td>
    <td><code>string</code></td>
    <td>The name of the channel associated with this channel policy.</td>
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
    defaultValue="get_channel_policy"
    values={[
        { label: 'get_channel_policy', value: 'get_channel_policy' }
    ]}
>
<TabItem value="get_channel_policy">

Returns the channel's IAM policy. IAM policies are used to control access to your channel.

```sql
SELECT
policy
FROM aws.mediatailor.channel_policies
WHERE channel_name = '{{ channel_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_channel_policy"
    values={[
        { label: 'put_channel_policy', value: 'put_channel_policy' }
    ]}
>
<TabItem value="put_channel_policy">

Creates an IAM policy for the channel. IAM policies are used to control access to your channel.

```sql
REPLACE aws.mediatailor.channel_policies
SET 
Policy = '{{ Policy }}'
WHERE 
channel_name = '{{ channel_name }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_channel_policy"
    values={[
        { label: 'delete_channel_policy', value: 'delete_channel_policy' }
    ]}
>
<TabItem value="delete_channel_policy">

The channel policy to delete.

```sql
DELETE FROM aws.mediatailor.channel_policies
WHERE channel_name = '{{ channel_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
