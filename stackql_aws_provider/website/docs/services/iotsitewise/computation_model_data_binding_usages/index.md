--- 
title: computation_model_data_binding_usages
hide_title: false
hide_table_of_contents: false
keywords:
  - computation_model_data_binding_usages
  - iotsitewise
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

Creates, updates, deletes, gets or lists a <code>computation_model_data_binding_usages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="computation_model_data_binding_usages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.computation_model_data_binding_usages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_computation_model_data_binding_usages"
    values={[
        { label: 'list_computation_model_data_binding_usages', value: 'list_computation_model_data_binding_usages' }
    ]}
>
<TabItem value="list_computation_model_data_binding_usages">

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
    <td><CopyableCode code="computationModelIds" /></td>
    <td><code>array</code></td>
    <td>The list of computation model IDs that use this data binding. This allows identification of all computation models affected by changes to the referenced data source.</td>
</tr>
<tr>
    <td><CopyableCode code="matchedDataBinding" /></td>
    <td><code>object</code></td>
    <td>The data binding matched by the filter criteria. Contains details about specific data binding values used by the computation models.</td>
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
    <td><a href="#list_computation_model_data_binding_usages"><CopyableCode code="list_computation_model_data_binding_usages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all data binding usages for computation models. This allows to identify where specific data bindings are being utilized across the computation models. This track dependencies between data sources and computation models.</td>
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
    defaultValue="list_computation_model_data_binding_usages"
    values={[
        { label: 'list_computation_model_data_binding_usages', value: 'list_computation_model_data_binding_usages' }
    ]}
>
<TabItem value="list_computation_model_data_binding_usages">

Lists all data binding usages for computation models. This allows to identify where specific data bindings are being utilized across the computation models. This track dependencies between data sources and computation models.

```sql
SELECT
computationModelIds,
matchedDataBinding
FROM aws.iotsitewise.computation_model_data_binding_usages
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
