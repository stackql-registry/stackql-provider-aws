--- 
title: assessments
hide_title: false
hide_table_of_contents: false
keywords:
  - assessments
  - marketplace_catalog
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

Creates, updates, deletes, gets or lists an <code>assessments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assessments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.marketplace_catalog.assessments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_assessment"
    values={[
        { label: 'describe_assessment', value: 'describe_assessment' },
        { label: 'list_assessments', value: 'list_assessments' }
    ]}
>
<TabItem value="describe_assessment">

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
    <td><CopyableCode code="control_assessment_result" /></td>
    <td><code>string</code></td>
    <td>The result of the control evaluation. (PASS, FAIL, NOT_EXECUTED, EXEMPTION_PASS)</td>
</tr>
<tr>
    <td><CopyableCode code="control_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the control that was evaluated. (pattern: &lt;code&gt;^&#91;\w\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>An array of ControlError objects associated with the control evaluation.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_assessments">

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
    <td><CopyableCode code="assessment_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN associated with the assessment. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9:*/-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assessment_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the assessment. (pattern: &lt;code&gt;^&#91;\w\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assessment_result" /></td>
    <td><code>string</code></td>
    <td>The overall result of the assessment. (PASS, FAIL)</td>
</tr>
<tr>
    <td><CopyableCode code="assessment_target_summary" /></td>
    <td><code>object</code></td>
    <td>Identifies the entity or change set that was assessed.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>The date and time the assessment was created, in ISO 8601 format (2018-02-27T13:45:22Z). (pattern: &lt;code&gt;^(&#91;\d&#93;&#123;4&#125;)\-(1&#91;0-2&#93;|0&#91;1-9&#93;)\-(3&#91;01&#93;|0&#91;1-9&#93;|&#91;12&#93;&#91;\d&#93;)T(2&#91;0-3&#93;|&#91;01&#93;&#91;\d&#93;):(&#91;0-5&#93;&#91;\d&#93;):(&#91;0-5&#93;&#91;\d&#93;)Z$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string</code></td>
    <td>The date and time the assessment expires, in ISO 8601 format (2018-02-27T13:45:22Z). (pattern: &lt;code&gt;^(&#91;\d&#93;&#123;4&#125;)\-(1&#91;0-2&#93;|0&#91;1-9&#93;)\-(3&#91;01&#93;|0&#91;1-9&#93;|&#91;12&#93;&#91;\d&#93;)T(2&#91;0-3&#93;|&#91;01&#93;&#91;\d&#93;):(&#91;0-5&#93;&#91;\d&#93;):(&#91;0-5&#93;&#91;\d&#93;)Z$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="framework_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the framework that was evaluated by this assessment, in the format frameworkId@version (for example, AMISecurity@1.0). (pattern: &lt;code&gt;^&#91;\w\-@.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="framework_summary" /></td>
    <td><code>object</code></td>
    <td>The framework-specific details of the assessed resource. The set member corresponds to the framework identified by FrameworkId.</td>
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
    <td><a href="#describe_assessment"><CopyableCode code="describe_assessment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the metadata and detailed results of a single assessment, including the framework that was evaluated, the overall assessment result, and a paginated list of individual control evaluation results. To list available assessments before describing one, use the ListAssessments action.</td>
</tr>
<tr>
    <td><a href="#list_assessments"><CopyableCode code="list_assessments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a paginated list of assessments associated with an entity or change set in AWS Marketplace. An assessment is the result of evaluating a product or change set against a framework, such as AMI Security or Container Security. Use the AssessmentTargetFilter to scope results to a specific entity or change set, and use FrameworkFilters to scope results to a single framework. To retrieve detailed control-level results for an individual assessment, use the DescribeAssessment action. Results are sorted by assessment creation time in descending order.</td>
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
    defaultValue="describe_assessment"
    values={[
        { label: 'describe_assessment', value: 'describe_assessment' },
        { label: 'list_assessments', value: 'list_assessments' }
    ]}
>
<TabItem value="describe_assessment">

Returns the metadata and detailed results of a single assessment, including the framework that was evaluated, the overall assessment result, and a paginated list of individual control evaluation results. To list available assessments before describing one, use the ListAssessments action.

```sql
SELECT
control_assessment_result,
control_id,
errors
FROM aws.marketplace_catalog.assessments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_assessments">

Returns a paginated list of assessments associated with an entity or change set in AWS Marketplace. An assessment is the result of evaluating a product or change set against a framework, such as AMI Security or Container Security. Use the AssessmentTargetFilter to scope results to a specific entity or change set, and use FrameworkFilters to scope results to a single framework. To retrieve detailed control-level results for an individual assessment, use the DescribeAssessment action. Results are sorted by assessment creation time in descending order.

```sql
SELECT
assessment_arn,
assessment_id,
assessment_result,
assessment_target_summary,
created_at,
expires_at,
framework_id,
framework_summary
FROM aws.marketplace_catalog.assessments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
