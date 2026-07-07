--- 
title: pipeline_change_progress
hide_title: false
hide_table_of_contents: false
keywords:
  - pipeline_change_progress
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

Creates, updates, deletes, gets or lists a <code>pipeline_change_progress</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pipeline_change_progress" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.osis.pipeline_change_progress" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_pipeline_change_progress"
    values={[
        { label: 'get_pipeline_change_progress', value: 'get_pipeline_change_progress' }
    ]}
>
<TabItem value="get_pipeline_change_progress">

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
    <td><CopyableCode code="ChangeProgressStatuses" /></td>
    <td><code>array</code></td>
    <td>The current status of the change happening on the pipeline.</td>
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
    <td><a href="#get_pipeline_change_progress"><CopyableCode code="get_pipeline_change_progress" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-pipeline_name"><code>pipeline_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns progress information for the current change happening on an OpenSearch Ingestion pipeline. Currently, this operation only returns information when a pipeline is being created. For more information, see Tracking the status of pipeline creation.</td>
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
<tr id="parameter-pipeline_name">
    <td><CopyableCode code="pipeline_name" /></td>
    <td><code>string</code></td>
    <td>The name of the pipeline.</td>
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
    defaultValue="get_pipeline_change_progress"
    values={[
        { label: 'get_pipeline_change_progress', value: 'get_pipeline_change_progress' }
    ]}
>
<TabItem value="get_pipeline_change_progress">

Returns progress information for the current change happening on an OpenSearch Ingestion pipeline. Currently, this operation only returns information when a pipeline is being created. For more information, see Tracking the status of pipeline creation.

```sql
SELECT
ChangeProgressStatuses
FROM aws.osis.pipeline_change_progress
WHERE pipeline_name = '{{ pipeline_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
