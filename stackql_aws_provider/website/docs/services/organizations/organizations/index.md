--- 
title: organizations
hide_title: false
hide_table_of_contents: false
keywords:
  - organizations
  - organizations
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

Creates, updates, deletes, gets or lists an <code>organizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.organizations.organizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_organization"
    values={[
        { label: 'describe_organization', value: 'describe_organization' }
    ]}
>
<TabItem value="describe_organization">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an organization. For more information about ARNs in Organizations, see ARN Formats Supported by Organizations in the Amazon Web Services Service Authorization Reference. (pattern: &lt;code&gt;^arn:aws:organizations::\d&#123;12&#125;:organization\/o-&#91;a-z0-9&#93;&#123;10,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="available_policy_types" /></td>
    <td><code>array</code></td>
    <td>Do not use. This field is deprecated and doesn't provide complete information about the policies in your organization. To determine the policies that are enabled and available for use in your organization, use the ListRoots operation instead.</td>
</tr>
<tr>
    <td><CopyableCode code="feature_set" /></td>
    <td><code>string</code></td>
    <td>Specifies the functionality that currently is available to the organization. If set to "ALL", then all features are enabled and policies can be applied to accounts in the organization. If set to "CONSOLIDATED_BILLING", then only consolidated billing functionality is available. For more information, see Enabling all features in your organization in the Organizations User Guide. (ALL, CONSOLIDATED_BILLING)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (ID) of an organization. The regex pattern for an organization ID string requires "o-" followed by from 10 to 32 lowercase letters or digits. (pattern: &lt;code&gt;^o-&#91;a-z0-9&#93;&#123;10,32&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="master_account_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the account that is designated as the management account for the organization. For more information about ARNs in Organizations, see ARN Formats Supported by Organizations in the Amazon Web Services Service Authorization Reference. (pattern: &lt;code&gt;^arn:aws:organizations::\d&#123;12&#125;:account\/o-&#91;a-z0-9&#93;&#123;10,32&#125;\/\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="master_account_email" /></td>
    <td><code>string</code></td>
    <td>The email address that is associated with the Amazon Web Services account that is designated as the management account for the organization. (pattern: &lt;code&gt;&#91;^\s@&#93;+@&#91;^\s@&#93;+\.&#91;^\s@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="master_account_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (ID) of the management account of an organization. The regex pattern for an account ID string requires exactly 12 digits. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#describe_organization"><CopyableCode code="describe_organization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the organization that the user's account belongs to. You can call this operation from any account in a organization. Even if a policy type is shown as available in the organization, you can disable it separately at the root level with DisablePolicyType. Use ListRoots to see the status of policy types for a specified root.</td>
</tr>
<tr>
    <td><a href="#create_organization"><CopyableCode code="create_organization" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an Amazon Web Services organization. The account whose user is calling the CreateOrganization operation automatically becomes the management account of the new organization. This operation must be called using credentials from the account that is to become the new organization's management account. The principal must also have the relevant IAM permissions. By default (or if you set the FeatureSet parameter to ALL), the new organization is created with all features enabled and service control policies automatically enabled in the root. If you instead choose to create the organization supporting only the consolidated billing features by setting the FeatureSet parameter to CONSOLIDATED_BILLING, no policy types are enabled by default and you can't use organization policies. The AccountJoinedOrganization event is logged in CloudTrail and is available only in the management account's event history. This event includes joinedMethod:INVITED and joinedTime fields to provide context on how and when the account joined the organization.</td>
</tr>
<tr>
    <td><a href="#remove_account_from_organization"><CopyableCode code="remove_account_from_organization" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccountId"><code>AccountId</code></a></td>
    <td></td>
    <td>Removes the specified account from the organization. The removed account becomes a standalone account that isn't a member of any organization. It's no longer subject to any policies and is responsible for its own bill payments. The organization's management account is no longer charged for any expenses accrued by the member account after it's removed from the organization. You can only call this operation from the management account. Member accounts can remove themselves with LeaveOrganization instead. When an account is removed from an organization, Organizations logs a membership event in CloudTrail. The event is an AccountDepartedOrganization event with departureMethod:REMOVED and departureTime. This event is available only in the management account's event history. You can remove an account from your organization only if the account is configured with the information required to operate as a standalone account. When you create an account in an organization using the Organizations console, API, or CLI commands, the information required of standalone accounts is not automatically collected. For more information, see Considerations before removing an account from an organization in the Organizations User Guide. The account that you want to leave must not be a delegated administrator account for any Amazon Web Services service enabled for your organization. If the account is a delegated administrator, you must first change the delegated administrator account to another account that is remaining in the organization. After the account leaves the organization, all tags that were attached to the account object in the organization are deleted. Amazon Web Services accounts outside of an organization do not support tags.</td>
</tr>
<tr>
    <td><a href="#delete_organization"><CopyableCode code="delete_organization" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the organization. You can delete an organization only by using credentials from the management account. The organization must be empty of member accounts. When an organization is deleted, Organizations logs a membership event in CloudTrail. The event is an AccountDepartedOrganization event with departureMethod:LEFT and departureTime. This event is available only in the management account's event history.</td>
</tr>
<tr>
    <td><a href="#invite_account_to_organization"><CopyableCode code="invite_account_to_organization" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Target"><code>Target</code></a></td>
    <td></td>
    <td>Sends an invitation to another account to join your organization as a member account. Organizations sends email on your behalf to the email address that is associated with the other account's owner. The invitation is implemented as a Handshake whose details are in the response. If you receive an exception that indicates that you exceeded your account limits for the organization or that the operation failed because your organization is still initializing, wait one hour and then try again. If the error persists after an hour, contact Amazon Web Services Support. If the request includes tags, then the requester must have the organizations:TagResource permission. You can only call this operation from the management account.</td>
</tr>
<tr>
    <td><a href="#leave_organization"><CopyableCode code="leave_organization" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a member account from its parent organization. This version of the operation is performed by the account that wants to leave. To remove a member account as a user in the management account, use RemoveAccountFromOrganization instead. You can only call from operation from a member account. When an account leaves an organization, Organizations logs a membership event in CloudTrail. The event is an AccountDepartedOrganization event with departureMethod:LEFT and departureTime. This event is available only in the management account's event history. The management account in an organization with all features enabled can set service control policies (SCPs) that can restrict what administrators of member accounts can do. This includes preventing them from successfully calling LeaveOrganization and leaving the organization. You can leave an organization as a member account only if the account is configured with the information required to operate as a standalone account. When you create an account in an organization using the Organizations console, API, or CLI commands, the information required of standalone accounts is not automatically collected. For each account that you want to make standalone, you must perform the following steps. If any of the steps are already completed for this account, that step doesn't appear. Choose a support plan Provide and verify the required contact information Provide a current payment method Amazon Web Services uses the payment method to charge for any billable (not free tier) Amazon Web Services activity that occurs while the account isn't attached to an organization. For more information, see Considerations before removing an account from an organization in the Organizations User Guide. The account that you want to leave must not be a delegated administrator account for any Amazon Web Services service enabled for your organization. If the account is a delegated administrator, you must first change the delegated administrator account to another account that is remaining in the organization. After the account leaves the organization, all tags that were attached to the account object in the organization are deleted. Amazon Web Services accounts outside of an organization do not support tags. A newly created account has a waiting period before it can be removed from its organization. You must wait until at least four days after the account was created. Invited accounts aren't subject to this waiting period. If you are using an organization principal to call LeaveOrganization across multiple accounts, you can only do this up to 5 accounts per second in a single organization.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_organization"
    values={[
        { label: 'describe_organization', value: 'describe_organization' }
    ]}
>
<TabItem value="describe_organization">

Retrieves information about the organization that the user's account belongs to. You can call this operation from any account in a organization. Even if a policy type is shown as available in the organization, you can disable it separately at the root level with DisablePolicyType. Use ListRoots to see the status of policy types for a specified root.

```sql
SELECT
arn,
available_policy_types,
feature_set,
id,
master_account_arn,
master_account_email,
master_account_id
FROM aws.organizations.organizations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_organization"
    values={[
        { label: 'create_organization', value: 'create_organization' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_organization">

Creates an Amazon Web Services organization. The account whose user is calling the CreateOrganization operation automatically becomes the management account of the new organization. This operation must be called using credentials from the account that is to become the new organization's management account. The principal must also have the relevant IAM permissions. By default (or if you set the FeatureSet parameter to ALL), the new organization is created with all features enabled and service control policies automatically enabled in the root. If you instead choose to create the organization supporting only the consolidated billing features by setting the FeatureSet parameter to CONSOLIDATED_BILLING, no policy types are enabled by default and you can't use organization policies. The AccountJoinedOrganization event is logged in CloudTrail and is available only in the management account's event history. This event includes joinedMethod:INVITED and joinedTime fields to provide context on how and when the account joined the organization.

```sql
INSERT INTO aws.organizations.organizations (
FeatureSet,
region
)
SELECT 
'{{ FeatureSet }}',
'{{ region }}'
RETURNING
organization
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: organizations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the organizations resource.
    - name: FeatureSet
      value: "{{ FeatureSet }}"
      description: |
        Specifies the feature set supported by the new organization. Each feature set supports different levels of functionality. CONSOLIDATED_BILLING: All member accounts have their bills consolidated to and paid by the management account. For more information, see Consolidated billing in the Organizations User Guide. The consolidated billing feature subset isn't available for organizations in the Amazon Web Services GovCloud (US) Region. ALL: In addition to all the features supported by the consolidated billing feature set, the management account can also apply any policy type to any member account in the organization. For more information, see All features in the Organizations User Guide.
      valid_values: ['ALL', 'CONSOLIDATED_BILLING']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="remove_account_from_organization"
    values={[
        { label: 'remove_account_from_organization', value: 'remove_account_from_organization' }
    ]}
>
<TabItem value="remove_account_from_organization">

Removes the specified account from the organization. The removed account becomes a standalone account that isn't a member of any organization. It's no longer subject to any policies and is responsible for its own bill payments. The organization's management account is no longer charged for any expenses accrued by the member account after it's removed from the organization. You can only call this operation from the management account. Member accounts can remove themselves with LeaveOrganization instead. When an account is removed from an organization, Organizations logs a membership event in CloudTrail. The event is an AccountDepartedOrganization event with departureMethod:REMOVED and departureTime. This event is available only in the management account's event history. You can remove an account from your organization only if the account is configured with the information required to operate as a standalone account. When you create an account in an organization using the Organizations console, API, or CLI commands, the information required of standalone accounts is not automatically collected. For more information, see Considerations before removing an account from an organization in the Organizations User Guide. The account that you want to leave must not be a delegated administrator account for any Amazon Web Services service enabled for your organization. If the account is a delegated administrator, you must first change the delegated administrator account to another account that is remaining in the organization. After the account leaves the organization, all tags that were attached to the account object in the organization are deleted. Amazon Web Services accounts outside of an organization do not support tags.

```sql
UPDATE aws.organizations.organizations
SET 
AccountId = '{{ AccountId }}'
WHERE 
region = '{{ region }}' --required
AND AccountId = '{{ AccountId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_organization"
    values={[
        { label: 'delete_organization', value: 'delete_organization' }
    ]}
>
<TabItem value="delete_organization">

Deletes the organization. You can delete an organization only by using credentials from the management account. The organization must be empty of member accounts. When an organization is deleted, Organizations logs a membership event in CloudTrail. The event is an AccountDepartedOrganization event with departureMethod:LEFT and departureTime. This event is available only in the management account's event history.

```sql
DELETE FROM aws.organizations.organizations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="invite_account_to_organization"
    values={[
        { label: 'invite_account_to_organization', value: 'invite_account_to_organization' },
        { label: 'leave_organization', value: 'leave_organization' }
    ]}
>
<TabItem value="invite_account_to_organization">

Sends an invitation to another account to join your organization as a member account. Organizations sends email on your behalf to the email address that is associated with the other account's owner. The invitation is implemented as a Handshake whose details are in the response. If you receive an exception that indicates that you exceeded your account limits for the organization or that the operation failed because your organization is still initializing, wait one hour and then try again. If the error persists after an hour, contact Amazon Web Services Support. If the request includes tags, then the requester must have the organizations:TagResource permission. You can only call this operation from the management account.

```sql
EXEC aws.organizations.organizations.invite_account_to_organization 
@region='{{ region }}' --required 
@@json=
'{
"Target": "{{ Target }}", 
"Notes": "{{ Notes }}", 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
<TabItem value="leave_organization">

Removes a member account from its parent organization. This version of the operation is performed by the account that wants to leave. To remove a member account as a user in the management account, use RemoveAccountFromOrganization instead. You can only call from operation from a member account. When an account leaves an organization, Organizations logs a membership event in CloudTrail. The event is an AccountDepartedOrganization event with departureMethod:LEFT and departureTime. This event is available only in the management account's event history. The management account in an organization with all features enabled can set service control policies (SCPs) that can restrict what administrators of member accounts can do. This includes preventing them from successfully calling LeaveOrganization and leaving the organization. You can leave an organization as a member account only if the account is configured with the information required to operate as a standalone account. When you create an account in an organization using the Organizations console, API, or CLI commands, the information required of standalone accounts is not automatically collected. For each account that you want to make standalone, you must perform the following steps. If any of the steps are already completed for this account, that step doesn't appear. Choose a support plan Provide and verify the required contact information Provide a current payment method Amazon Web Services uses the payment method to charge for any billable (not free tier) Amazon Web Services activity that occurs while the account isn't attached to an organization. For more information, see Considerations before removing an account from an organization in the Organizations User Guide. The account that you want to leave must not be a delegated administrator account for any Amazon Web Services service enabled for your organization. If the account is a delegated administrator, you must first change the delegated administrator account to another account that is remaining in the organization. After the account leaves the organization, all tags that were attached to the account object in the organization are deleted. Amazon Web Services accounts outside of an organization do not support tags. A newly created account has a waiting period before it can be removed from its organization. You must wait until at least four days after the account was created. Invited accounts aren't subject to this waiting period. If you are using an organization principal to call LeaveOrganization across multiple accounts, you can only do this up to 5 accounts per second in a single organization.

```sql
EXEC aws.organizations.organizations.leave_organization 
@region='{{ region }}' --required 
;
```
</TabItem>
</Tabs>
