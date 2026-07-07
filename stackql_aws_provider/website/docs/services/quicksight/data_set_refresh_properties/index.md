--- 
title: data_set_refresh_properties
hide_title: false
hide_table_of_contents: false
keywords:
  - data_set_refresh_properties
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

Creates, updates, deletes, gets or lists a <code>data_set_refresh_properties</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_set_refresh_properties" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.data_set_refresh_properties" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_data_set_refresh_properties"
    values={[
        { label: 'describe_data_set_refresh_properties', value: 'describe_data_set_refresh_properties' }
    ]}
>
<TabItem value="describe_data_set_refresh_properties">

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
    <td><CopyableCode code="DataSetRefreshProperties" /></td>
    <td><code>object</code></td>
    <td>The dataset refresh properties.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
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
    <td><a href="#describe_data_set_refresh_properties"><CopyableCode code="describe_data_set_refresh_properties" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-data_set_id"><code>data_set_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the refresh properties of a dataset.</td>
</tr>
<tr>
    <td><a href="#put_data_set_refresh_properties"><CopyableCode code="put_data_set_refresh_properties" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-data_set_id"><code>data_set_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DataSetRefreshProperties"><code>DataSetRefreshProperties</code></a></td>
    <td></td>
    <td>Creates or updates the dataset refresh properties for the dataset.</td>
</tr>
<tr>
    <td><a href="#delete_data_set_refresh_properties"><CopyableCode code="delete_data_set_refresh_properties" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-data_set_id"><code>data_set_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the dataset refresh properties of the dataset.</td>
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
    <td>The Amazon Web Services account ID.</td>
</tr>
<tr id="parameter-data_set_id">
    <td><CopyableCode code="data_set_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the dataset.</td>
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
    defaultValue="describe_data_set_refresh_properties"
    values={[
        { label: 'describe_data_set_refresh_properties', value: 'describe_data_set_refresh_properties' }
    ]}
>
<TabItem value="describe_data_set_refresh_properties">

Describes the refresh properties of a dataset.

```sql
SELECT
DataSetRefreshProperties,
RequestId,
Status
FROM aws.quicksight.data_set_refresh_properties
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND data_set_id = '{{ data_set_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_data_set_refresh_properties"
    values={[
        { label: 'put_data_set_refresh_properties', value: 'put_data_set_refresh_properties' }
    ]}
>
<TabItem value="put_data_set_refresh_properties">

Creates or updates the dataset refresh properties for the dataset.

```sql
REPLACE aws.quicksight.data_set_refresh_properties
SET 
DataSetRefreshProperties = '{{ DataSetRefreshProperties }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND data_set_id = '{{ data_set_id }}' --required
AND region = '{{ region }}' --required
AND DataSetRefreshProperties = '{{ DataSetRefreshProperties }}' --required
RETURNING
RequestId,
Status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_set_refresh_properties"
    values={[
        { label: 'delete_data_set_refresh_properties', value: 'delete_data_set_refresh_properties' }
    ]}
>
<TabItem value="delete_data_set_refresh_properties">

Deletes the dataset refresh properties of the dataset.

```sql
DELETE FROM aws.quicksight.data_set_refresh_properties
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND data_set_id = '{{ data_set_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
