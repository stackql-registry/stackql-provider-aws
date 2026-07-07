--- 
title: service_pipeline_outputs
hide_title: false
hide_table_of_contents: false
keywords:
  - service_pipeline_outputs
  - proton
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

Creates, updates, deletes, gets or lists a <code>service_pipeline_outputs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_pipeline_outputs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.proton.service_pipeline_outputs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_service_pipeline_outputs"
    values={[
        { label: 'list_service_pipeline_outputs', value: 'list_service_pipeline_outputs' }
    ]}
>
<TabItem value="list_service_pipeline_outputs">

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
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The output key.</td>
</tr>
<tr>
    <td><CopyableCode code="valueString" /></td>
    <td><code>string</code></td>
    <td>The output value.</td>
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
    <td><a href="#list_service_pipeline_outputs"><CopyableCode code="list_service_pipeline_outputs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a list of service pipeline Infrastructure as Code (IaC) outputs.</td>
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
    defaultValue="list_service_pipeline_outputs"
    values={[
        { label: 'list_service_pipeline_outputs', value: 'list_service_pipeline_outputs' }
    ]}
>
<TabItem value="list_service_pipeline_outputs">

Get a list of service pipeline Infrastructure as Code (IaC) outputs.

```sql
SELECT
key,
valueString
FROM aws.proton.service_pipeline_outputs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
