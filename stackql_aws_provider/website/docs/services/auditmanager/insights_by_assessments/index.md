--- 
title: insights_by_assessments
hide_title: false
hide_table_of_contents: false
keywords:
  - insights_by_assessments
  - auditmanager
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

Creates, updates, deletes, gets or lists an <code>insights_by_assessments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="insights_by_assessments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.auditmanager.insights_by_assessments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_insights_by_assessment"
    values={[
        { label: 'get_insights_by_assessment', value: 'get_insights_by_assessment' }
    ]}
>
<TabItem value="get_insights_by_assessment">

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
    <td><CopyableCode code="assessmentControlsCountByNoncompliantEvidence" /></td>
    <td><code>integer</code></td>
    <td>The number of assessment controls that collected non-compliant evidence on the lastUpdated date.</td>
</tr>
<tr>
    <td><CopyableCode code="compliantEvidenceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of compliance check evidence that Audit Manager classified as compliant. This includes evidence that was collected from Security Hub with a Pass ruling, or collected from Config with a Compliant ruling.</td>
</tr>
<tr>
    <td><CopyableCode code="inconclusiveEvidenceCount" /></td>
    <td><code>integer</code></td>
    <td>The amount of evidence without a compliance check ruling. Evidence is inconclusive if the associated control uses Security Hub or Config as a data source and you didn't enable those services. This is also the case if a control uses a data source that doesn’t support compliance checks (for example, manual evidence, API calls, or CloudTrail). If evidence has a compliance check status of not applicable, it's classified as inconclusive in InsightsByAssessment data.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the assessment insights were last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="noncompliantEvidenceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of compliance check evidence that Audit Manager classified as non-compliant. This includes evidence that was collected from Security Hub with a Fail ruling, or collected from Config with a Non-compliant ruling.</td>
</tr>
<tr>
    <td><CopyableCode code="totalAssessmentControlsCount" /></td>
    <td><code>integer</code></td>
    <td>The total number of controls in the assessment.</td>
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
    <td><a href="#get_insights_by_assessment"><CopyableCode code="get_insights_by_assessment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-assessment_id"><code>assessment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the latest analytics data for a specific active assessment.</td>
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
<tr id="parameter-assessment_id">
    <td><CopyableCode code="assessment_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the assessment.</td>
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
    defaultValue="get_insights_by_assessment"
    values={[
        { label: 'get_insights_by_assessment', value: 'get_insights_by_assessment' }
    ]}
>
<TabItem value="get_insights_by_assessment">

Gets the latest analytics data for a specific active assessment.

```sql
SELECT
assessmentControlsCountByNoncompliantEvidence,
compliantEvidenceCount,
inconclusiveEvidenceCount,
lastUpdated,
noncompliantEvidenceCount,
totalAssessmentControlsCount
FROM aws.auditmanager.insights_by_assessments
WHERE assessment_id = '{{ assessment_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
