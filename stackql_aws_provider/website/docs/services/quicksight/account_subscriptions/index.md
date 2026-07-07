--- 
title: account_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - account_subscriptions
  - quicksight
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

Creates, updates, deletes, gets or lists an <code>account_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.account_subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_account_subscription"
    values={[
        { label: 'describe_account_subscription', value: 'describe_account_subscription' }
    ]}
>
<TabItem value="describe_account_subscription">

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
    <td><CopyableCode code="AccountInfo" /></td>
    <td><code>object</code></td>
    <td>A structure that contains the following elements: Your Quick Sight account name. The edition of Quick Sight that your account is using. The notification email address that is associated with the Amazon Quick Sight account. The authentication type of the Quick Sight account. The status of the Quick Sight account's subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
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
    <td><a href="#describe_account_subscription"><CopyableCode code="describe_account_subscription" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use the DescribeAccountSubscription operation to receive a description of an Quick Sight account's subscription. A successful API call returns an AccountInfo object that includes an account's name, subscription status, authentication type, edition, and notification email address.</td>
</tr>
<tr>
    <td><a href="#create_account_subscription"><CopyableCode code="create_account_subscription" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AuthenticationMethod"><code>AuthenticationMethod</code></a>, <a href="#parameter-AccountName"><code>AccountName</code></a>, <a href="#parameter-NotificationEmail"><code>NotificationEmail</code></a></td>
    <td></td>
    <td>Creates an Amazon Quick Sight account, or subscribes to Amazon Quick Sight Q. The Amazon Web Services Region for the account is derived from what is configured in the CLI or SDK. Before you use this operation, make sure that you can connect to an existing Amazon Web Services account. If you don't have an Amazon Web Services account, see Sign up for Amazon Web Services in the Amazon Quick Sight User Guide. The person who signs up for Amazon Quick Sight needs to have the correct Identity and Access Management (IAM) permissions. For more information, see IAM Policy Examples for Amazon Quick Sight in the Amazon Quick Sight User Guide. If your IAM policy includes both the Subscribe and CreateAccountSubscription actions, make sure that both actions are set to Allow. If either action is set to Deny, the Deny action prevails and your API call fails. You can't pass an existing IAM role to access other Amazon Web Services services using this API operation. To pass your existing IAM role to Amazon Quick Sight, see Passing IAM roles to Amazon Quick Sight in the Amazon Quick Sight User Guide. You can't set default resource access on the new account from the Amazon Quick Sight API. Instead, add default resource access from the Amazon Quick Sight console. For more information about setting default resource access to Amazon Web Services services, see Setting default resource access to Amazon Web Services services in the Amazon Quick Sight User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_account_subscription"><CopyableCode code="delete_account_subscription" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deleting your Quick Sight account subscription has permanent, irreversible consequences across all Amazon Web Services regions: Global deletion – Running this operation from any single region will delete your Quick Sight account and all data in every Amazon Web Services region where you have Quick Sight resources. Complete data loss – All dashboards, analyses, datasets, data sources, and custom visuals will be permanently deleted across all regions. Embedded content failure – All embedded dashboards and visuals in your applications will immediately stop working and display errors to end users. Shared resources removed – All shared dashboards, folders, and resources will become inaccessible to other users and external recipients. User access terminated – All Quick Sight users in your account will lose access immediately, including authors, readers, and administrators. No recovery possible – Once deleted, your Quick Sight account and all associated data cannot be restored. Consider exporting critical dashboards and data before proceeding with account deletion. Use the DeleteAccountSubscription operation to delete an Quick Sight account. This operation will result in an error message if you have configured your account termination protection settings to True. To change this setting and delete your account, call the UpdateAccountSettings API and set the value of the TerminationProtectionEnabled parameter to False, then make another call to the DeleteAccountSubscription API.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the account that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_account_subscription"
    values={[
        { label: 'describe_account_subscription', value: 'describe_account_subscription' }
    ]}
>
<TabItem value="describe_account_subscription">

Use the DescribeAccountSubscription operation to receive a description of an Quick Sight account's subscription. A successful API call returns an AccountInfo object that includes an account's name, subscription status, authentication type, edition, and notification email address.

