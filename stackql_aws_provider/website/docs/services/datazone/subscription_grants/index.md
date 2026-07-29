--- 
title: subscription_grants
hide_title: false
hide_table_of_contents: false
keywords:
  - subscription_grants
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

Creates, updates, deletes, gets or lists a <code>subscription_grants</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subscription_grants" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.subscription_grants" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_subscription_grant"
    values={[
        { label: 'get_subscription_grant', value: 'get_subscription_grant' },
        { label: 'list_subscription_grants', value: 'list_subscription_grants' }
    ]}
>
<TabItem value="get_subscription_grant">

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
    <td>The ID of the subscription grant. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assets" /></td>
    <td><code>array</code></td>
    <td>The assets for which the subscription grant is created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the subscription grant is created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who created the subscription grant.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain in which the subscription grant exists. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The environment ID of the subscription grant. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="granted_entity" /></td>
    <td><code>object</code></td>
    <td>The entity to which the subscription is granted.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the subscription grant. (PENDING, IN_PROGRESS, GRANT_FAILED, REVOKE_FAILED, GRANT_AND_REVOKE_FAILED, COMPLETED, INACCESSIBLE)</td>
</tr>
<tr>
    <td><CopyableCode code="subscription_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the subscription. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="subscription_target_id" /></td>
    <td><code>string</code></td>
    <td>The subscription target ID associated with the subscription grant. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the subscription grant was upated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who updated the subscription grant.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_subscription_grants">

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
    <td>The identifier of the subscription grant. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assets" /></td>
    <td><code>array</code></td>
    <td>The assets included in the subscription grant.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when a subscription grant was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The datazone user who created the subscription grant.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon DataZone domain in which a subscription grant exists. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The environment ID of the subscription grant. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="granted_entity" /></td>
    <td><code>object</code></td>
    <td>The entity to which the subscription is granted.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the subscription grant. (PENDING, IN_PROGRESS, GRANT_FAILED, REVOKE_FAILED, GRANT_AND_REVOKE_FAILED, COMPLETED, INACCESSIBLE)</td>
</tr>
<tr>
    <td><CopyableCode code="subscription_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the subscription. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="subscription_target_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the target of the subscription grant. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the subscription grant was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who updated the subscription grant.</td>
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
    <td><a href="#get_subscription_grant"><CopyableCode code="get_subscription_grant" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the subscription grant in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#list_subscription_grants"><CopyableCode code="list_subscription_grants" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-environmentId"><code>environmentId</code></a>, <a href="#parameter-subscriptionTargetId"><code>subscriptionTargetId</code></a>, <a href="#parameter-subscribedListingId"><code>subscribedListingId</code></a>, <a href="#parameter-subscriptionId"><code>subscriptionId</code></a>, <a href="#parameter-owningProjectId"><code>owningProjectId</code></a>, <a href="#parameter-owningIamPrincipalArn"><code>owningIamPrincipalArn</code></a>, <a href="#parameter-owningUserId"><code>owningUserId</code></a>, <a href="#parameter-owningGroupId"><code>owningGroupId</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists subscription grants.</td>
</tr>
<tr>
    <td><a href="#create_subscription_grant"><CopyableCode code="create_subscription_grant" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-environmentIdentifier"><code>environmentIdentifier</code></a>, <a href="#parameter-grantedEntity"><code>grantedEntity</code></a></td>
    <td></td>
    <td>Creates a subsscription grant in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#update_subscription_grant_status"><CopyableCode code="update_subscription_grant_status" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-asset_identifier"><code>asset_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td></td>
    <td>Updates the status of the specified subscription grant status in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#delete_subscription_grant"><CopyableCode code="delete_subscription_grant" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes and subscription grant in Amazon DataZone.</td>
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
<tr id="parameter-asset_identifier">
    <td><CopyableCode code="asset_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the asset the subscription grant status of which is to be updated.</td>
</tr>
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain where the subscription grant is deleted.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the subscription grant that is deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-environmentId">
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon DataZone environment.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of subscription grants to return in a single call to ListSubscriptionGrants. When the number of subscription grants to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListSubscriptionGrants to list the next set of subscription grants.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of subscription grants is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of subscription grants, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListSubscriptionGrants to list the next set of subscription grants.</td>
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
    <td>The ID of the owning project of the subscription grants.</td>
</tr>
<tr id="parameter-owningUserId">
    <td><CopyableCode code="owningUserId" /></td>
    <td><code>string</code></td>
    <td>The ID of the owning user.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>Specifies the way of sorting the results of this action.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>Specifies the sort order of this action.</td>
