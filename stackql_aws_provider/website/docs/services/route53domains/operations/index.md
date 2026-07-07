--- 
title: operations
hide_title: false
hide_table_of_contents: false
keywords:
  - operations
  - route53domains
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

Creates, updates, deletes, gets or lists an <code>operations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="operations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53domains.operations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_operations"
    values={[
        { label: 'list_operations', value: 'list_operations' }
    ]}
>
<TabItem value="list_operations">

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
    <td><CopyableCode code="DomainName" /></td>
    <td><code>string</code></td>
    <td>Name of the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the last change was made in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>Message about the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="OperationId" /></td>
    <td><code>string</code></td>
    <td>Identifier returned to track the requested action.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the requested operation in the system. (SUBMITTED, IN_PROGRESS, ERROR, SUCCESSFUL, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusFlag" /></td>
    <td><code>string</code></td>
    <td>Automatically checks whether there are no outstanding operations on domains that need customer attention. Valid values are: PENDING_ACCEPTANCE: The operation is waiting for acceptance from the account that is receiving the domain. PENDING_CUSTOMER_ACTION: The operation is waiting for customer action, for example, returning an email. PENDING_AUTHORIZATION: The operation is waiting for the form of authorization. For more information, see ResendOperationAuthorization. PENDING_PAYMENT_VERIFICATION: The operation is waiting for the payment method to validate. PENDING_SUPPORT_CASE: The operation includes a support case and is waiting for its resolution. (PENDING_ACCEPTANCE, PENDING_CUSTOMER_ACTION, PENDING_AUTHORIZATION, PENDING_PAYMENT_VERIFICATION, PENDING_SUPPORT_CASE)</td>
</tr>
<tr>
    <td><CopyableCode code="SubmittedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the request was submitted.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>Type of the action requested. (REGISTER_DOMAIN, DELETE_DOMAIN, TRANSFER_IN_DOMAIN, UPDATE_DOMAIN_CONTACT, UPDATE_NAMESERVER, CHANGE_PRIVACY_PROTECTION, DOMAIN_LOCK, ENABLE_AUTORENEW, DISABLE_AUTORENEW, ADD_DNSSEC, REMOVE_DNSSEC, EXPIRE_DOMAIN, TRANSFER_OUT_DOMAIN, CHANGE_DOMAIN_OWNER, RENEW_DOMAIN, PUSH_DOMAIN, INTERNAL_TRANSFER_OUT_DOMAIN, INTERNAL_TRANSFER_IN_DOMAIN, RELEASE_TO_GANDI, TRANSFER_ON_RENEW, RESTORE_DOMAIN)</td>
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
    <td><a href="#list_operations"><CopyableCode code="list_operations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about all of the operations that return an operation ID and that have ever been performed on domains that were registered by the current account. This command runs only in the us-east-1 Region.</td>
</tr>
<tr>
    <td><a href="#resend_operation_authorization"><CopyableCode code="resend_operation_authorization" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OperationId"><code>OperationId</code></a></td>
    <td></td>
    <td>Resend the form of authorization email for this operation.</td>
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
    defaultValue="list_operations"
    values={[
        { label: 'list_operations', value: 'list_operations' }
    ]}
>
<TabItem value="list_operations">

Returns information about all of the operations that return an operation ID and that have ever been performed on domains that were registered by the current account. This command runs only in the us-east-1 Region.

```sql
SELECT
DomainName,
LastUpdatedDate,
Message,
OperationId,
Status,
StatusFlag,
SubmittedDate,
Type
FROM aws.route53domains.operations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="resend_operation_authorization"
    values={[
        { label: 'resend_operation_authorization', value: 'resend_operation_authorization' }
    ]}
>
<TabItem value="resend_operation_authorization">

Resend the form of authorization email for this operation.

```sql
EXEC aws.route53domains.operations.resend_operation_authorization 
@region='{{ region }}' --required 
@@json=
'{
"OperationId": "{{ OperationId }}"
}'
;
```
</TabItem>
</Tabs>
