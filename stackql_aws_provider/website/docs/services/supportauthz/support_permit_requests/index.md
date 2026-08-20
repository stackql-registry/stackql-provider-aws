--- 
title: support_permit_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - support_permit_requests
  - supportauthz
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

Creates, updates, deletes, gets or lists a <code>support_permit_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="support_permit_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.supportauthz.support_permit_requests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_support_permit_requests"
    values={[
        { label: 'list_support_permit_requests', value: 'list_support_permit_requests' }
    ]}
>
<TabItem value="list_support_permit_requests">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the request was created.</td>
</tr>
<tr>
    <td><CopyableCode code="permit" /></td>
    <td><code>object</code></td>
    <td>The permit definition specifying the authorized actions, resources, and time-window conditions for a support operator.</td>
</tr>
<tr>
    <td><CopyableCode code="request_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the permit request. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:/-&#93;&#123;1,512&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the permit request. (PENDING, ACCEPTED, REJECTED, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="support_case_display_id" /></td>
    <td><code>string</code></td>
    <td>The display identifier of the support case associated with the request. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:/-&#93;&#123;1,512&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the request was last updated.</td>
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
    <td><a href="#list_support_permit_requests"><CopyableCode code="list_support_permit_requests" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-supportCaseDisplayId"><code>supportCaseDisplayId</code></a></td>
    <td>Lists permit requests from AWS support operators. Use pagination to ensure that the operation returns quickly and successfully.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. Valid range is 1 to 100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-supportCaseDisplayId">
    <td><CopyableCode code="supportCaseDisplayId" /></td>
    <td><code>string</code></td>
    <td>Filters the results by support case display identifier.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_support_permit_requests"
    values={[
        { label: 'list_support_permit_requests', value: 'list_support_permit_requests' }
    ]}
>
<TabItem value="list_support_permit_requests">

Lists permit requests from AWS support operators. Use pagination to ensure that the operation returns quickly and successfully.

```sql
SELECT
created_at,
permit,
request_arn,
status,
support_case_display_id,
updated_at
FROM aws.supportauthz.support_permit_requests
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND supportCaseDisplayId = '{{ supportCaseDisplayId }}'
;
```
</TabItem>
</Tabs>
