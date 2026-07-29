--- 
title: create_account_status
hide_title: false
hide_table_of_contents: false
keywords:
  - create_account_status
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

Creates, updates, deletes, gets or lists a <code>create_account_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="create_account_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.organizations.create_account_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_create_account_status"
    values={[
        { label: 'describe_create_account_status', value: 'describe_create_account_status' },
        { label: 'list_create_account_status', value: 'list_create_account_status' }
    ]}
>
<TabItem value="describe_create_account_status">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>If the account was created successfully, the unique identifier (ID) of the new account. The regex pattern for an account ID string requires exactly 12 digits. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="account_name" /></td>
    <td><code>string</code></td>
    <td>The account name given to the account when it was created. (pattern: &lt;code&gt;&#91;\u0020-\u007E&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="completed_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the account was created and the request completed.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>If the request failed, a description of the reason for the failure. ACCOUNT_LIMIT_EXCEEDED: The account couldn't be created because you reached the limit on the number of accounts in your organization. CONCURRENT_ACCOUNT_MODIFICATION: You already submitted a request with the same information. EMAIL_ALREADY_EXISTS: The account could not be created because another Amazon Web Services account with that email address already exists. FAILED_BUSINESS_VALIDATION: The Amazon Web Services account that owns your organization failed to receive business license validation. GOVCLOUD_ACCOUNT_ALREADY_EXISTS: The account in the Amazon Web Services GovCloud (US) Region could not be created because this Region already includes an account with that email address. IDENTITY_INVALID_BUSINESS_VALIDATION: The Amazon Web Services account that owns your organization can't complete business license validation because it doesn't have valid identity data. INVALID_ADDRESS: The account could not be created because the address you provided is not valid. INVALID_EMAIL: The account could not be created because the email address you provided is not valid. INVALID_PAYMENT_INSTRUMENT: The Amazon Web Services account that owns your organization does not have a supported payment method associated with the account. Amazon Web Services does not support cards issued by financial institutions in Russia or Belarus. For more information, see Managing your Amazon Web Services payments. INTERNAL_FAILURE: The account could not be created because of an internal failure. Try again later. If the problem persists, contact Amazon Web Services Customer Support. MISSING_BUSINESS_VALIDATION: The Amazon Web Services account that owns your organization has not received Business Validation. MISSING_PAYMENT_INSTRUMENT: You must configure the management account with a valid payment method, such as a credit card. PENDING_BUSINESS_VALIDATION: The Amazon Web Services account that owns your organization is still in the process of completing business license validation. UNKNOWN_BUSINESS_VALIDATION: The Amazon Web Services account that owns your organization has an unknown issue with business license validation. (ACCOUNT_LIMIT_EXCEEDED, EMAIL_ALREADY_EXISTS, INVALID_ADDRESS, INVALID_EMAIL, CONCURRENT_ACCOUNT_MODIFICATION, INTERNAL_FAILURE, GOVCLOUD_ACCOUNT_ALREADY_EXISTS, MISSING_BUSINESS_VALIDATION, FAILED_BUSINESS_VALIDATION, PENDING_BUSINESS_VALIDATION, INVALID_IDENTITY_FOR_BUSINESS_VALIDATION, UNKNOWN_BUSINESS_VALIDATION, MISSING_PAYMENT_INSTRUMENT, INVALID_PAYMENT_INSTRUMENT, UPDATE_EXISTING_RESOURCE_POLICY_WITH_TAGS_NOT_SUPPORTED)</td>
</tr>
<tr>
    <td><CopyableCode code="gov_cloud_account_id" /></td>
    <td><code>string</code></td>
    <td>If the account was created successfully, the ID for the new account in the Amazon Web Services GovCloud (US) Region. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (ID) that references this request. You get this value from the response of the initial CreateAccount request to create the account. The regex pattern for a create account request ID string requires "car-" followed by from 8 to 32 lowercase letters or digits. (pattern: &lt;code&gt;^car-&#91;a-z0-9&#93;&#123;8,32&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="requested_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the request was made for the account creation.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The status of the asynchronous request to create an Amazon Web Services account. (IN_PROGRESS, SUCCEEDED, FAILED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_create_account_status">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>If the account was created successfully, the unique identifier (ID) of the new account. The regex pattern for an account ID string requires exactly 12 digits. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="account_name" /></td>
    <td><code>string</code></td>
    <td>The account name given to the account when it was created. (pattern: &lt;code&gt;&#91;\u0020-\u007E&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="completed_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the account was created and the request completed.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>If the request failed, a description of the reason for the failure. ACCOUNT_LIMIT_EXCEEDED: The account couldn't be created because you reached the limit on the number of accounts in your organization. CONCURRENT_ACCOUNT_MODIFICATION: You already submitted a request with the same information. EMAIL_ALREADY_EXISTS: The account could not be created because another Amazon Web Services account with that email address already exists. FAILED_BUSINESS_VALIDATION: The Amazon Web Services account that owns your organization failed to receive business license validation. GOVCLOUD_ACCOUNT_ALREADY_EXISTS: The account in the Amazon Web Services GovCloud (US) Region could not be created because this Region already includes an account with that email address. IDENTITY_INVALID_BUSINESS_VALIDATION: The Amazon Web Services account that owns your organization can't complete business license validation because it doesn't have valid identity data. INVALID_ADDRESS: The account could not be created because the address you provided is not valid. INVALID_EMAIL: The account could not be created because the email address you provided is not valid. INVALID_PAYMENT_INSTRUMENT: The Amazon Web Services account that owns your organization does not have a supported payment method associated with the account. Amazon Web Services does not support cards issued by financial institutions in Russia or Belarus. For more information, see Managing your Amazon Web Services payments. INTERNAL_FAILURE: The account could not be created because of an internal failure. Try again later. If the problem persists, contact Amazon Web Services Customer Support. MISSING_BUSINESS_VALIDATION: The Amazon Web Services account that owns your organization has not received Business Validation. MISSING_PAYMENT_INSTRUMENT: You must configure the management account with a valid payment method, such as a credit card. PENDING_BUSINESS_VALIDATION: The Amazon Web Services account that owns your organization is still in the process of completing business license validation. UNKNOWN_BUSINESS_VALIDATION: The Amazon Web Services account that owns your organization has an unknown issue with business license validation. (ACCOUNT_LIMIT_EXCEEDED, EMAIL_ALREADY_EXISTS, INVALID_ADDRESS, INVALID_EMAIL, CONCURRENT_ACCOUNT_MODIFICATION, INTERNAL_FAILURE, GOVCLOUD_ACCOUNT_ALREADY_EXISTS, MISSING_BUSINESS_VALIDATION, FAILED_BUSINESS_VALIDATION, PENDING_BUSINESS_VALIDATION, INVALID_IDENTITY_FOR_BUSINESS_VALIDATION, UNKNOWN_BUSINESS_VALIDATION, MISSING_PAYMENT_INSTRUMENT, INVALID_PAYMENT_INSTRUMENT, UPDATE_EXISTING_RESOURCE_POLICY_WITH_TAGS_NOT_SUPPORTED)</td>
</tr>
<tr>
    <td><CopyableCode code="gov_cloud_account_id" /></td>
    <td><code>string</code></td>
    <td>If the account was created successfully, the ID for the new account in the Amazon Web Services GovCloud (US) Region. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (ID) that references this request. You get this value from the response of the initial CreateAccount request to create the account. The regex pattern for a create account request ID string requires "car-" followed by from 8 to 32 lowercase letters or digits. (pattern: &lt;code&gt;^car-&#91;a-z0-9&#93;&#123;8,32&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="requested_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the request was made for the account creation.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The status of the asynchronous request to create an Amazon Web Services account. (IN_PROGRESS, SUCCEEDED, FAILED)</td>
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
    <td><a href="#describe_create_account_status"><CopyableCode code="describe_create_account_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the current status of an asynchronous request to create an account. You can only call this operation from the management account or a member account that is a delegated administrator.</td>
</tr>
<tr>
    <td><a href="#list_create_account_status"><CopyableCode code="list_create_account_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the account creation requests that match the specified status that is currently being tracked for the organization. When calling List* operations, always check the NextToken response parameter value, even if you receive an empty result set. These operations can occasionally return an empty set of results even when more results are available. Continue making requests until NextToken returns null. A null NextToken value indicates that you have retrieved all available results. You can only call this operation from the management account or a member account that is a delegated administrator.</td>
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
    defaultValue="describe_create_account_status"
    values={[
        { label: 'describe_create_account_status', value: 'describe_create_account_status' },
        { label: 'list_create_account_status', value: 'list_create_account_status' }
    ]}
>
<TabItem value="describe_create_account_status">

Retrieves the current status of an asynchronous request to create an account. You can only call this operation from the management account or a member account that is a delegated administrator.

```sql
SELECT
account_id,
account_name,
completed_timestamp,
failure_reason,
gov_cloud_account_id,
id,
requested_timestamp,
state
FROM aws.organizations.create_account_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_create_account_status">

Lists the account creation requests that match the specified status that is currently being tracked for the organization. When calling List* operations, always check the NextToken response parameter value, even if you receive an empty result set. These operations can occasionally return an empty set of results even when more results are available. Continue making requests until NextToken returns null. A null NextToken value indicates that you have retrieved all available results. You can only call this operation from the management account or a member account that is a delegated administrator.

```sql
SELECT
account_id,
account_name,
completed_timestamp,
failure_reason,
gov_cloud_account_id,
id,
requested_timestamp,
state
FROM aws.organizations.create_account_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
