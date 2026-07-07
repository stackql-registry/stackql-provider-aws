--- 
title: pipeline_blueprints
hide_title: false
hide_table_of_contents: false
keywords:
  - pipeline_blueprints
  - osis
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

Creates, updates, deletes, gets or lists a <code>pipeline_blueprints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pipeline_blueprints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.osis.pipeline_blueprints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_pipeline_blueprint"
    values={[
        { label: 'get_pipeline_blueprint', value: 'get_pipeline_blueprint' },
        { label: 'list_pipeline_blueprints', value: 'list_pipeline_blueprints' }
    ]}
>
<TabItem value="get_pipeline_blueprint">

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
    <td><CopyableCode code="Blueprint" /></td>
    <td><code>object</code></td>
    <td>The requested blueprint in YAML format.</td>
</tr>
<tr>
    <td><CopyableCode code="Format" /></td>
    <td><code>string</code></td>
    <td>The format of the blueprint.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_pipeline_blueprints">

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
    <td><CopyableCode code="Blueprints" /></td>
    <td><code>array</code></td>
    <td>A list of available blueprints for Data Prepper.</td>
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
    <td><a href="#get_pipeline_blueprint"><CopyableCode code="get_pipeline_blueprint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-blueprint_name"><code>blueprint_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-format"><code>format</code></a></td>
    <td>Retrieves information about a specific blueprint for OpenSearch Ingestion. Blueprints are templates for the configuration needed for a CreatePipeline request. For more information, see Using blueprints to create a pipeline.</td>
</tr>
<tr>
    <td><a href="#list_pipeline_blueprints"><CopyableCode code="list_pipeline_blueprints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of all available blueprints for Data Prepper. For more information, see Using blueprints to create a pipeline.</td>
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
<tr id="parameter-blueprint_name">
    <td><CopyableCode code="blueprint_name" /></td>
    <td><code>string</code></td>
    <td>The name of the blueprint to retrieve.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-format">
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td>The format format of the blueprint to retrieve.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_pipeline_blueprint"
    values={[
        { label: 'get_pipeline_blueprint', value: 'get_pipeline_blueprint' },
        { label: 'list_pipeline_blueprints', value: 'list_pipeline_blueprints' }
    ]}
>
<TabItem value="get_pipeline_blueprint">

Retrieves information about a specific blueprint for OpenSearch Ingestion. Blueprints are templates for the configuration needed for a CreatePipeline request. For more information, see Using blueprints to create a pipeline.

```sql
SELECT
Blueprint,
Format
FROM aws.osis.pipeline_blueprints
WHERE blueprint_name = '{{ blueprint_name }}' -- required
AND region = '{{ region }}' -- required
AND format = '{{ format }}'
;
```
</TabItem>
<TabItem value="list_pipeline_blueprints">

Retrieves a list of all available blueprints for Data Prepper. For more information, see Using blueprints to create a pipeline.

```sql
SELECT
Blueprints
FROM aws.osis.pipeline_blueprints
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
