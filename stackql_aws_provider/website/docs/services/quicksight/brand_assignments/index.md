--- 
title: brand_assignments
hide_title: false
hide_table_of_contents: false
keywords:
  - brand_assignments
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>brand_assignments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="brand_assignments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.brand_assignments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_brand_assignment"
    values={[
        { label: 'describe_brand_assignment', value: 'describe_brand_assignment' }
    ]}
>
<TabItem value="describe_brand_assignment">

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
    <td><CopyableCode code="BrandArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the brand.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
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
    <td><a href="#describe_brand_assignment"><CopyableCode code="describe_brand_assignment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a brand assignment.</td>
</tr>
<tr>
    <td><a href="#update_brand_assignment"><CopyableCode code="update_brand_assignment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BrandArn"><code>BrandArn</code></a></td>
    <td></td>
    <td>Updates a brand assignment.</td>
</tr>
<tr>
    <td><a href="#delete_brand_assignment"><CopyableCode code="delete_brand_assignment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a brand assignment.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the brand assignment.</td>
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
    defaultValue="describe_brand_assignment"
    values={[
        { label: 'describe_brand_assignment', value: 'describe_brand_assignment' }
    ]}
>
<TabItem value="describe_brand_assignment">

Describes a brand assignment.

```sql
SELECT
BrandArn,
RequestId
FROM aws.quicksight.brand_assignments
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_brand_assignment"
    values={[
        { label: 'update_brand_assignment', value: 'update_brand_assignment' }
    ]}
>
<TabItem value="update_brand_assignment">

Updates a brand assignment.

```sql
UPDATE aws.quicksight.brand_assignments
SET 
BrandArn = '{{ BrandArn }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND region = '{{ region }}' --required
AND BrandArn = '{{ BrandArn }}' --required
RETURNING
BrandArn,
RequestId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_brand_assignment"
    values={[
        { label: 'delete_brand_assignment', value: 'delete_brand_assignment' }
    ]}
>
<TabItem value="delete_brand_assignment">

Deletes a brand assignment.

```sql
DELETE FROM aws.quicksight.brand_assignments
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
