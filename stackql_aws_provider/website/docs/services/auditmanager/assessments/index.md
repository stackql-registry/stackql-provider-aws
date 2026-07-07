--- 
title: assessments
hide_title: false
hide_table_of_contents: false
keywords:
  - assessments
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

Creates, updates, deletes, gets or lists an <code>assessments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assessments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.auditmanager.assessments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_assessment"
    values={[
        { label: 'get_assessment', value: 'get_assessment' },
        { label: 'list_assessments', value: 'list_assessments' }
    ]}
>
<TabItem value="get_assessment">

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
    <td><CopyableCode code="assessment" /></td>
    <td><code>object</code></td>
    <td>An entity that defines the scope of audit evidence collected by Audit Manager. An Audit Manager assessment is an implementation of an Audit Manager framework.</td>
</tr>
<tr>
    <td><CopyableCode code="userRole" /></td>
    <td><code>object</code></td>
    <td>The wrapper that contains the Audit Manager role information of the current user. This includes the role type and IAM Amazon Resource Name (ARN).</td>
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
    <td><CopyableCode code="assessmentMetadata" /></td>
    <td><code>array</code></td>
    <td>The metadata that the ListAssessments API returns for each assessment.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
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
    <td><a href="#get_assessment"><CopyableCode code="get_assessment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-assessment_id"><code>assessment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specified assessment.</td>
</tr>
<tr>
    <td><a href="#list_assessments"><CopyableCode code="list_assessments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-status"><code>status</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of current and past assessments from Audit Manager.</td>
</tr>
<tr>
    <td><a href="#create_assessment"><CopyableCode code="create_assessment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-assessmentReportsDestination"><code>assessmentReportsDestination</code></a>, <a href="#parameter-scope"><code>scope</code></a>, <a href="#parameter-roles"><code>roles</code></a>, <a href="#parameter-frameworkId"><code>frameworkId</code></a></td>
    <td></td>
    <td>Creates an assessment in Audit Manager.</td>
</tr>
<tr>
    <td><a href="#update_assessment_control_set_status"><CopyableCode code="update_assessment_control_set_status" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-assessment_id"><code>assessment_id</code></a>, <a href="#parameter-control_set_id"><code>control_set_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-comment"><code>comment</code></a></td>
    <td></td>
    <td>Updates the status of a control set in an Audit Manager assessment.</td>
</tr>
<tr>
    <td><a href="#update_assessment"><CopyableCode code="update_assessment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-assessment_id"><code>assessment_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td></td>
    <td>Edits an Audit Manager assessment.</td>
</tr>
<tr>
    <td><a href="#update_assessment_status"><CopyableCode code="update_assessment_status" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-assessment_id"><code>assessment_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td></td>
    <td>Updates the status of an assessment in Audit Manager.</td>
</tr>
<tr>
    <td><a href="#delete_assessment"><CopyableCode code="delete_assessment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-assessment_id"><code>assessment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an assessment in Audit Manager.</td>
</tr>
<tr>
    <td><a href="#batch_create_delegation_by_assessment"><CopyableCode code="batch_create_delegation_by_assessment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-assessment_id"><code>assessment_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-createDelegationRequests"><code>createDelegationRequests</code></a></td>
    <td></td>
    <td>Creates a batch of delegations for an assessment in Audit Manager.</td>
</tr>
<tr>
    <td><a href="#batch_delete_delegation_by_assessment"><CopyableCode code="batch_delete_delegation_by_assessment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-assessment_id"><code>assessment_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-delegationIds"><code>delegationIds</code></a></td>
    <td></td>
    <td>Deletes a batch of delegations for an assessment in Audit Manager.</td>
</tr>
<tr>
    <td><a href="#batch_import_evidence_to_assessment_control"><CopyableCode code="batch_import_evidence_to_assessment_control" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-assessment_id"><code>assessment_id</code></a>, <a href="#parameter-control_set_id"><code>control_set_id</code></a>, <a href="#parameter-control_id"><code>control_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-manualEvidence"><code>manualEvidence</code></a></td>
    <td></td>
    <td>Adds one or more pieces of evidence to a control in an Audit Manager assessment. You can import manual evidence from any S3 bucket by specifying the S3 URI of the object. You can also upload a file from your browser, or enter plain text in response to a risk assessment question. The following restrictions apply to this action: manualEvidence can be only one of the following: evidenceFileName, s3ResourcePath, or textResponse Maximum size of an individual evidence file: 100 MB Number of daily manual evidence uploads per control: 100 Supported file formats: See Supported file types for manual evidence in the Audit Manager User Guide For more information about Audit Manager service restrictions, see Quotas and restrictions for Audit Manager.</td>
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
    <td>The identifier for the assessment.</td>
</tr>
<tr id="parameter-control_id">
    <td><CopyableCode code="control_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the control.</td>
</tr>
<tr id="parameter-control_set_id">
    <td><CopyableCode code="control_set_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the control set.</td>
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
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the assessment.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_assessment"
    values={[
        { label: 'get_assessment', value: 'get_assessment' },
        { label: 'list_assessments', value: 'list_assessments' }
    ]}
>
<TabItem value="get_assessment">

Gets information about a specified assessment.

