--- 
title: delegation_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - delegation_requests
  - iam
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

Creates, updates, deletes, gets or lists a <code>delegation_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="delegation_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.delegation_requests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_delegation_request"
    values={[
        { label: 'get_delegation_request', value: 'get_delegation_request' },
        { label: 'list_delegation_requests', value: 'list_delegation_requests' }
    ]}
>
<TabItem value="get_delegation_request">

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
    <td><CopyableCode code="approver_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources. For more information about ARNs, go to Amazon Resource Names (ARNs) in the Amazon Web Services General Reference.</td>
</tr>
<tr>
    <td><CopyableCode code="create_date" /></td>
    <td><code>string</code></td>
    <td>Creation date (timestamp) of this delegation request.</td>
</tr>
<tr>
    <td><CopyableCode code="delegation_request_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the delegation request.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the delegation request. This is a message that is provided by the Amazon Web Services partner that filed the delegation request.</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_time" /></td>
    <td><code>string</code></td>
    <td>The expiry time of this delegation request See the Understanding the Request Lifecycle for details on the life time of a delegation request at each state.</td>
</tr>
<tr>
    <td><CopyableCode code="notes" /></td>
    <td><code>string</code></td>
    <td>Notes added to this delegation request, if this request was updated via the UpdateDelegationRequest API.</td>
</tr>
<tr>
    <td><CopyableCode code="only_send_by_owner" /></td>
    <td><code>boolean</code></td>
    <td>A flag indicating whether the SendDelegationToken must be called by the owner of this delegation request. This is set by the requesting partner.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_account_id" /></td>
    <td><code>string</code></td>
    <td>Amazon Web Services account ID of the owner of the delegation request.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>ARN of the owner of this delegation request.</td>
</tr>
<tr>
    <td><CopyableCode code="permission_policy" /></td>
    <td><code>string</code></td>
    <td>JSON content of the associated permission policy of this delegation request.</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>string</code></td>
    <td>Contains information about the permissions being delegated in a delegation request.</td>
</tr>
<tr>
    <td><CopyableCode code="redirect_url" /></td>
    <td><code>string</code></td>
    <td>A URL to be redirected to once the delegation request is approved. Partners provide this URL when creating the delegation request.</td>
</tr>
<tr>
    <td><CopyableCode code="rejection_reason" /></td>
    <td><code>string</code></td>
    <td>Reasons for rejecting this delegation request, if this request was rejected. See also RejectDelegationRequest API documentation.</td>
</tr>
<tr>
    <td><CopyableCode code="request_message" /></td>
    <td><code>string</code></td>
    <td>A custom message that is added to the delegation request by the partner. This element is different from the Description element such that this is a request specific message injected by the partner. The Description is typically a generic explanation of what the delegation request is targeted to do.</td>
</tr>
<tr>
    <td><CopyableCode code="requestor_id" /></td>
    <td><code>string</code></td>
    <td>Identity of the requestor of this delegation request. This will be an Amazon Web Services account ID.</td>
</tr>
<tr>
    <td><CopyableCode code="requestor_name" /></td>
    <td><code>string</code></td>
    <td>A friendly name of the requestor.</td>
</tr>
<tr>
    <td><CopyableCode code="role_permission_restriction_arns" /></td>
    <td><code>string</code></td>
    <td>If the PermissionPolicy includes role creation permissions, this element will include the list of permissions boundary policies associated with the role creation. See Permissions boundaries for IAM entities for more details about IAM permission boundaries.</td>
</tr>
<tr>
    <td><CopyableCode code="session_duration" /></td>
    <td><code>integer</code></td>
    <td>The life-time of the requested session credential.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of this delegation request. See the Understanding the Request Lifecycle for an explanation of how these states are transitioned.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_time" /></td>
    <td><code>string</code></td>
    <td>Last updated timestamp of the request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_delegation_requests">

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
    <td><CopyableCode code="approver_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources. For more information about ARNs, go to Amazon Resource Names (ARNs) in the Amazon Web Services General Reference.</td>
</tr>
<tr>
    <td><CopyableCode code="create_date" /></td>
    <td><code>string</code></td>
    <td>Creation date (timestamp) of this delegation request.</td>
