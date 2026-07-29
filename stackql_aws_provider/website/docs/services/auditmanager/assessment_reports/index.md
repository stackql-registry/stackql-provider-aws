--- 
title: assessment_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - assessment_reports
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

Creates, updates, deletes, gets or lists an <code>assessment_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assessment_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.auditmanager.assessment_reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_assessment_reports"
    values={[
        { label: 'list_assessment_reports', value: 'list_assessment_reports' }
    ]}
>
<TabItem value="list_assessment_reports">

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
    <td><CopyableCode code="assessment_reports" /></td>
    <td><code>array</code></td>
    <td>The list of assessment reports that the ListAssessmentReports API returned.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The pagination token that's used to fetch the next set of results. (pattern: &lt;code&gt;^&#91;A-Za-z0-9+\/=&#93;*$&lt;/code&gt;)</td>
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
    <td><a href="#list_assessment_reports"><CopyableCode code="list_assessment_reports" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of assessment reports created in Audit Manager.</td>
</tr>
<tr>
    <td><a href="#create_assessment_report"><CopyableCode code="create_assessment_report" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-assessment_id"><code>assessment_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates an assessment report for the specified assessment.</td>
</tr>
<tr>
    <td><a href="#delete_assessment_report"><CopyableCode code="delete_assessment_report" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-assessment_id"><code>assessment_id</code></a>, <a href="#parameter-assessment_report_id"><code>assessment_report_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an assessment report in Audit Manager. When you run the DeleteAssessmentReport operation, Audit Manager attempts to delete the following data: The specified assessment report that’s stored in your S3 bucket The associated metadata that’s stored in Audit Manager If Audit Manager can’t access the assessment report in your S3 bucket, the report isn’t deleted. In this event, the DeleteAssessmentReport operation doesn’t fail. Instead, it proceeds to delete the associated metadata only. You must then delete the assessment report from the S3 bucket yourself. This scenario happens when Audit Manager receives a 403 (Forbidden) or 404 (Not Found) error from Amazon S3. To avoid this, make sure that your S3 bucket is available, and that you configured the correct permissions for Audit Manager to delete resources in your S3 bucket. For an example permissions policy that you can use, see Assessment report destination permissions in the Audit Manager User Guide. For information about the issues that could cause a 403 (Forbidden) or 404 (Not Found) error from Amazon S3, see List of Error Codes in the Amazon Simple Storage Service API Reference.</td>
</tr>
<tr>
    <td><a href="#validate_assessment_report_integrity"><CopyableCode code="validate_assessment_report_integrity" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-s3RelativePath"><code>s3RelativePath</code></a></td>
    <td></td>
    <td>Validates the integrity of an assessment report in Audit Manager.</td>
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
<tr id="parameter-assessment_report_id">
    <td><CopyableCode code="assessment_report_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the assessment report.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Represents the maximum number of results on a page or for an API request call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token that's used to fetch the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_assessment_reports"
    values={[
        { label: 'list_assessment_reports', value: 'list_assessment_reports' }
    ]}
>
<TabItem value="list_assessment_reports">

Returns a list of assessment reports created in Audit Manager.

```sql
SELECT
assessment_reports,
next_token
FROM aws.auditmanager.assessment_reports
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_assessment_report"
    values={[
        { label: 'create_assessment_report', value: 'create_assessment_report' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_assessment_report">

Creates an assessment report for the specified assessment.

```sql
INSERT INTO aws.auditmanager.assessment_reports (
name,
description,
queryStatement,
assessment_id,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ queryStatement }}',
'{{ assessment_id }}',
'{{ region }}'
RETURNING
assessment_report
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: assessment_reports
  props:
    - name: assessment_id
      value: "{{ assessment_id }}"
      description: Required parameter for the assessment_reports resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the assessment_reports resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: queryStatement
      value: "{{ queryStatement }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_assessment_report"
    values={[
        { label: 'delete_assessment_report', value: 'delete_assessment_report' }
    ]}
>
<TabItem value="delete_assessment_report">

Deletes an assessment report in Audit Manager. When you run the DeleteAssessmentReport operation, Audit Manager attempts to delete the following data: The specified assessment report that’s stored in your S3 bucket The associated metadata that’s stored in Audit Manager If Audit Manager can’t access the assessment report in your S3 bucket, the report isn’t deleted. In this event, the DeleteAssessmentReport operation doesn’t fail. Instead, it proceeds to delete the associated metadata only. You must then delete the assessment report from the S3 bucket yourself. This scenario happens when Audit Manager receives a 403 (Forbidden) or 404 (Not Found) error from Amazon S3. To avoid this, make sure that your S3 bucket is available, and that you configured the correct permissions for Audit Manager to delete resources in your S3 bucket. For an example permissions policy that you can use, see Assessment report destination permissions in the Audit Manager User Guide. For information about the issues that could cause a 403 (Forbidden) or 404 (Not Found) error from Amazon S3, see List of Error Codes in the Amazon Simple Storage Service API Reference.

```sql
DELETE FROM aws.auditmanager.assessment_reports
WHERE assessment_id = '{{ assessment_id }}' --required
AND assessment_report_id = '{{ assessment_report_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="validate_assessment_report_integrity"
    values={[
        { label: 'validate_assessment_report_integrity', value: 'validate_assessment_report_integrity' }
    ]}
>
<TabItem value="validate_assessment_report_integrity">

Validates the integrity of an assessment report in Audit Manager.

```sql
EXEC aws.auditmanager.assessment_reports.validate_assessment_report_integrity 
@region='{{ region }}' --required 
@@json=
'{
"s3RelativePath": "{{ s3RelativePath }}"
}'
;
```
</TabItem>
</Tabs>
