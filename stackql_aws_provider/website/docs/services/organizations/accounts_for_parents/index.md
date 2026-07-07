--- 
title: accounts_for_parents
hide_title: false
hide_table_of_contents: false
keywords:
  - accounts_for_parents
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

Creates, updates, deletes, gets or lists an <code>accounts_for_parents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="accounts_for_parents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.organizations.accounts_for_parents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_accounts_for_parent"
    values={[
        { label: 'list_accounts_for_parent', value: 'list_accounts_for_parent' }
    ]}
>
<TabItem value="list_accounts_for_parent">

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
    <td><a href="#list_accounts_for_parent"><CopyableCode code="list_accounts_for_parent" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the accounts in an organization that are contained by the specified target root or organizational unit (OU). If you specify the root, you get a list of all the accounts that aren't in any OU. If you specify an OU, you get a list of all the accounts in only that OU and not in any child OUs. To get a list of all accounts in the organization, use the ListAccounts operation. When calling List* operations, always check the NextToken response parameter value, even if you receive an empty result set. These operations can occasionally return an empty set of results even when more results are available. Continue making requests until NextToken returns null. A null NextToken value indicates that you have retrieved all available results. You can only call this operation from the management account or a member account that is a delegated administrator.</td>
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
    defaultValue="list_accounts_for_parent"
    values={[
        { label: 'list_accounts_for_parent', value: 'list_accounts_for_parent' }
    ]}
>
<TabItem value="list_accounts_for_parent">

Lists the accounts in an organization that are contained by the specified target root or organizational unit (OU). If you specify the root, you get a list of all the accounts that aren't in any OU. If you specify an OU, you get a list of all the accounts in only that OU and not in any child OUs. To get a list of all accounts in the organization, use the ListAccounts operation. When calling List* operations, always check the NextToken response parameter value, even if you receive an empty result set. These operations can occasionally return an empty set of results even when more results are available. Continue making requests until NextToken returns null. A null NextToken value indicates that you have retrieved all available results. You can only call this operation from the management account or a member account that is a delegated administrator.

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
FROM aws.organizations.accounts_for_parents
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
