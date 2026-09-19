--- 
title: resources
hide_title: false
hide_table_of_contents: false
keywords:
  - resources
  - forecast
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

Creates, updates, deletes, gets or lists a <code>resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.forecast.resources" /></td></tr>
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
    <td><a href="#resume_resource"><CopyableCode code="resume_resource" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a></td>
    <td></td>
    <td>Resumes a stopped monitor resource.</td>
</tr>
<tr>
    <td><a href="#stop_resource"><CopyableCode code="stop_resource" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a></td>
    <td></td>
    <td>Stops a resource. The resource undergoes the following states: CREATE_STOPPING and CREATE_STOPPED. You cannot resume a resource once it has been stopped. This operation can be applied to the following resources (and their corresponding child resources): Dataset Import Job Predictor Job Forecast Job Forecast Export Job Predictor Backtest Export Job Explainability Job Explainability Export Job</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="resume_resource"
    values={[
        { label: 'resume_resource', value: 'resume_resource' },
        { label: 'stop_resource', value: 'stop_resource' }
    ]}
>
<TabItem value="resume_resource">

Resumes a stopped monitor resource.

```sql
EXEC aws.forecast.resources.resume_resource 
@region='{{ region }}' --required 
@@json=
'{
"ResourceArn": "{{ ResourceArn }}"
}'
;
```
</TabItem>
<TabItem value="stop_resource">

Stops a resource. The resource undergoes the following states: CREATE_STOPPING and CREATE_STOPPED. You cannot resume a resource once it has been stopped. This operation can be applied to the following resources (and their corresponding child resources): Dataset Import Job Predictor Job Forecast Job Forecast Export Job Predictor Backtest Export Job Explainability Job Explainability Export Job

```sql
EXEC aws.forecast.resources.stop_resource 
@region='{{ region }}' --required 
@@json=
'{
"ResourceArn": "{{ ResourceArn }}"
}'
;
```
</TabItem>
</Tabs>
