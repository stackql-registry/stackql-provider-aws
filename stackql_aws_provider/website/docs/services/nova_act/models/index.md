--- 
title: models
hide_title: false
hide_table_of_contents: false
keywords:
  - models
  - nova_act
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

Creates, updates, deletes, gets or lists a <code>models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="models" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.nova_act.models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_models"
    values={[
        { label: 'list_models', value: 'list_models' }
    ]}
>
<TabItem value="list_models">

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
    <td><CopyableCode code="compatibilityInformation" /></td>
    <td><code>object</code></td>
    <td>Information about client compatibility and supported models.</td>
</tr>
<tr>
    <td><CopyableCode code="modelAliases" /></td>
    <td><code>array</code></td>
    <td>A list of model aliases that provide stable references to model versions.</td>
</tr>
<tr>
    <td><CopyableCode code="modelSummaries" /></td>
    <td><code>array</code></td>
    <td>A list of available AI models with their status and compatibility information.</td>
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
    <td><a href="#list_models"><CopyableCode code="list_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-clientCompatibilityVersion"><code>clientCompatibilityVersion</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all available AI models that can be used for workflow execution, including their status and compatibility information.</td>
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
<tr id="parameter-clientCompatibilityVersion">
    <td><CopyableCode code="clientCompatibilityVersion" /></td>
    <td><code>integer</code></td>
    <td>The client compatibility version to filter models by compatibility.</td>
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
    defaultValue="list_models"
    values={[
        { label: 'list_models', value: 'list_models' }
    ]}
>
<TabItem value="list_models">

Lists all available AI models that can be used for workflow execution, including their status and compatibility information.

```sql
SELECT
compatibilityInformation,
modelAliases,
modelSummaries
FROM aws.nova_act.models
WHERE clientCompatibilityVersion = '{{ clientCompatibilityVersion }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
