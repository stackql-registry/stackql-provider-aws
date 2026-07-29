--- 
title: origin_endpoint_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - origin_endpoint_policies
  - mediapackagev2
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

Creates, updates, deletes, gets or lists an <code>origin_endpoint_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="origin_endpoint_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediapackagev2.origin_endpoint_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_origin_endpoint_policy"
    values={[
        { label: 'get_origin_endpoint_policy', value: 'get_origin_endpoint_policy' }
    ]}
>
<TabItem value="get_origin_endpoint_policy">

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
    <td><CopyableCode code="cdn_auth_configuration" /></td>
    <td><code>object</code></td>
    <td>The settings for using authorization headers between the MediaPackage endpoint and your CDN. For information about CDN authorization, see CDN authorization in Elemental MediaPackage in the MediaPackage user guide.</td>
</tr>
<tr>
    <td><CopyableCode code="channel_group_name" /></td>
    <td><code>string</code></td>
    <td>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="channel_name" /></td>
    <td><code>string</code></td>
    <td>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="origin_endpoint_name" /></td>
    <td><code>string</code></td>
    <td>The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td>The policy assigned to the origin endpoint.</td>
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
    <td><a href="#get_origin_endpoint_policy"><CopyableCode code="get_origin_endpoint_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-channel_group_name"><code>channel_group_name</code></a>, <a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-origin_endpoint_name"><code>origin_endpoint_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified origin endpoint policy that's configured in AWS Elemental MediaPackage.</td>
</tr>
<tr>
    <td><a href="#put_origin_endpoint_policy"><CopyableCode code="put_origin_endpoint_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-channel_group_name"><code>channel_group_name</code></a>, <a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-origin_endpoint_name"><code>origin_endpoint_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Attaches an IAM policy to the specified origin endpoint. You can attach only one policy with each request.</td>
</tr>
<tr>
    <td><a href="#delete_origin_endpoint_policy"><CopyableCode code="delete_origin_endpoint_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-channel_group_name"><code>channel_group_name</code></a>, <a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-origin_endpoint_name"><code>origin_endpoint_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an origin endpoint policy.</td>
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
<tr id="parameter-channel_group_name">
    <td><CopyableCode code="channel_group_name" /></td>
    <td><code>string</code></td>
    <td>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</td>
</tr>
<tr id="parameter-channel_name">
    <td><CopyableCode code="channel_name" /></td>
    <td><code>string</code></td>
    <td>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.</td>
</tr>
<tr id="parameter-origin_endpoint_name">
    <td><CopyableCode code="origin_endpoint_name" /></td>
    <td><code>string</code></td>
    <td>The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel.</td>
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
    defaultValue="get_origin_endpoint_policy"
    values={[
        { label: 'get_origin_endpoint_policy', value: 'get_origin_endpoint_policy' }
    ]}
>
<TabItem value="get_origin_endpoint_policy">

Retrieves the specified origin endpoint policy that's configured in AWS Elemental MediaPackage.

```sql
SELECT
cdn_auth_configuration,
channel_group_name,
channel_name,
origin_endpoint_name,
policy
FROM aws.mediapackagev2.origin_endpoint_policies
WHERE channel_group_name = '{{ channel_group_name }}' -- required
AND channel_name = '{{ channel_name }}' -- required
AND origin_endpoint_name = '{{ origin_endpoint_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_origin_endpoint_policy"
    values={[
        { label: 'put_origin_endpoint_policy', value: 'put_origin_endpoint_policy' }
    ]}
>
<TabItem value="put_origin_endpoint_policy">

Attaches an IAM policy to the specified origin endpoint. You can attach only one policy with each request.

```sql
REPLACE aws.mediapackagev2.origin_endpoint_policies
SET 
Policy = '{{ Policy }}',
CdnAuthConfiguration = '{{ CdnAuthConfiguration }}'
WHERE 
channel_group_name = '{{ channel_group_name }}' --required
AND channel_name = '{{ channel_name }}' --required
AND origin_endpoint_name = '{{ origin_endpoint_name }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_origin_endpoint_policy"
    values={[
        { label: 'delete_origin_endpoint_policy', value: 'delete_origin_endpoint_policy' }
    ]}
>
<TabItem value="delete_origin_endpoint_policy">

Delete an origin endpoint policy.

```sql
DELETE FROM aws.mediapackagev2.origin_endpoint_policies
WHERE channel_group_name = '{{ channel_group_name }}' --required
AND channel_name = '{{ channel_name }}' --required
AND origin_endpoint_name = '{{ origin_endpoint_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
