--- 
title: insights
hide_title: false
hide_table_of_contents: false
keywords:
  - insights
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

Creates, updates, deletes, gets or lists an <code>insights</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="insights" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.auditmanager.insights" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_insights"
    values={[
        { label: 'get_insights', value: 'get_insights' }
    ]}
>
<TabItem value="get_insights">

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
    <td><CopyableCode code="activeAssessmentsCount" /></td>
    <td><code>integer</code></td>
    <td>The number of active assessments in Audit Manager.</td>
</tr>
<tr>
    <td><CopyableCode code="assessmentControlsCountByNoncompliantEvidence" /></td>
    <td><code>integer</code></td>
    <td>The number of assessment controls that collected non-compliant evidence on the lastUpdated date.</td>
</tr>
<tr>
    <td><CopyableCode code="compliantEvidenceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of compliance check evidence that Audit Manager classified as compliant on the lastUpdated date. This includes evidence that was collected from Security Hub with a Pass ruling, or collected from Config with a Compliant ruling.</td>
</tr>
<tr>
    <td><CopyableCode code="inconclusiveEvidenceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of evidence without a compliance check ruling. Evidence is inconclusive when the associated control uses Security Hub or Config as a data source but you didn't enable those services. This is also the case when a control uses a data source that doesn’t support compliance checks (for example: manual evidence, API calls, or CloudTrail). If evidence has a compliance check status of not applicable, it's classed as inconclusive in Insights data.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the cross-assessment insights were last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="noncompliantEvidenceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of compliance check evidence that Audit Manager classified as non-compliant on the lastUpdated date. This includes evidence that was collected from Security Hub with a Fail ruling, or collected from Config with a Non-compliant ruling.</td>
</tr>
<tr>
    <td><CopyableCode code="totalAssessmentControlsCount" /></td>
    <td><code>integer</code></td>
    <td>The total number of controls across all active assessments.</td>
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
    <td><a href="#get_insights"><CopyableCode code="get_insights" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the latest analytics data for all your current active assessments.</td>
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
    defaultValue="get_insights"
    values={[
        { label: 'get_insights', value: 'get_insights' }
    ]}
>
<TabItem value="get_insights">

Gets the latest analytics data for all your current active assessments.

```sql
SELECT
activeAssessmentsCount,
assessmentControlsCountByNoncompliantEvidence,
compliantEvidenceCount,
inconclusiveEvidenceCount,
lastUpdated,
noncompliantEvidenceCount,
totalAssessmentControlsCount
FROM aws.auditmanager.insights
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
