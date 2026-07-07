--- 
title: test_set_records
hide_title: false
hide_table_of_contents: false
keywords:
  - test_set_records
  - lexv2_models
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

Creates, updates, deletes, gets or lists a <code>test_set_records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="test_set_records" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lexv2_models.test_set_records" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_test_set_records"
    values={[
        { label: 'list_test_set_records', value: 'list_test_set_records' }
    ]}
>
<TabItem value="list_test_set_records">

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
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates whether there are more records to return in a response to the ListTestSetRecords operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListTestSetRecords operation request to get the next page of records.</td>
</tr>
<tr>
    <td><CopyableCode code="testSetRecords" /></td>
    <td><code>array</code></td>
    <td>The list of records from the test set.</td>
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
    <td><a href="#list_test_set_records"><CopyableCode code="list_test_set_records" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-test_set_id"><code>test_set_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The list of test set records.</td>
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
<tr id="parameter-test_set_id">
    <td><CopyableCode code="test_set_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the test set to list its test set records.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_test_set_records"
    values={[
        { label: 'list_test_set_records', value: 'list_test_set_records' }
    ]}
>
<TabItem value="list_test_set_records">

The list of test set records.

```sql
SELECT
nextToken,
testSetRecords
FROM aws.lexv2_models.test_set_records
WHERE test_set_id = '{{ test_set_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
