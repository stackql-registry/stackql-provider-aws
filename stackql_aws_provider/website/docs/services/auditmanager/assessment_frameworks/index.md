--- 
title: assessment_frameworks
hide_title: false
hide_table_of_contents: false
keywords:
  - assessment_frameworks
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

Creates, updates, deletes, gets or lists an <code>assessment_frameworks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assessment_frameworks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.auditmanager.assessment_frameworks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_assessment_frameworks"
    values={[
        { label: 'list_assessment_frameworks', value: 'list_assessment_frameworks' },
        { label: 'get_assessment_framework', value: 'get_assessment_framework' }
    ]}
>
<TabItem value="list_assessment_frameworks">

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
    <td><CopyableCode code="frameworkMetadataList" /></td>
    <td><code>array</code></td>
    <td>A list of metadata that the ListAssessmentFrameworks API returns for each framework.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token that's used to fetch the next set of results. (pattern: &lt;code&gt;^&#91;A-Za-z0-9+\/=&#93;*$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_assessment_framework">

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
    <td>The unique identifier for the framework. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the framework. (pattern: &lt;code&gt;^&#91;^\\&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the framework. (pattern: &lt;code&gt;^arn:.*:auditmanager:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="complianceType" /></td>
    <td><code>string</code></td>
    <td>The compliance type that the framework supports, such as CIS or HIPAA. (pattern: &lt;code&gt;^&#91;\w\W\s\S&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="controlSets" /></td>
    <td><code>array</code></td>
    <td>The control sets that are associated with the framework. The Controls object returns a partial response when called through Framework APIs. For a complete Controls object, use GetControl.</td>
</tr>
<tr>
    <td><CopyableCode code="controlSources" /></td>
    <td><code>string</code></td>
    <td>The control data sources where Audit Manager collects evidence from. This API parameter is no longer supported. (pattern: &lt;code&gt;^&#91;a-zA-Z_0-9-\s.,&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the framework was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user or role that created the framework. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\s-_()\&#91;\&#93;&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the framework. (pattern: &lt;code&gt;^&#91;\w\W\s\S&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the framework was most recently updated.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedBy" /></td>
    <td><code>string</code></td>
    <td>The user or role that most recently updated the framework. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\s-_()\&#91;\&#93;&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="logo" /></td>
    <td><code>string</code></td>
    <td>The logo that's associated with the framework. (pattern: &lt;code&gt;^&#91;\w,\s-&#93;+\.&#91;A-Za-z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags that are associated with the framework.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the framework is a standard framework or a custom framework. (Standard, Custom)</td>
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
    <td><a href="#list_assessment_frameworks"><CopyableCode code="list_assessment_frameworks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-frameworkType"><code>frameworkType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of the frameworks that are available in the Audit Manager framework library.</td>
</tr>
<tr>
    <td><a href="#get_assessment_framework"><CopyableCode code="get_assessment_framework" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-framework_id"><code>framework_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specified framework.</td>
</tr>
<tr>
    <td><a href="#create_assessment_framework"><CopyableCode code="create_assessment_framework" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-controlSets"><code>controlSets</code></a></td>
    <td></td>
    <td>Creates a custom framework in Audit Manager.</td>
</tr>
<tr>
    <td><a href="#update_assessment_framework"><CopyableCode code="update_assessment_framework" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-framework_id"><code>framework_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-controlSets"><code>controlSets</code></a></td>
    <td></td>
    <td>Updates a custom framework in Audit Manager.</td>
</tr>
<tr>
    <td><a href="#update_assessment_framework_share"><CopyableCode code="update_assessment_framework_share" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-request_id"><code>request_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-requestType"><code>requestType</code></a>, <a href="#parameter-action"><code>action</code></a></td>
    <td></td>
    <td>Updates a share request for a custom framework in Audit Manager.</td>
</tr>
<tr>
    <td><a href="#delete_assessment_framework_share"><CopyableCode code="delete_assessment_framework_share" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-request_id"><code>request_id</code></a>, <a href="#parameter-requestType"><code>requestType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a share request for a custom framework in Audit Manager.</td>
</tr>
<tr>
    <td><a href="#delete_assessment_framework"><CopyableCode code="delete_assessment_framework" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-framework_id"><code>framework_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a custom framework in Audit Manager.</td>
</tr>
<tr>
    <td><a href="#start_assessment_framework_share"><CopyableCode code="start_assessment_framework_share" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-framework_id"><code>framework_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-destinationAccount"><code>destinationAccount</code></a>, <a href="#parameter-destinationRegion"><code>destinationRegion</code></a></td>
    <td></td>
    <td>Creates a share request for a custom framework in Audit Manager. The share request specifies a recipient and notifies them that a custom framework is available. Recipients have 120 days to accept or decline the request. If no action is taken, the share request expires. When you create a share request, Audit Manager stores a snapshot of your custom framework in the US East (N. Virginia) Amazon Web Services Region. Audit Manager also stores a backup of the same snapshot in the US West (Oregon) Amazon Web Services Region. Audit Manager deletes the snapshot and the backup snapshot when one of the following events occurs: The sender revokes the share request. The recipient declines the share request. The recipient encounters an error and doesn't successfully accept the share request. The share request expires before the recipient responds to the request. When a sender resends a share request, the snapshot is replaced with an updated version that corresponds with the latest version of the custom framework. When a recipient accepts a share request, the snapshot is replicated into their Amazon Web Services account under the Amazon Web Services Region that was specified in the share request. When you invoke the StartAssessmentFrameworkShare API, you are about to share a custom framework with another Amazon Web Services account. You may not share a custom framework that is derived from a standard framework if the standard framework is designated as not eligible for sharing by Amazon Web Services, unless you have obtained permission to do so from the owner of the standard framework. To learn more about which standard frameworks are eligible for sharing, see Framework sharing eligibility in the Audit Manager User Guide.</td>
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
<tr id="parameter-frameworkType">
    <td><CopyableCode code="frameworkType" /></td>
    <td><code>string</code></td>
    <td>The type of framework, such as a standard framework or a custom framework.</td>
</tr>
<tr id="parameter-framework_id">
    <td><CopyableCode code="framework_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the custom framework to be shared.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-requestType">
    <td><CopyableCode code="requestType" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the share request is a sent request or a received request.</td>
</tr>
<tr id="parameter-request_id">
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the share request to be deleted.</td>
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
    defaultValue="list_assessment_frameworks"
    values={[
        { label: 'list_assessment_frameworks', value: 'list_assessment_frameworks' },
        { label: 'get_assessment_framework', value: 'get_assessment_framework' }
    ]}
>
<TabItem value="list_assessment_frameworks">

Returns a list of the frameworks that are available in the Audit Manager framework library.

```sql
SELECT
frameworkMetadataList,
nextToken
FROM aws.auditmanager.assessment_frameworks
WHERE frameworkType = '{{ frameworkType }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="get_assessment_framework">

Gets information about a specified framework.

```sql
SELECT
id,
name,
arn,
complianceType,
controlSets,
controlSources,
createdAt,
createdBy,
description,
lastUpdatedAt,
lastUpdatedBy,
logo,
tags,
type_
FROM aws.auditmanager.assessment_frameworks
WHERE framework_id = '{{ framework_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_assessment_framework"
    values={[
        { label: 'create_assessment_framework', value: 'create_assessment_framework' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_assessment_framework">

Creates a custom framework in Audit Manager.

```sql
INSERT INTO aws.auditmanager.assessment_frameworks (
name,
description,
complianceType,
controlSets,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ complianceType }}',
'{{ controlSets }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
framework
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: assessment_frameworks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the assessment_frameworks resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: complianceType
      value: "{{ complianceType }}"
    - name: controlSets
      value:
        - name: "{{ name }}"
          controls: "{{ controls }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_assessment_framework"
    values={[
        { label: 'update_assessment_framework', value: 'update_assessment_framework' },
        { label: 'update_assessment_framework_share', value: 'update_assessment_framework_share' }
    ]}
>
<TabItem value="update_assessment_framework">

Updates a custom framework in Audit Manager.

```sql
UPDATE aws.auditmanager.assessment_frameworks
SET 
name = '{{ name }}',
description = '{{ description }}',
complianceType = '{{ complianceType }}',
controlSets = '{{ controlSets }}'
WHERE 
framework_id = '{{ framework_id }}' --required
AND region = '{{ region }}' --required
AND name = '{{ name }}' --required
AND controlSets = '{{ controlSets }}' --required
RETURNING
framework;
```
</TabItem>
<TabItem value="update_assessment_framework_share">

Updates a share request for a custom framework in Audit Manager.

```sql
UPDATE aws.auditmanager.assessment_frameworks
SET 
requestType = '{{ requestType }}',
action = '{{ action }}'
WHERE 
request_id = '{{ request_id }}' --required
AND region = '{{ region }}' --required
AND requestType = '{{ requestType }}' --required
AND action = '{{ action }}' --required
RETURNING
assessmentFrameworkShareRequest;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_assessment_framework_share"
    values={[
        { label: 'delete_assessment_framework_share', value: 'delete_assessment_framework_share' },
        { label: 'delete_assessment_framework', value: 'delete_assessment_framework' }
    ]}
>
<TabItem value="delete_assessment_framework_share">

Deletes a share request for a custom framework in Audit Manager.

```sql
DELETE FROM aws.auditmanager.assessment_frameworks
WHERE request_id = '{{ request_id }}' --required
AND requestType = '{{ requestType }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_assessment_framework">

Deletes a custom framework in Audit Manager.

```sql
DELETE FROM aws.auditmanager.assessment_frameworks
WHERE framework_id = '{{ framework_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_assessment_framework_share"
    values={[
        { label: 'start_assessment_framework_share', value: 'start_assessment_framework_share' }
    ]}
>
<TabItem value="start_assessment_framework_share">

Creates a share request for a custom framework in Audit Manager. The share request specifies a recipient and notifies them that a custom framework is available. Recipients have 120 days to accept or decline the request. If no action is taken, the share request expires. When you create a share request, Audit Manager stores a snapshot of your custom framework in the US East (N. Virginia) Amazon Web Services Region. Audit Manager also stores a backup of the same snapshot in the US West (Oregon) Amazon Web Services Region. Audit Manager deletes the snapshot and the backup snapshot when one of the following events occurs: The sender revokes the share request. The recipient declines the share request. The recipient encounters an error and doesn't successfully accept the share request. The share request expires before the recipient responds to the request. When a sender resends a share request, the snapshot is replaced with an updated version that corresponds with the latest version of the custom framework. When a recipient accepts a share request, the snapshot is replicated into their Amazon Web Services account under the Amazon Web Services Region that was specified in the share request. When you invoke the StartAssessmentFrameworkShare API, you are about to share a custom framework with another Amazon Web Services account. You may not share a custom framework that is derived from a standard framework if the standard framework is designated as not eligible for sharing by Amazon Web Services, unless you have obtained permission to do so from the owner of the standard framework. To learn more about which standard frameworks are eligible for sharing, see Framework sharing eligibility in the Audit Manager User Guide.

```sql
EXEC aws.auditmanager.assessment_frameworks.start_assessment_framework_share 
@framework_id='{{ framework_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"destinationAccount": "{{ destinationAccount }}", 
"destinationRegion": "{{ destinationRegion }}", 
"comment": "{{ comment }}"
}'
;
```
</TabItem>
</Tabs>
