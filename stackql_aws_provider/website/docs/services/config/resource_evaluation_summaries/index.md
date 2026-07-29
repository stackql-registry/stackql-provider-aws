--- 
title: resource_evaluation_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_evaluation_summaries
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

Creates, updates, deletes, gets or lists a <code>resource_evaluation_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_evaluation_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.resource_evaluation_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_evaluation_summary"
    values={[
        { label: 'get_resource_evaluation_summary', value: 'get_resource_evaluation_summary' }
    ]}
>
<TabItem value="get_resource_evaluation_summary">

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
    <td><CopyableCode code="compliance" /></td>
    <td><code>string</code></td>
    <td>The compliance status of the resource evaluation summary. (COMPLIANT, NON_COMPLIANT, NOT_APPLICABLE, INSUFFICIENT_DATA)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_context" /></td>
    <td><code>object</code></td>
    <td>Returns an EvaluationContext object.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_mode" /></td>
    <td><code>string</code></td>
    <td>Lists results of the mode that you requested to retrieve the resource evaluation summary. The valid values are Detective or Proactive. (DETECTIVE, PROACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_start_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start timestamp when Config rule starts evaluating compliance for the provided resource details.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_status" /></td>
    <td><code>object</code></td>
    <td>Returns an EvaluationStatus object.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_details" /></td>
    <td><code>object</code></td>
    <td>Returns a ResourceDetails object.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_evaluation_id" /></td>
    <td><code>string</code></td>
    <td>The unique ResourceEvaluationId of Amazon Web Services resource execution for which you want to retrieve the evaluation summary.</td>
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
    <td><a href="#get_resource_evaluation_summary"><CopyableCode code="get_resource_evaluation_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a summary of resource evaluation for the specified resource evaluation ID from the proactive rules that were run. The results indicate which evaluation context was used to evaluate the rules, which resource details were evaluated, the evaluation mode that was run, and whether the resource details comply with the configuration of the proactive rules. To see additional information about the evaluation result, such as which rule flagged a resource as NON_COMPLIANT, use the GetComplianceDetailsByResource API. For more information, see the Examples section.</td>
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
    defaultValue="get_resource_evaluation_summary"
    values={[
        { label: 'get_resource_evaluation_summary', value: 'get_resource_evaluation_summary' }
    ]}
>
<TabItem value="get_resource_evaluation_summary">

Returns a summary of resource evaluation for the specified resource evaluation ID from the proactive rules that were run. The results indicate which evaluation context was used to evaluate the rules, which resource details were evaluated, the evaluation mode that was run, and whether the resource details comply with the configuration of the proactive rules. To see additional information about the evaluation result, such as which rule flagged a resource as NON_COMPLIANT, use the GetComplianceDetailsByResource API. For more information, see the Examples section.

```sql
SELECT
compliance,
evaluation_context,
evaluation_mode,
evaluation_start_timestamp,
evaluation_status,
resource_details,
resource_evaluation_id
FROM aws.config.resource_evaluation_summaries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
