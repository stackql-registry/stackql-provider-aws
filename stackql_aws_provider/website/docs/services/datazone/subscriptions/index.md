--- 
title: subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - subscriptions
  - datazone
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

Creates, updates, deletes, gets or lists a <code>subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_subscription"
    values={[
        { label: 'get_subscription', value: 'get_subscription' },
        { label: 'list_subscriptions', value: 'list_subscriptions' }
    ]}
>
<TabItem value="get_subscription">

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
    <td>The ID of the subscription. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the subscription was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who created the subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain in which the subscription exists. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="retain_permissions" /></td>
    <td><code>boolean</code></td>
    <td>The retain permissions of the subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the subscription. (APPROVED, REVOKED, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="subscribed_listing" /></td>
    <td><code>object</code></td>
    <td>The details of the published asset for which the subscription grant is created.</td>
</tr>
<tr>
    <td><CopyableCode code="subscribed_principal" /></td>
    <td><code>object</code></td>
    <td>The principal that has the subscription grant for the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="subscription_request_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the subscription request. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the subscription was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who updated the subscription.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_subscriptions">

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
    <td>The identifier of the subscription. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the subscription was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who created the subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon DataZone domain in which a subscription exists. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="retain_permissions" /></td>
    <td><code>boolean</code></td>
    <td>The retain permissions included in the subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the subscription. (APPROVED, REVOKED, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="subscribed_listing" /></td>
    <td><code>object</code></td>
    <td>The details of the published asset for which the subscription grant is created.</td>
</tr>
<tr>
    <td><CopyableCode code="subscribed_principal" /></td>
    <td><code>object</code></td>
    <td>The principal that has the subscription grant for the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="subscription_request_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the subscription request for the subscription. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the subscription was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who updated the subscription.</td>
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
    <td><a href="#get_subscription"><CopyableCode code="get_subscription" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a subscription in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#list_subscriptions"><CopyableCode code="list_subscriptions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-subscriptionRequestIdentifier"><code>subscriptionRequestIdentifier</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-subscribedListingId"><code>subscribedListingId</code></a>, <a href="#parameter-owningProjectId"><code>owningProjectId</code></a>, <a href="#parameter-owningIamPrincipalArn"><code>owningIamPrincipalArn</code></a>, <a href="#parameter-owningUserId"><code>owningUserId</code></a>, <a href="#parameter-owningGroupId"><code>owningGroupId</code></a>, <a href="#parameter-approverProjectId"><code>approverProjectId</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists subscriptions in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#revoke_subscription"><CopyableCode code="revoke_subscription" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Revokes a specified subscription in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#accept_subscription_request"><CopyableCode code="accept_subscription_request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Accepts a subscription request to a specific asset.</td>
</tr>
<tr>
    <td><a href="#reject_subscription_request"><CopyableCode code="reject_subscription_request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Rejects the specified subscription request.</td>
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
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon DataZone domain in which the subscription request was rejected.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the subscription request that was rejected.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-approverProjectId">
    <td><CopyableCode code="approverProjectId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the project for the subscription's approver.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of subscriptions to return in a single call to ListSubscriptions. When the number of subscriptions to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListSubscriptions to list the next set of Subscriptions.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of subscriptions is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of subscriptions, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListSubscriptions to list the next set of subscriptions.</td>
</tr>
<tr id="parameter-owningGroupId">
    <td><CopyableCode code="owningGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the owning group.</td>
</tr>
<tr id="parameter-owningIamPrincipalArn">
    <td><CopyableCode code="owningIamPrincipalArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the owning IAM principal.</td>
</tr>
<tr id="parameter-owningProjectId">
    <td><CopyableCode code="owningProjectId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the owning project.</td>
</tr>
<tr id="parameter-owningUserId">
    <td><CopyableCode code="owningUserId" /></td>
    <td><code>string</code></td>
    <td>The ID of the owning user.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>Specifies the way in which the results of this action are to be sorted.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>Specifies the sort order for the results of this action.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the subscriptions that you want to list. This is not a required parameter, but if not provided, by default, Amazon DataZone returns only APPROVED subscriptions.</td>
</tr>
<tr id="parameter-subscribedListingId">
    <td><CopyableCode code="subscribedListingId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the subscribed listing for the subscriptions that you want to list.</td>
</tr>
<tr id="parameter-subscriptionRequestIdentifier">
    <td><CopyableCode code="subscriptionRequestIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the subscription request for the subscriptions that you want to list.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_subscription"
    values={[
        { label: 'get_subscription', value: 'get_subscription' },
        { label: 'list_subscriptions', value: 'list_subscriptions' }
    ]}
>
<TabItem value="get_subscription">

Gets a subscription in Amazon DataZone.

```sql
SELECT
id,
created_at,
created_by,
domain_id,
retain_permissions,
status,
subscribed_listing,
subscribed_principal,
subscription_request_id,
updated_at,
updated_by
FROM aws.datazone.subscriptions
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_subscriptions">

Lists subscriptions in Amazon DataZone.

```sql
SELECT
id,
created_at,
created_by,
domain_id,
retain_permissions,
status,
subscribed_listing,
subscribed_principal,
subscription_request_id,
updated_at,
updated_by
FROM aws.datazone.subscriptions
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND region = '{{ region }}' -- required
AND subscriptionRequestIdentifier = '{{ subscriptionRequestIdentifier }}'
AND status = '{{ status }}'
AND subscribedListingId = '{{ subscribedListingId }}'
AND owningProjectId = '{{ owningProjectId }}'
AND owningIamPrincipalArn = '{{ owningIamPrincipalArn }}'
AND owningUserId = '{{ owningUserId }}'
AND owningGroupId = '{{ owningGroupId }}'
AND approverProjectId = '{{ approverProjectId }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="revoke_subscription"
    values={[
        { label: 'revoke_subscription', value: 'revoke_subscription' }
    ]}
>
<TabItem value="revoke_subscription">

Revokes a specified subscription in Amazon DataZone.

```sql
UPDATE aws.datazone.subscriptions
SET 
retainPermissions = {{ retainPermissions }}
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
created_at,
created_by,
domain_id,
retain_permissions,
status,
subscribed_listing,
subscribed_principal,
subscription_request_id,
updated_at,
updated_by;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_subscription_request"
    values={[
        { label: 'accept_subscription_request', value: 'accept_subscription_request' },
        { label: 'reject_subscription_request', value: 'reject_subscription_request' }
    ]}
>
<TabItem value="accept_subscription_request">

Accepts a subscription request to a specific asset.

```sql
EXEC aws.datazone.subscriptions.accept_subscription_request 
@domain_identifier='{{ domain_identifier }}' --required, 
@identifier='{{ identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"decisionComment": "{{ decisionComment }}", 
"assetScopes": "{{ assetScopes }}", 
"assetPermissions": "{{ assetPermissions }}"
}'
;
```
</TabItem>
<TabItem value="reject_subscription_request">

Rejects the specified subscription request.

```sql
EXEC aws.datazone.subscriptions.reject_subscription_request 
@domain_identifier='{{ domain_identifier }}' --required, 
@identifier='{{ identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"decisionComment": "{{ decisionComment }}"
}'
;
```
</TabItem>
</Tabs>