</tr>
<tr>
    <td><CopyableCode code="delegation_request_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the delegation request.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the delegation request. This is a message that is provided by the Amazon Web Services partner that filed the delegation request.</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_time" /></td>
    <td><code>string</code></td>
    <td>The expiry time of this delegation request See the Understanding the Request Lifecycle for details on the life time of a delegation request at each state.</td>
</tr>
<tr>
    <td><CopyableCode code="notes" /></td>
    <td><code>string</code></td>
    <td>Notes added to this delegation request, if this request was updated via the UpdateDelegationRequest API.</td>
</tr>
<tr>
    <td><CopyableCode code="only_send_by_owner" /></td>
    <td><code>boolean</code></td>
    <td>A flag indicating whether the SendDelegationToken must be called by the owner of this delegation request. This is set by the requesting partner.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_account_id" /></td>
    <td><code>string</code></td>
    <td>Amazon Web Services account ID of the owner of the delegation request.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>ARN of the owner of this delegation request.</td>
</tr>
<tr>
    <td><CopyableCode code="permission_policy" /></td>
    <td><code>string</code></td>
    <td>JSON content of the associated permission policy of this delegation request.</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>string</code></td>
    <td>Contains information about the permissions being delegated in a delegation request.</td>
</tr>
<tr>
    <td><CopyableCode code="redirect_url" /></td>
    <td><code>string</code></td>
    <td>A URL to be redirected to once the delegation request is approved. Partners provide this URL when creating the delegation request.</td>
</tr>
<tr>
    <td><CopyableCode code="rejection_reason" /></td>
    <td><code>string</code></td>
    <td>Reasons for rejecting this delegation request, if this request was rejected. See also RejectDelegationRequest API documentation.</td>
</tr>
<tr>
    <td><CopyableCode code="request_message" /></td>
    <td><code>string</code></td>
    <td>A custom message that is added to the delegation request by the partner. This element is different from the Description element such that this is a request specific message injected by the partner. The Description is typically a generic explanation of what the delegation request is targeted to do.</td>
</tr>
<tr>
    <td><CopyableCode code="requestor_id" /></td>
    <td><code>string</code></td>
    <td>Identity of the requestor of this delegation request. This will be an Amazon Web Services account ID.</td>
</tr>
<tr>
    <td><CopyableCode code="requestor_name" /></td>
    <td><code>string</code></td>
    <td>A friendly name of the requestor.</td>
</tr>
<tr>
    <td><CopyableCode code="role_permission_restriction_arns" /></td>
    <td><code>string</code></td>
    <td>If the PermissionPolicy includes role creation permissions, this element will include the list of permissions boundary policies associated with the role creation. See Permissions boundaries for IAM entities for more details about IAM permission boundaries.</td>
</tr>
<tr>
    <td><CopyableCode code="session_duration" /></td>
    <td><code>integer</code></td>
    <td>The life-time of the requested session credential.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of this delegation request. See the Understanding the Request Lifecycle for an explanation of how these states are transitioned.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_time" /></td>
    <td><code>string</code></td>
    <td>Last updated timestamp of the request.</td>
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
    <td><a href="#get_delegation_request"><CopyableCode code="get_delegation_request" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DelegationRequestId"><code>DelegationRequestId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DelegationPermissionCheck"><code>DelegationPermissionCheck</code></a></td>
    <td>Retrieves information about a specific delegation request. If a delegation request has no owner or owner account, GetDelegationRequest for that delegation request can be called by any account. If the owner account is assigned but there is no owner id, only identities within that owner account can call GetDelegationRequest for the delegation request. Once the delegation request is fully owned, the owner of the request gets a default permission to get that delegation request. For more details, see Managing Permissions for Delegation Requests.</td>
</tr>
<tr>
    <td><a href="#list_delegation_requests"><CopyableCode code="list_delegation_requests" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-OwnerId"><code>OwnerId</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Lists delegation requests based on the specified criteria. If a delegation request has no owner, even if it is assigned to a specific account, it will not be part of the ListDelegationRequests output for that account. For more details, see Managing Permissions for Delegation Requests.</td>
