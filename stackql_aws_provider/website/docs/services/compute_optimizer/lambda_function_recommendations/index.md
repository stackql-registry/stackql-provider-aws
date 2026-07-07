--- 
title: lambda_function_recommendations
hide_title: false
hide_table_of_contents: false
keywords:
  - lambda_function_recommendations
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

Creates, updates, deletes, gets or lists a <code>lambda_function_recommendations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lambda_function_recommendations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.compute_optimizer.lambda_function_recommendations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_lambda_function_recommendations"
    values={[
        { label: 'get_lambda_function_recommendations', value: 'get_lambda_function_recommendations' }
    ]}
>
<TabItem value="get_lambda_function_recommendations">

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
    <td><CopyableCode code="accountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the function.</td>
</tr>
<tr>
    <td><CopyableCode code="currentMemorySize" /></td>
    <td><code>integer</code></td>
    <td>The amount of memory, in MB, that's allocated to the current function.</td>
</tr>
<tr>
    <td><CopyableCode code="currentPerformanceRisk" /></td>
    <td><code>string</code></td>
    <td>The risk of the current Lambda function not meeting the performance needs of its workloads. The higher the risk, the more likely the current Lambda function requires more memory. (VeryLow, Low, Medium, High)</td>
</tr>
<tr>
    <td><CopyableCode code="effectiveRecommendationPreferences" /></td>
    <td><code>object</code></td>
    <td>Describes the effective recommendation preferences for Lambda functions.</td>
</tr>
<tr>
    <td><CopyableCode code="finding" /></td>
    <td><code>string</code></td>
    <td>The finding classification of the function. Findings for functions include: Optimized — The function is correctly provisioned to run your workload based on its current configuration and its utilization history. This finding classification does not include finding reason codes. NotOptimized — The function is performing at a higher level (over-provisioned) or at a lower level (under-provisioned) than required for your workload because its current configuration is not optimal. Over-provisioned resources might lead to unnecessary infrastructure cost, and under-provisioned resources might lead to poor application performance. This finding classification can include the MemoryUnderprovisioned and MemoryUnderprovisioned finding reason codes. Unavailable — Compute Optimizer was unable to generate a recommendation for the function. This could be because the function has not accumulated sufficient metric data, or the function does not qualify for a recommendation. This finding classification can include the InsufficientData and Inconclusive finding reason codes. Functions with a finding of unavailable are not returned unless you specify the filter parameter with a value of Unavailable in your GetLambdaFunctionRecommendations request. (Optimized, NotOptimized, Unavailable)</td>
</tr>
<tr>
    <td><CopyableCode code="findingReasonCodes" /></td>
    <td><code>array</code></td>
    <td>The reason for the finding classification of the function. Functions that have a finding classification of Optimized don't have a finding reason code. Finding reason codes for functions include: MemoryOverprovisioned — The function is over-provisioned when its memory configuration can be sized down while still meeting the performance requirements of your workload. An over-provisioned function might lead to unnecessary infrastructure cost. This finding reason code is part of the NotOptimized finding classification. MemoryUnderprovisioned — The function is under-provisioned when its memory configuration doesn't meet the performance requirements of the workload. An under-provisioned function might lead to poor application performance. This finding reason code is part of the NotOptimized finding classification. InsufficientData — The function does not have sufficient metric data for Compute Optimizer to generate a recommendation. For more information, see the Supported resources and requirements in the Compute Optimizer User Guide. This finding reason code is part of the Unavailable finding classification. Inconclusive — The function does not qualify for a recommendation because Compute Optimizer cannot generate a recommendation with a high degree of confidence. This finding reason code is part of the Unavailable finding classification.</td>
</tr>
<tr>
    <td><CopyableCode code="functionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the current function.</td>
</tr>
<tr>
    <td><CopyableCode code="functionVersion" /></td>
    <td><code>string</code></td>
    <td>The version number of the current function.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRefreshTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the function recommendation was last generated.</td>
</tr>
<tr>
    <td><CopyableCode code="lookbackPeriodInDays" /></td>
    <td><code>number (double)</code></td>
    <td>The number of days for which utilization metrics were analyzed for the function.</td>
</tr>
<tr>
    <td><CopyableCode code="memorySizeRecommendationOptions" /></td>
    <td><code>array</code></td>
    <td>An array of objects that describe the memory configuration recommendation options for the function.</td>
</tr>
<tr>
    <td><CopyableCode code="numberOfInvocations" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of times your function code was applied during the look-back period.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags assigned to your Lambda function recommendations.</td>
</tr>
<tr>
    <td><CopyableCode code="utilizationMetrics" /></td>
    <td><code>array</code></td>
    <td>An array of objects that describe the utilization metrics of the function.</td>
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
    <td><a href="#get_lambda_function_recommendations"><CopyableCode code="get_lambda_function_recommendations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns Lambda function recommendations. Compute Optimizer generates recommendations for functions that meet a specific set of requirements. For more information, see the Supported resources and requirements in the Compute Optimizer User Guide.</td>
</tr>
<tr>
    <td><a href="#export_lambda_function_recommendations"><CopyableCode code="export_lambda_function_recommendations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-s3DestinationConfig"><code>s3DestinationConfig</code></a></td>
    <td></td>
    <td>Exports optimization recommendations for Lambda functions. Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see Exporting Recommendations in the Compute Optimizer User Guide. You can have only one Lambda function export job in progress per Amazon Web Services Region.</td>
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
    defaultValue="get_lambda_function_recommendations"
    values={[
        { label: 'get_lambda_function_recommendations', value: 'get_lambda_function_recommendations' }
    ]}
>
<TabItem value="get_lambda_function_recommendations">

Returns Lambda function recommendations. Compute Optimizer generates recommendations for functions that meet a specific set of requirements. For more information, see the Supported resources and requirements in the Compute Optimizer User Guide.

```sql
SELECT
accountId,
currentMemorySize,
currentPerformanceRisk,
effectiveRecommendationPreferences,
finding,
findingReasonCodes,
functionArn,
functionVersion,
lastRefreshTimestamp,
lookbackPeriodInDays,
memorySizeRecommendationOptions,
numberOfInvocations,
tags,
utilizationMetrics
FROM aws.compute_optimizer.lambda_function_recommendations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="export_lambda_function_recommendations"
    values={[
        { label: 'export_lambda_function_recommendations', value: 'export_lambda_function_recommendations' }
    ]}
>
<TabItem value="export_lambda_function_recommendations">

Exports optimization recommendations for Lambda functions. Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see Exporting Recommendations in the Compute Optimizer User Guide. You can have only one Lambda function export job in progress per Amazon Web Services Region.

```sql
EXEC aws.compute_optimizer.lambda_function_recommendations.export_lambda_function_recommendations 
@region='{{ region }}' --required 
@@json=
'{
"accountIds": "{{ accountIds }}", 
"filters": "{{ filters }}", 
"fieldsToExport": "{{ fieldsToExport }}", 
"s3DestinationConfig": "{{ s3DestinationConfig }}", 
"fileFormat": "{{ fileFormat }}", 
"includeMemberAccounts": {{ includeMemberAccounts }}
}'
;
```
</TabItem>
</Tabs>
