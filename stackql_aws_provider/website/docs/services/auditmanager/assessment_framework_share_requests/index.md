--- 
title: assessment_framework_share_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - assessment_framework_share_requests
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

Creates, updates, deletes, gets or lists an <code>assessment_framework_share_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assessment_framework_share_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.auditmanager.assessment_framework_share_requests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_assessment_framework_share_requests"
    values={[
        { label: 'list_assessment_framework_share_requests', value: 'list_assessment_framework_share_requests' }
    ]}
>
<TabItem value="list_assessment_framework_share_requests">

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
    <td><CopyableCode code="assessmentFrameworkShareRequests" /></td>
    <td><code>array</code></td>
    <td>The list of share requests that the ListAssessmentFrameworkShareRequests API returned.</td>
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
    <td><a href="#list_assessment_framework_share_requests"><CopyableCode code="list_assessment_framework_share_requests" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-requestType"><code>requestType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of sent or received share requests for custom frameworks in Audit Manager.</td>
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
<tr id="parameter-requestType">
    <td><CopyableCode code="requestType" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the share request is a sent request or a received request.</td>
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
    defaultValue="list_assessment_framework_share_requests"
    values={[
        { label: 'list_assessment_framework_share_requests', value: 'list_assessment_framework_share_requests' }
    ]}
>
<TabItem value="list_assessment_framework_share_requests">

Returns a list of sent or received share requests for custom frameworks in Audit Manager.

```sql
SELECT
assessmentFrameworkShareRequests,
nextToken
FROM aws.auditmanager.assessment_framework_share_requests
WHERE requestType = '{{ requestType }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
