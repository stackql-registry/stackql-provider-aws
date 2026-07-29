--- 
title: and_delete_s3_access_points
hide_title: false
hide_table_of_contents: false
keywords:
  - and_delete_s3_access_points
  - fsx
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

Creates, updates, deletes, gets or lists an <code>and_delete_s3_access_points</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="and_delete_s3_access_points" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fsx.and_delete_s3_access_points" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#detach_and_delete_s3_access_point"><CopyableCode code="detach_and_delete_s3_access_point" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Detaches an S3 access point from an Amazon FSx volume and deletes the S3 access point. The requester requires the following permission to perform this action: fsx:DetachAndDeleteS3AccessPoint s3:DeleteAccessPoint</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="detach_and_delete_s3_access_point"
    values={[
        { label: 'detach_and_delete_s3_access_point', value: 'detach_and_delete_s3_access_point' }
    ]}
>
<TabItem value="detach_and_delete_s3_access_point">

Detaches an S3 access point from an Amazon FSx volume and deletes the S3 access point. The requester requires the following permission to perform this action: fsx:DetachAndDeleteS3AccessPoint s3:DeleteAccessPoint

```sql
UPDATE aws.fsx.and_delete_s3_access_points
SET 
ClientRequestToken = '{{ ClientRequestToken }}',
Name = '{{ Name }}'
WHERE 
region = '{{ region }}' --required
RETURNING
lifecycle,
name;
```
</TabItem>
</Tabs>
