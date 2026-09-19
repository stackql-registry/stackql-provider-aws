--- 
title: request_authorization_details
hide_title: false
hide_table_of_contents: false
keywords:
  - request_authorization_details
  - iam_toolbox
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

Creates, updates, deletes, gets or lists a <code>request_authorization_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="request_authorization_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam_toolbox.request_authorization_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_request_authorization_details"
    values={[
        { label: 'get_request_authorization_details', value: 'get_request_authorization_details' }
    ]}
>
<TabItem value="get_request_authorization_details">

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
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The action evaluated for this request (for example, iam:PassRole).</td>
</tr>
<tr>
    <td><CopyableCode code="context" /></td>
    <td><code>object</code></td>
    <td>The context keys and values specific to this evaluation. These are applied on top of the request context.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluated_effect" /></td>
    <td><code>string</code></td>
    <td>The result of the evaluation. Valid values: ALLOW - The action was allowed. EXPLICIT_DENY - The action was explicitly denied by a policy. IMPLICIT_DENY - The action was denied because no policy allowed it. (ALLOW, EXPLICIT_DENY, IMPLICIT_DENY)</td>
</tr>
<tr>
    <td><CopyableCode code="matched_policies" /></td>
    <td><code>array</code></td>
    <td>The policies that matched during evaluation of this action and resource. An implicit denial produces no matched policies.</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td>The resource that the action targeted. This is typically a resource ARN, but can be a wildcard ARN that matches multiple resources, or empty for actions that are not resource-specific.</td>
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
    <td><a href="#get_request_authorization_details"><CopyableCode code="get_request_authorization_details" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-authorization_id"><code>authorization_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves the authorization details for a specific access denied request. The details include the request context, the evaluations performed, and the policies that were evaluated. Use this operation to understand why a request was denied. Supported services include an authorization ID in the access denied error message. Pass that ID to this operation to retrieve the details. Authorization details are available for at least 24 hours after the denial. To use this operation, you must have the iam:GetRequestAuthorizationDetails permission.</td>
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
<tr id="parameter-authorization_id">
    <td><CopyableCode code="authorization_id" /></td>
    <td><code>string</code></td>
    <td>The authorization ID received in the access denied error message. This ID identifies the specific request to retrieve details for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token from a previous call, used to retrieve the next page of evaluations. Omit this value on the first call.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_request_authorization_details"
    values={[
        { label: 'get_request_authorization_details', value: 'get_request_authorization_details' }
    ]}
>
<TabItem value="get_request_authorization_details">

Retrieves the authorization details for a specific access denied request. The details include the request context, the evaluations performed, and the policies that were evaluated. Use this operation to understand why a request was denied. Supported services include an authorization ID in the access denied error message. Pass that ID to this operation to retrieve the details. Authorization details are available for at least 24 hours after the denial. To use this operation, you must have the iam:GetRequestAuthorizationDetails permission.

```sql
SELECT
action,
context,
evaluated_effect,
matched_policies,
resource
FROM aws.iam_toolbox.request_authorization_details
WHERE authorization_id = '{{ authorization_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
