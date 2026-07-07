--- 
title: s3_access_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - s3_access_policies
  - omics
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

Creates, updates, deletes, gets or lists a <code>s3_access_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="s3_access_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.omics.s3_access_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_s3_access_policy"
    values={[
        { label: 'get_s3_access_policy', value: 'get_s3_access_policy' }
    ]}
>
<TabItem value="get_s3_access_policy">

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
    <td><CopyableCode code="s3AccessPointArn" /></td>
    <td><code>string</code></td>
    <td>The S3 access point ARN that has the access policy. (pattern: &lt;code&gt;arn:&#91;^:&#93;*:s3:&#91;^:&#93;*:&#91;^:&#93;*:accesspoint/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="s3AccessPolicy" /></td>
    <td><code>string</code></td>
    <td>The current resource policy that controls S3 access on the store.</td>
</tr>
<tr>
    <td><CopyableCode code="storeId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services-generated Sequence Store or Reference Store ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="storeType" /></td>
    <td><code>string</code></td>
    <td>The type of store associated with the access point. (SEQUENCE_STORE, REFERENCE_STORE)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the policy was last updated.</td>
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
    <td><a href="#get_s3_access_policy"><CopyableCode code="get_s3_access_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-s3_access_point_arn"><code>s3_access_point_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about an access policy on a given store.</td>
</tr>
<tr>
    <td><a href="#put_s3_access_policy"><CopyableCode code="put_s3_access_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-s3_access_point_arn"><code>s3_access_point_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-s3AccessPolicy"><code>s3AccessPolicy</code></a></td>
    <td></td>
    <td>Adds an access policy to the specified store.</td>
</tr>
<tr>
    <td><a href="#delete_s3_access_policy"><CopyableCode code="delete_s3_access_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-s3_access_point_arn"><code>s3_access_point_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an access policy for the specified store.</td>
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
<tr id="parameter-s3_access_point_arn">
    <td><CopyableCode code="s3_access_point_arn" /></td>
    <td><code>string</code></td>
    <td>The S3 access point ARN that has the access policy.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_s3_access_policy"
    values={[
        { label: 'get_s3_access_policy', value: 'get_s3_access_policy' }
    ]}
>
<TabItem value="get_s3_access_policy">

Retrieves details about an access policy on a given store.

```sql
SELECT
s3AccessPointArn,
s3AccessPolicy,
storeId,
storeType,
updateTime
FROM aws.omics.s3_access_policies
WHERE s3_access_point_arn = '{{ s3_access_point_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_s3_access_policy"
    values={[
        { label: 'put_s3_access_policy', value: 'put_s3_access_policy' }
    ]}
>
<TabItem value="put_s3_access_policy">

Adds an access policy to the specified store.

```sql
REPLACE aws.omics.s3_access_policies
SET 
s3AccessPolicy = '{{ s3AccessPolicy }}'
WHERE 
s3_access_point_arn = '{{ s3_access_point_arn }}' --required
AND region = '{{ region }}' --required
AND s3AccessPolicy = '{{ s3AccessPolicy }}' --required
RETURNING
s3AccessPointArn,
storeId,
storeType;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_s3_access_policy"
    values={[
        { label: 'delete_s3_access_policy', value: 'delete_s3_access_policy' }
    ]}
>
<TabItem value="delete_s3_access_policy">

Deletes an access policy for the specified store.

```sql
DELETE FROM aws.omics.s3_access_policies
WHERE s3_access_point_arn = '{{ s3_access_point_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