</tr>
<tr>
    <td><a href="#create_delegation_request"><CopyableCode code="create_delegation_request" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-RequestorWorkflowId"><code>RequestorWorkflowId</code></a>, <a href="#parameter-NotificationChannel"><code>NotificationChannel</code></a>, <a href="#parameter-SessionDuration"><code>SessionDuration</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-OwnerAccountId"><code>OwnerAccountId</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-Permissions"><code>Permissions</code></a>, <a href="#parameter-RequestMessage"><code>RequestMessage</code></a>, <a href="#parameter-RedirectUrl"><code>RedirectUrl</code></a>, <a href="#parameter-OnlySendByOwner"><code>OnlySendByOwner</code></a></td>
    <td>Creates an IAM delegation request for temporary access delegation. This API is not available for general use. In order to use this API, a caller first need to go through an onboarding process described in the partner onboarding documentation.</td>
</tr>
<tr>
    <td><a href="#associate_delegation_request"><CopyableCode code="associate_delegation_request" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DelegationRequestId"><code>DelegationRequestId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associates a delegation request with the current identity. If the partner that created the delegation request has specified the owner account during creation, only an identity from that owner account can call the AssociateDelegationRequest API for the specified delegation request. Once the AssociateDelegationRequest API call is successful, the ARN of the current calling identity will be stored as the ownerId of the request. If the partner that created the delegation request has not specified the owner account during creation, any caller from any account can call the AssociateDelegationRequest API for the delegation request. Once this API call is successful, the ARN of the current calling identity will be stored as the ownerId and the Amazon Web Services account ID of the current calling identity will be stored as the ownerAccount of the request. For more details, see Managing Permissions for Delegation Requests.</td>
</tr>
<tr>
    <td><a href="#accept_delegation_request"><CopyableCode code="accept_delegation_request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DelegationRequestId"><code>DelegationRequestId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Accepts a delegation request, granting the requested temporary access. Once the delegation request is accepted, it is eligible to send the exchange token to the partner. The SendDelegationToken API has to be explicitly called to send the delegation token. At the time of acceptance, IAM records the details and the state of the identity that called this API. This is the identity that gets mapped to the delegated credential. An accepted request may be rejected before the exchange token is sent to the partner.</td>
</tr>
<tr>
    <td><a href="#reject_delegation_request"><CopyableCode code="reject_delegation_request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DelegationRequestId"><code>DelegationRequestId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Notes"><code>Notes</code></a></td>
    <td>Rejects a delegation request, denying the requested temporary access. Once a request is rejected, it cannot be accepted or updated later. Rejected requests expire after 7 days. When rejecting a request, an optional explanation can be added using the Notes request parameter. For more details, see Managing Permissions for Delegation Requests.</td>
</tr>
<tr>
    <td><a href="#send_delegation_token"><CopyableCode code="send_delegation_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DelegationRequestId"><code>DelegationRequestId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Sends the exchange token for an accepted delegation request. The exchange token is sent to the partner via an asynchronous notification channel, established by the partner. The delegation request must be in the ACCEPTED state when calling this API. After the SendDelegationToken API call is successful, the request transitions to a FINALIZED state and cannot be rolled back. However, a user may reject an accepted request before the SendDelegationToken API is called. For more details, see Managing Permissions for Delegation Requests.</td>
</tr>
<tr>
    <td><a href="#update_delegation_request"><CopyableCode code="update_delegation_request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DelegationRequestId"><code>DelegationRequestId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Notes"><code>Notes</code></a></td>
    <td>Updates an existing delegation request with additional information. When the delegation request is updated, it reaches the PENDING_APPROVAL state. Once a delegation request has an owner, that owner gets a default permission to update the delegation request. For more details, see Managing Permissions for Delegation Requests.</td>
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
<tr id="parameter-DelegationRequestId">
    <td><CopyableCode code="DelegationRequestId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the delegation request to update.</td>
</tr>
<tr id="parameter-NotificationChannel">
    <td><CopyableCode code="NotificationChannel" /></td>
    <td><code>string</code></td>
    <td>The notification channel for updates about the delegation request. At this time,only SNS topic ARNs are accepted for notification. This topic ARN must have a resource policy granting SNS:Publish permission to the IAM service principal (iam.amazonaws.com). See partner onboarding documentation for more details.</td>
