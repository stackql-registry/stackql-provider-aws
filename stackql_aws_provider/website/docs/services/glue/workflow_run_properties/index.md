--- 
title: workflow_run_properties
hide_title: false
hide_table_of_contents: false
keywords:
  - workflow_run_properties
  - glue
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

Creates, updates, deletes, gets or lists a <code>workflow_run_properties</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workflow_run_properties" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.workflow_run_properties" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_workflow_run_properties"
    values={[
        { label: 'get_workflow_run_properties', value: 'get_workflow_run_properties' }
    ]}
>
<TabItem value="get_workflow_run_properties">

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
    <td><CopyableCode code="run_properties" /></td>
    <td><code>object</code></td>
    <td>The workflow run properties which were set during the specified run.</td>
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
    <td><a href="#get_workflow_run_properties"><CopyableCode code="get_workflow_run_properties" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the workflow run properties which were set during the run.</td>
</tr>
<tr>
    <td><a href="#put_workflow_run_properties"><CopyableCode code="put_workflow_run_properties" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-RunId"><code>RunId</code></a>, <a href="#parameter-RunProperties"><code>RunProperties</code></a></td>
    <td></td>
    <td>Puts the specified workflow run properties for the given workflow run. If a property already exists for the specified run, then it overrides the value otherwise adds the property to existing properties.</td>
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
    defaultValue="get_workflow_run_properties"
    values={[
        { label: 'get_workflow_run_properties', value: 'get_workflow_run_properties' }
    ]}
>
<TabItem value="get_workflow_run_properties">

Retrieves the workflow run properties which were set during the run.

```sql
SELECT
run_properties
FROM aws.glue.workflow_run_properties
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_workflow_run_properties"
    values={[
        { label: 'put_workflow_run_properties', value: 'put_workflow_run_properties' }
    ]}
>
<TabItem value="put_workflow_run_properties">

Puts the specified workflow run properties for the given workflow run. If a property already exists for the specified run, then it overrides the value otherwise adds the property to existing properties.

```sql
REPLACE aws.glue.workflow_run_properties
SET 
Name = '{{ Name }}',
RunId = '{{ RunId }}',
RunProperties = '{{ RunProperties }}'
WHERE 
region = '{{ region }}' --required
AND Name = '{{ Name }}' --required
AND RunId = '{{ RunId }}' --required
AND RunProperties = '{{ RunProperties }}' --required;
```
</TabItem>
</Tabs>
