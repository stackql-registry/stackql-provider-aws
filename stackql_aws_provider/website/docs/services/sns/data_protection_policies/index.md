--- 
title: data_protection_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - data_protection_policies
  - sns
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

Creates, updates, deletes, gets or lists a <code>data_protection_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_protection_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sns.data_protection_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_protection_policy"
    values={[
        { label: 'get_data_protection_policy', value: 'get_data_protection_policy' }
    ]}
>
<TabItem value="get_data_protection_policy">

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
    <td><CopyableCode code="DataProtectionPolicy" /></td>
    <td><code>string</code></td>
    <td>Retrieves the DataProtectionPolicy in JSON string format.</td>
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
    <td><a href="#get_data_protection_policy"><CopyableCode code="get_data_protection_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ResourceArn"><code>ResourceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified inline DataProtectionPolicy document that is stored in the specified Amazon SNS topic.</td>
</tr>
<tr>
    <td><a href="#put_data_protection_policy"><CopyableCode code="put_data_protection_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-ResourceArn"><code>ResourceArn</code></a>, <a href="#parameter-DataProtectionPolicy"><code>DataProtectionPolicy</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds or updates an inline policy document that is stored in the specified Amazon SNS topic.</td>
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
<tr id="parameter-DataProtectionPolicy">
    <td><CopyableCode code="DataProtectionPolicy" /></td>
    <td><code>string</code></td>
    <td>The JSON serialization of the topic's DataProtectionPolicy. The DataProtectionPolicy must be in JSON string format. Length Constraints: Maximum length of 30,720.</td>
</tr>
<tr id="parameter-ResourceArn">
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the topic whose DataProtectionPolicy you want to add or update. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference.</td>
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
    defaultValue="get_data_protection_policy"
    values={[
        { label: 'get_data_protection_policy', value: 'get_data_protection_policy' }
    ]}
>
<TabItem value="get_data_protection_policy">

Retrieves the specified inline DataProtectionPolicy document that is stored in the specified Amazon SNS topic.

```sql
SELECT
DataProtectionPolicy
FROM aws.sns.data_protection_policies
WHERE ResourceArn = '{{ ResourceArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_data_protection_policy"
    values={[
        { label: 'put_data_protection_policy', value: 'put_data_protection_policy' }
    ]}
>
<TabItem value="put_data_protection_policy">

Adds or updates an inline policy document that is stored in the specified Amazon SNS topic.

```sql
REPLACE aws.sns.data_protection_policies
SET 
-- No updatable properties
WHERE 
ResourceArn = '{{ ResourceArn }}' --required
AND DataProtectionPolicy = '{{ DataProtectionPolicy }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
