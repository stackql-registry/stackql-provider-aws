--- 
title: subscription_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - subscription_requests
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

Creates, updates, deletes, gets or lists a <code>subscription_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subscription_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.subscription_requests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_subscription_requests"
    values={[
        { label: 'list_subscription_requests', value: 'list_subscription_requests' }
    ]}
>
<TabItem value="list_subscription_requests">

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
    <td>The identifier of the subscription request. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when a subscription request was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who created the subscription request.</td>
</tr>
<tr>
    <td><CopyableCode code="decisionComment" /></td>
    <td><code>string</code></td>
    <td>The decision comment of the subscription request.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon DataZone domain in which a subscription request exists. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="existingSubscriptionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the existing subscription. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metadataFormsSummary" /></td>
    <td><code>array</code></td>
    <td>The summary of the metadata forms.</td>
</tr>
<tr>
    <td><CopyableCode code="requestReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the subscription request.</td>
</tr>
<tr>
    <td><CopyableCode code="reviewerId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the subscription request reviewer.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the subscription request. (PENDING, ACCEPTED, REJECTED)</td>
</tr>
<tr>
    <td><CopyableCode code="subscribedListings" /></td>
    <td><code>array</code></td>
    <td>The listings included in the subscription request.</td>
</tr>
<tr>
    <td><CopyableCode code="subscribedPrincipals" /></td>
    <td><code>array</code></td>
    <td>The principals included in the subscription request.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the subscription request was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedBy" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon DataZone user who updated the subscription request.</td>
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
    <td><a href="#list_subscription_requests"><CopyableCode code="list_subscription_requests" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-status"><code>status</code></a>, <a href="#parameter-subscribedListingId"><code>subscribedListingId</code></a>, <a href="#parameter-owningProjectId"><code>owningProjectId</code></a>, <a href="#parameter-owningIamPrincipalArn"><code>owningIamPrincipalArn</code></a>, <a href="#parameter-approverProjectId"><code>approverProjectId</code></a>, <a href="#parameter-owningUserId"><code>owningUserId</code></a>, <a href="#parameter-owningGroupId"><code>owningGroupId</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists Amazon DataZone subscription requests.</td>
</tr>
<tr>
    <td><a href="#create_subscription_request"><CopyableCode code="create_subscription_request" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-subscribedPrincipals"><code>subscribedPrincipals</code></a>, <a href="#parameter-subscribedListings"><code>subscribedListings</code></a>, <a href="#parameter-requestReason"><code>requestReason</code></a></td>
    <td></td>
    <td>Creates a subscription request in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#update_subscription_request"><CopyableCode code="update_subscription_request" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-requestReason"><code>requestReason</code></a></td>
    <td></td>
    <td>Updates a specified subscription request in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#delete_subscription_request"><CopyableCode code="delete_subscription_request" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a subscription request in Amazon DataZone.</td>
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
    <td>The ID of the Amazon DataZone domain in which the subscription request is deleted.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the subscription request that is deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-approverProjectId">
    <td><CopyableCode code="approverProjectId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the subscription request approver's project.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of subscription requests to return in a single call to ListSubscriptionRequests. When the number of subscription requests to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListSubscriptionRequests to list the next set of subscription requests.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of subscription requests is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of subscription requests, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListSubscriptionRequests to list the next set of subscription requests.</td>
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
    <td>The identifier of the project for the subscription requests.</td>
</tr>
<tr id="parameter-owningUserId">
    <td><CopyableCode code="owningUserId" /></td>
    <td><code>string</code></td>
    <td>The ID of the owning user.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>Specifies the way to sort the results of this action.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>Specifies the sort order for the results of this action.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Specifies the status of the subscription requests. This is not a required parameter, but if not specified, by default, Amazon DataZone returns only PENDING subscription requests.</td>
