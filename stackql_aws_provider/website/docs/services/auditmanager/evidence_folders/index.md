--- 
title: evidence_folders
hide_title: false
hide_table_of_contents: false
keywords:
  - evidence_folders
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

Creates, updates, deletes, gets or lists an <code>evidence_folders</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="evidence_folders" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.auditmanager.evidence_folders" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_evidence_folder"
    values={[
        { label: 'get_evidence_folder', value: 'get_evidence_folder' }
    ]}
>
<TabItem value="get_evidence_folder">

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
    <td>The identifier for the folder that the evidence is stored in. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the evidence folder. (pattern: &lt;code&gt;^&#91;\w\W\s\S&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assessment_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the assessment. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assessment_report_selection_count" /></td>
    <td><code>integer</code></td>
    <td>The total count of evidence that's included in the assessment report.</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>string</code></td>
    <td>The name of the user who created the evidence folder. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="control_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the control. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="control_name" /></td>
    <td><code>string</code></td>
    <td>The name of the control. (pattern: &lt;code&gt;^&#91;^\\&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="control_set_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the control set. (pattern: &lt;code&gt;^&#91;\w\W\s\S&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="data_source" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services service that the evidence was collected from. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the first evidence was added to the evidence folder.</td>
</tr>
<tr>
    <td><CopyableCode code="evidence_aws_service_source_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of Amazon Web Services resources that were assessed to generate the evidence.</td>
</tr>
<tr>
    <td><CopyableCode code="evidence_by_type_compliance_check_count" /></td>
    <td><code>integer</code></td>
    <td>The number of evidence that falls under the compliance check category. This evidence is collected from Config or Security Hub CSPM.</td>
</tr>
<tr>
    <td><CopyableCode code="evidence_by_type_compliance_check_issues_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of issues that were reported directly from Security Hub CSPM, Config, or both.</td>
</tr>
<tr>
    <td><CopyableCode code="evidence_by_type_configuration_data_count" /></td>
    <td><code>integer</code></td>
    <td>The number of evidence that falls under the configuration data category. This evidence is collected from configuration snapshots of other Amazon Web Services services such as Amazon EC2, Amazon S3, or IAM.</td>
</tr>
<tr>
    <td><CopyableCode code="evidence_by_type_manual_count" /></td>
    <td><code>integer</code></td>
    <td>The number of evidence that falls under the manual category. This evidence is imported manually.</td>
</tr>
<tr>
    <td><CopyableCode code="evidence_by_type_user_activity_count" /></td>
    <td><code>integer</code></td>
    <td>The number of evidence that falls under the user activity category. This evidence is collected from CloudTrail logs.</td>
</tr>
<tr>
    <td><CopyableCode code="evidence_resources_included_count" /></td>
    <td><code>integer</code></td>
    <td>The amount of evidence that's included in the evidence folder.</td>
</tr>
<tr>
    <td><CopyableCode code="total_evidence" /></td>
    <td><code>integer</code></td>
    <td>The total amount of evidence in the evidence folder.</td>
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
    <td><a href="#get_evidence_folder"><CopyableCode code="get_evidence_folder" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-assessment_id"><code>assessment_id</code></a>, <a href="#parameter-control_set_id"><code>control_set_id</code></a>, <a href="#parameter-evidence_folder_id"><code>evidence_folder_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an evidence folder from a specified assessment in Audit Manager.</td>
</tr>
<tr>
    <td><a href="#associate_assessment_report_evidence_folder"><CopyableCode code="associate_assessment_report_evidence_folder" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-assessment_id"><code>assessment_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-evidenceFolderId"><code>evidenceFolderId</code></a></td>
    <td></td>
    <td>Associates an evidence folder to an assessment report in an Audit Manager assessment.</td>
</tr>
<tr>
    <td><a href="#batch_associate_assessment_report_evidence"><CopyableCode code="batch_associate_assessment_report_evidence" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-assessment_id"><code>assessment_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-evidenceFolderId"><code>evidenceFolderId</code></a>, <a href="#parameter-evidenceIds"><code>evidenceIds</code></a></td>
    <td></td>
    <td>Associates a list of evidence to an assessment report in an Audit Manager assessment.</td>
</tr>
<tr>
    <td><a href="#batch_disassociate_assessment_report_evidence"><CopyableCode code="batch_disassociate_assessment_report_evidence" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-assessment_id"><code>assessment_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-evidenceFolderId"><code>evidenceFolderId</code></a>, <a href="#parameter-evidenceIds"><code>evidenceIds</code></a></td>
    <td></td>
    <td>Disassociates a list of evidence from an assessment report in Audit Manager.</td>
</tr>
<tr>
    <td><a href="#disassociate_assessment_report_evidence_folder"><CopyableCode code="disassociate_assessment_report_evidence_folder" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-assessment_id"><code>assessment_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-evidenceFolderId"><code>evidenceFolderId</code></a></td>
    <td></td>
    <td>Disassociates an evidence folder from the specified assessment report in Audit Manager.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_evidence_folder"
    values={[
        { label: 'get_evidence_folder', value: 'get_evidence_folder' }
    ]}
>
<TabItem value="get_evidence_folder">

Gets an evidence folder from a specified assessment in Audit Manager.

```sql
SELECT
id,
name,
assessment_id,
assessment_report_selection_count,
author,
control_id,
control_name,
control_set_id,
data_source,
date,
evidence_aws_service_source_count,
evidence_by_type_compliance_check_count,
evidence_by_type_compliance_check_issues_count,
evidence_by_type_configuration_data_count,
evidence_by_type_manual_count,
evidence_by_type_user_activity_count,
evidence_resources_included_count,
total_evidence
FROM aws.auditmanager.evidence_folders
WHERE assessment_id = '{{ assessment_id }}' -- required
AND control_set_id = '{{ control_set_id }}' -- required
AND evidence_folder_id = '{{ evidence_folder_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_assessment_report_evidence_folder"
    values={[
        { label: 'associate_assessment_report_evidence_folder', value: 'associate_assessment_report_evidence_folder' }
    ]}
>
<TabItem value="associate_assessment_report_evidence_folder">

Associates an evidence folder to an assessment report in an Audit Manager assessment.

```sql
UPDATE aws.auditmanager.evidence_folders
SET 
evidenceFolderId = '{{ evidenceFolderId }}'
WHERE 
assessment_id = '{{ assessment_id }}' --required
AND region = '{{ region }}' --required
AND evidenceFolderId = '{{ evidenceFolderId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_associate_assessment_report_evidence"
    values={[
        { label: 'batch_associate_assessment_report_evidence', value: 'batch_associate_assessment_report_evidence' },
        { label: 'batch_disassociate_assessment_report_evidence', value: 'batch_disassociate_assessment_report_evidence' },
        { label: 'disassociate_assessment_report_evidence_folder', value: 'disassociate_assessment_report_evidence_folder' }
    ]}
>
<TabItem value="batch_associate_assessment_report_evidence">

Associates a list of evidence to an assessment report in an Audit Manager assessment.

```sql
EXEC aws.auditmanager.evidence_folders.batch_associate_assessment_report_evidence 
@assessment_id='{{ assessment_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"evidenceFolderId": "{{ evidenceFolderId }}", 
"evidenceIds": "{{ evidenceIds }}"
}'
;
```
</TabItem>
<TabItem value="batch_disassociate_assessment_report_evidence">

Disassociates a list of evidence from an assessment report in Audit Manager.

```sql
EXEC aws.auditmanager.evidence_folders.batch_disassociate_assessment_report_evidence 
@assessment_id='{{ assessment_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"evidenceFolderId": "{{ evidenceFolderId }}", 
"evidenceIds": "{{ evidenceIds }}"
}'
;
```
</TabItem>
<TabItem value="disassociate_assessment_report_evidence_folder">

Disassociates an evidence folder from the specified assessment report in Audit Manager.

```sql
EXEC aws.auditmanager.evidence_folders.disassociate_assessment_report_evidence_folder 
@assessment_id='{{ assessment_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"evidenceFolderId": "{{ evidenceFolderId }}"
}'
;
```
</TabItem>
</Tabs>
