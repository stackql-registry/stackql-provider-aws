--- 
title: accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - accounts
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

Creates, updates, deletes, gets or lists an <code>accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.organizations.accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_account"
    values={[
        { label: 'describe_account', value: 'describe_account' },
        { label: 'list_accounts', value: 'list_accounts' }
    ]}
>
<TabItem value="describe_account">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the account. For more information about ARNs in Organizations, see ARN Formats Supported by Organizations in the Amazon Web Services Service Authorization Reference. (pattern: &lt;code&gt;^arn:aws:organizations::\d&#123;12&#125;:account\/o-&#91;a-z0-9&#93;&#123;10,32&#125;\/\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Email" /></td>
    <td><code>string</code></td>
    <td>The email address associated with the Amazon Web Services account. The regex pattern for this parameter is a string of characters that represents a standard internet email address. (pattern: &lt;code&gt;&#91;^\s@&#93;+@&#91;^\s@&#93;+\.&#91;^\s@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (ID) of the account. The regex pattern for an account ID string requires exactly 12 digits. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="JoinedMethod" /></td>
    <td><code>string</code></td>
    <td>The method by which the account joined the organization. (INVITED, CREATED)</td>
</tr>
<tr>
    <td><CopyableCode code="JoinedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the account became a part of the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The friendly name of the account. The regex pattern that is used to validate this parameter is a string of any of the characters in the ASCII character range. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Paths" /></td>
    <td><code>array</code></td>
    <td>The paths in the organization where the account exists.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>Each state represents a specific phase in the account lifecycle. Use this information to manage account access, automate workflows, or trigger actions based on account state changes. For more information about account states and their implications, see Monitor the state of your Amazon Web Services accounts in the Organizations User Guide. (PENDING_ACTIVATION, ACTIVE, SUSPENDED, PENDING_CLOSURE, CLOSED)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the account in the organization. The Status parameter in the Account object will be retired on September 9, 2026. Although both the account State and account Status parameters are currently available in the Organizations APIs (DescribeAccount, ListAccounts, ListAccountsForParent), we recommend that you update your scripts or other code to use the State parameter instead of Status before September 9, 2026. (ACTIVE, SUSPENDED, PENDING_CLOSURE)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_accounts">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the account. For more information about ARNs in Organizations, see ARN Formats Supported by Organizations in the Amazon Web Services Service Authorization Reference. (pattern: &lt;code&gt;^arn:aws:organizations::\d&#123;12&#125;:account\/o-&#91;a-z0-9&#93;&#123;10,32&#125;\/\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Email" /></td>
    <td><code>string</code></td>
    <td>The email address associated with the Amazon Web Services account. The regex pattern for this parameter is a string of characters that represents a standard internet email address. (pattern: &lt;code&gt;&#91;^\s@&#93;+@&#91;^\s@&#93;+\.&#91;^\s@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (ID) of the account. The regex pattern for an account ID string requires exactly 12 digits. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="JoinedMethod" /></td>
    <td><code>string</code></td>
    <td>The method by which the account joined the organization. (INVITED, CREATED)</td>
</tr>
<tr>
    <td><CopyableCode code="JoinedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the account became a part of the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The friendly name of the account. The regex pattern that is used to validate this parameter is a string of any of the characters in the ASCII character range. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Paths" /></td>
    <td><code>array</code></td>
    <td>The paths in the organization where the account exists.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>Each state represents a specific phase in the account lifecycle. Use this information to manage account access, automate workflows, or trigger actions based on account state changes. For more information about account states and their implications, see Monitor the state of your Amazon Web Services accounts in the Organizations User Guide. (PENDING_ACTIVATION, ACTIVE, SUSPENDED, PENDING_CLOSURE, CLOSED)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the account in the organization. The Status parameter in the Account object will be retired on September 9, 2026. Although both the account State and account Status parameters are currently available in the Organizations APIs (DescribeAccount, ListAccounts, ListAccountsForParent), we recommend that you update your scripts or other code to use the State parameter instead of Status before September 9, 2026. (ACTIVE, SUSPENDED, PENDING_CLOSURE)</td>
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
    <td><a href="#describe_account"><CopyableCode code="describe_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves Organizations-related information about the specified account. You can only call this operation from the management account or a member account that is a delegated administrator.</td>
</tr>
<tr>
    <td><a href="#list_accounts"><CopyableCode code="list_accounts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the accounts in the organization. To request only the accounts in a specified root or organizational unit (OU), use the ListAccountsForParent operation instead. When calling List* operations, always check the NextToken response parameter value, even if you receive an empty result set. These operations can occasionally return an empty set of results even when more results are available. Continue making requests until NextToken returns null. A null NextToken value indicates that you have retrieved all available results. You can only call this operation from the management account or a member account that is a delegated administrator.</td>
</tr>
<tr>
    <td><a href="#create_account"><CopyableCode code="create_account" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccountName"><code>AccountName</code></a></td>
    <td></td>
    <td>Creates an Amazon Web Services account that is automatically a member of the organization whose credentials made the request. This is an asynchronous request that Amazon Web Services performs in the background. Because CreateAccount operates asynchronously, it can return a successful completion message even though account initialization might still be in progress. You might need to wait a few minutes before you can successfully access the account. To check the status of the request, do one of the following: Use the Id value of the CreateAccountStatus response element from this operation to provide as a parameter to the DescribeCreateAccountStatus operation. Check the CloudTrail log for the CreateAccountResult event. For information on using CloudTrail with Organizations, see Logging and monitoring in Organizations in the Organizations User Guide. The user who calls the API to create an account must have the organizations:CreateAccount permission. If you enabled all features in the organization, Organizations creates the required service-linked role named AWSServiceRoleForOrganizations. For more information, see Organizations and service-linked roles in the Organizations User Guide. If the request includes tags, then the requester must have the organizations:TagResource permission. Organizations preconfigures the new member account with a role (named OrganizationAccountAccessRole by default) that grants users in the management account administrator permissions in the new member account. Principals in the management account can assume the role. Organizations clones the company name and address information for the new account from the organization's management account. You can only call this operation from the management account. For more information about creating accounts, see Creating a member account in your organization in the Organizations User Guide. When you create an account in an organization using the Organizations console, API, or CLI commands, the information required for the account to operate as a standalone account, such as a payment method is not automatically collected. If you must remove an account from your organization later, you can do so only after you provide the missing information. For more information, see Considerations before removing an account from an organization in the Organizations User Guide. If you get an exception that indicates that you exceeded your account limits for the organization, contact Amazon Web Services Support. If you get an exception that indicates that the operation failed because your organization is still initializing, wait one hour and then try again. If the error persists, contact Amazon Web Services Support. It isn't recommended to use CreateAccount to create multiple temporary accounts, and using the CreateAccount API to close accounts is subject to a 30-day usage quota. For information on the requirements and process for closing an account, see Closing a member account in your organization in the Organizations User Guide. When you create a member account with this operation, you can choose whether to create the account with the IAM User and Role Access to Billing Information switch enabled. If you enable it, IAM users and roles that have appropriate permissions can view billing information for the account. If you disable it, only the account root user can access billing information. For information about how to disable this switch for an account, see Granting access to your billing information and tools.</td>
</tr>
<tr>
    <td><a href="#close_account"><CopyableCode code="close_account" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccountId"><code>AccountId</code></a></td>
    <td></td>
    <td>Closes an Amazon Web Services member account within an organization. You can close an account when all features are enabled . You can't close the management account with this API. This is an asynchronous request that Amazon Web Services performs in the background. Because CloseAccount operates asynchronously, it can return a successful completion message even though account closure might still be in progress. You need to wait a few minutes before the account is fully closed. To check the status of the request, do one of the following: Use the AccountId that you sent in the CloseAccount request to provide as a parameter to the DescribeAccount operation. While the close account request is in progress, Account status will indicate PENDING_CLOSURE. When the close account request completes, the status will change to SUSPENDED. Check the CloudTrail log for the CloseAccountResult event that gets published after the account closes successfully. For information on using CloudTrail with Organizations, see Logging and monitoring in Organizations in the Organizations User Guide. Resources remaining within the account after closing will be automatically deleted after 90 days. During this 90-day period, the resources won't be available unless you contact Amazon Web Services Support to reopen the account. After 90 days, you can't reopen an account. You might still receive a bill after account closure. Within a rolling 30 day period you can close the higher of either 250 or 20% of the member accounts in your organization, up to a maximum of 1,000. This quota is not bound by a calendar month, but starts when you close an account. After you reach this limit, you can't close additional accounts. For more information, see Closing a member account in your organization and Quotas for Organizations in the Organizations User Guide. To reinstate a closed account, contact Amazon Web Services Support within the 90-day grace period while the account is in SUSPENDED status. If the Amazon Web Services account you attempt to close is linked to an Amazon Web Services GovCloud (US) account, the CloseAccount request will close both accounts. To learn important pre-closure details, see Closing an Amazon Web Services GovCloud (US) account in the Amazon Web Services GovCloud User Guide.</td>
</tr>
<tr>
    <td><a href="#create_gov_cloud_account"><CopyableCode code="create_gov_cloud_account" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccountName"><code>AccountName</code></a></td>
    <td></td>
    <td>This action is available if all of the following are true: You're authorized to create accounts in the Amazon Web Services GovCloud (US) Region. For more information on the Amazon Web Services GovCloud (US) Region, see the Amazon Web Services GovCloud User Guide. You already have an account in the Amazon Web Services GovCloud (US) Region that is paired with a management account of an organization in the commercial Region. You call this action from the management account of your organization in the commercial Region. You have the organizations:CreateGovCloudAccount permission. Organizations automatically creates the required service-linked role named AWSServiceRoleForOrganizations. For more information, see Organizations and service-linked roles in the Organizations User Guide. Amazon Web Services automatically enables CloudTrail for Amazon Web Services GovCloud (US) accounts, but you should also do the following: Verify that CloudTrail is enabled to store logs. Create an Amazon S3 bucket for CloudTrail log storage. For more information, see Verifying CloudTrail Is Enabled in the Amazon Web Services GovCloud User Guide. If the request includes tags, then the requester must have the organizations:TagResource permission. The tags are attached to the commercial account associated with the GovCloud account, rather than the GovCloud account itself. To add tags to the GovCloud account, call the TagResource operation in the GovCloud Region after the new GovCloud account exists. You call this action from the management account of your organization in the commercial Region to create a standalone Amazon Web Services account in the Amazon Web Services GovCloud (US) Region. After the account is created, the management account of an organization in the Amazon Web Services GovCloud (US) Region can invite it to that organization. For more information on inviting standalone accounts in the Amazon Web Services GovCloud (US) to join an organization, see Organizations in the Amazon Web Services GovCloud User Guide. Calling CreateGovCloudAccount is an asynchronous request that Amazon Web Services performs in the background. Because CreateGovCloudAccount operates asynchronously, it can return a successful completion message even though account initialization might still be in progress. You might need to wait a few minutes before you can successfully access the account. To check the status of the request, do one of the following: Use the OperationId response element from this operation to provide as a parameter to the DescribeCreateAccountStatus operation. Check the CloudTrail log for the CreateAccountResult event. For information on using CloudTrail with Organizations, see Logging and monitoring in Organizations in the Organizations User Guide. When you call the CreateGovCloudAccount action, you create two accounts: a standalone account in the Amazon Web Services GovCloud (US) Region and an associated account in the commercial Region for billing and support purposes. The account in the commercial Region is automatically a member of the organization whose credentials made the request. Both accounts are associated with the same email address. A role is created in the new account in the commercial Region that allows the management account in the organization in the commercial Region to assume it. An Amazon Web Services GovCloud (US) account is then created and associated with the commercial account that you just created. A role is also created in the new Amazon Web Services GovCloud (US) account that can be assumed by the Amazon Web Services GovCloud (US) account that is associated with the management account of the commercial organization. For more information and to view a diagram that explains how account access works, see Organizations in the Amazon Web Services GovCloud User Guide. For more information about creating accounts, see Creating a member account in your organization in the Organizations User Guide. When you create an account in an organization using the Organizations console, API, or CLI commands, the information required for the account to operate as a standalone account is not automatically collected. This includes a payment method and signing the end user license agreement (EULA). If you must remove an account from your organization later, you can do so only after you provide the missing information. For more information, see Considerations before removing an account from an organization in the Organizations User Guide. If you get an exception that indicates that you exceeded your account limits for the organization, contact Amazon Web Services Support. If you get an exception that indicates that the operation failed because your organization is still initializing, wait one hour and then try again. If the error persists, contact Amazon Web Services Support. Using CreateGovCloudAccount to create multiple temporary accounts isn't recommended. You can only close an account from the Amazon Web Services Billing and Cost Management console, and you must be signed in as the root user. For information on the requirements and process for closing an account, see Closing a member account in your organization in the Organizations User Guide. When you create a member account with this operation, you can choose whether to create the account with the IAM User and Role Access to Billing Information switch enabled. If you enable it, IAM users and roles that have appropriate permissions can view billing information for the account. If you disable it, only the account root user can access billing information. For information about how to disable this switch for an account, see Granting access to your billing information and tools.</td>
</tr>
<tr>
    <td><a href="#move_account"><CopyableCode code="move_account" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccountId"><code>AccountId</code></a>, <a href="#parameter-SourceParentId"><code>SourceParentId</code></a>, <a href="#parameter-DestinationParentId"><code>DestinationParentId</code></a></td>
    <td></td>
    <td>Moves an account from its current source parent root or organizational unit (OU) to the specified destination parent root or OU. You can only call this operation from the management account.</td>
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
    defaultValue="describe_account"
    values={[
        { label: 'describe_account', value: 'describe_account' },
        { label: 'list_accounts', value: 'list_accounts' }
    ]}
>
<TabItem value="describe_account">

Retrieves Organizations-related information about the specified account. You can only call this operation from the management account or a member account that is a delegated administrator.

```sql
SELECT
Arn,
Email,
Id,
JoinedMethod,
JoinedTimestamp,
Name,
Paths,
State,
Status
FROM aws.organizations.accounts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_accounts">

Lists all the accounts in the organization. To request only the accounts in a specified root or organizational unit (OU), use the ListAccountsForParent operation instead. When calling List* operations, always check the NextToken response parameter value, even if you receive an empty result set. These operations can occasionally return an empty set of results even when more results are available. Continue making requests until NextToken returns null. A null NextToken value indicates that you have retrieved all available results. You can only call this operation from the management account or a member account that is a delegated administrator.

```sql
SELECT
Arn,
Email,
Id,
JoinedMethod,
JoinedTimestamp,
Name,
Paths,
State,
Status
FROM aws.organizations.accounts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_account"
    values={[
        { label: 'create_account', value: 'create_account' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_account">

Creates an Amazon Web Services account that is automatically a member of the organization whose credentials made the request. This is an asynchronous request that Amazon Web Services performs in the background. Because CreateAccount operates asynchronously, it can return a successful completion message even though account initialization might still be in progress. You might need to wait a few minutes before you can successfully access the account. To check the status of the request, do one of the following: Use the Id value of the CreateAccountStatus response element from this operation to provide as a parameter to the DescribeCreateAccountStatus operation. Check the CloudTrail log for the CreateAccountResult event. For information on using CloudTrail with Organizations, see Logging and monitoring in Organizations in the Organizations User Guide. The user who calls the API to create an account must have the organizations:CreateAccount permission. If you enabled all features in the organization, Organizations creates the required service-linked role named AWSServiceRoleForOrganizations. For more information, see Organizations and service-linked roles in the Organizations User Guide. If the request includes tags, then the requester must have the organizations:TagResource permission. Organizations preconfigures the new member account with a role (named OrganizationAccountAccessRole by default) that grants users in the management account administrator permissions in the new member account. Principals in the management account can assume the role. Organizations clones the company name and address information for the new account from the organization's management account. You can only call this operation from the management account. For more information about creating accounts, see Creating a member account in your organization in the Organizations User Guide. When you create an account in an organization using the Organizations console, API, or CLI commands, the information required for the account to operate as a standalone account, such as a payment method is not automatically collected. If you must remove an account from your organization later, you can do so only after you provide the missing information. For more information, see Considerations before removing an account from an organization in the Organizations User Guide. If you get an exception that indicates that you exceeded your account limits for the organization, contact Amazon Web Services Support. If you get an exception that indicates that the operation failed because your organization is still initializing, wait one hour and then try again. If the error persists, contact Amazon Web Services Support. It isn't recommended to use CreateAccount to create multiple temporary accounts, and using the CreateAccount API to close accounts is subject to a 30-day usage quota. For information on the requirements and process for closing an account, see Closing a member account in your organization in the Organizations User Guide. When you create a member account with this operation, you can choose whether to create the account with the IAM User and Role Access to Billing Information switch enabled. If you enable it, IAM users and roles that have appropriate permissions can view billing information for the account. If you disable it, only the account root user can access billing information. For information about how to disable this switch for an account, see Granting access to your billing information and tools.

```sql
INSERT INTO aws.organizations.accounts (
Email,
AccountName,
RoleName,
IamUserAccessToBilling,
Tags,
region
)
SELECT 
'{{ Email }}',
'{{ AccountName }}' /* required */,
'{{ RoleName }}',
'{{ IamUserAccessToBilling }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
CreateAccountStatus
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: accounts
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the accounts resource.
    - name: Email
      value: "{{ Email }}"
      description: |
        The email address of the owner to assign to the new member account. This email address must not already be associated with another Amazon Web Services account. You must use a valid email address to complete account creation. The rules for a valid email address: The address must be a minimum of 6 and a maximum of 64 characters long. All characters must be 7-bit ASCII characters. There must be one and only one @ symbol, which separates the local name from the domain name. The local name can't contain any of the following characters: whitespace, " ' ( ) < > [ ] : ; , \ | % & The local name can't begin with a dot (.) The domain name can consist of only the characters [a-z],[A-Z],[0-9], hyphen (-), or dot (.) The domain name can't begin or end with a hyphen (-) or dot (.) The domain name must contain at least one dot You can't access the root user of the account or remove an account that was created with an invalid email address.
    - name: AccountName
      value: "{{ AccountName }}"
      description: |
        The friendly name of the member account.
    - name: RoleName
      value: "{{ RoleName }}"
      description: |
        The name of an IAM role that Organizations automatically preconfigures in the new member account. This role trusts the management account, allowing users in the management account to assume the role, as permitted by the management account administrator. The role has administrator permissions in the new member account. If you don't specify this parameter, the role name defaults to OrganizationAccountAccessRole. For more information about how to use this role to access the member account, see the following links: Creating the OrganizationAccountAccessRole in an invited member account in the Organizations User Guide Steps 2 and 3 in IAM Tutorial: Delegate access across Amazon Web Services accounts using IAM roles in the IAM User Guide The regex pattern that is used to validate this parameter. The pattern can include uppercase letters, lowercase letters, digits with no spaces, and any of the following characters: =,.@-
    - name: IamUserAccessToBilling
      value: "{{ IamUserAccessToBilling }}"
      description: |
        If set to ALLOW, the new account enables IAM users to access account billing information if they have the required permissions. If set to DENY, only the root user of the new account can access account billing information. For more information, see About IAM access to the Billing and Cost Management console in the Amazon Web Services Billing and Cost Management User Guide. If you don't specify this parameter, the value defaults to ALLOW, and IAM users and roles with the required permissions can access billing information for the new account.
      valid_values: ['ALLOW', 'DENY']
    - name: Tags
      description: |
        A list of tags that you want to attach to the newly created account. For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can't set it to null. For more information about tagging, see Tagging Organizations resources in the Organizations User Guide. If any one of the tags is not valid or if you exceed the maximum allowed number of tags for an account, then the entire request fails and the account is not created.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="close_account"
    values={[
        { label: 'close_account', value: 'close_account' },
        { label: 'create_gov_cloud_account', value: 'create_gov_cloud_account' },
        { label: 'move_account', value: 'move_account' }
    ]}
>
<TabItem value="close_account">

Closes an Amazon Web Services member account within an organization. You can close an account when all features are enabled . You can't close the management account with this API. This is an asynchronous request that Amazon Web Services performs in the background. Because CloseAccount operates asynchronously, it can return a successful completion message even though account closure might still be in progress. You need to wait a few minutes before the account is fully closed. To check the status of the request, do one of the following: Use the AccountId that you sent in the CloseAccount request to provide as a parameter to the DescribeAccount operation. While the close account request is in progress, Account status will indicate PENDING_CLOSURE. When the close account request completes, the status will change to SUSPENDED. Check the CloudTrail log for the CloseAccountResult event that gets published after the account closes successfully. For information on using CloudTrail with Organizations, see Logging and monitoring in Organizations in the Organizations User Guide. Resources remaining within the account after closing will be automatically deleted after 90 days. During this 90-day period, the resources won't be available unless you contact Amazon Web Services Support to reopen the account. After 90 days, you can't reopen an account. You might still receive a bill after account closure. Within a rolling 30 day period you can close the higher of either 250 or 20% of the member accounts in your organization, up to a maximum of 1,000. This quota is not bound by a calendar month, but starts when you close an account. After you reach this limit, you can't close additional accounts. For more information, see Closing a member account in your organization and Quotas for Organizations in the Organizations User Guide. To reinstate a closed account, contact Amazon Web Services Support within the 90-day grace period while the account is in SUSPENDED status. If the Amazon Web Services account you attempt to close is linked to an Amazon Web Services GovCloud (US) account, the CloseAccount request will close both accounts. To learn important pre-closure details, see Closing an Amazon Web Services GovCloud (US) account in the Amazon Web Services GovCloud User Guide.

```sql
EXEC aws.organizations.accounts.close_account 
@region='{{ region }}' --required 
@@json=
'{
"AccountId": "{{ AccountId }}"
}'
;
```
</TabItem>
<TabItem value="create_gov_cloud_account">

This action is available if all of the following are true: You're authorized to create accounts in the Amazon Web Services GovCloud (US) Region. For more information on the Amazon Web Services GovCloud (US) Region, see the Amazon Web Services GovCloud User Guide. You already have an account in the Amazon Web Services GovCloud (US) Region that is paired with a management account of an organization in the commercial Region. You call this action from the management account of your organization in the commercial Region. You have the organizations:CreateGovCloudAccount permission. Organizations automatically creates the required service-linked role named AWSServiceRoleForOrganizations. For more information, see Organizations and service-linked roles in the Organizations User Guide. Amazon Web Services automatically enables CloudTrail for Amazon Web Services GovCloud (US) accounts, but you should also do the following: Verify that CloudTrail is enabled to store logs. Create an Amazon S3 bucket for CloudTrail log storage. For more information, see Verifying CloudTrail Is Enabled in the Amazon Web Services GovCloud User Guide. If the request includes tags, then the requester must have the organizations:TagResource permission. The tags are attached to the commercial account associated with the GovCloud account, rather than the GovCloud account itself. To add tags to the GovCloud account, call the TagResource operation in the GovCloud Region after the new GovCloud account exists. You call this action from the management account of your organization in the commercial Region to create a standalone Amazon Web Services account in the Amazon Web Services GovCloud (US) Region. After the account is created, the management account of an organization in the Amazon Web Services GovCloud (US) Region can invite it to that organization. For more information on inviting standalone accounts in the Amazon Web Services GovCloud (US) to join an organization, see Organizations in the Amazon Web Services GovCloud User Guide. Calling CreateGovCloudAccount is an asynchronous request that Amazon Web Services performs in the background. Because CreateGovCloudAccount operates asynchronously, it can return a successful completion message even though account initialization might still be in progress. You might need to wait a few minutes before you can successfully access the account. To check the status of the request, do one of the following: Use the OperationId response element from this operation to provide as a parameter to the DescribeCreateAccountStatus operation. Check the CloudTrail log for the CreateAccountResult event. For information on using CloudTrail with Organizations, see Logging and monitoring in Organizations in the Organizations User Guide. When you call the CreateGovCloudAccount action, you create two accounts: a standalone account in the Amazon Web Services GovCloud (US) Region and an associated account in the commercial Region for billing and support purposes. The account in the commercial Region is automatically a member of the organization whose credentials made the request. Both accounts are associated with the same email address. A role is created in the new account in the commercial Region that allows the management account in the organization in the commercial Region to assume it. An Amazon Web Services GovCloud (US) account is then created and associated with the commercial account that you just created. A role is also created in the new Amazon Web Services GovCloud (US) account that can be assumed by the Amazon Web Services GovCloud (US) account that is associated with the management account of the commercial organization. For more information and to view a diagram that explains how account access works, see Organizations in the Amazon Web Services GovCloud User Guide. For more information about creating accounts, see Creating a member account in your organization in the Organizations User Guide. When you create an account in an organization using the Organizations console, API, or CLI commands, the information required for the account to operate as a standalone account is not automatically collected. This includes a payment method and signing the end user license agreement (EULA). If you must remove an account from your organization later, you can do so only after you provide the missing information. For more information, see Considerations before removing an account from an organization in the Organizations User Guide. If you get an exception that indicates that you exceeded your account limits for the organization, contact Amazon Web Services Support. If you get an exception that indicates that the operation failed because your organization is still initializing, wait one hour and then try again. If the error persists, contact Amazon Web Services Support. Using CreateGovCloudAccount to create multiple temporary accounts isn't recommended. You can only close an account from the Amazon Web Services Billing and Cost Management console, and you must be signed in as the root user. For information on the requirements and process for closing an account, see Closing a member account in your organization in the Organizations User Guide. When you create a member account with this operation, you can choose whether to create the account with the IAM User and Role Access to Billing Information switch enabled. If you enable it, IAM users and roles that have appropriate permissions can view billing information for the account. If you disable it, only the account root user can access billing information. For information about how to disable this switch for an account, see Granting access to your billing information and tools.

```sql
EXEC aws.organizations.accounts.create_gov_cloud_account 
@region='{{ region }}' --required 
@@json=
'{
"Email": "{{ Email }}", 
"AccountName": "{{ AccountName }}", 
"RoleName": "{{ RoleName }}", 
"IamUserAccessToBilling": "{{ IamUserAccessToBilling }}", 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
<TabItem value="move_account">

Moves an account from its current source parent root or organizational unit (OU) to the specified destination parent root or OU. You can only call this operation from the management account.

```sql
EXEC aws.organizations.accounts.move_account 
@region='{{ region }}' --required 
@@json=
'{
"AccountId": "{{ AccountId }}", 
"SourceParentId": "{{ SourceParentId }}", 
"DestinationParentId": "{{ DestinationParentId }}"
}'
;
```
</TabItem>
</Tabs>