</tr>
<tr id="parameter-subscribedListingId">
    <td><CopyableCode code="subscribedListingId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the subscribed listing.</td>
</tr>
<tr id="parameter-subscriptionId">
    <td><CopyableCode code="subscriptionId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the subscription.</td>
</tr>
<tr id="parameter-subscriptionTargetId">
    <td><CopyableCode code="subscriptionTargetId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the subscription target.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_subscription_grant"
    values={[
        { label: 'get_subscription_grant', value: 'get_subscription_grant' },
        { label: 'list_subscription_grants', value: 'list_subscription_grants' }
    ]}
>
<TabItem value="get_subscription_grant">

Gets the subscription grant in Amazon DataZone.

```sql
SELECT
id,
assets,
created_at,
created_by,
domain_id,
environment_id,
granted_entity,
status,
subscription_id,
subscription_target_id,
updated_at,
updated_by
FROM aws.datazone.subscription_grants
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_subscription_grants">

Lists subscription grants.

```sql
SELECT
id,
assets,
created_at,
created_by,
domain_id,
environment_id,
granted_entity,
status,
subscription_id,
subscription_target_id,
updated_at,
updated_by
FROM aws.datazone.subscription_grants
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND region = '{{ region }}' -- required
AND environmentId = '{{ environmentId }}'
AND subscriptionTargetId = '{{ subscriptionTargetId }}'
AND subscribedListingId = '{{ subscribedListingId }}'
AND subscriptionId = '{{ subscriptionId }}'
AND owningProjectId = '{{ owningProjectId }}'
AND owningIamPrincipalArn = '{{ owningIamPrincipalArn }}'
AND owningUserId = '{{ owningUserId }}'
AND owningGroupId = '{{ owningGroupId }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_subscription_grant"
    values={[
        { label: 'create_subscription_grant', value: 'create_subscription_grant' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_subscription_grant">

Creates a subsscription grant in Amazon DataZone.

```sql
INSERT INTO aws.datazone.subscription_grants (
environmentIdentifier,
subscriptionTargetIdentifier,
grantedEntity,
assetTargetNames,
clientToken,
domain_identifier,
region
)
SELECT 
'{{ environmentIdentifier }}' /* required */,
'{{ subscriptionTargetIdentifier }}',
'{{ grantedEntity }}' /* required */,
'{{ assetTargetNames }}',
'{{ clientToken }}',
'{{ domain_identifier }}',
'{{ region }}'
RETURNING
id,
assets,
created_at,
created_by,
domain_id,
environment_id,
granted_entity,
status,
subscription_id,
subscription_target_id,
updated_at,
updated_by
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: subscription_grants
  props:
    - name: domain_identifier
      value: "{{ domain_identifier }}"
      description: Required parameter for the subscription_grants resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the subscription_grants resource.
    - name: environmentIdentifier
      value: "{{ environmentIdentifier }}"
    - name: subscriptionTargetIdentifier
      value: "{{ subscriptionTargetIdentifier }}"
    - name: grantedEntity
      description: |
        The details of a listing for which a subscription is to be granted.
      value:
        listing:
          identifier: "{{ identifier }}"
          revision: "{{ revision }}"
    - name: assetTargetNames
      value:
        - assetId: "{{ assetId }}"
          targetName: "{{ targetName }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_subscription_grant_status"
    values={[
        { label: 'update_subscription_grant_status', value: 'update_subscription_grant_status' }
    ]}
>
<TabItem value="update_subscription_grant_status">

Updates the status of the specified subscription grant status in Amazon DataZone.

```sql
UPDATE aws.datazone.subscription_grants
SET 
status = '{{ status }}',
failureCause = '{{ failureCause }}',
targetName = '{{ targetName }}'
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND asset_identifier = '{{ asset_identifier }}' --required
AND region = '{{ region }}' --required
AND status = '{{ status }}' --required
RETURNING
id,
assets,
created_at,
created_by,
domain_id,
environment_id,
granted_entity,
status,
subscription_id,
subscription_target_id,
updated_at,
updated_by;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_subscription_grant"
    values={[
        { label: 'delete_subscription_grant', value: 'delete_subscription_grant' }
    ]}
>
<TabItem value="delete_subscription_grant">

Deletes and subscription grant in Amazon DataZone.

```sql
DELETE FROM aws.datazone.subscription_grants
WHERE domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
