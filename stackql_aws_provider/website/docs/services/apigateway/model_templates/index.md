--- 
title: model_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - model_templates
  - apigateway
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

Creates, updates, deletes, gets or lists a <code>model_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigateway.model_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_model_template"
    values={[
        { label: 'get_model_template', value: 'get_model_template' }
    ]}
>
<TabItem value="get_model_template">

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
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The Apache Velocity Template Language (VTL) template content used for the template resource.</td>
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
    <td><a href="#get_model_template"><CopyableCode code="get_model_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-model_name"><code>model_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Generates a sample mapping template that can be used to transform a payload into the structure of a model.</td>
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
<tr id="parameter-model_name">
    <td><CopyableCode code="model_name" /></td>
    <td><code>string</code></td>
    <td>The name of the model for which to generate a template.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-restapi_id">
    <td><CopyableCode code="restapi_id" /></td>
    <td><code>string</code></td>
    <td>The string identifier of the associated RestApi.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_model_template"
    values={[
        { label: 'get_model_template', value: 'get_model_template' }
    ]}
>
<TabItem value="get_model_template">

Generates a sample mapping template that can be used to transform a payload into the structure of a model.

```sql
SELECT
value
FROM aws.apigateway.model_templates
WHERE restapi_id = '{{ restapi_id }}' -- required
AND model_name = '{{ model_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
