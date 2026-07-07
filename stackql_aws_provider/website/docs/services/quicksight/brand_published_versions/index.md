--- 
title: brand_published_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - brand_published_versions
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

Creates, updates, deletes, gets or lists a <code>brand_published_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="brand_published_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.brand_published_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_brand_published_version"
    values={[
        { label: 'describe_brand_published_version', value: 'describe_brand_published_version' }
    ]}
>
<TabItem value="describe_brand_published_version">

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
    <td><CopyableCode code="BrandDefinition" /></td>
    <td><code>object</code></td>
    <td>The definition of the brand.</td>
</tr>
<tr>
    <td><CopyableCode code="BrandDetail" /></td>
    <td><code>object</code></td>
    <td>The details of the brand.</td>
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
    <td><a href="#describe_brand_published_version"><CopyableCode code="describe_brand_published_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-brand_id"><code>brand_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the published version of the brand.</td>
</tr>
<tr>
    <td><a href="#update_brand_published_version"><CopyableCode code="update_brand_published_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-brand_id"><code>brand_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VersionId"><code>VersionId</code></a></td>
    <td></td>
    <td>Updates the published version of a brand.</td>
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
    <td>The ID of the Amazon Web Services account that owns the brand.</td>
</tr>
<tr id="parameter-brand_id">
    <td><CopyableCode code="brand_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Quick brand.</td>
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
    defaultValue="describe_brand_published_version"
    values={[
        { label: 'describe_brand_published_version', value: 'describe_brand_published_version' }
    ]}
>
<TabItem value="describe_brand_published_version">

Describes the published version of the brand.

```sql
SELECT
BrandDefinition,
BrandDetail,
RequestId
FROM aws.quicksight.brand_published_versions
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND brand_id = '{{ brand_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_brand_published_version"
    values={[
        { label: 'update_brand_published_version', value: 'update_brand_published_version' }
    ]}
>
<TabItem value="update_brand_published_version">

Updates the published version of a brand.

```sql
UPDATE aws.quicksight.brand_published_versions
SET 
VersionId = '{{ VersionId }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND brand_id = '{{ brand_id }}' --required
AND region = '{{ region }}' --required
AND VersionId = '{{ VersionId }}' --required
RETURNING
RequestId,
VersionId;
```
</TabItem>
</Tabs>
