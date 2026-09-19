--- 
title: dependency_insights
hide_title: false
hide_table_of_contents: false
keywords:
  - dependency_insights
  - resiliencehubv2
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

Creates, updates, deletes, gets or lists a <code>dependency_insights</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dependency_insights" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehubv2.dependency_insights" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_dependency_insights"
    values={[
        { label: 'get_dependency_insights', value: 'get_dependency_insights' }
    ]}
>
<TabItem value="get_dependency_insights">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the dependency insights were generated.</td>
</tr>
<tr>
    <td><CopyableCode code="error_code" /></td>
    <td><code>string</code></td>
    <td>The error code returned when insights generation failed. Valid values: INSUFFICIENT_DATA - There was not enough dependency data to generate insights. LLM_GENERATION_FAILED - The insights could not be generated. INTERNAL_ERROR - An internal error occurred while generating insights. (INSUFFICIENT_DATA, LLM_GENERATION_FAILED, INTERNAL_ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>A message describing why insights generation failed.</td>
</tr>
<tr>
    <td><CopyableCode code="insights" /></td>
    <td><code>array</code></td>
    <td>The list of dependency insights generated for the service. This field is not returned until the status is COMPLETED.</td>
</tr>
<tr>
    <td><CopyableCode code="overview" /></td>
    <td><code>string</code></td>
    <td>A summary of the dependency insights for the service. This field is not returned until the status is COMPLETED.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the dependency insights generation. Valid values: IN_PROGRESS - Insights generation is in progress. COMPLETED - Insights generation completed successfully. FAILED - Insights generation failed. See errorCode and errorMessage for details. (IN_PROGRESS, COMPLETED, FAILED)</td>
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
    <td><a href="#get_dependency_insights"><CopyableCode code="get_dependency_insights" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the dependency insights generated for a service. The response reports the current generation status; insights are populated once generation has completed. If generation failed, the response includes an error code, whose possible values are listed under the response's errorCode field, and a message describing the cause. To use this operation, you must have the resiliencehub:GetDependencyInsights permission on the service.</td>
</tr>
<tr>
    <td><a href="#start_dependency_insights"><CopyableCode code="start_dependency_insights" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serviceArn"><code>serviceArn</code></a></td>
    <td></td>
    <td>Starts generating dependency insights for a service. Generation runs asynchronously; the response returns the initial status, and you retrieve the results with GetDependencyInsights. To use this operation, you must have the resiliencehub:StartDependencyInsights permission on the service.</td>
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
<tr id="parameter-serviceArn">
    <td><CopyableCode code="serviceArn" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_dependency_insights"
    values={[
        { label: 'get_dependency_insights', value: 'get_dependency_insights' }
    ]}
>
<TabItem value="get_dependency_insights">

Retrieves the dependency insights generated for a service. The response reports the current generation status; insights are populated once generation has completed. If generation failed, the response includes an error code, whose possible values are listed under the response's errorCode field, and a message describing the cause. To use this operation, you must have the resiliencehub:GetDependencyInsights permission on the service.

```sql
SELECT
created_at,
error_code,
error_message,
insights,
overview,
status
FROM aws.resiliencehubv2.dependency_insights
WHERE serviceArn = '{{ serviceArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_dependency_insights"
    values={[
        { label: 'start_dependency_insights', value: 'start_dependency_insights' }
    ]}
>
<TabItem value="start_dependency_insights">

Starts generating dependency insights for a service. Generation runs asynchronously; the response returns the initial status, and you retrieve the results with GetDependencyInsights. To use this operation, you must have the resiliencehub:StartDependencyInsights permission on the service.

```sql
EXEC aws.resiliencehubv2.dependency_insights.start_dependency_insights 
@region='{{ region }}' --required 
@@json=
'{
"serviceArn": "{{ serviceArn }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
