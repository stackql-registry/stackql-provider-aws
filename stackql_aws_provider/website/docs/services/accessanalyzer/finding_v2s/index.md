--- 
title: finding_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - finding_v2s
  - accessanalyzer
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

Creates, updates, deletes, gets or lists a <code>finding_v2s</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="finding_v2s" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.accessanalyzer.finding_v2s" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_finding_v2"
    values={[
        { label: 'get_finding_v2', value: 'get_finding_v2' }
    ]}
>
<TabItem value="get_finding_v2">

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
    <td><CopyableCode code="externalAccessDetails" /></td>
    <td><code>object</code></td>
    <td>The details for an external access analyzer finding.</td>
</tr>
<tr>
    <td><CopyableCode code="internalAccessDetails" /></td>
    <td><code>object</code></td>
    <td>The details for an internal access analyzer finding. This contains information about access patterns identified within your Amazon Web Services organization or account.</td>
</tr>
<tr>
    <td><CopyableCode code="unusedIamRoleDetails" /></td>
    <td><code>object</code></td>
    <td>The details for an unused access analyzer finding with an unused IAM role finding type.</td>
</tr>
<tr>
    <td><CopyableCode code="unusedIamUserAccessKeyDetails" /></td>
    <td><code>object</code></td>
    <td>The details for an unused access analyzer finding with an unused IAM user access key finding type.</td>
</tr>
<tr>
    <td><CopyableCode code="unusedIamUserPasswordDetails" /></td>
    <td><code>object</code></td>
    <td>The details for an unused access analyzer finding with an unused IAM user password finding type.</td>
</tr>
<tr>
    <td><CopyableCode code="unusedPermissionDetails" /></td>
    <td><code>object</code></td>
    <td>The details for an unused access analyzer finding with an unused permission finding type.</td>
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
    <td><a href="#get_finding_v2"><CopyableCode code="get_finding_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-analyzerArn"><code>analyzerArn</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves information about the specified finding. GetFinding and GetFindingV2 both use access-analyzer:GetFinding in the Action element of an IAM policy statement. You must have permission to perform the access-analyzer:GetFinding action.</td>
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
<tr id="parameter-analyzerArn">
    <td><CopyableCode code="analyzerArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the analyzer that generated the finding.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the finding to retrieve.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token used for pagination of results returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_finding_v2"
    values={[
        { label: 'get_finding_v2', value: 'get_finding_v2' }
    ]}
>
<TabItem value="get_finding_v2">

Retrieves information about the specified finding. GetFinding and GetFindingV2 both use access-analyzer:GetFinding in the Action element of an IAM policy statement. You must have permission to perform the access-analyzer:GetFinding action.

```sql
SELECT
externalAccessDetails,
internalAccessDetails,
unusedIamRoleDetails,
unusedIamUserAccessKeyDetails,
unusedIamUserPasswordDetails,
unusedPermissionDetails
FROM aws.accessanalyzer.finding_v2s
WHERE analyzerArn = '{{ analyzerArn }}' -- required
AND id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
