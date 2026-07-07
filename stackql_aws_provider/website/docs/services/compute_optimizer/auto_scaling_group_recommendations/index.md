--- 
title: auto_scaling_group_recommendations
hide_title: false
hide_table_of_contents: false
keywords:
  - auto_scaling_group_recommendations
  - compute_optimizer
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

Creates, updates, deletes, gets or lists an <code>auto_scaling_group_recommendations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="auto_scaling_group_recommendations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.compute_optimizer.auto_scaling_group_recommendations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_auto_scaling_group_recommendations"
    values={[
        { label: 'get_auto_scaling_group_recommendations', value: 'get_auto_scaling_group_recommendations' }
    ]}
>
<TabItem value="get_auto_scaling_group_recommendations">

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
    <td><CopyableCode code="autoScalingGroupRecommendations" /></td>
    <td><code>array</code></td>
    <td>An array of objects that describe Auto Scaling group recommendations.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>An array of objects that describe errors of the request. For example, an error is returned if you request recommendations for an unsupported Auto Scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to advance to the next page of Auto Scaling group recommendations. This value is null when there are no more pages of Auto Scaling group recommendations to return.</td>
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
    <td><a href="#get_auto_scaling_group_recommendations"><CopyableCode code="get_auto_scaling_group_recommendations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns Auto Scaling group recommendations. Compute Optimizer generates recommendations for Amazon EC2 Auto Scaling groups that meet a specific set of requirements. For more information, see the Supported resources and requirements in the Compute Optimizer User Guide.</td>
</tr>
<tr>
    <td><a href="#export_auto_scaling_group_recommendations"><CopyableCode code="export_auto_scaling_group_recommendations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-s3DestinationConfig"><code>s3DestinationConfig</code></a></td>
    <td></td>
    <td>Exports optimization recommendations for Auto Scaling groups. Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see Exporting Recommendations in the Compute Optimizer User Guide. You can have only one Auto Scaling group export job in progress per Amazon Web Services Region.</td>
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
    defaultValue="get_auto_scaling_group_recommendations"
    values={[
        { label: 'get_auto_scaling_group_recommendations', value: 'get_auto_scaling_group_recommendations' }
    ]}
>
<TabItem value="get_auto_scaling_group_recommendations">

Returns Auto Scaling group recommendations. Compute Optimizer generates recommendations for Amazon EC2 Auto Scaling groups that meet a specific set of requirements. For more information, see the Supported resources and requirements in the Compute Optimizer User Guide.

```sql
SELECT
autoScalingGroupRecommendations,
errors,
nextToken
FROM aws.compute_optimizer.auto_scaling_group_recommendations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="export_auto_scaling_group_recommendations"
    values={[
        { label: 'export_auto_scaling_group_recommendations', value: 'export_auto_scaling_group_recommendations' }
    ]}
>
<TabItem value="export_auto_scaling_group_recommendations">

Exports optimization recommendations for Auto Scaling groups. Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see Exporting Recommendations in the Compute Optimizer User Guide. You can have only one Auto Scaling group export job in progress per Amazon Web Services Region.

```sql
EXEC aws.compute_optimizer.auto_scaling_group_recommendations.export_auto_scaling_group_recommendations 
@region='{{ region }}' --required 
@@json=
'{
"accountIds": "{{ accountIds }}", 
"filters": "{{ filters }}", 
"fieldsToExport": "{{ fieldsToExport }}", 
"s3DestinationConfig": "{{ s3DestinationConfig }}", 
"fileFormat": "{{ fileFormat }}", 
"includeMemberAccounts": {{ includeMemberAccounts }}, 
"recommendationPreferences": "{{ recommendationPreferences }}"
}'
;
```
</TabItem>
</Tabs>
