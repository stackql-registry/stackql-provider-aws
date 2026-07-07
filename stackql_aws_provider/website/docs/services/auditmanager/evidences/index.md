--- 
title: evidences
hide_title: false
hide_table_of_contents: false
keywords:
  - evidences
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

Creates, updates, deletes, gets or lists an <code>evidences</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="evidences" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.auditmanager.evidences" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_evidence"
    values={[
        { label: 'get_evidence', value: 'get_evidence' }
    ]}
>
<TabItem value="get_evidence">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the evidence. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assessmentReportSelection" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the evidence is included in the assessment report. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The names and values that are used by the evidence event. This includes an attribute name (such as allowUsersToChangePassword) and value (such as true or false).</td>
</tr>
<tr>
    <td><CopyableCode code="awsAccountId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the Amazon Web Services account. (pattern: &lt;code&gt;^&#91;0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="awsOrganization" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account that the evidence is collected from, and its organization path. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="complianceCheck" /></td>
    <td><code>string</code></td>
    <td>The evaluation status for automated evidence that falls under the compliance check category. Audit Manager classes evidence as non-compliant if Security Hub reports a Fail result, or if Config reports a Non-compliant result. Audit Manager classes evidence as compliant if Security Hub reports a Pass result, or if Config reports a Compliant result. If a compliance check isn't available or applicable, then no compliance evaluation can be made for that evidence. This is the case if the evidence uses Config or Security Hub as the underlying data source type, but those services aren't enabled. This is also the case if the evidence uses an underlying data source type that doesn't support compliance checks (such as manual evidence, Amazon Web Services API calls, or CloudTrail). (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataSource" /></td>
    <td><code>string</code></td>
    <td>The data source where the evidence was collected from. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="eventName" /></td>
    <td><code>string</code></td>
    <td>The name of the evidence event. (pattern: &lt;code&gt;^&#91;\w\W\s\S&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="eventSource" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services service that the evidence is collected from. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-\s().&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="evidenceAwsAccountId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the Amazon Web Services account. (pattern: &lt;code&gt;^&#91;0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="evidenceByType" /></td>
    <td><code>string</code></td>
    <td>The type of automated evidence. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="evidenceFolderId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the folder that the evidence is stored in. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="iamId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the user or role that's associated with the evidence. (pattern: &lt;code&gt;^arn:.*:iam:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resourcesIncluded" /></td>
    <td><code>array</code></td>
    <td>The list of resources that are assessed to generate the evidence.</td>
</tr>
<tr>
    <td><CopyableCode code="time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that represents when the evidence was collected.</td>
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
    <td><a href="#get_evidence"><CopyableCode code="get_evidence" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-assessment_id"><code>assessment_id</code></a>, <a href="#parameter-control_set_id"><code>control_set_id</code></a>, <a href="#parameter-evidence_folder_id"><code>evidence_folder_id</code></a>, <a href="#parameter-evidence_id"><code>evidence_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specified evidence item.</td>
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
<tr id="parameter-control_set_id">
    <td><CopyableCode code="control_set_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the control set.</td>
</tr>
<tr id="parameter-evidence_folder_id">
    <td><CopyableCode code="evidence_folder_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the folder that the evidence is stored in.</td>
</tr>
<tr id="parameter-evidence_id">
    <td><CopyableCode code="evidence_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the evidence.</td>
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
    defaultValue="get_evidence"
    values={[
        { label: 'get_evidence', value: 'get_evidence' }
    ]}
>
<TabItem value="get_evidence">

Gets information about a specified evidence item.

```sql
SELECT
id,
assessmentReportSelection,
attributes,
awsAccountId,
awsOrganization,
complianceCheck,
dataSource,
eventName,
eventSource,
evidenceAwsAccountId,
evidenceByType,
evidenceFolderId,
iamId,
resourcesIncluded,
time
FROM aws.auditmanager.evidences
WHERE assessment_id = '{{ assessment_id }}' -- required
AND control_set_id = '{{ control_set_id }}' -- required
AND evidence_folder_id = '{{ evidence_folder_id }}' -- required
AND evidence_id = '{{ evidence_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