```sql
SELECT
AccountInfo,
RequestId,
Status
FROM aws.quicksight.account_subscriptions
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_account_subscription"
    values={[
        { label: 'create_account_subscription', value: 'create_account_subscription' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_account_subscription">

Creates an Amazon Quick Sight account, or subscribes to Amazon Quick Sight Q. The Amazon Web Services Region for the account is derived from what is configured in the CLI or SDK. Before you use this operation, make sure that you can connect to an existing Amazon Web Services account. If you don't have an Amazon Web Services account, see Sign up for Amazon Web Services in the Amazon Quick Sight User Guide. The person who signs up for Amazon Quick Sight needs to have the correct Identity and Access Management (IAM) permissions. For more information, see IAM Policy Examples for Amazon Quick Sight in the Amazon Quick Sight User Guide. If your IAM policy includes both the Subscribe and CreateAccountSubscription actions, make sure that both actions are set to Allow. If either action is set to Deny, the Deny action prevails and your API call fails. You can't pass an existing IAM role to access other Amazon Web Services services using this API operation. To pass your existing IAM role to Amazon Quick Sight, see Passing IAM roles to Amazon Quick Sight in the Amazon Quick Sight User Guide. You can't set default resource access on the new account from the Amazon Quick Sight API. Instead, add default resource access from the Amazon Quick Sight console. For more information about setting default resource access to Amazon Web Services services, see Setting default resource access to Amazon Web Services services in the Amazon Quick Sight User Guide.

```sql
INSERT INTO aws.quicksight.account_subscriptions (
Edition,
AuthenticationMethod,
AccountName,
NotificationEmail,
ActiveDirectoryName,
Realm,
DirectoryId,
AdminGroup,
AuthorGroup,
ReaderGroup,
AdminProGroup,
AuthorProGroup,
ReaderProGroup,
FirstName,
LastName,
EmailAddress,
ContactNumber,
IAMIdentityCenterInstanceArn,
aws_account_id,
region
)
SELECT 
'{{ Edition }}',
'{{ AuthenticationMethod }}' /* required */,
'{{ AccountName }}' /* required */,
'{{ NotificationEmail }}' /* required */,
'{{ ActiveDirectoryName }}',
'{{ Realm }}',
'{{ DirectoryId }}',
'{{ AdminGroup }}',
'{{ AuthorGroup }}',
'{{ ReaderGroup }}',
'{{ AdminProGroup }}',
'{{ AuthorProGroup }}',
'{{ ReaderProGroup }}',
'{{ FirstName }}',
'{{ LastName }}',
'{{ EmailAddress }}',
'{{ ContactNumber }}',
'{{ IAMIdentityCenterInstanceArn }}',
'{{ aws_account_id }}',
'{{ region }}'
RETURNING
RequestId,
SignupResponse,
Status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: account_subscriptions
  props:
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the account_subscriptions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the account_subscriptions resource.
    - name: Edition
      value: "{{ Edition }}"
      valid_values: ['STANDARD', 'ENTERPRISE', 'ENTERPRISE_AND_Q']
    - name: AuthenticationMethod
      value: "{{ AuthenticationMethod }}"
      valid_values: ['IAM_AND_QUICKSIGHT', 'IAM_ONLY', 'ACTIVE_DIRECTORY', 'IAM_IDENTITY_CENTER']
    - name: AccountName
      value: "{{ AccountName }}"
    - name: NotificationEmail
      value: "{{ NotificationEmail }}"
    - name: ActiveDirectoryName
      value: "{{ ActiveDirectoryName }}"
    - name: Realm
      value: "{{ Realm }}"
    - name: DirectoryId
      value: "{{ DirectoryId }}"
    - name: AdminGroup
      value:
        - "{{ AdminGroup }}"
    - name: AuthorGroup
      value:
        - "{{ AuthorGroup }}"
    - name: ReaderGroup
      value:
        - "{{ ReaderGroup }}"
    - name: AdminProGroup
      value:
        - "{{ AdminProGroup }}"
    - name: AuthorProGroup
      value:
        - "{{ AuthorProGroup }}"
    - name: ReaderProGroup
      value:
        - "{{ ReaderProGroup }}"
    - name: FirstName
      value: "{{ FirstName }}"
    - name: LastName
      value: "{{ LastName }}"
    - name: EmailAddress
      value: "{{ EmailAddress }}"
    - name: ContactNumber
      value: "{{ ContactNumber }}"
    - name: IAMIdentityCenterInstanceArn
      value: "{{ IAMIdentityCenterInstanceArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_account_subscription"
    values={[
        { label: 'delete_account_subscription', value: 'delete_account_subscription' }
    ]}
>
<TabItem value="delete_account_subscription">

Deleting your Quick Sight account subscription has permanent, irreversible consequences across all Amazon Web Services regions: Global deletion – Running this operation from any single region will delete your Quick Sight account and all data in every Amazon Web Services region where you have Quick Sight resources. Complete data loss – All dashboards, analyses, datasets, data sources, and custom visuals will be permanently deleted across all regions. Embedded content failure – All embedded dashboards and visuals in your applications will immediately stop working and display errors to end users. Shared resources removed – All shared dashboards, folders, and resources will become inaccessible to other users and external recipients. User access terminated – All Quick Sight users in your account will lose access immediately, including authors, readers, and administrators. No recovery possible – Once deleted, your Quick Sight account and all associated data cannot be restored. Consider exporting critical dashboards and data before proceeding with account deletion. Use the DeleteAccountSubscription operation to delete an Quick Sight account. This operation will result in an error message if you have configured your account termination protection settings to True. To change this setting and delete your account, call the UpdateAccountSettings API and set the value of the TerminationProtectionEnabled parameter to False, then make another call to the DeleteAccountSubscription API.

```sql
DELETE FROM aws.quicksight.account_subscriptions
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
