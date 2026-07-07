--- 
title: controls
hide_title: false
hide_table_of_contents: false
keywords:
  - controls
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

Creates, updates, deletes, gets or lists a <code>controls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="controls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.auditmanager.controls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_controls"
    values={[
        { label: 'list_controls', value: 'list_controls' },
        { label: 'get_control', value: 'get_control' }
    ]}
>
<TabItem value="list_controls">

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
    <td><CopyableCode code="controlMetadataList" /></td>
    <td><code>array</code></td>
    <td>A list of metadata that the ListControls API returns for each control.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token that's used to fetch the next set of results. (pattern: &lt;code&gt;^&#91;A-Za-z0-9+\/=&#93;*$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_control">

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
    <td>The unique identifier for the control. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the control. (pattern: &lt;code&gt;^&#91;^\\&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="actionPlanInstructions" /></td>
    <td><code>string</code></td>
    <td>The recommended actions to carry out if the control isn't fulfilled. (pattern: &lt;code&gt;^&#91;\w\W\s\S&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="actionPlanTitle" /></td>
    <td><code>string</code></td>
    <td>The title of the action plan for remediating the control. (pattern: &lt;code&gt;^&#91;\w\W\s\S&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the control. (pattern: &lt;code&gt;^arn:.*:auditmanager:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="controlMappingSources" /></td>
    <td><code>array</code></td>
    <td>The data mapping sources for the control.</td>
</tr>
<tr>
    <td><CopyableCode code="controlSources" /></td>
    <td><code>string</code></td>
    <td>The data source types that determine where Audit Manager collects evidence from for the control. (pattern: &lt;code&gt;^&#91;a-zA-Z_0-9-\s.,&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the control was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user or role that created the control. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\s-_()\&#91;\&#93;&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the control. (pattern: &lt;code&gt;^&#91;\w\W\s\S&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the control was most recently updated.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedBy" /></td>
    <td><code>string</code></td>
    <td>The user or role that most recently updated the control. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\s-_()\&#91;\&#93;&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the control. The END_OF_SUPPORT state is applicable to standard controls only. This state indicates that the standard control can still be used to collect evidence, but Audit Manager is no longer updating or maintaining that control. (ACTIVE, END_OF_SUPPORT)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with the control.</td>
</tr>
<tr>
    <td><CopyableCode code="testingInformation" /></td>
    <td><code>string</code></td>
    <td>The steps that you should follow to determine if the control has been satisfied. (pattern: &lt;code&gt;^&#91;\w\W\s\S&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the control is a standard control or a custom control. (Standard, Custom, Core)</td>
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
    <td><a href="#list_controls"><CopyableCode code="list_controls" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-controlType"><code>controlType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-controlCatalogId"><code>controlCatalogId</code></a></td>
    <td>Returns a list of controls from Audit Manager.</td>
</tr>
<tr>
    <td><a href="#get_control"><CopyableCode code="get_control" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-control_id"><code>control_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specified control.</td>
</tr>
<tr>
    <td><a href="#create_control"><CopyableCode code="create_control" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-controlMappingSources"><code>controlMappingSources</code></a></td>
    <td></td>
    <td>Creates a new custom control in Audit Manager.</td>
</tr>
<tr>
    <td><a href="#update_control"><CopyableCode code="update_control" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-control_id"><code>control_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-controlMappingSources"><code>controlMappingSources</code></a></td>
    <td></td>
    <td>Updates a custom control in Audit Manager.</td>
</tr>
<tr>
    <td><a href="#update_assessment_control"><CopyableCode code="update_assessment_control" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-assessment_id"><code>assessment_id</code></a>, <a href="#parameter-control_set_id"><code>control_set_id</code></a>, <a href="#parameter-control_id"><code>control_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a control within an assessment in Audit Manager.</td>
</tr>
<tr>
    <td><a href="#delete_control"><CopyableCode code="delete_control" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-control_id"><code>control_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a custom control in Audit Manager. When you invoke this operation, the custom control is deleted from any frameworks or assessments that it’s currently part of. As a result, Audit Manager will stop collecting evidence for that custom control in all of your assessments. This includes assessments that you previously created before you deleted the custom control.</td>
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
<tr id="parameter-controlType">
    <td><CopyableCode code="controlType" /></td>
    <td><code>string</code></td>
    <td>A filter that narrows the list of controls to a specific type.</td>
</tr>
<tr id="parameter-control_id">
    <td><CopyableCode code="control_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the control.</td>
</tr>
<tr id="parameter-control_set_id">
    <td><CopyableCode code="control_set_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the control set.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-controlCatalogId">
    <td><CopyableCode code="controlCatalogId" /></td>
    <td><code>string</code></td>
    <td>A filter that narrows the list of controls to a specific resource from the Amazon Web Services Control Catalog. To use this parameter, specify the ARN of the Control Catalog resource. You can specify either a control domain, a control objective, or a common control. For information about how to find the ARNs for these resources, see ListDomains , ListObjectives , and ListCommonControls . You can only filter by one Control Catalog resource at a time. Specifying multiple resource ARNs isn’t currently supported. If you want to filter by more than one ARN, we recommend that you run the ListControls operation separately for each ARN. Alternatively, specify UNCATEGORIZED to list controls that aren't mapped to a Control Catalog resource. For example, this operation might return a list of custom controls that don't belong to any control domain or control objective.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results on a page or for an API request call.</td>
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
    defaultValue="list_controls"
    values={[
        { label: 'list_controls', value: 'list_controls' },
        { label: 'get_control', value: 'get_control' }
    ]}
>
<TabItem value="list_controls">

Returns a list of controls from Audit Manager.

```sql
SELECT
controlMetadataList,
nextToken
FROM aws.auditmanager.controls
WHERE controlType = '{{ controlType }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND controlCatalogId = '{{ controlCatalogId }}'
;
```
</TabItem>
<TabItem value="get_control">

Gets information about a specified control.

```sql
SELECT
id,
name,
actionPlanInstructions,
actionPlanTitle,
arn,
controlMappingSources,
controlSources,
createdAt,
createdBy,
description,
lastUpdatedAt,
lastUpdatedBy,
state,
tags,
testingInformation,
type_
FROM aws.auditmanager.controls
WHERE control_id = '{{ control_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_control"
    values={[
        { label: 'create_control', value: 'create_control' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_control">

Creates a new custom control in Audit Manager.

```sql
INSERT INTO aws.auditmanager.controls (
name,
description,
testingInformation,
actionPlanTitle,
actionPlanInstructions,
controlMappingSources,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ testingInformation }}',
'{{ actionPlanTitle }}',
'{{ actionPlanInstructions }}',
'{{ controlMappingSources }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
control
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: controls
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the controls resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: testingInformation
      value: "{{ testingInformation }}"
    - name: actionPlanTitle
      value: "{{ actionPlanTitle }}"
    - name: actionPlanInstructions
      value: "{{ actionPlanInstructions }}"
    - name: controlMappingSources
      value:
        - sourceName: "{{ sourceName }}"
          sourceDescription: "{{ sourceDescription }}"
          sourceSetUpOption: "{{ sourceSetUpOption }}"
          sourceType: "{{ sourceType }}"
          sourceKeyword:
            keywordInputType: "{{ keywordInputType }}"
            keywordValue: "{{ keywordValue }}"
          sourceFrequency: "{{ sourceFrequency }}"
          troubleshootingText: "{{ troubleshootingText }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_control"
    values={[
        { label: 'update_control', value: 'update_control' },
        { label: 'update_assessment_control', value: 'update_assessment_control' }
    ]}
>
<TabItem value="update_control">

Updates a custom control in Audit Manager.

```sql
UPDATE aws.auditmanager.controls
SET 
name = '{{ name }}',
description = '{{ description }}',
testingInformation = '{{ testingInformation }}',
actionPlanTitle = '{{ actionPlanTitle }}',
actionPlanInstructions = '{{ actionPlanInstructions }}',
controlMappingSources = '{{ controlMappingSources }}'
WHERE 
control_id = '{{ control_id }}' --required
AND region = '{{ region }}' --required
AND name = '{{ name }}' --required
AND controlMappingSources = '{{ controlMappingSources }}' --required
RETURNING
control;
```
</TabItem>
<TabItem value="update_assessment_control">

Updates a control within an assessment in Audit Manager.

```sql
UPDATE aws.auditmanager.controls
SET 
controlStatus = '{{ controlStatus }}',
commentBody = '{{ commentBody }}'
WHERE 
assessment_id = '{{ assessment_id }}' --required
AND control_set_id = '{{ control_set_id }}' --required
AND control_id = '{{ control_id }}' --required
AND region = '{{ region }}' --required
RETURNING
control;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_control"
    values={[
        { label: 'delete_control', value: 'delete_control' }
    ]}
>
<TabItem value="delete_control">

Deletes a custom control in Audit Manager. When you invoke this operation, the custom control is deleted from any frameworks or assessments that it’s currently part of. As a result, Audit Manager will stop collecting evidence for that custom control in all of your assessments. This includes assessments that you previously created before you deleted the custom control.

```sql
DELETE FROM aws.auditmanager.controls
WHERE control_id = '{{ control_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