```sql
SELECT
assessment,
userRole
FROM aws.auditmanager.assessments
WHERE assessment_id = '{{ assessment_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_assessments">

Returns a list of current and past assessments from Audit Manager.

```sql
SELECT
assessmentMetadata,
nextToken
FROM aws.auditmanager.assessments
WHERE region = '{{ region }}' -- required
AND status = '{{ status }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_assessment"
    values={[
        { label: 'create_assessment', value: 'create_assessment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_assessment">

Creates an assessment in Audit Manager.

```sql
INSERT INTO aws.auditmanager.assessments (
name,
description,
assessmentReportsDestination,
scope,
roles,
frameworkId,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ assessmentReportsDestination }}' /* required */,
'{{ scope }}' /* required */,
'{{ roles }}' /* required */,
'{{ frameworkId }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
assessment
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: assessments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the assessments resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: assessmentReportsDestination
      description: |
        The location where Audit Manager saves assessment reports for the given assessment.
      value:
        destinationType: "{{ destinationType }}"
        destination: "{{ destination }}"
    - name: scope
      description: |
        The wrapper that contains the Amazon Web Services accounts that are in scope for the assessment. You no longer need to specify which Amazon Web Services services are in scope when you create or update an assessment. Audit Manager infers the services in scope by examining your assessment controls and their data sources, and then mapping this information to the relevant Amazon Web Services services. If an underlying data source changes for your assessment, we automatically update the services scope as needed to reflect the correct Amazon Web Services services. This ensures that your assessment collects accurate and comprehensive evidence about all of the relevant services in your AWS environment.
      value:
        awsAccounts:
          - id: "{{ id }}"
            emailAddress: "{{ emailAddress }}"
            name: "{{ name }}"
        awsServices:
          - serviceName: "{{ serviceName }}"
    - name: roles
      value:
        - roleType: "{{ roleType }}"
          roleArn: "{{ roleArn }}"
    - name: frameworkId
      value: "{{ frameworkId }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_assessment_control_set_status"
    values={[
        { label: 'update_assessment_control_set_status', value: 'update_assessment_control_set_status' },
        { label: 'update_assessment', value: 'update_assessment' },
        { label: 'update_assessment_status', value: 'update_assessment_status' }
    ]}
>
<TabItem value="update_assessment_control_set_status">

Updates the status of a control set in an Audit Manager assessment.

```sql
UPDATE aws.auditmanager.assessments
SET 
status = '{{ status }}',
comment = '{{ comment }}'
WHERE 
assessment_id = '{{ assessment_id }}' --required
AND control_set_id = '{{ control_set_id }}' --required
AND region = '{{ region }}' --required
AND status = '{{ status }}' --required
AND comment = '{{ comment }}' --required
RETURNING
controlSet;
```
</TabItem>
<TabItem value="update_assessment">

Edits an Audit Manager assessment.

```sql
UPDATE aws.auditmanager.assessments
SET 
assessmentName = '{{ assessmentName }}',
assessmentDescription = '{{ assessmentDescription }}',
scope = '{{ scope }}',
assessmentReportsDestination = '{{ assessmentReportsDestination }}',
roles = '{{ roles }}'
WHERE 
assessment_id = '{{ assessment_id }}' --required
AND region = '{{ region }}' --required
AND scope = '{{ scope }}' --required
RETURNING
assessment;
```
</TabItem>
<TabItem value="update_assessment_status">

Updates the status of an assessment in Audit Manager.

```sql
UPDATE aws.auditmanager.assessments
SET 
status = '{{ status }}'
WHERE 
assessment_id = '{{ assessment_id }}' --required
AND region = '{{ region }}' --required
AND status = '{{ status }}' --required
RETURNING
assessment;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_assessment"
    values={[
        { label: 'delete_assessment', value: 'delete_assessment' }
    ]}
>
<TabItem value="delete_assessment">

Deletes an assessment in Audit Manager.

```sql
DELETE FROM aws.auditmanager.assessments
WHERE assessment_id = '{{ assessment_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_create_delegation_by_assessment"
    values={[
        { label: 'batch_create_delegation_by_assessment', value: 'batch_create_delegation_by_assessment' },
        { label: 'batch_delete_delegation_by_assessment', value: 'batch_delete_delegation_by_assessment' },
        { label: 'batch_import_evidence_to_assessment_control', value: 'batch_import_evidence_to_assessment_control' }
    ]}
>
<TabItem value="batch_create_delegation_by_assessment">

Creates a batch of delegations for an assessment in Audit Manager.

```sql
EXEC aws.auditmanager.assessments.batch_create_delegation_by_assessment 
@assessment_id='{{ assessment_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"createDelegationRequests": "{{ createDelegationRequests }}"
}'
;
```
</TabItem>
<TabItem value="batch_delete_delegation_by_assessment">

Deletes a batch of delegations for an assessment in Audit Manager.

```sql
EXEC aws.auditmanager.assessments.batch_delete_delegation_by_assessment 
@assessment_id='{{ assessment_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"delegationIds": "{{ delegationIds }}"
}'
;
```
</TabItem>
<TabItem value="batch_import_evidence_to_assessment_control">

Adds one or more pieces of evidence to a control in an Audit Manager assessment. You can import manual evidence from any S3 bucket by specifying the S3 URI of the object. You can also upload a file from your browser, or enter plain text in response to a risk assessment question. The following restrictions apply to this action: manualEvidence can be only one of the following: evidenceFileName, s3ResourcePath, or textResponse Maximum size of an individual evidence file: 100 MB Number of daily manual evidence uploads per control: 100 Supported file formats: See Supported file types for manual evidence in the Audit Manager User Guide For more information about Audit Manager service restrictions, see Quotas and restrictions for Audit Manager.

```sql
EXEC aws.auditmanager.assessments.batch_import_evidence_to_assessment_control 
@assessment_id='{{ assessment_id }}' --required, 
@control_set_id='{{ control_set_id }}' --required, 
@control_id='{{ control_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"manualEvidence": "{{ manualEvidence }}"
}'
;
```
</TabItem>
</Tabs>
