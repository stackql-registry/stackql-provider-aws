--- 
title: model_metadatas
hide_title: false
hide_table_of_contents: false
keywords:
  - model_metadatas
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>model_metadatas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_metadatas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.model_metadatas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_model_metadata"
    values={[
        { label: 'list_model_metadata', value: 'list_model_metadata' }
    ]}
>
<TabItem value="list_model_metadata">

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
    <td><CopyableCode code="Domain" /></td>
    <td><code>string</code></td>
    <td>The machine learning domain of the model.</td>
</tr>
<tr>
    <td><CopyableCode code="Framework" /></td>
    <td><code>string</code></td>
    <td>The machine learning framework of the model.</td>
</tr>
<tr>
    <td><CopyableCode code="FrameworkVersion" /></td>
    <td><code>string</code></td>
    <td>The framework version of the model.</td>
</tr>
<tr>
    <td><CopyableCode code="Model" /></td>
    <td><code>string</code></td>
    <td>The name of the model.</td>
</tr>
<tr>
    <td><CopyableCode code="Task" /></td>
    <td><code>string</code></td>
    <td>The machine learning task of the model.</td>
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
    <td><a href="#list_model_metadata"><CopyableCode code="list_model_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the domain, framework, task, and model name of standard machine learning models found in common model zoos.</td>
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
    defaultValue="list_model_metadata"
    values={[
        { label: 'list_model_metadata', value: 'list_model_metadata' }
    ]}
>
<TabItem value="list_model_metadata">

Lists the domain, framework, task, and model name of standard machine learning models found in common model zoos.

```sql
SELECT
Domain,
Framework,
FrameworkVersion,
Model,
Task
FROM aws.sagemaker.model_metadatas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
