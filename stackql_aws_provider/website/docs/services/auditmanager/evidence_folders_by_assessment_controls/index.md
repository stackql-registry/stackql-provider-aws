--- 
title: evidence_folders_by_assessment_controls
hide_title: false
hide_table_of_contents: false
keywords:
  - evidence_folders_by_assessment_controls
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

Creates, updates, deletes, gets or lists an <code>evidence_folders_by_assessment_controls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="evidence_folders_by_assessment_controls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.auditmanager.evidence_folders_by_assessment_controls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_evidence_folders_by_assessment_control"
    values={[
        { label: 'get_evidence_folders_by_assessment_control', value: 'get_evidence_folders_by_assessment_control' }
    ]}
>
<TabItem value="get_evidence_folders_by_assessment_control">

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
    <td><CopyableCode code="evidenceFolders" /></td>
    <td><code>array</code></td>
    <td>The list of evidence folders that the GetEvidenceFoldersByAssessmentControl API returned.</td>
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
    <td><a href="#get_evidence_folders_by_assessment_control"><CopyableCode code="get_evidence_folders_by_assessment_control" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-assessment_id"><code>assessment_id</code></a>, <a href="#parameter-control_set_id"><code>control_set_id</code></a>, <a href="#parameter-control_id"><code>control_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Gets a list of evidence folders that are associated with a specified control in an Audit Manager assessment.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_evidence_folders_by_assessment_control"
    values={[
        { label: 'get_evidence_folders_by_assessment_control', value: 'get_evidence_folders_by_assessment_control' }
    ]}
>
<TabItem value="get_evidence_folders_by_assessment_control">

Gets a list of evidence folders that are associated with a specified control in an Audit Manager assessment.

```sql
SELECT
evidenceFolders,
nextToken
FROM aws.auditmanager.evidence_folders_by_assessment_controls
WHERE assessment_id = '{{ assessment_id }}' -- required
AND control_set_id = '{{ control_set_id }}' -- required
AND control_id = '{{ control_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