</tr>
<tr id="parameter-RequestorWorkflowId">
    <td><CopyableCode code="RequestorWorkflowId" /></td>
    <td><code>string</code></td>
    <td>The workflow ID associated with the requestor. This is the unique identifier on the partner side that can be used to track the progress of the request. IAM maintains a uniqueness check on this workflow id for each request - if a workflow id for an existing request is passed, this API call will fail.</td>
</tr>
<tr id="parameter-SessionDuration">
    <td><CopyableCode code="SessionDuration" /></td>
    <td><code>integer</code></td>
    <td>The duration for which the delegated session should remain active, in seconds. The active time window for the session starts when the customer calls the SendDelegationToken API.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DelegationPermissionCheck">
    <td><CopyableCode code="DelegationPermissionCheck" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to perform a permission check for the delegation request. If set to true, the GetDelegationRequest API call will start a permission check process. This process calculates whether the caller has sufficient permissions to cover the asks from this delegation request. Setting this parameter to true does not guarantee an answer in the response. See the PermissionCheckStatus and the PermissionCheckResult response attributes for further details.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the delegation request.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, the number of items defaults to 100. Note that IAM may return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true, and Marker contains a value to include in the subsequent call that tells the service where to continue from.</td>
</tr>
<tr id="parameter-Notes">
    <td><CopyableCode code="Notes" /></td>
    <td><code>string</code></td>
    <td>Additional notes or comments to add to the delegation request.</td>
</tr>
<tr id="parameter-OnlySendByOwner">
    <td><CopyableCode code="OnlySendByOwner" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the delegation token should only be sent by the owner. This flag prevents any party other than the owner from calling SendDelegationToken API for this delegation request. This behavior becomes useful when the delegation request owner needs to be present for subsequent partner interactions, but the delegation request was sent to a more privileged user for approval due to the owner lacking sufficient delegation permissions.</td>
</tr>
<tr id="parameter-OwnerAccountId">
    <td><CopyableCode code="OwnerAccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID this delegation request is targeted to. If the account ID is not known, this parameter can be omitted, resulting in a request that can be associated by any account. If the account ID passed, then the created delegation request can only be associated with an identity of that target account.</td>
</tr>
<tr id="parameter-OwnerId">
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The owner ID to filter delegation requests by.</td>
</tr>
<tr id="parameter-Permissions">
    <td><CopyableCode code="Permissions" /></td>
    <td><code>object</code></td>
    <td>The permissions to be delegated in this delegation request.</td>
</tr>
<tr id="parameter-RedirectUrl">
    <td><CopyableCode code="RedirectUrl" /></td>
    <td><code>string</code></td>
    <td>The URL to redirect to after the delegation request is processed. This URL is used by the IAM console to show a link to the customer to re-load the partner workflow.</td>
</tr>
<tr id="parameter-RequestMessage">
    <td><CopyableCode code="RequestMessage" /></td>
    <td><code>string</code></td>
    <td>A message explaining the reason for the delegation request. Requesters can utilize this field to add a custom note to the delegation request. This field is different from the description such that this is to be utilized for a custom messaging on a case-by-case basis. For example, if the current delegation request is in response to a previous request being rejected, this explanation can be added to the request via this field.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_delegation_request"
    values={[
        { label: 'get_delegation_request', value: 'get_delegation_request' },
        { label: 'list_delegation_requests', value: 'list_delegation_requests' }
    ]}
>
<TabItem value="get_delegation_request">

Retrieves information about a specific delegation request. If a delegation request has no owner or owner account, GetDelegationRequest for that delegation request can be called by any account. If the owner account is assigned but there is no owner id, only identities within that owner account can call GetDelegationRequest for the delegation request. Once the delegation request is fully owned, the owner of the request gets a default permission to get that delegation request. For more details, see Managing Permissions for Delegation Requests.

```sql
SELECT
approver_id,
create_date,
delegation_request_id,
description,
expiration_time,
notes,
only_send_by_owner,
owner_account_id,
owner_id,
permission_policy,
permissions,
redirect_url,
rejection_reason,
request_message,
requestor_id,
requestor_name,
role_permission_restriction_arns,
session_duration,
state,
updated_time
FROM aws.iam.delegation_requests
WHERE DelegationRequestId = '{{ DelegationRequestId }}' -- required
AND region = '{{ region }}' -- required
AND DelegationPermissionCheck = '{{ DelegationPermissionCheck }}'
;
```
</TabItem>
<TabItem value="list_delegation_requests">

