--- 
title: resource_evaluations
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_evaluations
  - config
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

Creates, updates, deletes, gets or lists a <code>resource_evaluations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_evaluations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.resource_evaluations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_resource_evaluations"
    values={[
        { label: 'list_resource_evaluations', value: 'list_resource_evaluations' }
    ]}
>
<TabItem value="list_resource_evaluations">

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
    <td><CopyableCode code="evaluation_mode" /></td>
    <td><code>string</code></td>
    <td>The mode of an evaluation. The valid values are Detective or Proactive. (DETECTIVE, PROACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_start_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The starting time of an execution.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_evaluation_id" /></td>
    <td><code>string</code></td>
    <td>The ResourceEvaluationId of a evaluation.</td>
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
    <td><a href="#list_resource_evaluations"><CopyableCode code="list_resource_evaluations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of proactive resource evaluations.</td>
</tr>
<tr>
    <td><a href="#start_resource_evaluation"><CopyableCode code="start_resource_evaluation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceDetails"><code>ResourceDetails</code></a>, <a href="#parameter-EvaluationMode"><code>EvaluationMode</code></a></td>
    <td></td>
    <td>Runs an on-demand evaluation for the specified resource to determine whether the resource details will comply with configured Config rules. You can also use it for evaluation purposes. Config recommends using an evaluation context. It runs an execution against the resource details with all of the Config rules in your account that match with the specified proactive mode and resource type. Ensure you have the cloudformation:DescribeType role setup to validate the resource type schema. You can find the Resource type schema in "Amazon Web Services public extensions" within the CloudFormation registry or with the following CLI commmand: aws cloudformation describe-type --type-name "AWS::S3::Bucket" --type RESOURCE. For more information, see Managing extensions through the CloudFormation registry and Amazon Web Services resource and property types reference in the CloudFormation User Guide.</td>
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
    defaultValue="list_resource_evaluations"
    values={[
        { label: 'list_resource_evaluations', value: 'list_resource_evaluations' }
    ]}
>
<TabItem value="list_resource_evaluations">

Returns a list of proactive resource evaluations.

```sql
SELECT
evaluation_mode,
evaluation_start_timestamp,
resource_evaluation_id
FROM aws.config.resource_evaluations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_resource_evaluation"
    values={[
        { label: 'start_resource_evaluation', value: 'start_resource_evaluation' }
    ]}
>
<TabItem value="start_resource_evaluation">

Runs an on-demand evaluation for the specified resource to determine whether the resource details will comply with configured Config rules. You can also use it for evaluation purposes. Config recommends using an evaluation context. It runs an execution against the resource details with all of the Config rules in your account that match with the specified proactive mode and resource type. Ensure you have the cloudformation:DescribeType role setup to validate the resource type schema. You can find the Resource type schema in "Amazon Web Services public extensions" within the CloudFormation registry or with the following CLI commmand: aws cloudformation describe-type --type-name "AWS::S3::Bucket" --type RESOURCE. For more information, see Managing extensions through the CloudFormation registry and Amazon Web Services resource and property types reference in the CloudFormation User Guide.

```sql
EXEC aws.config.resource_evaluations.start_resource_evaluation 
@region='{{ region }}' --required 
@@json=
'{
"ResourceDetails": "{{ ResourceDetails }}", 
"EvaluationContext": "{{ EvaluationContext }}", 
"EvaluationMode": "{{ EvaluationMode }}", 
"EvaluationTimeout": {{ EvaluationTimeout }}, 
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
</Tabs>
