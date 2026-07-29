--- 
title: copy_product_status
hide_title: false
hide_table_of_contents: false
keywords:
  - copy_product_status
  - servicecatalog
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

Creates, updates, deletes, gets or lists a <code>copy_product_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="copy_product_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog.copy_product_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_copy_product_status"
    values={[
        { label: 'describe_copy_product_status', value: 'describe_copy_product_status' }
    ]}
>
<TabItem value="describe_copy_product_status">

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
    <td><CopyableCode code="copy_product_status" /></td>
    <td><code>string</code></td>
    <td>The status of the copy product operation. (SUCCEEDED, IN_PROGRESS, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_detail" /></td>
    <td><code>string</code></td>
    <td>The status message.</td>
</tr>
<tr>
    <td><CopyableCode code="target_product_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the copied product. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#describe_copy_product_status"><CopyableCode code="describe_copy_product_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the status of the specified copy product operation.</td>
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
    defaultValue="describe_copy_product_status"
    values={[
        { label: 'describe_copy_product_status', value: 'describe_copy_product_status' }
    ]}
>
<TabItem value="describe_copy_product_status">

Gets the status of the specified copy product operation.

```sql
SELECT
copy_product_status,
status_detail,
target_product_id
FROM aws.servicecatalog.copy_product_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