Lists delegation requests based on the specified criteria. If a delegation request has no owner, even if it is assigned to a specific account, it will not be part of the ListDelegationRequests output for that account. For more details, see Managing Permissions for Delegation Requests.

```sql
SELECT
approver_id,
create_date,
delegation_request_id,
description,
expiration_time,
notes,
only_send_by_owner,
owner_account_id,
owner_id,
permission_policy,
permissions,
redirect_url,
rejection_reason,
request_message,
requestor_id,
requestor_name,
role_permission_restriction_arns,
session_duration,
state,
updated_time
FROM aws.iam.delegation_requests
WHERE region = '{{ region }}' -- required
AND OwnerId = '{{ OwnerId }}'
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_delegation_request"
    values={[
        { label: 'create_delegation_request', value: 'create_delegation_request' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_delegation_request">

Creates an IAM delegation request for temporary access delegation. This API is not available for general use. In order to use this API, a caller first need to go through an onboarding process described in the partner onboarding documentation.

```sql
INSERT INTO aws.iam.delegation_requests (
RequestorWorkflowId,
NotificationChannel,
SessionDuration,
region,
OwnerAccountId,
Description,
Permissions,
RequestMessage,
RedirectUrl,
OnlySendByOwner
)
SELECT 
'{{ RequestorWorkflowId }}',
'{{ NotificationChannel }}',
'{{ SessionDuration }}',
'{{ region }}',
'{{ OwnerAccountId }}',
'{{ Description }}',
'{{ Permissions }}',
'{{ RequestMessage }}',
'{{ RedirectUrl }}',
'{{ OnlySendByOwner }}'
RETURNING
console_deep_link,
delegation_request_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: delegation_requests
  props:
    - name: RequestorWorkflowId
      value: "{{ RequestorWorkflowId }}"
      description: Required parameter for the delegation_requests resource.
    - name: NotificationChannel
      value: "{{ NotificationChannel }}"
      description: Required parameter for the delegation_requests resource.
    - name: SessionDuration
      value: {{ SessionDuration }}
      description: Required parameter for the delegation_requests resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the delegation_requests resource.
    - name: OwnerAccountId
      value: "{{ OwnerAccountId }}"
      description: The Amazon Web Services account ID this delegation request is targeted to. If the account ID is not known, this parameter can be omitted, resulting in a request that can be associated by any account. If the account ID passed, then the created delegation request can only be associated with an identity of that target account.
      description: The Amazon Web Services account ID this delegation request is targeted to. If the account ID is not known, this parameter can be omitted, resulting in a request that can be associated by any account. If the account ID passed, then the created delegation request can only be associated with an identity of that target account.
    - name: Description
      value: "{{ Description }}"
      description: A description of the delegation request.
      description: A description of the delegation request.
    - name: Permissions
      value: "{{ Permissions }}"
      description: The permissions to be delegated in this delegation request.
      description: The permissions to be delegated in this delegation request.
    - name: RequestMessage
      value: "{{ RequestMessage }}"
      description: A message explaining the reason for the delegation request. Requesters can utilize this field to add a custom note to the delegation request. This field is different from the description such that this is to be utilized for a custom messaging on a case-by-case basis. For example, if the current delegation request is in response to a previous request being rejected, this explanation can be added to the request via this field.
      description: A message explaining the reason for the delegation request. Requesters can utilize this field to add a custom note to the delegation request. This field is different from the description such that this is to be utilized for a custom messaging on a case-by-case basis. For example, if the current delegation request is in response to a previous request being rejected, this explanation can be added to the request via this field.
    - name: RedirectUrl
      value: "{{ RedirectUrl }}"
      description: The URL to redirect to after the delegation request is processed. This URL is used by the IAM console to show a link to the customer to re-load the partner workflow.
      description: The URL to redirect to after the delegation request is processed. This URL is used by the IAM console to show a link to the customer to re-load the partner workflow.
    - name: OnlySendByOwner
      value: {{ OnlySendByOwner }}
      description: Specifies whether the delegation token should only be sent by the owner. This flag prevents any party other than the owner from calling SendDelegationToken API for this delegation request. This behavior becomes useful when the delegation request owner needs to be present for subsequent partner interactions, but the delegation request was sent to a more privileged user for approval due to the owner lacking sufficient delegation permissions.
      description: Specifies whether the delegation token should only be sent by the owner. This flag prevents any party other than the owner from calling SendDelegationToken API for this delegation request. This behavior becomes useful when the delegation request owner needs to be present for subsequent partner interactions, but the delegation request was sent to a more privileged user for approval due to the owner lacking sufficient delegation permissions.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_delegation_request"
    values={[
        { label: 'associate_delegation_request', value: 'associate_delegation_request' }
    ]}
