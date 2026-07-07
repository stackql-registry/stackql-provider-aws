--- 
title: calculation_execution_codes
hide_title: false
hide_table_of_contents: false
keywords:
  - calculation_execution_codes
  - athena
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

Creates, updates, deletes, gets or lists a <code>calculation_execution_codes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="calculation_execution_codes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.athena.calculation_execution_codes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_calculation_execution_code"
    values={[
        { label: 'get_calculation_execution_code', value: 'get_calculation_execution_code' }
    ]}
>
<TabItem value="get_calculation_execution_code">

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
    <td><CopyableCode code="CodeBlock" /></td>
    <td><code>string</code></td>
    <td>The unencrypted code that was executed for the calculation.</td>
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
    <td><a href="#get_calculation_execution_code"><CopyableCode code="get_calculation_execution_code" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the unencrypted code that was executed for the calculation.</td>
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
    defaultValue="get_calculation_execution_code"
    values={[
        { label: 'get_calculation_execution_code', value: 'get_calculation_execution_code' }
    ]}
>
<TabItem value="get_calculation_execution_code">

Retrieves the unencrypted code that was executed for the calculation.

```sql
SELECT
CodeBlock
FROM aws.athena.calculation_execution_codes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