</tr>
<tr id="parameter-subscribedListingId">
    <td><CopyableCode code="subscribedListingId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the subscribed listing.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_subscription_requests"
    values={[
        { label: 'list_subscription_requests', value: 'list_subscription_requests' }
    ]}
>
<TabItem value="list_subscription_requests">

Lists Amazon DataZone subscription requests.

```sql
SELECT
id,
createdAt,
createdBy,
decisionComment,
domainId,
existingSubscriptionId,
metadataFormsSummary,
requestReason,
reviewerId,
status,
subscribedListings,
subscribedPrincipals,
updatedAt,
updatedBy
FROM aws.datazone.subscription_requests
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND region = '{{ region }}' -- required
AND status = '{{ status }}'
AND subscribedListingId = '{{ subscribedListingId }}'
AND owningProjectId = '{{ owningProjectId }}'
AND owningIamPrincipalArn = '{{ owningIamPrincipalArn }}'
AND approverProjectId = '{{ approverProjectId }}'
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
    defaultValue="create_subscription_request"
    values={[
        { label: 'create_subscription_request', value: 'create_subscription_request' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_subscription_request">

Creates a subscription request in Amazon DataZone.

```sql
INSERT INTO aws.datazone.subscription_requests (
subscribedPrincipals,
subscribedListings,
requestReason,
clientToken,
metadataForms,
assetPermissions,
assetScopes,
domain_identifier,
region
)
SELECT 
'{{ subscribedPrincipals }}' /* required */,
'{{ subscribedListings }}' /* required */,
'{{ requestReason }}' /* required */,
'{{ clientToken }}',
'{{ metadataForms }}',
'{{ assetPermissions }}',
'{{ assetScopes }}',
'{{ domain_identifier }}',
'{{ region }}'
RETURNING
id,
createdAt,
createdBy,
decisionComment,
domainId,
existingSubscriptionId,
metadataForms,
requestReason,
reviewerId,
status,
subscribedListings,
subscribedPrincipals,
updatedAt,
updatedBy
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: subscription_requests
  props:
    - name: domain_identifier
      value: "{{ domain_identifier }}"
      description: Required parameter for the subscription_requests resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the subscription_requests resource.
    - name: subscribedPrincipals
      value:
        - project:
            identifier: "{{ identifier }}"
          user:
            identifier: "{{ identifier }}"
          group:
            identifier: "{{ identifier }}"
          iam:
            identifier: "{{ identifier }}"
    - name: subscribedListings
      value:
        - identifier: "{{ identifier }}"
    - name: requestReason
      value: "{{ requestReason }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: metadataForms
      value:
        - formName: "{{ formName }}"
          typeIdentifier: "{{ typeIdentifier }}"
          typeRevision: "{{ typeRevision }}"
          content: "{{ content }}"
    - name: assetPermissions
      value:
        - assetId: "{{ assetId }}"
          permissions:
            s3:
              - "{{ s3 }}"
    - name: assetScopes
      value:
        - assetId: "{{ assetId }}"
          filterIds: "{{ filterIds }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_subscription_request"
    values={[
        { label: 'update_subscription_request', value: 'update_subscription_request' }
    ]}
>
<TabItem value="update_subscription_request">

Updates a specified subscription request in Amazon DataZone.

```sql
UPDATE aws.datazone.subscription_requests
SET 
requestReason = '{{ requestReason }}'
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
AND requestReason = '{{ requestReason }}' --required
RETURNING
id,
createdAt,
createdBy,
decisionComment,
domainId,
existingSubscriptionId,
metadataForms,
requestReason,
reviewerId,
status,
subscribedListings,
subscribedPrincipals,
updatedAt,
updatedBy;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_subscription_request"
    values={[
        { label: 'delete_subscription_request', value: 'delete_subscription_request' }
    ]}
>
<TabItem value="delete_subscription_request">

Deletes a subscription request in Amazon DataZone.

```sql
DELETE FROM aws.datazone.subscription_requests
WHERE domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