>
<TabItem value="associate_delegation_request">

Associates a delegation request with the current identity. If the partner that created the delegation request has specified the owner account during creation, only an identity from that owner account can call the AssociateDelegationRequest API for the specified delegation request. Once the AssociateDelegationRequest API call is successful, the ARN of the current calling identity will be stored as the ownerId of the request. If the partner that created the delegation request has not specified the owner account during creation, any caller from any account can call the AssociateDelegationRequest API for the delegation request. Once this API call is successful, the ARN of the current calling identity will be stored as the ownerId and the Amazon Web Services account ID of the current calling identity will be stored as the ownerAccount of the request. For more details, see Managing Permissions for Delegation Requests.

```sql
UPDATE aws.iam.delegation_requests
SET 
-- No updatable properties
WHERE 
DelegationRequestId = '{{ DelegationRequestId }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_delegation_request"
    values={[
        { label: 'accept_delegation_request', value: 'accept_delegation_request' },
        { label: 'reject_delegation_request', value: 'reject_delegation_request' },
        { label: 'send_delegation_token', value: 'send_delegation_token' },
        { label: 'update_delegation_request', value: 'update_delegation_request' }
    ]}
>
<TabItem value="accept_delegation_request">

Accepts a delegation request, granting the requested temporary access. Once the delegation request is accepted, it is eligible to send the exchange token to the partner. The SendDelegationToken API has to be explicitly called to send the delegation token. At the time of acceptance, IAM records the details and the state of the identity that called this API. This is the identity that gets mapped to the delegated credential. An accepted request may be rejected before the exchange token is sent to the partner.

```sql
EXEC aws.iam.delegation_requests.accept_delegation_request 
@DelegationRequestId='{{ DelegationRequestId }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="reject_delegation_request">

Rejects a delegation request, denying the requested temporary access. Once a request is rejected, it cannot be accepted or updated later. Rejected requests expire after 7 days. When rejecting a request, an optional explanation can be added using the Notes request parameter. For more details, see Managing Permissions for Delegation Requests.

```sql
EXEC aws.iam.delegation_requests.reject_delegation_request 
@DelegationRequestId='{{ DelegationRequestId }}' --required, 
@region='{{ region }}' --required, 
@Notes='{{ Notes }}'
;
```
</TabItem>
<TabItem value="send_delegation_token">

Sends the exchange token for an accepted delegation request. The exchange token is sent to the partner via an asynchronous notification channel, established by the partner. The delegation request must be in the ACCEPTED state when calling this API. After the SendDelegationToken API call is successful, the request transitions to a FINALIZED state and cannot be rolled back. However, a user may reject an accepted request before the SendDelegationToken API is called. For more details, see Managing Permissions for Delegation Requests.

```sql
EXEC aws.iam.delegation_requests.send_delegation_token 
@DelegationRequestId='{{ DelegationRequestId }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="update_delegation_request">

Updates an existing delegation request with additional information. When the delegation request is updated, it reaches the PENDING_APPROVAL state. Once a delegation request has an owner, that owner gets a default permission to update the delegation request. For more details, see Managing Permissions for Delegation Requests.

```sql
EXEC aws.iam.delegation_requests.update_delegation_request 
@DelegationRequestId='{{ DelegationRequestId }}' --required, 
@region='{{ region }}' --required, 
@Notes='{{ Notes }}'
;
```
</TabItem>
</Tabs>
