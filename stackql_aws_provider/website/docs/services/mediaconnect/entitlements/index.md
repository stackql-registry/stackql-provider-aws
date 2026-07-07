--- 
title: entitlements
hide_title: false
hide_table_of_contents: false
keywords:
  - entitlements
  - mediaconnect
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

Creates, updates, deletes, gets or lists an <code>entitlements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="entitlements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediaconnect.entitlements" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_entitlements"
    values={[
        { label: 'list_entitlements', value: 'list_entitlements' }
    ]}
>
<TabItem value="list_entitlements">

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
    <td><CopyableCode code="DataTransferSubscriberFeePercent" /></td>
    <td><code>integer</code></td>
    <td>Percentage from 0-100 of the data transfer cost to be billed to the subscriber.</td>
</tr>
<tr>
    <td><CopyableCode code="EntitlementArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the entitlement.</td>
</tr>
<tr>
    <td><CopyableCode code="EntitlementName" /></td>
    <td><code>string</code></td>
    <td>The name of the entitlement.</td>
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
    <td><a href="#list_entitlements"><CopyableCode code="list_entitlements" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Displays a list of all entitlements that have been granted to this account. This request returns 20 results per page.</td>
</tr>
<tr>
    <td><a href="#revoke_flow_entitlement"><CopyableCode code="revoke_flow_entitlement" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-entitlement_arn"><code>entitlement_arn</code></a>, <a href="#parameter-flow_arn"><code>flow_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Revokes an entitlement from a flow. Once an entitlement is revoked, the content becomes unavailable to the subscriber and the associated output is removed.</td>
</tr>
<tr>
    <td><a href="#grant_flow_entitlements"><CopyableCode code="grant_flow_entitlements" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-flow_arn"><code>flow_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Grants entitlements to an existing flow.</td>
</tr>
<tr>
    <td><a href="#update_flow_entitlement"><CopyableCode code="update_flow_entitlement" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-entitlement_arn"><code>entitlement_arn</code></a>, <a href="#parameter-flow_arn"><code>flow_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an entitlement. You can change an entitlement's description, subscribers, and encryption. If you change the subscribers, the service will remove the outputs that are are used by the subscribers that are removed.</td>
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
<tr id="parameter-entitlement_arn">
    <td><CopyableCode code="entitlement_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the entitlement that you want to update.</td>
</tr>
<tr id="parameter-flow_arn">
    <td><CopyableCode code="flow_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the flow that is associated with the entitlement that you want to update.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per API request. For example, you submit a ListEntitlements request with set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 20 results per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that identifies the batch of results that you want to see. For example, you submit a ListEntitlements request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListEntitlements request a second time and specify the NextToken value.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_entitlements"
    values={[
        { label: 'list_entitlements', value: 'list_entitlements' }
    ]}
>
<TabItem value="list_entitlements">

Displays a list of all entitlements that have been granted to this account. This request returns 20 results per page.

```sql
SELECT
DataTransferSubscriberFeePercent,
EntitlementArn,
EntitlementName
FROM aws.mediaconnect.entitlements
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="revoke_flow_entitlement"
    values={[
        { label: 'revoke_flow_entitlement', value: 'revoke_flow_entitlement' }
    ]}
>
<TabItem value="revoke_flow_entitlement">

Revokes an entitlement from a flow. Once an entitlement is revoked, the content becomes unavailable to the subscriber and the associated output is removed.

```sql
UPDATE aws.mediaconnect.entitlements
SET 
-- No updatable properties
WHERE 
entitlement_arn = '{{ entitlement_arn }}' --required
AND flow_arn = '{{ flow_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
EntitlementArn,
FlowArn;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="grant_flow_entitlements"
    values={[
        { label: 'grant_flow_entitlements', value: 'grant_flow_entitlements' },
        { label: 'update_flow_entitlement', value: 'update_flow_entitlement' }
    ]}
>
<TabItem value="grant_flow_entitlements">

Grants entitlements to an existing flow.

```sql
EXEC aws.mediaconnect.entitlements.grant_flow_entitlements 
@flow_arn='{{ flow_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Entitlements": "{{ Entitlements }}"
}'
;
```
</TabItem>
<TabItem value="update_flow_entitlement">

Updates an entitlement. You can change an entitlement's description, subscribers, and encryption. If you change the subscribers, the service will remove the outputs that are are used by the subscribers that are removed.

```sql
EXEC aws.mediaconnect.entitlements.update_flow_entitlement 
@entitlement_arn='{{ entitlement_arn }}' --required, 
@flow_arn='{{ flow_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Description": "{{ Description }}", 
"Encryption": "{{ Encryption }}", 
"EntitlementStatus": "{{ EntitlementStatus }}", 
"Subscribers": "{{ Subscribers }}"
}'
;
```
</TabItem>
</Tabs>
