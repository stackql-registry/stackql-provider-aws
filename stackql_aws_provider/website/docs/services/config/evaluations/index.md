--- 
title: evaluations
hide_title: false
hide_table_of_contents: false
keywords:
  - evaluations
  - config
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

Creates, updates, deletes, gets or lists an <code>evaluations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="evaluations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.evaluations" /></td></tr>
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
    <td><a href="#put_evaluations"><CopyableCode code="put_evaluations" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResultToken"><code>ResultToken</code></a></td>
    <td></td>
    <td>Used by an Lambda function to deliver evaluation results to Config. This operation is required in every Lambda function that is invoked by an Config rule.</td>
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

## `REPLACE` examples

<Tabs
    defaultValue="put_evaluations"
    values={[
        { label: 'put_evaluations', value: 'put_evaluations' }
    ]}
>
<TabItem value="put_evaluations">

Used by an Lambda function to deliver evaluation results to Config. This operation is required in every Lambda function that is invoked by an Config rule.

```sql
REPLACE aws.config.evaluations
SET 
Evaluations = '{{ Evaluations }}',
ResultToken = '{{ ResultToken }}',
TestMode = {{ TestMode }}
WHERE 
region = '{{ region }}' --required
AND ResultToken = '{{ ResultToken }}' --required
RETURNING
failed_evaluations;
```
</TabItem>
</Tabs>
