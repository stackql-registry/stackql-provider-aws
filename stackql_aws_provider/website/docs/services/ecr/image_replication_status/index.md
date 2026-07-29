--- 
title: image_replication_status
hide_title: false
hide_table_of_contents: false
keywords:
  - image_replication_status
  - ecr
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

Creates, updates, deletes, gets or lists an <code>image_replication_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="image_replication_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecr.image_replication_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_image_replication_status"
    values={[
        { label: 'describe_image_replication_status', value: 'describe_image_replication_status' }
    ]}
>
<TabItem value="describe_image_replication_status">

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
    <td><CopyableCode code="image_id" /></td>
    <td><code>object</code></td>
    <td>An object with identifying information for an image in an Amazon ECR repository.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_statuses" /></td>
    <td><code>array</code></td>
    <td>The replication status details for the images in the specified repository.</td>
</tr>
<tr>
    <td><CopyableCode code="repository_name" /></td>
    <td><code>string</code></td>
    <td>The repository name associated with the request. (pattern: &lt;code&gt;&#91;a-z0-9&#93;+((\.|_|__|-+)&#91;a-z0-9&#93;+)*(\/&#91;a-z0-9&#93;+((\.|_|__|-+)&#91;a-z0-9&#93;+)*)*&lt;/code&gt;)</td>
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
    <td><a href="#describe_image_replication_status"><CopyableCode code="describe_image_replication_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the replication status for a specified image.</td>
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
    defaultValue="describe_image_replication_status"
    values={[
        { label: 'describe_image_replication_status', value: 'describe_image_replication_status' }
    ]}
>
<TabItem value="describe_image_replication_status">

Returns the replication status for a specified image.

```sql
SELECT
image_id,
replication_statuses,
repository_name
FROM aws.ecr.image_replication_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
